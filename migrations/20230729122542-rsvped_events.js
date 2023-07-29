"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Rsvped_Events", {
      userId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      EventId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: "Events",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Rsvped_Events")
  },
}
