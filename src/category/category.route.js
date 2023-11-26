const express = require("express");
const router = express.Router();
const {  requiresAuth } = require('../auth/jwt');
const categoryController = require('./category.controller');
router.post('/', requiresAuth, categoryController.addCategory)
router.get('/', requiresAuth, categoryController.getCategoryList)
router.post('/', requiresAuth, categoryController.getCategory)
router.patch('/:id', requiresAuth, categoryController.updateCategory)
router.delete('/:id', requiresAuth, categoryController.deleteCategory)

module.exports = router;