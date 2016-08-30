angular.module('roxbury', [
  'roxbury.movies',
  'roxbury.saved',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/movies', {
      templateUrl: 'app/generator/generator.html',
      controller: 'MoviesController'
    })
    .when('/saved', {
      templateUrl: 'app/saved/saved.html',
      controller: 'SavedController'
    })
    .otherwise({
      redirectTo: '/movies'
    });
});