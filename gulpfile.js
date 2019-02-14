var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Point to files input
    gulp.dest - Point to folder to output
    gulp.watch - Watch files and folders for changes
*/



gulp.task('compress', function (cb) {
  pump([
      gulp.src('js/*.js'),
      uglify(),
      gulp.dest('dist/js')
    ],
    cb
  );
});