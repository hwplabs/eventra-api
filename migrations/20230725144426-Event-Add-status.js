"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Events", "status", {
      type: Sequelize.DataTypes.ENUM,
      values: ["active", "disabled"],
      defaultValue: "active",
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Events", "status")
  },
}
