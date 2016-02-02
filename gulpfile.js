var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename');
    uglify = require('gulp-uglify'),
    runSequence = require('gulp-run-sequence'),
    concat = require('gulp-concat'),
    config = require('./gulp/gulp-config'),
    ngAnnotate = require('gulp-ng-annotate'),
    gulpSassTask = require('./gulp/gulp-sass-task'),
    gulpBrowserSync = require('./gulp/gulp-browser-sync'),
    gulpConcatCss = require('./gulp/gulp-concat-css'),
    gulpConcat = require('./gulp/gulp-concat'),
    gulpMinifyJs = require('./gulp/gulp-minify-js'),
    gulpMinifyCss = require('./gulp/gulp-minify-css'),
    gulpMinifyHtml = require('./gulp/gulp-minify-html');

gulp.task('sass', function() {
    return gulpSassTask(config, gulp, sass);
});

gulp.task('bs', function() {
    gulpBrowserSync(gulp, runSequence);
});

gulp.task('cs', function (){
    return gulpConcatCss(config, gulp, concat);
});
gulp.task('cj', function (){
    return gulpConcat(config, gulp, concat, ngAnnotate);
});
gulp.task('minjs', function (){
    gulpMinifyJs(gulp, uglify, rename);
});

gulp.task('mincss', function (){
    gulpMinifyCss(gulp, rename);
});

gulp.task('minhtml', function (){
    gulpMinifyHtml(gulp);
});

//gulp.task('html', function() {
//    return gulp.src('app/**/*.html')
//        .pipe(gulp.dest('www'));
//});

gulp.task('img', function() {
    return gulp.src('app/images/*.*')
        .pipe(gulp.dest('www/images'));
});

gulp.task('build', function(callback) {
    runSequence('sass', ['cj', 'cs', 'img', 'mincss', 'minjs', 'minhtml'], callback);

});

