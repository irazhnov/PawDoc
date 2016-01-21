angular
    .module(AppConfig.name)
    .controller('AppointmentsCtrl', function ($scope, $location, uiService) {
        var self= this;
        $scope.requestAppt = function () {
            $location.path('/main/apptrequest');
        };
        uiService.setHeaderTitle('Appointments');
    });
