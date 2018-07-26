var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'app',
      routes: {
        '/bower_components': 'bower_components'
      }
    }, port: 80 //change the default port fimm server
  });

  gulp.watch('app/recipe-app.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
