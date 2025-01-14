import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userRoutes: Router = Router();

userRoutes.post('/' , UserController.createUser); //feita
userRoutes.get('/' , UserController.getAllUsers);
userRoutes.get('/:id' , UserController.getUserById);
userRoutes.put('/:id' , UserController.editUser);
userRoutes.delete('/:id' , UserController.deleteUser); //feita

export default userRoutes;
