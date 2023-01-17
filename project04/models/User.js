// const {Sequelize , DataTypes} = require('sequelize')
// const sequelize = new Sequelize()

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        phone : DataTypes.STRING
    }, {})

    User.associate = (db) => {
        User.hasMany(db.Todo)
    }

    return User
}