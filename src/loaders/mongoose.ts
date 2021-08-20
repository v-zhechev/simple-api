import mongoose, { Connection } from 'mongoose';
import { env } from '../configs';

export const establishDbConnection = async (): Promise<Connection> => {
  const connection = await mongoose.connect(env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  return connection.connection;
};
