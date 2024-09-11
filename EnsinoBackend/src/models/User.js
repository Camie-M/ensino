import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Atualize o caminho se necessário

class User extends Model { }

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['admin', 'user', 'moderator']],
        },
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    hooks: {
        beforeSave: (user) => {
            user.username = user.username.toLowerCase();
        }
    }
});

export default User;
