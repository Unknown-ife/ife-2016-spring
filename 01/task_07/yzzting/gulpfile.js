var gulp = require('gulp')
var less = require('gulp-less')
// var cssmin = require('gulp-minify-css');
gulp.task('default',function () {
    gulp.src(['less/main.less'])
        .pipe(less())
        // .pipe(cssmin())
        .pipe(gulp.dest('css'));
});
gulp.task('lessWatch',function () {
    gulp.watch('less/*.less',['default'])
})
