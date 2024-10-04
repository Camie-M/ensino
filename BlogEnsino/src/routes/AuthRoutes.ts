import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';

const postRoutes: Router = Router();

postRoutes.get('', AuthController.generateToken);


export default postRoutes;
