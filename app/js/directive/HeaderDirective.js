angular
    .module(AppConfig.name)
    .directive('header', [function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'templates/components/Header.html',
            controller: function ($scope, menuService) {
                $scope.toggleMenu = function () {
                    menuService.toggleMenu();
                }
            }
        }
    }]);