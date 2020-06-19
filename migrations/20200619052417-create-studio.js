'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Studios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      BranchId: {
        type: Sequelize.INTEGER
      },
      basicPrice: {
        type: Sequelize.INTEGER
      },
      addFridayPrice: {
        type: Sequelize.INTEGER
      },
      addSaturdayPrice: {
        type: Sequelize.INTEGER
      },
      addSundayPrice: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Studios');
  }
};