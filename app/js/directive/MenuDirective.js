angular
    .module(AppConfig.name)
    .directive('mainMenu',[function(){
       return {
           restrict: 'E',
           transclude: true,
           templateUrl: 'templates/components/Menu.html',
           controller: function ($scope, $location, menuService){
               $scope.model = menuService.getModel();
               $scope.goToPage = function (value) {
                   console.log('goToPage');
                   menuService.toggleMenu();
                   $location.path(value.url);
               };
           }
       }
    }]);