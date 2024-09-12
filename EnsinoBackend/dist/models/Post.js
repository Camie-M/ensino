import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
export class Post extends Model {
    static initModel() {
        Post.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            text: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: 'posts',
            timestamps: true,
        });
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}
