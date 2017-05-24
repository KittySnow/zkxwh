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
        { path: '/', view: 'index.html', viewUrl: 'index.html', styles: null, scripts: 'appindex', modules: 'appindex' },
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
        
        
        
        { path: '/addAddress', view: 'addAddress.html', viewUrl: 'addAddress.html', styles: null, scripts:'addAddress', modules:'addAddress'},
        { path: '/editAddress', view: 'editAddress.html', viewUrl: 'editAddress.html', styles: null, scripts:'editAddress', modules:'editAddress'},
        { path: '/addressConfirm', view: 'addressConfirm.html', viewUrl: 'addressConfirm.html', styles: null, scripts:'addressConfirm', modules:'addressConfirm'},
        { path: '/chooseAuxiliaryMaterials', view: 'chooseAuxiliaryMaterials.html', viewUrl: 'chooseAuxiliaryMaterials.html', styles: null, scripts:'chooseAuxiliaryMaterials', modules:'chooseAuxiliaryMaterials'},
        { path: '/location', view: 'location.html', viewUrl: 'location.html', styles: null, scripts:'location', modules:'location'},
        { path: '/youhuiquanIntro', view: 'youhuiquanIntro.html', viewUrl: 'youhuiquanIntro.html', styles: null, scripts:'youhuiquanIntro', modules:'youhuiquanIntro'},
        { path: '/orderBoxList', view: 'orderBoxList.html', viewUrl: 'orderBoxList.html', styles: null, scripts:'orderBoxList', modules:'orderBoxList'},
        { path: '/shopcart', view: 'shopcart.html', viewUrl: 'shopcart.html', styles: null, scripts:'shopcart', modules:'shopcart'},
        { path: '/confimOrder', view: 'confimOrder.html', viewUrl: 'confimOrder.html', styles: null, scripts:'confimOrder', modules:'confimOrder'},
        { path: '/youhuiquanTips', view: 'youhuiquanTips.html', viewUrl: 'youhuiquanTips.html', styles: null, scripts:'youhuiquanTips', modules:'youhuiquanTips'},
        { path: '/youhuiquan', view: 'youhuiquan.html', viewUrl: 'youhuiquan.html', styles: null, scripts:'youhuiquan', modules:'youhuiquan'},
        { path: '/quality', view: 'quality.html', viewUrl: 'quality.html', styles: null, scripts:'quality', modules:'quality'},
        { path: '/bookOrder', view: 'bookOrder.html', viewUrl: 'bookOrder.html', styles: null, scripts:'bookOrder', modules:'bookOrder'},
        { path: '/pay', view: 'pay.html', viewUrl: 'pay.html', styles: null, scripts:'pay', modules:'pay'},
        { path: '/alreadyOrder', view: 'alreadyOrder.html', viewUrl: 'alreadyOrder.html', styles: null, scripts:'alreadyOrder', modules:'alreadyOrder'},
        { path: '/answerOrder', view: 'answerOrder.html', viewUrl: 'answerOrder.html', styles: null, scripts:'answerOrder', modules:'answerOrder'},
        { path: '/confirmOrder', view: 'confirmOrder.html', viewUrl: 'confirmOrder.html', styles: null, scripts:'confirmOrder', modules:'confirmOrder'},
        { path: '/auxiliaryMaterials1', view: 'auxiliaryMaterials1.html', viewUrl: 'auxiliaryMaterials1.html', styles: null, scripts:'auxiliaryMaterials1', modules:'auxiliaryMaterials1'},
        { path: '/auxiliaryMaterials2', view: 'auxiliaryMaterials2.html', viewUrl: 'auxiliaryMaterials2.html', styles: null, scripts:'auxiliaryMaterials2', modules:'auxiliaryMaterials2'},
        { path: '/auxiliaryMaterials', view: 'auxiliaryMaterials.html', viewUrl: 'auxiliaryMaterials.html', styles: null, scripts:'auxiliaryMaterials', modules:'auxiliaryMaterials'},
        { path: '/sheetDetail', view: 'sheetDetail.html', viewUrl: 'sheetDetail.html', styles: null, scripts:'sheetDetail', modules:'sheetDetail'},
        { path: '/myOrder', view: 'myOrder.html', viewUrl: 'myOrder.html', styles: null, scripts:'myOrder', modules:'myOrder'},
        { path: '/orderDetail', view: 'orderDetail.html', viewUrl: 'orderDetail.html', styles: null, scripts:'orderDetail', modules:'orderDetail'},
        { path: '/user/userInfo', view: 'user/userInfo.html', viewUrl: 'user/userInfo.html', styles: null, scripts:'user/userInfo', modules:'userInfo'},
        { path: '/user/aboutus', view: 'user/aboutus.html', viewUrl: 'user/aboutus.html', styles: null, scripts:'user/userInfo', modules:'userInfo'},
        { path: '/user/userCenter', view: 'user/userCenter.html', viewUrl: 'user/userCenter.html', styles: null, scripts:'user/userCenter', modules:'userCenter'},
        { path: '/user/userCard', view: 'user/userCard.html', viewUrl: 'user/userCard.html', styles: null, scripts:'user/userCard', modules:'userCard'},
        { path: '/user/userSet', view: 'user/userSet.html', viewUrl: 'user/userSet.html', styles: null, scripts:'user/userSet', modules:'userSet'},
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
        { path: '/choose', view: 'choose.html', viewUrl: 'choose.html', styles: null, scripts:'choose', modules:'choose'},
        { path: '/moneyDetail', view: 'moneyDetail.html', viewUrl: 'moneyDetail.html', styles: null, scripts:'orderDetail', modules:'orderDetail'},
        { path: '/service', view: 'service.html', viewUrl: 'service.html', styles: null, scripts:'orderDetail', modules:'orderDetail'},
        { path: '/myRemain', view: 'myRemain.html', viewUrl: 'myRemain.html', styles: null, scripts:'orderDetail', modules:'orderDetail'},
        { path: '/shopList', view: 'shopList.html', viewUrl: 'shopList.html', styles: null, scripts:'orderDetail', modules:'orderDetail'},
        { path: '/addCard', view: 'addCard.html', viewUrl: 'addCard.html', styles: null, scripts:'addCard', modules:'addCard'},
        { path: '/uploadService', view: 'uploadService.html', viewUrl: 'uploadService.html', styles: null, scripts:'uploadService', modules:'uploadService'},
        { path: '/trackOrder', view: 'trackOrder.html', viewUrl: 'trackOrder.html', styles: null, scripts:'trackOrder', modules:'trackOrder'}
        
        
    ];

}());
