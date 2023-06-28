const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
	travelInfo: String,
	departureTime: String,
	price: String,
});

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;