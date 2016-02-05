"use strict";

module.exports = function (gulp, runSequence) {
    var sass = require('gulp-sass'),
        browserSync = require('browser-sync').create();
        //gulp.task('browser-sync', function () {
        //    browserSync.init({
        //        server: {
        //            baseDir: "./app"
        //        }
        //    });
        //});

        // Static Server + watching scss/html files
        gulp.task('serve', ['sass'], function () {

            browserSync.init({
                server: "./app/styles/"
            });

            gulp.watch("app/styles/sass/*.sass", ['sass']);
            gulp.watch("app/templates/*.html").on('change', browserSync.reload);
        });

        // Compile sass into CSS & auto-inject into browsers
        gulp.task('sass', function () {
            return gulp.src("app/styles/sass/*.sass")
                .pipe(sass())
                .pipe(gulp.dest("app/styles/css"))
                .pipe(browserSync.stream());
        });

        //browserSync.init({
        //    server: {
        //        baseDir: "www/",
        //        index: "index.html"
        //    },
        //    middleware: [
        //        function (req, res, next) {
        //            next();
        //        }
        //    ]
        //});

        //gulp.watch('app/styles/*.sass', ['sass']);
        //gulp.watch('www/css/*.css', browserSync.reload);
        //gulp.watch("app/templates/*.html").on('change', browserSync.reload);
          gulp.task('default', ['serve']);
     return runSequence('default', ['serve']);
};

