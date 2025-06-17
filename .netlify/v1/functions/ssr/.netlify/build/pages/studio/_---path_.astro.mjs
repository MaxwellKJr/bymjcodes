import '../../chunks/page-ssr_b58HPW9V.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_lUFmIoAw.mjs';
import 'kleur/colors';
export { renderers } from '../../renderers.mjs';

var Br = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dr(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var rr = { exports: {} }, tr = { exports: {} }, sr = {}, Z = {}, xr;
function Or() {
  if (xr) return Z;
  xr = 1, Z.byteLength = o, Z.toByteArray = A, Z.fromByteArray = O;
  for (var c = [], a = [], y = typeof Uint8Array < "u" ? Uint8Array : Array, w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, x = w.length; d < x; ++d)
    c[d] = w[d], a[w.charCodeAt(d)] = d;
  a[45] = 62, a[95] = 63;
  function s(h) {
    var p = h.length;
    if (p % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var l = h.indexOf("=");
    l === -1 && (l = p);
    var I = l === p ? 0 : 4 - l % 4;
    return [l, I];
  }
  function o(h) {
    var p = s(h), l = p[0], I = p[1];
    return (l + I) * 3 / 4 - I;
  }
  function E(h, p, l) {
    return (p + l) * 3 / 4 - l;
  }
  function A(h) {
    var p, l = s(h), I = l[0], P = l[1], _ = new y(E(h, I, P)), N = 0, k = P > 0 ? I - 4 : I, F;
    for (F = 0; F < k; F += 4)
      p = a[h.charCodeAt(F)] << 18 | a[h.charCodeAt(F + 1)] << 12 | a[h.charCodeAt(F + 2)] << 6 | a[h.charCodeAt(F + 3)], _[N++] = p >> 16 & 255, _[N++] = p >> 8 & 255, _[N++] = p & 255;
    return P === 2 && (p = a[h.charCodeAt(F)] << 2 | a[h.charCodeAt(F + 1)] >> 4, _[N++] = p & 255), P === 1 && (p = a[h.charCodeAt(F)] << 10 | a[h.charCodeAt(F + 1)] << 4 | a[h.charCodeAt(F + 2)] >> 2, _[N++] = p >> 8 & 255, _[N++] = p & 255), _;
  }
  function T(h) {
    return c[h >> 18 & 63] + c[h >> 12 & 63] + c[h >> 6 & 63] + c[h & 63];
  }
  function b(h, p, l) {
    for (var I, P = [], _ = p; _ < l; _ += 3)
      I = (h[_] << 16 & 16711680) + (h[_ + 1] << 8 & 65280) + (h[_ + 2] & 255), P.push(T(I));
    return P.join("");
  }
  function O(h) {
    for (var p, l = h.length, I = l % 3, P = [], _ = 16383, N = 0, k = l - I; N < k; N += _)
      P.push(b(h, N, N + _ > k ? k : N + _));
    return I === 1 ? (p = h[l - 1], P.push(
      c[p >> 2] + c[p << 4 & 63] + "=="
    )) : I === 2 && (p = (h[l - 2] << 8) + h[l - 1], P.push(
      c[p >> 10] + c[p >> 4 & 63] + c[p << 2 & 63] + "="
    )), P.join("");
  }
  return Z;
}
var er = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Er;
function kr() {
  return Er || (Er = 1, er.read = function(c, a, y, w, d) {
    var x, s, o = d * 8 - w - 1, E = (1 << o) - 1, A = E >> 1, T = -7, b = y ? d - 1 : 0, O = y ? -1 : 1, h = c[a + b];
    for (b += O, x = h & (1 << -T) - 1, h >>= -T, T += o; T > 0; x = x * 256 + c[a + b], b += O, T -= 8)
      ;
    for (s = x & (1 << -T) - 1, x >>= -T, T += w; T > 0; s = s * 256 + c[a + b], b += O, T -= 8)
      ;
    if (x === 0)
      x = 1 - A;
    else {
      if (x === E)
        return s ? NaN : (h ? -1 : 1) * (1 / 0);
      s = s + Math.pow(2, w), x = x - A;
    }
    return (h ? -1 : 1) * s * Math.pow(2, x - w);
  }, er.write = function(c, a, y, w, d, x) {
    var s, o, E, A = x * 8 - d - 1, T = (1 << A) - 1, b = T >> 1, O = d === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = w ? 0 : x - 1, p = w ? 1 : -1, l = a < 0 || a === 0 && 1 / a < 0 ? 1 : 0;
    for (a = Math.abs(a), isNaN(a) || a === 1 / 0 ? (o = isNaN(a) ? 1 : 0, s = T) : (s = Math.floor(Math.log(a) / Math.LN2), a * (E = Math.pow(2, -s)) < 1 && (s--, E *= 2), s + b >= 1 ? a += O / E : a += O * Math.pow(2, 1 - b), a * E >= 2 && (s++, E /= 2), s + b >= T ? (o = 0, s = T) : s + b >= 1 ? (o = (a * E - 1) * Math.pow(2, d), s = s + b) : (o = a * Math.pow(2, b - 1) * Math.pow(2, d), s = 0)); d >= 8; c[y + h] = o & 255, h += p, o /= 256, d -= 8)
      ;
    for (s = s << d | o, A += d; A > 0; c[y + h] = s & 255, h += p, s /= 256, A -= 8)
      ;
    c[y + h - p] |= l * 128;
  }), er;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var mr;
function $r() {
  return mr || (mr = 1, function(c) {
    const a = Or(), y = kr(), w = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    c.Buffer = o, c.SlowBuffer = _, c.INSPECT_MAX_BYTES = 50;
    const d = 2147483647;
    c.kMaxLength = d, o.TYPED_ARRAY_SUPPORT = x(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function x() {
      try {
        const e = new Uint8Array(1), r = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(e, r), e.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(o.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (o.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(o.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (o.isBuffer(this))
          return this.byteOffset;
      }
    });
    function s(e) {
      if (e > d)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
      const r = new Uint8Array(e);
      return Object.setPrototypeOf(r, o.prototype), r;
    }
    function o(e, r, t) {
      if (typeof e == "number") {
        if (typeof r == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return b(e);
      }
      return E(e, r, t);
    }
    o.poolSize = 8192;
    function E(e, r, t) {
      if (typeof e == "string")
        return O(e, r);
      if (ArrayBuffer.isView(e))
        return p(e);
      if (e == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
        );
      if (q(e, ArrayBuffer) || e && q(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (q(e, SharedArrayBuffer) || e && q(e.buffer, SharedArrayBuffer)))
        return l(e, r, t);
      if (typeof e == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const n = e.valueOf && e.valueOf();
      if (n != null && n !== e)
        return o.from(n, r, t);
      const i = I(e);
      if (i) return i;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function")
        return o.from(e[Symbol.toPrimitive]("string"), r, t);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
      );
    }
    o.from = function(e, r, t) {
      return E(e, r, t);
    }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
    function A(e) {
      if (typeof e != "number")
        throw new TypeError('"size" argument must be of type number');
      if (e < 0)
        throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function T(e, r, t) {
      return A(e), e <= 0 ? s(e) : r !== void 0 ? typeof t == "string" ? s(e).fill(r, t) : s(e).fill(r) : s(e);
    }
    o.alloc = function(e, r, t) {
      return T(e, r, t);
    };
    function b(e) {
      return A(e), s(e < 0 ? 0 : P(e) | 0);
    }
    o.allocUnsafe = function(e) {
      return b(e);
    }, o.allocUnsafeSlow = function(e) {
      return b(e);
    };
    function O(e, r) {
      if ((typeof r != "string" || r === "") && (r = "utf8"), !o.isEncoding(r))
        throw new TypeError("Unknown encoding: " + r);
      const t = N(e, r) | 0;
      let n = s(t);
      const i = n.write(e, r);
      return i !== t && (n = n.slice(0, i)), n;
    }
    function h(e) {
      const r = e.length < 0 ? 0 : P(e.length) | 0, t = s(r);
      for (let n = 0; n < r; n += 1)
        t[n] = e[n] & 255;
      return t;
    }
    function p(e) {
      if (q(e, Uint8Array)) {
        const r = new Uint8Array(e);
        return l(r.buffer, r.byteOffset, r.byteLength);
      }
      return h(e);
    }
    function l(e, r, t) {
      if (r < 0 || e.byteLength < r)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < r + (t || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let n;
      return r === void 0 && t === void 0 ? n = new Uint8Array(e) : t === void 0 ? n = new Uint8Array(e, r) : n = new Uint8Array(e, r, t), Object.setPrototypeOf(n, o.prototype), n;
    }
    function I(e) {
      if (o.isBuffer(e)) {
        const r = P(e.length) | 0, t = s(r);
        return t.length === 0 || e.copy(t, 0, 0, r), t;
      }
      if (e.length !== void 0)
        return typeof e.length != "number" || fr(e.length) ? s(0) : h(e);
      if (e.type === "Buffer" && Array.isArray(e.data))
        return h(e.data);
    }
    function P(e) {
      if (e >= d)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + d.toString(16) + " bytes");
      return e | 0;
    }
    function _(e) {
      return +e != e && (e = 0), o.alloc(+e);
    }
    o.isBuffer = function(r) {
      return r != null && r._isBuffer === true && r !== o.prototype;
    }, o.compare = function(r, t) {
      if (q(r, Uint8Array) && (r = o.from(r, r.offset, r.byteLength)), q(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(r) || !o.isBuffer(t))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (r === t) return 0;
      let n = r.length, i = t.length;
      for (let u = 0, f = Math.min(n, i); u < f; ++u)
        if (r[u] !== t[u]) {
          n = r[u], i = t[u];
          break;
        }
      return n < i ? -1 : i < n ? 1 : 0;
    }, o.isEncoding = function(r) {
      switch (String(r).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    }, o.concat = function(r, t) {
      if (!Array.isArray(r))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (r.length === 0)
        return o.alloc(0);
      let n;
      if (t === void 0)
        for (t = 0, n = 0; n < r.length; ++n)
          t += r[n].length;
      const i = o.allocUnsafe(t);
      let u = 0;
      for (n = 0; n < r.length; ++n) {
        let f = r[n];
        if (q(f, Uint8Array))
          u + f.length > i.length ? (o.isBuffer(f) || (f = o.from(f)), f.copy(i, u)) : Uint8Array.prototype.set.call(
            i,
            f,
            u
          );
        else if (o.isBuffer(f))
          f.copy(i, u);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        u += f.length;
      }
      return i;
    };
    function N(e, r) {
      if (o.isBuffer(e))
        return e.length;
      if (ArrayBuffer.isView(e) || q(e, ArrayBuffer))
        return e.byteLength;
      if (typeof e != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e
        );
      const t = e.length, n = arguments.length > 2 && arguments[2] === true;
      if (!n && t === 0) return 0;
      let i = false;
      for (; ; )
        switch (r) {
          case "ascii":
          case "latin1":
          case "binary":
            return t;
          case "utf8":
          case "utf-8":
            return ur(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return t * 2;
          case "hex":
            return t >>> 1;
          case "base64":
            return gr(e).length;
          default:
            if (i)
              return n ? -1 : ur(e).length;
            r = ("" + r).toLowerCase(), i = true;
        }
    }
    o.byteLength = N;
    function k(e, r, t) {
      let n = false;
      if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r))
        return "";
      for (e || (e = "utf8"); ; )
        switch (e) {
          case "hex":
            return Rr(this, r, t);
          case "utf8":
          case "utf-8":
            return M(this, r, t);
          case "ascii":
            return j(this, r, t);
          case "latin1":
          case "binary":
            return v(this, r, t);
          case "base64":
            return G(this, r, t);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Sr(this, r, t);
          default:
            if (n) throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), n = true;
        }
    }
    o.prototype._isBuffer = true;
    function F(e, r, t) {
      const n = e[r];
      e[r] = e[t], e[t] = n;
    }
    o.prototype.swap16 = function() {
      const r = this.length;
      if (r % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let t = 0; t < r; t += 2)
        F(this, t, t + 1);
      return this;
    }, o.prototype.swap32 = function() {
      const r = this.length;
      if (r % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let t = 0; t < r; t += 4)
        F(this, t, t + 3), F(this, t + 1, t + 2);
      return this;
    }, o.prototype.swap64 = function() {
      const r = this.length;
      if (r % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let t = 0; t < r; t += 8)
        F(this, t, t + 7), F(this, t + 1, t + 6), F(this, t + 2, t + 5), F(this, t + 3, t + 4);
      return this;
    }, o.prototype.toString = function() {
      const r = this.length;
      return r === 0 ? "" : arguments.length === 0 ? M(this, 0, r) : k.apply(this, arguments);
    }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(r) {
      if (!o.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
      return this === r ? true : o.compare(this, r) === 0;
    }, o.prototype.inspect = function() {
      let r = "";
      const t = c.INSPECT_MAX_BYTES;
      return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
    }, w && (o.prototype[w] = o.prototype.inspect), o.prototype.compare = function(r, t, n, i, u) {
      if (q(r, Uint8Array) && (r = o.from(r, r.offset, r.byteLength)), !o.isBuffer(r))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r
        );
      if (t === void 0 && (t = 0), n === void 0 && (n = r ? r.length : 0), i === void 0 && (i = 0), u === void 0 && (u = this.length), t < 0 || n > r.length || i < 0 || u > this.length)
        throw new RangeError("out of range index");
      if (i >= u && t >= n)
        return 0;
      if (i >= u)
        return -1;
      if (t >= n)
        return 1;
      if (t >>>= 0, n >>>= 0, i >>>= 0, u >>>= 0, this === r) return 0;
      let f = u - i, B = n - t;
      const S = Math.min(f, B), U = this.slice(i, u), C = r.slice(t, n);
      for (let m = 0; m < S; ++m)
        if (U[m] !== C[m]) {
          f = U[m], B = C[m];
          break;
        }
      return f < B ? -1 : B < f ? 1 : 0;
    };
    function X(e, r, t, n, i) {
      if (e.length === 0) return -1;
      if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, fr(t) && (t = i ? 0 : e.length - 1), t < 0 && (t = e.length + t), t >= e.length) {
        if (i) return -1;
        t = e.length - 1;
      } else if (t < 0)
        if (i) t = 0;
        else return -1;
      if (typeof r == "string" && (r = o.from(r, n)), o.isBuffer(r))
        return r.length === 0 ? -1 : J(e, r, t, n, i);
      if (typeof r == "number")
        return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, r, t) : Uint8Array.prototype.lastIndexOf.call(e, r, t) : J(e, [r], t, n, i);
      throw new TypeError("val must be string, number or Buffer");
    }
    function J(e, r, t, n, i) {
      let u = 1, f = e.length, B = r.length;
      if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (e.length < 2 || r.length < 2)
          return -1;
        u = 2, f /= 2, B /= 2, t /= 2;
      }
      function S(C, m) {
        return u === 1 ? C[m] : C.readUInt16BE(m * u);
      }
      let U;
      if (i) {
        let C = -1;
        for (U = t; U < f; U++)
          if (S(e, U) === S(r, C === -1 ? 0 : U - C)) {
            if (C === -1 && (C = U), U - C + 1 === B) return C * u;
          } else
            C !== -1 && (U -= U - C), C = -1;
      } else
        for (t + B > f && (t = f - B), U = t; U >= 0; U--) {
          let C = true;
          for (let m = 0; m < B; m++)
            if (S(e, U + m) !== S(r, m)) {
              C = false;
              break;
            }
          if (C) return U;
        }
      return -1;
    }
    o.prototype.includes = function(r, t, n) {
      return this.indexOf(r, t, n) !== -1;
    }, o.prototype.indexOf = function(r, t, n) {
      return X(this, r, t, n, true);
    }, o.prototype.lastIndexOf = function(r, t, n) {
      return X(this, r, t, n, false);
    };
    function W(e, r, t, n) {
      t = Number(t) || 0;
      const i = e.length - t;
      n ? (n = Number(n), n > i && (n = i)) : n = i;
      const u = r.length;
      n > u / 2 && (n = u / 2);
      let f;
      for (f = 0; f < n; ++f) {
        const B = parseInt(r.substr(f * 2, 2), 16);
        if (fr(B)) return f;
        e[t + f] = B;
      }
      return f;
    }
    function z(e, r, t, n) {
      return Q(ur(r, e.length - t), e, t, n);
    }
    function nr(e, r, t, n) {
      return Q(Pr(r), e, t, n);
    }
    function ir(e, r, t, n) {
      return Q(gr(r), e, t, n);
    }
    function $(e, r, t, n) {
      return Q(Mr(r, e.length - t), e, t, n);
    }
    o.prototype.write = function(r, t, n, i) {
      if (t === void 0)
        i = "utf8", n = this.length, t = 0;
      else if (n === void 0 && typeof t == "string")
        i = t, n = this.length, t = 0;
      else if (isFinite(t))
        t = t >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const u = this.length - t;
      if ((n === void 0 || n > u) && (n = u), r.length > 0 && (n < 0 || t < 0) || t > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      i || (i = "utf8");
      let f = false;
      for (; ; )
        switch (i) {
          case "hex":
            return W(this, r, t, n);
          case "utf8":
          case "utf-8":
            return z(this, r, t, n);
          case "ascii":
          case "latin1":
          case "binary":
            return nr(this, r, t, n);
          case "base64":
            return ir(this, r, t, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return $(this, r, t, n);
          default:
            if (f) throw new TypeError("Unknown encoding: " + i);
            i = ("" + i).toLowerCase(), f = true;
        }
    }, o.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function G(e, r, t) {
      return r === 0 && t === e.length ? a.fromByteArray(e) : a.fromByteArray(e.slice(r, t));
    }
    function M(e, r, t) {
      t = Math.min(e.length, t);
      const n = [];
      let i = r;
      for (; i < t; ) {
        const u = e[i];
        let f = null, B = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (i + B <= t) {
          let S, U, C, m;
          switch (B) {
            case 1:
              u < 128 && (f = u);
              break;
            case 2:
              S = e[i + 1], (S & 192) === 128 && (m = (u & 31) << 6 | S & 63, m > 127 && (f = m));
              break;
            case 3:
              S = e[i + 1], U = e[i + 2], (S & 192) === 128 && (U & 192) === 128 && (m = (u & 15) << 12 | (S & 63) << 6 | U & 63, m > 2047 && (m < 55296 || m > 57343) && (f = m));
              break;
            case 4:
              S = e[i + 1], U = e[i + 2], C = e[i + 3], (S & 192) === 128 && (U & 192) === 128 && (C & 192) === 128 && (m = (u & 15) << 18 | (S & 63) << 12 | (U & 63) << 6 | C & 63, m > 65535 && m < 1114112 && (f = m));
          }
        }
        f === null ? (f = 65533, B = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), f = 56320 | f & 1023), n.push(f), i += B;
      }
      return R(n);
    }
    const g = 4096;
    function R(e) {
      const r = e.length;
      if (r <= g)
        return String.fromCharCode.apply(String, e);
      let t = "", n = 0;
      for (; n < r; )
        t += String.fromCharCode.apply(
          String,
          e.slice(n, n += g)
        );
      return t;
    }
    function j(e, r, t) {
      let n = "";
      t = Math.min(e.length, t);
      for (let i = r; i < t; ++i)
        n += String.fromCharCode(e[i] & 127);
      return n;
    }
    function v(e, r, t) {
      let n = "";
      t = Math.min(e.length, t);
      for (let i = r; i < t; ++i)
        n += String.fromCharCode(e[i]);
      return n;
    }
    function Rr(e, r, t) {
      const n = e.length;
      (!r || r < 0) && (r = 0), (!t || t < 0 || t > n) && (t = n);
      let i = "";
      for (let u = r; u < t; ++u)
        i += Nr[e[u]];
      return i;
    }
    function Sr(e, r, t) {
      const n = e.slice(r, t);
      let i = "";
      for (let u = 0; u < n.length - 1; u += 2)
        i += String.fromCharCode(n[u] + n[u + 1] * 256);
      return i;
    }
    o.prototype.slice = function(r, t) {
      const n = this.length;
      r = ~~r, t = t === void 0 ? n : ~~t, r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < r && (t = r);
      const i = this.subarray(r, t);
      return Object.setPrototypeOf(i, o.prototype), i;
    };
    function L(e, r, t) {
      if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
      if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
    }
    o.prototype.readUintLE = o.prototype.readUIntLE = function(r, t, n) {
      r = r >>> 0, t = t >>> 0, n || L(r, t, this.length);
      let i = this[r], u = 1, f = 0;
      for (; ++f < t && (u *= 256); )
        i += this[r + f] * u;
      return i;
    }, o.prototype.readUintBE = o.prototype.readUIntBE = function(r, t, n) {
      r = r >>> 0, t = t >>> 0, n || L(r, t, this.length);
      let i = this[r + --t], u = 1;
      for (; t > 0 && (u *= 256); )
        i += this[r + --t] * u;
      return i;
    }, o.prototype.readUint8 = o.prototype.readUInt8 = function(r, t) {
      return r = r >>> 0, t || L(r, 1, this.length), this[r];
    }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(r, t) {
      return r = r >>> 0, t || L(r, 2, this.length), this[r] | this[r + 1] << 8;
    }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(r, t) {
      return r = r >>> 0, t || L(r, 2, this.length), this[r] << 8 | this[r + 1];
    }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(r, t) {
      return r = r >>> 0, t || L(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
    }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(r, t) {
      return r = r >>> 0, t || L(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
    }, o.prototype.readBigUInt64LE = V(function(r) {
      r = r >>> 0, Y(r, "offset");
      const t = this[r], n = this[r + 7];
      (t === void 0 || n === void 0) && K(r, this.length - 8);
      const i = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, u = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + n * 2 ** 24;
      return BigInt(i) + (BigInt(u) << BigInt(32));
    }), o.prototype.readBigUInt64BE = V(function(r) {
      r = r >>> 0, Y(r, "offset");
      const t = this[r], n = this[r + 7];
      (t === void 0 || n === void 0) && K(r, this.length - 8);
      const i = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], u = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n;
      return (BigInt(i) << BigInt(32)) + BigInt(u);
    }), o.prototype.readIntLE = function(r, t, n) {
      r = r >>> 0, t = t >>> 0, n || L(r, t, this.length);
      let i = this[r], u = 1, f = 0;
      for (; ++f < t && (u *= 256); )
        i += this[r + f] * u;
      return u *= 128, i >= u && (i -= Math.pow(2, 8 * t)), i;
    }, o.prototype.readIntBE = function(r, t, n) {
      r = r >>> 0, t = t >>> 0, n || L(r, t, this.length);
      let i = t, u = 1, f = this[r + --i];
      for (; i > 0 && (u *= 256); )
        f += this[r + --i] * u;
      return u *= 128, f >= u && (f -= Math.pow(2, 8 * t)), f;
    }, o.prototype.readInt8 = function(r, t) {
      return r = r >>> 0, t || L(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
    }, o.prototype.readInt16LE = function(r, t) {
      r = r >>> 0, t || L(r, 2, this.length);
      const n = this[r] | this[r + 1] << 8;
      return n & 32768 ? n | 4294901760 : n;
    }, o.prototype.readInt16BE = function(r, t) {
      r = r >>> 0, t || L(r, 2, this.length);
      const n = this[r + 1] | this[r] << 8;
      return n & 32768 ? n | 4294901760 : n;
    }, o.prototype.readInt32LE = function(r, t) {
      return r = r >>> 0, t || L(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
    }, o.prototype.readInt32BE = function(r, t) {
      return r = r >>> 0, t || L(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
    }, o.prototype.readBigInt64LE = V(function(r) {
      r = r >>> 0, Y(r, "offset");
      const t = this[r], n = this[r + 7];
      (t === void 0 || n === void 0) && K(r, this.length - 8);
      const i = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (n << 24);
      return (BigInt(i) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
    }), o.prototype.readBigInt64BE = V(function(r) {
      r = r >>> 0, Y(r, "offset");
      const t = this[r], n = this[r + 7];
      (t === void 0 || n === void 0) && K(r, this.length - 8);
      const i = (t << 24) + // Overflow
      this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
      return (BigInt(i) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n);
    }), o.prototype.readFloatLE = function(r, t) {
      return r = r >>> 0, t || L(r, 4, this.length), y.read(this, r, true, 23, 4);
    }, o.prototype.readFloatBE = function(r, t) {
      return r = r >>> 0, t || L(r, 4, this.length), y.read(this, r, false, 23, 4);
    }, o.prototype.readDoubleLE = function(r, t) {
      return r = r >>> 0, t || L(r, 8, this.length), y.read(this, r, true, 52, 8);
    }, o.prototype.readDoubleBE = function(r, t) {
      return r = r >>> 0, t || L(r, 8, this.length), y.read(this, r, false, 52, 8);
    };
    function D(e, r, t, n, i, u) {
      if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (r > i || r < u) throw new RangeError('"value" argument is out of bounds');
      if (t + n > e.length) throw new RangeError("Index out of range");
    }
    o.prototype.writeUintLE = o.prototype.writeUIntLE = function(r, t, n, i) {
      if (r = +r, t = t >>> 0, n = n >>> 0, !i) {
        const B = Math.pow(2, 8 * n) - 1;
        D(this, r, t, n, B, 0);
      }
      let u = 1, f = 0;
      for (this[t] = r & 255; ++f < n && (u *= 256); )
        this[t + f] = r / u & 255;
      return t + n;
    }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(r, t, n, i) {
      if (r = +r, t = t >>> 0, n = n >>> 0, !i) {
        const B = Math.pow(2, 8 * n) - 1;
        D(this, r, t, n, B, 0);
      }
      let u = n - 1, f = 1;
      for (this[t + u] = r & 255; --u >= 0 && (f *= 256); )
        this[t + u] = r / f & 255;
      return t + n;
    }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(r, t, n) {
      return r = +r, t = t >>> 0, n || D(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
    }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || D(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
    }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || D(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
    }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || D(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
    }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || D(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
    };
    function hr(e, r, t, n, i) {
      dr(r, n, i, e, t, 7);
      let u = Number(r & BigInt(4294967295));
      e[t++] = u, u = u >> 8, e[t++] = u, u = u >> 8, e[t++] = u, u = u >> 8, e[t++] = u;
      let f = Number(r >> BigInt(32) & BigInt(4294967295));
      return e[t++] = f, f = f >> 8, e[t++] = f, f = f >> 8, e[t++] = f, f = f >> 8, e[t++] = f, t;
    }
    function cr(e, r, t, n, i) {
      dr(r, n, i, e, t, 7);
      let u = Number(r & BigInt(4294967295));
      e[t + 7] = u, u = u >> 8, e[t + 6] = u, u = u >> 8, e[t + 5] = u, u = u >> 8, e[t + 4] = u;
      let f = Number(r >> BigInt(32) & BigInt(4294967295));
      return e[t + 3] = f, f = f >> 8, e[t + 2] = f, f = f >> 8, e[t + 1] = f, f = f >> 8, e[t] = f, t + 8;
    }
    o.prototype.writeBigUInt64LE = V(function(r, t = 0) {
      return hr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
    }), o.prototype.writeBigUInt64BE = V(function(r, t = 0) {
      return cr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
    }), o.prototype.writeIntLE = function(r, t, n, i) {
      if (r = +r, t = t >>> 0, !i) {
        const S = Math.pow(2, 8 * n - 1);
        D(this, r, t, n, S - 1, -S);
      }
      let u = 0, f = 1, B = 0;
      for (this[t] = r & 255; ++u < n && (f *= 256); )
        r < 0 && B === 0 && this[t + u - 1] !== 0 && (B = 1), this[t + u] = (r / f >> 0) - B & 255;
      return t + n;
    }, o.prototype.writeIntBE = function(r, t, n, i) {
      if (r = +r, t = t >>> 0, !i) {
        const S = Math.pow(2, 8 * n - 1);
        D(this, r, t, n, S - 1, -S);
      }
      let u = n - 1, f = 1, B = 0;
      for (this[t + u] = r & 255; --u >= 0 && (f *= 256); )
        r < 0 && B === 0 && this[t + u + 1] !== 0 && (B = 1), this[t + u] = (r / f >> 0) - B & 255;
      return t + n;
    }, o.prototype.writeInt8 = function(r, t, n) {
      return r = +r, t = t >>> 0, n || D(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
    }, o.prototype.writeInt16LE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || D(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
    }, o.prototype.writeInt16BE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || D(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
    }, o.prototype.writeInt32LE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || D(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
    }, o.prototype.writeInt32BE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || D(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
    }, o.prototype.writeBigInt64LE = V(function(r, t = 0) {
      return hr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), o.prototype.writeBigInt64BE = V(function(r, t = 0) {
      return cr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function lr(e, r, t, n, i, u) {
      if (t + n > e.length) throw new RangeError("Index out of range");
      if (t < 0) throw new RangeError("Index out of range");
    }
    function pr(e, r, t, n, i) {
      return r = +r, t = t >>> 0, i || lr(e, r, t, 4), y.write(e, r, t, n, 23, 4), t + 4;
    }
    o.prototype.writeFloatLE = function(r, t, n) {
      return pr(this, r, t, true, n);
    }, o.prototype.writeFloatBE = function(r, t, n) {
      return pr(this, r, t, false, n);
    };
    function yr(e, r, t, n, i) {
      return r = +r, t = t >>> 0, i || lr(e, r, t, 8), y.write(e, r, t, n, 52, 8), t + 8;
    }
    o.prototype.writeDoubleLE = function(r, t, n) {
      return yr(this, r, t, true, n);
    }, o.prototype.writeDoubleBE = function(r, t, n) {
      return yr(this, r, t, false, n);
    }, o.prototype.copy = function(r, t, n, i) {
      if (!o.isBuffer(r)) throw new TypeError("argument should be a Buffer");
      if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= r.length && (t = r.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || r.length === 0 || this.length === 0) return 0;
      if (t < 0)
        throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
      if (i < 0) throw new RangeError("sourceEnd out of bounds");
      i > this.length && (i = this.length), r.length - t < i - n && (i = r.length - t + n);
      const u = i - n;
      return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, i) : Uint8Array.prototype.set.call(
        r,
        this.subarray(n, i),
        t
      ), u;
    }, o.prototype.fill = function(r, t, n, i) {
      if (typeof r == "string") {
        if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string")
          throw new TypeError("encoding must be a string");
        if (typeof i == "string" && !o.isEncoding(i))
          throw new TypeError("Unknown encoding: " + i);
        if (r.length === 1) {
          const f = r.charCodeAt(0);
          (i === "utf8" && f < 128 || i === "latin1") && (r = f);
        }
      } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
      if (t < 0 || this.length < t || this.length < n)
        throw new RangeError("Out of range index");
      if (n <= t)
        return this;
      t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, r || (r = 0);
      let u;
      if (typeof r == "number")
        for (u = t; u < n; ++u)
          this[u] = r;
      else {
        const f = o.isBuffer(r) ? r : o.from(r, i), B = f.length;
        if (B === 0)
          throw new TypeError('The value "' + r + '" is invalid for argument "value"');
        for (u = 0; u < n - t; ++u)
          this[u + t] = f[u % B];
      }
      return this;
    };
    const H = {};
    function or(e, r, t) {
      H[e] = class extends t {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: r.apply(this, arguments),
            writable: true,
            configurable: true
          }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
        }
        get code() {
          return e;
        }
        set code(i) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value: i,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${e}]: ${this.message}`;
        }
      };
    }
    or(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(e) {
        return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), or(
      "ERR_INVALID_ARG_TYPE",
      function(e, r) {
        return `The "${e}" argument must be of type number. Received type ${typeof r}`;
      },
      TypeError
    ), or(
      "ERR_OUT_OF_RANGE",
      function(e, r, t) {
        let n = `The value of "${e}" is out of range.`, i = t;
        return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? i = wr(String(t)) : typeof t == "bigint" && (i = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (i = wr(i)), i += "n"), n += ` It must be ${r}. Received ${i}`, n;
      },
      RangeError
    );
    function wr(e) {
      let r = "", t = e.length;
      const n = e[0] === "-" ? 1 : 0;
      for (; t >= n + 4; t -= 3)
        r = `_${e.slice(t - 3, t)}${r}`;
      return `${e.slice(0, t)}${r}`;
    }
    function Cr(e, r, t) {
      Y(r, "offset"), (e[r] === void 0 || e[r + t] === void 0) && K(r, e.length - (t + 1));
    }
    function dr(e, r, t, n, i, u) {
      if (e > t || e < r) {
        const f = typeof r == "bigint" ? "n" : "";
        let B;
        throw r === 0 || r === BigInt(0) ? B = `>= 0${f} and < 2${f} ** ${(u + 1) * 8}${f}` : B = `>= -(2${f} ** ${(u + 1) * 8 - 1}${f}) and < 2 ** ${(u + 1) * 8 - 1}${f}`, new H.ERR_OUT_OF_RANGE("value", B, e);
      }
      Cr(n, i, u);
    }
    function Y(e, r) {
      if (typeof e != "number")
        throw new H.ERR_INVALID_ARG_TYPE(r, "number", e);
    }
    function K(e, r, t) {
      throw Math.floor(e) !== e ? (Y(e, t), new H.ERR_OUT_OF_RANGE("offset", "an integer", e)) : r < 0 ? new H.ERR_BUFFER_OUT_OF_BOUNDS() : new H.ERR_OUT_OF_RANGE(
        "offset",
        `>= 0 and <= ${r}`,
        e
      );
    }
    const Tr = /[^+/0-9A-Za-z-_]/g;
    function br(e) {
      if (e = e.split("=")[0], e = e.trim().replace(Tr, ""), e.length < 2) return "";
      for (; e.length % 4 !== 0; )
        e = e + "=";
      return e;
    }
    function ur(e, r) {
      r = r || 1 / 0;
      let t;
      const n = e.length;
      let i = null;
      const u = [];
      for (let f = 0; f < n; ++f) {
        if (t = e.charCodeAt(f), t > 55295 && t < 57344) {
          if (!i) {
            if (t > 56319) {
              (r -= 3) > -1 && u.push(239, 191, 189);
              continue;
            } else if (f + 1 === n) {
              (r -= 3) > -1 && u.push(239, 191, 189);
              continue;
            }
            i = t;
            continue;
          }
          if (t < 56320) {
            (r -= 3) > -1 && u.push(239, 191, 189), i = t;
            continue;
          }
          t = (i - 55296 << 10 | t - 56320) + 65536;
        } else i && (r -= 3) > -1 && u.push(239, 191, 189);
        if (i = null, t < 128) {
          if ((r -= 1) < 0) break;
          u.push(t);
        } else if (t < 2048) {
          if ((r -= 2) < 0) break;
          u.push(
            t >> 6 | 192,
            t & 63 | 128
          );
        } else if (t < 65536) {
          if ((r -= 3) < 0) break;
          u.push(
            t >> 12 | 224,
            t >> 6 & 63 | 128,
            t & 63 | 128
          );
        } else if (t < 1114112) {
          if ((r -= 4) < 0) break;
          u.push(
            t >> 18 | 240,
            t >> 12 & 63 | 128,
            t >> 6 & 63 | 128,
            t & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return u;
    }
    function Pr(e) {
      const r = [];
      for (let t = 0; t < e.length; ++t)
        r.push(e.charCodeAt(t) & 255);
      return r;
    }
    function Mr(e, r) {
      let t, n, i;
      const u = [];
      for (let f = 0; f < e.length && !((r -= 2) < 0); ++f)
        t = e.charCodeAt(f), n = t >> 8, i = t % 256, u.push(i), u.push(n);
      return u;
    }
    function gr(e) {
      return a.toByteArray(br(e));
    }
    function Q(e, r, t, n) {
      let i;
      for (i = 0; i < n && !(i + t >= r.length || i >= e.length); ++i)
        r[i + t] = e[i];
      return i;
    }
    function q(e, r) {
      return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
    }
    function fr(e) {
      return e !== e;
    }
    const Nr = function() {
      const e = "0123456789abcdef", r = new Array(256);
      for (let t = 0; t < 16; ++t) {
        const n = t * 16;
        for (let i = 0; i < 16; ++i)
          r[n + i] = e[t] + e[i];
      }
      return r;
    }();
    function V(e) {
      return typeof BigInt > "u" ? Lr : e;
    }
    function Lr() {
      throw new Error("BigInt not supported");
    }
  }(sr)), sr;
}
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Ir;
function qr() {
  return Ir || (Ir = 1, function(c, a) {
    var y = $r(), w = y.Buffer;
    function d(s, o) {
      for (var E in s)
        o[E] = s[E];
    }
    w.from && w.alloc && w.allocUnsafe && w.allocUnsafeSlow ? c.exports = y : (d(y, a), a.Buffer = x);
    function x(s, o, E) {
      return w(s, o, E);
    }
    x.prototype = Object.create(w.prototype), d(w, x), x.from = function(s, o, E) {
      if (typeof s == "number")
        throw new TypeError("Argument must not be a number");
      return w(s, o, E);
    }, x.alloc = function(s, o, E) {
      if (typeof s != "number")
        throw new TypeError("Argument must be a number");
      var A = w(s);
      return o !== void 0 ? typeof E == "string" ? A.fill(o, E) : A.fill(o) : A.fill(0), A;
    }, x.allocUnsafe = function(s) {
      if (typeof s != "number")
        throw new TypeError("Argument must be a number");
      return w(s);
    }, x.allocUnsafeSlow = function(s) {
      if (typeof s != "number")
        throw new TypeError("Argument must be a number");
      return y.SlowBuffer(s);
    };
  }(tr, tr.exports)), tr.exports;
}
var Fr;
function Gr() {
  if (Fr) return rr.exports;
  Fr = 1;
  var c = 65536, a = 4294967295;
  function y() {
    throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`);
  }
  var w = qr().Buffer, d = Br.crypto || Br.msCrypto;
  d && d.getRandomValues ? rr.exports = x : rr.exports = y;
  function x(s, o) {
    if (s > a) throw new RangeError("requested too many random bytes");
    var E = w.allocUnsafe(s);
    if (s > 0)
      if (s > c)
        for (var A = 0; A < s; A += c)
          d.getRandomValues(E.slice(A, A + c));
      else
        d.getRandomValues(E);
    return typeof o == "function" ? process.nextTick(function() {
      o(null, E);
    }) : E;
  }
  return rr.exports;
}
var ar, Ar;
function Vr() {
  if (Ar) return ar;
  Ar = 1;
  var c = Gr(), a = 16, y = b(), w = new RegExp('(\\\\)?"@__(F|R|D|M|S|A|U|I|B|L)-' + y + '-(\\d+)__@"', "g"), d = /\{\s*\[native code\]\s*\}/g, x = /function.*?\(/, s = /.*?=>.*?/, o = /[<>\/\u2028\u2029]/g, E = ["*", "async"], A = {
    "<": "\\u003C",
    ">": "\\u003E",
    "/": "\\u002F",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  function T(h) {
    return A[h];
  }
  function b() {
    for (var h = c(a), p = "", l = 0; l < a; ++l)
      p += h[l].toString(16);
    return p;
  }
  function O(h) {
    var p = [];
    for (var l in h)
      typeof h[l] == "function" && p.push(l);
    for (var I = 0; I < p.length; I++)
      delete h[p[I]];
  }
  return ar = function h(p, l) {
    l || (l = {}), (typeof l == "number" || typeof l == "string") && (l = { space: l });
    var I = [], P = [], _ = [], N = [], k = [], F = [], X = [], J = [], W = [], z = [];
    function nr(G, M) {
      if (l.ignoreFunction && O(M), !M && M !== void 0 && M !== BigInt(0))
        return M;
      var g = this[G], R = typeof g;
      if (R === "object") {
        if (g instanceof RegExp)
          return "@__R-" + y + "-" + (P.push(g) - 1) + "__@";
        if (g instanceof Date)
          return "@__D-" + y + "-" + (_.push(g) - 1) + "__@";
        if (g instanceof Map)
          return "@__M-" + y + "-" + (N.push(g) - 1) + "__@";
        if (g instanceof Set)
          return "@__S-" + y + "-" + (k.push(g) - 1) + "__@";
        if (g instanceof Array) {
          var j = g.filter(function() {
            return true;
          }).length !== g.length;
          if (j)
            return "@__A-" + y + "-" + (F.push(g) - 1) + "__@";
        }
        if (g instanceof URL)
          return "@__L-" + y + "-" + (z.push(g) - 1) + "__@";
      }
      return R === "function" ? "@__F-" + y + "-" + (I.push(g) - 1) + "__@" : R === "undefined" ? "@__U-" + y + "-" + (X.push(g) - 1) + "__@" : R === "number" && !isNaN(g) && !isFinite(g) ? "@__I-" + y + "-" + (J.push(g) - 1) + "__@" : R === "bigint" ? "@__B-" + y + "-" + (W.push(g) - 1) + "__@" : M;
    }
    function ir(G) {
      var M = G.toString();
      if (d.test(M))
        throw new TypeError("Serializing native function: " + G.name);
      if (x.test(M) || s.test(M))
        return M;
      var g = M.indexOf("("), R = M.substr(0, g).trim().split(" ").filter(function(v) {
        return v.length > 0;
      }), j = R.filter(function(v) {
        return E.indexOf(v) === -1;
      });
      return j.length > 0 ? (R.indexOf("async") > -1 ? "async " : "") + "function" + (R.join("").indexOf("*") > -1 ? "*" : "") + M.substr(g) : M;
    }
    if (l.ignoreFunction && typeof p == "function" && (p = void 0), p === void 0)
      return String(p);
    var $;
    return l.isJSON && !l.space ? $ = JSON.stringify(p) : $ = JSON.stringify(p, l.isJSON ? null : nr, l.space), typeof $ != "string" ? String($) : (l.unsafe !== true && ($ = $.replace(o, T)), I.length === 0 && P.length === 0 && _.length === 0 && N.length === 0 && k.length === 0 && F.length === 0 && X.length === 0 && J.length === 0 && W.length === 0 && z.length === 0 ? $ : $.replace(w, function(G, M, g, R) {
      if (M)
        return G;
      if (g === "D")
        return 'new Date("' + _[R].toISOString() + '")';
      if (g === "R")
        return "new RegExp(" + h(P[R].source) + ', "' + P[R].flags + '")';
      if (g === "M")
        return "new Map(" + h(Array.from(N[R].entries()), l) + ")";
      if (g === "S")
        return "new Set(" + h(Array.from(k[R].values()), l) + ")";
      if (g === "A")
        return "Array.prototype.slice.call(" + h(Object.assign({ length: F[R].length }, F[R]), l) + ")";
      if (g === "U")
        return "undefined";
      if (g === "I")
        return J[R];
      if (g === "B")
        return 'BigInt("' + W[R] + '")';
      if (g === "L")
        return "new URL(" + h(z[R].toString(), l) + ")";
      var j = I[R];
      return ir(j);
    }));
  }, ar;
}
var jr = Vr();
const Jr = /* @__PURE__ */ Dr(jr), _r = "sanity:client", Ur = "\0" + _r;
function Hr(c) {
  return {
    name: "sanity:client",
    resolveId(a) {
      if (a === _r)
        return Ur;
    },
    load(a) {
      if (a === Ur)
        return `
          import { createClient } from "@sanity/client";
          export const sanityClient = createClient(
            ${Jr(c)}
          );
        `;
    }
  };
}
function Yr(c) {
  const a = "sanity:studio", y = a;
  return {
    name: "sanity:studio",
    resolveId(w) {
      return w === a ? y : null;
    },
    async load(w) {
      if (w === a) {
        const d = await this.resolve("/sanity.config");
        if (!d)
          throw new Error(
            "[@sanity/astro]: Sanity Studio requires a `sanity.config.ts|js` file in your project root."
          );
        if (!c.studioBasePath)
          throw new Error(
            "[@sanity/astro]: The `studioBasePath` option is required in `astro.config.mjs`. For example — `studioBasePath: '/admin'`"
          );
        return `
        import studioConfig from "${d.id}";

        if (studioConfig.basePath) {
          if (studioConfig.basePath !== "/${c.studioBasePath}") {
            console.warn(
              "[@sanity/astro]: This integration ignores the basePath setting in sanity.config.ts|js. To set the basePath for Sanity Studio, use the studioBasePath option in astro.config.mjs and remove it from sanity.config.ts.");
          }
        }

        export const config = {
          ...studioConfig,
          // override basePath from sanity.config.ts|js with plugin setting
          basePath: "${c.studioBasePath}",
        }
        `;
      }
      return null;
    }
  };
}
function Xr() {
  const c = "sanity:studio-hash-router", a = c;
  return {
    name: "sanity:studio-hash-router",
    resolveId(y) {
      return y === c ? a : null;
    },
    async load(y) {
      if (y === c) {
        const w = await this.resolve("/sanity.config");
        if (!w)
          throw new Error(
            "[@sanity/astro]: Sanity Studio requires a `sanity.config.ts|js` file in your project root."
          );
        return `export {default} from "${w.id}";`;
      }
      return null;
    }
  };
}
const Wr = {
  apiVersion: "v2023-08-24"
};
function vr(c = {}) {
  const a = c.studioBasePath, y = c.studioRouterHistory === "hash" ? "hash" : "browser", w = c;
  if (delete w.studioBasePath, delete w.studioRouterHistory, a && a.match(/https?:\/\//))
    throw new Error(
      "[@sanity/astro]: The `studioBasePath` option should be a relative URL. For example — `studioBasePath: '/admin'`"
    );
  return {
    name: "@sanity/astro",
    hooks: {
      "astro:config:setup": ({ injectScript: d, injectRoute: x, updateConfig: s }) => {
        s({
          vite: {
            optimizeDeps: {
              include: [
                "react-compiler-runtime",
                "react-is",
                "styled-components",
                "lodash/startCase.js"
              ]
            },
            plugins: [
              Hr({
                ...Wr,
                ...w
              }),
              Yr({ studioBasePath: a }),
              Xr()
            ]
          }
        }), a && x(y === "hash" ? {
          // @ts-expect-error
          entryPoint: "@sanity/astro/studio/studio-route-hash.astro",
          // Astro <= 3
          entrypoint: "@sanity/astro/studio/studio-route-hash.astro",
          // Astro > 3
          pattern: `/${a}`,
          prerender: true
        } : {
          // @ts-expect-error
          entryPoint: "@sanity/astro/studio/studio-route.astro",
          // Astro <= 3
          entrypoint: "@sanity/astro/studio/studio-route.astro",
          // Astro > 3
          pattern: `/${a}/[...params]`,
          prerender: false
        }), d(
          "page-ssr",
          `
          import { sanityClient } from "sanity:client";
          globalThis.sanityClient = sanityClient;
          `
        );
      }
    }
  };
}

const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Studio", vr, {})}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/pages/studio/[...path].astro", void 0);

const $$file = "/Users/maxwellkjr/Projects/bymjcodes/src/pages/studio/[...path].astro";
const $$url = "/studio/[...path]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
