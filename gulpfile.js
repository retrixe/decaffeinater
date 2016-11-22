var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var sass = require("gulp-sass");

gulp.task("default", ["html", "babel", "styles"]);

gulp.task("watch", function() {
  gulp.watch("src/**/*.scss", ["styles"]);
  gulp.watch("src/**/*.js", ["babel"]);
  gulp.watch("src/**/*.html", ["html"]);
});

gulp.task("html", function() {
  gulp.src("src/**/*.html")
    .pipe(gulp.dest("app"));
});

gulp.task("babel", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("app"));
});

gulp.task("styles", function() {
  gulp.src("src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("app"));
});
