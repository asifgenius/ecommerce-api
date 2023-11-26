const express = require("express");
const router = express.Router();
const userRouter = require("../user/user.route")
const categoryRouter = require("../category/category.route")
const subCategoryRouter = require("../subCategory/subCategory.route")
const productRouter = require("../product/product.route")
const purchaseHistoryRouter = require("../purchaseHistory/purchaseHistory.route");
const { requiresAuth } = require("../auth/jwt");

router.use('/api/v1/users', requiresAuth, userRouter)
router.use('/api/v1/categories', requiresAuth, categoryRouter)
router.use('/api/v1/subCategories', requiresAuth, subCategoryRouter)
router.use('/api/v1/products', requiresAuth, productRouter)
router.use('/api/v1/purchases', requiresAuth, purchaseHistoryRouter)

module.exports = router;