angular
    .module(AppConfig.name)
    .controller('AddPetCtrl', function ($scope, $location, uiService, deviceService) {
        $scope.takePhoto = function (fromCamera) {
            var promise = deviceService.takePhoto({size:[800,600]}, fromCamera);

            promise.then(function (imageURI){
                uiService.uploadedDataModel.uploadedPictureUrls.push({url: imageURI});
            },function (err){
                uiService.showNotification('Image not loaded try again', 'long');
            });
        };
        $scope.goSelectPet = function () {
            $location.path('/main/selectpet');
        };
        uiService.setHeaderTitle('Add Pet');
    });