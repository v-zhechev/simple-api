import { NextFunction, Request, Response } from 'express';

export interface IGetUserAuthInfoRequest extends Request {
  currentUser: Record<string, unknown>;
}

export interface UserAuthRequestHandler {
  (request: IGetUserAuthInfoRequest, response: Response, next: NextFunction): Promise<void>
}