require("../models/connection");

var express = require('express');
var router = express.Router();

var moment = require('moment')

const Trip = require("../models/trips");

router.post('/', (req, res) => {
    const arrival = req.body.arrival;
    const departure = req.body.departure;
    const formattedDate = moment(req.body.date).format('YYYY-MM-DDT');
            Trip.find({ departure, arrival})
            .then(data => {
            const tripArray = []
            for (let trips of data) {
                if (moment(trips.date).format('YYYY-MM-DDT') === formattedDate) {
                tripArray.push(trips)
            }
        }
        res.json(tripArray)
    })
});

module.exports = router;
