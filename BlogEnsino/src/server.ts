import express, { Application } from 'express';
import router from './routes';
import sequelize from './config/database';

const app: Application = express();

app.use(express.json());
app.use(router);

// Sincronize os modelos com o banco de dados
setTimeout(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Models synchronized with the database');
  } catch (error) {
    console.error('Error syncing models with the database', error);
  }
}, 5000); // Atraso de 5 segundos

app.listen(3002, () => {
  console.log('Servidor rodando na porta 3002');
});
