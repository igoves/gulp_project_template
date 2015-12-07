var
  gulp = require('gulp'),
  browserSync = require('browser-sync'),
  jade = require('gulp-jade'),
  reload = browserSync.reload,
  cfg = require('../config'), // Relative to this file
  plumber = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  rigger = require('gulp-rigger');

gulp.task('js:build', function() {

  return gulp
    .src(cfg.path.js.entry)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cfg.path.js.dest));
});
