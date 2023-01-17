const {sequelize, Category, Product, Supplier} = require('./models')

const nice = jss => console.log(JSON.stringify(jss,null,2)) 


Product.findAll({
    where : { ProductID: 4},
    include : [
        { model : Category },
        { model : Supplier }
    ]
}).then(nice)

Supplier.findAll({
    where: { SupplierID : 2},
    include : [
        { model : Product,
          include : Category
        }
    ]
}).then(nice)


// Product.findAll().then(nice)

// Category.findAll({
//     where : { CategoryID : 1},
//     include: Product
// }).then(nice)

// Product.findAll({
//     where: { ProductID: 1},
//     include: Category
// }).then(rs => {
//     console.log(rs[0].Category.CategoryName)
// })

// Supplier.findAll({
//     attributes : ['SupplierName'],
//     where : { SupplierID : 1},
//     include : {
//         model : Product,
//         attributes : ['ProductName', 'price']
//     }
// }).then(rs => {
//     nice(rs)
// })

// Product.findAll({
//     where : { SupplierID : 1},
//     include : {
//         model : Supplier
//     }
// }).then(rs => {
//     // nice(rs[0].supplier.SupplierName)
//     // let out = {
//     //     pro_name : rs[0].ProductName,
//     //     sup_name : rs[0].supplier.SupplierName
//     // }
//     let out = rs.map(el => ( {
//         pro_name : el.ProductName,
//         sup_name : el.supplier.SupplierName
//     }))
//     console.log(out)
// })

// Output

// { SupplierName : Exot.... ,
//      Product : [
//        { PuctNrodame : .... ,
//         price : ... },
//        { PuctNrodame : .... ,
//         price : ... },
//      ]
// }
