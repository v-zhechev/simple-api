import { RequestHandler } from 'express';
import { env } from '../configs';
import { generateAccessToken } from '../helpers/token';

export const setAccessToken: RequestHandler = async (req, res, next) => {
  try {
    const { id: user_id }: { [id: string]: string } = req.params;

    const token: string = await generateAccessToken({ user_id }, env.ACCESS_TOKEN_LIFE);

    res.cookie('accessToken', token).json({ message: 'Successfully set cookies' });
  } catch (error) {
    next(error);
  }
};
