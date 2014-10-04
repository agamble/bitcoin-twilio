var mongoose = require('mongoose');
var Transaction = require('./app/models/transaction');
var User = require('./app/models/user');

mongoose.connect('mongodb://localhost/bitlio');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
});

var Websocket = require('ws');
var ws = new Websocket("ws://ws.blockchain.info/inv");

ws.on('open', function(){
	ws.send(JSON.stringify({"op":"unconfirmed_sub"}));
})

ws.on('message', function(data, flags){

	var obj = JSON.parse(data);
	var transHash = obj.x.hash;
	var addr = obj.x.out[0].addr;

	var queryResult;

	User.findOne({wallet: {outputs:{pubKey: addr}}}, function(err, transaction) {
		if (err){
			return console.error(err);
		}
		else{
			queryResult = transaction;
		}
	});

	if(queryResult != null){

		var prevTransaction = new Transaction({
			inputs: [{address: obj.x.inputs[0].prev_out.addr}],
			outputs: [{address: addr}],
			transactionHash: transHash
		});


		prevTransaction.save(function(err, prevTransaction) {
			if (err) return console.error(err);
			else {console.log("Got it! - " + transHash);}
		});
	}
	else{
		console.log("Ain't in the database");
	}



})