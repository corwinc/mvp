angular.module('roxbury.saved', [])

.controller('SavedController', function ($scope, $http) {

  $scope.data = {};

  $scope.data.saved = [];

  $scope.getSaved = function() {
    console.log('getting saved movies');

    return $http({
      method: 'GET',
      url: '/server/movies'
    })
    .then(function(movies) {
      movies.data.forEach(function(x) {
        $scope.data.saved.push(x);
      })
    })
  };

  $scope.getSaved();

});