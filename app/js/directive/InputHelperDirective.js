angular
    .module(AppConfig.name).directive('inputHelper', [
        '$timeout',
        function($timeout) {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl:'templates/components/InputHelper.html',
                scope: {
                    model: '=ngModel'

                },
                controller: function ($scope) {
                    $scope.clickHandle = function () {
                        model[model.propertyName] = '';
                        model.inFocus = false;
                    }
                },
                link: function($scope, element) {
                    //document.addEventListener('native.keyboardshow', function (e) {
                    //    alert("Keyboard opened, height is " + e.keyboardHeight + "px");
                    //    $scope.modelInput.inFocus = false;
                    //});
                    //document.addEventListener('native.keyboardhide', function (e) {
                    //    console.log('native.keyboardhide');
                    //    $scope.modelInput.inFocus = true;
                    //});
                    element[0].addEventListener('blur', function () {
                        //console.log('blur');
                        $scope.modelInput.inFocus = false;
                    });
                    //element[0].addEventListener('focus', function () {
                    //    $scope.modelInput.inFocus = true;
                    //    //console.log('focus');
                    //});
                    //$scope.modelInput = {
                    //    inFocus: false,
                    //    data:''
                    //}
                }
            };
        }
    ]);