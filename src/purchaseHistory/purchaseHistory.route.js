const express = require("express");
const router = express.Router();
const {  requiresAuth } = require('../auth/jwt');
const purchaseHistoryController = require('./purchaseHistory.controller');
router.post('/', requiresAuth, purchaseHistoryController.addPurchaseHistory)
router.get('/', requiresAuth, purchaseHistoryController.getPurchaseHistoryList)
router.post('/', requiresAuth, purchaseHistoryController.getPurchaseHistory)
router.patch('/:id', requiresAuth, purchaseHistoryController.updatePurchaseHistory)
router.delete('/:id', requiresAuth, purchaseHistoryController.deletePurchaseHistory)

module.exports = router;