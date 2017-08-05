var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    uglifycss = require('gulp-uglifycss');

gulp.task('js', function () {
    return gulp.src('js/src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat("main.min.js"))
        .pipe(gulp.dest('js/dist'));
});
gulp.task('css', function () {
    return gulp.src('css/src/*.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(concatCss("main.min.css"))
        .pipe(gulp.dest('css/dist'));
});
gulp.task('default',['js','css']);