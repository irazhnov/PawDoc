angular
    .module(AppConfig.name)
    .controller('UploadInfoCtrl', function ($scope, $location, uiService, deviceService) {
        $scope.goMedicalHystory = function () {
            $location.path('/main/medhystory');
        };
        $scope.goConfirmation = function () {
            $location.path('/confirmation');
        };
        $scope.takePhoto = function (fromCamera) {
            var promise = deviceService.takePhoto({size:[100,100]}, fromCamera);

            promise.then(function (imageURI){
            uiService.uploadedDataModel.push({url: imageURI});
                //uiService.uploadedDataModel.push({url: 'data:image/jpeg;base64,' +  imageURI});
            },function (err){
                uiService.showNotification('Image not loaded try again', 'long');
            })

        };
        $scope.uploadedDataModel = uiService.uploadedDataModel;
        uiService.uiModel.headerTitle = 'Upload Information';
    });