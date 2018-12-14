/*
* @description: slector app
* @author: nilena
*/
(function (){
    'use strict';
    console.log("controller");
    angular
        .module('selector')
        .controller('selectorCntrl',controller);
    controller.$inject = ['$scope'];
    function controller ($scope){
            console.log("controllerfunction");

            $scope.singleSelector = {
                id: 1,
                type: 1,
                items: [ 'item1', 'item2', 'item3', 'item4', 'item5']
                
            }
            $scope.multiselector = {
                id :2,
                type: 2,
                items:[
                    {
                        value: "item1",
                        optiom:"item1",
                        status: "false"

                    },
                    {
                        value: "item2",
                        optiom:"item2",
                        status: "false"

                    },
                    {
                        value: "item3",
                        option:"item3",
                        status: "false"

                    },
                    {
                        value: "item4",
                        optiom:"item4",
                        status: "false"

                    },
                    {
                        value: "item5",
                        optiom:"item5",
                        status: "false"

                    },
                    {
                        value: "item6",
                        optiom:"item6",
                        status: "false"
                    },
                    {
                        value: "item7",
                        optiom:"item7",
                        status: "false"

                    }, {
                        value: "item8",
                        optiom:"item8",
                        status: "false"

                    }, {
                        value: "item9",
                        optiom:"item9",
                        status: "false"

                    }, {
                        value: "item10",
                        optiom:"item10",
                        status: "false"

                    }, {
                        value: "item11",
                        optiom:"item11",
                        status: "false"

                    }, {
                        value: "item12",
                        optiom:"item12",
                        status: "false"

                    }, 
                    {
                        value: "item13",
                        optiom:"item13",
                        status: "false"

                    },
                    {
                        value: "item14",
                        optiom:"item14",
                        status: "false"

                    },
                    {
                        value: "item15",
                        optiom:"item15",
                        status: "false"

                    }

                ]
            }
        }
})();