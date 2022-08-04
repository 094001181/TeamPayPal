//import express
//create a router object
var express = require('express');
var router = express.Router();

//get home page
router.get('/', function (req, res, next) {
  let links = [
    {
      'desc': 'PayPal Main Commerce Site both both personal accounts and for business.',
      'title': 'Paypals Main Commerce Site',
      'alink': 'https://www.paypal.com/ca/home'
    },
    {
      'desc': 'PayPals developers site. Site used for developers to access tools for implementing paypal into their programs.',
      'title': 'PayPal Developers Site',
      'alink': 'https://developer.paypal.com/home'
    },
    {
      'desc': 'PayPal developers support options.',
      'title': 'Paypals Developers Support Site',
      'alink': 'https://developer.paypal.com/docs/support/'
    },
    {
      'desc': 'Sandbox Login - Personal and Business.',
      'title': 'Sandbox Login - Personal and Business.',
      'alink': 'https://sandbox.paypal.com'
    },
    {
      'desc': 'npm is the package manager for Node.js',
      'title': 'NPMJS',
      'alink': 'https://www.npmjs.com/'
    }
  ];


  //pass the view name and content (Json)
  res.render('index', {
    title: 'Team - Pay Pal',
    description: 'Team Members: Michelle Commanda, Bryan Lorenti, Jonathan Penman, Bibek Poudel',
    credit: 'Credit to Boot Strap Made for the use of the free template.',
    creditwww: 'https://bootstrapmade.com/demo/iPortfolio/',
    links: links,
    content2: ''
  });
});

//export the router object 
module.exports = router;
