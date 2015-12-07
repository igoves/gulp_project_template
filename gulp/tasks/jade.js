var
  gulp = require('gulp'),
  browserSync = require('browser-sync'),
  jade = require('gulp-jade'),
  reload = browserSync.reload,
  cfg = require('../config'), // Relative to this file
  plumber = require('gulp-plumber');

gulp.task('jade:build', function() {

  return gulp
    .src(cfg.path.jade.entry)
    .pipe(plumber())
    .pipe(jade({
      locals: cfg.path.project,
      pretty: true
    }))
    .pipe(gulp.dest(cfg.path.jade.dest));
});

gulp.task('jade:watch', ['jade:build']); //for reaction to .jade files
