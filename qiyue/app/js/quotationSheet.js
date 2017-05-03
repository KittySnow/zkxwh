'use strict';
(function (app) {

    app.controller( 'quotationSheet', ['$routeParams', '$timeout', '$http','$scope','$rootScope', function ($routeParams, $timeout, $http,$scope,$rootScope) {
        $rootScope.hideBottom = 0;

    }]);

})(angular.module('quotationSheet', []));