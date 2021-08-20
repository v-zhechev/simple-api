import { Request, RequestHandler } from 'express';
import { verifyAccessToken } from '../helpers/token';
import { AuthenticationError } from '../libs/errors';

const getTokenFromCookies = (req: Request): string => req.cookies.accessToken ?? '';

export const isAuth: RequestHandler = async (req, res, next) => {
  try {
    const token = getTokenFromCookies(req);

    if (!token) {
      throw new AuthenticationError('No token provided');
    }

    const { data } = await verifyAccessToken(token);

    req.currentUserId = data.user_id

    return next();
  } catch (error) {
    return next(error);
  }
};
