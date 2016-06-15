'use strict';

var myModule = angular.module('brotherList');

myModule.component('brotherList', {
		templateUrl: 'brother-list/brother-list.template.htm',
		controller: ['BrotherFactory', '$scope', '$localstorage',
					  function BrotherListController(BrotherFactory,$scope, $localstorage){
				 	     //set the initial variable to sort
				 	     $scope.sort_value='age';

				 	     $scope.newBrother = {};

				 	     $scope.listBro =  []; 

				 	     //INITIALIZE LOCAL STORAGE
				 	    //uncomment to initialize 
				 	    //$localstorage.setObject("bros",[]);

				 	     //initialize bros
				 	    $scope.bros=$localstorage.getObject('bros').length> 0 ?$localstorage.getObject('bros'):[];

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
			         	$scope.addBrother = false;
			         	//reset the input fields
			         	$scope.newBrother = {};
			         };

			        //function to set the field when selecting a brother
			         $scope.selectBrother = function(brother){
			         	var index = $scope.bros.indexOf(brother);
			         	//pop-down the edit window
			         	$scope.editBrother =true;
			         	$scope.addBrother  =false;
			         	//populate the edit fields
			         	$scope.editedBrother = $scope.bros[index];

			         	if (brother.friend != null) {
			         		$scope.yesFriend = false; 
			         	} else {
			         		$scope.yesFriend = true; }
			         };

			         $scope.saveEditedBrother = function(brother){
			         	var index = $scope.bros.indexOf(brother);
						$scope.editBrother =false;
			         	$scope.bros[index]=$scope.editedBrother;
			         	if($scope.bros.length>0) {$localstorage.setObject('bros',$scope.bros);}
                        $scope.addABroToBro = false;
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

			  		$scope.updateListBro = function(brother){
                     //var index = $scope.bros.indexOf(brother);
                     //making sure we are not adding the same brother
                     //editedBrother <> nextBro
                     var i = 0;
                     if (brother.id === $scope.nextBro.id) {
                     	alert("IMPOSSIBLE");
                     } else {
                     	    //check if a bro is already in a list of bros
	                     	if ($scope.listBro.length>0){
	                        	while(i < $scope.listBro.length) {
	                        		if ($scope.nextBro.id === $scope.listBro[i].id) { 
	                        			alert("DUPLICATE");
	                        			break;
	                        		}
	                        		i++;
	                        	}
	                        } 

	                        if (i === $scope.listBro.length || $scope.listBro.length === 0) {
			                        	//Add a bro to a list of bro
				                        $scope.listBro.push($scope.nextBro);

				                     	//replace the old list with the current list
				                     	$scope.editedBrother.listBro =  $scope.listBro;
				                     	
				                     	$scope.saveEditedBrother(brother);
						    } 
                    }
                   };

                   $scope.unfriend = function (brother) {
                        if (brother.friend != null)
                        {
                        	brother.friend= "";
                            $scope.saveEditedBrother(brother);
                        }
					}

			  		//set a favorite brother
			  		//not a friend
			  		//among list of brothers
			  		/*$scope.favoriteBrother = function(brother,arrayBros){
			  			var random, output;
			  			arrayBros = brother.listBro;
			  			console.log()
                        if (arrayBros.length === 0) {
	                           output = 'No favorite Bro';
	                    } else {
				  			if (arrayBros.length>0) {
					  			//get random  bro
					  			random = Math.floor(arrayBros.length * Math.random());
					  			console.log(random);
					  			output =arrayBros[random].name;

				  			} 
		                }   
			  			//return name of the favorite bro
			  			return output;
			  		}*/


			}
		]
});