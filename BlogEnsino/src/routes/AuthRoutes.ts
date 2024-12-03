import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';

const postRoutes: Router = Router();

postRoutes.post('/token', AuthController.generateToken);


export default postRoutes;
