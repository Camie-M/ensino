import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userRoutes: Router = Router();

userRoutes.post('/', UserController.createUser);
userRoutes.get('/', UserController.getAllUsers);
userRoutes.get('/:id', UserController.getUserById);

// manter de forma temporario para desenvolvimento
userRoutes.get('/teste/:username', UserController.getUserUserName);

userRoutes.put('/:id', UserController.editUser);
userRoutes.delete('/:id', UserController.deleteUser);

export default userRoutes;
