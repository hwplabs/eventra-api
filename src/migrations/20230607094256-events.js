"use strict"
import * as eventColumn from "./columns/eventColumn"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
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
        type: Sequelize.DataTypes.STRING,
        defaultValue: new Date().toLocaleDateString(),
      },
      time: {
        type: Sequelize.DataTypes.STRING,
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
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Events")
  },
}
