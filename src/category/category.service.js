const { model } = require('mongoose');
const ObjectId = require('mongoose').ObjectId;
const Category = model('Category');

exports.addCategory = async (data) => {
	return await Category.create(data);
}

exports.getCategoryList = async (skip, limit) => {
	return await Category.find().skip(skip).limit(limit).sort('_id').lean();

}

exports.getCategory = async (data) => {
	return await Category.findOne(data);
}

exports.updateCategory = async (id, data) => {
	await Category.updateOne({ _id: id }, data);

}

exports.deleteCategory = async (id) => {
	await Category.deleteOne({ _id: id });
}
