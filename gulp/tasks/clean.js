var
  cfg = require('../config'),
  gulp = require('gulp'),
  rimraf = require('rimraf');

gulp.task('clean', function(cb) {
  rimraf(cfg.path.clean, cb);
});
