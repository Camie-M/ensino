import express from 'express'

import {
    getAllPosts,
    getPostById,
    createPost,
    editPost,
    deletePost,
    searchPost
} from '../controllers/postController.js'

import {
    createUser,
    editUser,
    deleteUser
} from '../controllers/userController.js'

const postRoutes = express.Router()

router.get('/get-posts', getAllPosts)
router.get('/create-post/:id', getPostById)
router.post('/create-post', createPost)
router.put('/edit-post/:id', editPost)
router.delete('/delete-post/:id', deletePost)
router.get('/search', searchPost)

router.post('/create-user', createUser)
router.put('/edit-user/:id', editUser)
router.delete('/delete-user/:id', deleteUser)

export default postRoutes