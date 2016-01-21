var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require('gulp-notify'),
    runSequence = require('gulp-run-sequence'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    config = require('./gulp/gulp-config'),
    gulpSassTask = require('./gulp/gulp-sass-task'),
    gulpBrowserSync = require('./gulp/gulp-browser-sync');
    gulpConcatCss = require('./gulp/gulp-concat-css');
    gulpConcat = require('./gulp/gulp-concat');
    gulpMinifyCss = require('./gulp/gulp-minify-css');

gulp.task('sass', function() {
    return gulpSassTask(config, gulp, sass);
});

gulp.task('bs', function() {
    gulpBrowserSync(config, gulp, browserSync);
});

gulp.task('cs', function (){
    return gulpConcatCss(config, gulp, concat);
});
gulp.task('cj', function (){
    return gulpConcat(config, gulp, concat);
});
gulp.task('mincss', function (){
    gulpMinifyCss(config, gulp, minifycss);
});

gulp.task('html', function() {
    return gulp.src('app/**/*.html')
        .pipe(gulp.dest('www'));
});
gulp.task('img', function() {
    return gulp.src('app/images/*.*')
        .pipe(gulp.dest('www/images'));
});

gulp.task('build', function(callback) {
    runSequence('sass', ['cj', 'html' ,'cs', 'img'], callback);

});

