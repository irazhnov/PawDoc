"use strict";

angular
    .module(AppConfig.name, AppConfig.dependencies)
    .run(function() {
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
    });