import jwt from 'jsonwebtoken';

import { join } from 'path';
import fs from 'fs';
import { AuthenticationError } from '../libs/errors';

const secretAccessKey = fs.readFileSync(join(__dirname, '../../keys/accessSecret.key'));
const publicAccessKey = fs.readFileSync(join(__dirname, '../../keys/accessSecret.key.pub'));

export const generateAccessToken = (data: Record<string, unknown>, expirationTime: string): Promise<string> =>
  new Promise((resolve, reject) => {
    jwt.sign(
      {
        data,
      },
      secretAccessKey,
      { expiresIn: expirationTime, algorithm: 'RS256' },
      (err, token) => {
        if (err) {
          return reject(err);
        }

        if (!token) {
          return reject(new Error('Empty token'));
        }

        return resolve(token);
      },
    );
  });

export const verifyAccessToken = (token: string): Promise<jwt.JwtPayload> =>
  new Promise((resolve, reject) => {
    jwt.verify(token, publicAccessKey, { algorithms: ['RS256'] }, (err, decoded) => {
      if (err) {
        return reject(new AuthenticationError(err.message));
      }

      if (!decoded) {
        return reject(new AuthenticationError("Can't retrieve payload"));
      }

      return resolve(decoded);
    });
  });
