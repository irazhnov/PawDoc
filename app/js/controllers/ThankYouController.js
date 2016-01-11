angular
    .module(AppConfig.name)
    .controller('ThankYouCtrl', function ($scope, $location, uiService) {
        $scope.goToWelcome = function () {
            $location.path('/main/welcome');
        };
        $scope.goToAppt = function () {
            $location.path('/main/appt');
        };
        //$scope.pet = uiService.currentPet;
        uiService.setHeaderTitle('Thank You!');
    });