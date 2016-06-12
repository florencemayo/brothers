'use strict';

var myModule = angular.module('brotherList');

myModule.component('brotherList', {
		templateUrl: 'brother-list/brother-list.template.htm',
		controller: ['BrotherFactory', '$scope', //'Brother',
					  function BrotherListController(BrotherFactory,$scope){
				 	     $scope.newBrother = {};

				 	    //this.brothers = Brother.query();
				 		this.categories='age';
				 		$scope.bros;
				 		BrotherFactory.getBros().success(function(data){
			         		$scope.bros = data;
			         		//console.log($scope.bros);
			            }).error(function(error){
			         		console.log(error);
			         });

					//function to add brother details
			         $scope.inputBrother = function(newBrother){
			         	newBrother.imageUrl="img/default.jpg";
			         	$scope.bros.push(newBrother);

			         	$scope.newBrother = {};
			         };
			         
			         //function to set the field when selecting a brother
			         $scope.selectBrother = function(brother){
			         	//pop-down the edit window
			         	$scope.editBrother =true;
			         	$scope.addBrother =false;
			         	//populate the edit fields
			         	$scope.editedBrother = brother;
			         };

			         $scope.saveEditedBrother = function(){
			         	$scope.editedBrother ={};
			         	$scope.editBrother =false;
					};

					$scope.deleteBrother= function(brother){
						//get the indexof the listing in an array
						var index = $scope.bros.indexOf(brother);
						$scope.bros.splice(index, 1);
						$scope.editedBrother ={};
						$scope.editBrother =false;
					};
			}
		]
});
	