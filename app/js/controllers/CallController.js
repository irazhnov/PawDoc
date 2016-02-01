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
            return;
            $location.path('/main/video');
        };
        $scope.makeCall = function () {
            var bypassAppChooser = true;
            onSuccess = function (data) {
                console.log('onSuccess Call');
            };
            onError = function (error) {
              console.log('ERROR makeCall');
            };
            $window.plugins.CallNumber.callNumber(onSuccess, onError, uiService.uiModel.callNumber, bypassAppChooser);
        };
        $scope.uiModel = uiService.uiModel;
        // disconnect socket from server
        signalingService.disconnect();
        uiService.setHeaderTitle('Call');
    });