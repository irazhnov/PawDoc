angular
    .module(AppConfig.name)
    .controller('UploadInfoCtrl', function ($scope, $location, uiService, deviceService) {
        $scope.goMedicalHystory = function () {
            $location.path('/main/medhystory');
        };
        $scope.goConfirmation = function () {
            $location.path('/main/confirmation');
        };
        $scope.takePhoto = function (fromCamera) {
            var promise = deviceService.takePhoto({size:[800,600]}, fromCamera);

            promise.then(function (imageURI){
                uiService.uploadedDataModel.uploadedPictureUrls.push({url: imageURI});
                //uiService.uploadedDataModel.push({url: 'data:image/jpeg;base64,' +  imageURI});
            },function (err){
                uiService.showNotification('Image not loaded try again', 'long');
            })
        };
        $scope.makeMovie = function (){
            successCapture = function (uri) {
                console.log('uri[0].fullPath: ' + uri[0].fullPath);
                uiService.uploadedDataModel.uploadedVideoUrl = uri[0].fullPath;
            };
            errorCapture = function () {
                console.log("capture Video error: "+JSON.stringify(e));
            };
            navigator.device.capture.captureVideo(successCapture, errorCapture, {limit: 1});
        };
        $scope.getVideoFile = function () {
            var promise = deviceService.getFile();
            promise.then(function (videoURI){
                console.log('video url ' + videoURI);
                uiService.uploadedDataModel.uploadedVideoUrl = videoURI;
            },function (err){
                uiService.showNotification('Video not loaded try again', 'long');
            })
        };

        $scope.uploadedDataModel = uiService.uploadedDataModel;
        uiService.setHeaderTitle('Upload Information');
    });