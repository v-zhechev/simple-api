import { Router } from 'express';
import { v1Router } from './routes/v1';

const router = Router();

router.use('/', v1Router);

export { router as routes };