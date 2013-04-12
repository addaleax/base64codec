/*
 * base64codec version 0.0.3
 *
 * (C) 2012-2013 chick307 <chick307@gmail.com>
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

var $$1 = function (b, a, c) {
        return b = !0, a = {}, c = { exports: a }, function () {
            return b && (b = !1, function (d, a) {
                var b = window.btoa !== void 0 ? window.btoa : $$3().btoa;
                var c = window.atob !== void 0 ? window.atob : $$3().atob;
                a.encode = function a(a) {
                    return b(a + '');
                }, a.encodeUtf8 = function a(c) {
                    var a = unescape(encodeURIComponent(c + ''));
                    return b(a);
                }, a.decode = function a(a, b) {
                    a += '', b == null && (b = {}), b.stripLinefeed !== !1 && (a = a.replace(/[\n\r]/g, ''));
                    var d = c(a);
                    return d;
                }, a.decodeUtf8 = function a(a, b) {
                    a += '', b == null && (b = {}), b.stripLinefeed !== !1 && (a = a.replace(/[\n\r]/g, ''));
                    var d = c(a);
                    return decodeURIComponent(escape(d));
                }, typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && (a.encodeBuffer = function a(a) {
                    if (!(a instanceof ArrayBuffer))
                        throw new Error('First argument needs to be a ArrayBuffer.');
                    var c = Array.prototype.slice.call(new Uint8Array(a));
                    var d = String.fromCharCode.apply(String, c);
                    return b(d);
                }, a.decodeBuffer = function a(b, d) {
                    b += '', d == null && (d = {}), d.stripLinefeed !== !1 && (b = b.replace(/[\n\r]/g, ''));
                    var e = c(b);
                    var a, f = e.length;
                    var g = new Uint8Array(f);
                    for (a = 0; a < f; a++)
                        g[a] = e.charCodeAt(a);
                    return g.buffer;
                });
            }.call(a, c, a)), c.exports;
        };
    }();
var $$2 = function (b, a, c) {
        return b = !0, a = {}, c = { exports: a }, function () {
            return b && (b = !1, function (c, b) {
                var a = require('buffer').Buffer;
                b.encode = function b(c) {
                    var b = new a(c + '', 'binary');
                    return b.toString('base64');
                }, b.encodeUtf8 = function b(c) {
                    var b = new a(c + '', 'utf8');
                    return b.toString('base64');
                }, b.encodeBuffer = function b(b) {
                    if (!(b instanceof a)) {
                        if (!(b instanceof ArrayBuffer))
                            throw new Error('First argument needs to be a ArrayBuffer.');
                        b = new a(new Uint8Array(b));
                    }
                    return b.toString('base64');
                }, b.decode = function b(b, c) {
                    if (b += '', c == null && (c = {}), c.stripLinefeed === !1 && /[\n\r]/.test(b))
                        throw new Error('Invalid character.');
                    var d = new a(b, 'base64');
                    return d.toString('binary');
                }, b.decodeUtf8 = function b(b, c) {
                    if (b += '', c == null && (c = {}), c.stripLinefeed === !1 && /[\n\r]/.test(b))
                        throw new Error('Invalid character error.');
                    var d = new a(b, 'base64');
                    return d.toString('utf8');
                }, b.decodeBuffer = function b(d, e) {
                    if (d += '', e == null && (e = {}), e.stripLinefeed === !1 && /[\n\r]/.test(d))
                        throw new Error('Invalid character error.');
                    var f = new a(d, 'base64');
                    var b = new Uint8Array(f.length);
                    var c = b.length;
                    while (c--)
                        b[c] = f[c];
                    return b.buffer;
                };
            }.call(a, c, a)), c.exports;
        };
    }();
var $$3 = function (b, a, c) {
        return b = !0, a = {}, c = { exports: a }, function () {
            return b && (b = !1, function (d, c) {
                var a = [
                        'A',
                        'B',
                        'C',
                        'D',
                        'E',
                        'F',
                        'G',
                        'H',
                        'I',
                        'J',
                        'K',
                        'L',
                        'M',
                        'N',
                        'O',
                        'P',
                        'Q',
                        'R',
                        'S',
                        'T',
                        'U',
                        'V',
                        'W',
                        'X',
                        'Y',
                        'Z',
                        'a',
                        'b',
                        'c',
                        'd',
                        'e',
                        'f',
                        'g',
                        'h',
                        'i',
                        'j',
                        'k',
                        'l',
                        'm',
                        'n',
                        'o',
                        'p',
                        'q',
                        'r',
                        's',
                        't',
                        'u',
                        'v',
                        'w',
                        'x',
                        'y',
                        'z',
                        '0',
                        '1',
                        '2',
                        '3',
                        '4',
                        '5',
                        '6',
                        '7',
                        '8',
                        '9',
                        '+',
                        '/'
                    ];
                var b = {
                        A: 0,
                        B: 1,
                        C: 2,
                        D: 3,
                        E: 4,
                        F: 5,
                        G: 6,
                        H: 7,
                        I: 8,
                        J: 9,
                        K: 10,
                        L: 11,
                        M: 12,
                        N: 13,
                        O: 14,
                        P: 15,
                        Q: 16,
                        R: 17,
                        S: 18,
                        T: 19,
                        U: 20,
                        V: 21,
                        W: 22,
                        X: 23,
                        Y: 24,
                        Z: 25,
                        a: 26,
                        b: 27,
                        c: 28,
                        d: 29,
                        e: 30,
                        f: 31,
                        g: 32,
                        h: 33,
                        i: 34,
                        j: 35,
                        k: 36,
                        l: 37,
                        m: 38,
                        n: 39,
                        o: 40,
                        p: 41,
                        q: 42,
                        r: 43,
                        s: 44,
                        t: 45,
                        u: 46,
                        v: 47,
                        w: 48,
                        x: 49,
                        y: 50,
                        z: 51,
                        0: 52,
                        1: 53,
                        2: 54,
                        3: 55,
                        4: 56,
                        5: 57,
                        6: 58,
                        7: 59,
                        8: 60,
                        9: 61,
                        '+': 62,
                        '/': 63
                    };
                c.btoa = function b(e) {
                    var b = 0, f = e.length, g = f - f % 3;
                    var d, c = '';
                    while (b < g)
                        d = (e.charCodeAt(b++) & 255) << 16 | (e.charCodeAt(b++) & 255) << 8 | e.charCodeAt(b++) & 255, c += a[d >>> 18 & 63], c += a[d >>> 12 & 63], c += a[d >>> 6 & 63], c += a[d & 63];
                    return b < f && (d = (e.charCodeAt(b++) & 255) << 16 | (b < f ? (e.charCodeAt(b) & 255) << 8 : 0), c += a[d >>> 18 & 63], c += a[d >>> 12 & 63], c += b < f ? a[d >>> 6 & 63] : '=', c += '='), c;
                }, c.atob = function a(a) {
                    if (a = a.replace(/=+$/g, ''), /[^A-Z0-9\+\/]/i.test(a) || a.length % 4 === 1)
                        throw new Error('Invalid character error.');
                    var c = 0, g = a.length, h = g - g % 4;
                    var d, e = [], f = 0;
                    while (c < h)
                        d = b[a.charAt(c++)] << 18 | b[a.charAt(c++)] << 12 | b[a.charAt(c++)] << 6 | b[a.charAt(c++)], e[f++] = d >>> 16 & 255, e[f++] = d >>> 8 & 255, e[f++] = d & 255;
                    return c < g && (d = b[a.charAt(c++)] << 18 | b[a.charAt(c++)] << 12, e[f++] = d >>> 16 & 255, c < g && (d |= b[a.charAt(c)] << 6, e[f++] = d >>> 8 & 255)), String.fromCharCode.apply(String, e);
                };
            }.call(a, c, a)), c.exports;
        };
    }();
void function (b, a) {
    typeof module === 'object' ? a(module.exports) : typeof define === 'function' && define.amd ? define(['exports'], a) : a(b.base64codec = {});
}(this, function (a) {
    typeof module === 'object' ? (a.encode = $$2().encode, a.encodeUtf8 = $$2().encodeUtf8, a.encodeBuffer = $$2().encodeBuffer, a.decode = $$2().decode, a.decodeUtf8 = $$2().decodeUtf8, a.decodeBuffer = $$2().decodeBuffer) : (a.encode = $$1().encode, a.encodeUtf8 = $$1().encodeUtf8, a.decode = $$1().decode, a.decodeUtf8 = $$1().decodeUtf8, typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && (a.encodeBuffer = $$1().encodeBuffer, a.decodeBuffer = $$1().decodeBuffer));
});