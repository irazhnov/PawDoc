angular
    .module(AppConfig.name)
    .controller('SignupCtrl', function ($scope, $location, signupService) {
        $scope.goToSelectPage = function () {
          $location.path('/main/selectpet');
        };
        $scope.model = signupService.signupModel;

    });