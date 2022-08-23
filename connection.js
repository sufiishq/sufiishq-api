const Sequelize = require('sequelize')
const config = require('./config.js')

class Connection {

  constructor() {
    //+qrfJdrts~r9
    this.sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PWD, {
      host: 'localhost',
      dialect: 'mysql',
      logging: false
    });
  }

  async connect() {
    try {
      return await this.sequelize.authenticate()
    } catch(error) {
      console.error(error.message)
    }
  }
}

module.exports = Connection
