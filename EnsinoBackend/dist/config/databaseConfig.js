import { env } from '../env';
const databaseConfig = {
    user: env.DATABASE_USER,
    host: env.DATABASE_HOST,
    database: env.DATABASE_NAME,
    password: env.DATABASE_PASSWORD,
    port: parseInt(env.DATABASE_PORT, 10),
    dialect: 'postgres',
};
export default databaseConfig;
