'use strict';
/* IMPLEMENTATION WITH HTTP SERVICE*/

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
	    formatData : function(json){
	    	var array=[];
	    	for(var key in json){
	    		array.push(json[key]);
	    	}
	    	return array;
	    }
	  }
    }])
    .factory('GeneralFactory',function(){
    	var savedData = [];
    	//Setter
    	function set(data){
    		savedData =data;
    	}
    	//Getter
    	function get(){
    		return savedData;
    	}

    	return {
    		set : set,
    		get : get
    	}

    });
