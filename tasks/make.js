/*
 * (C) 2013 chick307 <chick307@gmail.com>
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

module.exports = function(grunt) {
	var path = require('path');
	var eslinker = require('eslinker');
	var esmangle = require('esmangle');
	var escodegen = require('escodegen');

	grunt.registerMultiTask('make', 'Make.', function() {
		var cwd = process.cwd();
		var files = this.filesSrc.map(function(file) {
			return path.join(cwd, file);
		});
		var dest = this.data.dest;
		var options = this.options();
		var banner = (options.banner != null) ? options.banner + '\n' : '';
		var autoLink = !!options.autoLink;
		var optimize = options.optimize == null || !!options.optimize;
		var mangle = options.mangle == null || !!options.mangle;
		var format = options.format || {};

		var mainModule = eslinker.loadMain(files[0]);
		files.slice(1).forEach(function(file) {
			var module = eslinker.load(file);
			mainModule.link(module);
		});
		if (autoLink)
			eslinker.autoLink(mainModule);

		var ast = mainModule.toJSON();
		if (optimize)
			ast = esmangle.optimize(ast);
		if (mangle)
			ast = esmangle.mangle(ast);
		var code = escodegen.generate(ast, {format: format});
		code = banner + code;

		grunt.file.write(dest, code);

		grunt.log.writeln('File "' + dest + '" created.');
	});
};
