var
  gulp = require('gulp'),
  cfg = require('../config'), // Relative to this file
  plumber = require('gulp-plumber'),
  rigger = require('gulp-rigger');

gulp.task('html:build', function() {

  return gulp
    .src(cfg.path.html.entry)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(gulp.dest(cfg.path.jade.dest));
});
