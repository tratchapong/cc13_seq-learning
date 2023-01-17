// const {Sequelize , DataTypes} = require('sequelize')
// const sequelize = new Sequelize()

module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo',{
        title : DataTypes.STRING,
        completed : DataTypes.BOOLEAN,
    },{})

    Todo.associate = (db) => {
        Todo.belongsTo
    }

    return Todo
}