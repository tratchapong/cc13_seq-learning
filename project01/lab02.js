const { Sequelize , DataTypes, Op} = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: 'Codecamp2021',
    database: 'cc13_lab01',
    dialect: 'mysql'
})

const Category = sequelize.define('Category', {
    CategoryID : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    CategoryName: DataTypes.STRING,
    Description: DataTypes.STRING
}, {
    timestamps: false
})

const nice = jss => console.log(JSON.stringify(jss,null,2)) 
// Category.findAll().then(console.log)    

// Category.findAll().then(rs => console.log(JSON.stringify(rs, null, 2)))
// Category.findAll().then(nice)

// Category.update(
//  { CategoryName : 'Curry DD', Description: 'Good curry'},
//  { where: {CategoryID: 9}}).then(nice)

// Category.destroy({
//     where: { CategoryID : 9}
// }).then(nice)

// Category.bulkCreate([
//     { CategoryName : 'Curry 01', Description: 'Good curry 01'},
//     { CategoryName : 'Curry 02', Description: 'Good curry 02'},
//     { CategoryName : 'Curry 03', Description: 'Good curry 03'},
//     { CategoryName : 'Curry 04', Description: 'Good curry 04'},
//     { CategoryName : 'Curry 05', Description: 'Good curry 05'},
// ]).then(nice)

// Category.destroy({
//     where : { CategoryID : { [Op.gt] : 9 } }
// })

// Category.findByPk(4).then(nice)

// Category.findAndCountAll({}).then(nice)

const Product = sequelize.define('product', {
    ProductID : {
      type : DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    ProductName : DataTypes.STRING,
    SupplierID: DataTypes.INTEGER,
    CategoryID: DataTypes.INTEGER,
    Unit: DataTypes.STRING,
    Price: DataTypes.DECIMAL(10,2)
  },{
    timestamps: false
  })

Product.count({
    where : { price : {[Op.gt]: 50}}
}).then(nice)

// Product.findAll({ limit: 5, offset: 3}).then(nice)

// Product.findAll({
//     attributes : [ 'CategoryID', [sequelize.fn('COUNT',sequelize.col("ProductID")), "numProduct"]],
//     where : {},
//     group : 'CategoryID'
// }).then(nice)

// Product.findAll({
//     where : { ProductName : { [Op.like] : '%mi%' }}
// }).then(nice)

// Product.findAll({
//     where : {
//         [Op.or]: [
//             { },
//             { price: {[Op.between]: [50, 100]} }
//           ]
//     }
// }).then(nice)


//   Product.findAll({
//     attributes : [ [sequelize.fn('COUNT',sequelize.col("ProductID")), "numProduct"]],
//     where : { price : { [Op.gt] : 100 }},
//     raw: true,
//     nest: true
//   }).then(rs => console.log(rs[0].numProduct))
//   }).then(rs => console.log(JSON.parse(JSON.stringify(rs))[0].numProduct))




  const Supplier = sequelize.define('supplier', {
    SupplierID : {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    SupplierName : DataTypes.STRING,
    ContactName: DataTypes.STRING,
    Address : DataTypes.STRING,
    City : DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Country: DataTypes.STRING,
    Phone : DataTypes.STRING,
  },{
    timestamps: false
  })



// let newCat = {
//     CategoryName: 'NewCat_01',
//     Description: 'Detail Note...'
// }


// Category.create(newCat).then(nice)

// Product.findAll({
//   attributes: [
//     'ProductID', 'ProductName',
//     [sequelize.fn('COUNT', sequelize.col('ProductID')), 'n_ProductID'],
//     'CategoryID'
//   ],
//   group: 'CategoryID'
// }).then(nice);

// Product.findAll({
//   attributes: [
//     'ProductID', 'ProductName',
//     [sequelize.fn('COUNT', sequelize.col('ProductID')), 'num'],
//     'CategoryID'
//   ],
//   group: 'CategoryID',
//   raw: true,
// //   nest: true
// }).then(rs => {
//     console.log(rs[0].num)
// });