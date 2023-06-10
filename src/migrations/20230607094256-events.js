"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      category: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      time: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      venue: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      gatePass: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      eventImage: Sequelize.DataTypes.BLOB,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Events")
  },
}
