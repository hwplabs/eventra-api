"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Statuses", {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Statuses")
  },
}
