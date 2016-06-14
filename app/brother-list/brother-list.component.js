'use strict';

var myModule = angular.module('brotherList');

myModule.component('brotherList', {
		templateUrl: 'brother-list/brother-list.template.htm',
		controller: ['BrotherFactory', '$scope', '$localstorage',
					  function BrotherListController(BrotherFactory,$scope, $localstorage){
				 	     //set the initial variable to sort
				 	     this.sort_value='age';

				 	     $scope.newBrother = {};

				 	     
				 	      //INITIALIZE LOCAL STORAGE
				 	    //uncomment to initialize 
				 	    //$localstorage.setObject("bros",[]);

				 	     //initialize bros
				 	    $scope.bros=$localstorage.getObject('bros').length> 0 ?$localstorage.getObject('bros'):[];

				 	   	
				 	   	/*
				 	   	//PAGINATION
				 	   	//settings for a pagination links
				 	   	$scope.currentPage =1;
				 	   	$scope.entryLimit = 10;
				 	   	//$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
				 	   	//$scope.noOfPages = 0;
				 	   	//console.log($scope.noOfPages);
				 	   	$scope.totalItems = $scope.bros.length;


				 	   	$scope.$watch('search_text', 
				 	   		function(search_text){
							if (search_text) {
								$scope.totalItems = $scope.bros.length;
								//$scope.noOfPages = Math.ceil($scope.totalItems);
								//$scope.noOfPages = 0;
								$scope.currentPage =1;
								}
						});

						$scope.loadBrother = function(name){
							$rootScope.broadcastBrother = _.find($scope.bros, function(brother) {
								if (brother.name === name){
									return brother;
								}
							});
						};*/
						
						/*
						//get the JSON data from brothers.json
			         	BrotherFactory.getBros().success(function(data){
			         		$scope.bros = data;
			         	}).error(function(error){
			         		console.log(error);
			         });*/ 
					
					//function to add brother details
			         $scope.inputBrother = function(newBrother){
			         	newBrother.imageUrl="img/default.jpg";
			         	newBrother.id=$scope.bros.length;
						$scope.bros.push(newBrother);
					    if($scope.bros.length>0) {$localstorage.setObject('bros',$scope.bros);}
			  			
			         	console.log($localstorage.getObject('bros'));
			         	
			         	//reset the input fields
			         	$scope.newBrother = {};
			         };

			        //function to set the field when selecting a brother
			         $scope.selectBrother = function(brother){
			         	var index = $scope.bros.indexOf(brother);
			         	//pop-down the edit window
			         	$scope.editBrother =true;
			         	$scope.addBrother =false;
			         	//populate the edit fields
			         	$scope.editedBrother = $scope.bros[index];
			         };

			         $scope.saveEditedBrother = function(brother){
			         	var index = $scope.bros.indexOf(brother);
						$scope.editBrother =false;
			         	$scope.bros[index]=$scope.editedBrother;
			         	if($scope.bros.length>0) {$localstorage.setObject('bros',$scope.bros);}

			         	$scope.editedBrother ={};
			        };

					$scope.deleteBrother= function(brother){
						//get the indexof the listing in an array
						var index = $scope.bros.indexOf(brother);
						$scope.bros.splice(index, 1);
						$scope.editedBrother ={};
						$scope.editBrother =false;
						if($scope.bros.length>0) {$localstorage.setObject('bros',$scope.bros);}
			  		};
			}
		]
});

/*

PAGINATION
//add a filter
myModule.filter('startFrom', startFrom);

function startFrom(){
 	return startFromFilter;

 	function startFromFilter(input, start){
 		if (input){
 			start=+start;
 			return input.slice(start);
 		}
 		return [];	
 	}
}
*/	