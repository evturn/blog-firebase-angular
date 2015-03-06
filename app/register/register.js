'use strict';
 
angular.module('myApp.register', ['ngRoute', 'firebase'])
  
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
      templateUrl: 'register/register.html',
      controller: 'RegisterCtrl'
    });
}])

.controller('RegisterCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {
	var firebaseObj = new Firebase("https://blogz-on-fire.firebaseio.com/");
	var auth = $firebaseAuth(firebaseObj);

 	$scope.signUp = function() {
 		if (!$scope.regForm.$invalid) {
 			var email = $scope.user.email;
 			var password = $scope.user.password;
 			if (email && password) {
 				auth.$createUser(email, password)
 					.then(function() {
 						console.log('User creation success');
 					}, function(error) {
 						console.log(error);
 					});
 			}
 		}
 	};
}]);