const { watch, series, src, dest } = require('gulp');
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const sourcemaps = require('gulp-sourcemaps');

const scripts = require("../scripts");
const styles = require("../styles");
const templates = require("../templates");

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

exports.watch = function() {
  // You can use a single task
  watch("./src/js/**/*.js", javascript);
  watch("./src/css/**/*.css", css);
  watch("./src/template/**/*.html", html);
};