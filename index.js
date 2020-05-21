var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 80

app.listen(PORT);
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(request, respons) {
	respons.sendFile(__dirname + '/index.html');
});

app.get('/st/?mail/:mail', function(request, respons) {
	respons.send('mail = ' + request.params.mail);
});

app.get('/st/:mail', function(request, respons) {
	respons.send('mail = ' + request.params.mail);
});

app.post('/str', urlencodedParser, function(request, respons) {
	console.log(request.body)
	var tt = request.body
	fs.writeFileSync('ls.txt', tt.mail);
	var file_readed = fs.readFileSync('ls.txt', 'utf8');
	respons.send('Otpravleno ' +file_readed);
});
