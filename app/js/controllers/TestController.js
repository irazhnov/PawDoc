angular
    .module(AppConfig.name)
    .controller('TestCtrl', function ($scope){
        var timeStampFormatsList=[];
        var timeStampFormats =[
            {formatLabel: 'DD-MM-YYY', a:1},
            {formatLabel: 'YYYY-MM-DD', a:2},
            {formatLabel: 'MM-DD-YYYY-SS', a:3}
        ];
        $scope.selected = {};

        var setFormatsList = function() {
            $scope.timeStampFormats = timeStampFormats;
            var i=0;
            _.forEach(timeStampFormats, function(){
                //$scope.selected[i] = '';
                i++;
                timeStampFormatsList.push(_.clone(timeStampFormats));
                $scope.timeStampFormatsList = timeStampFormatsList;
            });
        };

        setFormatsList();
        $scope.$watchCollection("selected", function (selected) {
            if(!Object.keys(selected).length>0){
                return;
            }
            console.log("selected");
        var keys = Object.keys(selected);
            _.forEach($scope.timeStampFormatsList, function(formats){
                formats.splice(0,1);
            });
        });
    });