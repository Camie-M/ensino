import { Router } from 'express';
import UserRoutes from './UserRoutes';
import PostRoutes from './PostRoutes';



const router: Router = Router();

router.use('/users', UserRoutes);
router.use('/posts', PostRoutes);

export default router;
