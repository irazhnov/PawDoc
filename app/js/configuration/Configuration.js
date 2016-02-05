"use strict";

var AppConfig = (function (){
    var host='';
    return {
        name: 'PawDoc',
        dependencies: ['routes', 'ngTouch', 'ngAnimate', 'btford.socket-io'],
        hostDev: 'http://api.pawdoc.altoros.com/api/'
    };
})();