angular
    .module(AppConfig.name)
    .controller('AddPetCtrl', function ($scope, $location, uiService, deviceService) {
        $scope.takePhoto = function (fromCamera) {
            var promise = deviceService.takePhoto({size:[800,600]}, fromCamera, function(url){
                $scope.model.url = url;
            });

            promise.then(function (imageURI){
                uiService.uploadedDataModel.uploadedPictureUrls.push({url: imageURI});
            },function (err){
                uiService.showNotification('Image not loaded try again', 'long');
            });
        };
        $scope.goSelectPet = function () {
            $location.path('/main/selectpet');
        };
        $scope.addPet = function() {
            if ($scope.model.moniker !='')
            uiService.petsModel.pets.push($scope.model);
        }
            uiService.setHeaderTitle('Add Pet');
        $scope.model = {
            url:"../www/images/mockup/kona.jpg", moniker: ''
        };
    });