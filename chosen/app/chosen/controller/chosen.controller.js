/*
 *@desc controller of chosen feature
 *@author sambath
 */
 (function(){
 	angular
 	.module('myApp')
 	.controller('chosenController',controller);
 	function controller($scope){
 		// assuming the input to be array of objects
 		$scope.config = [
 		        {
 		            text    : 'Option A',
 		            value   : 'A',
 		            chosenStatus: true
 		        },
 		        {
 		            text    : 'Option B',
 		            value   : 'B',
 		            chosenStatus: true
 		        },
 		        {
 		            text    : 'Option C',
 		            value   : 'C',
 		            chosenStatus: false
 		        },
 		        {
 		            text    : 'Option D',
 		            value   : 'D',
 		            chosenStatus: false
 		        },
 		        {
 		            text    : 'Option E',
 		            value   : 'E',
 		            chosenStatus: false
 		        },
 		        {
 		            text    : 'Option F',
 		            value   : 'F',
 		            chosenStatus: false
 		        },
 		        {
 		            text    : 'Option G',
 		            value   : 'G',
 		            chosenStatus: false
 		        },
 		        {
 		            text    : 'Option H',
 		            value   : 'H',
 		            chosenStatus: false
 		        },
 		        {
 		            text    : 'Option I',
 		            value   : 'I',
 		            chosenStatus: false
 		        },
 		        {
 		            text    : 'Option J',
 		            value   : 'J',
 		            chosenStatus: false
 		        }
 		];
 	}
 	controller.$inject = ['$scope'];
 })();