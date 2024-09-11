import express from 'express';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
