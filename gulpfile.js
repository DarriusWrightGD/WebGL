var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var open = require('gulp-open');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');

var src = {
	script: ['scripts/**/*.js', 'scripts/**/*.jsx', '!node_modules/**'],
	style: ['css/**/*.css'],
	html : ['views/**/*.html']
};

var config = {
	port : 4565,
	devBaseUrl : 'http://localhost'
};

gulp.task('connect', function () {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});

});

gulp.task('open', ['connect'], function () {
	gulp.src('dist/index.html')
		.pipe(open({url: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('lint', function () {
	return gulp.src(src.script).pipe(eslint({
        'useEslintrc' : true
    }))
    .pipe(eslint.format());
});

gulp.task('html', function(){
	return gulp.src(src.html)
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload())
		.pipe(notify({message : 'Html bundle complete'}));
});

gulp.task('styles', function(){
	return gulp.src(src.style)
		.pipe('dist/css')
		.pipe(connect.reload())
		.pipe(notify({message : 'Style bundle complete'}));
});

gulp.task('scripts', function(){
	browserify({
        debug: true,
        //extensions: ['es6'],
        //entries: ['src/test.es6']
        entries: ['scripts/main.js']
    	})
		.transform(babelify)		
		.bundle()
		.pipe(source('all.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename('all.min.js'))
		// .pipe(streamify(uglify()))
		.pipe(connect.reload())
		.pipe(notify({message : 'Javascript bundle complete'}));
});

gulp.task('watch', function()
{
	gulp.watch(src.script,['lint','scripts']);
	gulp.watch(src.style, ['styles'])
	gulp.watch(src.html,['html']);
});

gulp.task('default', ['lint','scripts','html','open', 'watch']);