import { Sequelize } from 'sequelize';
import { User } from './User';
import { Post } from './Post';
import sequelize from '../config/database';

const db: { [key: string]: any } = {
    User,
    Post,
};

User.initModel();
Post.initModel();

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
