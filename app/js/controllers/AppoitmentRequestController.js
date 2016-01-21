angular
    .module(AppConfig.name)
    .controller('ApptrequestCtrl', function ($scope, $location, uiService) {
        var self= this;
        $scope.petsModel = uiService.petsModel.pets;
        uiService.setHeaderTitle('Request Appointment');
    });