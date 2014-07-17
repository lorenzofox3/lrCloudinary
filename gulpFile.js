var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var karma = require('karma').server;

gulp.task('build', function () {
    gulp.src('lrCloudinary.js')
        .pipe(uglify({
            mangle: false
        }))
        .pipe(rename('lrCloudinary.min.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('karma-CI', function (done) {
    var conf = require('./conf/karma-common.js');
    conf.singleRun = true;
    conf.browsers = ['PhantomJS'];
    conf.basePath = './';
    karma.start(conf, done);
});

gulp.task('default', ['karma-CI', 'build']);