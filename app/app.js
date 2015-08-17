'use strict';
// create global app object
var app = window.app || {};
// store Marvel API public key
app.$apikey_pub = '03d1d00e90975a8f90f71f9c13cf4bc3';
// store Marvel API private key
app.$apikey_pri = '3d0e2d5bb3f41c7480d148dd61f2b1a7093d439b';

// Declare app level module which depends on views, and components
angular.module('rbMarvel', [
  'ngRoute',
  'rbMarvel.home',
  'rbMarvel.creators',
  'rbMarvel.comics',
  'rbMarvel.version'
]).

// if no route or route not existing provided,
// lets get back home
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
