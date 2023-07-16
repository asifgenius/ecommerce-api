const purchaseHistoryService = require('./purchaseHistory.service')

exports.addPurchaseHistory = async (req, res, next) => {
	try {
		await purchaseHistoryService.addPurchaseHistory(req.body)
		return res.status(201)
	}
	catch (error) {
		return next(error)
	}
}

exports.getPurchaseHistoryList = async (req, res, next) => {
	try {
		let offset = 0;
		let limit = 10;

		if(req.query.offset) {
			offset = req.query.offset;
		}
		if(req.query.limit) {
			limit = req.query.limit;
		}

		const data = await purchaseHistoryService.getPurchaseHistoryList(req.body, req.query.offset, req.query.limit)
		return res.status(200).json({
			data
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.getPurchaseHistory = async (req, res, next) => {
	try {
		await purchaseHistoryService.getPurchaseHistory(req.body)
		return res.status(200)
	}
	catch (error) {
		return next(error)
	}
}

exports.updatePurchaseHistory = async (req, res, next) => {
	try {
		await purchaseHistoryService.updatePurchaseHistory(req.params.id, req.body)
		return res.status(200)
	}
	catch (error) {
		return next(error)
	}
}

exports.deletePurchaseHistory = async (req, res, next) => {
	try {
		await purchaseHistoryService.deletePurchaseHistory(req.params.id)
		return res.status(200)
	}
	catch (error) {
		return next(error)
	}
}