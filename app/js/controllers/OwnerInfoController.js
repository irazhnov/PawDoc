angular
    .module(AppConfig.name)
    .controller('OwnerInfoCtrl', function ($scope, $location, uiService) {
        $scope.goToWelcomePage = function () {
            $location.path('/main/welcome');
        };

        uiService.uiModel.headerTitle = 'Owner Information'
    });