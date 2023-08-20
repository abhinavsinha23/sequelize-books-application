const {Sequelize} = require("sequelize")

const connection = new Sequelize(process.env.MYSQL_URI)

console.log("DB connection is working")

module.exports = connection