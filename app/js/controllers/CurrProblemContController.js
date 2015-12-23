angular
    .module(AppConfig.name)
    .controller('CurrProblemContCtrl', function ($scope, $location) {
        $scope.goPetInto = function () {
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
    });