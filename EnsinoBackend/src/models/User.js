import Sequelize, { Model } from 'sequelize'

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                username: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                role: {
                    type: Sequelize.STRING,
                    allowNull: false
                }
            }, 
            {sequelize}
        )
    }
}

export default User