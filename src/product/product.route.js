const express = require("express");
const router = express.Router();
const {  requiresAuth } = require('../auth/jwt');
const productController = require('./product.controller')
router.post('/', requiresAuth, productController.addProduct)
router.get('/', requiresAuth, productController.getProductList)
router.post('/', requiresAuth, productController.getProduct)
router.patch('/:id', requiresAuth, productController.updateProduct)
router.delete('/:id', requiresAuth, productController.deleteProduct)

module.exports = router;