const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const uglifysass = require('gulp-uglifycss');
const del = require('del');
const fs = require('fs');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const register = require('@babel/register');
const mode = require('gulp-mode')({
    modes: ['production', 'development'],
    default: 'development',
    verbose: false
});
const rename = require('gulp-rename');
const polyfill = 'node_modules/@babel/polyfill/dist/polyfill.min.js';

const config = {
    bundleSrc: [polyfill, 'src/scripts/dependencies/*.js', 'src/scripts/sources/bundle/*.js'],
    perPageScripts: 'src/scripts/sources/',
    sassBundleSrc: 'src/sass/**/*.scss',
};

const watchSource = {
    bundle: ['src/scripts/dependencies/*.js', 'src/scripts/sources/bundle/*.js'],
    pageScripts: ['src/scripts/sources/*/*.js', '!src/scripts/sources/bundle/*.js'],
    sass: config.sassBundleSrc
};

const delConfig = {
    all: ['dist/js/*.js', 'dist/css/*.css'],
    bundle: 'dist/js/bundle.min.js',
    pageScripts: ['dist/js/*.js', '!dist/js/bundle.min.js'],
    sass: 'dist/css/bundle.min.css'
};

const build = gulp.series(cleanAll, gulp.parallel(buildBundle, buildPageScripts, buildSass), cb => {
    console.log('----- Build finished -----');

    cb();
});

function cleanBundle(cb) {
    return del(delConfig.bundle);

    cb();
}

function cleanPageScripts(cb) {
    return del(delConfig.pageScripts);

    cb();
}

function cleanSass(cb) {
    return del(delConfig.sass);

    cb();
}

function cleanAll(cb) {
    cleanBundle();
    cleanPageScripts();
    cleanSass();

    cb();
}

function buildBundle(cb) {
    return gulp.src(config.bundleSrc)
        .pipe(babel())
        .on('error', console.error.bind(console))
        .pipe(mode.production(uglify()))
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest('dist/js'));

    cb();
}

function buildPageScripts(cb) {
    fs.readdir(config.perPageScripts, function (err, items) {
        items.map(function (item) {
            if (fs.lstatSync(`${config.perPageScripts}${item}`).isDirectory()) {
                if (item !== 'bundle' && item !== 'themes') {
                    gulp.src(`${config.perPageScripts}${item}\\*.js`)
                        .pipe(babel())
                        .on('error', console.error.bind(console))
                        .pipe(mode.production(uglify()))
                        .pipe(rename(path => {
                            path.dirname = '';
                        }))
                        .pipe(gulp.dest('dist/js'));
                }

            } else {
                gulp.src(`${config.perPageScripts}${item}`)
                    .pipe(babel())
                    .on('error', console.error.bind(console))
                    .pipe(mode.production(uglify()))
                    .pipe(gulp.dest('dist/js'));
            }
        });
    });

    cb();
}

function buildSass(cb) {
    return gulp.src(config.sassBundleSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(mode.production(uglifysass({
            "uglyComments": true
        })))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(concat('bundle.min.css'))
        .pipe(gulp.dest('dist/css'))
        cb();
}

function complete(cb) {
    console.log('----- task complete -----');

    cb();
}

function watch() {
    // watch scripts bundle
    gulp.watch(watchSource.bundle, gulp.series(cleanBundle, buildBundle, complete));

    // watch page scripts
    gulp.watch(watchSource.pageScripts, gulp.series(cleanPageScripts, buildPageScripts, complete));

    // watch sass
    gulp.watch(watchSource.sass, gulp.series(cleanSass, buildSass, complete))
}

exports.clean = cleanAll;
exports.build = build;
exports.watch = watch;

// default task
exports.default = build;