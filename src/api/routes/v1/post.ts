import { Router } from 'express';
import * as postController from '../../../controllers/postController';
import { isAuth } from '../../../middlewares/isAuth';

const router = Router();

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getSinglePost);
router.post('/', isAuth, postController.addPost);
router.put('/:id', isAuth, postController.editPost);
router.delete('/:id', isAuth, postController.deletePost);

export { router as post };
