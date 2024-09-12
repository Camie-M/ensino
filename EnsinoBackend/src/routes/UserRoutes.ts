import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userRoutes: Router = Router();

userRoutes.post('/create-user', UserController.createUser);
userRoutes.get('/get-users', UserController.getAllUsers);
userRoutes.get('/get-user/:id', UserController.getUserById);
userRoutes.put('/edit-user/:id', UserController.editUser);
userRoutes.delete('/delete-user/:id', UserController.deleteUser);

export default userRoutes;
