'use strict';
var daBai ={};

(function () {

    var hash = location.hash || '';
    if (hash = hash.match(/^(.*)(\#wechat_redirect|\%23wechat_redirect)/)) { location.hash = hash[1] }

    daBai.Config = {
        /*timestamp: '2015072404',
        automask: true,
        autotips: true,
        app: {
            code: 'M',
            dir: 'modules/',
            schoolmanager: 'school.admin,school.master,school.vice_master'
        },
        service: {},
        map: [],
        emojis: {}*/
    };
    
    

    daBai.Config.map = [
        { path: '/', view: 'index.html', viewUrl: 'index.html', styles: null, scripts: 'detail', modules: 'detail' },
        { path: '/zkx', view: 'zkx.html', viewUrl: 'zkx.html', styles: null, scripts:'zkx', modules:'zkx'},

        { path: '/new2', view: 'list.html', viewUrl: 'list.html', styles: null, scripts: null, modules: null },
	    { path: '/malfunctionDetail', view: 'malfunctionDetail.html', viewUrl: 'malfunctionDetail.html', styles: null, scripts:'malfunctionDetail', modules:'malfunctionDetail'},
        { path: ['/find/surprise','/find'], view: 'surprise.html', viewUrl: 'find/surprise.html', styles: null, scripts:'find/surprise', modules:'surprise'},
        { path: '/find/decorate', view: 'decorate.html', viewUrl: 'find/decorate.html', styles: null, scripts:'find/decorate', modules:'decorate'},
        { path: '/find/strategy', view: 'strategy.html', viewUrl: 'find/strategy.html', styles: null, scripts:'find/strategy', modules:'strategy'},
        { path: '/find/activity', view: 'activity.html', viewUrl: 'find/activity.html', styles: null, scripts:'find/activity', modules:'activity'},
        { path: '/zhaihuanxin', view: 'zhaihuanxin.html', viewUrl: 'zhaihuanxin.html', styles: null, scripts:'zhaihuanxin', modules:'zhaihuanxin'},
        { path: '/zhaikuaixiu', view: 'zhaikuaixiu.html', viewUrl: 'zhaikuaixiu.html', styles: null, scripts:'zhaikuaixiu', modules:'zhaikuaixiu'},
        { path: '/serviceTreaty', view: 'serviceTreaty.html', viewUrl: 'serviceTreaty.html', styles: null, scripts:'serviceTreaty', modules:'serviceTreaty'},
        { path: '/zhaimenu', view: 'zhaimenu.html', viewUrl: 'zhaimenu.html', styles: null, scripts:'zhaimenu', modules:'zhaimenu'},
        { path: '/forgetPassword', view: 'forgetPassword.html', viewUrl: 'forgetPassword.html', styles: null, scripts:'forgetPassword', modules:'forgetPassword'},
        { path: '/zhaiOrder', view: 'zhaiOrder.html', viewUrl: 'zhaiOrder.html', styles: null, scripts:'zhaiOrder', modules:'zhaiOrder'},
        { path: '/myOrder', view: 'myOrder.html', viewUrl: 'myOrder.html', styles: null, scripts:'myOrder', modules:'myOrder'},

        { path: '/orderDetail', view: 'orderDetail.html', viewUrl: 'orderDetail.html', styles: null, scripts:'orderDetail', modules:'orderDetail'},
        { path: '/quality', view: 'quality.html', viewUrl: 'quality.html', styles: null, scripts:'quality', modules:'quality'},
        { path: '/bookOrder', view: 'bookOrder.html', viewUrl: 'bookOrder.html', styles: null, scripts:'bookOrder', modules:'bookOrder'},
        { path: '/pay', view: 'pay.html', viewUrl: 'pay.html', styles: null, scripts:'pay', modules:'pay'},
        { path: '/alreadyOrder', view: 'alreadyOrder.html', viewUrl: 'alreadyOrder.html', styles: null, scripts:'alreadyOrder', modules:'alreadyOrder'},
        { path: '/answerOrder', view: 'answerOrder.html', viewUrl: 'answerOrder.html', styles: null, scripts:'answerOrder', modules:'answerOrder'},
        { path: '/confirmOrder', view: 'confirmOrder.html', viewUrl: 'confirmOrder.html', styles: null, scripts:'confirmOrder', modules:'confirmOrder'},

        { path: '/user/userInfo', view: 'user/userInfo.html', viewUrl: 'user/userInfo.html', styles: null, scripts:'user/userInfo', modules:'userInfo'},
        { path: '/user/aboutus', view: 'user/aboutus.html', viewUrl: 'user/aboutus.html', styles: null, scripts:'user/userInfo', modules:'userInfo'},
        { path: '/user/userCenter', view: 'user/userCenter.html', viewUrl: 'user/userCenter.html', styles: null, scripts:'user/userCenter', modules:'userCenter'},
        { path: '/user/userCard', view: 'user/userCard.html', viewUrl: 'user/userCard.html', styles: null, scripts:'user/userCard', modules:'userCard'},
        { path: '/login', view: 'login.html', viewUrl: 'login.html', styles: null, scripts: 'login', modules: 'login' },
        { path: '/reg', view: 'reg.html', viewUrl: 'reg.html', styles: null, scripts: 'reg', modules: 'reg' },
        { path: '/evaluate', view: 'evaluate.html', viewUrl: 'evaluate.html', styles: null, scripts:'evaluate', modules:'evaluate'},
        { path: '/quotationSheet', view: 'quotationSheet.html', viewUrl: 'quotationSheet.html', styles: null, scripts:'quotationSheet', modules:'quotationSheet'},
        { path: '/agreement', view: 'agreement.html', viewUrl: 'agreement.html', styles: null, scripts:'agreement', modules:'agreement'},
        { path: '/message', view: 'message.html', viewUrl: 'message.html', styles: null, scripts:'message', modules:'message'},
        { path: '/mycard', view: 'mycard.html', viewUrl: 'mycard.html', styles: null, scripts:'mycard', modules:'mycard'},
        { path: '/zhibaojin', view: 'zhibaojin.html', viewUrl: 'zhibaojin.html', styles: null, scripts:'zhibaojin', modules:'zhibaojin'},
        { path: '/zhibaojinDetail', view: 'zhibaojinDetail.html', viewUrl: 'zhibaojinDetail.html', styles: null, scripts:'zhibaojinDetail', modules:'zhibaojinDetail'},
        { path: '/zhibaojinDrawback', view: 'zhibaojinDrawback.html', viewUrl: 'zhibaojinDrawback.html', styles: null, scripts:'zhibaojinDrawback', modules:'zhibaojinDrawback'},
        { path: '/orderList', view: 'orderList.html', viewUrl: 'orderList.html', styles: null, scripts:'orderList', modules:'orderList'},
        { path: '/check', view: 'check.html', viewUrl: 'check.html', styles: null, scripts:'check', modules:'check'},
        { path: '/feedback', view: 'feedback.html', viewUrl: 'feedback.html', styles: null, scripts:'feedback', modules:'feedback'},
        { path: '/asksuc', view: 'asksuc.html', viewUrl: 'asksuc.html', styles: null, scripts:'asksuc', modules:'asksuc'},
        { path: '/replaceChoose', view: 'replaceChoose.html', viewUrl: 'replaceChoose.html', styles: null, scripts:'replaceChoose', modules:'replaceChoose'},
        { path: '/moneyDetail', view: 'moneyDetail.html', viewUrl: 'moneyDetail.html', styles: null, scripts:'orderDetail', modules:'orderDetail'},
        { path: '/service', view: 'service.html', viewUrl: 'service.html', styles: null, scripts:'orderDetail', modules:'orderDetail'},
        { path: '/myRemain', view: 'myRemain.html', viewUrl: 'myRemain.html', styles: null, scripts:'orderDetail', modules:'orderDetail'},
        { path: '/shopList', view: 'shopList.html', viewUrl: 'shopList.html', styles: null, scripts:'orderDetail', modules:'orderDetail'},
        { path: '/addCard', view: 'addCard.html', viewUrl: 'addCard.html', styles: null, scripts:'addCard', modules:'addCard'},
        { path: '/trackOrder', view: 'trackOrder.html', viewUrl: 'trackOrder.html', styles: null, scripts:'trackOrder', modules:'trackOrder'}
        
        
    ];

}());
