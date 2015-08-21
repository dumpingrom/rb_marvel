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
	// results containers
	$scope.items = null;

	// type and string of search
	$scope.section = $routeParams.section;
	$scope.str = $routeParams.str;
	$scope.currentPage = 0;
	$scope.nextPage = false;
	$scope.prevPage = false;

	// filter param depending on type (comics/creators)
	var filter;
	($scope.section === 'creators') ? filter = 'firstNameStartsWith' : filter = 'title';


	/**
	* @function request
	* This function builds the http request
	* and fetch the data from the API
	*/
	$scope.request = function() {
		// for spinning loader
		$scope.loading = true;

		// build request URL
		var reqUrl = 'http://gateway.marvel.com/v1/public/'
					+$scope.section
					+'?offset='+($scope.currentPage * 20)+'&'
					+app.getRequestParams(true);

		// add filter only if str is not * (all)
		if ($scope.str !== '*') {
			reqUrl += '&'+filter+'='+$scope.str; 
		}


		/* SEND HTTP REQUEST */
		$http({method: 'GET', url: reqUrl}).
			// request success
			then(function (res) {
				$scope.items = res.data.data.results;
				$scope.loading = false;
				console.log($scope.items);

				// get number of results to make
				// pages
				$scope.total = res.data.data.total;
				$scope.pages = Math.ceil($scope.total / 20);
				// refresh prevPage and nextPage
				if ($scope.pages > 1 && $scope.currentPage+1 !== $scope.pages) {
					$scope.nextPage = true;
				}
				else {
					$scope.nextPage = false;
				}

				if ($scope.currentPage !== 0) {
					$scope.prevPage = true;
				}
				else {
					$scope.prevPage = false;
				}
			},

			// request failure
			function (res) {
				$scope.loading = false;
			});
	}

	/**
	* @function changePage
	* This function allows to increment or decrement
	* the currentPage variable
	* @param int action can be 1 or -1
	*/
	$scope.changePage = function(action) {
		$scope.currentPage += action;
		console.log($scope.currentPage);
		$scope.request();
	}

	$scope.request();
}])

.controller('SearchCtrl', ['$scope', '$location', function($scope, $location){
	$scope.fetch = function (type, str) {
		$location.path('/home/search/'+type+'/'+str);
	};
}]);