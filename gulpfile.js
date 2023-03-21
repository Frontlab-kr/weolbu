'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss'),
    rename = require('gulp-rename'),
    flatten = require('gulp-flatten');

gulp.task('build-css', function () {
    return gulp
        .src(['./components/common/Common.css', './components/**/*.css'])
        .pipe(concat('primevue.css'))
        .pipe(gulp.dest('dist/resources'))
        .pipe(uglifycss({ uglyComments: true }))
        .pipe(rename('primevue.min.css'))
        .pipe(gulp.dest('dist/resources'));
});

gulp.task('build-themes', function () {
    return gulp.src(['public/themes/**/*']).pipe(gulp.dest('dist/resources/themes'));
});

gulp.task('images', function () {
    return gulp.src(['./components/**/images/*.png', './components/**/images/*.gif']).pipe(flatten()).pipe(gulp.dest('dist/resources/images'));
});

//Building project with run sequence
gulp.task('build-styles', gulp.series('build-css', 'images', 'build-themes'));