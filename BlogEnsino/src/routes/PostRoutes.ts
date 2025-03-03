import { Router } from 'express';
import { PostController, uploadMiddleware } from '../controllers/PostController';

const postRoutes: Router = Router();

postRoutes.post('/', uploadMiddleware, PostController.createPost);
postRoutes.get('/', PostController.getAllPosts);
postRoutes.get('/search', PostController.getPostByTitle);
postRoutes.get('/:id', PostController.getPostById);
postRoutes.put('/:id', uploadMiddleware, PostController.editPost);
postRoutes.delete('/:id', PostController.deletePost);

export default postRoutes;
