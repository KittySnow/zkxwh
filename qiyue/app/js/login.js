'use strict';
(function (app) {

    app.controller('login', ['$routeParams', '$timeout', '$http','$scope','$rootScope', function ($routeParams, $timeout, $http,$scope,$rootScope) {
        $rootScope.hideBottom =0;
        $scope.status =function(){
            $scope.changeStatus = !$scope.changeStatus
        }
        
    }]);

})(angular.module('login', []));
