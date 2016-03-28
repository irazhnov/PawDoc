angular
    .module(AppConfig.name)
    .controller('CallCtrl', function ($scope, $location, $window, uiService, signalingService) {
        $scope.goConfirmation= function () {
            $location.path('/main/payment');
        };
        $scope.goPayment= function () {
            $location.path('/main/payment');
        };
        $scope.startVideoCall = function () {
            $location.path('/main/video');
        };
        $scope.makeCall = function () {
            document.location.href = "tel:" + uiService.uiModel.callNumber;
        };
        $scope.uiModel = uiService.uiModel;
        // disconnect socket from server
        signalingService.disconnect();
        uiService.setHeaderTitle('Call');
    });