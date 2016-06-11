describe('brotherList', function(){

beforeEach(module('brothersApp'));

describe('BrothersListController', function(){

it('should create a `brother` model with 3 brothers',inject(function($componentController) {
	
	var ctrl = componentController(brotherList);
	
	expect(ctrl.brothers.length).toBe(2);
	   }));
 });

});