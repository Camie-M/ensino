import { Router } from 'express';
import { AwsS3Controller, uploadMiddleware } from '../controllers/AwsS3Controller';

const awsS3Controller: Router = Router();

awsS3Controller.post('/', uploadMiddleware, AwsS3Controller.CreateUrlImage);


export default awsS3Controller;
