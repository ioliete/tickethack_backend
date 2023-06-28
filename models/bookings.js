const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    travelInfo: String,
    departureTime: String,
    price: String,
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;