'use strict';



(function (app) {

    app.controller( 'detail', ['$routeParams', '$timeout', '$http','$scope','$rootScope', function ($routeParams, $timeout, $http,$scope,$rootScope) {

        $scope.aaa =[{'name':'123'},{"name":"456"}];

        $scope.bbb=1;
    }]);

})(angular.module('detail', []));
