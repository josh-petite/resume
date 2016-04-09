(function() {
    'use strict';

    var gulp = require('gulp');
    var sass = require('gulp-sass');
    var concat = require('gulp-concat');
    var autoprefixer = require('gulp-autoprefixer');

    gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.css'))
        .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
        .pipe(gulp.dest('./dest'));
    });

    gulp.task('sass:watch', function () {
        gulp.watch('./src/**/*.scss', ['sass']);
    });    
})();