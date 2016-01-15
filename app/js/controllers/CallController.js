angular
    .module(AppConfig.name)
    .controller('CallCtrl', function ($scope, $state, $window, uiService) {
        $scope.goConfirmation= function () {
            $location.path('/main/payment');
        };
        $scope.goPayment= function () {
            $location.path('/main/payment');
        };
        $scope.startVideoCall = function () {
            $state.go('main.video');
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
        uiService.setHeaderTitle('Call');
    });