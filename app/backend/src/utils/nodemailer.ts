import nodemailer from 'nodemailer';
import CONSTANTS from './constants.ts';

const config = {
  service: CONSTANTS.NODEMAILER_SERVICE,
  host: CONSTANTS.NODEMAILER_HOST,
  port: Number(CONSTANTS.NODEMAILER_PORT),
  secure: !!Number(CONSTANTS.NODEMAILER_SECURE),
  auth: {
    user: CONSTANTS.NODEMAILER_EMAIL,
    pass: CONSTANTS.NODEMAILER_PASSWORD,
  },
};

const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport(config);
  try {
    const info = await transporter.sendMail({
      from: `"${CONSTANTS.NODEMAILER_NAME}" <${CONSTANTS.NODEMAILER_EMAIL}>`,
      to,
      subject,
      html,
    });
    console.log(`mail sent to ${to}`);
    return info;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default sendEmail;
