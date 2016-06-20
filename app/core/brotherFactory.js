'use strict';
angular.module('core.brother')
	.factory('$localstorage', ['$window', function($window) {
	  	return {
	    set: function(key, value) {
	        $window.localStorage[key] = value;
	    },
	    get: function(key, defaultValue) {
	      return $window.localStorage[key] || defaultValue;
	    },
	    setObject: function(key, value) {
	      $window.localStorage[key] = JSON.stringify(value);
	    },
	    getObject: function(key) {
	      return JSON.parse($window.localStorage[key] || '{}');
	    },
	    addBrother : function (brother) {
	    	//FUNCTION TO ADD BROTHER
	    	//INITIALIZE LOCAL STORAGE
		 	//uncomment to initialize 
		 	//$localstorage.setObject("bros",[]);

		 	//get the current array of brothers / initialize if empty
		 	var brothers=$localstorage.getObject('bros').length> 0 ?$localstorage.getObject('bros'):[];
            
            //set details of a brother
            //initialize a new object
            var brother = {}; 
            //add datas to an object
            brother.imageUrl="img/default.jpg";
	        brother.id=brothers.length;
			
			//add objects to an array
			brothers.push(brother);

			//set new the array to the local storage
			$localstorage.setObject('bros',brothers);
	  		return $localstorage;
	    },
	    deleteBrother : function(){

	    },
	    updateBrother : function(){

	    }
	  }
    }]);
