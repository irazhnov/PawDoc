angular
    .module(AppConfig.name)
    .service('deviceService',['$q', '$window', 'uiService', function ($q, $window, uiService){
        var self = this
            , audio;
            this.device = {
            screen : {
                width: window.innerWidth,
                height: window.innerHeight
            }
        };
        this.setDeviceInfo = function(device) {
            console.log('setDeviceInfo');
            return $q.when(self.device.info = device);
        };

        this.takePhoto = function(params, isCamera) {
            var q = $q.defer(),
                options = {
                    quality : 70,
                    destinationType : params.dataUrl ? Camera.DestinationType.DATA_URL : Camera.DestinationType.FILE_URI,
                    sourceType : isCamera ? Camera.PictureSourceType.CAMERA : Camera.PictureSourceType.SAVEDPHOTOALBUM,
                    allowEdit : device.platform.toLowerCase() == 'ios',
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: params.size[0],
                    targetHeight: params.size[1],
                    saveToPhotoAlbum: false
                };
            navigator.camera.getPicture(function(result) {
                q.resolve(result);
            }, function(err) {
                q.reject(err);
            }, options);
            return q.promise;
        };
        this.getFile = function(extensions) {
            var q = $q.defer();
            console.log('device.platform: ' + device.platform);
            if(device.platform.toLowerCase() !== 'ios') {
                console.log('open');
                $window.plugins.mfilechooser.open(extensions, function (uri) {
                    //callback(uri);
                    q.resolve(uri);
                }, function (error) {
                    q.reject(error);
                });
            }
            return q.promise;
        };
        this.getVideoFile = function () {
            var promise = self.getFile(['.mp4', '.avi','.mkv', '.h264']);
            promise.then(function (videoURI){
                console.log('video url ' + videoURI);
                uiService.uploadedDataModel.uploadedVideoUrl = videoURI;
            },function (err){
                uiService.showNotification('Video not loaded try again', 'long');
            })
        };
        this.getAudioFile = function () {
            var promise = self.getFile(['.mp3', '.wav', 'm4a', 'wma', '.amr']);
            promise.then(function (audioURI){
                console.log('audio url ' + audioURI);
                uiService.uploadedDataModel.uploadedAudioUrl = audioURI;
            },function (err){
                uiService.showNotification('Audio not loaded try again', 'long');
            })
        };
        this.startRecordAudio = function () {
            console.log('startRecordAudio');
            var src = 'note.amr'
                , success = function (){
                    console.log("recordAudio():Audio Success");
            }
                , error = function (err) {
                    console.log('Audio not recorded try again' + err.code);
                    uiService.showNotification('Audio not recorded try again' + err.code, 'long');
                };
                audio = new Media(src, success, error);
            audio.startRecord();
        };
        this.stopRecordAudio = function () {
            audio.stopRecord();
        }
    }]);