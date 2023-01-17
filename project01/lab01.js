const { Sequelize , DataTypes} = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: 'Codecamp2021',
    database: 'cc13_lab01',
    dialect: 'mysql'
})

const PersonInRoom = sequelize.define('PersonInRoom', {
    firstName : DataTypes.STRING,
    lastName : {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // freezeTableName: true,
    // tableName: 'Users',
    // underscored: true,
    timestamps: false
})

const Product = sequelize.define('Product', {
    productId : {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        // allowNull: false,
        primaryKey: true
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    note: DataTypes.STRING
},{
    timestamps: false
})

console.log(sequelize.getDatabaseName())

// Product.drop().then(console.log)


// sequelize.sync({force:true})


// Product.create({
//     name: 'Excel',
//     price: 200.75,
//     note: 'Excel Book'
// }).then( rs => console.log(rs))


// PersonInRoom.sync({force: true})

// Product.sync({force: true})



// sequelize.query('Create Database cc13_lab01')
// .then(console.log)




// sequelize.query('Select * from products')
// .then( (rs) => console.log(rs[0][3].name))




// sequelize.authenticate()
// .then( ()=> console.log('DB Connect OK'))
// .catch( err => console.log(err.message))



// async function run() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }

// run()