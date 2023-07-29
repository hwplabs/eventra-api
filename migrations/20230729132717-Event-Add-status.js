"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Events", "statusId", {
      type: Sequelize.DataTypes.UUID,
      references: {
        model: "Statuses",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Events", "status_id")
  },
}
