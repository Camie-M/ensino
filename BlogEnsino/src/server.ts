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
        title: "JavaScript: O guia essencial para iniciantes",
        text: "Entenda os conceitos básicos de JavaScript e como começar a programar com esta linguagem versátil.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "A importância do Design Responsivo",
        text: "Saiba como garantir que seu site seja acessível em todos os dispositivos, proporcionando uma experiência de qualidade.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Explorando as novidades do ECMAScript 2024",
        text: "Veja o que há de novo na última versão do padrão JavaScript e como essas mudanças podem impactar seu código.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "10 bibliotecas essenciais para desenvolvedores front-end",
        text: "Confira uma lista com as melhores bibliotecas para agilizar o desenvolvimento front-end em 2024.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "React vs Angular: Qual escolher?",
        text: "Uma análise das principais diferenças entre React e Angular para ajudar você a decidir a melhor opção para seus projetos.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Introdução ao Docker para desenvolvedores",
        text: "Aprenda os fundamentos do Docker e como ele pode ajudar a criar ambientes de desenvolvimento consistentes.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Como otimizar consultas SQL",
        text: "Descubra técnicas práticas para melhorar o desempenho de suas consultas em bancos de dados SQL.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Testes automatizados: Por onde começar?",
        text: "Saiba como introduzir testes automatizados em seu fluxo de trabalho para aumentar a qualidade do código.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Aprendendo TypeScript: Por onde começar",
        text: "Descubra como o TypeScript pode melhorar a qualidade do seu código JavaScript e como dar os primeiros passos.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "A evolução do desenvolvimento front-end",
        text: "Uma análise das mudanças mais significativas no desenvolvimento front-end nos últimos 10 anos.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Benefícios de adotar a metodologia Scrum",
        text: "Entenda como a metodologia ágil Scrum pode ajudar a aumentar a produtividade da sua equipe.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Como construir uma API REST com Node.js",
        text: "Veja um guia prático para criar APIs robustas e escaláveis usando Node.js e Express.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Melhores práticas para código limpo",
        text: "Saiba como aplicar técnicas de Clean Code para escrever códigos mais legíveis e fáceis de manter.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Entendendo o ciclo de vida de componentes React",
        text: "Uma explicação detalhada sobre o ciclo de vida de componentes em React, incluindo hooks modernos.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Introdução ao GraphQL",
        text: "Descubra como o GraphQL pode ser uma alternativa ao REST para criar APIs mais flexíveis.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Por que investir em testes de software?",
        text: "Saiba como os testes automatizados podem evitar problemas em produção e melhorar a qualidade do seu produto.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Como implementar autenticação JWT",
        text: "Aprenda a configurar autenticação baseada em tokens JWT para proteger suas APIs.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Os fundamentos do UX Design",
        text: "Entenda os princípios básicos de UX Design para criar interfaces mais intuitivas e agradáveis.",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      }
    ]);

  }


}
