const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
	name: {
		type: String,
		require: true
	},
	description: String
}, { timestamps: true })

model("Category", categorySchema);