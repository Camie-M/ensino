import { Sequelize } from 'sequelize';
import { env } from '../env';

console.log('Database Config:', {
  name: env.DATABASE_NAME,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
});

const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USER, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  dialect: 'postgres',
  port: parseInt(env.DATABASE_PORT, 10), // Converta a porta para número
});

export default sequelize;
