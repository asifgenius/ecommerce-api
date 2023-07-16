const { model } = require('mongoose');
const ObjectId = require('mongoose').ObjectId;
const User = model('User');

exports.addUser = async (data) => {
	return await User.create(data);
}

exports.getUserList = async (data, skip, limit) => {
	return await User.find(data).skip(skip).limit(limit).sort('_id').lean();
}

exports.getUser = async (data) => {
	return await User.findOne(data);
}

exports.updateUser = async (id, data) => {
	await User.updateOne({ _id: id }, data);
}

exports.deleteUser = async (id) => {
	await User.deleteOne({ _id: id });
}
