import { Sequelize } from 'sequelize';

// Configuração do Sequelize
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'postgres',          // Nome do serviço do banco de dados no Docker
  port: 5432,                // Porta padrão do PostgreSQL
  username: 'postgres',      // Nome de usuário para conexão com o banco de dados
  password: 'tech123',       // Senha para conexão com o banco de dados
  database: 'challenge2',    // Nome do banco de dados
  define: {
    timestamps: true,        // Adiciona campos createdAt e updatedAt
    underscored: true,       // Utiliza snake_case em vez de camelCase
    underscoredAll: true     // Aplica underscored para todos os nomes de tabelas e colunas
  }
});

// Testa a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
