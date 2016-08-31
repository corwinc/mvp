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
    // var title = req.body.title;
    // var year = req.body.year;
    // var description = req.body.description;
    // var genre = req.body.genre;
    // var poster = req.body.poster;

    var title = JSON.stringify(req.body.title);
    var year = req.body.year;
    var description = JSON.stringify(req.body.description);
    var genre = JSON.stringify(req.body.genre);
    var poster = JSON.stringify(req.body.poster);

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