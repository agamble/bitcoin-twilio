var WebSocket = require('ws');

var ws = new WebSocket('ws://ws.blockchain.info/inv');



ws.on('open', function(){
  ws.send(JSON.stringify({"op": "unconfirmed_sub"}))
})

ws.on('message', function(data, flags){
  console.log(data);
})
