angular
    .module(AppConfig.name)
    .controller('MainCtrl', function ($scope, menuService) {

        $scope.openMenu = function (value) {
            menuService.getModel().isOpen = value;


        };
    });