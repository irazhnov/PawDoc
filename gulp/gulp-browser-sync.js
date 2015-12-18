"use strict";

module.exports = function (config, gulp, browserSync) {
    browserSync.init({
        server: {
            baseDir: config.WWW_PATH,
            index: "index.html"
        },
        middleware: [
            function (req, res, next) {
                next();
            }
        ]
    });

    gulp.watch(config.SASS_PATH + '\\*.sass', ['sass']);
    gulp.watch(config.WWW_PATH + '\\css\\*.css', browserSync.reload);
};

