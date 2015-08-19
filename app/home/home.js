'use strict';

angular.module('rbMarvel.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'SearchCtrl'
  })
  .when('/home/search/:section/:str', {
  	templateUrl: 'home/results.html',
  	controller: 'HomeCtrl',
  	resolve: {
  	}
  });
}])

.controller('HomeCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	// for spinning loader
	$scope.loading = true;

	// results containers
	$scope.items = null;

	// type and string of search
	$scope.section = $routeParams.section;
	$scope.str = $routeParams.str;

	// filter param depending on type (comics/creators)
	var filter;
	($scope.section === 'creators') ? filter = 'firstNameStartsWith' : filter = 'title';

	// req offset and limit
	var reqOffset = 0;
	var reqLimit = 100;

	// build request URL
	var reqUrl = 'http://gateway.marvel.com/v1/public/'+$scope.section+'?'+app.getRequestParams(true)+'&'+filter+'='+$scope.str;

	/* SEND HTTP REQUEST */
	$http({method: 'GET', url: reqUrl}).
		// request success
		then(function (res) {
			$scope.items = res.data.data.results;
			$scope.loading = false;
			console.log($scope.items);
		},

		// request failure
		function (res) {
			$scope.loading = false;
		});
}])

.controller('SearchCtrl', ['$scope', '$location', function($scope, $location){
	$scope.fetch = function (type, str) {
		$location.path('/home/search/'+type+'/'+str);
	};
}]);