var myApp = angular.module('myApp.controllers', []);

myApp.controller('KursyController', ['$scope', '$http', function ($scope, $http) {
	$http({
 		method: 'GET',
 		url: 'public/kursy.json',
 		cache: 'false',
 	}).success(function (data) {
			$scope.kursy = data;
			console.log(data);
		});
}]);