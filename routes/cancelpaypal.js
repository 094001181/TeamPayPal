//import express
//create a router object
var express = require('express');
var router = express.Router();
router.get('/', (req, res, next) => {
    //pass the view name and content (Json)
    res.render('cancelpaypal', {
      title: 'Cancel Paypal',
      description: 'Your transaction was cancelled please return to the',
      linktext: 'Paypal Demo Cart',
      alink: 'https://teampaypal-java2068.herokuapp.com/paypalv2'
    });
  });
  
  //export the router object   
  module.exports = router;
  
  