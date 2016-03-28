angular
    .module(AppConfig.name)
    .controller('SignupCtrl', function ($scope, $location, signupService, signupModel) {
        var self = this;
        $scope.signUp = function () {
            //signupService.signUp()
            $location.path("/login");
        };
        self.isValid = function (field) {
            signupModel.isValid(field);
        };
        $scope.isTermsAcepted = signupService.isTermsAcepted;
        $scope.model = signupService.signupModel;
        $scope.modelError =  signupModel.error;

    });