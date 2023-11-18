import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { env, sendEmail, logger } from './utils/index.ts';
import { saveCache, cacheExists } from './db/cache.ts';

const app = express();

const PORT = env.PORT || 66660;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.post('/register', (req, res) => {
  try {
    const { email } = req.body;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    if (cacheExists(email)) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    saveCache(email, email);
    return res.status(200).json({ message: 'Email saved successfully' });
  } catch (error: any) {
    logger('error', error.message || error.toString());
    return res.status(500).json({ error: error.message || 'something really bad happened.' });
  }
});

app.listen(PORT, () => {
  logger('info', `Server running on port ${PORT}`);
});
