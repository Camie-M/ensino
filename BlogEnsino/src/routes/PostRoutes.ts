import { Router } from 'express';
import { PostController } from '../controllers/PostController';

const postRoutes: Router = Router();

postRoutes.post('', PostController.createPost);
postRoutes.get('', PostController.getAllPosts);

// Ajuste a rota para usar query parameters
postRoutes.get('/search', PostController.getPostByTitle);

postRoutes.get('/:id', PostController.getPostById);
postRoutes.put('/:id', PostController.editPost);
postRoutes.delete('/:id', PostController.deletePost);

export default postRoutes;
