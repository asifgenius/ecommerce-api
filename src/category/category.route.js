const express = require("express");
const router = express.Router();
const categoryController = require('./category.controller');
router.post('/', categoryController.addCategory)
router.get('/', categoryController.getCategoryList)
router.post('/', categoryController.getCategory)
router.patch('/:id', categoryController.updateCategory)
router.delete('/:id', categoryController.deleteCategory)

module.exports = router;