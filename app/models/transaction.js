var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bitlio');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});

var transactionSchema = mongoose.Schema({
	inputs: [{ // outputs of prev transaction
		address: String
	}]
	outputs: [{
		address: String,
		//need to check if output matches a user 
	}]
	transactionHash: String
});

var Transaction = mongoose.model('Transaction', transactionSchema);


//when blockchain sends an event where the output = one of our inputs... create a new transaction
//transaction holds unknown input and output = one of the user addresses


//301: send 2BTC to 302 - check if they have 2BTC.
//If so, create a new transaction with input containing output of previous transaction
// and take transaction hash to newly generated random address
// and take private key of prev transaction and sign (within node)