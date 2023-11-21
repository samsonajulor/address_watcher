import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import session from 'express-session';
import { customAlphabet } from 'nanoid';
import dictionary from 'nanoid-dictionary';
import { env, sendEmail, logger } from './utils/index.ts';
import { saveCache, cacheExists, getCache } from './db/cache.ts';
import { webPushInstance } from './webpush/index.ts';

const app = express();

const PORT = env.PORT || 6998;

const { numbers } = dictionary;

const nanoid = customAlphabet(numbers, 6);

const twentyFourHours = 1000 * 60 * 60 * 24;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(
  session({
    secret: env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: twentyFourHours },
  })
);

app.post('/register', (req: Request, res: Response) => {
  try {
    const otp = nanoid();
    const { email } = req.body;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    saveCache(String(otp), email);

    let message = `Your verification code is ${otp}`;
    sendEmail(email, 'Email Verification', message);

    return res.status(200).json({ message: 'Otp has been sent. Please check your email.', otp });
  } catch (error: any) {
    logger('error', error.message || error.toString());
    return res.status(500).json({ error: error.message || 'something really bad happened.' });
  }
});

app.post('/validate-otp', (req: Request, res: Response) => {
  try {
    const { otp, email } = req.body;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    if (!otp) {
      return res.status(400).json({ error: 'Invalid otp. You will need to generate one.' });
    }

    const otpInCache = cacheExists(String(otp));

    const otpData = getCache(otp) as unknown as string;

    logger('is otp in cache?', JSON.stringify(otpInCache));

    if (!otpInCache || otpData !== email) {
      return res.status(400).json({ error: 'Invalid otp. You will need to generate one.' });
    }

    res.locals.session = { ...req.session, email, otp, time: Date.now() };

    return res.status(200).json({ message: 'Access Granted.' });
  } catch (error: any) {
    logger('error', error.message || error.toString());
    return res.status(500).json({ error: error.message || 'something really bad happened.' });
  }
});

app.get('/session', (req: Request, res: Response) => {
  try {
    const currentTime = Date.now();
    const session = res.locals.session;
    if (currentTime - session.time > twentyFourHours || !session) {
      return res.status(400).json({ error: 'Session expired. You will need to generate one.' });
    }
    return res.status(200).json({ message: 'Access Granted.' });
  } catch (error: any) {
    logger('error', error.message || error.toString());
    return res.status(500).json({ error: error.message || 'something really bad happened.' });
  }
});

app.get('/logout', (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        logger('error', err.message || err.toString());
      }
    });
    return res.status(200).json({ message: 'Session destroyed.' });
  } catch (error: any) {
    logger('error', error.message || error.toString());
    return res.status(500).json({ error: error.message || 'something really bad happened.' });
  }
});

app.post('/enable_push', async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    if (!payload) {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    const { subscription, address } = JSON.parse(payload);

    if (!subscription) {
      return res.status(400).json({ error: 'Invalid subscription' });
    }

    if (!address) {
      return res.status(400).json({ error: 'Invalid address' });
    }

    saveCache(address as string, subscription);

    return res.status(200).json({ message: `Notification enabled for ${address}` });
  } catch (error: any) {
    logger('error', error.message || error.toString());
    return res.status(500).json({ error: error.message || 'something really bad happened.' });
  }
});

app.listen(PORT, () => {
  logger('info', `Server running on port ${PORT}`);
});
