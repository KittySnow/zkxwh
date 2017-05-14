'use strict';

(function (app) {

    app.controller( 'auxiliaryMaterials', ['$routeParams', '$timeout', '$http','$scope','$rootScope','tips', function ($routeParams, $timeout, $http,$scope,$rootScope,tips) {
        var swiper = new Swiper('.bg-swiper-container', {
            slidesPerView: 3
        });

    }]);

})(angular.module('auxiliaryMaterials', []));
