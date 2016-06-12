'use strict';
/* IMPLEMENTATION WITH HTTP SERVICE*/

angular.module('core.brother').
	factory('BrotherFactory', function($http){
		
		function getBrothers(){
			return $http.get('brothers/brothers.json');
		}

		return {
			getBros: getBrothers
		};
	}
);