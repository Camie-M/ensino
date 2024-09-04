import Sequelize, { Model } from 'sequelize'

class Post extends Model {
    static init(sequelize) {
        super.init(
            {
                title: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                author: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                text: {
                    type: Sequelize.STRING,
                    allowNull: false
                }
            }, 
            {sequelize}
        )
    }
}

export default Post