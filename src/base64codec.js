/*
 * (C) 2012-2013 chick307 <chick307@gmail.com>
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 *
 * References:
 * - http://tools.ietf.org/html/rfc3548
 */

void function(global, callback) {
	if (typeof module === 'object') {
		// For Node.
		callback(module.exports);
	} else if (typeof define === 'function' && !!define.amd) {
		// For RequireJS.
		define(['exports'], callback);
	} else {
		// For web browsers.
		callback(global.base64codec = {});
	}
}(this, function(exports) {
	if (typeof module === 'object') {
		// For Node.
		exports.encode = require('./node').encode;
		exports.encodeUtf8 = require('./node').encodeUtf8;
		exports.encodeBuffer = require('./node').encodeBuffer;
		exports.decode = require('./node').decode;
		exports.decodeUtf8 = require('./node').decodeUtf8;
		exports.decodeBuffer = require('./node').decodeBuffer;
	} else {
		// For web browsers.
		exports.encode = require('./browser').encode;
		exports.encodeUtf8 = require('./browser').encodeUtf8;
		exports.decode = require('./browser').decode;
		exports.decodeUtf8 = require('./browser').decodeUtf8;
		if (typeof ArrayBuffer !== 'undefined' &&
			typeof Uint8Array !== 'undefined') {
			exports.encodeBuffer = require('./browser').encodeBuffer;
			exports.decodeBuffer = require('./browser').decodeBuffer;
		}
	}
});
