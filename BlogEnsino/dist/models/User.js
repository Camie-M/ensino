"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
// Define o modelo User
class User extends sequelize_1.Model {
    // Inicializa o modelo
    static initModel() {
        User.init({
            id: {
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            username: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            role: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize_1.DataTypes.NOW,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize_1.DataTypes.NOW,
            },
        }, {
            sequelize: database_1.default,
            tableName: 'users',
            timestamps: true, // Se true, Sequelize adiciona createdAt e updatedAt automaticamente
        });
    }
    // Associações de modelo
    static associate(models) {
        // Exemplo de associação, ajuste conforme necessário
        this.hasMany(models.Post, { foreignKey: 'user_id', as: 'posts' });
    }
}
exports.User = User;
// Inicialize o modelo ao iniciar o aplicativo
User.initModel();
