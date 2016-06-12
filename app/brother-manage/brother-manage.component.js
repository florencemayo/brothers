'use strict';

var myModule = angular.module('brotherManage');

myModule.component('brotherManage',{
		templateUrl:'brother-manage/brother-manage.template.htm'
		, controller : ['BrotherFactory', '$scope',
				function BrotherManageController(BrotherFactory, $scope){
			         $scope.newBrother = {};

			         //the variable can be accessed on the html page
			         $scope.bros;

			         BrotherFactory.getBros().success(function(data){
			         	$scope.bros = data;
			         	//console.log($scope.bros);
			         }).error(function(error){
			         	console.log(error);
			         });

			         //function to add brother details
			         $scope.inputBrother = function(newBrother){
			         	$scope.bros.push(newBrother);
			         	$scope.newBrother = {};
			         }
				}
		]
});

