var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  description: String,
  genre: String,
  poster: String
});

MovieSchema.pre('save', function(next) {
  console.log('inside pre-save middleware');
  next();
})

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;