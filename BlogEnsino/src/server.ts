import { Post } from './models/Post';
import { User } from './models/User';
import express from 'express';
import router from './routes';
import sequelize from './config/database';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger_output.json';

const cors = require('cors');
const app = express();
const crypto = require('crypto');

app.use(cors());

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
      role: "admin",
      password: hashGenerator("admin_breno_123")
    },
    {
      username: "Camila",
      role: "user",
      password: hashGenerator("user_camila_123")
    },
    {
      username: "Valdir",
      role: "admin",
      password: hashGenerator("admin_valdir_123")
    },
    {
      username: "Matheus",
      role: "admin",
      password: hashGenerator("admin_matheus_123")
    }
  ])
}

function hashGenerator(password: string) {
  return crypto.createHash('sha256').update(password).digest('hex');
}
const creatMockPost = async () => {
  const Post = sequelize.models.Post
  const userAdmin = await User.findOne({ where: { username: "Breno" } })
  if (userAdmin) {
    await Post.bulkCreate([
      {
        title: "JavaScript: O guia essencial para iniciantes",
        text: "JavaScript é uma das linguagens de programação mais populares do mundo. [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "A importância do Design Responsivo",
        text: "O design responsivo é um dos pilares do desenvolvimento moderno de websites. [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Explorando as novidades do ECMAScript 2024",
        text: "Com o ECMAScript 2024, novas funcionalidades foram introduzidas para [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "10 bibliotecas essenciais para desenvolvedores front-end",
        text: "O desenvolvimento front-end evolui constantemente, e bibliotecas desempenham [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "React vs Angular: Qual escolher?",
        text: "React e Angular são dois dos frameworks mais populares no desenvolvimento [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Introdução ao Docker para desenvolvedores",
        text: "Docker revolucionou a forma como desenvolvedores criam e gerenciam [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Como otimizar consultas SQL",
        text: "Otimizar consultas SQL é uma habilidade essencial para desenvolvedores [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Testes automatizados: Por onde começar?",
        text: "Testes automatizados são fundamentais para garantir a qualidade de software [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Aprendendo TypeScript: Por onde começar",
        text: "TypeScript é uma extensão do JavaScript que adiciona tipos estáticos [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "A evolução do desenvolvimento front-end",
        text: "O desenvolvimento front-end passou por transformações significativas [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Benefícios de adotar a metodologia Scrum",
        text: "Scrum é uma das metodologias ágeis mais utilizadas para gerenciar projetos [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Como construir uma API REST com Node.js",
        text: "APIs REST são um componente central na comunicação entre sistemas modernos [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Melhores práticas para código limpo",
        text: "Escrever código limpo não é apenas uma boa prática, mas um hábito crucial [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Entendendo o ciclo de vida de componentes React",
        text: "O ciclo de vida dos componentes é uma parte essencial do desenvolvimento [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Introdução ao GraphQL",
        text: "GraphQL oferece uma abordagem alternativa ao REST, permitindo consultas [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Por que investir em testes de software?",
        text: "Testes de software são uma parte crucial do ciclo de vida de desenvolvimento [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Como implementar autenticação JWT",
        text: "JWT (JSON Web Token) é uma forma segura e prática de autenticação e [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Os fundamentos do UX Design",
        text: "UX Design é o processo de criação de produtos que oferecem experiências [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "Dominando o uso de Hooks no React",
        text: "Hooks são funções que permitem que você use recursos do React como estado [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      },
      {
        title: "O impacto da acessibilidade digital",
        text: "A acessibilidade digital garante que pessoas com deficiência possam usar [...]",
        author: userAdmin.username,
        image_url: "https://postech-images.s3.us-east-1.amazonaws.com/119cb3b2-d911-47b3-b4b8-bac05e345ef4",
        user_id: userAdmin.id
      }
    ]
    );

  }


}
