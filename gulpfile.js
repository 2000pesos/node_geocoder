var gulp = require('gulp');
var serve = require('gulp-serve');
 
gulp.task('serve', serve('app'));
gulp.task('serve-build', serve(['public', 'build', 'app']));
gulp.task('serve-prod', serve({
  root: ['public', 'build', 'app'],
  port: 80,
  middleware: function(req, res) {
    // custom optional middleware 
  }
}));