'use strict';


/**
* These are basic unit tests
* to be improved overtime
*/
it('should map routes to controllers and make http req', function() {
	beforeEach(module('rbMarvel.creators'));

	// test creators ctrl (default page)
	inject(function($route) {
		expect($route.routes['/creators/:id'].controller).toBe('CreatorsCtrl');
		expect($route.routes['/creators/:id'].templateUrl)
			.toEqual('creators/creators.html');
	});

	// test http req
	inject(function($httpBackend, $http) {
		var ts = Date.now();
		var apikey_pub = '03d1d00e90975a8f90f71f9c13cf4bc3';
		var apikey_pri = '3d0e2d5bb3f41c7480d148dd61f2b1a7093d439b';

		var url = 'http://gateway.marvel.com/creators?ts='+ts
			+'&apikey'+apikey_pub
			+'&hash='+app.calcMD5(''+ts+apikey_pri+apikey_pub);

		$httpBackend.expectGET(url);
	});
});