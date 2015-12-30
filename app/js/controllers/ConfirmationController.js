angular
    .module(AppConfig.name)
    .controller('ConfirmationCtrl', function ($scope, $location, uiService, menuService) {
        $scope.goUploadInfo = function () {
            $location.path('/main/uploadinfo');
        };
        $scope.goPricing = function () {
            $location.path('/main/pricing');
        };
        $scope.uploadedDataModel = uiService.uploadedDataModel;
        uiService.setHeaderTitle('Confirmation');
    });