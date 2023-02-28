const Connection = require('../connection')
const connection = new Connection()
const { DataTypes, Model } = require('sequelize')
const sequelize = connection.sequelize

class Media extends Model {}

Media.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  thumbnail: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  src: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  kind: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  holderId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Media',
  tableName: 'media',
  timestamps: false
})

//Media.sync()

module.exports = Media
