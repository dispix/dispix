var gulp 		= require('gulp')
var jade 		= require('gulp-jade')
var rename 		= require('gulp-rename')
var cssnano 	= require('gulp-cssnano')
var uglify 		= require('gulp-uglify')
var livereload 	= require('gulp-livereload')

gulp.task('default', ['jades', 'styles', 'scripts', 'watch'])

gulp.task('jades', function()
{
	gulp.src('./dev/jade/skel.jade')
		.pipe(jade({}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./dist'))
})

gulp.task('styles', function()
{
	gulp.src('./dev/css/*.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('scripts', function()
{
	gulp.src('./dev/js/*.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('watch', function()
{
	livereload.listen()
	gulp.watch('./dev/css/*.css', ['styles'])
	gulp.watch('./dev/js/*.js', ['scripts'])
	gulp.watch('./dev/jade/*.jade', ['jades'])
})