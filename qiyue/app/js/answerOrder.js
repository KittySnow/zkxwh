'use strict';

(function (app) {

    app.controller( 'answerOrder', ['$routeParams', '$timeout', '$http','$scope','$rootScope','tips', function ($routeParams, $timeout, $http,$scope,$rootScope,tips) {
        $rootScope.hideBottom = 0;
    }]);

})(angular.module('answerOrder', []));
