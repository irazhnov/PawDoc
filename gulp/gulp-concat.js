"use strict";

module.exports = function(config, gulp, concat) {
    var scripts = [
        'node_modules/fastclick/lib/fastclick.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/build/angular-ui-router.min.js',
        'node_modules/angular-touch/angular-touch.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'app/js/configuration/*.js',
        'app/js/**/*.js',
        'app/js/*.js'
        ];

    return gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(config.WWW_PATH + 'js\\'));
};