var
  cfg = require('../config'),
  gulp = require('gulp'),
  browserSync = require('browser-sync');

gulp.task('server', function() {
  browserSync(cfg.server_config);
});
