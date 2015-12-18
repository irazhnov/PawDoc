angular
    .module(AppConfig.name).directive('keepHeight', [
        '$timeout',
        function($timeout) {
            return {
                restrict: 'A',
                link: function($scope, element) {
                    angular.element(document).ready(function () {
                        element[0].style.minHeight =  window.innerHeight + "px";
                    });
                }
            };
        }
    ]);