/*
 * (C) 2012-2013 chick307 <chick307@gmail.com>
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

var btoa = (typeof window.btoa !== 'undefined') ?
	window.btoa : require('./polyfill').btoa;
var atob = (typeof window.atob !== 'undefined') ?
	window.atob : require('./polyfill').atob;


exports.encode = function encode(binaryString) {
	return btoa(binaryString + '');
};


exports.encodeUtf8 = function encodeUtf8(utf8String) {
	var binaryString = unescape(encodeURIComponent(utf8String + ''));
	return btoa(binaryString);
};


exports.decode = function decode(base64String, options) {
	base64String += '';
	if (options == null)
		options = {};

	if (options.stripLinefeed !== false)
		base64String = base64String.replace(/[\n\r]/g, '');

	var binaryString = atob(base64String);
	return binaryString;
};


exports.decodeUtf8 = function decodeUtf8(base64String, options) {
	base64String += '';
	if (options == null)
		options = {};

	if (options.stripLinefeed !== false)
		base64String = base64String.replace(/[\n\r]/g, '');

	var binaryString = atob(base64String);
	return decodeURIComponent(escape(binaryString));
};


if (typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined') {
	exports.encodeBuffer = function encodeBuffer(buffer) {
		if (!(buffer instanceof ArrayBuffer))
			throw new Error('First argument needs to be a ArrayBuffer.');

		var array = Array.prototype.slice.call(new Uint8Array(buffer));
		var binaryString = String.fromCharCode.apply(String, array);
		return btoa(binaryString);
	};


	exports.decodeBuffer = function decodeBuffer(base64String, options) {
		base64String += '';
		if (options == null)
			options = {};

		if (options.stripLinefeed !== false)
			base64String = base64String.replace(/[\n\r]/g, '');

		var binaryString = atob(base64String);
		var i, length = binaryString.length;
		var result = new Uint8Array(length);
		for (i = 0; i < length; i++)
			result[i] = binaryString.charCodeAt(i);
		return result.buffer;
	};
}
