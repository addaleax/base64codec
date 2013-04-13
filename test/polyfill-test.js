/*
 * (C) 2013 chick307 <chick307@gmail.com>
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

var assert;
if (assert == null)
	assert = require('assert');

describe('polyfill', function() {
	var polyfill;

	before(function() {
		polyfill = (typeof window !== 'undefined') ? window.polyfill :
			require('../src/polyfill.js');
	});

	describe('.btoa', function() {
		it('("\\0") => "AA=="', function() {
			assert.strictEqual(polyfill.btoa('\0'), 'AA==');
		});

		it('("\\0\\0") => "AAA="', function() {
			assert.strictEqual(polyfill.btoa('\0\0'), 'AAA=');
		});

		it('("\\0\\0\\0") => "AAAA"', function() {
			assert.strictEqual(polyfill.btoa('\0\0\0'), 'AAAA');
		});

		it('("ABCDEFG") => "QUJDREVGRw=="', function() {
			assert.strictEqual(polyfill.btoa('ABCDEFG'), 'QUJDREVGRw==');
		});
	});

	describe('.atob', function() {
		it('("AA==") => "\\0"', function() {
			assert.strictEqual(polyfill.atob('AA=='), '\0');
		});

		it('("AAA") => "\\0\\0"', function() {
			assert.strictEqual(polyfill.atob('AAA'), '\0\0');
		});

		it('("AAA=") => "\\0\\0"', function() {
			assert.strictEqual(polyfill.atob('AAA='), '\0\0');
		});

		it('("AAAA") => "\\0\\0\\0"', function() {
			assert.strictEqual(polyfill.atob('AAAA'), '\0\0\0');
		});

		it('("QUJDREVGRw==") => "ABCDEFG"', function() {
			assert.strictEqual(polyfill.atob('QUJDREVGRw=='), 'ABCDEFG');
		});

		it('("cyJ9XX0=") => "s\\"}]}"', function() {
			assert.strictEqual(polyfill.atob('cyJ9XX0='), 's"}]}');
		});
	});
});
