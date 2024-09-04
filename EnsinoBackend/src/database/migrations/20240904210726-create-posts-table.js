'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts',
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        author: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        text: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};
