'use strict';

angular.module('rbMarvel.creators', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/creators/:id', {
    templateUrl: 'creators/creators.html',
    controller: 'CreatorsCtrl'
  });
}])

.controller('CreatorsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.getCreator = function () {
		// build request URL
		var reqUrl = 'http://gateway.marvel.com/v1/public/creators?id='+$routeParams.id+'&'+app.getRequestParams();
		
		// send http request
		$http({method: 'GET', url: reqUrl}).

			//request has succeeded
			then(function (res) {
				console.log(res.data);
				$scope.creator = res.data.data.results[0];

			// request has failed
			}, function (res) {
				$scope.data = res.data || 'REQUEST FAILED';
				$scope.status = res.status;
			});
	}

	$scope.getCreator();
}]);