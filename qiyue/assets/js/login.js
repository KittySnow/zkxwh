'use strict';



(function (app) {

    app.controller( 'login', ['$routeParams', '$timeout', '$http','$scope','$rootScope', function ($routeParams, $timeout, $http,$scope,$rootScope) {

        /*window.angular.callbacks._0 = function (data1){
            alert(data1);
        };

        $http.jsonp('http://www.jeasyui.com/demo/main/get_users.php?callback=JSON_CALLBACK').success(
            function(data){
                alert(data)
            }
        );*/
        /*
        $.ajax({
            type:"GET",
            url:'http://www.jeasyui.com/demo/main/get_users.php?callback=jsonpCallback',
            dataType:"jsonp",
            jsonp:"callback",
            jsonpCallback:"jsonpCallback",
            success:function(data){
                jsonpCallback(data.msg);
            }
        });

        window.jsonpCallback = function (data){
            alert(1);
            alert(data);
        }*/
        console.log($scope);
        $scope.aaa =111;/*
        window.onresize = function(){
            console.log(angular.element(document.getElementById('dabai-login')).scope());
            angular.element(document.getElementById('dabai-login')).scope().aaa=12355;
            angular.element(document.getElementById('dabai-login')).scope().$digest();
        }*/

    }]);

})(angular.module('login', []));
