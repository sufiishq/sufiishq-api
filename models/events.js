const Connection = require('../connection')
const connection = new Connection()
const { DataTypes, Model } = require('sequelize')
const sequelize = connection.sequelize

class Events extends Model {}

Events.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  hijriDate: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  hijriMonthAndDay: {
    type: DataTypes.STRING(5),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Events',
  tableName: 'events',
  timestamps: false,
  logging: console.log
})

//Events.sync()

module.exports = Events
