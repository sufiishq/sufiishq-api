const Connection = require('../connection')
const connection = new Connection()
const { DataTypes, Model } = require('sequelize')
const sequelize = connection.sequelize
const Media = require('./media')

class Occasion extends Model {}

Occasion.init({
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
  cover: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  startTimestamp: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  endTimestamp: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  hijriDate: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.BIGINT,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Occasion',
  tableName: 'occasion',
  timestamps: false,
  logging: console.log
})

Occasion.hasMany(Media, {
  as: 'media',
  foreignKey: 'referenceId',
})
/*
Media.belongsTo(Occasion)
*/
//Occasion.sync()

module.exports = Occasion
