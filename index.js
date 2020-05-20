var express = require('express');
var app = express();
const PORT = process.env.PORT || 80

app.listen(PORT);

app.use('/file', express.static('file'));

var server = require('https').createServer(app);
var io = require('socket.io').listen(server);

// Отслеживание порта
// server.listen(3000);

// Отслеживание url адреса и отображение нужной HTML страницы
app.get('/', function(request, respons) {
	respons.sendFile(__dirname + '/index.html');
});
