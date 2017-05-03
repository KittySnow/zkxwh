'use strict';
(function (app) {

    app.controller('message', ['$routeParams', '$timeout', '$http','$scope','$rootScope', function ($routeParams, $timeout, $http,$scope,$rootScope) {
        $rootScope.hideBottom = 0;
    }]);

})(angular.module('message', []));
