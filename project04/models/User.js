// const {Sequelize , DataTypes} = require('sequelize')
// const sequelize = new Sequelize()

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique : true,
            allowNull : false,
            validate : {
                notEmpty : true,
                notNull: true,
                len: [3,20]
            }
        },
        password: DataTypes.STRING,
        phone : DataTypes.STRING
    }, {})

    User.associate = (db) => {
        User.hasMany(db.Todo)
    }

    return User
}