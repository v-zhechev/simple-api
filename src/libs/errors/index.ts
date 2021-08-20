import { IHttpError } from './interface';

export class AuthenticationError extends Error implements IHttpError {
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationError';
    this.status = 401;
  }

  status;
}
