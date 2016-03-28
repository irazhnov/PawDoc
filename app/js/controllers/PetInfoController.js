angular
    .module(AppConfig.name)
    .controller('PetInfoCtrl', function ($scope, $location, uiService) {
        $scope.goCurrProblem = function () {
            $location.path('/main/currproblem');
        };
        //$scope.makeSpreyed = function () {
        //    $scope.cbModel.selected = !uiService.currentPet.spreyed;
        //    uiService.currentPet.spreyed = !uiService.currentPet.spreyed;
        //};


        $scope.cbModel = {
            label:'Spreyed or Neuter',
            yes: 'Yes',
            no: 'No',
            selected:false
        };
        $scope.model = uiService.currentPet;
        $scope.cbModel.selected = uiService.currentPet.spreyed;
    });