angular
    .module(AppConfig.name)
    .controller('LoginCtrl', function ($scope, $location, restService, userModel) {
        var self= this;
        $scope.goSignup = function () {
            $location.path('/signup');
        };
        $scope.login = function () {
            $location.path('main/addpet');
            return;
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
    });
