const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('catfeeder', 'shimon', '*******************', {
    host: 'avim.eu',
    dialect: 'mysql',
    operatorsAliases: 0,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db