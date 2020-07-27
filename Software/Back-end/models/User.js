const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(

  'user',
  {

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },


    Firstname: {
      type: Sequelize.STRING
    },
    Lastname: {
      type: Sequelize.STRING
    },
    pseudo: {
      type: Sequelize.STRING
    },
    mail: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
    
  },
  {
    timestamps: false
  }
)
