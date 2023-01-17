const { Op } = require('sequelize')
const { sequelize, Product, Category } = require("../models");

exports.getAllProducts = (req, res, next) => {
  Product.findAll({
    include: Category,
  }).then((rs) => {
    const out = rs.map( el=> ( {
        id: el.id,
        pro_name: el.name,
        price: el.price,
        category : el.Category.name
    } ))
    res.json(out);
  }).catch(next)
};

exports.getProduct = (req, res, next) => {
  const { id } = req.params;
  Product.findByPk(id).then( rs => {
    res.json(rs)
  }).catch(next)
};

exports.getByName = (req, res, next) => {
  if (!req.query.keyword) return next();
  const { keyword } = req.query;
  Product.findAll({
    where : { name: { [Op.like] : `%${keyword}%`  } }
  }).then(rs => {
    res.json(rs)
  }).catch(next)
};

exports.createProduct = (req, res, next) => {
  let product = req.body; // {name: xxx, price: xx, cat_id: xx}
  Product.create(product).then(rs =>
    res.json(rs)
  ).catch(next)
};

exports.updateProduct = (req, res, next) => {
  let { id } = req.params;
  let product = req.body; // {name: xxx, price: xx, cat_id: xx}
  Product.update(product,{
    where : { id : id}
  }).then(rs => {
    res.json({msg: (rs>0)? 'Update OK' : 'Cannot Update'})
  }).catch(next)
};

exports.deleteProduct = (req, res, next) => {
  let { id } = req.params;
  Product.destroy({
    where: { id }
  }).then(rs => {
    res.json({msg: (rs>0)? 'Delete OK' : 'Cannot Delete'})
  }).catch(next)
};
