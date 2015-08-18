'use strict';

angular.module('rbMarvel.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
	// for spinning loader
	$scope.loading = false;

	$scope.fetch = function(type, search) {
		$scope.loading = true;
		// filter param depending on type (comic/creator)
		var filter;
		(type === 'creators') ? filter = 'firstNameStartsWith' : filter = 'title';

		// req offset and limit
		var reqOffset = 0;
		var reqLimit = 100;

		// build request URL
		var reqUrl = 'http://gateway.marvel.com/v1/public/'+type+'?'+filter+'='+search+'&'+app.getRequestParams();

		/* SEND HTTP REQUEST */
		$http({method: 'GET', url: reqUrl}).
			// request success
			then(function (res) {
				console.log(reqUrl);
				console.log(res.data);
				(type === 'creators') ? $scope.creators = res.data.data.results : $scope.comics = res.data.data.results;
				$scope.loading = false;
			},

			// request failure
			function (res) {

			});
	}

	//$scope.fetch()
}]);