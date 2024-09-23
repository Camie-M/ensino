import { Router } from 'express';
import { PostController } from '../controllers/PostController';

const postRoutes: Router = Router();

postRoutes.post('/create-post', PostController.createPost);
postRoutes.get('/get-posts', PostController.getAllPosts);
postRoutes.get('/search-posts', PostController.getPostByTitle);
postRoutes.get('/get-post/:id', PostController.getPostById);
postRoutes.put('/update-post/:id', PostController.editPost);
postRoutes.delete('/delete-post/:id', PostController.deletePost);

export default postRoutes;
