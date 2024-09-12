import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

interface UserAttributes {
    id: string;
    username: string;
    role: string;
}

export class User extends Model<UserAttributes> implements UserAttributes {
    public id!: string;
    public username!: string;
    public role!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static initModel() {
        User.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                },
                username: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                role: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: 'users',
                timestamps: true,
            }
        );
    }

    static associate(models: any) {
        this.hasMany(models.Post, { foreignKey: 'user_id', as: 'posts' });
    }
}
