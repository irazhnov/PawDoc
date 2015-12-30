angular
    .module(AppConfig.name)
    .controller('CurrProblemContCtrl', function ($scope, $location, uiService) {
        $scope.goCurrProblem = function () {
            $location.path('/main/petinfo');
        };
        $scope.goMedicalHistory = function () {
            $location.path('/main/medhystory');
        };
        $scope.cbModel = {
            label: '',
            yes: 'Prior treatment',
            no: 'New problem',
            selected:false
        };
        uiService.setHeaderTitle('Current Problem');
    });