'use strict';

angular.module('rbMarvel.comics', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/comics/:id', {
    templateUrl: 'comics/comics.html',
    controller: 'ComicsCtrl'
  });
}])

.controller('ComicsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.getComic = function () {
		// build request URL
		var reqUrl = 'http://gateway.marvel.com/v1/public/comics?id='+$routeParams.id+'&'+app.getRequestParams(true);
		
		// send http request
		$http({method: 'GET', url: reqUrl}).

			//request has succeeded
			then(function (res) {
				console.log(res.data);
				$scope.comic = res.data.data.results[0];
				console.log($scope.comic);

			// request has failed
			}, function (res) {
				$scope.data = res.data || 'REQUEST FAILED';
				$scope.status = res.status;
			});
	}

	$scope.getComic();
}]);