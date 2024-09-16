"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Post extends sequelize_1.Model {
    static initModel() {
        Post.init({
            id: {
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.DataTypes.UUIDV4, // Geração automática de UUID
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            text: {
                type: sequelize_1.DataTypes.TEXT, // Alterei para TEXT para suportar textos maiores
                allowNull: false,
            },
            user_id: {
                type: sequelize_1.DataTypes.UUID, // Definido como UUID, pois é uma chave estrangeira
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
        }, {
            sequelize: database_1.default,
            tableName: 'posts',
            timestamps: true, // createdAt e updatedAt são gerados automaticamente
        });
    }
    static associate(models) {
        // Associação com o modelo 'User' usando a chave estrangeira 'user_id'
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}
exports.Post = Post;
Post.initModel();
