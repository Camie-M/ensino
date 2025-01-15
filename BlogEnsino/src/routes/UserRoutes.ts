import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userRoutes: Router = Router();

userRoutes.post('/' , UserController.createUser); //feita
userRoutes.get('/' , UserController.getAllUsers);//feita
userRoutes.get('/:id' , UserController.getUserById);//feita
// userRoutes.get('/:username' , UserController.getUserUserName);//feita
userRoutes.put('/:id' , UserController.editUser); //feita
userRoutes.delete('/:id' , UserController.deleteUser); //feita

export default userRoutes;
