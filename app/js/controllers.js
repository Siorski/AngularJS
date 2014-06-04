var myApp = angular.module('myApp.controllers', []);

myApp.controller('KursyController', ['$scope', '$http', function ($scope, $http) {
	$http({
 		method: 'GET',
 		url: 'public/kursy.json?nocache=' + (new Date()).getTime(),
 		cache: 'false',
 	}).success(function (data) {
			$scope.kursy = data;
		});

 	var loadJson = function(){
		$http.get('public/kursy.json?nocache='+ (new Date()).getTime()).success(function(data) {
			$scope.kursy = data;
		});
	}
	setInterval(loadJson, 10000)
}]);