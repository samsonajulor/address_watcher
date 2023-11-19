import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { customAlphabet } from 'nanoid';
import dictionary from 'nanoid-dictionary';
import { env, sendEmail, logger } from './utils/index.ts';
import { saveCache, cacheExists, getCache } from './db/cache.ts';

const app = express();

const PORT = env.PORT || 6998;

const { numbers } = dictionary;

const nanoid = customAlphabet(numbers, 6);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.post('/register', (req, res) => {
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

app.post('/validate-otp', (req, res) => {
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

    return res.status(200).json({ message: 'Access Granted.' });
  } catch (error: any) {
    logger('error', error.message || error.toString());
    return res.status(500).json({ error: error.message || 'something really bad happened.' });
  }
});

app.listen(PORT, () => {
  logger('info', `Server running on port ${PORT}`);
});
