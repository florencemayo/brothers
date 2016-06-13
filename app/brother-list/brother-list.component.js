'use strict';

var myModule = angular.module('brotherList');

myModule.component('brotherList', {
		templateUrl: 'brother-list/brother-list.template.htm',
		controller: ['BrotherFactory', '$scope', '$localstorage',
					  function BrotherListController(BrotherFactory,$scope, $localstorage){
				 	     //set the initial variable to sort
				 	     this.categories='age';

				 	     $scope.newBrother = {};
				 	     
				 	      //INITIALIZE LOCAL STORAGE
				 	    //uncomment to initialize 
				 	    //$localstorage.setObject("bros",[]);

				 	     //initialize bros
				 	    $scope.bros=$localstorage.getObject('bros').length> 0 ?$localstorage.getObject('bros'):[];

				 	   console.log($localstorage.getObject('bros'));

				 	    //var list=$localstorage.getObject("bros");
				 		//$scope.bros = $localstorage.formatData(list);

			         	//get the JSON data from brothers.json
			         	/*
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
			         	//UPDATE A LOCAL STORAGE
			         	/*$localstorage.setObject("Bros", JSON.stringify($scope.bros));
			         	
					    bross = JSON.parse($localstorage.getObject("Bros"));
					    console.log(bross.length)

						//reset the input fields
			         	$scope.newBrother = {};*/
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
	