'use strict';
(function (app) {

    app.controller('quality', ['$routeParams', '$timeout', '$http','$scope','$rootScope', function ($routeParams, $timeout, $http,$scope,$rootScope) {
        $rootScope.hideBottom = 1;
    }]);

})(angular.module('quality', []));