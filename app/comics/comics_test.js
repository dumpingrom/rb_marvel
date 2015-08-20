'use strict';

var app = window.app;

/**
* These are basic unit tests
* to be improved overtime
*/
it('should map routes to controllers and make http req', function() {
	module('rbMarvel.comics');

	inject(function($route) {
		//search ctrl (default page)
		expect($route.routes['/comics/:id'].controller).toBe('ComicsCtrl');
		expect($route.routes['/comics/:id'].templateUrl)
			.toEqual('comics/comics.html');
	});

	// test http req
	inject(function($httpBackend) {
		var ts = Date.now();
		var apikey_pub = '03d1d00e90975a8f90f71f9c13cf4bc3';
		var apikey_pri = '3d0e2d5bb3f41c7480d148dd61f2b1a7093d439b';
		$httpBackend.expectGET('http://gateway.marvel.com/comics?ts='+ts
			+'&apikey'+apikey_pub
			+'&hash='+app.calcMD5(''+ts+apikey_pri+apikey_pub));
	});
});