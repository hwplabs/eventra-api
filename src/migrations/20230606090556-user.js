"use strict"
import * as userColumn from "./columns/userColumn"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", userColumn)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users")
  },
}
