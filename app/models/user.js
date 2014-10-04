var mongoose = require('mongoose'),
  bitcoin = require('bitcoinjs-lib'),
  testnet = bitcoin.networks.testnet;

var userSchema = mongoose.Schema({
  telNo: { type: String, unique: true },
  wallet: [{
    pubKey: String,
    privKey: String,
    amount: Number,
  }]
});

userSchema.methods.newAddressSet = function(key){
  this.model('User').update({ _id: this.id }, { 
    $push : { wallet: {
      privKey: key.toWIF(),
      pubKey: key.pub.getAddress(testnet).toString(),
      amount: 0,
    }
    }
  }, function(err){ if (err) console.log(err) });

  return;
}

userSchema.statics.createUser = function(phone_number){
  var key = bitcoin.ECKey.makeRandom();
  var newUser = new User({
    telNo: phone_number,
  })

  newUser.save(function (err){
    if (err) console.log(err);
  });

  return newUser;
}
var User = mongoose.model('User', userSchema);

