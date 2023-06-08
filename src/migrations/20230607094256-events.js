"use strict"
import * as eventColumn from "./columns/eventColumn"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", eventColumn)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Events")
  },
}
