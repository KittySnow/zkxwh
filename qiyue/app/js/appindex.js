'use strict';

(function (app) {

    app.controller( 'appindex', ['$routeParams', '$timeout', '$http','$scope','$rootScope','tips', function ($routeParams, $timeout, $http,$scope,$rootScope,tips) {
        $('.bxslider').bxSlider({
            auto : true,
            controls : false,
            touchEnabled : true
        });
    }]);

})(angular.module('appindex', []));
