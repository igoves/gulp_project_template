var
  gulp = require('gulp'),
  browserSync = require('browser-sync'),
  stylus = require('gulp-stylus'),
  cfg = require('../config'), // Relative to this file
  plumber = require('gulp-plumber'),
  reload = browserSync.reload,
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  cssmin = require('gulp-minify-css');

gulp.task('stylus:build', function() {
  gulp.src(cfg.path.stylus.entry)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({
      'include css': true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cfg.path.stylus.dest))
    .pipe(reload({
      stream: true
    }));
});
