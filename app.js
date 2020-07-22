
'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var express = require('express');
var app = express();

app.put('/', function (req, res) {
    res.send('');
});

app.post('/', function (req, res) {
    console.log(req.query.bodyParser);
    res.send('POST request to homepage')
})

app.get('/', function (req, res) {
    res.send('POST request to homepage')
})

app.delete('/', function (req, res) {
    res.send('POST request to homepage')
})

app.set('port', process.env.PORT || 2000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});