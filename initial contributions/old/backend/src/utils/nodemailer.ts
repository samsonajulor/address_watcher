import nodemailer from 'nodemailer';
import { env, logger } from '../config';

const {
  NODEMAILER_SERVICE,
  NODEMAILER_HOST,
  NODEMAILER_PORT,
  NODEMAILER_SECURE,
  NODEMAILER_EMAIL,
  NODEMAILER_PASSWORD,
  NODEMAILER_NAME,
} = env;

const config = {
  service: NODEMAILER_SERVICE,
  host: NODEMAILER_HOST,
  port: Number(NODEMAILER_PORT),
  secure: !!Number(NODEMAILER_SECURE),
  auth: {
    user: NODEMAILER_EMAIL,
    pass: NODEMAILER_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const info = await transporter.sendMail({
      from: `"${NODEMAILER_NAME}" <${NODEMAILER_EMAIL}>`,
      to,
      subject,
      html,
    });
    logger('info', `Message sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.log(error);
    return error;
  }
};
