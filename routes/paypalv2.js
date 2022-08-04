var express = require('express');
var router = express.Router();
var paypal = require('paypal-rest-sdk');
 
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'ARw1VRjpFbIav9RRXQBfRzYSpVXQ06yQvxZhwrxVEBvPUcHitMtGl9jYA4Aohee6jTw0kYNemcCxc9GQ',
  'client_secret': 'EL8u3QI4Otvll1kNeoben3itn0wneqawp8WpoxEz2jhUspULW6mOsPDOG6QpwJO8Qgd0_pXOLahGJMXh'
});


//get Page Options for PayPal Demo
router.get('/', (req, res, next) => {
    res.render('paypalv2', {
      title: 'Pay Pal Demo',
      description: 'Welcome to our Pay Pal Demo - Enjoy',
      descriptionItem: 'There is currently a 5.50 USD item in the cart for demo purchase'
    });
  });


  router.post('/', (req, res) => {
    const create_payment_json = {
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
          "return_url": "https://teampaypal-java2068.herokuapp.com/thankyou",
          "cancel_url": "https://teampaypal-java2068.herokuapp.com/cancelpaypal"
      },
      "transactions": [{
          "item_list": {
              "items": [{
                  "name": "Demo Product - Team PayPal",
                  "sku": "001",
                  "price": "5.50",
                  "currency": "USD",
                  "quantity": 1
              }]
          },
          "amount": {
              "currency": "USD",
              "total": "5.50"
          },
          "description": "This is a demo product from Team PayPal"
      }]
  };
   
  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        for(let i = 0;i < payment.links.length;i++){
          if(payment.links[i].rel === 'approval_url'){
            res.redirect(payment.links[i].href);
          }
        }
    }
  });
   
  });

  module.exports = router;
