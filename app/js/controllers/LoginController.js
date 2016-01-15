angular
    .module(AppConfig.name)
    .controller('LoginCtrl', function ($scope, $location, $state) {
        var self= this;
        $scope.goSignup = function () {
            //$state.go('main.call');
            $location.path('/signup')
        };
        $scope.goAddpet = function () {
            $location.path('/main/addpet')
        };
    // /[;,"?<>{}&^%$@!*.#_']/.test(''));
    //     [A-Za-z0-9]
    });
