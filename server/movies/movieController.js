var Movie = require('./movieModel.js');
// don't need to import mongoose here or not b/c requiring movieModel, which requires mongoose?

module.exports = {

  allMovies: function(req, res, next) {
    console.log('allMovies req.body:', req.body)
    Movie.find()
      .then(function(movies) {
        res.send(movies);
        // res.json(movies);?
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
      // .fail(function(err) {
      //   next(err);
      // })
  },

  toggleSave: function(req, res, next) {
    console.log('toggleSave req.body: ', req.body)
    var title = req.body.title;
    var year = req.body.year;
    var desription = req.body.description;
    var genre = req.body.genre;
    var poster = req.body.poster;

    Movie.findOne({title: title})
      .then(function(movie) {
        if (!movie) {
          console.log('toggleSave: no movie found with that title')
          return Movie.create({
            title: title, 
            year: year,
            description: description,
            genre: genre,
            poster: poster
          }, function(err, title) {
            if (err) return handleError(err);
          })
          .then(function() {
            console.log('completed Movie.create');
          })
        } else {
          console.log('toggleSave: movie found, removing movie')
          return Movie.remove({title: movie.title}, function(err) {
            if (err) return handleError(err);
          });
        }
      });
  }








  // newMovie: function(req, res, next) {
  //   findOne({title: title})
  //     .then(function(match) {
  //       if (match) {
  //         res.send(match);
  //         //res.send(match[0])
  //       } else {
  //         // do something
  //       }
  //     })
  //     .then(function(title) {
  //       if (title) {
  //         var newMovie = {
  //           // fill out fields
  //         };
  //         // return createMovie function w/ newMovie
  //       }
  //     })
  //     .then(function(createdMovie) {
  //       if (createdMovie) {
  //         res.json(createdMovie);
  //       }
  //     })
  //     .fail(function(error) {
  //       next(error);
  //     })
  // }

}