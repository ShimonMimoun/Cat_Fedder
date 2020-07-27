const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(

  'cat',
  {

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },


    uid: {
      type: Sequelize.STRING
    },
   name: {
      type: Sequelize.STRING
    },
    key: {
      type: Sequelize.STRING
    },
    weight: {
      type: Sequelize.INTEGER
    },
    age: {
      type: Sequelize.INTEGER
    }
    
  },
  {
    timestamps: false
  }
)
