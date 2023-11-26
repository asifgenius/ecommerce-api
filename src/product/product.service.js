const { model } = require('mongoose');
const ObjectId = require('mongoose').ObjectId;
const Product = model('Product');

exports.addProduct = async (data) => {
	return await Product.create(data);
}

exports.getProductList = async (skip, limit) => {
	return await Product.find().skip(skip).limit(limit).sort('_id').lean();
}

exports.getProduct = async (data) => {
	return await Product.findOne(data);
}

exports.updateProduct = async (id, data) => {
	await Product.updateOne({ _id: id }, data);

}

exports.deleteProduct = async (id) => {
	await Product.deleteOne({ _id: id });
}
