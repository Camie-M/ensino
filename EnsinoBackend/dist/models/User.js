import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
export class User extends Model {
    static initModel() {
        User.init({
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
        }, {
            sequelize,
            tableName: 'users',
            timestamps: true,
        });
    }
    static associate(models) {
        this.hasMany(models.Post, { foreignKey: 'user_id', as: 'posts' });
    }
}
