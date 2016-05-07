var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    plumber = require('gulp-plumber');

gulp.task('sass',function(){
  return gulp.src('sass/*.sass')
          .pipe(plumber())
          .pipe(sass({outputStyle:'compressed'}))
          .pipe(gulp.dest('../animation02'));
        })


gulp.task('watch',function(){
    gulp.watch('sass/*.sass',['sass'])
})

gulp.task('default',['watch','sass'])
