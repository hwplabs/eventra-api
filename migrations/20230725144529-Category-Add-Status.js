"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Categories", "status", {
      type: Sequelize.DataTypes.ENUM,
      values: ["active", "disabled"],
      defaultValue: "active",
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Categories", "status")
  },
}
