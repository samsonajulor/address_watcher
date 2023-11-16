import { configDotenv } from 'dotenv';
import nodemailer from 'nodemailer';

configDotenv();

const config = {
  service: process.env.NODEMAILER_SERVICE,
  host: process.env.NODEMAILER_HOST,
  port: Number(process.env.NODEMAILER_PORT),
  secure: !!Number(process.env.NODEMAILER_SECURE),
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
};

export const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport(config);
  try {
    const info = await transporter.sendMail({
      from: `"${process.env.NODEMAILER_NAME}" <${process.env.NODEMAILER_EMAIL}>`,
      to,
      subject,
      html,
      // context: {
      //   name: name,
      // },
      // may have to set handlebar to call {name} in html
    });
    console.log(`mail sent to ${to}`);
    return info;
  } catch (error) {
    console.log(error);
    return error;
  }
};
