
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer')

gulp.task('less', function () {
    gulp.src('./less/style.less')
        .pipe(less())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['less'], function() {
    gulp.watch('./less/*.less', ['less']);
});
