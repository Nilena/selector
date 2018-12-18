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
                        value: "Item 1",
                        option:"item1",
                        status: true

                    },
                    {
                        value: "Item 2",
                        option:"item2",
                        status: false

                    },
                    {
                        value: "Item 3",
                        option:"item3",
                        status: false

                    },
                    {
                        value:"Item 4",
                        option:"item4",
                        status: false

                    },
                    {
                        value: "Item 5",
                        option:"item5",
                        status: false

                    },
                    // {
                    //     value: "item6",
                    //     option:"item6",
                    //     status: false
                    // },
                    // {
                    //     value: "item7",
                    //     option:"item7",
                    //     status: false

                    // }, {
                    //     value: "item8",
                    //     option:"item8",
                    //     status: false

                    // }, {
                    //     value: "item9",
                    //     option:"item9",
                    //     status: false

                    // }, {
                    //     value: "item10",
                    //     option:"item10",
                    //     status: false

                    // }, {
                    //     value: "item11",
                    //     option:"item11",
                    //     status: false

                    // }, {
                    //     value: "item12",
                    //     option:"item12",
                    //     status: false

                    // }, 
                    // {
                    //     value: "item13",
                    //     option:"item13",
                    //     status: false

                    // },
                    // {
                    //     value: "item14",
                    //     option:"item14",
                    //     status: false

                    // },
                    // {
                    //     value: "item15",
                    //     option:"item15",
                    //     status: false

                    // }

                ]
            }
        }
})();