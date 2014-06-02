var myApp = angular.module('myApp', [
  'ngRoute',
   'myApp.controllers'
]);

myApp.config(['$routeProvider', 
	function($routeProvider) {
  	$routeProvider.
  		when('/view1', {
  			templateUrl: 'partials/partial1.html', 
  			controller: 'KursyController'
  	});
  	$routeProvider.
  		otherwise({
  			redirectTo: '/view1'
  	});
}]);