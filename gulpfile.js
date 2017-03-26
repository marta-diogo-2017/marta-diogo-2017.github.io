var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    include = require('gulp-include'),
    debug = false;

// task manager
gulp.task('debug', function(){
  debug = true;
});
gulp.task('wilcomen', function(){
  console.log(
    debug ?
    "\n W E L C O M E   T O  D E B U G   M O D E \n\n   Your scripts and css are no longer minified! WOOHOO!\n   Don't forget to execute 'gulp' before you commit / push any changes!\n   Happy codin!\n\n" :
    "\n W E L C O M E   T O   P R O D U C T I O N   M O D E \n\n   This is the mode to put things ready for production.\n   Your code is minified and ready to roll.\n   If you want to write some code, run 'gulp dev'. \n   Good luck!\n\n");
});

gulp.task('sass', function(){
  return gulp.src('./scss/*.scss')
    .pipe(sass(debug ? "" :{outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 version', 'safari 6', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
    }))
    .pipe(gulp.dest('./scss'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function(){
  gulp.src('/scripts/modules/main.js')
    .pipe(include())
    .pipe(babel( {
      compact: debug ? false : true
    }))
    .pipe(gulp.dest('/scripts/'));
});

gulp.task('serve', function(){
  browserSync.init({
    server:{
      baseDir: './'
    },
  });

  gulp.watch(['./scss/**/*.scss','./scss/*.scss'], ['sass']);
  gulp.watch(['./scripts/modules/**/*.js', './scripts/modules/*.js'], ['scripts']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

// default
gulp.task('default', ['wilcomen','sass', 'scripts']);
// debug
gulp.task('dev', ['debug','wilcomen','sass', 'scripts', 'serve']);
