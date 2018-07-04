/**
 * This gulpfile is far from perfect, but as a boilerplate for an AngularJS app it does the job for me!
 */
const gulp = require('gulp');
const gulpServerIo = require('gulp-server-io');

var config = 
{
    "appDestination": ""
};

gulp.task('serve', () => {
    return gulp.src('./.dev')
        .pipe(function()
        {
            return gulpServerIo({
                livereload: true
            });
        }());
});

gulp.task('build:copyangular', (done) => {
    
    gulp.src([
        'node_modules/angular/angular.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular/angular.min.js.map'])
        .pipe(gulp.dest(config.appDestination + '/scripts/angularjs/'));

    return done();
});

gulp.task('build:copyapp', (done) =>
{
    gulp.src([  
        './app/**'
        ])
        .pipe(gulp.dest('.dev/'));

        return done();
});

gulp.task('dev:init', (done) => {
    config.appDestination = 'app';
    return done();
});

gulp.task('build:init', (done) => {
    config.appDestination = '.dev';
    return done();
});

gulp.task('watch' , (done) =>
{
    gulp.watch('./app/**' , gulp.parallel('build:copyapp'));

    done();
});

gulp.task('dev', gulp.series('dev:init', 'build:copyangular'));
gulp.task('build', gulp.series('build:init', 'build:copyangular', 'build:copyapp'));
gulp.task('default', gulp.series('build', 'watch', 'serve'));