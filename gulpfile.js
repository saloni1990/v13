var gulp = require('gulp');
var autoprefixer = require("gulp-autoprefixer");
var less = require("gulp-less");

gulp.task('styles', function(){
    gulp.src("public/stylesheets/css/style.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});

gulp.task('less', function(){
    gulp.src('public/stylesheets/less/*.less')
        .pipe(less()) 
        .pipe(gulp.dest('public/stylesheets/css/'));
  });

gulp.task('watch', function(){
    gulp.watch('public/stylesheets/css/style.css', ['styles']);
    gulp.watch('public/stylesheets/less/**/*.less', ['less']);
});

