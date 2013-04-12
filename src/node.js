/*
 * (C) 2012-2013 chick307 <chick307@gmail.com>
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

var Buffer = require('buffer').Buffer;


exports.encode = function encode(binaryString) {
	var buffer = new Buffer(binaryString + '', 'binary');
	return buffer.toString('base64');
};


exports.encodeUtf8 = function encodeUtf8(utf8String) {
	var buffer = new Buffer(utf8String + '', 'utf8');
	return buffer.toString('base64');
};


exports.encodeBuffer = function encodeBuffer(buffer) {
	if (!(buffer instanceof Buffer)) {
		if (!(buffer instanceof ArrayBuffer))
			throw new Error('First argument needs to be a ArrayBuffer.');
		buffer = new Buffer(new Uint8Array(buffer));
	}
	return buffer.toString('base64');
};


exports.decode = function decode(base64String, options) {
	base64String += '';
	if (options == null)
		options = {};

	if (options.stripLinefeed === false && /[\n\r]/.test(base64String))
		throw new Error('Invalid character.');

	var buffer = new Buffer(base64String, 'base64');
	return buffer.toString('binary');
};


exports.decodeUtf8 = function decodeUtf8(base64String, options) {
	base64String += '';
	if (options == null)
		options = {};

	if (options.stripLinefeed === false && /[\n\r]/.test(base64String))
		throw new Error('Invalid character error.');

	var buffer = new Buffer(base64String, 'base64');
	return buffer.toString('utf8');
};


exports.decodeBuffer = function decodeBuffer(base64String, options) {
	base64String += '';
	if (options == null)
		options = {};

	if (options.stripLinefeed === false && /[\n\r]/.test(base64String))
		throw new Error('Invalid character error.');

	var buffer = new Buffer(base64String, 'base64');
	var array = new Uint8Array(buffer.length);
	var i = array.length;
	while (i--)
		array[i] = buffer[i];
	return array.buffer;
};
