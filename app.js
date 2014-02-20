
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var voyageController = require('./controllers/voyagecontroller.js');


var app = express();


// all environments
app.set('port', process.env.PORT || 3005);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// routes
app.get('/', voyageController.location);
app.get('/next', voyageController.nextjson);
app.get('/location/:location', voyageController.location);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
