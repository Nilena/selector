/*
 *@desc chosen directive for use in myApp under feathersoft(fs)
 *@author sambath
 *@example <fs-myapp-chosen></fs-myapp-chosen> 
 */
 (function(){
 	angular
 	.module('myApp')
 	.directive('fsMyappChosen',directive);
 	function directive(){
 		let directive = {
 			link        : link,
 			templateUrl : `app/chosen/template/chosen.template.html`,
 			restrict    : `EA`,
 			scope		: { config : "="}
 		};
 		return directive;
 		function link(scope,element,attrs){

 			// warningVisible disables the input after all values are chosen
 			scope.warningVisible   = true;
 			// show or hide dropdown
 			scope.dropDownVisible  = false;
 			let pressedDropDown    = false;
 			// hold the result
 			let chosenList		   = [];
 			scope.options          = [];

		 	fillOptions();
 			getChosenItems();

 			scope.closeChosen  = function(id){
 				scope.config[id].chosenStatus = !scope.config[id].chosenStatus;
 				getChosenItems();
 			} 

 			scope.setChosen = function (id) {
 				hideDropDown();
 			    for(let i = 0; i < scope.config.length; i++){
 			    	if(scope.config[i].text === id){
		 			    scope.config[i].chosenStatus = !scope.config[i].chosenStatus;	
 			    	}
 			    }
 			    scope.search = '';
 			    fillOptions();
 			    getChosenItems();
 			}

 			scope.inputChange = function(){
 				showDropDown();
 			}

 			scope.inputFocus = function(){
 				fillOptions();
 				showDropDown();
 			}

 			scope.inputBlur = function(event){
 				if(pressedDropDown){
 					pressedDropDown = false;
 					return;
 				}
 				hideDropDown();
 			}

 			scope.dropDownPressed = function(){
 				pressedDropDown = true;
 			}

 			function showDropDown(){
 				scope.dropDownVisible = true;
 			}

 			function hideDropDown(){
 				scope.dropDownVisible = false;
 			}

 			function fillOptions(){
 			 	scope.options.length = 0;
 				for(let i = 0; i < scope.config.length; i++){
 					if(scope.config[i].chosenStatus === false){
 					 	scope.options.push(scope.config[i].text);
 					}
 				}
 			}

	 		function getChosenItems() {
	 			chosenList.length = 0;
	 			scope.warningVisible   = false;
	 			let trueStatusCounter = 0;

	 			for (let i = 0; i < scope.config.length; i++) {
	 			    if (scope.config[i].chosenStatus === true) {
	 			        chosenList.push(scope.config[i]);
	 			    	trueStatusCounter += 1;
	 			    }
	 			}
	 			if(trueStatusCounter == (scope.config.length)){
	 			    scope.warningVisible = true;
	 			}
	 			console.log(chosenList); 
	 		}

 			}


 		}

 })();