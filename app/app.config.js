'use strict';

angular.
	module('ng-brothers').
	config(['$locationProvider', '$routeProvider', 
        function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.
        when('/brothers', {
          template: '<brother-list></brother-list>'
        }).
		when ('/brothers/:brotherId',{
		  template: '<brother-details></brother-details>'
		}).
		otherwise('/brothers');
	}
]);
