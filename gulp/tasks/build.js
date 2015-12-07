var
  cfg = require('../config'),
  gulp = require('gulp'),
  browserSync = require('browser-sync');
//for jade
// gulp.task('build', ['jade:build', 'stylus:build', 'server'], function() {
//   gulp.watch(cfg.paths.stylus.all, ['stylus:build', browserSync.reload]);
//   gulp.watch(cfg.paths.jade.all, ['jade:build', browserSync.reload]);
// });

//for pure html with rigger
// gulp.task('build', ['html:build', 'stylus:build', 'js:build', 'img:build',
//   'fonts:build', 'server'
// ], function() {
//   gulp.watch(cfg.path.stylus.all, ['stylus:build', browserSync.reload]);
//   gulp.watch(cfg.path.html.all, ['html:build', browserSync.reload]);
//   gulp.watch(cfg.path.js.all, ['js:build', browserSync.reload]);
//   gulp.watch(cfg.path.img.all, ['img:build', browserSync.reload]);
//   gulp.watch(cfg.path.fonts.all, ['fonts:build', browserSync.reload]);
// });


gulp.task('build', ['jade:build', 'stylus:build', 'js:build', 'img:build',
  'fonts:build', 'server'
], function() {
  gulp.watch(cfg.path.stylus.all, ['stylus:build', browserSync.reload]);
  gulp.watch(cfg.path.jade.all, ['jade:watch', browserSync.reload]);
  gulp.watch(cfg.path.js.all, ['js:build', browserSync.reload]);
  gulp.watch(cfg.path.img.all, ['img:build', browserSync.reload]);
  gulp.watch(cfg.path.fonts.all, ['fonts:build', browserSync.reload]);
});
