const mongoose = require('mongoose');

const cartsSchema = mongoose.Schema({
	departure: String,
	arrival: String,
	date: Date,
	price: Number,
});

const carts = mongoose.model('carts', cartsSchema);

module.exports = Cart;