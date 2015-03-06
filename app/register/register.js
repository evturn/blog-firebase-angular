'use strict';
 
angular.module('myApp.register', ['ngRoute'])
  
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
      templateUrl: 'register/register.html',
      controller: 'RegisterCtrl'
    });
}])

.controller('RegisterCtrl', ['$scope', function($scope) {
 	$scope.signUp = function() {
 		if (!$scope.regForm.$invalid) {
 			console.log('Valid form submission');
 		}
 	};
}]);