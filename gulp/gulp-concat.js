"use strict";

module.exports = function(config, gulp, concat, ngAnnotate) {
    var scripts = [
        'node_modules/fastclick/lib/fastclick.js',
        'node_modules/socket.io/socket.io-1.4.4.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/build/angular-ui-router.min.js',
        'node_modules/angular-touch/angular-touch.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-socket-io/socket.js',
        'app/js/configuration/*.js',
        'app/js/**/*.js',
        'app/js/*.js'
        ];

    return gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('www/js/'));
};