'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register',
  'myApp.welcome'
]).
config(['$routeProvider', function($routeProvider) {
     $routeProvider.otherwise({
     		redirectTo: '/home'
     });
}]);