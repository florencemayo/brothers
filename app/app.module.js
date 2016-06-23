(function() {
'use strict';

var myApp = angular.module('ng-brothers',[
				  		 'ngRoute',
				  		 'core',
				       	 'ngMaterial',
				       	 'xeditable',
				       	 'ui.bootstrap',
				  		 'brotherDetails',
				  		 'brotherList'
				      ]
                   ).run(function(editableOptions){
                   		//set a boostrap them, also 'bs2' or 'default'
                   		editableOptions.theme = 'bs3';
                   });
})();
