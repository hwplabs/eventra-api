"use strict"
import * as organiserColumn from "./columns/organiserColumn"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Organisers", organiserColumn)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Organisers")
  },
}
