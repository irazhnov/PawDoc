angular
    .module(AppConfig.name)
    .directive('mainMenu',[function(){
       return {
           restrict: 'E',
           transclude: true,
           templateUrl: 'templates/components/Menu.html',
           controller: function ($scope, menuService){
               $scope.model = menuService.getModel();
           }
       }
    }]);