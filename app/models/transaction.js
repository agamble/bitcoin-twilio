var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bitlio');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});

var transactionSchema = mongoose.Schema({
	inputs: [{
		address: String
	}]
	outputs: [{
		address: String
	}]
	transactionHash: String
});


var User = mongoose.model('Transaction', transactionSchema);