import express from 'express'

import {
    createUser,
    editUser,
    deleteUser
} from '../controllers/userController.js'

const userRoutes = express.Router()

router.post('/create-user', createUser)
router.put('/edit-user/:id', editUser)
router.delete('/delete-user/:id', deleteUser)

export default userRoutes