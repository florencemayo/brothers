'use strict';

/*DETAILS TO BE SHOWN ON THE NEXT PAGE*/

var myModule = angular.module('brotherDetails');

myModule.component('brotherDetails',{
		templateUrl:'brother-details/brother-details.template.htm',
		controller:['$List','$routeParams', '$scope', 'GeneralFactory', '$localstorage', '$mdDialog', '$location','$timeout',
			function BrotherDetailsController($List, $routeParams, $scope,GeneralFactory,$localstorage, $mdDialog, $location, $timeout){
				//get the selected brother brother
				//var list = GeneralFactory.get();
				//var list ;//= $List.listBrothers;
				//save the data to local storage
				//if (list.length>0) $localstorage.setObject('brothers',list);
				
				var brothers=$localstorage.getObject('brother').length> 0 ?$localstorage.getObject('bros'):[];
                console.log(brothers.length);

				//get the data from local storage
				//$scope.brother=$localstorage.getObject('brother').length> 0 ?$localstorage.getObject('brother'):[];
                //var brothers=$localstorage.getObject('brother').length> 0 ?$localstorage.getObject('brother'):[];
                $scope.brother =  brothers[$routeParams.id];

                //ADD A BROTHER TO A BROTHER

                //UPDATE A BROTHER

                //SET A FAVORITE BROTHER

                //UNFRIEND A BROTHER

                //DELETE A BROTHER
                $scope.submit = function(){
                	alert("form sent!");

                };

                $scope.status = '  ';
                
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
            		            	//get the indexof the listing in an array
									var index_1 = brothers.indexOf(brother);
									console.log(brothers.length);
									brothers.splice(index_1, 1);
									$localstorage.setObject('bros',brothers);
									console.log(brothers.length);
									
									//GO to initial page after deleting a brother
									$timeout(function() {
										$scope.$apply(function(){
										$location.path("/brothers/app/#!/brothers");
                					});
									});

									//}
									
									$scope.status='Brother deleted succssfully!';
            		            }, function(){
            		            	$scope.status = 'You have decided to keep your brother.';
            		            });

            		
            	};
			}
		]
});



