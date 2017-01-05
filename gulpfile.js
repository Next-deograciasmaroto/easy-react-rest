/*
*	Plugins needed:
* Gulp
* Browserify for bundling
* vinyl-source-stream for working with browserify easily (stream outputs manager)
* gulp-util for easy gulp using
* babelify because who doesn't like ES2015 Javascript?
*
*/

var gulp = require('gulp')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var gutil = require('gulp-util')
var babelify = require('babelify')

// External dependencies that doesn't need to be bundled every time we save a file
var dependencies = [
	'react',
	'react-dom'
]
// keep a count of the times we bundle our app
var bundleCount = 0

// Gulp tasks

// Bundle for development
gulp.task('scripts', function () {
    bundleApp(false)
})

// Bundle for production
gulp.task('deploy', function (){
	bundleApp(true)
})

// Watcher
gulp.task('watch', function () {
	gulp.watch(['./app/*.js'], ['scripts'])
})

// Default task
gulp.task('default', ['scripts','watch'])


function bundleApp(isProduction) {
	bundleCount++
	// Browserify will bundle all our js files together
	// So we can use ES2015 modules
	var appBundler = browserify({
    	entries: './app/main.js',
    	debug: true
	})

	// Not production, first time:
  // Create a vendors file to keep up all libraries needed without re-compiling
  // nor re-bundling
	if (!isProduction && bundleCount === 1) {
		// create vendors.js for dev environment.
		browserify({
  		require: dependencies,
  		debug: true
  	})
		.bundle()
		.on('error', gutil.log)
		.pipe(source('vendors.js'))
		.pipe(gulp.dest('./web/js/'))
	}
	if (!isProduction) {
		// Take all dependencies out of the bundling process in development
		dependencies.forEach(function(dep) {
			appBundler.external(dep)
		})
	}

	appBundler
		// transform ES6 and JSX to ES5 with babelify
  	.transform( "babelify", { presets: ["es2015", "react"] } )
    .bundle()
    .on('error',gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./web/js/'))
}
