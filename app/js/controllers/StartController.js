angular
    .module(AppConfig.name)
    .constant('_', window._)
    .controller('StartCtrl', function ($scope, $rootScope, $location, deviceService, generalService) {
        $location.path("/test");
        var self= this;
        return;
            document.addEventListener('deviceready', function() {
            navigator.splashscreen.hide();
            $rootScope.deviceReady = true;
            StatusBar.hide();

            deviceService.setDeviceInfo(device).then(function() {
                generalService.bootstrap().then(function() {
                    //$location.path("/main/call");
                    $location.path("/login");
                    //userService.checkIfStoredCredentials() === true ?
                        //restService.postRequest(AppConfig.signINHost, {
                        //    login: userService.getStoredCredentials()[0],
                        //    password: userService.getStoredCredentials()[1]
                        //}).success(function (data) {
                        //    var token = data.user_token;
                        //    restService.checkResponse.auth(data).then(function () {
                        //        restService.setUserSessionData(data);
                        //        restService.getElements({
                        //            user_token: token
                        //        },'profileHost', function(data) {
                        //            userService.setUserData(token, data);
                        //            connectionsService.getAllNotifications();
                        //            connectionsService.selectLanguage(data.lang);
                        //            $location.path('/preload');
                        //        }, restService.fail);
                        //    });
                        //}).error(function () {
                        //    $location.path("/login");
                        //}) :
                        //$location.path("/login");
                });
            });
        }, false);
    });