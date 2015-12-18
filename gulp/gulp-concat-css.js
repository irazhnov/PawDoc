"use strict";

module.exports = function(config, gulp, concat) {
    return gulp.src(config.STYLES_PATH + 'css\\*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest(config.WWW_PATH + '\\css\\'));
};