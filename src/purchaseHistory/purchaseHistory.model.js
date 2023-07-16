const { Schema, model, default: mongoose } = require('mongoose')

const purchaseHistorySchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		require: true,
		ref: "User",
	},
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		require: true,
		ref: "Product",
	},
	amount: {
		type: Number,
		require: true
	}
}, { timestamps: true })

model("PurchaseHistory", purchaseHistorySchema);