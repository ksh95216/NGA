const express = require('express');
const http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req,res,next){

	console.log('first');
	req.user='jinss';
	next();

	});

app.use('/', function(req,res,next){
	console.log('sec');
	res.writeHead('200',{'Content-Type': 'text/html; charset=utf8'});
	res.end('<h1 onclick=\'alert("fuck you")\'>a</h1>');
});


http.createServer(app).listen(app.get('port'), function(){

	console.log('start :' + app.get('port'));

})