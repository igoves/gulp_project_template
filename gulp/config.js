module.exports = {
  path: {
    project: './',
    clean: './build',

    stylus: {
      entry: './src/css/app.styl',
      all: './src/css/**/*.styl',
      dest: './build/css'
    },

    jade: {
      entry: './src/html/index.jade',
      all: './src/html/**/*.jade',
      dest: './build'
    },

    html: {
      entry: './src/html/index.html',
      all: './src/html/**/*.html',
      dest: './build'
    },

    js: {
      entry: './src/js/app.js',
      dest: './build/js',
      all: './src/js/**/*.js'
    },

    img: {
      all: './src/img/**/*.*',
      dest: './build/img'
    },

    fonts: {
      all: './src/fonts/**/*.*',
      dest: './build/fonts/'
    }
  },
  names: {
    css: 'app.min.css',
    js: 'app.min.js',
  },

  server_config: {
    server: {
      baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: 'Frontend'
  }
};
