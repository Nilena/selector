/**
 * @desc  : Multiselector usingangularjs
 * @name  : 'Multiselector  Directive'
 * @author: Nilena Alexander
 */
( function (){
    console.log("directive");
        'use strict';
    angular
        .module('selector')
        .directive('selectorDir',directive);
    directive.$inject = [];
    function directive () {
        
        var directive = {
            link: link,
            templateUrl:"app/selector/templates/selectorTemplate.html",
            restrict: 'EA',
            scope: {
        
                data:'=',
                data1: '='            
            }
        };
        return directive;
        function link(scope, element, attrs) {
           
            console.log(scope.data);
            console.log(scope.data1);
            scope.showValue = false;
            scope.show = function (id){         
                scope.showValue = !scope.showValue;
            }
           scope.search = function () {
                if (scope.SearchText== null){
                    console.log ("no");
                    scope.message="no such item";
                }
                console.log (scope.message);
           }

            scope.toggleSelection = function (index){
                scope.data1.items[index].status = !scope.data1.items[index].status;
                // console.log( scope.data1.items[index].status);
                scope.count();
            }

            scope.count = function (){
                scope.countVal = 0;             
                for (let i= 0; i<scope.data1.items.length; i++){  
                    if(scope.data1.items[i].status===true){
                    scope.countVal++;
                     console.log("scope.countVal"+scope.countVal);
                    }
                }                   
            }
            scope.selectall = function(){             
                for ( let i = 0; i<scope.data1.items.length; i++ ){
                    scope.data1.items[i].status = true;
                }
                scope.count();
            }
            scope.clearAll = function (){
                for (let i= 0; i<scope.data1.items.length; i++){  

                    if(scope.data1.items[i].status==true){
                    scope.data1.items[i].status = false;
                    }
                    scope.countVal= 0;    
                    // toggleSelection();              
                } 
            }
        }
    }
})();