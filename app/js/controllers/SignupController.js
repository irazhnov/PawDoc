angular
    .module(AppConfig.name)
    .controller('SignupCtrl', function ($scope, signupService) {
        $scope.model = signupService.signupModel;
    });