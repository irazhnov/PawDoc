angular
    .module(AppConfig.name)
    .controller('PricingCtrl', function ($scope, $location, uiService) {
        $scope.goConfirmation= function () {
            $location.path('/main/confirmation');
        };
        $scope.goPayment= function () {
            $location.path('/main/payment');
        };
        uiService.setHeaderTitle('Pricing');
    });