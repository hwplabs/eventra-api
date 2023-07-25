"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", { id: Sequelize.INTEGER })
    await queryInterface.addColumn("ContactUs", "status", {
      type: Sequelize.DataTypes.ENUM,
      values: ["active", "disabled"],
      defaultValue: "active",
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("ContactUs", "status")
  },
}
