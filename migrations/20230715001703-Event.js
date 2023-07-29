"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", {
      id: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
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
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("Events")
  },
}
