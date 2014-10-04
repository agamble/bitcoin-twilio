var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	telNo: String,
	wallet: [{
		pubKey: String,
		privKey: String,
		amount: Number
	}]
});

var User = mongoose.model('User', userSchema);


module.exports = User;

//HELPER FUNCTIONS

//input: [addresses storing bitcoins, public keys]
//output: 

//take prev transac hash

//transaction hash, inputs, outputs -> public
//store the trans hash and outputs, 
//take trans and output and take private key and sign trans