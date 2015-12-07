var
  gulp = require('gulp'),
  cfg = require('../config'), // Relative to this file
  imagemin = require('gulp-imagemin'),
  plumber = require('gulp-plumber'),
  pngquant = require('imagemin-pngquant');

gulp.task('img:build', function() {

  return gulp
    .src(cfg.path.img.all)
    .pipe(plumber())
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(cfg.path.img.dest));
});
