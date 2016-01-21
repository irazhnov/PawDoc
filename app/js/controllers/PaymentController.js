angular
    .module(AppConfig.name)
    .controller('PaymentCtrl', function ($scope, $location, uiService) {
        $scope.goCases= function () {
            $location.path('/main/pricing');
        };
        $scope.goNext= function () {
            $location.path('/main/thankyou');
        };
        uiService.setHeaderTitle('Payment');
    });