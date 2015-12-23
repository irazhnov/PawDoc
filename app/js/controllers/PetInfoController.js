angular
    .module(AppConfig.name)
    .controller('PetInfoCtrl', function ($scope, $location) {
        $scope.goCurrProblem = function () {
            $location.path('/main/currproblem');
        };
        $scope.cbModel = {
            label:'Spreyed or Neuter',
            yes: 'Yes',
            no: 'No',
            selected:false
        };
    });