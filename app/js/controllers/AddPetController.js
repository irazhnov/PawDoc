angular
    .module(AppConfig.name)
    .controller('AddPetCtrl', function ($scope, $location) {
        $scope.goSelectPet = function () {
            $location.path('/selectpet');
        };
    });