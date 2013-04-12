module.exports = (grunt) ->
	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'

		make:
			dist:
				src: ['src/base64codec.js', 'src/**/*.js']
				dest: 'base64codec.js'
				options:
					banner:
						'''
						/*
						 * <%= pkg.name %> version <%= pkg.version %>
						 *
						 * (C) 2012-2013 chick307 <chick307@gmail.com>
						 *
						 * Licensed under the MIT License.
						 * http://opensource.org/licenses/mit-license
						 */

						'''

		mochaTest:
			dist: ['test/*.js']

		mocha:
			all: ['test/index.html', 'test/issue-3.html']
			options:
				run: true

		watch:
			all:
				files: ['base64codec.js', 'test/*.js', 'test/index.html']
				tasks: ['test']

	grunt.loadNpmTasks 'grunt-mocha-test'
	grunt.loadNpmTasks 'grunt-mocha'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadTasks 'tasks'

	grunt.registerTask 'test', ['make', 'mochaTest', 'mocha']
	grunt.registerTask 'default', ['test']
