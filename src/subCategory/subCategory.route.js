const express = require("express");
const router = express.Router();
const {  requiresAuth } = require('../auth/jwt');
const subCategoryController = require('./subCategory.controller');
router.post('/', requiresAuth, subCategoryController.addsubCategory)
router.get('/', requiresAuth, subCategoryController.getsubCategoryList)
router.post('/', requiresAuth, subCategoryController.getsubCategory)
router.patch('/:id', requiresAuth, subCategoryController.updatesubCategory)
router.delete('/:id', requiresAuth, subCategoryController.deletesubCategory)

module.exports = router;