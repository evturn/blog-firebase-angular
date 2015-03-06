'use strict'

angular.module('myApp.home', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'home/home.html',
			controller: 'HomeCtrl'
		});
}])

.controller('HomeCtrl', ['$scope', '$firebaseSimpleLogin', function() {
	$scope.SignIn = function($scope) {
		var username = $scope.user.email;
		var password = $scope.user.password;
	}
	var firebaseObj = new Firebase("https://blogz-on-fire.firebaseio.com/");
	var loginObj = $firebaseSimpleLogin(firebaseObj);
}]);