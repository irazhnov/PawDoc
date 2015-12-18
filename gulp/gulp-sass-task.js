"use strict";

module.exports = function (config, gulp, sass) {
    var sassFiles = [
        config.SASS_PATH + '\\index.sass'
    ];

    return sass(sassFiles, { style: 'expanded' })
        .pipe(gulp.dest(config.STYLES_PATH + 'css\\'));
};

