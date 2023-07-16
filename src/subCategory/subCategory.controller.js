const subCategoryService = require('./subCategory.service')


exports.addsubCategory = async (req, res, next) => {
	try {
		await subCategoryService.addsubCategory(req.body)
		return res.status(201).json({
			massage: "subCategory item added sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.getsubCategoryList = async (req, res, next) => {
	try {
		let offset = 0;
		let limit = 10;

		if (req.query.offset) {
			offset = req.query.offset;
		}
		if (req.query.limit) {
			limit = req.query.limit;
		}
		const data = await subCategoryService.getsubCategoryList(req.body, req.query.offset, req.query.limit)
		return res.status(200).json({
			data
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.getsubCategory = async (req, res, next) => {
	try {
		await subCategoryService.getsubCategory(req.body)
		return res.status(201).json({
			massage: "One subCategory item find sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.updatesubCategory = async (req, res, next) => {
	try {
		await subCategoryService.updatesubCategory(req.params.id, req.body)
		return res.status(200).json({
			massage: "subCategory item has been updated sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.deletesubCategory = async (req, res, next) => {
	try {
		await subCategoryService.deletesubCategory(req.params.id)
		return res.status(200).json({
			massage: "subCategory item has been deleted sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}