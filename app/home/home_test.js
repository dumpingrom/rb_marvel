'use strict';

it('should map routes to controllers', function() {
	beforeEach(module('rbMarvel.home'));

	inject(function($route) {
		//search ctrl (default page)
		expect($route.routes['/home'].controller).toBe('SearchCtrl');
		expect($route.routes['/home'].templateUrl)
			.toEqual('home/home.html');

		//search ctrl (fetch results)
		expect($route.routes['/home/search/:section/:str'].controller).toBe('HomeCtrl');
		expect($route.routes['/home/search/:section/:str'].templateUrl)
			.toEqual('home/results.html');
	});
});