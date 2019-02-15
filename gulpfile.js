var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var cssMin = require('gulp-css');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Point to files input
    gulp.dest - Point to folder to output
    gulp.watch - Watch files and folders for changes
*/

gulp.task('sass', function () {
  return gulp.src('./css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('compress', function (cb) {
  pump([
      gulp.src('js/*.js'),
      uglify(),
      gulp.dest('dist/js')
    ],
    cb
  );
});

gulp.task('cssMinify', function () {
  return gulp.src('css/**/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('dist/css'));
});

gulp.task("css", gulp.series("sass","cssMinify"));

gulp.task('default', gulp.parallel('compress','css'));

gulp.task('watch', () => {
  return gulp.watch(['js/*.js','css/**/*.scss'],gulp.series("default"));
})