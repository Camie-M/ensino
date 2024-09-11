import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Atualize o caminho se necessário

class Post extends Model {
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    timestamps: true,
    underscored: true
});

export default Post;

