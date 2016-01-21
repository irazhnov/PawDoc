angular
    .module(AppConfig.name)
    .controller('SettingsCtrl', function ($scope, $location, uiService, storageService) {
        var model = {
                isNotificationSpoilerOpen: false,
                isPasswordSpoilerOpen: false,
                stayLogged: true,
                pushNotification: true
            }
          , helperModel = {
                propertyName:'',
                inFocus:false,
                textMessage:'',
                changepassword:'',
                newpassword:'',
                reenterpassword:'',
                email:''
            };

        $scope.toggleNotificationSpoiler = function () {
            model.isNotificationSpoilerOpen = !model.isNotificationSpoilerOpen;
            storageService.write('isNotificationSpoilerOpen', model.isNotificationSpoilerOpen);
        };
        $scope.togglePasswordSpoiler = function () {
            model.isPasswordSpoilerOpen = !model.isPasswordSpoilerOpen;
            storageService.write('isPasswordSpoilerOpen', model.isPasswordSpoilerOpen);
        };
        $scope.toggleLogged = function () {
            storageService.write('stayLogged', model.stayLogged);
        };
        $scope.togglePushNotifications = function () {
            storageService.write('pushNotification', model.pushNotification);
        };
        $scope.goNewCase = function () {
            $location.path('/main/petinfo');
        };
        $scope.goViewCase = function () {
            //$location.path('/addPet');
        };
        $scope.setHelperModel = function (propName) {
            helperModel.propertyName = propName;
            helperModel.inFocus = true;
        };


        //TODO move logic to restore data during start app
        setFromStorage = function () {

            if(storageService.readString('isNotificationSpoilerOpen') != null) {
                model.isNotificationSpoilerOpen = storageService.readString('isNotificationSpoilerOpen') == 'true';
            }
            if(storageService.readString('isPasswordSpoilerOpen') != null) {
                model.isPasswordSpoilerOpen = storageService.readString('isPasswordSpoilerOpen') == 'true';
            }
            if(storageService.readString('stayLogged') != null) {
                model.stayLogged = storageService.readString('stayLogged') == 'true';
            }
            if(storageService.readString('pushNotification') != null) {
                model.pushNotification = storageService.readString('pushNotification') == 'true';
            }
        };

        setFromStorage();
        uiService.setHeaderTitle('Settings');

        $scope.helperModel = helperModel;
        $scope.model = model;

    });