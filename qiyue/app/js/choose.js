'use strict';

(function (app) {

    app.controller( 'choose', ['$routeParams', '$timeout', '$http','$scope','$rootScope','tips', function ($routeParams, $timeout, $http,$scope,$rootScope,tips) {
        $rootScope.hideBottom = 1;
    }]);

})(angular.module('choose', []));
