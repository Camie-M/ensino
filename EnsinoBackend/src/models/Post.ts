import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

interface PostAttributes {
    id: string;
    title: string;
    text: string;
    user_id: string;
}

export class Post extends Model<PostAttributes> implements PostAttributes {
    public id!: string;
    public title!: string;
    public text!: string;
    public user_id!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static initModel() {
        Post.init(
            {
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
            },
            {
                sequelize,
                tableName: 'posts',
                timestamps: true,
            }
        );
    }

    static associate(models: any) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}
