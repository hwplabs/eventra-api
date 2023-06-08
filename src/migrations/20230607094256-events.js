"use strict"
import { DataTypes } from "sequelize"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      category: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: new Date().toLocaleDateString(),
      },
      time: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: new Date().toLocaleTimeString(),
      },
      venue: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      gateFee: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      organizer: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("Events")
  },
}
