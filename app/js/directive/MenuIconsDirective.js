angular
    .module(AppConfig.name)
    .directive('menuIcons',[function(){
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'templates/components/MenuIcons.html',
            controller: function ($scope, $location, menuService){
                //$scope.model = menuService.getModel();
                $scope.goToCall = function () {
                    $location.path('main/call');
                };
                $scope.goToAppt = function () {
                    $location.path('main/appointments');
                };
                $scope.goToAlerts = function () {
                    $location.path('main/notifications');
                };
                $scope.goToMyPets = function () {
                    $location.path('main/selectpet');
                };
            }
        }
    }]);