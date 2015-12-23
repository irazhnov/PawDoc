angular
    .module(AppConfig.name)
    .controller('CurrProblemCtrl', function ($scope, $location, uiService) {
       $scope.goPetInto = function () {
           $location.path('/main/petinfo');
       };
        $scope.goCurrProblemContinued = function () {
            $location.path('/main/currproblemcont');
        };
        uiService.uiModel.headerTitle = 'Current Problem';
        $scope.cbAppearence = {
            label: 'Appearence',
            yes: 'Yes',
            no: 'No',
            selected:false
        };
        $scope.cbVoimining = {
            label: 'Voimining',
            yes: 'Yes',
            no: 'No',
            selected:false
        };
        $scope.cbDiarhea = {
            label: 'Diarhea',
            yes: 'Yes',
            no: 'No',
            selected:false
        };
        $scope.cbFever = {
            label: 'Fever',
            yes: 'Yes',
            no: 'No',
            selected:false
        };
        $scope.cbLethargic = {
            label: 'Lethargic',
            yes: 'Yes',
            no: 'No',
            selected:false
        };
        $scope.comboModel = [
            {title:'Less then 1 week'},
            {title:'1 to 4 weeks'},
            {title:'1 to 3 months'},
            {title:'3 to 12 months'},
            {title:'More than 1 year'},
            {title:'More than 5 years'},
            {title:'Since childhood'},
            {title:'Since birth'}
        ]
    });
