require("../models/connection");

var express = require('express');
var router = express.Router();

const Cart = require("../models/cart");

router.post('/',  (req, res) => {
    const newTrip = new Cart ({
        travelInfo : req.body.travelInfo,
        departureTime : req.body.departureTime,
	    price: req.body.price,
    })    
    newTrip.save().then(data => {console.log(data)
    res.json( data )
})
});

router.get('/', (req, res) =>{
    Cart.find({}).then(data => {
    res.json(data)})
    })
    
    router.delete('/', (req, res) =>{
      const departureTime = req.query.departureTime;
    
      Cart.deleteOne({ departureTime })
          .then(dataa => {
              console.log("Data deleted");
              res.json(dataa);
          })
    })


module.exports = router;