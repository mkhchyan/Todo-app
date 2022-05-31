const { Sequelize } = require('sequelize')
const config = { DB: "todo", USER: "root", PASSWORD: "" }
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: "localhost",
    dialect: "mysql"
})
const Task = require('./tasks')(sequelize, Sequelize);

(async () => {
    await sequelize.sync()

})()
// console.log("OK");
// sequelize.sync({force: true})
module.exports = {
    Task
}
