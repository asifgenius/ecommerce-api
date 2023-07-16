const { Schema, model } = require('mongoose')

const userSchema = new Schema({
	firstName: {
		type: String,
		require: true
	},
	lastName: {
		type: String,
		require: true
	},
	email: {
		type: String,
		unique: true,
		require: true
	},
	
	mobile:{
		type: String,
		unique: true,
		require: true
	},
	address:{
		type: String,
		require: true
	}
}, { timestamps: true })

model("User", userSchema);