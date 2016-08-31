var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var movieController = require('./movies/movieController.js');
var morgan = require('morgan');
var bodyParser = require('body-parser');
// require mongoose here?

var app = express();

mongoose.connect('mongodb://localhost/roxbury');


mongoose.connection.on('connected', function() {
  console.log('mongoose connection is open');
});
mongoose.connection.on('error', function(err) {
  console.log('mongoose connection error: ', err);
})

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/////////  ROUTES  /////////
app.get('/server/movies', movieController.savedMovies); // what about loading the view?
app.post('/server/movies', movieController.toggleSave);
// app.get('server/movies/mood', movieController.moodMovies(mood));

app.use(express.static(path.join(__dirname, '../client')));


//////// INITIALIZE SERVER ////////
app.listen(3000, function() {
  console.log('FIRE ZE MISSILES!!!');
});

module.exports = app;