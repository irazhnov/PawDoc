"use strict";

var AppConfig = (function (){
    var host='';
    return {
        name: 'PawDoc',
        dependencies: ['routes', 'ngTouch', 'ngAnimate'],
        hostDev: 'http://api.pawdoc.altoros.com/api/'
    };
})();