var gulp = require('gulp')
var less = require('gulp-less')
var postcss = require('gulp-postcss');
// var cssmin = require('gulp-minify-css');
var autoprefixer = require('autoprefixer');
gulp.task('default', function() {
    gulp.src(['less/main.less'])
        .pipe(less())
        // .pipe(cssmin())
        .pipe(postcss([autoprefixer({
            browsers: ['last 2 versions']
        })]))
        .pipe(gulp.dest('css'));
});
gulp.task('lessWatch', function() {
    gulp.watch('less/*.less', ['default'])
})
