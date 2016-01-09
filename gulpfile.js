var gulp = require('gulp');
var eslint = require('gulp-eslint');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var open = require('gulp-open');
var source = require('vinyl-source-stream');
var mainBowerFiles = require('main-bower-files');
var sass = require('gulp-sass');

var src = {
	script: ['scripts/**/*.js', '!node_modules/**'],
	components: ['scripts/components/*.js'],
	style: ['css/**/*.scss'],
	bootstrap: ['./bower_components/bootstrap-sass'],
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
	return gulp.src(src.components).pipe(eslint({
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

gulp.task('css', function() {
    return gulp.src('./css/app.scss')
    .pipe(sass({
        includePaths: [src.bootstrap + '/assets/stylesheets']
    }))
    .pipe(gulp.dest('dist/css'))
		.pipe(connect.reload());
});

gulp.task('fonts', function() {
    return gulp.src(src.bootstrap + '/assets/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
		.pipe(connect.reload());
});


gulp.task('bower', function(){
	return gulp.src(mainBowerFiles(),{
		base: 'bower_components'
	})
	.pipe(gulp.dest('dist/lib'))
	.pipe(connect.reload());
});

gulp.task('scripts', function(){
	browserify({
        debug: true,
        entries: ['scripts/main.js']})
		.transform(babelify)
		.bundle()
		.pipe(source('all.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename('all.min.js'))
		.pipe(connect.reload())
		.pipe(notify({message : 'Javascript bundle complete'}));
});

gulp.task('watch', function()
{
	gulp.watch(src.script,['lint','scripts']);
	gulp.watch(src.style, ['css','fonts']);
	gulp.watch(src.html,['html']);
});

gulp.task('default', ['lint','css','fonts','bower','scripts','html','open', 'watch']);
