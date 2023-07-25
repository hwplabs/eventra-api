"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    {
      await queryInterface.createTable("Users", {
        id: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          primaryKey: true,
        },
        username: {
          type: Sequelize.DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        phoneNumber: {
          type: Sequelize.DataTypes.STRING,
        },
        organiserName: {
          type: Sequelize.DataTypes.STRING,
        },
        notes: {
          type: Sequelize.DataTypes.STRING,
        },
        status: {
          type: Sequelize.DataTypes.ENUM,
          values: ["active", "disabled"],
        },
        avatar: {
          type: Sequelize.DataTypes.BLOB,
        },
      })
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("Users")
  },
}
