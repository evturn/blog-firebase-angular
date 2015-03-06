'use strict';
 
angular.module('myApp.register', ['ngRoute', 'firebase'])
  
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
      templateUrl: 'register/register.html',
      controller: 'RegisterCtrl'
    });
}])

.controller('RegisterCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {
 	$scope.signUp = function() {
 		if (!$scope.regForm.$invalid) {
 			console.log('Valid form submission');
 		}
 	};
}]);