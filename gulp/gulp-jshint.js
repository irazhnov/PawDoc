'use strict';

module.exports = function (gulp) {
    var jshint = require('gulp-jshint');

    return gulp.src('app/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
};