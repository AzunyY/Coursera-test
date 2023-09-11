(function(){
    'use strict';

    angular.module('MsgApp', {})
    .controller('MsgController', MsgController);
    function MsgController($scope){
        $scope.name = "Catarina";
        $scope.sayMessage = function(){
            return "Catarina likes eating snacks at night";
        }
    }
})();