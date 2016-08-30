angular.module('roxbury.saved', [])

.controller('SavedController', ['$scope', function ($scope) {

  $scope.data = {};

  $scope.data.saved = [
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

  $scope.getSaved = function() {
    return $scope.data.saved;
    // later: query database given specific search parameters e.g. mood
  };

  $scope.getSaved();

}]);