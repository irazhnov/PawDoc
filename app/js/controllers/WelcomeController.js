angular
    .module(AppConfig.name)
    .controller('WelcomeCtrl', function ($scope, $location, uiService) {
        $scope.goNewCase = function () {
            $location.path('/main/petinfo');
        };
        $scope.goViewCase = function () {
            //$location.path('/addPet');
        };
        $scope.pet = uiService.currentPet;
        uiService.setHeaderTitle('');
    });