angular
    .module(AppConfig.name)
    .controller('PaymentCtrl', function ($scope, $location, uiService) {
        $scope.goPricing= function () {
            $location.path('/main/pricing');
        };
        $scope.goCall= function () {
            $location.path('/main/call');
        };
        uiService.setHeaderTitle('Payment');
    });