const userService = require('./user.service')

exports.addUsers = async (req, res, next) => {
	try {
		const userData = await userService.addUser(req.body)
		return res.status(201).json({
			userData,
			massage: "User add sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.getUserList = async (req, res, next) => {
	try {
		let offset = 0;
		let limit = 10;

		if (req.query.offset) {
			offset = req.query.offset;
		}
		if (req.query.limit) {
			limit = req.query.limit;
		}
		const data = await userService.getUserList(req.body, req.query.offset, req.query.limit)
		return res.status(200).json({
			data,
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.getUser = async (req, res, next) => {
	try {
		const data = await userService.getUser(req.body)
		return res.status(201).json({
			data,
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.updateUser = async (req, res, next) => {
	try {
		await userService.updateUser(req.params.id, req.body)
		return res.status(200).json({
			massage: "User has been updated sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}

exports.deleteUser = async (req, res, next) => {
	try {
		await userService.deleteUser(req.params.id)
		return res.status(200).json({
			massage: "User has been deleted sucessfully",
			success: true
		})
	}
	catch (error) {
		return next(error)
	}
}