'use strict';
(function (app) {

    app.controller('activity', ['$routeParams', '$timeout', '$http','$scope','$rootScope', function ($routeParams, $timeout, $http,$scope,$rootScope) {
        $rootScope.hideBottom = 1;
    }]);

})(angular.module('activity', []));
