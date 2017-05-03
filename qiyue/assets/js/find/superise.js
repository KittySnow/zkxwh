'use strict';



(function (app) {

    app.controller( 'superise', ['$routeParams', '$timeout', '$http','$scope','$rootScope', function ($routeParams, $timeout, $http,$scope,$rootScope) {

        console.log($scope);
        $scope.aaa =111;

    }]);

})(angular.module('superise', []));
