import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import errorhandler from 'errorhandler';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import { env } from './config';
import routes from './routes';

const production = env.NODE_ENV === 'LIVE';

const app = express();

app.use(cors());
app.use(helmet());
app.use(cookieParser());

app.use(morgan('combined'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.set('trust proxy', 1);

app.use(
  rateLimit({
    // Limit each IP to 50 requests for every minute.
    windowMs: 1 * 60 * 1000,
    max: 50,
    message: 'Too many requests from this IP, please try again after an hour.',
  })
);

if (!production) {
  app.use(errorhandler());
}

app.use(express.static('assets'));
app.use('/api', routes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use((err: any, req: Request, res: Response) => {
  res.status(400).send({
    success: false,
    message: err.message,
  });
});

export default app;
