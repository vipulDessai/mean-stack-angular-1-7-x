const { watch } = require("./utils/watch");

const {src, dest} = require('gulp');
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const sourcemaps = require('gulp-sourcemaps');

const scripts = require("./scripts");
const styles = require("./styles");
const templates = require("./templates");

function javascript() {
    return src(scripts)
        .pipe(sourcemaps.init())
        .pipe(concat("scripts.js"))
        .pipe(sourcemaps.write('./'))
        .pipe(dest("./dist/js"))
        .pipe(browserSync.reload({
            stream: true,
        }));
}

function css() {
    return src(styles)
        .pipe(concat("main.css"))
        .pipe(dest("./dist/css"))
        .pipe(browserSync.reload({
            stream: true,
        }));
}

function html() {
    return src(templates)
        .pipe(dest("./dist/"))
        .pipe(browserSync.reload({
            stream: true,
        }));
}

function browserReload() {
    return browserSync.init(null, {
        open: false,
        server: {
            baseDir: "dist",
        },
        watch: true,
    });
}

exports.start = function(done) {
    javascript();
    css();
    html();

    browserReload();

    if(done)
        done();
    
    watch(javascript, css, html);
}