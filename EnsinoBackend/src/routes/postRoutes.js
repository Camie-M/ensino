import express from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  editPost,
  deletePost,
  searchPost
} from '../controllers/postController.js';

const postRoutes = express.Router();

postRoutes.get('/get-posts', getAllPosts);
postRoutes.get('/create-post/:id', getPostById);
postRoutes.post('/create-post', createPost);
postRoutes.put('/edit-post/:id', editPost);
postRoutes.delete('/delete-post/:id', deletePost);
postRoutes.get('/search', searchPost);

export default postRoutes;
