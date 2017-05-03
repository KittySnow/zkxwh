'use strict';

(function (app) {

    app.controller( 'confirmOrder', ['$routeParams', '$timeout', '$http','$scope','$rootScope','tips', function ($routeParams, $timeout, $http,$scope,$rootScope,tips) {
        $rootScope.hideBottom = 1;
    }]);

})(angular.module('confirmOrder', []));
