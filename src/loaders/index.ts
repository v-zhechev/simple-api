import { establishDbConnection } from './mongoose';
import { logger } from '../logger';

export const runLoaders = async (): Promise<void> => {
  await establishDbConnection();
  logger.info('✌️ DB loaded and connected');

  // Redis initialization ...
  // DI initialization ...
}