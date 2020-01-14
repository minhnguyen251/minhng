require('es6-promise').polyfill();

var gulp          = require('gulp');
var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var csso  = require('gulp-csso');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var onError = function (err) {
    console.log('An error occurred:', gutil.colors.magenta(err.message));
    gutil.beep();
    this.emit('end');
};

gulp.task('sass', function() {
    return gulp.src('css/*.scss')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass({outputStyle: 'nested'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream())
});

gulp.task('watch', function() {
    browserSync.init({
        socket: {
            domain: 'localhost:4000'
        },
        proxy: 'localhost:4000'
    });
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('js/*.js').on('change', reload);
    gulp.watch('index.html').on('change', reload);
});

gulp.task('default', ['watch']);
