var gulp = require('gulp');
var pug = require('gulp-pug');
var uglify = require('gulp-uglify-es').default;
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function(){
  return gulp.src('public/style/*.css')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});

gulp.task('js', function(){
  return gulp.src('./scripts.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', ['css', 'js' ]);