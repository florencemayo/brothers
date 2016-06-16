'use strict';

/*DETAILS TO BE SHOWN ON THE NEXT PAGE*/

var myModule = angular.module('brotherDetails');

myModule.component('brotherDetails',{
		templateUrl:'brother-details/brother-details.template.htm',
		controller:['$List','$routeParams', '$scope', 'GeneralFactory', '$localstorage',
			function BrotherDetailsController($List, $routeParams, $scope,GeneralFactory,$localstorage){
				//get the selected brother brother
				//var list = GeneralFactory.get();
				var list = $List.listBrothers;
				//save the data to local storage
				if (list.length>0) $localstorage.setObject('brother',list);

				//get the data from local storage
				//$scope.brother=$localstorage.getObject('brother').length> 0 ?$localstorage.getObject('brother'):[];
                var brothers=$localstorage.getObject('brother').length> 0 ?$localstorage.getObject('brother'):[];
                $scope.brother =  brothers[$routeParams.id];
			}
		]
});

