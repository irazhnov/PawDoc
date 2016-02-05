angular
    .module(AppConfig.name)
    .directive('doubleCheckbox',[function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'templates/components/DoubleCheckbox.html',
            scope: {
              model: '=ngModel'
            },
            controller: function($scope) {
                var mockupModel = {
                  label:'text',
                  yes: 'Yes',
                  no: 'No',
                  selected:false,
                  linkedProp : false//
                };
                $scope.toggleCheckBox = function () {
                    //$scope.model.linkedProp = !$scope.model.linkedProp;
                    $scope.model.selected = !$scope.model.selected;
                };
            }
        };
    }]);
