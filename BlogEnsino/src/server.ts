import express, { Application } from 'express';
import router from './routes';

const app: Application = express();

app.use(express.json());
app.use(router);

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
