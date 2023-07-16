const { Schema, model, default: mongoose } = require('mongoose')

const productSchema = new Schema({
	name: {
		type: String,
		require: true
	},
	description: String ,
	categoryId:{
		type: mongoose.Schema.Types.ObjectId,
		require: true,
		ref: "Category",
	},
	subCategoryId:{
		type: mongoose.Schema.Types.ObjectId,
		require: true,
		ref: "SubCategory",
	},
	productcode:{
		type: String,
		require: true
	},
	quantity:{
		type: String,
		require: true
	}
}, { timestamps: true })

model("Product", productSchema);