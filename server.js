var express =require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require('fs');
var cors = require('cors');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function(){

	console.log("start 3000");

});

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({

	secret: 'nga',
	resave: false,
	saveUninitialized: true

}));

var router = require('./router/main')(app, fs);