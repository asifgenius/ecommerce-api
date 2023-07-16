
const mongoose = require('mongoose');
require('dotenv').config()

if (NODE = 'development') {
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
      console.log('Connected to database');
    })
    .catch((error) => {
      console.error('Error connecting to database', error);
    });
}