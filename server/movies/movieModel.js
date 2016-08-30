var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  description: String,
  genre: String,
  poster: String
});

module.exports = mongoose.model('Movie', MovieSchema);


// store multiple users to movie schema or create separate table for many/many relationship?
