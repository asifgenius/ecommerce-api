const { req, res, next } = require('express')
const categoryService = require('./category.service')

exports.addCategory = async (req, res, next) => {
	try {
		await categoryService.addCategory(req.body)
		return res.status(201).json({
			massage: "Category item added sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.getCategoryList = async (req, res, next) => {
	try {
		let offset = 0;
		let limit = 10;

		if(req.query.offset) {
			offset = req.query.offset;
		}
		if(req.query.limit) {
			limit = req.query.limit;
		}
	const data=	await categoryService.getCategoryList(req.body, req.query.offset, req.query.limit)
		return res.status(200).json({
		data
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.getCategory = async (req, res, next) => {
	try {
		await categoryService.getCategory(req.body)
		return res.status(200).json({
			massage: "Category item find sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.updateCategory = async (req, res, next) => {
	try {
		await categoryService.updateCategory(req.params.id, req.body)
		return res.status(200).json({
			massage: "Category item has been updated sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.deleteCategory = async (req, res, next) => {
	try {
		await categoryService.deleteCategory(req.params.id)
		return res.status(200).json({
			massage: "Category item has been deleted sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}