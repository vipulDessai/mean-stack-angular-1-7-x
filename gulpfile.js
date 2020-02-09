const gulp = require("gulp");
const { series } = require('gulp');
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const sourcemaps = require('gulp-sourcemaps');

const scripts = require("./scripts");
const styles = require("./styles");
const templates = require("./templates");

const { watch } = require("./utils/watch");

gulp.task("css", function(done) {
    gulp.src(styles)
        .pipe(concat("main.css"))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.reload({
            stream: true,
        }));
    
    if(done)
        done();
});

gulp.task("js", function(done) {
    gulp.src(scripts)
        .pipe(sourcemaps.init())
        .pipe(concat("scripts.js"))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("./dist/js"))
        .pipe(browserSync.reload({
            stream: true,
        }));
    
    if(done)
        done();
});

gulp.task("html", function(done) {
    gulp.src(templates)
        .pipe(gulp.dest("./dist/"))
        .pipe(browserSync.reload({
            stream: true,
        }));
    
    if(done)
        done();
});

gulp.task("build", series("css", "js", "html"), function(done) {
    done();
});

gulp.task("browser-sync", function(done) {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: "dist",
        },
        watch: true,
    });

    if(done)
        done();
});

gulp.task("start", series("build", "browser-sync"), function(done) {
    if(done)
        done();
});

watch();