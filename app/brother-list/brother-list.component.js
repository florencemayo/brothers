'use strict';

var myModule = angular.module('brotherList');

myModule.component('brotherList', {
		templateUrl: 'brother-list/brother-list.template.htm',
		controller: ['Brother',
					  function BrotherListController(Brother){
				 				this.brothers = Brother.query();
								this.categories='age';
			}
		]
});

	