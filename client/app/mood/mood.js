angular.module('roxbury.mood', [])

.controller('MoodController', function ($scope, $http) {

  $scope.data = {};

  $scope.data.moods = [
    'Make me laugh',
    'Make me cry',
    'I wanna see things explode',
    'Like, whatever, last night was way harsh!'
  ];

  $scope.data.movies = [];

  $scope.getMoviesForMood = function() {
    console.log('getting movies for your mood!');

    return $http({
      method: 'GET',
      url: '/server/movies/mood'
    })
    .then(function(movies) {
      console.log('here are the retrieved saved movies: ', movies.data);
      $scope.data.movies.push(movies.data);
      console.log('the scope saved movies are: ', $scope.data.movies);
    })
  };

  $scope.goToMain = function() {
    return $http({
      method: 'GET',
      url: '/server/movies'
    })
  }

});