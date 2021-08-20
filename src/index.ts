import { app } from './app';
import { env } from './configs';
import { runLoaders } from './loaders';
import { logger } from './logger';

const startServer = async (): Promise<void> => {
  await runLoaders();

  app.listen(env.PORT, () => {
    logger.info(`✌️ Server started on port ${env.PORT}`);
  });
};

startServer();
