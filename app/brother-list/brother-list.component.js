'use strict';

var myModule = angular.module('brotherList');

myModule.component('brotherList', {
		templateUrl: 'brother-list/brother-list.template.htm',
		controller: ['$scope', '$localstorage',
						function BrotherListController($scope, $localstorage){
						 	//set the initial variable to sort
						 	$scope.sort_value='age';

						 	$scope.newBrother = {};

						 	$scope.listBro =  []; 

						 	//$localstorage.setObject("bros",[]);

						 	//initialize bros
						 	$scope.bros=$localstorage.getObject('bros').length> 0 ?$localstorage.getObject('bros'):[];
		                    
		                    //function to add a new brother
					        $scope.addBrother = function(newBrother){
					         	//get a random image from an array
					         	var imageArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
					         	var rand = imageArray[Math.floor(Math.random() * imageArray.length)]; 
					         	
					         	newBrother.imageUrl="img/brother"+rand+".jpg";
					         	newBrother.id=$scope.bros.length;
								$scope.bros.push(newBrother);

								//initiate an empty list of brothers
					  			newBrother.listBrothers = [];

					  			//add a new object of brother to a local storage
							    if($scope.bros.length>0) {$localstorage.setObject('bros',$scope.bros);}
					  			
					  			//TESTING
					  			console.log($localstorage.getObject('bros'));
					         	
					         	$scope.addBrother = false;
					         	//reset the input fields
					         	$scope.newBrother = {};
					         };		                  
						}
					]
		}
);
