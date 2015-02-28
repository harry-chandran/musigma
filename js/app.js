var myApp = angular.module('myApp', ['ngRoute','data-grid']);
myApp.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.
	      when('/beakery/home', {
	        templateUrl: 'template/home.html',
	        controller: 'homeCtrl'
	    }).
	       when('/beakery/itemGroup', {
	        templateUrl: 'template/itemGroup.html',
	        controller: 'itemGrpController'
	    }).
	       when('/beakery/summary', {
	        templateUrl: 'template/summary.html',
	        controller: 'summaryController'
	    }).

	       when('/daily/home', {
	        templateUrl: 'template/home.html',
	        controller: 'homeCtrl'
	    }).
	       when('/daily/itemGroup', {
	        templateUrl: 'template/itemGroup.html',
	        controller: 'itemGrpController'
	    }).
	       when('/daily/summary', {
	        templateUrl: 'template/summary.html',
	        controller: 'summaryController'
	    }).
	      otherwise({
	        redirectTo: '/error'
	      });	    	       
	}]);