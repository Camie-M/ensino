import { Model, DataTypes, Optional, CreationOptional, NonAttribute } from 'sequelize';
import sequelize from '../config/database';

// Define os atributos do modelo
interface UserAttributes {
    id: CreationOptional<string>; // UUIDs são gerados automaticamente
    username: string;
    role: string;
    createdAt?: CreationOptional<Date>;
    updatedAt?: CreationOptional<Date>;
}

// Define atributos de criação (sem 'id' pois é gerado automaticamente)
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

// Define o modelo User
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: CreationOptional<string>;
    public username!: string;
    public role!: string;
    public readonly createdAt!: CreationOptional<Date>;
    public readonly updatedAt!: CreationOptional<Date>;

    // Inicializa o modelo
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
                createdAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW,
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW,
                },
            },
            {
                sequelize,
                tableName: 'users',
                timestamps: true, // Se true, Sequelize adiciona createdAt e updatedAt automaticamente
            }
        );
    }

    // Associações de modelo
    static associate(models: any) {
        // Exemplo de associação, ajuste conforme necessário
        this.hasMany(models.Post, { foreignKey: 'user_id', as: 'posts' });
    }
}

// Inicialize o modelo ao iniciar o aplicativo
User.initModel();
