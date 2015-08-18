'use strict';

angular.module('rbMarvel.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'SearchCtrl'
  })
  .when('/home/search/:type/:str', {
  	templateUrl: 'home/home.html',
  	controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	// for spinning loader
	$scope.loading = true;

	// results containers
	$scope.comics = null;
	$scope.creators = null;

	// type and string of search
	var type = $routeParams.type;
	var str = $routeParams.str;

	// filter param depending on type (comics/creators)
	var filter;
	(type === 'creators') ? filter = 'firstNameStartsWith' : filter = 'title';

	// req offset and limit
	var reqOffset = 0;
	var reqLimit = 100;

	// build request URL
	var reqUrl = 'http://gateway.marvel.com/v1/public/'+type+'?'+app.getRequestParams(true)+'&'+filter+'='+str;

	/* SEND HTTP REQUEST */
	$http({method: 'GET', url: reqUrl}).
		// request success
		then(function (res) {
			(type === 'creators') ? $scope.creators = res.data.data.results : $scope.comics = res.data.data.results;
			$scope.loading = false;
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