import { Router } from 'express';
import UserRoutes from './UserRoutes';
import PostRoutes from './PostRoutes';
import AuthRoutes from './AuthRoutes';
import S3Routes from './AwsS3Routes';



const router: Router = Router();

router.use('/users', UserRoutes);
router.use('/posts', PostRoutes);
router.use('/auth', AuthRoutes);
router.use('/imageGeneration', S3Routes)

export default router;
