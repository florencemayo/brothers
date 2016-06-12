'use strict';
/* IMPLEMENTATION WITH NG-RESOURCE*/

angular.module('core.brother').
	factory('Brother', [
		    '$resource',
			function($resource) {
				return $resource('brothers/:brotherId.json',{},{
					query: {
						method: 'GET',
						params: {brotherId: 'brothers'},
						isArray: true
					}
			});
		}
]);