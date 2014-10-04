var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  twilio = require('twilio'),
  client = twilio('ACd2390c2bf35944bb1d2b4c54da8e9f6a', 'cf310acd5bb66320b2e3201fe824d71b');

module.exports = function (app) {
  app.use('/', router);
};

router.post('/twilio/text', function(req, res, next){
  console.log(req.body);
//
  if (req.body.From == '+447929032685') {
    var d = new Date();
    client.sms.messages.create({
      //For an "update", "create", "post", or "put" request these properties are form-encoded and sent to Twilio:
      to:'+447929032685',
      from:'+442033897508',
      body: 'Why did the computer crash?? Don\'t worry the answer is coming in 30 seconds!! ...the suspense is probably killing you'
    }, function(err, responseData) { //this function is executed when a response is received from Twilio

      setTimeout(function(){

        client.sms.messages.create({
          //For an "update", "create", "post", or "put" request these properties are form-encoded and sent to Twilio:
          to:'+447929032685',
          from:'+442033897508',
          body: 'It had a bad driver!! Isn\'t that an incredible joke??? It\'s no wonder you\'re going out with me'
        }, function(err, responseData) { //this function is executed when a response is received from Twilio

        })
      },30000)

    })
  }
})


