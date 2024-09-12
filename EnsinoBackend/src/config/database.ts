import { Sequelize } from 'sequelize';
import { env } from '../env';

const sequelize = new Sequelize(
  env.DATABASE_NAME, 
  env.DATABASE_USER, 
  env.DATABASE_PASSWORD, 
  {
    host: env.DATABASE_HOST,
    dialect: 'postgres',
    port: parseInt(env.DATABASE_PORT, 10),
    logging: false,
  }
);

export default sequelize;
