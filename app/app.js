'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register',
  'myApp.welcome',
  'myApp.addPost'
]).
config(['$routeProvider', function($routeProvider) {
     $routeProvider.otherwise({
     		redirectTo: '/home'
     });
}]);