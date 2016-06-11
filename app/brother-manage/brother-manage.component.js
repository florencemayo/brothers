'use strict';

var myModule = angular.module('brotherManage');

myModule.component('brotherManage',{
		templateUrl:'brother-manage/brother-manage.template.htm'
		/*, controller : ['Brother', '$scope',
				function BrotherManageController(Brother, $scope){
			        //add a new brother
			        var self = this;
			        $scope.newBrother = {};

			        //var $tempo = newBrother.toJSON()
			        $scope.addBrother = function(newBrother) {
			        //console.log($tempo);
			        //self = self.push(newBrother);

			        console.log("Without "+newBrother);
			        console.log("With "+JSON.stringfy(newBrother));
			        $scope.newBrother = {};
		        	};
				}
			]*/
});

