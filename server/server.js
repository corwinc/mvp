var express = require('express');
var path = require('path');
// bookshelf?

var app = express();

// require('.config/middleware.js')(app, express);
// require('.config/routes.js')(app, express);

// app.get('/', function(req, res) {
//   res.send('Hello World!')
// });

// app.get('/', function(req, res) {
//   res.render('../client/index.html')
// })

app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000, function() {
  console.log('FIRE ZE MISSILES!!!');
});

module.exports = app;