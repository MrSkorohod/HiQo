'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./stylesheets/main.scss')
        .pipe(concat('main.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./stylesheets/**/*.scss', gulp.parallel('sass'));
});

gulp.task('server', function(){
    browserSync.init({
        server: {
            dist: './'
        }
    });
    gulp.watch('./stylesheets/**/*.scss', gulp.parallel('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
});
