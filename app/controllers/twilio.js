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
})


