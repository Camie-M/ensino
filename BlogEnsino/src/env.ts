import dotenv from 'dotenv';

dotenv.config();

export const env = {
  DATABASE_USER: process.env.DATABASE_USER || '',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
  DATABASE_HOST: process.env.DATABASE_HOST || '',
  DATABASE_NAME: process.env.DATABASE_NAME || '',
  DATABASE_PORT: process.env.DATABASE_PORT || '5432',
  SECRET_KEY: process.env.SECRET_KEY || '',
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY || '',
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY || '',
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME || '',
  AWS_REGION: process.env.AWS_REGION || '',
};
