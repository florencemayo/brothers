'use strict';

var myModule = angular.module('brotherDetails');

myModule.component('brotherDetails',{
		templateUrl:'brother-details/brother-details.template.htm',
		controller:['$routeParams', 'Brother', 
			function BrotherDetailsController($routeParams, Brother){
				var self = this;
				self.brother = Brother.get({brotherId: $routeParams.brotherId}, function(brother) {
				self.setImage(brother.images[0]);
			    });
			
			    self.setImage = function setImage(imageUrl){
				   self.mainImageUrl = imageUrl;
				   console.log(self.mainImageUrl );
			   };
			}
		]
});

