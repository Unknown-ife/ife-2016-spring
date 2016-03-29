
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer')

gulp.task('less', function () {
    gulp.src('./less/style.less')
        .pipe(less())
        .pipe(autoprefixer({browsers: ['> 1%', 'last 3 versions', 'iOS >= 6', 'android 4']}))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['less'], function() {
    gulp.watch('./less/_partial/*.less', ['less']);
    gulp.watch('./less/*.less', ['less']);
});
