var express = require('express'),
  bitcoin = require('bitcoinjs-lib'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/new', function (req, res, next) {

  res.render('new', {

  })

});

var renderAddressPage = function(res, user, key){
  res.render('new_send', {
    user: user,
    address: key.pub.getAddress(bitcoin.networks.testnet).toString(),
  })
}

router.get('/new/send', function(req, res, next){
  var key = bitcoin.ECKey.makeRandom();

  res.render('new_send', {
    pub_key: key.toWIF()
  })
})

router.post('/new', function(req, res, next){
  var params = req.body;
  var key = bitcoin.ECKey.makeRandom();

  User.find({ 'telNo': params.phone_number}, function(err, docs){
    if (docs.length > 0){
      docs[0].newAddressSet(key);
      renderAddressPage(res, docs[0], key);
    } else {
      var newUser = User.createUser(params.phone_number);
      newUser.newAddressSet(key);
      renderAddressPage(res, newUser, key);
    }
  });
})
