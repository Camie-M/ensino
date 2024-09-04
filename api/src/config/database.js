export default {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'postsdb',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true
    }
}