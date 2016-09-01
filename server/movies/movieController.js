var Movie = require('./movieModel.js');

module.exports = {

  allMovies: function(req, res, next) {
    console.log('allMovies req.body:', req.body)
    Movie.find()
      .then(function(movies) {
        res.send(movies);
      })
      .fail(function(err) {
        next(err);
      });
  },

  savedMovies: function(req, res, next) {
    console.log('inside savedMovies');
    Movie.find()
      .then(function(saved) {
        res.send(saved);
      })
  },

  toggleSave: function(req, res, next) {
    console.log('toggleSave req.body: ', req.body)
    var title = req.body.title;
    var year = req.body.year;
    var description = req.body.description;
    var genre = req.body.genre;
    var poster = req.body.poster;

    Movie.findOne({title: title})
      .then(function(movie) {
        if (!movie) {
          console.log('toggleSave: no movie found with that title: ', title);
          var newMovie = new Movie({
            title: title, 
            year: year,
            description: description,
            genre: genre,
            poster: poster
          });
          newMovie.save(function(err) {
            if (err) return handleError(err);
            console.log('error creating movie document');
          })
        } else {
          console.log('toggleSave: movie found, removing movie');
          Movie.remove({title: movie.title}, function(err) {
            if (err) return handleError(err);
          });
        }
      })

      // moodMovies: function(req, res, next) {
      //   // to do
      // }
  }
}