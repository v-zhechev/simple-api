import { Router } from 'express';
import { setAccessToken } from '../../../controllers/authController';

const router = Router();

router.post('/:id', setAccessToken);

export { router as auth };
