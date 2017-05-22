'use strict';
(function (app) {

    app.controller('orderBoxList', ['$routeParams', '$timeout', '$http','$scope','$rootScope', function ($routeParams, $timeout, $http,$scope,$rootScope) {
        $rootScope.hideBottom = 0;
    }]);

})(angular.module('orderBoxList', []));

