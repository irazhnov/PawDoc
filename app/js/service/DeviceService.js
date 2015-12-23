angular
    .module(AppConfig.name)
    .service('deviceService',['$q', function ($q){
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
        this.convertImgToBase64 = function(url, callback, outputFormat, quality) {
            var canvas = document.createElement('CANVAS'),
                ctx = canvas.getContext('2d'),
                img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function() {
                var dataURL;
                canvas.height = img.height;
                canvas.width = img.width;
                try {
                    ctx.drawImage(img, 0, 0);
                    dataURL = canvas.toDataURL(outputFormat, quality);
                    callback(null, dataURL);
                } catch (e) {
                    callback(e, null);
                }
                canvas = img = null;
            };
            img.onerror = function() {
                callback(new Error('Could not load image'), null);
            };
            img.src = url;
        };
    }]);