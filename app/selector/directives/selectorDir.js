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
                data: '=',
                data_multi: '='

            }
        };
        return directive;
        function link(scope, element, attrs) {
            console.log(scope.data);
            scope.value="";
            console.log("item:"+scope.value);
        }
    }
})();