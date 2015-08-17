'use strict';

angular.module('rbMarvel.creators', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/creators', {
    templateUrl: 'creators/creators.html',
    controller: 'CreatorsCtrl'
  });
}])

.controller('CreatorsCtrl', [function() {

}]);