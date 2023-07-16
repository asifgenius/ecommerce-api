const { Schema, model, default: mongoose } = require('mongoose')

const subCategorySchema = new Schema({
	name: {
		type: String,
		require: true
	},
	categoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
		require: true
	}
}, { timestamps: true })

model("SubCategory", subCategorySchema);