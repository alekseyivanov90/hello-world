var express = require('express');
var app = express();
const PORT = process.env.PORT || 80

app.listen(PORT);

app.get('/', function(request, respons) {
	respons.sendFile(__dirname + '/index.html');
});
