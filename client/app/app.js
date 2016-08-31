angular.module('roxbury', [
  'roxbury.movies',
  'roxbury.saved',
  'roxbury.mood',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/mood', {
      templateUrl: 'app/mood/mood.html',
      controller: 'MoodController'
    })
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