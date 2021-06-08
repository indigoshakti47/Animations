const gulp = require('gulp');
const sass = require('gulp-sass');

function css() {
    return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
}
function watchFiles() {
    gulp.watch('**/*.scss', css);
}

gulp.task('css', css);
gulp.task("watch", gulp.parallel(watchFiles));