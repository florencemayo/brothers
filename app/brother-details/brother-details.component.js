'use strict';

/*DETAILS TO BE SHOWN ON THE NEXT PAGE*/

var myModule = angular.module('brotherDetails');

myModule.component('brotherDetails',{
		templateUrl:'brother-details/brother-details.template.htm',
		controller:['$routeParams', '$scope', '$localstorage', '$mdDialog', '$location','$timeout',
			function BrotherDetailsController($routeParams, $scope,$localstorage, $mdDialog, $location, $timeout){
				
				var brothers=$localstorage.getObject('bros').length> 0 ?$localstorage.getObject('bros'):[];
                console.log("Initially "+brothers.length);

				$scope.brother =  brothers[$routeParams.id];

				//UPDATE A BROTHER
			    $scope.updateBrother = function(brother){
			         	var index = brothers.indexOf(brother);
						brothers[index]=$scope.brother;
			         	$localstorage.setObject('bros',brothers);
                };

               //ADD A BROTHER TO A BROTHER
               //get the current list of brothers
               var listBros_current = [];
               $scope.updateListBrothers = function(brother){
                    //get a random image from an array
            		var imageArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
			        var rand = imageArray[Math.floor(Math.random() * imageArray.length)]; 
			        brother.imageUrl="img/brother"+rand+".jpg";
			        
			        brother.id=brothers.length;
	        		
	        		//initiate an empty list of brothers
			  		brother.listBrothers = [];
			  		
			  		//temporary brother
	        		var Brother = {};
                 	Brother = $scope.brother;
					
					listBros_current = $scope.brother.listBrothers;
					
					if (brother.name !== null 	&& brother.email !== null && brother.age !== null) {
						listBros_current.push(brother);
					} else {
						$scope.submitAddBrother();
					}
					
					Brother.listBrothers = listBros_current;
					
					//update brother
					var index = brothers.indexOf($scope.brother);
					//add the newly set brother to local storage
			        brothers[index]=Brother;
			        $localstorage.setObject('bros',brothers);
			        $scope.newBrother = {};
			        $scope.addBrothers = false;
				  };


                //SET A BEST BROTHER
                $scope.bestBrother = function(brother){
			  			$scope.brother.bestBrother =brother;
			  			$scope.updateBrother(brother);
			    }

                //UNFRIEND A BROTHER
                $scope.removeFriend = function() {
                	if ($scope.brother.friend != null) {
                		$scope.brother.friend = {};
						$scope.updateBrother($scope.brother);
                	} else {
                		$scope.submitUnfriend();
                	}
                }

                //ALERTS
                $scope.submitDelete = function(){
                	alert("Brother deleted successfully");
				};

				$scope.submitUnfriend = function(){
					alert("OPPS, YOU HAVE NO FRIENDS");
				}

				//VERIFY
				$scope.submitAddBrother = function(){
					alert("The fields need values");
				}

                //DELETE A BROTHER
                $scope.deleteBrother= function(event,brother){
					//set a reminder
            		var confirm = $mdDialog.confirm()
            		             .title('Are you sure?')
            		             .textContent('Click YES if you agree and NO if not')  
            		             .ariaLabel('Ta')
            		             .targetEvent(event)
            		             .ok('YES')
            		             .cancel('NO');

		            $mdDialog.show(confirm).then(function(){
		            	//get the index of brother in the array
						var index_1 = brothers.indexOf(brother);
						console.log(brothers.length);
						brothers.splice(index_1, 1);
						$localstorage.setObject('bros',brothers);
						console.log(brothers.length);
						
						//GO to initial page after deleting a brother
						$timeout(function() {
							$scope.$apply(function(){
							$location.path("/brothers/app/#!/brothers");
							//Show a notification
							$scope.submitDelete();
    					    });
						});
					});
				};

				//settings for a pagination bar
				$scope.totalItems = brothers.length;
				$scope.currentPage = 1;
				$scope.maxSize = 4;
				$scope.itemsPerPage = 4;
			}
		]
});

/*
**FILTER
**MEANT FOR PAGINATION BUT NOT WORKING AT THE MOMENT
*/
myModule.filter('pagesFilter', function(){
	return function(input, currentPage, pageSize){
		if(angular.isArray(input)){
			var start = (currentPage -1)*pageSize;
			var end = currentPage*pageSize;
			return input.slice(start, end);
		}
	};
});



