var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 80

app.listen(PORT);
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/public', express.static('public'));

app.get('/', function(request, respons) {
	respons.sendFile(__dirname + '/index.html');
});

app.get('/ab', function(request, respons) {
	respons.sendFile(__dirname + '/ab.html');
});

app.get('/st/:mail', function(request, respons) {
	respons.send('mail = ' + request.params.mail);
});

app.post('/set', urlencodedParser, function(request, respons) {
	console.log(request.body)
	var tt = request.body
	fs.appendFileSync("public/ls.txt", "as.push('"+tt.mail+"'); ");
	// fs.writeFileSync("public/ls.txt", "as.push('"+tt.mail+"'); ");
	var file_readed = fs.readFileSync('public/ls.txt', 'utf8');
	respons.send('Otpravleno ' + file_readed);
});
