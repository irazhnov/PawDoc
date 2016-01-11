angular
    .module(AppConfig.name)
    .controller('LoginCtrl', function ($scope, $location) {
        var self= this;
        $scope.goSignup = function () {
            $location.path('/signup')
        };
        $scope.goAddpet = function () {
            $location.path('/main/addPet')
        };
    // /[;,"?<>{}&^%$@!*.#_']/.test(''));
    //     [A-Za-z0-9]
    });
