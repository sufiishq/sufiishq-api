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
    allowNull: false
  },
  thumbnail: {
    type: DataTypes.STRING(255),
    allowNull: false
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
  occasionId: {
    type: DataTypes.INTEGER,
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
  modelName: 'Media',
  tableName: 'media',
  timestamps: true
})

//Media.sync()

module.exports = Media
