import express from 'express';
import router from './routes';
import sequelize from './config/database';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger_output.json';
const cors = require('cors');
const app = express();


app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:3000', // Permite apenas esta origem
//   methods: 'GET, POST, PUT, DELETE', // Métodos permitidos
//   allowedHeaders: 'Content-Type, Authorization', // Cabeçalhos permitidos
// }));

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

// Sincronização do Sequelize com o banco de dados
sequelize.sync({ alter: true }).then(() => {
  console.log('Models synchronized with the database');
}).catch((error) => {
  console.error('Error syncing models with the database', error);
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
