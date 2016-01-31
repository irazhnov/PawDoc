angular
    .module(AppConfig.name)
    .service('deviceService',['$q', '$window', '$location', 'uiService', function ($q, $window, $location, uiService){
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
            if(device.platform.toLowerCase() === 'android') {
                var promise = self.getFile(['.mp4', '.avi', '.mkv', '.h264']);
                promise.then(function (videoURI) {
                    console.log('video url ' + videoURI);
                    uiService.uploadedDataModel.uploadedVideoUrls.push({url: videoURI});
                }, function (err) {
                    uiService.showNotification('Video not loaded try again', 'long');
                })
            }
            if(device.platform.toLowerCase() === 'ios'){
                var success= function (data) {
                    alert(JSON.stringify(data));
                    }
                    , error = function (data) {
                        console.log();
                    };
                    navigator.camera.getPicture(success, error, { quality: 50,
                        destinationType: navigator.camera.DestinationType.FILE_URI,
                        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
                        mediaType: navigator.camera.MediaType.VIDEO});
            }
        };
        this.getAudioFile = function () {
            var promise = self.getFile(['.mp3', '.wav', 'm4a', 'wma', '.amr']);
            promise.then(function (audioURI){
                console.log('audio url ' + audioURI);
                uiService.uploadedDataModel.uploadedAudioUrls.push({url:audioURI});
            },function (err){
                uiService.showNotification('Audio not loaded try again', 'long');
            })
        };
        this.startRecordAudio = function () {
            console.log('startRecordAudio');
            var src = device.platform.toLowerCase() == 'ios' ? 'note.wav' : 'note.amr'
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
            console.log('audio.src: ' + audio.src);
            audio.stopRecord();
        };
        this.onBackKeyDown = function () {
            console.log('onBackKeyDown' + $location.path());
        };

        (function (){
            document.addEventListener("volumeupbutton", self.onBackKeyDown, false);
        })();
    }]);