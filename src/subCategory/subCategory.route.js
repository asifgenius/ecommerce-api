const express = require("express");
const router = express.Router();
const subCategoryController = require('./subCategory.controller');
router.post('/', subCategoryController.addsubCategory)
router.get('/', subCategoryController.getsubCategoryList)
router.post('/', subCategoryController.getsubCategory)
router.patch('/:id', subCategoryController.updatesubCategory)
router.delete('/:id', subCategoryController.deletesubCategory)

module.exports = router;