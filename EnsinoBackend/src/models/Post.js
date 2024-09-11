import Sequelize, { Model } from 'sequelize';

class Post extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                text: Sequelize.STRING,
            },
            { sequelize }
        );
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

export default Post;
