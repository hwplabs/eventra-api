"use strict"
import * as categoryColumn from "./columns/categoryColumn"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Categories", {
      id: {
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Categories")
  },
}
