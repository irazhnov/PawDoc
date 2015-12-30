angular
    .module(AppConfig.name)
    .service('deviceService',['$q', '$window', function ($q, $window){
        var self = this;
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
        this.getFile = function() {
            var q = $q.defer();
            console.log('device.platform: ' + device.platform);
            if(device.platform.toLowerCase() !== 'ios') {
                console.log('open');
                $window.plugins.mfilechooser.open(['.mp4', '.avi','.mkv', '.h264'], function (uri) {
                    //callback(uri);
                    q.resolve(uri);
                }, function (error) {
                    q.reject(error);
                });
            }
            return q.promise;
            }
    }]);