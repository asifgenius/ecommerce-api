const express = require("express");
const router = express.Router();
const productController = require('./product.controller')
router.post('/', productController.addProduct)
router.get('/', productController.getProductList)
router.post('/', productController.getProduct)
router.patch('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router;