import express from 'express';
import { createUser, editUser, deleteUser } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.post('/create-user', createUser);
userRoutes.put('/edit-user/:id', editUser);
userRoutes.delete('/delete-user/:id', deleteUser);

export default userRoutes;
