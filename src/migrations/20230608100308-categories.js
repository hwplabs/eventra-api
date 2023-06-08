"use strict"
import * as categoryColumn from "./columns/categoryColumn"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Categories", categoryColumn)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Categories")
  },
}
