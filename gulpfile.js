/* jshint strict: false */
var gulp = require('gulp');
var to5 = require('gulp-6to5');
var del = require('del');


gulp.task('clean', function (cb) {
    del('dist/**', cb);
});

gulp.task('build', ['clean'], function () {
    return gulp.src('src/*.js')
        .pipe(to5())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch(['src/**/*.js'], ['build']);
});

gulp.task('default', ['build'], function() {
    gulp.start('watch');
});
