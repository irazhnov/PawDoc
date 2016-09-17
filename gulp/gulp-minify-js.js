"use strict";

module.exports = function (gulp, uglify, rename) {
     return  gulp.src('www/js/scripts.js')
         .pipe(uglify())
         //.pipe(rename({suffix: '.min'}))
         .pipe(gulp.dest('www/js/'))
};
