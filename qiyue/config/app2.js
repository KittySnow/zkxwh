(function (app) {
    console.log(app);

    /*   default config   */
    var defaults = {
            redirect: '/',
            rootPath: location.protocol + '//' + location.host+'/qiyue',
            timestamp: Date.parse(new Date()) / 1000,
            automask: false,
            autotips: false, /*[true:all,1:success,2:error]*/
            app: { code: '', dir: '', dashboard: '', schoolmanager: '', styles: [], scripts: [], modules: [] },
            map: [{ path: '', view: '', viewUrl: '', styles: null, scripts: null, modules: null }],
            menu: [{ code: '', name: '', icon: '' }],
            service: { /* $resource actions */ },
            eachpath: function (list, ext) { angular.forEach(list, function (path) { this.push(defaults.extpath(path, ext)) }, list = []); return list },
            extpath: function (path, ext) {
                var filedir = defaults.rootPath + '/assets/' + (ext === 'html' ? 'views' : ext) + '/' + defaults.app.dir,
                    fileext = '.' + ext,
                    nofirst = !/(^http:\/\/)|(^https:\/\/)|(^\/)/.test(path),
                    noparam = !new RegExp('\\.' + ext + '\\?', 'i').test(path),
                    nullext = !new RegExp('(\\.' + ext + '$)|(\\.' + ext + '\\?)', 'i').test(path);
                if (nofirst) path = filedir + path;
                if (nullext) path = path + fileext;
                if (nofirst && noparam) path = path + '?t=' + defaults.timestamp;
                return path;
            },
            browser: (function (ua) {
                var ret = {},
                    weixin = ua.match(/MicroMessenger\/([\d.]+)/);
                weixin && (ret.weixin = parseFloat(weixin[1]));
                return ret;
            }(navigator.userAgent)),
            os: (function (ua) {
                var ret = {},
                    android = ua.match(/(?:Android);?[\s\/]+([\d.]+)?/),
                    ios = ua.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);
                android && (ret.android = parseFloat(android[1]));
                ios && (ret.ios = parseFloat(ios[1].replace(/_/g, '.')));
                return ret;
            }(navigator.userAgent))
        },

        mimetypes = (function () {
            return {
                js: 'application/x-javascript',
                css: 'text/css',
                less: 'text/css',
                jpg: 'image/jpeg',
                jpeg: 'image/jpeg',
                gif: 'image/gif',
                png: 'image/png',
                bmp: 'image/bmp',
                swf: 'application/x-shockwave-flash',
                pdf: 'application/pdf',
                '7z': 'application/x-7z-compressed',
                rar: 'application/x-rar-compressed',
                zip: 'application/zip,application/x-zip-compressed',
                doc: 'application/msword',
                docx: 'application/msword',
                ppt: 'application/vnd.ms-powerpoint',
                pptx: 'application/vnd.ms-powerpoint',
                xls: 'application/vnd.ms-excel',
                xlsx: 'application/vnd.ms-excel',
                txt: 'text/plain',
                mp3: 'audio/mpeg',
                wma: 'audio/x-ms-wma',
                rm: 'application/vnd.rn-realmedia',
                rmvb: 'application/vnd.rn-realmedia',
                ra: 'audio/x-pn-realaudio',
                mid: 'audio/midi',
                wav: 'audio/x-wav',
                md: 'text/plain',
                avi: 'video/x-msvideo',
                mp4: 'video/mp4',
                m3u: 'audio/x-mpegurl',
                m4a: 'audio/mp4a-latm',
                m4b: 'audio/mp4a-latm',
                m4p: 'audio/mp4a-latm',
                m4u: 'video/vnd.mpegurl',
                m4v: 'video/x-m4v',
                '3gp': 'video/3gpp',
                ts: 'text/texmacs',
                wmv: 'video/x-ms-wmv',
                mkv: 'video/x-matroska',
                mov: 'video/quicktime'
            }
        }());

    /*  extend config  */
    daBai.Config && angular.forEach(defaults, function (item, name, config) {
        if ((config = daBai.Config[name]) && item instanceof Array) { defaults[name] = config }
        else if (typeof item === 'object') { angular.extend(item, config) }
        else if (config !== undefined) { defaults[name] = config }
    });

    console.log(defaults);
    app.config(['$animateProvider', '$compileProvider', '$controllerProvider', '$filterProvider', '$httpProvider', '$locationProvider', '$routeProvider', '$provide', function ($animateProvider, $compileProvider, $controllerProvider, $filterProvider, $httpProvider, $locationProvider, $routeProvider, $provide) {

        /*  HTML5 mode  */
        //$locationProvider.html5Mode(true);

        /*  clear unsafe  */
        //$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);

        /*  register the interceptor via an anonymous factory  */
        $httpProvider.interceptors.push(['$q', 'tips', 'viewMask', function ($q, tips, viewMask) {
            return {
                request: function (request) {
                    if (request.url && /\/api\/1.1b\//i.test(request.url) && request.method) {
                        var reset = function (data) {
                            angular.forEach(['automask', 'autotips'], function (key) {
                                request[key] = data[key] === undefined ? defaults[key] : data[key];
                                delete data[key];
                            });
                            delete data._api_action;
                            return data
                        };
                        if (request.method.toUpperCase() === 'GET') {
                            request.params = reset(request.params || {});
                        } else {
                            request.data = reset(request.data || {});
                            request.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
                            request.transformRequest = [function (data) { return angular.isObject(data) ? $.param(angular.forEach(data, function (item, key) { data[key] = (angular.isArray(item) || angular.isObject(item)) ? JSON.stringify(item) : item })) : data }];
                        }
                        request.automask && viewMask.open();
                        request.url = decodeURIComponent(request.url);
                    }
                    return request
                },
                requestError: function (request) { return $q.reject(request) },
                response: function (response) {
                    if (response.config) {
                        response.config.automask && viewMask.close();
                        response.data.message && (response.config.autotips === true || response.config.autotips === 1) && tips.success(response.data.message);
                    }
                    return response
                },
                responseError: function (response) {
                    if (response.config) {
                        response.config.automask && viewMask.close();
                        response.data.message && (response.config.autotips === true || response.config.autotips === 2) && tips.error(response.data.message);
                    }
                    if (response.data.code == '10020002') { location.href = 'http://auth.daBai.cn/auth/login?go=' + encodeURIComponent(location.href); }
                    return $q.reject(response)
                }
            }
        }]);

        /*  load script  */
        $provide.factory('loadScript', ['$q', function ($q) {
            var cache = {};

            return function (path, callback) {

                var defer = $q.defer(),
                    loadList = [],
                    promiseList = [];

                angular.forEach(path instanceof Array ? path : [path], function (url, defer) {
                    defer = cache[url] || $q.defer();
                    promiseList.push(defer.promise);
                    if (!cache[url]) {
                        cache[url] = defer;
                        loadList.push(url);
                    }
                });

                (function toload(index, url, element) {
                    if (url = loadList[index]) {
                        element = document.createElement('script');
                        element[document.addEventListener ? 'onload' : 'onreadystatechange'] = function (_, isAbort) {
                            if (isAbort || !element.readyState || /loaded|complete/.test(element.readyState)) {
                                document.body.removeChild(element);
                                cache[url].resolve();
                                toload(index + 1);
                            }
                        };
                        element.onerror = function () {
                            cache[url].reject();
                            toload(index + 1);
                        };
                        element.src = url;
                        document.body.appendChild(element);
                    }
                }(0));

                $q.all(promiseList).then(function () {
                    angular.isFunction(callback) && setTimeout(callback);
                    defer.resolve();
                }, defer.reject);

                return defer.promise;

            }

        }]);

        /*  load style  */
        $provide.factory('loadStyle', ['$q', function ($q) {

            var cache = {};

            return function (path) {

                var $ua = navigator.userAgent,
                    callback = angular.isFunction(arguments[1]) ? arguments[1] : arguments[2],
                    preload = typeof arguments[1] === 'boolean' ? arguments[1] : arguments[2];

                angular.forEach(path instanceof Array ? path : [path], function (url, defer, element) {
                    defer = cache[url] || $q.defer();
                    this.push(defer.promise);
                    if (!cache[url]) {
                        element = document.createElement('link');
                        element.rel = 'stylesheet';
                        if (preload) {
                            cache[url] = defer
                        } else {
                            element.className = 'loader-stylesheet'
                        }
                        if (/(?:Android);?[\s\/]+([\d.]+)?/i.test($ua) || /(?:iPad|iPod|iPhone).*OS\s([\d_]+)/i.test($ua)) {
                            (function poll(count, loaded) {
                                if (/webkit/i.test($ua)) {
                                    if (element.sheet) {
                                        loaded = true
                                    }
                                } else if (element.sheet) {
                                    try {
                                        if (element.sheet.cssRules) {
                                            loaded = true
                                        }
                                    } catch (ex) {
                                        if (ex.name === 'SecurityError' || ex.code === 1000) {
                                            loaded = true
                                        }
                                    }
                                }
                                if (loaded || (count >= 200)) {
                                    defer.resolve()
                                } else {
                                    setTimeout(function () { poll(count + 1) }, 10)
                                }
                            }(0))
                        } else {
                            element[document.addEventListener ? 'onload' : 'onreadystatechange'] = function (_, isAbort) {
                                if (isAbort || !element.readyState || /loaded|complete/.test(element.readyState)) {
                                    defer.resolve()
                                }
                            }
                        }
                        element.onerror = defer.reject;
                        element.href = url;
                        (document.head || document.getElementsByTagName('head')[0]).appendChild(element);
                    }
                }, path = []);

                var defer = $q.defer();
                $q.all(path).then(function () {
                    angular.isFunction(callback) && setTimeout(callback);
                    defer.resolve();
                }, defer.reject);
                return defer.promise;

            }
        }]);

        /*  module injector  */
        $provide.factory('moduleInjector', ['$injector', '$log', function ($injector, $log) {
            var $injected = {},
                invokeQueue = [],
                runBlocks = [],
                providers = {
                    $animateProvider: $animateProvider,
                    $compileProvider: $compileProvider,
                    $controllerProvider: $controllerProvider,
                    $filterProvider: $filterProvider,
                    $provide: $provide
                };
            return function (modules) {
                modules && angular.forEach(modules instanceof Array ? modules : [modules], function (item, module) {
                    try {
                        if (!$injected[item] && (module = angular.module(item))) {
                            invokeQueue = invokeQueue.concat(module._invokeQueue);
                            runBlocks = runBlocks.concat(module._runBlocks);
                            $injected[item] = true;
                        }
                    } catch (ex) {
                        if (ex.message) {
                            ex.message += ' from ' + item;
                            $log.error(ex.message);
                        }
                        throw ex
                    }
                });
                angular.forEach(invokeQueue, function (item, provide) {
                    try {
                        item.length > 2 && providers.hasOwnProperty(item[0]) && (provide = providers[item[0]]) && provide[item[1]].apply(provide, item[2])
                    } catch (ex) {
                        if (ex.message) {
                            ex.message += ' from ' + JSON.stringify(item);
                            $log.error(ex.message);
                        }
                        throw ex
                    }
                });
                angular.forEach(runBlocks, function (item) { $injector.invoke(item) });
                invokeQueue.length = 0;
                runBlocks.length = 0;
            }
        }]);

        /*  route apply  */
        $provide.factory('routeApply', ['$q', '$location', 'moduleInjector', 'loadScript', function ($q, $location, moduleInjector, loadScript) {
            var defer = {};
            return function (routes) {
                angular.forEach(routes, function (route) {
                    if (route.view || route.viewUrl) {
                        angular.forEach(route.scripts ? (route.scripts instanceof Array ? route.scripts : [route.scripts]) : [], function (path) { this.push(defaults.extpath(path, 'js')) }, route.scripts = []);
                        angular.forEach(route.path instanceof Array ? route.path : [route.path], function (path) {
                            this.when( path, {
                                template: route.viewUrl ? undefined : route.view,
                                templateUrl: route.viewUrl ? defaults.extpath(route.viewUrl, 'html') : undefined,
                                resolve: {
                                    promise: function () {
                                        if (!defer[path]) {
                                            $('body>section').css({ visibility: 'hidden' });
                                            loadScript(route.scripts, function () {
                                                moduleInjector(route.modules);
                                                defer[path].resolve();
                                                setTimeout(function () { $('body>section').css({ visibility: 'visible' }) });
                                            })
                                        }
                                        return (defer[path] = defer[path] || $q.defer()).promise;
                                    }
                                }
                            })
                        }, $routeProvider)
                    }
                });
                $routeProvider.otherwise({ redirectTo:defaults.redirect });
            }
        }]);

        /*  api service  */
        /*
         * $resource(url, [paramDefaults], [actions], options);
         *
         * config:
         * $api.apply({
         *  name1 : [url{String}, paramDefaults{Object}|null, actions{Object}|null, options{Object}|null],
         *  name2 : [url{String}, paramDefaults{Object}|null, actions{Object}|null, options{Object}|null],
         *  name3 : [url{String}, paramDefaults{Object}|null, actions{Object}|null, options{Object}|null],
         * });
         *
         * use:
         * $api.name1.action([parameters], [success], [error])
         * $api.name2.action([parameters], postData, [success], [error])
         */
        $provide.service('$api', ['$resource', function ($resource) {

            var fullUrl = function (url, bool) { return (/(^http:\/\/)|(^https:\/\/)|(^\/)/.test(url) ? url : (location.protocol + '//' + location.host + '/api/1.1b/' + url)) + (bool ? '/:_api_action' : '') };

            this.$apply = function (items, clear) {

                clear && angular.forEach(this, function (item, name) {

                    if (name !== '$apply') {
                        delete this[name]
                    }

                }, this);

                angular.forEach(items, function (item, name) {

                    if (item instanceof Array) {

                        var url = item[0],
                            paramDefaults = item[1],
                            actions = item[2],
                            options = item[3];

                        if (url) {

                            actions = angular.forEach(angular.extend({
                                get: { method: 'GET' },
                                list: { method: 'GET' },
                                search: { method: 'GET' },
                                set: { method: 'POST' },
                                create: { method: 'POST' },
                                update: { method: 'POST' },
                                remove: { method: 'POST' },
                                'delete': { method: 'POST' }
                            }, actions), function (action, name) {
                                action = action || {};
                                if (action.url) { action.url = fullUrl(action.url) }
                                action.method = action.method || 'GET';
                                action.params = angular.extend(action.url ? {} : { _api_action: name === 'remove' ? 'delete' : name }, action.params);
                            });

                            this[name] = $resource(fullUrl(url, true), paramDefaults, actions, options);

                        }

                    }

                }, this);

                return this;

            }

        }]);

        /*  tips  */
        $provide.factory('tips', function () {
            var zIndex = 1050, dialog, dialogId = 'dialog' + Date.parse(new Date()) / 1000,
                tip = function (content, config) {
                    if (content) {
                        config = angular.extend({ clas: 'modal-primary', icon: 'fa fa-question-circle', timeout: 2000 }, config);
                        var timer, modal, modalId = 'modal' + new Date().getTime(),
                            remove = function () {
                                modal.animate({ marginTop: 0, opacity: 0 }, 200, function () {
                                    $(this).remove();
                                    config.callback instanceof Function && setTimeout(config.callback);
                                    !dialog.children('.modal-content').length && dialog.parent().remove()
                                })
                            };
                        if (!document.getElementById(dialogId)) {
                            $('body>section>div[ng-view]').children().each(function (i) { if (!!parseInt($(this).css('zIndex'))) zIndex = parseInt($(this).css('zIndex')) + 1 });
                            $('body>section>div[ng-view]').append('<div class="modal modal-tips" style="z-index:' + zIndex + '" id="' + dialogId + '"><div class="modal-mask"></div><div class="modal-dialog"></div></div>');
                            dialog = $('#' + dialogId + '>.modal-dialog');
                        }
                        dialog.append(['<div id="' + modalId + '" class="modal-content ' + config.clas + '">', '<i class="' + config.icon + '"></i>', '<a href="javascript:void(0)" class="fa fa-times"></a>', '<div class="modal-body">', content, '</div>', '</div>'].join(''));
                        modal = $('#' + modalId).animate({ marginTop: 15, opacity: 1 }, 200).mouseenter(function () { timer && clearTimeout(timer) }).mouseleave(function () { if (config.timeout) timer = setTimeout(remove, config.timeout) });
                        modal.children('a').click(remove);
                        if (config.timeout) timer = setTimeout(remove, config.timeout);
                    }
                    return tip
                };
            tip.extend = function () {
                var $this = this, conf, config = arguments[0] || [], i = 0;
                if (!(config instanceof Array)) { config = [config] }
                for (; i < config.length; i++) {
                    (conf = config[i]) && typeof conf === 'object' && (function (conf) {
                        $this[conf.name] = function (content, config) {
                            if (typeof config === 'number') { config = { timeout: config } }
                            if (typeof config === 'function') { config = { callback: config } }
                            return tip(content, angular.extend(angular.copy(conf), config))
                        }
                    })(conf)
                }
                return $this
            };
            return tip.extend([
                { name: 'alert', clas: 'modal-primary', icon: 'fa fa-question-circle' },
                { name: 'success', clas: 'modal-success', icon: 'fa fa-check-circle' },
                { name: 'info', clas: 'modal-info', icon: 'fa fa-info-circle' },
                { name: 'warning', clas: 'modal-warning', icon: 'fa fa-exclamation-triangle' },
                { name: 'error', clas: 'modal-danger', icon: 'fa fa-exclamation-circle', timeout: 0 }
            ])
        });

        /*  view mask  */
        $provide.service('viewMask', function () {
            var count = 0,
                viewmask = $('body>div.view-mask').hide(),
                mask = function (callback, bool, closeAll) {
                    if (bool) {
                        count++;
                        !$('.modal-backdrop').length && viewmask.show();
                    } else {
                        if (closeAll) { count = 0 }
                        else { count-- }
                        !count && viewmask.hide()
                    }
                    callback instanceof Function && setTimeout(callback)
                };
            this.open = function () { mask(arguments[0], true) };
            this.close = function () {
                var callback = arguments[0],
                    closeAll = arguments[1];
                if (!(callback instanceof Function)) {
                    callback = null;
                    closeAll = arguments[0];
                }
                mask(callback, false, closeAll)
            };
        });

    }]);


    app.controller(app.name + '.controller', ['$rootScope', '$location', '$route', '$q',  'routeApply', function ($rootScope, $location, $route, $q,  routeApply) {
        routeApply(defaults.map);
        //$route.reload();
    }]);

    angular.element(document).ready(function () {
        var rootCtrl = $(document.body).attr('ng-controller', app.name + '.controller');
        angular.bootstrap(document, [app.name]);
    });


}(angular.module('app', ['ngResource', 'ngRoute', 'ngSanitize','ngAnimate'])));
