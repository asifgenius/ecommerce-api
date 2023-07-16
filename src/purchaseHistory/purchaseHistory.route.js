const express = require("express");
const router = express.Router();
const purchaseHistoryController = require('./purchaseHistory.controller');
router.post('/', purchaseHistoryController.addPurchaseHistory)
router.get('/', purchaseHistoryController.getPurchaseHistoryList)
router.post('/', purchaseHistoryController.getPurchaseHistory)
router.patch('/:id', purchaseHistoryController.updatePurchaseHistory)
router.delete('/:id', purchaseHistoryController.deletePurchaseHistory)

module.exports = router;