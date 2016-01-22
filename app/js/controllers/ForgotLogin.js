angular
    .module(AppConfig.name)
    .controller('ForgotLoginCtrl', function ($scope, $location, restService, userModel, storageService) {
        var self= this;
        $scope.goSignup = function () {
            $location.path('/signup');
        };
        $scope.login = function () {
            var data = "grant_type=password&username=" + userModel.username + "&password=" + userModel.password;
            restService.postRequest(AppConfig.hostDev + 'account/oauth/token', data)
                .success(function (data) {
                    console.log('');

                })
                .error(function (data){});
        };
        $scope.model = userModel;
        // /[;,"?<>{}&^%$@!*.#_']/.test(''));
        //     [A-Za-z0-9]
    })