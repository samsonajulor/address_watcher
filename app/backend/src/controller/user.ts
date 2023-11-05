import { Request, Response } from 'express';
import { GenericAnyType, ResponseCode, StatusCode } from '../@types';
import { Toolbox, sendEmail } from '../utils';
import { env, logger } from '../config';
import { customAlphabet } from 'nanoid';
import { numbers } from 'nanoid-dictionary';

const nanoid = customAlphabet(numbers, 6); // sample random number for otp if needed

// import needed stuff from toolbox

export async function getOTP(req: Request, res: Response) {
  try {
    const otp = nanoid();

    const message = `Hello, your OTP is ${otp}`;

    await sendEmail('samsonajulor@gmail.com', 'Your otp is here', message); //  sample mailer

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'OTP sent successfully',
      data: {
        otp,
        expiresIn: '5 minutes',
      },
    }); // sample success response
  } catch (error: GenericAnyType) {
    logger('error', error.message); // always log
    return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: error.message || 'Something went wrong',
    });
  } // sample error response.
}
