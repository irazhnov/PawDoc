angular
    .module(AppConfig.name)
    .controller('SettingsCtrl', function ($scope, $location, uiService) {
        var model = {
          isNotificationSpoilerOpen: false,
          isPasswordSpoilerOpen: false
        };
        $scope.toggleNotificationSpoiler = function () {
            model.isNotificationSpoilerOpen = !model.isNotificationSpoilerOpen;
        };
        $scope.togglePasswordSpoiler = function () {
            model.isPasswordSpoilerOpen = !model.isPasswordSpoilerOpen;
        };
        $scope.goNewCase = function () {
            $location.path('/main/petinfo');
        };
        $scope.goViewCase = function () {
            //$location.path('/addPet');
        };
        uiService.setHeaderTitle('Settings');
        $scope.model = model;
    });