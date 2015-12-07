var
  gulp = require('gulp'),
  cfg = require('../config'), // Relative to this file
  plumber = require('gulp-plumber');

gulp.task('fonts:build', function() {

  return gulp
    .src(cfg.path.fonts.all)
    .pipe(plumber())
    .pipe(gulp.dest(cfg.path.fonts.dest));
});
