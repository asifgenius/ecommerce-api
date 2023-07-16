const { model } = require('mongoose');
const ObjectId = require('mongoose').ObjectId;
const PurchaseHistory = model('PurchaseHistory');

exports.addPurchaseHistory = async (data) => {
	return await PurchaseHistory.create(data);
}

exports.getPurchaseHistoryList = async (data, skip, limit) => {
	return await PurchaseHistory.find(data).skip(skip).limit(limit).sort('_id').lean();
}

exports.getPurchaseHistory = async (data) => {
	return await PurchaseHistory.findOne(data);
}

exports.updatePurchaseHistory = async (id, data) => {
	await PurchaseHistory.updateOne({ _id: id }, data);

}

exports.deletePurchaseHistory = async (id) => {
	await PurchaseHistory.deleteOne({ _id: id });
}
