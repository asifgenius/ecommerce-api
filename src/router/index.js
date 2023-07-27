const express = require("express");
const router = express.Router();
const userRouter = require("../user/user.route")
const categoryRouter = require("../category/category.route")
const subCategoryRouter = require("../subCategory/subCategory.route")
const productRouter = require("../product/product.route")
const purchaseHistoryRouter = require("../purchaseHistory/purchaseHistory.route")

router.use('/api/v1/users', userRouter)
router.use('/api/v1/categories', categoryRouter)
router.use('/api/v1/subCategories', subCategoryRouter)
router.use('/api/v1/products', productRouter)
router.use('/api/v1/purchases', purchaseHistoryRouter)
module.exports = router;