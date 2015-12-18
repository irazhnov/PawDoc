angular
    .module(AppConfig.name)
    .controller('SelectPetCtrl', function ($scope, menuService) {
        $scope.openMenu = function (value) {
            menuService.getModel().isOpen = value;
        };
    });