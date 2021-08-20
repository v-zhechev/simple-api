import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import { logger } from './logger';
import { routes } from './api';
import { IHttpError } from './libs/errors/interface';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/', routes);

app.use((error: IHttpError, req: Request, res: Response, next: NextFunction) => {
  if (error.name === 'AuthenticationError') {
    return res.status(error.status).json({ message: error.message });
  }

  return next(error);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: error.message,
  });
});

logger.info('✌️ Express loaded');

export { app };
