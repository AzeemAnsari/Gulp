const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task('message', function(){
  return console.log('Gulp is running...');
});

// Minify JS
gulp.task('minify', function(){
  gulp.src('js/used/*.js')
      .pipe(concat('app.js'))
      .pipe(gulp.dest('compressed/js'));
});

// Scripts
gulp.task('scripts', function(){
  gulp.src('js/used/*.js')
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('compressed/js'));
});

gulp.task('default', ['message', 'minify', 'scripts']);

gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('js/*.js', ['minify']);
});
