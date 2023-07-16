const { req, res, next } = require('express')
const productService = require('./product.service')


exports.addProduct = async (req, res, next) => {
	try {
		await productService.addProduct(req.body)
		return res.status(201).json({
			massage: "product added sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.getProductList = async (req, res, next) => {
	try {		
		let offset = 0;
		let limit = 10;

		if(req.query.offset) {
			offset = req.query.offset;
		}
		if(req.query.limit) {
			limit = req.query.limit;
		}
		const data = await productService.getProductList(req.body, req.query.offset, req.query.limit)
		return res.status(201).json({
			data
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.getProduct = async (req, res, next) => {
	try {
		await productService.getProduct(req.body)
		return res.status(201).json({
			massage: "One product find sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.updateProduct = async (req, res, next) => {
	try {
		await productService.updateProduct(req.params.id, req.body)
		return res.status(200).json({
			massage: "product has been updated sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.deleteProduct = async (req, res, next) => {
	try {
		await productService.deleteProduct(req.params.id)
		return res.status(200).json({
			massage: "product has been deleted sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}