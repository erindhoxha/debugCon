const gulp = require('gulp');

/* 
    -- TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Point to files input
    gulp.dest - Point to folder to output
    gulp.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task('message', function() {
    return console.log('Hello world!');
});