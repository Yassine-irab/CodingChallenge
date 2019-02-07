var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create(),
	useref = require('gulp-useref'),
	uglify = require('gulp-uglify'),
	gulpIf = require('gulp-if'),
	cssnano = require('gulp-cssnano'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	del = require('del');

gulp.task('sass', function() {
	
	return gulp.src('src/sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({
		
			stream: true
		
	}))
	
});

gulp.task('vues', function() {

	return gulp.src('src/vues/*.html')
		.pipe(gulp.dest('build/vues'))

});

gulp.task('watch', function(){
	gulp.watch('src/sass/*.sass', gulp.series('sass')); 
	// Other watchers
	gulp.watch('src/*.html').on('change', browserSync.reload); 
	gulp.watch('src/js/*.js', browserSync.reload); 	
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			injectChanges: true,
			baseDir: 'src'
		},
	})
});

gulp.task('useref', function(){
	
	return gulp.src('src/*.html')
		.pipe(useref())
		.pipe(gulpIf('js/*.js', uglify()))
		.pipe(gulpIf('*.css',cssnano()))
		.pipe(gulp.dest('build'))
	
});

gulp.task('images', function(){
	
	return gulp.src('src/images/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin({
		
			interlaced: true
		
		})))
		.pipe(gulp.dest('build/images'))
	
});

gulp.task('fonts', function(){
	
	return gulp.src('src/fonts/*')
		.pipe(gulp.dest('build/fonts'))
	
});

gulp.task('clear', function(){
	
    return cache.clearAll()
	
});

gulp.task('clean:build', async function() {
	
  return del.sync('build');
	
});

gulp.task('default', gulp.parallel('browserSync', 'watch', 'useref', 'images'));

