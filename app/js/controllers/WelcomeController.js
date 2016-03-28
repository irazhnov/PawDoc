angular
    .module(AppConfig.name)
    .controller('WelcomeCtrl', function ($scope, $location, uiService) {
        $scope.goNewCase = function () {
            //uiService.currentPet = {url:"", moniker: '',
            //    name: '', species:'', breed: '', gender:'', spreyed: false};
            $location.path('/main/petinfo');
        };
        $scope.goViewCase = function () {
            $location.path('/main/petinfo');
        };
        $scope.pet = uiService.currentPet;
        uiService.setHeaderTitle('');
    });