var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('merge', function () {
    gulp.src([
        './node_modules/es5-shim/es5-shim.js',
        './node_modules/es5-shim/es5-sham.js',
        './node_modules/console-polyfill/index.js',
        './node_modules/babel-polyfill/dist/polyfill.js'
    ])
        .pipe(concat('bee-polyfill.js'))
        .pipe(gulp.dest('./'))
})

gulp.task('uglify', ['merge'],function () {
    gulp.src('./bee-polyfill.js')
        .pipe(uglify())
        .pipe(concat('bee-polyfill.min.js'))
        .pipe(gulp.dest('./'))
})

gulp.task('default', ['uglify']);