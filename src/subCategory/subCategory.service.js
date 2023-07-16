const { model } = require('mongoose');
const ObjectId = require('mongoose').ObjectId;
const SubCategory = model('SubCategory');

exports.addsubCategory = async (data) => {
	return await SubCategory.create(data);
}

exports.getsubCategoryList = async (data, skip, limit) => {
	return await SubCategory.find(data).skip(skip).limit(limit).sort('_id').lean();
}

exports.getsubCategory = async (data) => {
	return await SubCategory.findOne(data);
}

exports.updatesubCategory = async (id, data) => {
	await SubCategory.updateOne({ _id: id }, data);

}

exports.deletesubCategory = async (id) => {
	await SubCategory.deleteOne({ _id: id });
}
