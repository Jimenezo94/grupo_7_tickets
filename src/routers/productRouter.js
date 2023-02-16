const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

productRouter.get('/carrito', productController.carrito);
productRouter.get('/detail', productController.detail);
//productRouter.get('/admin', productController.admin);

module.exports = productRouter;