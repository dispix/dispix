var gulp 		= require('gulp')
var jade 		= require('gulp-jade')
var rename 		= require('gulp-rename')
var cssnano 	= require('gulp-cssnano')
var uglify 		= require('gulp-uglify')
var livereload 	= require('gulp-livereload')
var imagemin 	= require('gulp-imagemin')
var pngquant 	= require('imagemin-pngquant')

gulp.task('default', ['jades', 'styles', 'scripts', 'images', 'fonts', 'watch'])

gulp.task('jades', function()
{
	gulp.src('dev/jade/skel.jade')
		.pipe(jade({}))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./dist'))
})

gulp.task('styles', function()
{
	gulp.src(['dev/css/*.css', '!dev/css/*.min.css'])
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('scripts', function()
{
	gulp.src('dev/js/*.js')
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('images', function()
{
	gulp.src('dev/img/*.png')
		.pipe(imagemin(
			{
				optimizationLevel: 3,
				use: [pngquant()]
			}
		))
		.pipe(gulp.dest('dist/img'))

	gulp.src('dev/img/svg/*.svg')
		.pipe(imagemin(
			{
				svgoPlugins: [{removeViewBox: false}]
			}
		))
		.pipe(gulp.dest('dist/img/svg'))
})

gulp.task('fonts', function()
{
	gulp.src('dev/fonts/*')
		.pipe(gulp.dest('dist/fonts'))
})

gulp.task('watch', function()
{
	livereload.listen()
	gulp.watch('dev/css/*.css', ['styles'])
	gulp.watch('dev/js/*.js', ['scripts'])
	gulp.watch('dev/jade/*.jade', ['jades'])
	gulp.watch('dev/img/*.png', ['images'])
	gulp.watch('dev/img/svg/*.svg', ['images'])
})