var http = require('http'),
    twilio = require('twilio');

http.createServer(function (req, res) {
    //Create TwiML response
    var twiml = new twilio.TwimlResponse();
    twiml.say('Hello World!');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());

}).listen( process.env.PORT || 1337);

console.log('TwiML servin\' server running at http://127.0.0.1:1337/');

