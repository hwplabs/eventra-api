import { DataTypes } from "sequelize"

module.exports = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: new Date().toLocaleDateString(),
  },
  time: {
    type: DataTypes.DATE,
    defaultValue: new Date().toLocaleTimeString(),
  },
  venue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gateFee: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}
