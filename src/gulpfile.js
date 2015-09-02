var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	concat       = require('gulp-concat'),
	livereload   = require('gulp-livereload'),
	minifycss    = require('gulp-minify-css'),
	plumber      = require('gulp-plumber'),
	rename       = require('gulp-rename'),
	sass         = require('gulp-sass'),
	uglify       = require('gulp-uglify');

gulp.task('styles', function(){
	gulp.src(['../assets/sass/*.scss'])
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				this.emit('end');
		}}))
		.pipe(sass())
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('../assets/css/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('../assets/css/'))
		.pipe(livereload());
});

gulp.task('scripts', function(){
	gulp.src(['../assets/js/libs/*.js', '../assets/js/main.js'])
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				this.emit('end');
		}}))
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('../assets/js/'))
});

gulp.task('default', ['styles', 'scripts'], function(){
	livereload({ start: true });

	var watcher_css = gulp.watch('../assets/sass/**/*.scss', ['styles']);
	watcher_css.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});

	var watcher_js = gulp.watch('../assets/js/main.js', ['scripts']);
	watcher_js.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});