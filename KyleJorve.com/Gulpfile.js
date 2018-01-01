/// <binding AfterBuild='buildAll' Clean='clean' />
// include plug-ins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var uglifysass = require('gulp-uglifycss');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var fs = require('fs');

var config = {    
    bundleSrc: ['Build/bower_components/**/dist/*.js',
          '!Build/bower_components/**/dist/*.min.js',
          'Build/scripts/dependencies/*.js',
          'Build/scripts/sources/bundle/*.js'],
    perPageScripts: [
        'Build/scripts/sources/'
    ]
};

gulp.task('clean', function () {
    return del(['Scripts/*.js', 'Styles/*.css']);
});

gulp.task('buildBundle', [ 'clean' ], function () {
    return gulp.src(config.bundleSrc)
      .pipe(uglify())
      .pipe(concat('bundle.min.js'))
      .pipe(gulp.dest('Scripts/'));
});

gulp.task('buildPageScripts', function () {
    for (var ix = 0; ix < config.perPageScripts.length; ix++) {
        var currentScript = config.perPageScripts[ix];
        fs.readdir(currentScript, function (err, items) {
            items.map(function (item) {                
                if (fs.lstatSync(currentScript + item).isDirectory()) {
                    if (item != 'bundle') {                        
                        gulp.src(currentScript + item + "\\*.js")
                            .pipe(uglify())                            
                            .pipe(gulp.dest('Scripts/'));
                    }
                } else {                    
                    gulp.src(currentScript + item)
                        .pipe(uglify())
                        .pipe(gulp.dest('Scripts/'));
                }
            });
        });
    }
});

gulp.task('buildSass', function () {
    return gulp.src('Build/sass/**/*.scss')      
      .pipe(sass().on('error', sass.logError))      
      .pipe(uglifysass({
          "uglyComments" : true
      }))
      .pipe(concat('bundle.min.css')) 
      .pipe(gulp.dest('Styles/'));
});

gulp.task('buildAll', ['buildBundle', 'buildPageScripts', 'buildSass'], function () {
    // this should build all files automagically
});

gulp.task('watch', function () {
    gulp.watch(['Build/**/**/*.scss', 'Build/**/**/**/*.scss', 'Build/**/**/*.js', 'Build/**/**/**/*.js'], ['buildAll']);
});

//Set a default tasks
gulp.task('default', ['buildAll'], function () { });