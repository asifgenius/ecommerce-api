const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { model } = require('mongoose');
const User = model("User")
const userService = require('./user.service');

exports.signup = async (req, res) => {
    const { firstName, lastName, password, email, mobile, address } = req.body;
    try {
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({
                massage: "User Already Exisiting"
            })
        }
        const hashPassword = await bcrypt.hash(password, 12)
        const users = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashPassword,
            mobile: mobile,
            address: address
        })
        const token = jwt.sign({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashPassword,
            mobile: mobile,
            address: address
        }, process.env.SECRET_KEY)
        res.status(200).json({
            user: users,
            token: token
        })
    }
    catch (error) {
        console.log("error", error)
        res.status(400).join({
            massage: "Error"
        })
    }
}


exports.signin = async (req, res) => {
    const { firstName, lastName, password, email, mobile, address } = req.body;
    try {
        const existingUser = await User.findOne({ email: email })
        if (!existingUser) {
            return res.status(404).json({
                massage: "User Not Found"
            })
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password)

        if (!matchPassword) {
            res.status(400).json({
                massage: "Not found"
            })
        }
        const token = jwt.sign({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: matchPassword,
            mobile: mobile,
            address: address
        }, process.env.SECRET_KEY)
        res.status(200).json({
            user: existingUser, token: token
        })
    }

    catch (error) {
        res.status(400).join({
            massage: error.massage
        })
    }
}


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