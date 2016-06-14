(function() {
'use strict';

angular.
  module('ng-brothers',[
  		 'ngRoute',
  		 'core',
  		 'xeditable',
  		 'brotherDetails',
  		 'brotherList',
  		 'brotherManage'
]).run(function(editableOptions){
	//boostrap theme
  	editableOptions.theme = 'bs3';
  	});
})();
