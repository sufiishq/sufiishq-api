const Connection = require('../connection')
const connection = new Connection()
const { DataTypes, Model } = require('sequelize')
const sequelize = connection.sequelize

class Kalam extends Model {}

Kalam.init({
  code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  recorded_date: {
    type: DataTypes.STRING(10),
    allowNull: true,
    defaultValue: ''
  },
  src: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Kalam',
  tableName: 'kalam',
  timestamps: false
})

//Kalam.sync()

module.exports = Kalam
