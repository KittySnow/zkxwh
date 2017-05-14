'use strict';

(function (app) {

    app.controller( 'choose', ['$routeParams', '$timeout', '$http','$scope','$rootScope','tips', function ($routeParams, $timeout, $http,$scope,$rootScope,tips) {


        $rootScope.hideBottom = 1;


        var currYear = (new Date()).getFullYear(); // 获取年
        var currMonth = (new Date()).getMonth(); // 获取月
        var currDay = (new Date()).getDate(); // 获取日
        var opt={};
        opt.date = {preset : 'date'};
        opt.datetime = {preset : 'datetime'};
        opt.time = {preset : 'time'};
        opt.default = {
            theme: 'android-ics light', //皮肤样式
            display: 'modal', //显示方式
            mode: 'scroller', //日期选择模式
            dateFormat: 'yyyy-mm-dd',
            lang: 'zh',
            showNow: true,
            nowText: "今天",
            startYear: currYear, //开始年份
            startMonth: currMonth, // 开始月份
            startDay: currDay, //开始年份
            endYear: currYear + 10, //结束年份
            onSelect:function(){
                $.ajax({
                    url:'/M/BoardroomInfo/checkDate',
                    type:'POST',
                    data:{boardroom_id:20,date:$("#appDate").val()}
                }).done(function(data){
                    if(data.code==2000){
                        var arrays = data.data;
                        $('#timeTable li').removeClass('gray').removeClass('checked');
                        $('#timeTable li').off('click').on('click',function () {
                            var $this = $(this);
                            if($this.hasClass('gray')){
                                return false;
                            }
                            if($this.hasClass('checked')){
                                $this.removeClass('checked');
                            }else{
                                $this.addClass('checked');
                            }
                        });
                        $.each(arrays.trem_no,function(index,data){
                            $('#xuanzelie'+index).addClass('gray');
                        });
                        $('#timeNumber').html('').hide();
                        $('#choosePlaceHoler').show();
                    }
                }).fail(function(){
                    floatNotify.simple('网络出错，请稍后预定');
                });
            }
        };

        $("#appDate").mobiscroll(
            $.extend(opt['date'], opt['default'])
        );

        $("#chooseDate,#choosePlaceHoler").on('click',function(){
            $('#fixedBox').slideDown();
            $('#darkBg').show();
        });

        $('#arrow1 #quxiao').on('click',function () {
            $('#fixedBox').slideUp();
            $('#darkBg').hide();
        });

        $('#arrow1 #queding').on('click',function () {
            var $more = $('#timeTable li.checked');
            if($more.length){
                $("#choosePlaceHoler").hide();
                var arrayHtml = [];
                var html = "";
                $.each($more,function(index,data){
                    arrayHtml.push($(data).html());
                    /*html += "<li class='tr'>"++"</li>";*/
                });
                var newArray = bind(arrayHtml);
                $.each(newArray,function(index,data){
                    html += "<li class='tr'>"+data+"</li>";
                });
                $('#timeNumber').html(html).show();
            }else{
                $("#choosePlaceHoler").show();
                $('#timeNumber').html('').hide();
            }

            $('#fixedBox').slideUp();
            $('#darkBg').hide();
        });

        $('#timeTable li').on('click',function () {
            var $this = $(this);
            if($this.hasClass('gray')){
                return false;
            }
            if($this.hasClass('checked')){
                $this.removeClass('checked');
            }else{
                $this.addClass('checked');
            }
        });


        var wheelLong = [{},{},{}];
        for(var index=0;index<11;index++){
            wheelLong[0][index]=index;
        }
        for(var index=1;index<13;index++){
            wheelLong[1][index]=index;
            wheelLong[1][12]=0;
        }
        for(var index=0;index<30;index++){
            wheelLong[2][index]=index;
        }

        $("#appDate").mobiscroll($.extend(opt['date'], opt['default']));
        

        $("#chooseDate1").mobiscroll({
                width: 70,
                height: 40,
                rows: 3,
                delay: 300,
                disabled: false,
                readonly: false,
                showOnFocus: true,
                showLabel: true,
                wheels: [{'天':wheelLong[2]}],
                theme: 'android-ics light', //皮肤样式
                headerText: '选择时长',
                display: 'modal',
                mode: 'scroller',
                preset: '',
                lang: 'en-US',
                setText: '确认',
                cancelText: '取消',
                onSelect:function(value,scroll){
                }
            }
        );





    }]);

})(angular.module('choose', []));
