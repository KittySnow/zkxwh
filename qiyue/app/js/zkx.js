'use strict';
(function (app) {

    app.controller( 'zkx', ['$routeParams', '$timeout', '$http','$scope','$rootScope', function ($routeParams, $timeout, $http,$scope,$rootScope) {
        $rootScope.hideBottom = 0;

        var width = $('#kuaixiu').width();
        $('.zkx-big-icon').height(width);

    }]);

})(angular.module('zkx', []));