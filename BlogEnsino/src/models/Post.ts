import { Model, DataTypes, CreationOptional, Optional } from 'sequelize';
import sequelize from '../config/database';

interface PostAttributes {
    id: CreationOptional<string>;
    title: string;
    text: string;
    author: string;
    image_url: string;
    user_id: string;
    createdAt?: CreationOptional<Date>;
    updatedAt?: CreationOptional<Date>;
}
interface PostCreationAttributes extends Optional<PostAttributes, 'id'> { }

export class Post extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
    public id!: CreationOptional<string>;
    public title!: string;
    public text!: string;
    public author!: string;
    public image_url!: string;
    public user_id!: string;

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
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                author: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                image_url: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                user_id: {
                    type: DataTypes.UUID,
                    allowNull: true, // Pode ser null, se necessário
                },                
            },
            {
                sequelize,
                tableName: 'posts',
                timestamps: true,
            }
        );
    }
}
Post.initModel();