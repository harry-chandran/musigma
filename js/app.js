var myApp = angular.module('myApp', ['ngRoute','data-grid']);
myApp.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.
	      when('/home', {
	        templateUrl: 'template/home.html',
	        controller: 'homeCtrl'
	    }).
	       when('/itemGroup', {
	        templateUrl: 'template/itemGroup.html',
	        controller: 'itemGrpController'
	    }).
	       when('/summary', {
	        templateUrl: 'template/summary.html',
	        controller: 'summaryController'
	    }).
	      otherwise({
	        redirectTo: '/home'
	      });	    	       
	}]);