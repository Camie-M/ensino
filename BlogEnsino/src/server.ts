import { Post } from './models/Post';
import { User } from './models/User';
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
  creatMockUser();
  creatMockPost();
  console.log('Models synchronized with the database');
}).catch((error) => {
  console.error('Error syncing models with the database', error);
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});

const creatMockUser = async () => {
  await sequelize.models.User.bulkCreate([
    {
      username: "Breno",
      role: "admin"
    },
    {
      username: "Camila",
      role: "user"
    },
    {
      username: "Valdir",
      role: "admin"
    },
    {
      username: "Matheus",
      role: "admin"
    },

  ])
}
const creatMockPost = async () => {
  const Post = sequelize.models.Post
  const userAdmin = await User.findOne({ where: { username: "Breno" } })
  if (userAdmin) {
    await Post.bulkCreate([
      {
        title: "titulo1",
        text: "texto1",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "titulo2",
        text: "texto2",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "titulo3",
        text: "texto3",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "titulo4",
        text: "texto4",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
    ])
  }


}
