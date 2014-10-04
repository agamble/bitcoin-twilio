var express = require('express'),
router = express.Router(),
mongoose = require('mongoose'),
twilio = require('twilio'),
client = twilio('ACd2390c2bf35944bb1d2b4c54da8e9f6a', 'cf310acd5bb66320b2e3201fe824d71b'),
User = mongoose.model('User'),
Transaction = mongoose.model('Transaction');

module.exports = function (app) {
  app.use('/', router);
};

var sendBitcoinFromTo = function(sendingUser, receivingUser, amount){
  var destinationKey = bitcoin.ECKey.makeRandom();
  var changeKey = bitcoin.ECKey.makeRandom();

  Transaction.find({})

}

router.post('/twilio/text', function(req, res, next){
  console.log(req.body);

  var data = req.body.Body.split(' ');

  if (data.length < 3) return sendInvalidMessage("too short");
  if (data[0].split('')[-1] != 'c' && data[0].split('')[-1] != 'C') return sendInvalidMessage("invalid bitcoin amount");

  if (!userHasEnoughBitcoins(req.body.From)) return sendInvalidMessage("you don't have enough bitcoins");

  var receivingPhoneNumber = '0' + data[2].slice(3);
  var sendingPhoneNumber = '0' + req.body.From.slice(3);

  User.find({ telNo: {
    $in : [receivingPhoneNumber, sendingPhoneNumber]
  }
  }, function(err, docs){
    if (docs.length == 0) return sendInvalidMessage("you aren't registered!");
    if (docs.length == 1 && docs[0].telNo != sendingPhoneNumber) return sendInvalidMessage("you aren't registered!");

    if (docs.length == 1 && docs[0].telNo == receivingPhoneNumber) User.createUser(receivingPhoneNumber);

    var sendingUser, receivingUser;
    if (docs.length == 2 && docs[0].telNo == sendingPhoneNumber){
      sendingUser = docs[0];
      receivingUser = docs[1];
    } else {
      receivingUser = docs[0];
      sendingUser = docs[1];
    }

    sendBitcoinFromTo(sendingPhoneNumber, receivingUser, amount);
  });

})
