'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id',
        },
      },
      type: {
        type: Sequelize.STRING
      },
      savingId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Savings'
          },
          key: 'id',
        },
      },
      walletId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Wallets'
          },
          key: 'id',
        },
      },
      billsId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Bills'
          },
          key: 'id',
        },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Histories');
  }
};