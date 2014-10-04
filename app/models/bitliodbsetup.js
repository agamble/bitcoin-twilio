var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bitlio');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});

var userSchema = mongoose.Schema({
	telNo: String,
	wallet: [{
		pubKey: String,
		privKey: String
	}]
});

var User = mongoose.model('User', userSchema);

var testUser = new User({telNo: '07806256047', pubKey:'PUBKEY', privKey:'PRIVKEY'});

console.log(testUser);