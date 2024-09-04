import express from 'express'

import {
    getAllPosts,
    getPostById,
    createPost,
    editPost,
    deletePost,
    searchPost
} from './controllers/postController.js'

const router = express.Router()

router.get('/get-posts', getAllPosts)
router.get('/create-post/:id', getPostById)
router.post('/create-post', createPost)
router.put('/edit-post/:id', editPost)
router.delete('/delete-post/:id', deletePost)
router.get('/search', searchPost)

export default router