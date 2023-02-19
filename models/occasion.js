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
  timestamps: false
})

Occasion.hasMany(Media)
Media.belongsTo(Occasion, {
  foreignKey: 'occasionId'
})

//Occasion.sync()


module.exports = Occasion
