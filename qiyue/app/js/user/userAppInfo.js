'use strict';

(function (app) {

    app.controller( 'userAppInfo', ['$routeParams', '$timeout', '$http','$scope','$rootScope','tips', function ($routeParams, $timeout, $http,$scope,$rootScope,tips) {
        $rootScope.hideBottom = 0;
    }]);

})(angular.module('userAppInfo', []));
