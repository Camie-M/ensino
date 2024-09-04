export default {
    dialect: 'postgres',
    host: 'localhost',
    port: 5435,
    username: 'postgres',
    password: 'tech123',
    database: 'postsdb',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
}