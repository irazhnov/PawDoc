angular
    .module(AppConfig.name)
    .controller('WelcomeCtrl', function ($scope, $location) {
        $scope.goAddpet = function () {
            $location.path('/main/addPet');
        };
        $scope.goViewCase = function () {
            //$location.path('/addPet');
        };
    });