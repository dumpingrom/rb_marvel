'use strict';

angular.module('rbMarvel.comics', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/comics', {
    templateUrl: 'comics/comics.html',
    controller: 'ComicsCtrl'
  });
}])

.controller('ComicsCtrl', ['$scope', '$http', function($scope, $http) {
	// timestamp in seconds or 0 if < IE8
	var timestamp = Date.now() | 0;
	// md5 hash of timestamp and api keys concatenated
	var hash = app.calcMD5(timestamp + app.$apikey_pri + app.$apikey_pub);
	//build request parameters
	var requestParams = 'ts='+timestamp+'&apikey='+app.$apikey_pub+'&hash='+hash;
	// build request URL
	var reqUrl = 'http://gateway.marvel.com/v1/public/comics?'+requestParams;

	// put request results in a variable
	$http({method: 'GET', url: reqUrl}).
		then(function (res) {
			console.log(res.data.data);
			$scope.data = res.data;
			$scope.count = res.data.data.count;
			$scope.comics = res.data.data.results;
			$scope.status = res.status;
		}, function (res) {
			$scope.data = res.data || 'REQUEST FAILED';
			$scope.status = res.status;
		});
}]);