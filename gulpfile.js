var gulp = require('gulp');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');



var src = {
	scripts:['scripts/**/*.js','scripts/**/*.jsx','!node_modules/**']
}

gulp.task('lint', function(){
	return gulp.src(src.scripts)
	.pipe(eslint({
        extends: 'eslint:recommended',
        ecmaFeatures: {
            'jsx': true
        },
        rules: {
            'strict': 2
        },
        globals: {
            'jQuery':false,
            '$':true
        },
        envs: [
            'browser'
        ]
    }))
	.pipe(eslint.format())
	.pipe(notify({message : 'ESlint complete'}));
});

gulp.task('scripts', function(){
	return gulp.src(src.scripts)
		.pipe(babel())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function()
{
	gulp.watch(src.scripts,['lint','scripts']);
});

gulp.task('default', ['lint','scripts', 'watch']);