const express = require('express')
const app = express()
const bodyParser = require('body-parser');
require('./user/user.model');
require('./category/category.model');
require('./subCategory/subCategory.model');
require('./product/product.model');
require('./purchaseHistory/purchaseHistory.model')
// Middleware to parse JSON data
app.use(express.json());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.use(require('./router'))
require('./database')
const port = 5000;

app.listen(port, () => {
	console.log(`server is running at ${port}`);
})