var gulp = require('gulp');
var sass = require('gulp-sass');
var browser = require('browser-sync');

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});
 
gulp.task('default', gulp.series('sass', function(){
  browser.init({server: './_site', port: 3500});
}));