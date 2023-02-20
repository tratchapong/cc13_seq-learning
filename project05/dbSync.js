const {sequelize} = require('./models')
console.log(sequelize)

sequelize.sync()