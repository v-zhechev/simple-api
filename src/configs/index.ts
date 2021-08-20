import 'dotenv/config';

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: typeof process.env.PORT === 'string' ? parseInt(process.env.PORT, 10) : 8080,
  DB_URL: process.env.DB_URL ?? 'mongodb://localhost:27017/simple',
  ACCESS_TOKEN_LIFE: process.env.ACCESS_TOKEN_LIFE ?? '1d',
};
