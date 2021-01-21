"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var server = require("browser-sync").create();
var del = require("del");

  gulp.task("del", function () {
    return del("app/css");
  });


  gulp.task("css", function () {
    return gulp.src("app/scss/style.scss")
      .pipe(plumber())
      .pipe(sass())
      .pipe(postcss([autoprefixer()]))
      .pipe(gulp.dest("app/css"))
      .pipe(csso())
      .pipe(rename("style.min.css"))
      .pipe(gulp.dest("app/css"))
      .pipe(server.stream());
  });

  gulp.task("html", function () {
    return gulp.src("app/*.html");
      
  });

  gulp.task("js", function () {
    return gulp.src("app/js/**/*");
      
  });

  gulp.task("img", function () {
    return gulp.src("app/img/**/*");
  });

  gulp.task("server", function () {
    server.init({
      server: "app/",
      notify: false,
      open: true,
      cors: true,
      ui: false,
      tunnel: false
    });
    gulp.watch("app/scss/**/*.{scss,sass}", gulp.series("css", "refresh"));
    gulp.watch("app/img/**/*", gulp.series("img", "refresh"));
    gulp.watch("app/*.html", gulp.series("html", "refresh"));
    gulp.watch("app/js/**/*.js", gulp.series("js", "refresh"));
  });

  gulp.task("refresh", function(done) {
    server.reload();
    done();
  });

gulp.task("build", gulp.series("del", "css"));
gulp.task("start", gulp.series("build", "server"));