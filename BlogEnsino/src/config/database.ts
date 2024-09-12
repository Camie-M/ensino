import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME || 'challenge2', process.env.DB_USER || 'postgres', process.env.DB_PASSWORD || 'tech123', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  port: parseInt(process.env.DB_PORT || '5432', 10),
});

export default sequelize;
