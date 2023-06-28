require("../models/connection");

var express = require('express');
var router = express.Router();

const Booking = require("../models/bookings");
const Cart = require("../models/cart");

router.post('/',  (req, res) => {
    Cart.find({})
    .then(data => {
        
        for (let bookings of data) {
            const newBooking = new Booking ({
            travelInfo : bookings.travelInfo,
            departureTime : bookings.departureTime,
            price: bookings.price,
        })    
        newBooking.save().then(data => {
            res.json({data})
        })
        Cart.deleteMany().then(() => {})
        }
    })
})

router.get('/', (req, res) =>{
    Booking.find({}).then(data => {
    res.json(data)})
    })

module.exports = router;