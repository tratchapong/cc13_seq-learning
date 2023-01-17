const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize({
    host : 'localhost',
    username: 'root',
    password: 'Codecamp2021',
    database: 'cc13_shop',
    dialect: 'mysql'
})

const Product = sequelize.define('Product', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name : {
        type: DataTypes.STRING,
        validate: {
            len : [5, 100]
        }
    },
    price : {
        type: DataTypes.DECIMAL(10,2),
        validate: {
            isDecimal : true,
        }
    },
    cat_id: DataTypes.INTEGER
}, {
    timestamps: false
})

// Product.findAll().then(console.log)

const Category = sequelize.define('Category',{
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: DataTypes.STRING
}, {
    timestamps: false,
    freezeTableName: true
    // tableName: 'category'
})

Category.hasMany(Product,{
    foreignKey: 'cat_id'
})
Product.belongsTo(Category,{
    foreignKey: 'cat_id'
})

module.exports= { sequelize, Product, Category}