angular.module('roxbury.movies', [])

.controller('MoviesController', function ($scope, $http) {

  $scope.data = {};

  $scope.data.movies = [
   {
    'title': 'Night at the Roxbury',
    'year': 1998,
    'description': 'Two dim-witted brothers dream of owning their own dance club or at least getting into the coolest and most exclusive club in town, The Roxbury.',
    'genre': 'comedy',
    'poster': 'http://ia.media-imdb.com/images/M/MV5BMTcyMDAzMDU0NV5BMl5BanBnXkFtZTcwMjI0OTM1MQ@@._V1_.jpg'
   },
   {
    'title': 'Drop Dead Gorgeous',
    'year': 1999,
    'description': 'A small-town beauty pageant turns deadly as it becomes clear that someone will go to any lengths to win.',
    'genre': 'comedy',
    'poster': 'http://ia.media-imdb.com/images/M/MV5BMTgzNzk3OTg2M15BMl5BanBnXkFtZTYwMTIyODc5._V1_.jpg'
   },
   {
    'title': 'Independence Day',
    'year': 1996,
    'description': 'The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind\'s best weapon is the will to survive.',
    'genre': 'action',
    'poster': 'http://ia.media-imdb.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,666,1000_AL_.jpg'
   },
   {
    'title': 'Clueless',
    'year': 1995,
    'description': 'A rich high school student tries to boost a new pupil\'s popularity, but reckons without affairs of the heart getting in the way.',
    'genre': 'comedy',
    'poster': 'http://ia.media-imdb.com/images/M/MV5BMTgxODIxODE2MF5BMl5BanBnXkFtZTgwOTA4NjQxMTE@._V1_.jpg'
   },
   {
    'title': 'Jumanji',
    'year': 1995,
    'description': 'When two kids find and play a magical board game, they release a man trapped for decades in it and a host of dangers that can only be stopped by finishing the game.',
    'genre': 'action',
    'poster': 'http://ia.media-imdb.com/images/M/MV5BMTk5MjAyNTM4Ml5BMl5BanBnXkFtZTgwMjY0MDI0MjE@._V1_.jpg'
   },
   {
    'title': 'Girl, Interrupted',
    'year': 1999,
    'description': 'Based on writer Susanna Kaysen\'s account of her 18-month stay at a mental hospital in the 1960s.',
    'genre': 'drama',
    'poster': 'http://ia.media-imdb.com/images/M/MV5BNzdjZDYwM2QtMGNlZS00MGQzLTlhMjctYTU4NWI5MWJlYmQwXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_.jpg'
   }
  ];

  $scope.getMovies = function() {
    console.log('get movies!');
    return $scope.data.movies;
    // return $http({
    //   method: 'GET',
    //   url: '/server/movies'
    // });
  };

  $scope.saveMovie = function(movie) {
    // add to database - saved
    console.log('saved movie!', movie);
    return $http({
      method: 'POST',
      url: '/server/movies',
      data: movie // stringify?
    })
  };

  $scope.getMovies();

})