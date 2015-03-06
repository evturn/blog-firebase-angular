'use strict'

angular.module('myApp.home', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'home/home.html',
			controller: 'HomeCtrl'
		});
}])

.controller('HomeCtrl', ['$scope', '$firebaseSimpleLogin', function($scope, $firebaseSimpleLogin) {
	var firebaseObj = new Firebase("https://blogz-on-fire.firebaseio.com/");
	var loginObj = $firebaseSimpleLogin(firebaseObj);

	$scope.SignIn = function(e) {
		e.preventDefault();
		var username = $scope.user.email;
		var password = $scope.user.password;

		loginObj.$login('password', {
			email: username,
			password: password
		})
		.then(function(user) {
			console.log('Authentication successful');
		}, function(error) {
			console.log('Authentication failure');
		});
	}
}]);