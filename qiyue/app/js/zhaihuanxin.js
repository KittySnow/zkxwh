'use strict';
(function (app) {

    app.controller('zhaihuanxin', ['$routeParams', '$timeout', '$http','$scope','$rootScope', function ($routeParams, $timeout, $http,$scope,$rootScope) {
        $rootScope.hideBottom = 1;
    }]);

})(angular.module('zhaihuanxin', []));
