angular
    .module(AppConfig.name)
    .directive('header', [function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'templates/components/Header.html',
            controller: function ($scope, menuService, uiService) {
                $scope.clicktitle = function () {
                };
                $scope.toggleMenu = function () {
                    menuService.toggleMenu();
                };
                $scope.headerModel = uiService.uiModel;
            }
        }
    }]);