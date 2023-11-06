import { Request, Response } from 'express';
import { GenericAnyType, ResponseCode, StatusCode } from '../@types';
import { logger } from '../config';
import { getUserData, updateUserData } from '../service/methods';

export async function saveAddress(req: Request, res: Response) {
  try {
    const { address, email, owner } = req.body;

    await updateUserData({ address, email, owner });

    const data = await getUserData(owner);

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'user data successfully updated',
      data,
    });
  } catch (error: GenericAnyType) {
    logger('error', error.message); // always log
    return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: error.message || 'Something went wrong',
    });
  }
}

export async function getAddressData(req: Request, res: Response) {
  try {
    const { address } = req.body;

    const data = await getUserData(address);

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'user data fetch successfully',
      data,
    });
  } catch (error: GenericAnyType) {
    logger('error', error.message); // always log
    return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: error.message || 'Something went wrong',
    });
  }
}
