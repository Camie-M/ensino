import express, { Application } from 'express';
import router from './routes';
import sequelize from './config/database';
import { User } from './models/User'; // Certifique-se de importar o modelo

const app: Application = express();

app.use(express.json());
app.use(router);

// Sincronize os modelos com o banco de dados
sequelize.sync({ alter: true }).then(() => {
  console.log('Models synchronized with the database');
}).catch((error) => {
  console.error('Error syncing models with the database', error);
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
