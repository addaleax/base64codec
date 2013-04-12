/*
 * (C) 2012-2013 chick307 <chick307@gmail.com>
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

var BTOA_TABLE = [
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
	'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
	'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
	't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7',
	'8', '9', '+', '/'
];

var ATOB_TABLE = {
	'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8,
	'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16,
	'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24,
	'Z': 25, 'a': 26, 'b': 27, 'c': 28, 'd': 29, 'e': 30, 'f': 31, 'g': 32,
	'h': 33, 'i': 34, 'j': 35, 'k': 36, 'l': 37, 'm': 38, 'n': 39, 'o': 40,
	'p': 41, 'q': 42, 'r': 43, 's': 44, 't': 45, 'u': 46, 'v': 47, 'w': 48,
	'x': 49, 'y': 50, 'z': 51, '0': 52, '1': 53, '2': 54, '3': 55, '4': 56,
	'5': 57, '6': 58, '7': 59, '8': 60, '9': 61, '+': 62, '/': 63
};


exports.btoa = function btoa(binaryString) {
	var i = 0, l = binaryString.length, length = l - l % 3;
	var block, result = '';

	while (i < length) {
		block = (binaryString.charCodeAt(i++) & 0xFF) << 16 |
			(binaryString.charCodeAt(i++) & 0xFF) << 8 |
			(binaryString.charCodeAt(i++) & 0xFF);
		result += BTOA_TABLE[block >>> 18 & 0x3F];
		result += BTOA_TABLE[block >>> 12 & 0x3F];
		result += BTOA_TABLE[block >>> 6 & 0x3F];
		result += BTOA_TABLE[block & 0x3F];
	}

	if (i < l) {
		block = (binaryString.charCodeAt(i++) & 0xFF) << 16 |
			(i < l ? binaryString.charCodeAt(i) & 0xFF : 0) << 8;
		result += BTOA_TABLE[block >>> 18 & 0x3F];
		result += BTOA_TABLE[block >>> 12 & 0x3F];
		result += i < l ? BTOA_TABLE[block >>> 6 & 0x3F] : '=';
		result += '=';
	}

	return result;
};


exports.atob = function atob(base64String) {
	base64String = base64String.replace(/=+$/g, '');
	if (/[^A-Z0-9\+\/]/i.test(base64String) || base64String.length % 4 === 1)
		throw new Error('Invalid character error.');

	var i = 0, l = base64String.length, length = l - l % 4;
	var block, result = [], j = 0;
	while (i < length) {
		block = ATOB_TABLE[base64String.charAt(i++)] << 18 |
			ATOB_TABLE[base64String.charAt(i++)] << 12 |
			ATOB_TABLE[base64String.charAt(i++)] << 6 |
			ATOB_TABLE[base64String.charAt(i++)];
		result[j++] = block >>> 16 & 0xFF;
		result[j++] = block >>> 8 & 0xFF;
		result[j++] = block & 0xFF;
	}

	if (i < l) {
		block = ATOB_TABLE[base64String.charAt(i++)] << 18 |
			ATOB_TABLE[base64String.charAt(i++)] << 12;
		result[j++] = block >>> 16 & 0xFF;
		if (i < l) {
			block |= ATOB_TABLE[base64String.charAt(i)] << 6;
			result[j++] = block >>> 8 & 0xFF;
		}
	}

	return String.fromCharCode.apply(String, result);
};
