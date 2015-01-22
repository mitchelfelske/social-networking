var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('boot:server', function () {
    nodemon({
        script: 'server.js',
        ext: 'js',
        ignore: ['ng*', 'gulp*', 'assets*']
    })
})