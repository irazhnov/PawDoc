angular
    .module(AppConfig.name)
    .directive('menuIcons',[function(){
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'templates/components/MenuIcons.html',
            controller: function ($scope, $location, menuService){
                //$scope.model = menuService.getModel();
                //$scope.goToPage = function (value) {
                //    menuService.toggleMenu();
                //    $location.path(value.url);
                //};
            }
        }
    }]);