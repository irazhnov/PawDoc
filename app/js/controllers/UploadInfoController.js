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
        $scope.recordVideo = function (){
            successCapture = function (uri) {
                console.log('uri[0].fullPath: ' + uri[0].fullPath);
                uiService.uploadedDataModel.uploadedVideoUrls.push({url:uri[0].fullPath});
            };
            errorCapture = function () {
                console.log("capture Video error: "+JSON.stringify(e));
            };
            navigator.device.capture.captureVideo(successCapture, errorCapture, {limit: 1});
        };
        $scope.playVideo = function (item) {
            if(device.platform.toLowerCase() != 'ios')
           VideoPlayer.play(item.url);
        };
        $scope.getVideoFile = function () {
            deviceService.getVideoFile();
        };
        $scope.playAudio = function (item) {
           var media = new Media(item.url);
            media.play();
        };
        $scope.getAudioFile = function () {
            deviceService.getAudioFile();
        };
        $scope.startRecordAudio = function () {
            uiService.uploadedDataModel.isRecordingAudio = true;
            deviceService.startRecordAudio();
        };
        $scope.stopRecordAudio = function () {
            uiService.uploadedDataModel.isRecordingAudio = false;
            deviceService.stopRecordAudio();
        };
        $scope.uploadedDataModel = uiService.uploadedDataModel;
        uiService.setHeaderTitle('Upload Information');
    });