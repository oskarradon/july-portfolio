// -------------------------------------------------------------------------
// GET THINGS SET UP
// -------------------------------------------------------------------------


var gulp                    = require('gulp');
var jade                    = require('gulp-jade');
var sass                    = require('gulp-sass');
var autoprefixer            = require('gulp-autoprefixer');
var cssmin                  = require('gulp-cssmin');
var concat                  = require('gulp-concat');
var uglify                  = require('gulp-uglify');
var del                     = require('del');
var browserSync             = require('browser-sync');
var reload                  = browserSync.reload;

// -------------------------------------------------------------------------
// TASKS
// -------------------------------------------------------------------------


// Jade tasks
gulp.task('jade', function() {
  return gulp.src('*.jade')
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest(''))
});


// CSS tasks
gulp.task('css', function() {
  return gulp.src('scss/*.scss')
    // Compile Sass
    .pipe(sass({ style: 'compressed', noCache: true, includePaths: ['scss/_partials/', 'scss/_vendor/'] }))
    // parse CSS and add vendor-prefixed CSS properties
    .pipe(autoprefixer())
    // Minify CSS
    .pipe(cssmin())
    // Where to store the finalized CSS
    .pipe(gulp.dest('css'))
});

// JS tasks
gulp.task('cleanJs', function() {
  // Delete minified scripts
  del(['js/scripts.min.js']);
});

gulp.task('js', function() {
    return gulp.src('js/scripts.js')
        // Minify JS
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        // Where to store the finalized JS
        .pipe(gulp.dest('js/'))
});

// Watch files for changes
gulp.task('watch', ['browser-sync'], function() {
  // Watch HTML files
  gulp.watch('*.html', reload);
  // Watch Sass files
  gulp.watch('scss/**/*', ['css', reload]);
  // Watch jade files
  gulp.watch('*.jade', ['jade']);
  // Watch JS files
  gulp.watch('scripts.js', ['cleanJs', 'js']);
});

gulp.task('browser-sync', function() {
  browserSync.init(['css/*', 'js/*'], {
    server: {
      baseDir: ""
    }
  });
});

// Default task
gulp.task('default', ['css', 'jade', 'cleanJs', 'js', 'watch', 'browser-sync']);
