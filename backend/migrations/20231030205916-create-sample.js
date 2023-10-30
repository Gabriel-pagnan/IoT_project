'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('samples', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      temperature: {
        type: Sequelize.DECIMAL(10,2)
      },
      ph: {
        type: Sequelize.DECIMAL(10,2)
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', 
          key: 'id',        
        },
        onUpdate: 'CASCADE',    
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('samples');
  }
};