import express from 'express';
import postRoutes from './routes/postRoutes.js';
import sequelize from './config/database.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

// Sincroniza o banco de dados
sequelize.sync({ alter: true }).then(() => {
  console.log('Database synchronized');
  // Inicia o servidor após sincronizar o banco de dados
  app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
  });
}).catch(error => {
  console.error('Error synchronizing the database:', error);
});



