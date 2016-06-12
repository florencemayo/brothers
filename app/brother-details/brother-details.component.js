'use strict';

/*DETAILS TO BE SHOWN ON THE NEXT PAGE*/

var myModule = angular.module('brotherDetails');

myModule.component('brotherDetails',{
		templateUrl:'brother-details/brother-details.template.htm',
		controller:['$routeParams', 'Brother', 
			function BrotherDetailsController($routeParams, Brother){
				var self = this;
				
				//return a selected brother
				self.brother = Brother.get({brotherId: $routeParams.brotherId}, 
					             function(brother) {
									//display the first element of an array
									self.setImage(brother.images[0]);
			   					 });
			
			    //a method that allow to display the current selected image
			    self.setImage = function setImage(imageUrl){
				   self.mainImageUrl = imageUrl;
			   };
			}
		]
});

