//import express
//create a router object
var express = require('express');
var router = express.Router();
router.get('/', (req, res, next) => {
    //pass the view name and content (Json)
    res.render('thankyou', {
      title: 'Thank You',
      description: 'Thank you for supporting our Team :)'  
    });
  });
  
  //export the router object   
  module.exports = router;
  
  