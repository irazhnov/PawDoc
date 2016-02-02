"use strict";

module.exports = function (gulp, rename) {
    var cssmin = require('gulp-cssmin');


    return  gulp.src('www/css/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('www/css/'));
};
