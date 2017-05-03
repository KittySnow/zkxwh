'use strict';
(function (app) {

    app.controller( 'zhaimenu', ['$routeParams', '$timeout', '$http','$scope','$rootScope', function ($routeParams, $timeout, $http,$scope,$rootScope) {
        $rootScope.hideBottom = 0;
        $scope.sa = function () {
            alert(1);
        }
    }]);

})(angular.module('zhaimenu',['ngTouch']));


