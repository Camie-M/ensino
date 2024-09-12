import { Pool } from 'pg';
import databaseConfig from '../config/databaseConfig';

class Database {
  private pool: Pool;

  constructor() {
    this.pool = new Pool(databaseConfig);
    this.connect();
  }

  private async connect() {
    try {
      await this.pool.connect();
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Error connecting to the database', error);
      throw new Error('Failed to connect to the database');
    }
  }

  async query(text: string, params?: any[]) {
    try {
      const result = await this.pool.query(text, params);
      return result;
    } catch (error) {
      console.error('Error executing query', error);
      throw new Error('Failed to execute query');
    }
  }
}

export const database = new Database();
