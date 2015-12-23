angular
    .module(AppConfig.name)
    .controller('SignupCtrl', function ($scope, signupService) {
        $scope.goToOwnerPage = function () {
          $location.path('/owner');
        };
        $scope.model = signupService.signupModel;

    });