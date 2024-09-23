import express, { Application, Request, Response, NextFunction } from 'express';
import router from './routes';
import { PrismaClient } from '@prisma/client';

const app: Application = express();
const prisma = new PrismaClient();

// Middleware para parsear JSON
app.use(express.json());

// Rotas da aplicação
app.use(router);

// Middleware para capturar erros
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Inicia o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Graceful shutdown para desconectar do Prisma
process.on('SIGTERM', async () => {
  console.log('SIGTERM received. Disconnecting Prisma...');
  await prisma.$disconnect();
  process.exit(0);
});

// Opcional: Tratamento para Ctrl+C (SIGINT) no desenvolvimento
process.on('SIGINT', async () => {
  console.log('SIGINT received. Disconnecting Prisma...');
  await prisma.$disconnect();
  process.exit(0);
});
