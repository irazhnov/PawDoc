angular
    .module(AppConfig.name)
    .controller('NotificationsCtrl', function ($scope, $window, uiService) {
        $scope.swipe= function () {
            console.log('swipe');
        };

        $scope.model = [{message: 'Heart worm prevention: Due'}, {message: 'Heart worm prevention: Due'}];
        uiService.setHeaderTitle('Notifications');
    });