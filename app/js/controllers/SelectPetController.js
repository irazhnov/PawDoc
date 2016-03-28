angular
    .module(AppConfig.name)
    .controller('SelectPetCtrl', function ($scope, $location, uiService) {
        $scope.goSelectPet = function () {
            $location.path('/main/selectpet');
        };
        $scope.choosePet = function (value) {
            uiService.currentPet = value;
            $location.path('main/welcome');
        };
        $scope.goAddPet = function () {
            $location.path('/main/selectpet');
        };
        $scope.pets = uiService.petsModel.pets;
        uiService.setHeaderTitle('Select Pet');
    });