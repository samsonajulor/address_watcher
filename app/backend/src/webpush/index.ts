import webpush from 'web-push';
import { env } from '../utils/index.ts';

webpush.setVapidDetails(
  `mailto:${env.NODEMAILER_EMAIL as string}`,
  env.PUB_VAPID_KEY as string,
  env.PRV_VAPID_KEY as string
);

export { webpush as webPushInstance };
