!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(r, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 30)
}([function(e, t, n) {
    "use strict";
    n.d(t, "k", function() {
        return L
    }),
    n.d(t, "i", function() {
        return W
    }),
    n.d(t, "f", function() {
        return h
    }),
    n.d(t, "h", function() {
        return h
    }),
    n.d(t, "b", function() {
        return m
    }),
    n.d(t, "g", function() {
        return g
    }),
    n.d(t, "a", function() {
        return y
    }),
    n.d(t, "d", function() {
        return U
    }),
    n.d(t, "e", function() {
        return j
    }),
    n.d(t, "l", function() {
        return C
    }),
    n.d(t, "c", function() {
        return O
    }),
    n.d(t, "j", function() {
        return r
    });
    var r, o, i, a, s, l, u = {}, c = [], d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function p(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function f(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }
    function h(e, t, n) {
        var r, o, i, a = arguments, s = {};
        for (i in t)
            "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
        if (arguments.length > 3)
            for (n = [n],
            i = 3; i < arguments.length; i++)
                n.push(a[i]);
        if (null != n && (s.children = n),
        "function" == typeof e && null != e.defaultProps)
            for (i in e.defaultProps)
                void 0 === s[i] && (s[i] = e.defaultProps[i]);
        return v(e, s, r, o, null)
    }
    function v(e, t, n, o, i) {
        var a = {
            type: e,
            props: t,
            key: n,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: i
        };
        return null == i && (a.__v = a),
        null != r.vnode && r.vnode(a),
        a
    }
    function g() {
        return {
            current: null
        }
    }
    function m(e) {
        return e.children
    }
    function y(e, t) {
        this.props = e,
        this.context = t
    }
    function b(e, t) {
        if (null == t)
            return e.__ ? b(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e)
                return n.__e;
        return "function" == typeof e.type ? b(e) : null
    }
    function S(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null,
            t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                }
            return S(e)
        }
    }
    function E(e) {
        (!e.__d && (e.__d = !0) && o.push(e) && !w.__r++ || a !== r.debounceRendering) && ((a = r.debounceRendering) || i)(w)
    }
    function w() {
        for (var e; w.__r = o.length; )
            e = o.sort(function(e, t) {
                return e.__v.__b - t.__v.__b
            }),
            o = [],
            e.some(function(e) {
                var t, n, r, o, i, a, s;
                e.__d && (a = (i = (t = e).__v).__e,
                (s = t.__P) && (n = [],
                (r = p({}, i)).__v = r,
                o = P(s, i, r, t.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [a] : null, n, null == a ? b(i) : a, i.__h),
                I(n, i),
                o != a && S(i)))
            })
    }
    function D(e, t, n, r, o, i, a, s, l, d) {
        var p, h, g, y, S, E, w, D = r && r.__k || c, C = D.length;
        for (l == u && (l = null != a ? a[0] : C ? b(r, 0) : null),
        n.__k = [],
        p = 0; p < t.length; p++)
            if (null != (y = n.__k[p] = null == (y = t[p]) || "boolean" == typeof y ? null : "string" == typeof y || "number" == typeof y ? v(null, y, null, null, y) : Array.isArray(y) ? v(m, {
                children: y
            }, null, null, null) : null != y.__e || null != y.__c ? v(y.type, y.props, y.key, null, y.__v) : y)) {
                if (y.__ = n,
                y.__b = n.__b + 1,
                null === (g = D[p]) || g && y.key == g.key && y.type === g.type)
                    D[p] = void 0;
                else
                    for (h = 0; h < C; h++) {
                        if ((g = D[h]) && y.key == g.key && y.type === g.type) {
                            D[h] = void 0;
                            break
                        }
                        g = null
                    }
                S = P(e, y, g = g || u, o, i, a, s, l, d),
                (h = y.ref) && g.ref != h && (w || (w = []),
                g.ref && w.push(g.ref, null, y),
                w.push(h, y.__c || S, y)),
                null != S ? (null == E && (E = S),
                l = R(e, y, g, D, a, S, l),
                d || "option" != n.type ? "function" == typeof n.type && (n.__d = l) : e.value = "") : l && g.__e == l && l.parentNode != e && (l = b(g))
            }
        if (n.__e = E,
        null != a && "function" != typeof n.type)
            for (p = a.length; p--; )
                null != a[p] && f(a[p]);
        for (p = C; p--; )
            null != D[p] && O(D[p], D[p]);
        if (w)
            for (p = 0; p < w.length; p++)
                H(w[p], w[++p], w[++p])
    }
    function C(e, t) {
        return t = t || [],
        null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some(function(e) {
            C(e, t)
        }) : t.push(e)),
        t
    }
    function R(e, t, n, r, o, i, a) {
        var s, l, u;
        if (void 0 !== t.__d)
            s = t.__d,
            t.__d = void 0;
        else if (o == n || i != a || null == i.parentNode)
            e: if (null == a || a.parentNode !== e)
                e.appendChild(i),
                s = null;
            else {
                for (l = a,
                u = 0; (l = l.nextSibling) && u < r.length; u += 2)
                    if (l == i)
                        break e;
                e.insertBefore(i, a),
                s = a
            }
        return void 0 !== s ? s : i.nextSibling
    }
    function T(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || d.test(t) ? n : n + "px"
    }
    function x(e, t, n, r, o) {
        var i, a, s;
        if (o && "className" == t && (t = "class"),
        "style" === t)
            if ("string" == typeof n)
                e.style.cssText = n;
            else {
                if ("string" == typeof r && (e.style.cssText = r = ""),
                r)
                    for (t in r)
                        n && t in n || T(e.style, t, "");
                if (n)
                    for (t in n)
                        r && n[t] === r[t] || T(e.style, t, n[t])
            }
        else
            "o" === t[0] && "n" === t[1] ? (i = t !== (t = t.replace(/Capture$/, "")),
            (a = t.toLowerCase())in e && (t = a),
            t = t.slice(2),
            e.l || (e.l = {}),
            e.l[t + i] = n,
            s = i ? M : k,
            n ? r || e.addEventListener(t, s, i) : e.removeEventListener(t, s, i)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n))
    }
    function k(e) {
        this.l[e.type + !1](r.event ? r.event(e) : e)
    }
    function M(e) {
        this.l[e.type + !0](r.event ? r.event(e) : e)
    }
    function _(e, t, n) {
        var r, o;
        for (r = 0; r < e.__k.length; r++)
            (o = e.__k[r]) && (o.__ = e,
            o.__e && ("function" == typeof o.type && o.__k.length > 1 && _(o, t, n),
            t = R(n, o, o, e.__k, null, o.__e, t),
            "function" == typeof e.type && (e.__d = t)))
    }
    function P(e, t, n, o, i, a, s, l, u) {
        var c, d, f, h, v, g, b, S, E, w, C, R = t.type;
        if (void 0 !== t.constructor)
            return null;
        null != n.__h && (u = n.__h,
        l = t.__e = n.__e,
        t.__h = null,
        a = [l]),
        (c = r.__b) && c(t);
        try {
            e: if ("function" == typeof R) {
                if (S = t.props,
                E = (c = R.contextType) && o[c.__c],
                w = c ? E ? E.props.value : c.__ : o,
                n.__c ? b = (d = t.__c = n.__c).__ = d.__E : ("prototype"in R && R.prototype.render ? t.__c = d = new R(S,w) : (t.__c = d = new y(S,w),
                d.constructor = R,
                d.render = A),
                E && E.sub(d),
                d.props = S,
                d.state || (d.state = {}),
                d.context = w,
                d.__n = o,
                f = d.__d = !0,
                d.__h = []),
                null == d.__s && (d.__s = d.state),
                null != R.getDerivedStateFromProps && (d.__s == d.state && (d.__s = p({}, d.__s)),
                p(d.__s, R.getDerivedStateFromProps(S, d.__s))),
                h = d.props,
                v = d.state,
                f)
                    null == R.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                    null != d.componentDidMount && d.__h.push(d.componentDidMount);
                else {
                    if (null == R.getDerivedStateFromProps && S !== h && null != d.componentWillReceiveProps && d.componentWillReceiveProps(S, w),
                    !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(S, d.__s, w) || t.__v === n.__v) {
                        d.props = S,
                        d.state = d.__s,
                        t.__v !== n.__v && (d.__d = !1),
                        d.__v = t,
                        t.__e = n.__e,
                        t.__k = n.__k,
                        d.__h.length && s.push(d),
                        _(t, l, e);
                        break e
                    }
                    null != d.componentWillUpdate && d.componentWillUpdate(S, d.__s, w),
                    null != d.componentDidUpdate && d.__h.push(function() {
                        d.componentDidUpdate(h, v, g)
                    })
                }
                d.context = w,
                d.props = S,
                d.state = d.__s,
                (c = r.__r) && c(t),
                d.__d = !1,
                d.__v = t,
                d.__P = e,
                c = d.render(d.props, d.state, d.context),
                d.state = d.__s,
                null != d.getChildContext && (o = p(p({}, o), d.getChildContext())),
                f || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(h, v)),
                C = null != c && c.type == m && null == c.key ? c.props.children : c,
                D(e, Array.isArray(C) ? C : [C], t, n, o, i, a, s, l, u),
                d.base = t.__e,
                t.__h = null,
                d.__h.length && s.push(d),
                b && (d.__E = d.__ = null),
                d.__e = !1
            } else
                null == a && t.__v === n.__v ? (t.__k = n.__k,
                t.__e = n.__e) : t.__e = N(n.__e, t, n, o, i, a, s, u);
            (c = r.diffed) && c(t)
        } catch (e) {
            t.__v = null,
            (u || null != a) && (t.__e = l,
            t.__h = !!u,
            a[a.indexOf(l)] = null),
            r.__e(e, t, n)
        }
        return t.__e
    }
    function I(e, t) {
        r.__c && r.__c(t, e),
        e.some(function(t) {
            try {
                e = t.__h,
                t.__h = [],
                e.some(function(e) {
                    e.call(t)
                })
            } catch (e) {
                r.__e(e, t.__v)
            }
        })
    }
    function N(e, t, n, r, o, i, a, s) {
        var l, d, p, f, h, v = n.props, g = t.props;
        if (o = "svg" === t.type || o,
        null != i)
            for (l = 0; l < i.length; l++)
                if (null != (d = i[l]) && ((null === t.type ? 3 === d.nodeType : d.localName === t.type) || e == d)) {
                    e = d,
                    i[l] = null;
                    break
                }
        if (null == e) {
            if (null === t.type)
                return document.createTextNode(g);
            e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, g.is && {
                is: g.is
            }),
            i = null,
            s = !1
        }
        if (null === t.type)
            v === g || s && e.data === g || (e.data = g);
        else {
            if (null != i && (i = c.slice.call(e.childNodes)),
            p = (v = n.props || u).dangerouslySetInnerHTML,
            f = g.dangerouslySetInnerHTML,
            !s) {
                if (null != i)
                    for (v = {},
                    h = 0; h < e.attributes.length; h++)
                        v[e.attributes[h].name] = e.attributes[h].value;
                (f || p) && (f && (p && f.__html == p.__html || f.__html === e.innerHTML) || (e.innerHTML = f && f.__html || ""))
            }
            (function(e, t, n, r, o) {
                var i;
                for (i in n)
                    "children" === i || "key" === i || i in t || x(e, i, null, n[i], r);
                for (i in t)
                    o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || x(e, i, t[i], n[i], r)
            }
            )(e, g, v, o, s),
            f ? t.__k = [] : (l = t.props.children,
            D(e, Array.isArray(l) ? l : [l], t, n, r, "foreignObject" !== t.type && o, i, a, u, s)),
            s || ("value"in g && void 0 !== (l = g.value) && (l !== e.value || "progress" === t.type && !l) && x(e, "value", l, v.value, !1),
            "checked"in g && void 0 !== (l = g.checked) && l !== e.checked && x(e, "checked", l, v.checked, !1))
        }
        return e
    }
    function H(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            r.__e(e, n)
        }
    }
    function O(e, t, n) {
        var o, i, a;
        if (r.unmount && r.unmount(e),
        (o = e.ref) && (o.current && o.current !== e.__e || H(o, null, t)),
        n || "function" == typeof e.type || (n = null != (i = e.__e)),
        e.__e = e.__d = void 0,
        null != (o = e.__c)) {
            if (o.componentWillUnmount)
                try {
                    o.componentWillUnmount()
                } catch (e) {
                    r.__e(e, t)
                }
            o.base = o.__P = null
        }
        if (o = e.__k)
            for (a = 0; a < o.length; a++)
                o[a] && O(o[a], t, n);
        null != i && f(i)
    }
    function A(e, t, n) {
        return this.constructor(e, n)
    }
    function L(e, t, n) {
        var o, i, a;
        r.__ && r.__(e, t),
        i = (o = n === s) ? null : n && n.__k || t.__k,
        e = h(m, null, [e]),
        a = [],
        P(t, (o ? t : n || t).__k = e, i || u, u, void 0 !== t.ownerSVGElement, n && !o ? [n] : i ? null : t.childNodes.length ? c.slice.call(t.childNodes) : null, a, n || u, o),
        I(a, e)
    }
    function W(e, t) {
        L(e, t, s)
    }
    function U(e, t, n) {
        var r, o, i, a = arguments, s = p({}, e.props);
        for (i in t)
            "key" == i ? r = t[i] : "ref" == i ? o = t[i] : s[i] = t[i];
        if (arguments.length > 3)
            for (n = [n],
            i = 3; i < arguments.length; i++)
                n.push(a[i]);
        return null != n && (s.children = n),
        v(e.type, s, r || e.key, o || e.ref, null)
    }
    function j(e, t) {
        var n = {
            __c: t = "__cC" + l++,
            __: e,
            Consumer: function(e, t) {
                return e.children(t)
            },
            Provider: function(e, n, r) {
                return this.getChildContext || (n = [],
                (r = {})[t] = this,
                this.getChildContext = function() {
                    return r
                }
                ,
                this.shouldComponentUpdate = function(e) {
                    this.props.value !== e.value && n.some(E)
                }
                ,
                this.sub = function(e) {
                    n.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function() {
                        n.splice(n.indexOf(e), 1),
                        t && t.call(e)
                    }
                }
                ),
                e.children
            }
        };
        return n.Provider.__ = n.Consumer.contextType = n
    }
    r = {
        __e: function(e, t) {
            for (var n, r, o, i = t.__h; t = t.__; )
                if ((n = t.__c) && !n.__)
                    try {
                        if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)),
                        o = n.__d),
                        null != n.componentDidCatch && (n.componentDidCatch(e),
                        o = n.__d),
                        o)
                            return t.__h = i,
                            n.__E = n
                    } catch (t) {
                        e = t
                    }
            throw e
        }
    },
    y.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state),
        "function" == typeof e && (e = e(p({}, n), this.props)),
        e && p(n, e),
        null != e && this.__v && (t && this.__h.push(t),
        E(this))
    }
    ,
    y.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0,
        e && this.__h.push(e),
        E(this))
    }
    ,
    y.prototype.render = m,
    o = [],
    i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
    w.__r = 0,
    s = u,
    l = 0
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return o
    }),
    n.d(t, "a", function() {
        return i
    });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function o(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var i = function() {
        return (i = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
}
, , , , function(e, t, n) {
    !function() {
        "use strict";
        var t = "ontouchstart"in document.documentElement
          , n = t ? "touchend" : "click"
          , r = [].forEach
          , o = function() {
            for (var e = "transitionend webkitTransitionEnd oTransitionEnd otransitionend".split(" "), t = 0; t < 4; ++t)
                if ("on" + e[t].toLowerCase()in window)
                    return e[t];
            return e[0]
        }();
        function i(e, t, n) {
            n ? e.add(t) : e.remove(t)
        }
        var a, s, l, u = (a = {},
        s = {},
        function e(t, n, r) {
            r = +(r || 6);
            var o = t = t || "_";
            if (n) {
                var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (o += (i += i.toLowerCase())[Math.round(Math.random() * (i.length - 1))],
                i += "0123456789"; o.length < r; )
                    o += i[Math.round(Math.random() * (i.length - 1))]
            } else
                s[t] || (s[t] = 0),
                o += ++s[t];
            return a[o] || document.getElementById(o) ? e(t, n) : (a[o] = !0,
            o)
        }
        ), c = function(e) {
            if (n = document.documentElement.style,
            (t = e.toLowerCase())in n)
                return t;
            for (var t, n, r = ((r = "Webkit Moz Ms O Khtml").toLowerCase() + r).split(" "), o = 0; o < 10; ++o)
                if ((t = r[o] + e)in n)
                    return t;
            return ""
        }("Transform"), d = function(e) {
            var t = document.createElement("div").style
              , n = [["translateY(", ")"], ["translate3d(0,", ",0)"]];
            try {
                t[e] = n[1].join("1px")
            } catch (e) {}
            return n[+!!t[e]] === n[1]
        }(c), p = [], f = function(e, r) {
            var o, a, s, l, f, h, v, g, m, y = this, b = r.firstElementChild, S = r.lastElementChild, E = r.classList, w = e.openClass, D = e.closeClass, C = !e.noKeys, R = e.useBorders, T = !e.noTransforms && c, x = e.onToggle, k = !1;
            Object.defineProperties(y, {
                fit: {
                    value: function() {
                        var e = y.headingHeight;
                        y.open && (e += S.scrollHeight);
                        R && (e += y.elBorder);
                        y.height = e
                    }
                },
                ariaEnabled: {
                    get: function() {
                        return l
                    },
                    set: function(e) {
                        (e = !!e) != !!l && (l = e,
                        e ? (b.setAttribute("role", "tab"),
                        S.setAttribute("role", "tabpanel"),
                        function() {
                            var e, t = r.id;
                            b.id || S.id ? S.id ? b.id || (b.id = (t || S.id) + "-heading") : S.id = (t || b.id) + "-content" : (e = t || u("a"),
                            b.id = e + "-heading",
                            S.id = e + "-content");
                            var n = function(e) {
                                return document.querySelectorAll("#" + e)
                            };
                            for (; n(S.id).length > 1 || n(b.id).length > 1; )
                                e = u("a"),
                                S.id = e + "-content",
                                b.id = e + "-heading";
                            b.setAttribute("aria-controls", S.id),
                            S.setAttribute("aria-labelledby", b.id)
                        }(),
                        b.setAttribute("aria-selected", !!o),
                        b.setAttribute("aria-expanded", !!o),
                        S.setAttribute("aria-hidden", !o)) : (b.removeAttribute("role"),
                        b.removeAttribute("aria-controls"),
                        b.removeAttribute("aria-selected"),
                        b.removeAttribute("aria-expanded"),
                        S.removeAttribute("role"),
                        S.removeAttribute("aria-labelledby"),
                        S.removeAttribute("aria-hidden")))
                    }
                },
                open: {
                    get: function() {
                        return void 0 === o && (o = E.contains(w),
                        i(E, D, !o)),
                        o
                    },
                    set: function(t) {
                        if ((t = !!t) !== o) {
                            if ("function" == typeof x && !1 === x.call(null, y, t))
                                return;
                            if (i(E, w, t),
                            i(E, D, !t),
                            o = t,
                            l && (b.setAttribute("aria-selected", t),
                            b.setAttribute("aria-expanded", t),
                            S.setAttribute("aria-hidden", !t)),
                            y.needsRefresh ? (delete y.needsRefresh,
                            e.refresh()) : e.update(),
                            e.modal && o)
                                for (var n, r = 0, a = e.folds.length; r < a; ++r)
                                    y !== (n = e.folds[r]) && (n.open = !1)
                        }
                    }
                },
                disabled: {
                    get: function() {
                        return k
                    },
                    set: function(e) {
                        if ((e = !!e) !== k) {
                            var o = r.style;
                            (k = e) ? (o.height = null,
                            T ? o[c] = null : o.top = null,
                            t && b.removeEventListener("touchstart", v),
                            b.removeEventListener(n, m),
                            E.remove(w, D),
                            g && (b.removeEventListener("keydown", g),
                            b.removeAttribute("tabindex")),
                            l && (y.ariaEnabled = !1,
                            l = !0)) : (o.height = s + "px",
                            T ? o[c] = d ? "translate3D(0," + a + "px,0)" : "translateY(" + a + "px)" : o.top = a + "px",
                            t && b.addEventListener("touchstart", v),
                            b.addEventListener(n, m),
                            g && (b.addEventListener("keydown", g),
                            b.tabIndex = 0))
                        }
                    }
                },
                y: {
                    get: function() {
                        return void 0 === a ? a = parseInt(r.style.top) || 0 : a
                    },
                    set: function(e) {
                        (e = +e) !== a && (a = e,
                        T ? r.style[c] = d ? "translate3D(0," + e + "px,0)" : "translateY(" + e + "px)" : r.style.top = e + "px")
                    }
                },
                height: {
                    get: function() {
                        return void 0 === s && (s = y.headingHeight + S.scrollHeight,
                        r.style.height = s + "px"),
                        s
                    },
                    set: function(e) {
                        e && (e = +e) !== s && (r.style.height = e + "px",
                        s = e)
                    }
                },
                headingHeight: {
                    get: function() {
                        return b.scrollHeight + y.heightOffset + (R ? y.headingBorder : 0)
                    }
                },
                headingBorder: {
                    get: function() {
                        return (b.offsetHeight || 0) - (b.clientHeight || 0)
                    }
                },
                elHeight: {
                    get: function() {
                        return r.scrollHeight + (R ? y.elBorder : 0)
                    }
                },
                elBorder: {
                    get: function() {
                        return (r.offsetHeight || 0) - (r.clientHeight || 0)
                    }
                },
                wrongSize: {
                    get: function() {
                        return y.headingHeight + S.scrollHeight !== r.scrollHeight
                    }
                }
            }),
            y.index = p.push(y) - 1,
            y.accordion = e,
            y.el = r,
            y.heading = b,
            y.content = S,
            y.ariaEnabled = !e.noAria,
            y.heightOffset = e.heightOffset,
            r.accordionFold = y.index,
            R = "auto" === R ? 0 !== y.elBorder + y.headingBorder : R,
            C && (b.tabIndex = 0,
            b.addEventListener("keydown", g = function(t) {
                var n;
                switch (t.keyCode) {
                case 32:
                    t.preventDefault();
                case 13:
                    y.open = !y.open,
                    "A" === t.target.tagName && t.preventDefault();
                    break;
                case 27:
                    t.target.blur();
                    break;
                case 38:
                    if (n = y.previousFold) {
                        var r = n.childAccordions;
                        if (n.open && r) {
                            for (var o, i; r && (i = (o = r[r.length - 1]).folds[o.folds.length - 1]).open; )
                                r = i.childAccordions;
                            i.heading.focus()
                        } else
                            n.heading.focus()
                    } else {
                        if (!e.parent)
                            return !0;
                        e.parentFold.heading.focus()
                    }
                    return t.preventDefault(),
                    !1;
                case 40:
                    r = y.childAccordions;
                    if (y.open && r)
                        r[0].folds[0].heading.focus();
                    else if (n = y.nextFold)
                        n.heading.focus();
                    else {
                        if (!y.accordion.parent)
                            return !0;
                        for (var a = y; a = a.accordion.parentFold; )
                            if (n = a.nextFold) {
                                n.heading.focus();
                                break
                            }
                        if (!a)
                            return !0
                    }
                    return t.preventDefault(),
                    !1;
                case 37:
                    y.open ? y.open = !1 : e.parent && e.parentFold.heading.focus();
                    break;
                case 39:
                    r = y.childAccordions;
                    y.open ? r && r[0].folds[0].heading.focus() : y.open = !0
                }
            }
            )),
            t && b.addEventListener("touchstart", v = function(e) {
                f = window.pageXOffset,
                h = window.pageYOffset
            }
            , {
                passive: !0
            }),
            b.addEventListener(n, m = function(e) {
                return !(e.target === b || !b.contains(e.target) || "A" !== e.target.tagName || !e.target.href) || (("touchend" !== e.type || e.cancelable && window.pageXOffset === f && window.pageYOffset === h) && (y.open = !y.open,
                e.preventDefault()),
                !1)
            }
            )
        }, h = [], v = 0, g = function(e, t) {
            var n, a, s, u, c = this, d = e.classList, p = void 0 === (t = t || {}).edgeClass ? "edge-visible" : t.edgeClass, m = void 0 === t.snapClass ? "snap" : t.snapClass, y = void 0 === t.enabledClass ? "accordion" : t.enabledClass, b = t.disabledClass;
            Object.defineProperties(c, {
                update: {
                    value: x
                },
                updateFold: {
                    value: function(e, t) {
                        var n = e
                          , r = c.parentFold;
                        for (; n = n.nextFold; )
                            n.y += t;
                        r || T(t),
                        e.height += t,
                        c.height += t,
                        r && r.open && c.parent.updateFold(r, t)
                    }
                },
                refresh: {
                    value: function(e) {
                        var t = !!e && m;
                        t && d.add(t),
                        c.update(),
                        c.childAccordions && c.childAccordions.forEach(function(t) {
                            t.parentFold.open ? t.refresh(e) : t.parentFold.needsRefresh = !0
                        }),
                        t && setTimeout(function(e) {
                            d.remove(t)
                        }, 20)
                    }
                },
                disabled: {
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        if ((t = !!t) !== a) {
                            var n = e.style
                              , r = c.folds;
                            if (y && i(d, y, !t),
                            b && i(d, b, t),
                            a = t) {
                                n.height = null,
                                m && d.remove(m),
                                p && (e.removeEventListener(o, c.onTransitionEnd),
                                d.remove(p));
                                for (var s = 0, u = r.length; s < u; ++s)
                                    r[s].disabled = !0;
                                c.noAria || e.removeAttribute("role"),
                                --v
                            } else {
                                for (s = 0,
                                u = r.length; s < u; ++s)
                                    r[s].disabled = !1;
                                c.noAria || e.setAttribute("role", "tablist"),
                                ++v,
                                x()
                            }
                            v <= 0 ? (v = 0,
                            g.setResizeRate(!1)) : l && g.setResizeRate(l)
                        }
                    }
                },
                parent: {
                    set: function(e) {
                        s = e
                    },
                    get: function() {
                        var e = s;
                        if (!e)
                            return null;
                        for (; e; ) {
                            if (!e.disabled)
                                return e;
                            e = e.parent
                        }
                        return null
                    }
                },
                parentFold: {
                    set: function(e) {
                        u = e
                    },
                    get: function() {
                        var e = u;
                        if (!e)
                            return null;
                        for (var t = e.accordion; e && t; ) {
                            if (!t.disabled)
                                return e;
                            (t = t.parent) && (e = t.parentFold)
                        }
                        return null
                    }
                },
                height: {
                    get: function() {
                        return n
                    },
                    set: function(t) {
                        t && (t = +t) !== n && (e.style.height = t + "px",
                        n = t)
                    }
                },
                wrongSize: {
                    get: function() {
                        for (var e = this.folds, t = e.length, n = 0; n < t; ++n)
                            if (e[n].wrongSize)
                                return !0;
                        if (e = this.childAccordions)
                            for (; n < t; ++n)
                                if (e[n].wrongSize)
                                    return !0;
                        return !1
                    }
                },
                root: {
                    get: function() {
                        for (var e = this; e; ) {
                            if (!e.parent)
                                return e;
                            e = e.parent
                        }
                    }
                }
            }),
            c.openClass = t.openClass || "open",
            c.closeClass = t.closeClass || "closed",
            c.modal = !!t.modal,
            c.noAria = !!t.noAria,
            c.noKeys = !!t.noKeys,
            c.noTransforms = !!t.noTransforms,
            c.index = h.push(c) - 1,
            c.heightOffset = +t.heightOffset || 0,
            c.useBorders = void 0 === t.useBorders ? "auto" : t.useBorders,
            c.onToggle = t.onToggle;
            var S = [];
            r.call(e.children, function(e) {
                var t = new f(c,e);
                S.push(t);
                var n = S[S.length - 2];
                n && (n.nextFold = t,
                t.previousFold = n)
            }),
            e.accordion = c.index,
            c.noAria || e.setAttribute("role", "tablist"),
            c.el = e,
            c.folds = S,
            !t.disabled && y && d.add(y),
            x();
            for (var E = e; (E = E.parentNode) && 1 === E.nodeType; ) {
                var w = g.getFold(E);
                if (w) {
                    var D = w.accordion;
                    if (c.parent = D,
                    c.parentFold = w,
                    p && d.remove(p),
                    (D.childAccordions = D.childAccordions || []).push(c),
                    (w.childAccordions = w.childAccordions || []).push(c),
                    w.open) {
                        var C = w.el.scrollHeight
                          , R = w.headingHeight + w.content.scrollHeight - C || C - w.el.clientHeight;
                        D.updateFold(w, R)
                    }
                    break
                }
            }
            function T(t) {
                if (p) {
                    var n = e.getBoundingClientRect()
                      , r = window.innerHeight;
                    n.bottom + (t || 0) < r ? d.add(p) : n.bottom > r && d.remove(p)
                }
            }
            function x() {
                for (var e, t, r = 0, o = 0, i = 0, a = S.length, s = c.parentFold; i < a; ++i)
                    (e = S[i]).y = r,
                    e.fit(),
                    r += e.height,
                    o += e.height;
                t = o - n,
                s ? s.open && c.parent.updateFold(s, t) : T(t),
                c.height = o
            }
            p && e.addEventListener(o, this.onTransitionEnd = function(t) {
                !c.parent && t.target === e && "height" === t.propertyName && e.getBoundingClientRect().bottom > window.innerHeight && d.remove(p)
            }
            ),
            this.disabled = !!t.disabled
        };
        "function" == typeof IE8PP && (g = IE8PP(g),
        f = IE8PP(f)),
        g.setResizeRate = function(e) {
            var t = function(e) {
                for (var t, n = 0, r = h.length; n < r; ++n)
                    (t = h[n]).parent || t.disabled || t.refresh(!0)
            }
              , n = g;
            n.onResize && window.removeEventListener("resize", n.onResize),
            !1 !== e && (e = +e || 0) >= 0 && (n.onResize = e ? function(e, t, n) {
                t = t < 0 ? 0 : t;
                var r, o, i, a, s = function() {
                    var l = Date.now() - r;
                    l >= t ? (n || e.apply(o, i),
                    a && clearTimeout(a),
                    a = o = i = null) : a = setTimeout(s, t - l)
                };
                return function() {
                    if (o = this,
                    i = arguments,
                    !t)
                        return e.apply(o, i);
                    r = Date.now(),
                    a || (n && e.apply(o, i),
                    a = setTimeout(s, t))
                }
            }(t, e) : t,
            window.addEventListener("resize", n.onResize),
            e && (l = e))
        }
        ,
        g.getAccordion = function(e) {
            for (; e; ) {
                if ("accordion"in e)
                    return h[e.accordion];
                if (!(e = e.parentNode) || 1 !== e.nodeType)
                    return null
            }
        }
        ,
        g.getFold = function(e) {
            for (; e; ) {
                if ("accordionFold"in e)
                    return p[e.accordionFold];
                if (!(e = e.parentNode) || 1 !== e.nodeType)
                    return null
            }
        }
        ,
        g.setResizeRate(25),
        window.Accordion = g,
        "object" == typeof e.exports && (e.exports.Accordion = g)
    }()
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = [{
        code: "af",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Vorige",
            next: "Volgende",
            today: "Vandag",
            year: "Jaar",
            month: "Maand",
            week: "Week",
            day: "Dag",
            list: "Agenda"
        },
        allDayText: "Heeldag",
        moreLinkText: "Addisionele",
        noEventsText: "Daar is geen gebeurtenisse nie"
    }, {
        code: "ar-dz",
        week: {
            dow: 0,
            doy: 4
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "ar-kw",
        week: {
            dow: 0,
            doy: 12
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "ar-ly",
        week: {
            dow: 6,
            doy: 12
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "ar-ma",
        week: {
            dow: 6,
            doy: 12
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "ar-sa",
        week: {
            dow: 0,
            doy: 6
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "ar-tn",
        week: {
            dow: 1,
            doy: 4
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "ar",
        week: {
            dow: 6,
            doy: 12
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "az",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Əvvəl",
            next: "Sonra",
            today: "Bu Gün",
            month: "Ay",
            week: "Həftə",
            day: "Gün",
            list: "Gündəm"
        },
        weekText: "Həftə",
        allDayText: "Bütün Gün",
        moreLinkText: e=>"+ daha çox " + e,
        noEventsText: "Göstərmək üçün hadisə yoxdur"
    }, {
        code: "bg",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "назад",
            next: "напред",
            today: "днес",
            month: "Месец",
            week: "Седмица",
            day: "Ден",
            list: "График"
        },
        allDayText: "Цял ден",
        moreLinkText: e=>"+още " + e,
        noEventsText: "Няма събития за показване"
    }, {
        code: "bs",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Prošli",
            next: "Sljedeći",
            today: "Danas",
            month: "Mjesec",
            week: "Sedmica",
            day: "Dan",
            list: "Raspored"
        },
        weekText: "Sed",
        allDayText: "Cijeli dan",
        moreLinkText: e=>"+ još " + e,
        noEventsText: "Nema događaja za prikazivanje"
    }, {
        code: "ca",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Anterior",
            next: "Següent",
            today: "Avui",
            month: "Mes",
            week: "Setmana",
            day: "Dia",
            list: "Agenda"
        },
        weekText: "Set",
        allDayText: "Tot el dia",
        moreLinkText: "més",
        noEventsText: "No hi ha esdeveniments per mostrar"
    }, {
        code: "cs",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Dříve",
            next: "Později",
            today: "Nyní",
            month: "Měsíc",
            week: "Týden",
            day: "Den",
            list: "Agenda"
        },
        weekText: "Týd",
        allDayText: "Celý den",
        moreLinkText: e=>"+další: " + e,
        noEventsText: "Žádné akce k zobrazení"
    }, {
        code: "da",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Forrige",
            next: "Næste",
            today: "I dag",
            month: "Måned",
            week: "Uge",
            day: "Dag",
            list: "Agenda"
        },
        weekText: "Uge",
        allDayText: "Hele dagen",
        moreLinkText: "flere",
        noEventsText: "Ingen arrangementer at vise"
    }, {
        code: "de",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Zurück",
            next: "Vor",
            today: "Heute",
            year: "Jahr",
            month: "Monat",
            week: "Woche",
            day: "Tag",
            list: "Terminübersicht"
        },
        weekText: "KW",
        allDayText: "Ganztägig",
        moreLinkText: e=>"+ weitere " + e,
        noEventsText: "Keine Ereignisse anzuzeigen"
    }, {
        code: "el",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Προηγούμενος",
            next: "Επόμενος",
            today: "Σήμερα",
            month: "Μήνας",
            week: "Εβδομάδα",
            day: "Ημέρα",
            list: "Ατζέντα"
        },
        weekText: "Εβδ",
        allDayText: "Ολοήμερο",
        moreLinkText: "περισσότερα",
        noEventsText: "Δεν υπάρχουν γεγονότα προς εμφάνιση"
    }, {
        code: "en-au",
        week: {
            dow: 1,
            doy: 4
        }
    }, {
        code: "en-gb",
        week: {
            dow: 1,
            doy: 4
        }
    }, {
        code: "en-nz",
        week: {
            dow: 1,
            doy: 4
        }
    }, {
        code: "es",
        week: {
            dow: 0,
            doy: 6
        },
        buttonText: {
            prev: "Ant",
            next: "Sig",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Agenda"
        },
        weekText: "Sm",
        allDayText: "Todo el día",
        moreLinkText: "más",
        noEventsText: "No hay eventos para mostrar"
    }, {
        code: "es",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Ant",
            next: "Sig",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Agenda"
        },
        weekText: "Sm",
        allDayText: "Todo el día",
        moreLinkText: "más",
        noEventsText: "No hay eventos para mostrar"
    }, {
        code: "et",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Eelnev",
            next: "Järgnev",
            today: "Täna",
            month: "Kuu",
            week: "Nädal",
            day: "Päev",
            list: "Päevakord"
        },
        weekText: "näd",
        allDayText: "Kogu päev",
        moreLinkText: e=>"+ veel " + e,
        noEventsText: "Kuvamiseks puuduvad sündmused"
    }, {
        code: "eu",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Aur",
            next: "Hur",
            today: "Gaur",
            month: "Hilabetea",
            week: "Astea",
            day: "Eguna",
            list: "Agenda"
        },
        weekText: "As",
        allDayText: "Egun osoa",
        moreLinkText: "gehiago",
        noEventsText: "Ez dago ekitaldirik erakusteko"
    }, {
        code: "fa",
        week: {
            dow: 6,
            doy: 12
        },
        direction: "rtl",
        buttonText: {
            prev: "قبلی",
            next: "بعدی",
            today: "امروز",
            month: "ماه",
            week: "هفته",
            day: "روز",
            list: "برنامه"
        },
        weekText: "هف",
        allDayText: "تمام روز",
        moreLinkText: e=>"بیش از " + e,
        noEventsText: "هیچ رویدادی به نمایش"
    }, {
        code: "fi",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Edellinen",
            next: "Seuraava",
            today: "Tänään",
            month: "Kuukausi",
            week: "Viikko",
            day: "Päivä",
            list: "Tapahtumat"
        },
        weekText: "Vk",
        allDayText: "Koko päivä",
        moreLinkText: "lisää",
        noEventsText: "Ei näytettäviä tapahtumia"
    }, {
        code: "fr",
        buttonText: {
            prev: "Précédent",
            next: "Suivant",
            today: "Aujourd'hui",
            year: "Année",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Mon planning"
        },
        weekText: "Sem.",
        allDayText: "Toute la journée",
        moreLinkText: "en plus",
        noEventsText: "Aucun événement à afficher"
    }, {
        code: "fr-ch",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Précédent",
            next: "Suivant",
            today: "Courant",
            year: "Année",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Mon planning"
        },
        weekText: "Sm",
        allDayText: "Toute la journée",
        moreLinkText: "en plus",
        noEventsText: "Aucun événement à afficher"
    }, {
        code: "fr",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Précédent",
            next: "Suivant",
            today: "Aujourd'hui",
            year: "Année",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Planning"
        },
        weekText: "Sem.",
        allDayText: "Toute la journée",
        moreLinkText: "en plus",
        noEventsText: "Aucun événement à afficher"
    }, {
        code: "gl",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Ant",
            next: "Seg",
            today: "Hoxe",
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Axenda"
        },
        weekText: "Sm",
        allDayText: "Todo o día",
        moreLinkText: "máis",
        noEventsText: "Non hai eventos para amosar"
    }, {
        code: "he",
        direction: "rtl",
        buttonText: {
            prev: "הקודם",
            next: "הבא",
            today: "היום",
            month: "חודש",
            week: "שבוע",
            day: "יום",
            list: "סדר יום"
        },
        allDayText: "כל היום",
        moreLinkText: "אחר",
        noEventsText: "אין אירועים להצגה",
        weekText: "שבוע"
    }, {
        code: "hi",
        week: {
            dow: 0,
            doy: 6
        },
        buttonText: {
            prev: "पिछला",
            next: "अगला",
            today: "आज",
            month: "महीना",
            week: "सप्ताह",
            day: "दिन",
            list: "कार्यसूची"
        },
        weekText: "हफ्ता",
        allDayText: "सभी दिन",
        moreLinkText: e=>"+अधिक " + e,
        noEventsText: "कोई घटनाओं को प्रदर्शित करने के लिए"
    }, {
        code: "hr",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Prijašnji",
            next: "Sljedeći",
            today: "Danas",
            month: "Mjesec",
            week: "Tjedan",
            day: "Dan",
            list: "Raspored"
        },
        weekText: "Tje",
        allDayText: "Cijeli dan",
        moreLinkText: e=>"+ još " + e,
        noEventsText: "Nema događaja za prikaz"
    }, {
        code: "hu",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "vissza",
            next: "előre",
            today: "ma",
            month: "Hónap",
            week: "Hét",
            day: "Nap",
            list: "Napló"
        },
        weekText: "Hét",
        allDayText: "Egész nap",
        moreLinkText: "további",
        noEventsText: "Nincs megjeleníthető esemény"
    }, {
        code: "id",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "mundur",
            next: "maju",
            today: "hari ini",
            month: "Bulan",
            week: "Minggu",
            day: "Hari",
            list: "Agenda"
        },
        weekText: "Mg",
        allDayText: "Sehari penuh",
        moreLinkText: "lebih",
        noEventsText: "Tidak ada acara untuk ditampilkan"
    }, {
        code: "is",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Fyrri",
            next: "Næsti",
            today: "Í dag",
            month: "Mánuður",
            week: "Vika",
            day: "Dagur",
            list: "Dagskrá"
        },
        weekText: "Vika",
        allDayText: "Allan daginn",
        moreLinkText: "meira",
        noEventsText: "Engir viðburðir til að sýna"
    }, {
        code: "it",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Prec",
            next: "Succ",
            today: "Oggi",
            month: "Mese",
            week: "Settimana",
            day: "Giorno",
            list: "Agenda"
        },
        weekText: "Sm",
        allDayText: "Tutto il giorno",
        moreLinkText: e=>"+altri " + e,
        noEventsText: "Non ci sono eventi da visualizzare"
    }, {
        code: "ja",
        buttonText: {
            prev: "前",
            next: "次",
            today: "今日",
            month: "月",
            week: "週",
            day: "日",
            list: "予定リスト"
        },
        weekText: "週",
        allDayText: "終日",
        moreLinkText: e=>"他 " + e + " 件",
        noEventsText: "表示する予定はありません"
    }, {
        code: "ka",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "წინა",
            next: "შემდეგი",
            today: "დღეს",
            month: "თვე",
            week: "კვირა",
            day: "დღე",
            list: "დღის წესრიგი"
        },
        weekText: "კვ",
        allDayText: "მთელი დღე",
        moreLinkText: e=>"+ კიდევ " + e,
        noEventsText: "ღონისძიებები არ არის"
    }, {
        code: "kk",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Алдыңғы",
            next: "Келесі",
            today: "Бүгін",
            month: "Ай",
            week: "Апта",
            day: "Күн",
            list: "Күн тәртібі"
        },
        weekText: "Не",
        allDayText: "Күні бойы",
        moreLinkText: e=>"+ тағы " + e,
        noEventsText: "Көрсету үшін оқиғалар жоқ"
    }, {
        code: "ko",
        buttonText: {
            prev: "이전달",
            next: "다음달",
            today: "오늘",
            month: "월",
            week: "주",
            day: "일",
            list: "일정목록"
        },
        weekText: "주",
        allDayText: "종일",
        moreLinkText: "개",
        noEventsText: "일정이 없습니다"
    }, {
        code: "lb",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Zréck",
            next: "Weider",
            today: "Haut",
            month: "Mount",
            week: "Woch",
            day: "Dag",
            list: "Terminiwwersiicht"
        },
        weekText: "W",
        allDayText: "Ganzen Dag",
        moreLinkText: "méi",
        noEventsText: "Nee Evenementer ze affichéieren"
    }, {
        code: "lt",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Atgal",
            next: "Pirmyn",
            today: "Šiandien",
            month: "Mėnuo",
            week: "Savaitė",
            day: "Diena",
            list: "Darbotvarkė"
        },
        weekText: "SAV",
        allDayText: "Visą dieną",
        moreLinkText: "daugiau",
        noEventsText: "Nėra įvykių rodyti"
    }, {
        code: "lv",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Iepr.",
            next: "Nāk.",
            today: "Šodien",
            month: "Mēnesis",
            week: "Nedēļa",
            day: "Diena",
            list: "Dienas kārtība"
        },
        weekText: "Ned.",
        allDayText: "Visu dienu",
        moreLinkText: e=>"+vēl " + e,
        noEventsText: "Nav notikumu"
    }, {
        code: "mk",
        buttonText: {
            prev: "претходно",
            next: "следно",
            today: "Денес",
            month: "Месец",
            week: "Недела",
            day: "Ден",
            list: "График"
        },
        weekText: "Сед",
        allDayText: "Цел ден",
        moreLinkText: e=>"+повеќе " + e,
        noEventsText: "Нема настани за прикажување"
    }, {
        code: "ms",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Sebelum",
            next: "Selepas",
            today: "hari ini",
            month: "Bulan",
            week: "Minggu",
            day: "Hari",
            list: "Agenda"
        },
        weekText: "Mg",
        allDayText: "Sepanjang hari",
        moreLinkText: e=>"masih ada " + e + " acara",
        noEventsText: "Tiada peristiwa untuk dipaparkan"
    }, {
        code: "nb",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Forrige",
            next: "Neste",
            today: "I dag",
            month: "Måned",
            week: "Uke",
            day: "Dag",
            list: "Agenda"
        },
        weekText: "Uke",
        allDayText: "Hele dagen",
        moreLinkText: "til",
        noEventsText: "Ingen hendelser å vise"
    }, {
        code: "ne",
        week: {
            dow: 7,
            doy: 1
        },
        buttonText: {
            prev: "अघिल्लो",
            next: "अर्को",
            today: "आज",
            month: "महिना",
            week: "हप्ता",
            day: "दिन",
            list: "सूची"
        },
        weekText: "हप्ता",
        allDayText: "दिनभरि",
        moreLinkText: "थप लिंक",
        noEventsText: "देखाउनको लागि कुनै घटनाहरू छैनन्"
    }, {
        code: "nl",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Voorgaand",
            next: "Volgende",
            today: "Vandaag",
            year: "Jaar",
            month: "Maand",
            week: "Week",
            day: "Dag",
            list: "Agenda"
        },
        allDayText: "Hele dag",
        moreLinkText: "extra",
        noEventsText: "Geen evenementen om te laten zien"
    }, {
        code: "nn",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Førre",
            next: "Neste",
            today: "I dag",
            month: "Månad",
            week: "Veke",
            day: "Dag",
            list: "Agenda"
        },
        weekText: "Veke",
        allDayText: "Heile dagen",
        moreLinkText: "til",
        noEventsText: "Ingen hendelser å vise"
    }, {
        code: "pl",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Poprzedni",
            next: "Następny",
            today: "Dziś",
            month: "Miesiąc",
            week: "Tydzień",
            day: "Dzień",
            list: "Plan dnia"
        },
        weekText: "Tydz",
        allDayText: "Cały dzień",
        moreLinkText: "więcej",
        noEventsText: "Brak wydarzeń do wyświetlenia"
    }, {
        code: "pt-br",
        buttonText: {
            prev: "Anterior",
            next: "Próximo",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            list: "Lista"
        },
        weekText: "Sm",
        allDayText: "dia inteiro",
        moreLinkText: e=>"mais +" + e,
        noEventsText: "Não há eventos para mostrar"
    }, {
        code: "pt",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Anterior",
            next: "Seguinte",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            list: "Agenda"
        },
        weekText: "Sem",
        allDayText: "Todo o dia",
        moreLinkText: "mais",
        noEventsText: "Não há eventos para mostrar"
    }, {
        code: "ro",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "precedentă",
            next: "următoare",
            today: "Azi",
            month: "Lună",
            week: "Săptămână",
            day: "Zi",
            list: "Agendă"
        },
        weekText: "Săpt",
        allDayText: "Toată ziua",
        moreLinkText: e=>"+alte " + e,
        noEventsText: "Nu există evenimente de afișat"
    }, {
        code: "ru",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Пред",
            next: "След",
            today: "Сегодня",
            month: "Месяц",
            week: "Неделя",
            day: "День",
            list: "Повестка дня"
        },
        weekText: "Нед",
        allDayText: "Весь день",
        moreLinkText: e=>"+ ещё " + e,
        noEventsText: "Нет событий для отображения"
    }, {
        code: "sk",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Predchádzajúci",
            next: "Nasledujúci",
            today: "Dnes",
            month: "Mesiac",
            week: "Týždeň",
            day: "Deň",
            list: "Rozvrh"
        },
        weekText: "Ty",
        allDayText: "Celý deň",
        moreLinkText: e=>"+ďalšie: " + e,
        noEventsText: "Žiadne akcie na zobrazenie"
    }, {
        code: "sl",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Prejšnji",
            next: "Naslednji",
            today: "Trenutni",
            month: "Mesec",
            week: "Teden",
            day: "Dan",
            list: "Dnevni red"
        },
        weekText: "Teden",
        allDayText: "Ves dan",
        moreLinkText: "več",
        noEventsText: "Ni dogodkov za prikaz"
    }, {
        code: "sq",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "mbrapa",
            next: "Përpara",
            today: "sot",
            month: "Muaj",
            week: "Javë",
            day: "Ditë",
            list: "Listë"
        },
        weekText: "Ja",
        allDayText: "Gjithë ditën",
        moreLinkText: e=>"+më tepër " + e,
        noEventsText: "Nuk ka evente për të shfaqur"
    }, {
        code: "sr-cyrl",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Претходна",
            next: "следећи",
            today: "Данас",
            month: "Месец",
            week: "Недеља",
            day: "Дан",
            list: "Планер"
        },
        weekText: "Сед",
        allDayText: "Цео дан",
        moreLinkText: e=>"+ још " + e,
        noEventsText: "Нема догађаја за приказ"
    }, {
        code: "sr",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Prethodna",
            next: "Sledeći",
            today: "Danas",
            month: "Mеsеc",
            week: "Nеdеlja",
            day: "Dan",
            list: "Planеr"
        },
        weekText: "Sed",
        allDayText: "Cеo dan",
        moreLinkText: e=>"+ još " + e,
        noEventsText: "Nеma događaja za prikaz"
    }, {
        code: "sv",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Förra",
            next: "Nästa",
            today: "Idag",
            month: "Månad",
            week: "Vecka",
            day: "Dag",
            list: "Program"
        },
        weekText: "v.",
        allDayText: "Heldag",
        moreLinkText: "till",
        noEventsText: "Inga händelser att visa"
    }, {
        code: "th",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "ก่อนหน้า",
            next: "ถัดไป",
            prevYear: "ปีก่อนหน้า",
            nextYear: "ปีถัดไป",
            year: "ปี",
            today: "วันนี้",
            month: "เดือน",
            week: "สัปดาห์",
            day: "วัน",
            list: "กำหนดการ"
        },
        weekText: "สัปดาห์",
        allDayText: "ตลอดวัน",
        moreLinkText: "เพิ่มเติม",
        noEventsText: "ไม่มีกิจกรรมที่จะแสดง"
    }, {
        code: "tr",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "geri",
            next: "ileri",
            today: "bugün",
            month: "Ay",
            week: "Hafta",
            day: "Gün",
            list: "Ajanda"
        },
        weekText: "Hf",
        allDayText: "Tüm gün",
        moreLinkText: "daha fazla",
        noEventsText: "Gösterilecek etkinlik yok"
    }, {
        code: "ug",
        buttonText: {
            month: "ئاي",
            week: "ھەپتە",
            day: "كۈن",
            list: "كۈنتەرتىپ"
        },
        allDayText: "پۈتۈن كۈن"
    }, {
        code: "uk",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Попередній",
            next: "далі",
            today: "Сьогодні",
            month: "Місяць",
            week: "Тиждень",
            day: "День",
            list: "Порядок денний"
        },
        weekText: "Тиж",
        allDayText: "Увесь день",
        moreLinkText: e=>"+ще " + e + "...",
        noEventsText: "Немає подій для відображення"
    }, {
        code: "uz",
        buttonText: {
            month: "Oy",
            week: "Xafta",
            day: "Kun",
            list: "Kun tartibi"
        },
        allDayText: "Kun bo'yi",
        moreLinkText: e=>"+ yana " + e,
        noEventsText: "Ko'rsatish uchun voqealar yo'q"
    }, {
        code: "vi",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Trước",
            next: "Tiếp",
            today: "Hôm nay",
            month: "Tháng",
            week: "Tuần",
            day: "Ngày",
            list: "Lịch biểu"
        },
        weekText: "Tu",
        allDayText: "Cả ngày",
        moreLinkText: e=>"+ thêm " + e,
        noEventsText: "Không có sự kiện để hiển thị"
    }, {
        code: "zh-cn",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "上月",
            next: "下月",
            today: "今天",
            month: "月",
            week: "周",
            day: "日",
            list: "日程"
        },
        weekText: "周",
        allDayText: "全天",
        moreLinkText: e=>"另外 " + e + " 个",
        noEventsText: "没有事件显示"
    }, {
        code: "zh-tw",
        buttonText: {
            prev: "上月",
            next: "下月",
            today: "今天",
            month: "月",
            week: "週",
            day: "天",
            list: "活動列表"
        },
        weekText: "周",
        allDayText: "整天",
        moreLinkText: "顯示更多",
        noEventsText: "没有任何活動"
    }];
    t.default = r
}
, , , , , function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(6);
    n(12),
    n(13);
    function o(e, t) {
        return n = (t || document).querySelectorAll(e),
        Array.prototype.slice.call(n);
        var n
    }
    var i = n(2)
      , a = function(e, t) {
        return (a = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    };
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    function s(e, t) {
        function n() {
            this.constructor = e
        }
        a(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var l = function() {
        return (l = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    Object.create;
    var u = n(0)
      , c = "undefined" != typeof globalThis ? globalThis : window;
    c.FullCalendarVDom ? console.warn("FullCalendar VDOM already loaded") : c.FullCalendarVDom = {
        Component: u.a,
        createElement: u.f,
        render: u.k,
        createRef: u.g,
        Fragment: u.b,
        createContext: function(e) {
            var t = Object(u.e)(e)
              , n = t.Provider;
            return t.Provider = function() {
                var e = this
                  , t = !this.getChildContext
                  , r = n.apply(this, arguments);
                if (t) {
                    var o = [];
                    this.shouldComponentUpdate = function(t) {
                        e.props.value !== t.value && o.forEach(function(e) {
                            e.context = t.value,
                            e.forceUpdate()
                        })
                    }
                    ,
                    this.sub = function(e) {
                        o.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function() {
                            o.splice(o.indexOf(e), 1),
                            t && t.call(e)
                        }
                    }
                }
                return r
            }
            ,
            t
        },
        flushToDom: function() {
            var e = u.j.debounceRendering
              , t = [];
            u.j.debounceRendering = function(e) {
                t.push(e)
            }
            ,
            Object(u.k)(Object(u.f)(d, {}), document.createElement("div"));
            for (; t.length; )
                t.shift()();
            u.j.debounceRendering = e
        },
        unmountComponentAtNode: function(e) {
            Object(u.k)(null, e)
        }
    };
    var d = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return s(t, e),
        t.prototype.render = function() {
            return Object(u.f)("div", {})
        }
        ,
        t.prototype.componentDidMount = function() {
            this.setState({})
        }
        ,
        t
    }(u.a);
    n(14);
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var p = function(e, t) {
        return (p = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function f(e, t) {
        function n() {
            this.constructor = e
        }
        p(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var h = function() {
        return (h = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    function v() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , o = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
            o++)
                r[o] = i[a];
        return r
    }
    Object.create;
    if ("undefined" == typeof FullCalendarVDom)
        throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");
    var g = FullCalendarVDom.Component
      , m = FullCalendarVDom.createElement
      , y = FullCalendarVDom.render
      , b = FullCalendarVDom.createRef
      , S = FullCalendarVDom.Fragment
      , E = FullCalendarVDom.createContext
      , w = FullCalendarVDom.flushToDom
      , D = FullCalendarVDom.unmountComponentAtNode
      , C = function() {
        function e(e, t) {
            this.context = e,
            this.internalEventSource = t
        }
        return e.prototype.remove = function() {
            this.context.dispatch({
                type: "REMOVE_EVENT_SOURCE",
                sourceId: this.internalEventSource.sourceId
            })
        }
        ,
        e.prototype.refetch = function() {
            this.context.dispatch({
                type: "FETCH_EVENT_SOURCES",
                sourceIds: [this.internalEventSource.sourceId]
            })
        }
        ,
        Object.defineProperty(e.prototype, "id", {
            get: function() {
                return this.internalEventSource.publicId
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "url", {
            get: function() {
                return this.internalEventSource.meta.url
            },
            enumerable: !1,
            configurable: !0
        }),
        e
    }();
    function R(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }
    function T(e, t) {
        if (e.closest)
            return e.closest(t);
        if (!document.documentElement.contains(e))
            return null;
        do {
            if (x(e, t))
                return e;
            e = e.parentElement || e.parentNode
        } while (null !== e && 1 === e.nodeType);return null
    }
    function x(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t)
    }
    function k(e, t) {
        for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1)
            for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1)
                r.push(i[a]);
        return r
    }
    var M = /(top|left|right|bottom|width|height)$/i;
    function _(e, t) {
        for (var n in t)
            P(e, n, t[n])
    }
    function P(e, t, n) {
        null == n ? e.style[t] = "" : "number" == typeof n && M.test(t) ? e.style[t] = n + "px" : e.style[t] = n
    }
    function I(e) {
        e.preventDefault()
    }
    function N(e, t) {
        return function(n) {
            var r = T(n.target, e);
            r && t.call(r, n, r)
        }
    }
    function H(e, t, n, r) {
        var o = N(n, r);
        return e.addEventListener(t, o),
        function() {
            e.removeEventListener(t, o)
        }
    }
    var O = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];
    var A = 0;
    function L() {
        return String(A += 1)
    }
    function W() {
        document.body.classList.add("fc-not-allowed")
    }
    function U() {
        document.body.classList.remove("fc-not-allowed")
    }
    function j(e) {
        var t, n, r = [], o = [];
        for ("string" == typeof e ? o = e.split(/\s*,\s*/) : "function" == typeof e ? o = [e] : Array.isArray(e) && (o = e),
        t = 0; t < o.length; t += 1)
            "string" == typeof (n = o[t]) ? r.push("-" === n.charAt(0) ? {
                field: n.substring(1),
                order: -1
            } : {
                field: n,
                order: 1
            }) : "function" == typeof n && r.push({
                func: n
            });
        return r
    }
    function z(e, t, n) {
        var r, o;
        for (r = 0; r < n.length; r += 1)
            if (o = B(e, t, n[r]))
                return o;
        return 0
    }
    function B(e, t, n) {
        return n.func ? n.func(e, t) : F(e[n.field], t[n.field]) * (n.order || 1)
    }
    function F(e, t) {
        return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0
    }
    function V(e, t) {
        var n = String(e);
        return "000".substr(0, t - n.length) + n
    }
    function G(e, t) {
        return e - t
    }
    function q(e) {
        return e % 1 == 0
    }
    function Y(e) {
        var t = e.querySelector(".fc-scrollgrid-shrink-frame")
          , n = e.querySelector(".fc-scrollgrid-shrink-cushion");
        if (!t)
            throw new Error("needs fc-scrollgrid-shrink-frame className");
        if (!n)
            throw new Error("needs fc-scrollgrid-shrink-cushion className");
        return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width
    }
    var Z = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    function X(e, t) {
        var n = ie(e);
        return n[2] += 7 * t,
        ae(n)
    }
    function K(e, t) {
        var n = ie(e);
        return n[2] += t,
        ae(n)
    }
    function J(e, t) {
        var n = ie(e);
        return n[6] += t,
        ae(n)
    }
    function $(e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5
    }
    function Q(e, t) {
        return le(e) === le(t) ? Math.round($(e, t)) : null
    }
    function ee(e) {
        return ae([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()])
    }
    function te(e, t, n, r) {
        var o = ae([t, 0, 1 + ne(t, n, r)])
          , i = ee(e)
          , a = Math.round($(o, i));
        return Math.floor(a / 7) + 1
    }
    function ne(e, t, n) {
        var r = 7 + t - n;
        return -((7 + ae([e, 0, r]).getUTCDay() - t) % 7) + r - 1
    }
    function re(e) {
        return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()]
    }
    function oe(e) {
        return new Date(e[0],e[1] || 0,null == e[2] ? 1 : e[2],e[3] || 0,e[4] || 0,e[5] || 0)
    }
    function ie(e) {
        return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()]
    }
    function ae(e) {
        return 1 === e.length && (e = e.concat([0])),
        new Date(Date.UTC.apply(Date, e))
    }
    function se(e) {
        return !isNaN(e.valueOf())
    }
    function le(e) {
        return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds()
    }
    function ue(e, t, n, r) {
        return {
            instanceId: L(),
            defId: e,
            range: t,
            forcedStartTzo: null == n ? null : n,
            forcedEndTzo: null == r ? null : r
        }
    }
    var ce = Object.prototype.hasOwnProperty;
    function de(e, t) {
        var n = {};
        if (t)
            for (var r in t) {
                for (var o = [], i = e.length - 1; i >= 0; i -= 1) {
                    var a = e[i][r];
                    if ("object" == typeof a && a)
                        o.unshift(a);
                    else if (void 0 !== a) {
                        n[r] = a;
                        break
                    }
                }
                o.length && (n[r] = de(o))
            }
        for (i = e.length - 1; i >= 0; i -= 1) {
            var s = e[i];
            for (var l in s)
                l in n || (n[l] = s[l])
        }
        return n
    }
    function pe(e, t) {
        var n = {};
        for (var r in e)
            t(e[r], r) && (n[r] = e[r]);
        return n
    }
    function fe(e, t) {
        var n = {};
        for (var r in e)
            n[r] = t(e[r], r);
        return n
    }
    function he(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
            t[r[n]] = !0
        }
        return t
    }
    function ve(e) {
        var t = [];
        for (var n in e)
            t.push(e[n]);
        return t
    }
    function ge(e, t) {
        if (e === t)
            return !0;
        for (var n in e)
            if (ce.call(e, n) && !(n in t))
                return !1;
        for (var n in t)
            if (ce.call(t, n) && e[n] !== t[n])
                return !1;
        return !0
    }
    function me(e, t) {
        var n = [];
        for (var r in e)
            ce.call(e, r) && (r in t || n.push(r));
        for (var r in t)
            ce.call(t, r) && e[r] !== t[r] && n.push(r);
        return n
    }
    function ye(e, t, n) {
        if (void 0 === n && (n = {}),
        e === t)
            return !0;
        for (var r in t)
            if (!(r in e && be(e[r], t[r], n[r])))
                return !1;
        for (var r in e)
            if (!(r in t))
                return !1;
        return !0
    }
    function be(e, t, n) {
        return e === t || !0 === n || !!n && n(e, t)
    }
    function Se(e, t, n, r) {
        void 0 === t && (t = 0),
        void 0 === r && (r = 1);
        var o = [];
        null == n && (n = Object.keys(e).length);
        for (var i = t; i < n; i += r) {
            var a = e[i];
            void 0 !== a && o.push(a)
        }
        return o
    }
    function Ee(e, t, n) {
        var r = n.dateEnv
          , o = n.pluginHooks
          , i = n.options
          , a = e.defs
          , s = e.instances;
        for (var l in s = pe(s, function(e) {
            return !a[e.defId].recurringDef
        }),
        a) {
            var u = a[l];
            if (u.recurringDef) {
                var c = u.recurringDef.duration;
                c || (c = u.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);
                for (var d = 0, p = we(u, c, t, r, o.recurringTypes); d < p.length; d++) {
                    var f = p[d]
                      , h = ue(l, {
                        start: f,
                        end: r.add(f, c)
                    });
                    s[h.instanceId] = h
                }
            }
        }
        return {
            defs: a,
            instances: s
        }
    }
    function we(e, t, n, r, o) {
        var i = o[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
            start: r.subtract(n.start, t),
            end: n.end
        }, r);
        return e.allDay && (i = i.map(ee)),
        i
    }
    var De = ["years", "months", "days", "milliseconds"]
      , Ce = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
    function Re(e, t) {
        var n;
        return "string" == typeof e ? function(e) {
            var t = Ce.exec(e);
            if (t) {
                var n = t[1] ? -1 : 1;
                return {
                    years: 0,
                    months: 0,
                    days: n * (t[2] ? parseInt(t[2], 10) : 0),
                    milliseconds: n * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
                }
            }
            return null
        }(e) : "object" == typeof e && e ? Te(e) : "number" == typeof e ? Te(((n = {})[t || "milliseconds"] = e,
        n)) : null
    }
    function Te(e) {
        var t = {
            years: e.years || e.year || 0,
            months: e.months || e.month || 0,
            days: e.days || e.day || 0,
            milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
        }
          , n = e.weeks || e.week;
        return n && (t.days += 7 * n,
        t.specifiedWeeks = !0),
        t
    }
    function xe(e) {
        return e.years || e.months || e.milliseconds ? 0 : e.days
    }
    function ke(e, t) {
        return {
            years: e.years + t.years,
            months: e.months + t.months,
            days: e.days + t.days,
            milliseconds: e.milliseconds + t.milliseconds
        }
    }
    function Me(e, t) {
        return {
            years: e.years * t,
            months: e.months * t,
            days: e.days * t,
            milliseconds: e.milliseconds * t
        }
    }
    function _e(e) {
        return Pe(e) / 864e5
    }
    function Pe(e) {
        return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
    }
    function Ie(e, t) {
        for (var n = null, r = 0; r < De.length; r += 1) {
            var o = De[r];
            if (t[o]) {
                var i = e[o] / t[o];
                if (!q(i) || null !== n && n !== i)
                    return null;
                n = i
            } else if (e[o])
                return null
        }
        return n
    }
    function Ne(e) {
        var t = e.milliseconds;
        if (t) {
            if (t % 1e3 != 0)
                return {
                    unit: "millisecond",
                    value: t
                };
            if (t % 6e4 != 0)
                return {
                    unit: "second",
                    value: t / 1e3
                };
            if (t % 36e5 != 0)
                return {
                    unit: "minute",
                    value: t / 6e4
                };
            if (t)
                return {
                    unit: "hour",
                    value: t / 36e5
                }
        }
        return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {
            unit: "week",
            value: e.days / 7
        } : {
            unit: "day",
            value: e.days
        } : e.months ? {
            unit: "month",
            value: e.months
        } : e.years ? {
            unit: "year",
            value: e.years
        } : {
            unit: "millisecond",
            value: 0
        }
    }
    function He(e) {
        return e.toISOString().replace(/T.*$/, "")
    }
    function Oe(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+"
          , r = Math.abs(e)
          , o = Math.floor(r / 60)
          , i = Math.round(r % 60);
        return t ? n + V(o, 2) + ":" + V(i, 2) : "GMT" + n + o + (i ? ":" + V(i, 2) : "")
    }
    function Ae(e, t, n) {
        if (e === t)
            return !0;
        var r, o = e.length;
        if (o !== t.length)
            return !1;
        for (r = 0; r < o; r += 1)
            if (!(n ? n(e[r], t[r]) : e[r] === t[r]))
                return !1;
        return !0
    }
    function Le(e, t, n) {
        var r, o;
        return function() {
            for (var i = [], a = 0; a < arguments.length; a++)
                i[a] = arguments[a];
            if (r) {
                if (!Ae(r, i)) {
                    n && n(o);
                    var s = e.apply(this, i);
                    t && t(s, o) || (o = s)
                }
            } else
                o = e.apply(this, i);
            return r = i,
            o
        }
    }
    function We(e, t, n) {
        var r, o, i = this;
        return function(a) {
            if (r) {
                if (!ge(r, a)) {
                    n && n(o);
                    var s = e.call(i, a);
                    t && t(s, o) || (o = s)
                }
            } else
                o = e.call(i, a);
            return r = a,
            o
        }
    }
    function Ue(e, t, n) {
        var r = this
          , o = []
          , i = [];
        return function(a) {
            for (var s = o.length, l = a.length, u = 0; u < s; u += 1)
                if (a[u]) {
                    if (!Ae(o[u], a[u])) {
                        n && n(i[u]);
                        var c = e.apply(r, a[u]);
                        t && t(c, i[u]) || (i[u] = c)
                    }
                } else
                    n && n(i[u]);
            for (; u < l; u += 1)
                i[u] = e.apply(r, a[u]);
            return o = a,
            i.splice(l),
            i
        }
    }
    function je(e, t, n) {
        var r = this
          , o = {}
          , i = {};
        return function(a) {
            var s = {};
            for (var l in a)
                if (i[l])
                    if (Ae(o[l], a[l]))
                        s[l] = i[l];
                    else {
                        n && n(i[l]);
                        var u = e.apply(r, a[l]);
                        s[l] = t && t(u, i[l]) ? i[l] : u
                    }
                else
                    s[l] = e.apply(r, a[l]);
            return o = a,
            i = s,
            s
        }
    }
    var ze = {
        week: 3,
        separator: 0,
        omitZeroMinute: 0,
        meridiem: 0,
        omitCommas: 0
    }
      , Be = {
        timeZoneName: 7,
        era: 6,
        year: 5,
        month: 4,
        day: 2,
        weekday: 2,
        hour: 1,
        minute: 1,
        second: 1
    }
      , Fe = /\s*([ap])\.?m\.?/i
      , Ve = /,/g
      , Ge = /\s+/g
      , qe = /\u200e/g
      , Ye = /UTC|GMT/
      , Ze = function() {
        function e(e) {
            var t = {}
              , n = {}
              , r = 0;
            for (var o in e)
                o in ze ? (n[o] = e[o],
                r = Math.max(ze[o], r)) : (t[o] = e[o],
                o in Be && (r = Math.max(Be[o], r)));
            this.standardDateProps = t,
            this.extendedSettings = n,
            this.severity = r,
            this.buildFormattingFunc = Le(Xe)
        }
        return e.prototype.format = function(e, t) {
            return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e)
        }
        ,
        e.prototype.formatRange = function(e, t, n, r) {
            var o = this.standardDateProps
              , i = this.extendedSettings
              , a = function(e, t, n) {
                if (n.getMarkerYear(e) !== n.getMarkerYear(t))
                    return 5;
                if (n.getMarkerMonth(e) !== n.getMarkerMonth(t))
                    return 4;
                if (n.getMarkerDay(e) !== n.getMarkerDay(t))
                    return 2;
                if (le(e) !== le(t))
                    return 1;
                return 0
            }(e.marker, t.marker, n.calendarSystem);
            if (!a)
                return this.format(e, n);
            var s = a;
            !(s > 1) || "numeric" !== o.year && "2-digit" !== o.year || "numeric" !== o.month && "2-digit" !== o.month || "numeric" !== o.day && "2-digit" !== o.day || (s = 1);
            var l = this.format(e, n)
              , u = this.format(t, n);
            if (l === u)
                return l;
            var c = Xe(function(e, t) {
                var n = {};
                for (var r in e)
                    r in Be && !(Be[r] <= t) || (n[r] = e[r]);
                return n
            }(o, s), i, n)
              , d = c(e)
              , p = c(t)
              , f = function(e, t, n, r) {
                var o = 0;
                for (; o < e.length; ) {
                    var i = e.indexOf(t, o);
                    if (-1 === i)
                        break;
                    var a = e.substr(0, i);
                    o = i + t.length;
                    for (var s = e.substr(o), l = 0; l < n.length; ) {
                        var u = n.indexOf(r, l);
                        if (-1 === u)
                            break;
                        var c = n.substr(0, u);
                        l = u + r.length;
                        var d = n.substr(l);
                        if (a === c && s === d)
                            return {
                                before: a,
                                after: s
                            }
                    }
                }
                return null
            }(l, d, u, p)
              , h = i.separator || r || n.defaultSeparator || "";
            return f ? f.before + d + h + p + f.after : l + h + u
        }
        ,
        e.prototype.getLargestUnit = function() {
            switch (this.severity) {
            case 7:
            case 6:
            case 5:
                return "year";
            case 4:
                return "month";
            case 3:
                return "week";
            case 2:
                return "day";
            default:
                return "time"
            }
        }
        ,
        e
    }();
    function Xe(e, t, n) {
        var r = Object.keys(e).length;
        return 1 === r && "short" === e.timeZoneName ? function(e) {
            return Oe(e.timeZoneOffset)
        }
        : 0 === r && t.week ? function(e) {
            return function(e, t, n, r) {
                var o = [];
                "narrow" === r ? o.push(t) : "short" === r && o.push(t, " ");
                o.push(n.simpleNumberFormat.format(e)),
                "rtl" === n.options.direction && o.reverse();
                return o.join("")
            }(n.computeWeekNumber(e.marker), n.weekText, n.locale, t.week)
        }
        : function(e, t, n) {
            e = h({}, e),
            t = h({}, t),
            function(e, t) {
                e.timeZoneName && (e.hour || (e.hour = "2-digit"),
                e.minute || (e.minute = "2-digit"));
                "long" === e.timeZoneName && (e.timeZoneName = "short");
                t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute
            }(e, t),
            e.timeZone = "UTC";
            var r, o = new Intl.DateTimeFormat(n.locale.codes,e);
            if (t.omitZeroMinute) {
                var i = h({}, e);
                delete i.minute,
                r = new Intl.DateTimeFormat(n.locale.codes,i)
            }
            return function(i) {
                var a = i.marker;
                return function(e, t, n, r, o) {
                    e = e.replace(qe, ""),
                    "short" === n.timeZoneName && (e = function(e, t) {
                        var n = !1;
                        e = e.replace(Ye, function() {
                            return n = !0,
                            t
                        }),
                        n || (e += " " + t);
                        return e
                    }(e, "UTC" === o.timeZone || null == t.timeZoneOffset ? "UTC" : Oe(t.timeZoneOffset)));
                    r.omitCommas && (e = e.replace(Ve, "").trim());
                    r.omitZeroMinute && (e = e.replace(":00", ""));
                    !1 === r.meridiem ? e = e.replace(Fe, "").trim() : "narrow" === r.meridiem ? e = e.replace(Fe, function(e, t) {
                        return t.toLocaleLowerCase()
                    }) : "short" === r.meridiem ? e = e.replace(Fe, function(e, t) {
                        return t.toLocaleLowerCase() + "m"
                    }) : "lowercase" === r.meridiem && (e = e.replace(Fe, function(e) {
                        return e.toLocaleLowerCase()
                    }));
                    return e = (e = e.replace(Ge, " ")).trim()
                }((r && !a.getUTCMinutes() ? r : o).format(a), i, e, t, n)
            }
        }(e, t, n)
    }
    function Ke(e, t) {
        var n = t.markerToArray(e.marker);
        return {
            marker: e.marker,
            timeZoneOffset: e.timeZoneOffset,
            array: n,
            year: n[0],
            month: n[1],
            day: n[2],
            hour: n[3],
            minute: n[4],
            second: n[5],
            millisecond: n[6]
        }
    }
    function Je(e, t, n, r) {
        var o = Ke(e, n.calendarSystem);
        return {
            date: o,
            start: o,
            end: t ? Ke(t, n.calendarSystem) : null,
            timeZone: n.timeZone,
            localeCodes: n.locale.codes,
            defaultSeparator: r || n.defaultSeparator
        }
    }
    var $e = function() {
        function e(e) {
            this.cmdStr = e
        }
        return e.prototype.format = function(e, t, n) {
            return t.cmdFormatter(this.cmdStr, Je(e, null, t, n))
        }
        ,
        e.prototype.formatRange = function(e, t, n, r) {
            return n.cmdFormatter(this.cmdStr, Je(e, t, n, r))
        }
        ,
        e
    }()
      , Qe = function() {
        function e(e) {
            this.func = e
        }
        return e.prototype.format = function(e, t, n) {
            return this.func(Je(e, null, t, n))
        }
        ,
        e.prototype.formatRange = function(e, t, n, r) {
            return this.func(Je(e, t, n, r))
        }
        ,
        e
    }();
    function et(e) {
        return "object" == typeof e && e ? new Ze(e) : "string" == typeof e ? new $e(e) : "function" == typeof e ? new Qe(e) : null
    }
    var tt = {
        navLinkDayClick: ct,
        navLinkWeekClick: ct,
        duration: Re,
        bootstrapFontAwesome: ct,
        buttonIcons: ct,
        customButtons: ct,
        defaultAllDayEventDuration: Re,
        defaultTimedEventDuration: Re,
        nextDayThreshold: Re,
        scrollTime: Re,
        slotMinTime: Re,
        slotMaxTime: Re,
        dayPopoverFormat: et,
        slotDuration: Re,
        snapDuration: Re,
        headerToolbar: ct,
        footerToolbar: ct,
        defaultRangeSeparator: String,
        titleRangeSeparator: String,
        forceEventDuration: Boolean,
        dayHeaders: Boolean,
        dayHeaderFormat: et,
        dayHeaderClassNames: ct,
        dayHeaderContent: ct,
        dayHeaderDidMount: ct,
        dayHeaderWillUnmount: ct,
        dayCellClassNames: ct,
        dayCellContent: ct,
        dayCellDidMount: ct,
        dayCellWillUnmount: ct,
        initialView: String,
        aspectRatio: Number,
        weekends: Boolean,
        weekNumberCalculation: ct,
        weekNumbers: Boolean,
        weekNumberClassNames: ct,
        weekNumberContent: ct,
        weekNumberDidMount: ct,
        weekNumberWillUnmount: ct,
        editable: Boolean,
        viewClassNames: ct,
        viewDidMount: ct,
        viewWillUnmount: ct,
        nowIndicator: Boolean,
        nowIndicatorClassNames: ct,
        nowIndicatorContent: ct,
        nowIndicatorDidMount: ct,
        nowIndicatorWillUnmount: ct,
        showNonCurrentDates: Boolean,
        lazyFetching: Boolean,
        startParam: String,
        endParam: String,
        timeZoneParam: String,
        timeZone: String,
        locales: ct,
        locale: ct,
        themeSystem: String,
        dragRevertDuration: Number,
        dragScroll: Boolean,
        allDayMaintainDuration: Boolean,
        unselectAuto: Boolean,
        dropAccept: ct,
        eventOrder: j,
        handleWindowResize: Boolean,
        windowResizeDelay: Number,
        longPressDelay: Number,
        eventDragMinDistance: Number,
        expandRows: Boolean,
        height: ct,
        contentHeight: ct,
        direction: String,
        weekNumberFormat: et,
        eventResizableFromStart: Boolean,
        displayEventTime: Boolean,
        displayEventEnd: Boolean,
        weekText: String,
        progressiveEventRendering: Boolean,
        businessHours: ct,
        initialDate: ct,
        now: ct,
        eventDataTransform: ct,
        stickyHeaderDates: ct,
        stickyFooterScrollbar: ct,
        viewHeight: ct,
        defaultAllDay: Boolean,
        eventSourceFailure: ct,
        eventSourceSuccess: ct,
        eventDisplay: String,
        eventStartEditable: Boolean,
        eventDurationEditable: Boolean,
        eventOverlap: ct,
        eventConstraint: ct,
        eventAllow: ct,
        eventBackgroundColor: String,
        eventBorderColor: String,
        eventTextColor: String,
        eventColor: String,
        eventClassNames: ct,
        eventContent: ct,
        eventDidMount: ct,
        eventWillUnmount: ct,
        selectConstraint: ct,
        selectOverlap: ct,
        selectAllow: ct,
        droppable: Boolean,
        unselectCancel: String,
        slotLabelFormat: ct,
        slotLaneClassNames: ct,
        slotLaneContent: ct,
        slotLaneDidMount: ct,
        slotLaneWillUnmount: ct,
        slotLabelClassNames: ct,
        slotLabelContent: ct,
        slotLabelDidMount: ct,
        slotLabelWillUnmount: ct,
        dayMaxEvents: ct,
        dayMaxEventRows: ct,
        dayMinWidth: Number,
        slotLabelInterval: Re,
        allDayText: String,
        allDayClassNames: ct,
        allDayContent: ct,
        allDayDidMount: ct,
        allDayWillUnmount: ct,
        slotMinWidth: Number,
        navLinks: Boolean,
        eventTimeFormat: et,
        rerenderDelay: Number,
        moreLinkText: ct,
        selectMinDistance: Number,
        selectable: Boolean,
        selectLongPressDelay: Number,
        eventLongPressDelay: Number,
        selectMirror: Boolean,
        eventMinHeight: Number,
        slotEventOverlap: Boolean,
        plugins: ct,
        firstDay: Number,
        dayCount: Number,
        dateAlignment: String,
        dateIncrement: Re,
        hiddenDays: ct,
        monthMode: Boolean,
        fixedWeekCount: Boolean,
        validRange: ct,
        visibleRange: ct,
        titleFormat: ct,
        noEventsText: String
    }
      , nt = {
        eventDisplay: "auto",
        defaultRangeSeparator: " - ",
        titleRangeSeparator: " – ",
        defaultTimedEventDuration: "01:00:00",
        defaultAllDayEventDuration: {
            day: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "00:00:00",
        dayHeaders: !0,
        initialView: "",
        aspectRatio: 1.35,
        headerToolbar: {
            start: "title",
            center: "",
            end: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberCalculation: "local",
        editable: !1,
        nowIndicator: !1,
        scrollTime: "06:00:00",
        slotMinTime: "00:00:00",
        slotMaxTime: "24:00:00",
        showNonCurrentDates: !0,
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timeZoneParam: "timeZone",
        timeZone: "local",
        locales: [],
        locale: "",
        themeSystem: "standard",
        dragRevertDuration: 500,
        dragScroll: !0,
        allDayMaintainDuration: !1,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "start,-duration,allDay,title",
        dayPopoverFormat: {
            month: "long",
            day: "numeric",
            year: "numeric"
        },
        handleWindowResize: !0,
        windowResizeDelay: 100,
        longPressDelay: 1e3,
        eventDragMinDistance: 5,
        expandRows: !1,
        navLinks: !1,
        selectable: !1
    }
      , rt = {
        datesSet: ct,
        eventsSet: ct,
        eventAdd: ct,
        eventChange: ct,
        eventRemove: ct,
        windowResize: ct,
        eventClick: ct,
        eventMouseEnter: ct,
        eventMouseLeave: ct,
        select: ct,
        unselect: ct,
        loading: ct,
        _unmount: ct,
        _beforeprint: ct,
        _afterprint: ct,
        _noEventDrop: ct,
        _noEventResize: ct,
        _resize: ct,
        _scrollRequest: ct
    }
      , ot = {
        buttonText: ct,
        views: ct,
        plugins: ct,
        initialEvents: ct,
        events: ct,
        eventSources: ct
    }
      , it = {
        headerToolbar: at,
        footerToolbar: at,
        buttonText: at,
        buttonIcons: at
    };
    function at(e, t) {
        return "object" == typeof e && "object" == typeof t && e && t ? ge(e, t) : e === t
    }
    var st = {
        type: String,
        component: ct,
        buttonText: String,
        buttonTextKey: String,
        dateProfileGeneratorClass: ct,
        usesMinMaxTime: Boolean,
        classNames: ct,
        content: ct,
        didMount: ct,
        willUnmount: ct
    };
    function lt(e) {
        return de(e, it)
    }
    function ut(e, t) {
        var n = {}
          , r = {};
        for (var o in t)
            o in e && (n[o] = t[o](e[o]));
        for (var o in e)
            o in t || (r[o] = e[o]);
        return {
            refined: n,
            extra: r
        }
    }
    function ct(e) {
        return e
    }
    function dt(e, t, n, r) {
        for (var o = {
            defs: {},
            instances: {}
        }, i = xt(n), a = 0, s = e; a < s.length; a++) {
            var l = Rt(s[a], t, n, r, i);
            l && pt(l, o)
        }
        return o
    }
    function pt(e, t) {
        return void 0 === t && (t = {
            defs: {},
            instances: {}
        }),
        t.defs[e.def.defId] = e.def,
        e.instance && (t.instances[e.instance.instanceId] = e.instance),
        t
    }
    function ft(e, t) {
        var n = e.instances[t];
        if (n) {
            var r = e.defs[n.defId]
              , o = vt(e, function(e) {
                return t = r,
                n = e,
                Boolean(t.groupId && t.groupId === n.groupId);
                var t, n
            });
            return o.defs[r.defId] = r,
            o.instances[n.instanceId] = n,
            o
        }
        return {
            defs: {},
            instances: {}
        }
    }
    function ht(e, t) {
        return {
            defs: h(h({}, e.defs), t.defs),
            instances: h(h({}, e.instances), t.instances)
        }
    }
    function vt(e, t) {
        var n = pe(e.defs, t)
          , r = pe(e.instances, function(e) {
            return n[e.defId]
        });
        return {
            defs: n,
            instances: r
        }
    }
    function gt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : []
    }
    var mt = {
        display: String,
        editable: Boolean,
        startEditable: Boolean,
        durationEditable: Boolean,
        constraint: ct,
        overlap: ct,
        allow: ct,
        className: gt,
        classNames: gt,
        color: String,
        backgroundColor: String,
        borderColor: String,
        textColor: String
    }
      , yt = {
        display: null,
        startEditable: null,
        durationEditable: null,
        constraints: [],
        overlap: null,
        allows: [],
        backgroundColor: "",
        borderColor: "",
        textColor: "",
        classNames: []
    };
    function bt(e, t) {
        var n = function(e, t) {
            return Array.isArray(e) ? dt(e, null, t, !0) : "object" == typeof e && e ? dt([e], null, t, !0) : null != e ? String(e) : null
        }(e.constraint, t);
        return {
            display: e.display || null,
            startEditable: null != e.startEditable ? e.startEditable : e.editable,
            durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
            constraints: null != n ? [n] : [],
            overlap: null != e.overlap ? e.overlap : null,
            allows: null != e.allow ? [e.allow] : [],
            backgroundColor: e.backgroundColor || e.color || "",
            borderColor: e.borderColor || e.color || "",
            textColor: e.textColor || "",
            classNames: (e.className || []).concat(e.classNames || [])
        }
    }
    function St(e) {
        return e.reduce(Et, yt)
    }
    function Et(e, t) {
        return {
            display: null != t.display ? t.display : e.display,
            startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
            durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
            constraints: e.constraints.concat(t.constraints),
            overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
            allows: e.allows.concat(t.allows),
            backgroundColor: t.backgroundColor || e.backgroundColor,
            borderColor: t.borderColor || e.borderColor,
            textColor: t.textColor || e.textColor,
            classNames: e.classNames.concat(t.classNames)
        }
    }
    var wt = {
        id: String,
        groupId: String,
        title: String,
        url: String
    }
      , Dt = {
        start: ct,
        end: ct,
        date: ct,
        allDay: Boolean
    }
      , Ct = h(h(h({}, wt), Dt), {
        extendedProps: ct
    });
    function Rt(e, t, n, r, o) {
        void 0 === o && (o = xt(n));
        var i = Tt(e, n, o)
          , a = i.refined
          , s = i.extra
          , l = function(e, t) {
            var n = null;
            e && (n = e.defaultAllDay);
            null == n && (n = t.options.defaultAllDay);
            return n
        }(t, n)
          , u = function(e, t, n, r) {
            for (var o = 0; o < r.length; o += 1) {
                var i = r[o].parse(e, n);
                if (i) {
                    var a = e.allDay;
                    return null == a && null == (a = t) && null == (a = i.allDayGuess) && (a = !1),
                    {
                        allDay: a,
                        duration: i.duration,
                        typeData: i.typeData,
                        typeId: o
                    }
                }
            }
            return null
        }(a, l, n.dateEnv, n.pluginHooks.recurringTypes);
        if (u)
            return (c = kt(a, s, t ? t.sourceId : "", u.allDay, Boolean(u.duration), n)).recurringDef = {
                typeId: u.typeId,
                typeData: u.typeData,
                duration: u.duration
            },
            {
                def: c,
                instance: null
            };
        var c, d = function(e, t, n, r) {
            var o, i, a = e.allDay, s = null, l = !1, u = null, c = null != e.start ? e.start : e.date;
            if (o = n.dateEnv.createMarkerMeta(c))
                s = o.marker;
            else if (!r)
                return null;
            null != e.end && (i = n.dateEnv.createMarkerMeta(e.end));
            null == a && (a = null != t ? t : (!o || o.isTimeUnspecified) && (!i || i.isTimeUnspecified));
            a && s && (s = ee(s));
            i && (u = i.marker,
            a && (u = ee(u)),
            s && u <= s && (u = null));
            u ? l = !0 : r || (l = n.options.forceEventDuration || !1,
            u = n.dateEnv.add(s, a ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration));
            return {
                allDay: a,
                hasEnd: l,
                range: {
                    start: s,
                    end: u
                },
                forcedStartTzo: o ? o.forcedTzo : null,
                forcedEndTzo: i ? i.forcedTzo : null
            }
        }(a, l, n, r);
        return d ? {
            def: c = kt(a, s, t ? t.sourceId : "", d.allDay, d.hasEnd, n),
            instance: ue(c.defId, d.range, d.forcedStartTzo, d.forcedEndTzo)
        } : null
    }
    function Tt(e, t, n) {
        return void 0 === n && (n = xt(t)),
        ut(e, n)
    }
    function xt(e) {
        return h(h(h({}, mt), Ct), e.pluginHooks.eventRefiners)
    }
    function kt(e, t, n, r, o, i) {
        for (var a = {
            title: e.title || "",
            groupId: e.groupId || "",
            publicId: e.id || "",
            url: e.url || "",
            recurringDef: null,
            defId: L(),
            sourceId: n,
            allDay: r,
            hasEnd: o,
            ui: bt(e, i),
            extendedProps: h(h({}, e.extendedProps || {}), t)
        }, s = 0, l = i.pluginHooks.eventDefMemberAdders; s < l.length; s++) {
            var u = l[s];
            h(a, u(e))
        }
        return Object.freeze(a.ui.classNames),
        Object.freeze(a.extendedProps),
        a
    }
    function Mt(e) {
        var t = Math.floor($(e.start, e.end)) || 1
          , n = ee(e.start);
        return {
            start: n,
            end: K(n, t)
        }
    }
    function _t(e, t) {
        void 0 === t && (t = Re(0));
        var n = null
          , r = null;
        if (e.end) {
            r = ee(e.end);
            var o = e.end.valueOf() - r.valueOf();
            o && o >= Pe(t) && (r = K(r, 1))
        }
        return e.start && (n = ee(e.start),
        r && r <= n && (r = K(n, 1))),
        {
            start: n,
            end: r
        }
    }
    function Pt(e, t, n, r) {
        return "year" === r ? Re(n.diffWholeYears(e, t), "year") : "month" === r ? Re(n.diffWholeMonths(e, t), "month") : (i = t,
        a = ee(o = e),
        s = ee(i),
        {
            years: 0,
            months: 0,
            days: Math.round($(a, s)),
            milliseconds: i.valueOf() - s.valueOf() - (o.valueOf() - a.valueOf())
        });
        var o, i, a, s
    }
    function It(e, t) {
        var n, r, o = [], i = t.start;
        for (e.sort(Nt),
        n = 0; n < e.length; n += 1)
            (r = e[n]).start > i && o.push({
                start: i,
                end: r.start
            }),
            r.end > i && (i = r.end);
        return i < t.end && o.push({
            start: i,
            end: t.end
        }),
        o
    }
    function Nt(e, t) {
        return e.start.valueOf() - t.start.valueOf()
    }
    function Ht(e, t) {
        var n = e.start
          , r = e.end
          , o = null;
        return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
        null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))),
        (null === n || null === r || n < r) && (o = {
            start: n,
            end: r
        }),
        o
    }
    function Ot(e, t) {
        return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf())
    }
    function At(e, t) {
        return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end)
    }
    function Lt(e, t) {
        return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end)
    }
    function Wt(e, t) {
        return (null === e.start || t >= e.start) && (null === e.end || t < e.end)
    }
    function Ut(e, t, n, r) {
        var o = {}
          , i = {}
          , a = {}
          , s = []
          , l = []
          , u = Bt(e.defs, t);
        for (var c in e.defs) {
            "inverse-background" === (f = u[(S = e.defs[c]).defId]).display && (S.groupId ? (o[S.groupId] = [],
            a[S.groupId] || (a[S.groupId] = S)) : i[c] = [])
        }
        for (var d in e.instances) {
            var p = e.instances[d]
              , f = u[(S = e.defs[p.defId]).defId]
              , h = p.range
              , v = !S.allDay && r ? _t(h, r) : h
              , g = Ht(v, n);
            g && ("inverse-background" === f.display ? S.groupId ? o[S.groupId].push(g) : i[p.defId].push(g) : "none" !== f.display && ("background" === f.display ? s : l).push({
                def: S,
                ui: f,
                instance: p,
                range: g,
                isStart: v.start && v.start.valueOf() === g.start.valueOf(),
                isEnd: v.end && v.end.valueOf() === g.end.valueOf()
            }))
        }
        for (var m in o)
            for (var y = 0, b = It(o[m], n); y < b.length; y++) {
                var S, E = b[y];
                f = u[(S = a[m]).defId];
                s.push({
                    def: S,
                    ui: f,
                    instance: null,
                    range: E,
                    isStart: !1,
                    isEnd: !1
                })
            }
        for (var c in i)
            for (var w = 0, D = It(i[c], n); w < D.length; w++) {
                E = D[w];
                s.push({
                    def: e.defs[c],
                    ui: u[c],
                    instance: null,
                    range: E,
                    isStart: !1,
                    isEnd: !1
                })
            }
        return {
            bg: s,
            fg: l
        }
    }
    function jt(e, t) {
        e.fcSeg = t
    }
    function zt(e) {
        return e.fcSeg || e.parentNode.fcSeg || null
    }
    function Bt(e, t) {
        return fe(e, function(e) {
            return Ft(e, t)
        })
    }
    function Ft(e, t) {
        var n = [];
        return t[""] && n.push(t[""]),
        t[e.defId] && n.push(t[e.defId]),
        n.push(e.ui),
        St(n)
    }
    function Vt(e, t) {
        var n = e.map(Gt);
        return n.sort(function(e, n) {
            return z(e, n, t)
        }),
        n.map(function(e) {
            return e._seg
        })
    }
    function Gt(e) {
        var t = e.eventRange
          , n = t.def
          , r = t.instance ? t.instance.range : t.range
          , o = r.start ? r.start.valueOf() : 0
          , i = r.end ? r.end.valueOf() : 0;
        return h(h(h({}, n.extendedProps), n), {
            id: n.publicId,
            start: o,
            end: i,
            duration: i - o,
            allDay: Number(n.allDay),
            _seg: e
        })
    }
    function qt(e, t) {
        for (var n = t.pluginHooks.isDraggableTransformers, r = e.eventRange, o = r.def, i = r.ui, a = i.startEditable, s = 0, l = n; s < l.length; s++) {
            a = (0,
            l[s])(a, o, i, t)
        }
        return a
    }
    function Yt(e, t) {
        return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart
    }
    function Zt(e, t) {
        return e.isEnd && e.eventRange.ui.durationEditable
    }
    function Xt(e, t, n, r, o, i, a) {
        var s = n.dateEnv
          , l = n.options
          , u = l.displayEventTime
          , c = l.displayEventEnd
          , d = e.eventRange.def
          , p = e.eventRange.instance;
        if (null == u && (u = !1 !== r),
        null == c && (c = !1 !== o),
        u && !d.allDay && (e.isStart || e.isEnd)) {
            var f = i || (e.isStart ? p.range.start : e.start || e.eventRange.range.start)
              , h = a || (e.isEnd ? p.range.end : e.end || e.eventRange.range.end);
            return c && d.hasEnd ? s.formatRange(f, h, t, {
                forcedStartTzo: i ? null : p.forcedStartTzo,
                forcedEndTzo: a ? null : p.forcedEndTzo
            }) : s.format(f, t, {
                forcedTzo: i ? null : p.forcedStartTzo
            })
        }
        return ""
    }
    function Kt(e, t, n) {
        var r = e.eventRange.range;
        return {
            isPast: r.end < (n || t.start),
            isFuture: r.start >= (n || t.end),
            isToday: t && Wt(t, r.start)
        }
    }
    function Jt(e) {
        return e.instance ? e.instance.instanceId : e.def.defId + ":" + e.range.start.toISOString()
    }
    var $t = {
        start: ct,
        end: ct,
        allDay: Boolean
    };
    function Qt(e, t, n) {
        var r = function(e, t) {
            var n = ut(e, $t)
              , r = n.refined
              , o = n.extra
              , i = r.start ? t.createMarkerMeta(r.start) : null
              , a = r.end ? t.createMarkerMeta(r.end) : null
              , s = r.allDay;
            null == s && (s = i && i.isTimeUnspecified && (!a || a.isTimeUnspecified));
            return h({
                range: {
                    start: i ? i.marker : null,
                    end: a ? a.marker : null
                },
                allDay: s
            }, o)
        }(e, t)
          , o = r.range;
        if (!o.start)
            return null;
        if (!o.end) {
            if (null == n)
                return null;
            o.end = t.add(o.start, n)
        }
        return r
    }
    function en(e, t, n) {
        return h(h({}, tn(e, t, n)), {
            timeZone: t.timeZone
        })
    }
    function tn(e, t, n) {
        return {
            start: t.toDate(e.start),
            end: t.toDate(e.end),
            startStr: t.formatIso(e.start, {
                omitTime: n
            }),
            endStr: t.formatIso(e.end, {
                omitTime: n
            })
        }
    }
    function nn(e, t, n) {
        var r = Tt({
            editable: !1
        }, n)
          , o = kt(r.refined, r.extra, "", e.allDay, !0, n);
        return {
            def: o,
            ui: Ft(o, t),
            instance: ue(o.defId, e.range),
            range: e.range,
            isStart: !0,
            isEnd: !0
        }
    }
    function rn(e, t, n) {
        n.emitter.trigger("select", h(h({}, on(e, n)), {
            jsEvent: t ? t.origEvent : null,
            view: n.viewApi || n.calendarApi.view
        }))
    }
    function on(e, t) {
        for (var n, r, o = {}, i = 0, a = t.pluginHooks.dateSpanTransforms; i < a.length; i++) {
            var s = a[i];
            h(o, s(e, t))
        }
        return h(o, (n = e,
        r = t.dateEnv,
        h(h({}, tn(n.range, r, n.allDay)), {
            allDay: n.allDay
        }))),
        o
    }
    function an(e, t, n) {
        var r = n.dateEnv
          , o = n.options
          , i = t;
        return e ? (i = ee(i),
        i = r.add(i, o.defaultAllDayEventDuration)) : i = r.add(i, o.defaultTimedEventDuration),
        i
    }
    function sn(e, t, n, r) {
        var o = Bt(e.defs, t)
          , i = {
            defs: {},
            instances: {}
        };
        for (var a in e.defs) {
            var s = e.defs[a];
            i.defs[a] = ln(s, o[a], n, r)
        }
        for (var l in e.instances) {
            var u = e.instances[l];
            s = i.defs[u.defId];
            i.instances[l] = un(u, s, o[u.defId], n, r)
        }
        return i
    }
    function ln(e, t, n, r) {
        var o = n.standardProps || {};
        null == o.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (o.hasEnd = !0);
        var i = h(h(h({}, e), o), {
            ui: h(h({}, e.ui), o.ui)
        });
        n.extendedProps && (i.extendedProps = h(h({}, i.extendedProps), n.extendedProps));
        for (var a = 0, s = r.pluginHooks.eventDefMutationAppliers; a < s.length; a++) {
            (0,
            s[a])(i, n, r)
        }
        return !i.hasEnd && r.options.forceEventDuration && (i.hasEnd = !0),
        i
    }
    function un(e, t, n, r, o) {
        var i = o.dateEnv
          , a = r.standardProps && !0 === r.standardProps.allDay
          , s = r.standardProps && !1 === r.standardProps.hasEnd
          , l = h({}, e);
        return a && (l.range = Mt(l.range)),
        r.datesDelta && n.startEditable && (l.range = {
            start: i.add(l.range.start, r.datesDelta),
            end: i.add(l.range.end, r.datesDelta)
        }),
        r.startDelta && n.durationEditable && (l.range = {
            start: i.add(l.range.start, r.startDelta),
            end: l.range.end
        }),
        r.endDelta && n.durationEditable && (l.range = {
            start: l.range.start,
            end: i.add(l.range.end, r.endDelta)
        }),
        s && (l.range = {
            start: l.range.start,
            end: an(t.allDay, l.range.start, o)
        }),
        t.allDay && (l.range = {
            start: ee(l.range.start),
            end: ee(l.range.end)
        }),
        l.range.end < l.range.start && (l.range.end = an(t.allDay, l.range.start, o)),
        l
    }
    var cn = function() {
        function e(e, t, n) {
            this.type = e,
            this.getCurrentData = t,
            this.dateEnv = n
        }
        return Object.defineProperty(e.prototype, "calendar", {
            get: function() {
                return this.getCurrentData().calendarApi
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "title", {
            get: function() {
                return this.getCurrentData().viewTitle
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "activeStart", {
            get: function() {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "activeEnd", {
            get: function() {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "currentStart", {
            get: function() {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "currentEnd", {
            get: function() {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.getOption = function(e) {
            return this.getCurrentData().options[e]
        }
        ,
        e
    }()
      , dn = {
        id: String,
        defaultAllDay: Boolean,
        url: String,
        events: ct,
        eventDataTransform: ct,
        success: ct,
        failure: ct
    };
    function pn(e, t, n) {
        var r;
        if (void 0 === n && (n = fn(t)),
        "string" == typeof e ? r = {
            url: e
        } : "function" == typeof e || Array.isArray(e) ? r = {
            events: e
        } : "object" == typeof e && e && (r = e),
        r) {
            var o = ut(r, n)
              , i = o.refined
              , a = o.extra
              , s = function(e, t) {
                for (var n = t.pluginHooks.eventSourceDefs, r = n.length - 1; r >= 0; r -= 1) {
                    var o = n[r].parseMeta(e);
                    if (o)
                        return {
                            sourceDefId: r,
                            meta: o
                        }
                }
                return null
            }(i, t);
            if (s)
                return {
                    _raw: e,
                    isFetching: !1,
                    latestFetchId: "",
                    fetchRange: null,
                    defaultAllDay: i.defaultAllDay,
                    eventDataTransform: i.eventDataTransform,
                    success: i.success,
                    failure: i.failure,
                    publicId: i.id || "",
                    sourceId: L(),
                    sourceDefId: s.sourceDefId,
                    meta: s.meta,
                    ui: bt(i, t),
                    extendedProps: a
                }
        }
        return null
    }
    function fn(e) {
        return h(h(h({}, mt), dn), e.pluginHooks.eventSourceRefiners)
    }
    function hn(e, t) {
        return "function" == typeof e && (e = e()),
        null == e ? t.createNowMarker() : t.createMarker(e)
    }
    var vn = function() {
        function e() {}
        return e.prototype.getCurrentData = function() {
            return this.currentDataManager.getCurrentData()
        }
        ,
        e.prototype.dispatch = function(e) {
            return this.currentDataManager.dispatch(e)
        }
        ,
        Object.defineProperty(e.prototype, "view", {
            get: function() {
                return this.getCurrentData().viewApi
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.batchRendering = function(e) {
            e()
        }
        ,
        e.prototype.updateSize = function() {
            this.trigger("_resize", !0)
        }
        ,
        e.prototype.setOption = function(e, t) {
            this.dispatch({
                type: "SET_OPTION",
                optionName: e,
                rawOptionValue: t
            })
        }
        ,
        e.prototype.getOption = function(e) {
            return this.currentDataManager.currentCalendarOptionsInput[e]
        }
        ,
        e.prototype.getAvailableLocaleCodes = function() {
            return Object.keys(this.getCurrentData().availableRawLocales)
        }
        ,
        e.prototype.on = function(e, t) {
            var n = this.currentDataManager;
            n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn("Unknown listener name '" + e + "'")
        }
        ,
        e.prototype.off = function(e, t) {
            this.currentDataManager.emitter.off(e, t)
        }
        ,
        e.prototype.trigger = function(e) {
            for (var t, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            (t = this.currentDataManager.emitter).trigger.apply(t, v([e], n))
        }
        ,
        e.prototype.changeView = function(e, t) {
            var n = this;
            this.batchRendering(function() {
                if (n.unselect(),
                t)
                    if (t.start && t.end)
                        n.dispatch({
                            type: "CHANGE_VIEW_TYPE",
                            viewType: e
                        }),
                        n.dispatch({
                            type: "SET_OPTION",
                            optionName: "visibleRange",
                            rawOptionValue: t
                        });
                    else {
                        var r = n.getCurrentData().dateEnv;
                        n.dispatch({
                            type: "CHANGE_VIEW_TYPE",
                            viewType: e,
                            dateMarker: r.createMarker(t)
                        })
                    }
                else
                    n.dispatch({
                        type: "CHANGE_VIEW_TYPE",
                        viewType: e
                    })
            })
        }
        ,
        e.prototype.zoomTo = function(e, t) {
            var n;
            t = t || "day",
            n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t),
            this.unselect(),
            n ? this.dispatch({
                type: "CHANGE_VIEW_TYPE",
                viewType: n.type,
                dateMarker: e
            }) : this.dispatch({
                type: "CHANGE_DATE",
                dateMarker: e
            })
        }
        ,
        e.prototype.getUnitViewSpec = function(e) {
            var t, n, r = this.getCurrentData(), o = r.viewSpecs, i = r.toolbarConfig, a = [].concat(i.viewsWithButtons);
            for (var s in o)
                a.push(s);
            for (t = 0; t < a.length; t += 1)
                if ((n = o[a[t]]) && n.singleUnit === e)
                    return n;
            return null
        }
        ,
        e.prototype.prev = function() {
            this.unselect(),
            this.dispatch({
                type: "PREV"
            })
        }
        ,
        e.prototype.next = function() {
            this.unselect(),
            this.dispatch({
                type: "NEXT"
            })
        }
        ,
        e.prototype.prevYear = function() {
            var e = this.getCurrentData();
            this.unselect(),
            this.dispatch({
                type: "CHANGE_DATE",
                dateMarker: e.dateEnv.addYears(e.currentDate, -1)
            })
        }
        ,
        e.prototype.nextYear = function() {
            var e = this.getCurrentData();
            this.unselect(),
            this.dispatch({
                type: "CHANGE_DATE",
                dateMarker: e.dateEnv.addYears(e.currentDate, 1)
            })
        }
        ,
        e.prototype.today = function() {
            var e = this.getCurrentData();
            this.unselect(),
            this.dispatch({
                type: "CHANGE_DATE",
                dateMarker: hn(e.calendarOptions.now, e.dateEnv)
            })
        }
        ,
        e.prototype.gotoDate = function(e) {
            var t = this.getCurrentData();
            this.unselect(),
            this.dispatch({
                type: "CHANGE_DATE",
                dateMarker: t.dateEnv.createMarker(e)
            })
        }
        ,
        e.prototype.incrementDate = function(e) {
            var t = this.getCurrentData()
              , n = Re(e);
            n && (this.unselect(),
            this.dispatch({
                type: "CHANGE_DATE",
                dateMarker: t.dateEnv.add(t.currentDate, n)
            }))
        }
        ,
        e.prototype.getDate = function() {
            var e = this.getCurrentData();
            return e.dateEnv.toDate(e.currentDate)
        }
        ,
        e.prototype.formatDate = function(e, t) {
            var n = this.getCurrentData().dateEnv;
            return n.format(n.createMarker(e), et(t))
        }
        ,
        e.prototype.formatRange = function(e, t, n) {
            var r = this.getCurrentData().dateEnv;
            return r.formatRange(r.createMarker(e), r.createMarker(t), et(n), n)
        }
        ,
        e.prototype.formatIso = function(e, t) {
            var n = this.getCurrentData().dateEnv;
            return n.formatIso(n.createMarker(e), {
                omitTime: t
            })
        }
        ,
        e.prototype.select = function(e, t) {
            var n;
            n = null == t ? null != e.start ? e : {
                start: e,
                end: null
            } : {
                start: e,
                end: t
            };
            var r = this.getCurrentData()
              , o = Qt(n, r.dateEnv, Re({
                days: 1
            }));
            o && (this.dispatch({
                type: "SELECT_DATES",
                selection: o
            }),
            rn(o, null, r))
        }
        ,
        e.prototype.unselect = function(e) {
            var t = this.getCurrentData();
            t.dateSelection && (this.dispatch({
                type: "UNSELECT_DATES"
            }),
            function(e, t) {
                t.emitter.trigger("unselect", {
                    jsEvent: e ? e.origEvent : null,
                    view: t.viewApi || t.calendarApi.view
                })
            }(e, t))
        }
        ,
        e.prototype.addEvent = function(e, t) {
            if (e instanceof gn) {
                var n = e._def
                  , r = e._instance;
                return this.getCurrentData().eventStore.defs[n.defId] || (this.dispatch({
                    type: "ADD_EVENTS",
                    eventStore: pt({
                        def: n,
                        instance: r
                    })
                }),
                this.triggerEventAdd(e)),
                e
            }
            var o, i = this.getCurrentData();
            if (t instanceof C)
                o = t.internalEventSource;
            else if ("boolean" == typeof t)
                t && (o = ve(i.eventSources)[0]);
            else if (null != t) {
                var a = this.getEventSourceById(t);
                if (!a)
                    return console.warn('Could not find an event source with ID "' + t + '"'),
                    null;
                o = a.internalEventSource
            }
            var s = Rt(e, o, i, !1);
            if (s) {
                var l = new gn(i,s.def,s.def.recurringDef ? null : s.instance);
                return this.dispatch({
                    type: "ADD_EVENTS",
                    eventStore: pt(s)
                }),
                this.triggerEventAdd(l),
                l
            }
            return null
        }
        ,
        e.prototype.triggerEventAdd = function(e) {
            var t = this;
            this.getCurrentData().emitter.trigger("eventAdd", {
                event: e,
                relatedEvents: [],
                revert: function() {
                    t.dispatch({
                        type: "REMOVE_EVENTS",
                        eventStore: mn(e)
                    })
                }
            })
        }
        ,
        e.prototype.getEventById = function(e) {
            var t = this.getCurrentData()
              , n = t.eventStore
              , r = n.defs
              , o = n.instances;
            for (var i in e = String(e),
            r) {
                var a = r[i];
                if (a.publicId === e) {
                    if (a.recurringDef)
                        return new gn(t,a,null);
                    for (var s in o) {
                        var l = o[s];
                        if (l.defId === a.defId)
                            return new gn(t,a,l)
                    }
                }
            }
            return null
        }
        ,
        e.prototype.getEvents = function() {
            var e = this.getCurrentData();
            return yn(e.eventStore, e)
        }
        ,
        e.prototype.removeAllEvents = function() {
            this.dispatch({
                type: "REMOVE_ALL_EVENTS"
            })
        }
        ,
        e.prototype.getEventSources = function() {
            var e = this.getCurrentData()
              , t = e.eventSources
              , n = [];
            for (var r in t)
                n.push(new C(e,t[r]));
            return n
        }
        ,
        e.prototype.getEventSourceById = function(e) {
            var t = this.getCurrentData()
              , n = t.eventSources;
            for (var r in e = String(e),
            n)
                if (n[r].publicId === e)
                    return new C(t,n[r]);
            return null
        }
        ,
        e.prototype.addEventSource = function(e) {
            var t = this.getCurrentData();
            if (e instanceof C)
                return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
                    type: "ADD_EVENT_SOURCES",
                    sources: [e.internalEventSource]
                }),
                e;
            var n = pn(e, t);
            return n ? (this.dispatch({
                type: "ADD_EVENT_SOURCES",
                sources: [n]
            }),
            new C(t,n)) : null
        }
        ,
        e.prototype.removeAllEventSources = function() {
            this.dispatch({
                type: "REMOVE_ALL_EVENT_SOURCES"
            })
        }
        ,
        e.prototype.refetchEvents = function() {
            this.dispatch({
                type: "FETCH_EVENT_SOURCES"
            })
        }
        ,
        e.prototype.scrollToTime = function(e) {
            var t = Re(e);
            t && this.trigger("_scrollRequest", {
                time: t
            })
        }
        ,
        e
    }()
      , gn = function() {
        function e(e, t, n) {
            this._context = e,
            this._def = t,
            this._instance = n || null
        }
        return e.prototype.setProp = function(e, t) {
            var n, r;
            if (e in Dt)
                console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
            else if (e in wt)
                t = wt[e](t),
                this.mutate({
                    standardProps: (n = {},
                    n[e] = t,
                    n)
                });
            else if (e in mt) {
                var o = mt[e](t);
                "color" === e ? o = {
                    backgroundColor: t,
                    borderColor: t
                } : "editable" === e ? o = {
                    startEditable: t,
                    durationEditable: t
                } : ((r = {})[e] = t,
                o = r),
                this.mutate({
                    standardProps: {
                        ui: o
                    }
                })
            } else
                console.warn("Could not set prop '" + e + "'. Use setExtendedProp instead.")
        }
        ,
        e.prototype.setExtendedProp = function(e, t) {
            var n;
            this.mutate({
                extendedProps: (n = {},
                n[e] = t,
                n)
            })
        }
        ,
        e.prototype.setStart = function(e, t) {
            void 0 === t && (t = {});
            var n = this._context.dateEnv
              , r = n.createMarker(e);
            if (r && this._instance) {
                var o = Pt(this._instance.range.start, r, n, t.granularity);
                t.maintainDuration ? this.mutate({
                    datesDelta: o
                }) : this.mutate({
                    startDelta: o
                })
            }
        }
        ,
        e.prototype.setEnd = function(e, t) {
            void 0 === t && (t = {});
            var n, r = this._context.dateEnv;
            if ((null == e || (n = r.createMarker(e))) && this._instance)
                if (n) {
                    var o = Pt(this._instance.range.end, n, r, t.granularity);
                    this.mutate({
                        endDelta: o
                    })
                } else
                    this.mutate({
                        standardProps: {
                            hasEnd: !1
                        }
                    })
        }
        ,
        e.prototype.setDates = function(e, t, n) {
            void 0 === n && (n = {});
            var r, o, i, a = this._context.dateEnv, s = {
                allDay: n.allDay
            }, l = a.createMarker(e);
            if (l && ((null == t || (r = a.createMarker(t))) && this._instance)) {
                var u = this._instance.range;
                !0 === n.allDay && (u = Mt(u));
                var c = Pt(u.start, l, a, n.granularity);
                if (r) {
                    var d = Pt(u.end, r, a, n.granularity);
                    i = d,
                    (o = c).years === i.years && o.months === i.months && o.days === i.days && o.milliseconds === i.milliseconds ? this.mutate({
                        datesDelta: c,
                        standardProps: s
                    }) : this.mutate({
                        startDelta: c,
                        endDelta: d,
                        standardProps: s
                    })
                } else
                    s.hasEnd = !1,
                    this.mutate({
                        datesDelta: c,
                        standardProps: s
                    })
            }
        }
        ,
        e.prototype.moveStart = function(e) {
            var t = Re(e);
            t && this.mutate({
                startDelta: t
            })
        }
        ,
        e.prototype.moveEnd = function(e) {
            var t = Re(e);
            t && this.mutate({
                endDelta: t
            })
        }
        ,
        e.prototype.moveDates = function(e) {
            var t = Re(e);
            t && this.mutate({
                datesDelta: t
            })
        }
        ,
        e.prototype.setAllDay = function(e, t) {
            void 0 === t && (t = {});
            var n = {
                allDay: e
            }
              , r = t.maintainDuration;
            null == r && (r = this._context.options.allDayMaintainDuration),
            this._def.allDay !== e && (n.hasEnd = r),
            this.mutate({
                standardProps: n
            })
        }
        ,
        e.prototype.formatRange = function(e) {
            var t = this._context.dateEnv
              , n = this._instance
              , r = et(e);
            return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
                forcedStartTzo: n.forcedStartTzo,
                forcedEndTzo: n.forcedEndTzo
            }) : t.format(n.range.start, r, {
                forcedTzo: n.forcedStartTzo
            })
        }
        ,
        e.prototype.mutate = function(t) {
            var n = this._instance;
            if (n) {
                var r = this._def
                  , o = this._context
                  , i = ft(o.getCurrentData().eventStore, n.instanceId);
                i = sn(i, {
                    "": {
                        display: "",
                        startEditable: !0,
                        durationEditable: !0,
                        constraints: [],
                        overlap: null,
                        allows: [],
                        backgroundColor: "",
                        borderColor: "",
                        textColor: "",
                        classNames: []
                    }
                }, t, o);
                var a = new e(o,r,n);
                this._def = i.defs[r.defId],
                this._instance = i.instances[n.instanceId],
                o.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: i
                }),
                o.emitter.trigger("eventChange", {
                    oldEvent: a,
                    event: this,
                    relatedEvents: yn(i, o, n),
                    revert: function() {
                        o.dispatch({
                            type: "REMOVE_EVENTS",
                            eventStore: i
                        })
                    }
                })
            }
        }
        ,
        e.prototype.remove = function() {
            var e = this._context
              , t = mn(this);
            e.dispatch({
                type: "REMOVE_EVENTS",
                eventStore: t
            }),
            e.emitter.trigger("eventRemove", {
                event: this,
                relatedEvents: [],
                revert: function() {
                    e.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: t
                    })
                }
            })
        }
        ,
        Object.defineProperty(e.prototype, "source", {
            get: function() {
                var e = this._def.sourceId;
                return e ? new C(this._context,this._context.getCurrentData().eventSources[e]) : null
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "start", {
            get: function() {
                return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "end", {
            get: function() {
                return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "startStr", {
            get: function() {
                var e = this._instance;
                return e ? this._context.dateEnv.formatIso(e.range.start, {
                    omitTime: this._def.allDay,
                    forcedTzo: e.forcedStartTzo
                }) : ""
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "endStr", {
            get: function() {
                var e = this._instance;
                return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
                    omitTime: this._def.allDay,
                    forcedTzo: e.forcedEndTzo
                }) : ""
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "id", {
            get: function() {
                return this._def.publicId
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "groupId", {
            get: function() {
                return this._def.groupId
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "allDay", {
            get: function() {
                return this._def.allDay
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "title", {
            get: function() {
                return this._def.title
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "url", {
            get: function() {
                return this._def.url
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "display", {
            get: function() {
                return this._def.ui.display || "auto"
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "startEditable", {
            get: function() {
                return this._def.ui.startEditable
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "durationEditable", {
            get: function() {
                return this._def.ui.durationEditable
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "constraint", {
            get: function() {
                return this._def.ui.constraints[0] || null
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "overlap", {
            get: function() {
                return this._def.ui.overlap
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "allow", {
            get: function() {
                return this._def.ui.allows[0] || null
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "backgroundColor", {
            get: function() {
                return this._def.ui.backgroundColor
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "borderColor", {
            get: function() {
                return this._def.ui.borderColor
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "textColor", {
            get: function() {
                return this._def.ui.textColor
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "classNames", {
            get: function() {
                return this._def.ui.classNames
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "extendedProps", {
            get: function() {
                return this._def.extendedProps
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.toPlainObject = function(e) {
            void 0 === e && (e = {});
            var t = this._def
              , n = t.ui
              , r = this.startStr
              , o = this.endStr
              , i = {};
            return t.title && (i.title = t.title),
            r && (i.start = r),
            o && (i.end = o),
            t.publicId && (i.id = t.publicId),
            t.groupId && (i.groupId = t.groupId),
            t.url && (i.url = t.url),
            n.display && "auto" !== n.display && (i.display = n.display),
            e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? i.color = n.backgroundColor : (n.backgroundColor && (i.backgroundColor = n.backgroundColor),
            n.borderColor && (i.borderColor = n.borderColor)),
            n.textColor && (i.textColor = n.textColor),
            n.classNames.length && (i.classNames = n.classNames),
            Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? h(i, t.extendedProps) : i.extendedProps = t.extendedProps),
            i
        }
        ,
        e.prototype.toJSON = function() {
            return this.toPlainObject()
        }
        ,
        e
    }();
    function mn(e) {
        var t, n, r = e._def, o = e._instance;
        return {
            defs: (t = {},
            t[r.defId] = r,
            t),
            instances: o ? (n = {},
            n[o.instanceId] = o,
            n) : {}
        }
    }
    function yn(e, t, n) {
        var r = e.defs
          , o = e.instances
          , i = []
          , a = n ? n.instanceId : "";
        for (var s in o) {
            var l = o[s]
              , u = r[l.defId];
            l.instanceId !== a && i.push(new gn(t,u,l))
        }
        return i
    }
    var bn = {};
    var Sn, En = function() {
        function e() {}
        return e.prototype.getMarkerYear = function(e) {
            return e.getUTCFullYear()
        }
        ,
        e.prototype.getMarkerMonth = function(e) {
            return e.getUTCMonth()
        }
        ,
        e.prototype.getMarkerDay = function(e) {
            return e.getUTCDate()
        }
        ,
        e.prototype.arrayToMarker = function(e) {
            return ae(e)
        }
        ,
        e.prototype.markerToArray = function(e) {
            return ie(e)
        }
        ,
        e
    }();
    Sn = En,
    bn["gregory"] = Sn;
    var wn = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
    var Dn = function() {
        function e(e) {
            var t = this.timeZone = e.timeZone
              , n = "local" !== t && "UTC" !== t;
            e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
            this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl),
            this.calendarSystem = function(e) {
                return new bn[e]
            }(e.calendarSystem),
            this.locale = e.locale,
            this.weekDow = e.locale.week.dow,
            this.weekDoy = e.locale.week.doy,
            "ISO" === e.weekNumberCalculation && (this.weekDow = 1,
            this.weekDoy = 4),
            "number" == typeof e.firstDay && (this.weekDow = e.firstDay),
            "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation),
            this.weekText = null != e.weekText ? e.weekText : e.locale.options.weekText,
            this.cmdFormatter = e.cmdFormatter,
            this.defaultSeparator = e.defaultSeparator
        }
        return e.prototype.createMarker = function(e) {
            var t = this.createMarkerMeta(e);
            return null === t ? null : t.marker
        }
        ,
        e.prototype.createNowMarker = function() {
            return this.canComputeOffset ? this.timestampToMarker((new Date).valueOf()) : ae(re(new Date))
        }
        ,
        e.prototype.createMarkerMeta = function(e) {
            if ("string" == typeof e)
                return this.parse(e);
            var t = null;
            return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(),
            isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = ae(e)),
            null !== t && se(t) ? {
                marker: t,
                isTimeUnspecified: !1,
                forcedTzo: null
            } : null
        }
        ,
        e.prototype.parse = function(e) {
            var t = function(e) {
                var t = wn.exec(e);
                if (t) {
                    var n = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0));
                    if (se(n)) {
                        var r = null;
                        return t[13] && (r = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))),
                        {
                            marker: n,
                            isTimeUnspecified: !t[6],
                            timeZoneOffset: r
                        }
                    }
                }
                return null
            }(e);
            if (null === t)
                return null;
            var n = t.marker
              , r = null;
            return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset),
            {
                marker: n,
                isTimeUnspecified: t.isTimeUnspecified,
                forcedTzo: r
            }
        }
        ,
        e.prototype.getYear = function(e) {
            return this.calendarSystem.getMarkerYear(e)
        }
        ,
        e.prototype.getMonth = function(e) {
            return this.calendarSystem.getMarkerMonth(e)
        }
        ,
        e.prototype.add = function(e, t) {
            var n = this.calendarSystem.markerToArray(e);
            return n[0] += t.years,
            n[1] += t.months,
            n[2] += t.days,
            n[6] += t.milliseconds,
            this.calendarSystem.arrayToMarker(n)
        }
        ,
        e.prototype.subtract = function(e, t) {
            var n = this.calendarSystem.markerToArray(e);
            return n[0] -= t.years,
            n[1] -= t.months,
            n[2] -= t.days,
            n[6] -= t.milliseconds,
            this.calendarSystem.arrayToMarker(n)
        }
        ,
        e.prototype.addYears = function(e, t) {
            var n = this.calendarSystem.markerToArray(e);
            return n[0] += t,
            this.calendarSystem.arrayToMarker(n)
        }
        ,
        e.prototype.addMonths = function(e, t) {
            var n = this.calendarSystem.markerToArray(e);
            return n[1] += t,
            this.calendarSystem.arrayToMarker(n)
        }
        ,
        e.prototype.diffWholeYears = function(e, t) {
            var n = this.calendarSystem;
            return le(e) === le(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null
        }
        ,
        e.prototype.diffWholeMonths = function(e, t) {
            var n = this.calendarSystem;
            return le(e) === le(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null
        }
        ,
        e.prototype.greatestWholeUnit = function(e, t) {
            var n = this.diffWholeYears(e, t);
            return null !== n ? {
                unit: "year",
                value: n
            } : null !== (n = this.diffWholeMonths(e, t)) ? {
                unit: "month",
                value: n
            } : null !== (n = function(e, t) {
                var n = Q(e, t);
                return null !== n && n % 7 == 0 ? n / 7 : null
            }(e, t)) ? {
                unit: "week",
                value: n
            } : null !== (n = Q(e, t)) ? {
                unit: "day",
                value: n
            } : q(n = function(e, t) {
                return (t.valueOf() - e.valueOf()) / 36e5
            }(e, t)) ? {
                unit: "hour",
                value: n
            } : q(n = function(e, t) {
                return (t.valueOf() - e.valueOf()) / 6e4
            }(e, t)) ? {
                unit: "minute",
                value: n
            } : q(n = function(e, t) {
                return (t.valueOf() - e.valueOf()) / 1e3
            }(e, t)) ? {
                unit: "second",
                value: n
            } : {
                unit: "millisecond",
                value: t.valueOf() - e.valueOf()
            }
        }
        ,
        e.prototype.countDurationsBetween = function(e, t, n) {
            var r;
            return n.years && null !== (r = this.diffWholeYears(e, t)) ? r / (_e(n) / 365) : n.months && null !== (r = this.diffWholeMonths(e, t)) ? r / function(e) {
                return _e(e) / 30
            }(n) : n.days && null !== (r = Q(e, t)) ? r / _e(n) : (t.valueOf() - e.valueOf()) / Pe(n)
        }
        ,
        e.prototype.startOf = function(e, t) {
            return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? ee(e) : "hour" === t ? function(e) {
                return ae([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()])
            }(e) : "minute" === t ? function(e) {
                return ae([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()])
            }(e) : "second" === t ? function(e) {
                return ae([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()])
            }(e) : null
        }
        ,
        e.prototype.startOfYear = function(e) {
            return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])
        }
        ,
        e.prototype.startOfMonth = function(e) {
            return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)])
        }
        ,
        e.prototype.startOfWeek = function(e) {
            return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7])
        }
        ,
        e.prototype.computeWeekNumber = function(e) {
            return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function(e, t, n) {
                var r = e.getUTCFullYear()
                  , o = te(e, r, t, n);
                if (o < 1)
                    return te(e, r - 1, t, n);
                var i = te(e, r + 1, t, n);
                return i >= 1 ? Math.min(o, i) : o
            }(e, this.weekDow, this.weekDoy)
        }
        ,
        e.prototype.format = function(e, t, n) {
            return void 0 === n && (n = {}),
            t.format({
                marker: e,
                timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
            }, this)
        }
        ,
        e.prototype.formatRange = function(e, t, n, r) {
            return void 0 === r && (r = {}),
            r.isEndExclusive && (t = J(t, -1)),
            n.formatRange({
                marker: e,
                timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
            }, {
                marker: t,
                timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
            }, this, r.defaultSeparator)
        }
        ,
        e.prototype.formatIso = function(e, t) {
            void 0 === t && (t = {});
            var n = null;
            return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)),
            function(e, t, n) {
                void 0 === n && (n = !1);
                var r = e.toISOString();
                return r = r.replace(".000", ""),
                n && (r = r.replace("T00:00:00Z", "")),
                r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", Oe(t, !0)))),
                r
            }(e, n, t.omitTime)
        }
        ,
        e.prototype.timestampToMarker = function(e) {
            return "local" === this.timeZone ? ae(re(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? ae(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e)
        }
        ,
        e.prototype.offsetForMarker = function(e) {
            return "local" === this.timeZone ? -oe(ie(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(ie(e)) : null
        }
        ,
        e.prototype.toDate = function(e, t) {
            return "local" === this.timeZone ? oe(ie(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(ie(e)) * 60) : new Date(e.valueOf() - (t || 0))
        }
        ,
        e
    }()
      , Cn = []
      , Rn = {
        code: "en",
        week: {
            dow: 0,
            doy: 4
        },
        direction: "ltr",
        buttonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            year: "year",
            today: "today",
            month: "month",
            week: "week",
            day: "day",
            list: "list"
        },
        weekText: "W",
        allDayText: "all-day",
        moreLinkText: "more",
        noEventsText: "No events to display"
    };
    function Tn(e) {
        for (var t = e.length > 0 ? e[0].code : "en", n = Cn.concat(e), r = {
            en: Rn
        }, o = 0, i = n; o < i.length; o++) {
            var a = i[o];
            r[a.code] = a
        }
        return {
            map: r,
            defaultCode: t
        }
    }
    function xn(e, t) {
        return "object" != typeof e || Array.isArray(e) ? function(e, t) {
            var n = [].concat(e || [])
              , r = function(e, t) {
                for (var n = 0; n < e.length; n += 1)
                    for (var r = e[n].toLocaleLowerCase().split("-"), o = r.length; o > 0; o -= 1) {
                        var i = r.slice(0, o).join("-");
                        if (t[i])
                            return t[i]
                    }
                return null
            }(n, t) || Rn;
            return kn(e, n, r)
        }(e, t) : kn(e.code, [e.code], e)
    }
    function kn(e, t, n) {
        var r = de([Rn, n], ["buttonText"]);
        delete r.code;
        var o = r.week;
        return delete r.week,
        {
            codeArg: e,
            codes: t,
            week: o,
            simpleNumberFormat: new Intl.NumberFormat(e),
            options: r
        }
    }
    var Mn, _n = {
        startTime: "09:00",
        endTime: "17:00",
        daysOfWeek: [1, 2, 3, 4, 5],
        display: "inverse-background",
        classNames: "fc-non-business",
        groupId: "_businessHours"
    };
    function Pn(e, t) {
        return dt(function(e) {
            var t;
            t = !0 === e ? [{}] : Array.isArray(e) ? e.filter(function(e) {
                return e.daysOfWeek
            }) : "object" == typeof e && e ? [e] : [];
            return t = t.map(function(e) {
                return h(h({}, _n), e)
            })
        }(e), null, t)
    }
    function In(e, t) {
        return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
    }
    function Nn(e, t, n) {
        return {
            left: e.left + t,
            right: e.right + t,
            top: e.top + n,
            bottom: e.bottom + n
        }
    }
    function Hn() {
        return null == Mn && (Mn = function() {
            if ("undefined" == typeof document)
                return !0;
            var e = document.createElement("div");
            e.style.position = "absolute",
            e.style.top = "0px",
            e.style.left = "0px",
            e.innerHTML = "<table><tr><td><div></div></td></tr></table>",
            e.querySelector("table").style.height = "100px",
            e.querySelector("div").style.height = "100%",
            document.body.appendChild(e);
            var t = e.querySelector("div").offsetHeight > 0;
            return document.body.removeChild(e),
            t
        }()),
        Mn
    }
    var On = {
        defs: {},
        instances: {}
    }
      , An = function() {
        function e() {
            this.getKeysForEventDefs = Le(this._getKeysForEventDefs),
            this.splitDateSelection = Le(this._splitDateSpan),
            this.splitEventStore = Le(this._splitEventStore),
            this.splitIndividualUi = Le(this._splitIndividualUi),
            this.splitEventDrag = Le(this._splitInteraction),
            this.splitEventResize = Le(this._splitInteraction),
            this.eventUiBuilders = {}
        }
        return e.prototype.splitProps = function(e) {
            var t = this
              , n = this.getKeyInfo(e)
              , r = this.getKeysForEventDefs(e.eventStore)
              , o = this.splitDateSelection(e.dateSelection)
              , i = this.splitIndividualUi(e.eventUiBases, r)
              , a = this.splitEventStore(e.eventStore, r)
              , s = this.splitEventDrag(e.eventDrag)
              , l = this.splitEventResize(e.eventResize)
              , u = {};
            for (var c in this.eventUiBuilders = fe(n, function(e, n) {
                return t.eventUiBuilders[n] || Le(Ln)
            }),
            n) {
                var d = n[c]
                  , p = a[c] || On
                  , f = this.eventUiBuilders[c];
                u[c] = {
                    businessHours: d.businessHours || e.businessHours,
                    dateSelection: o[c] || null,
                    eventStore: p,
                    eventUiBases: f(e.eventUiBases[""], d.ui, i[c]),
                    eventSelection: p.instances[e.eventSelection] ? e.eventSelection : "",
                    eventDrag: s[c] || null,
                    eventResize: l[c] || null
                }
            }
            return u
        }
        ,
        e.prototype._splitDateSpan = function(e) {
            var t = {};
            if (e)
                for (var n = 0, r = this.getKeysForDateSpan(e); n < r.length; n++) {
                    t[r[n]] = e
                }
            return t
        }
        ,
        e.prototype._getKeysForEventDefs = function(e) {
            var t = this;
            return fe(e.defs, function(e) {
                return t.getKeysForEventDef(e)
            })
        }
        ,
        e.prototype._splitEventStore = function(e, t) {
            var n = e.defs
              , r = e.instances
              , o = {};
            for (var i in n)
                for (var a = 0, s = t[i]; a < s.length; a++) {
                    o[p = s[a]] || (o[p] = {
                        defs: {},
                        instances: {}
                    }),
                    o[p].defs[i] = n[i]
                }
            for (var l in r)
                for (var u = r[l], c = 0, d = t[u.defId]; c < d.length; c++) {
                    var p;
                    o[p = d[c]] && (o[p].instances[l] = u)
                }
            return o
        }
        ,
        e.prototype._splitIndividualUi = function(e, t) {
            var n = {};
            for (var r in e)
                if (r)
                    for (var o = 0, i = t[r]; o < i.length; o++) {
                        var a = i[o];
                        n[a] || (n[a] = {}),
                        n[a][r] = e[r]
                    }
            return n
        }
        ,
        e.prototype._splitInteraction = function(e) {
            var t = {};
            if (e) {
                var n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents))
                  , r = this._getKeysForEventDefs(e.mutatedEvents)
                  , o = this._splitEventStore(e.mutatedEvents, r)
                  , i = function(r) {
                    t[r] || (t[r] = {
                        affectedEvents: n[r] || On,
                        mutatedEvents: o[r] || On,
                        isEvent: e.isEvent
                    })
                };
                for (var a in n)
                    i(a);
                for (var a in o)
                    i(a)
            }
            return t
        }
        ,
        e
    }();
    function Ln(e, t, n) {
        var r = [];
        e && r.push(e),
        t && r.push(t);
        var o = {
            "": St(r)
        };
        return n && h(o, n),
        o
    }
    function Wn(e, t, n, r) {
        return {
            dow: e.getUTCDay(),
            isDisabled: Boolean(r && !Wt(r.activeRange, e)),
            isOther: Boolean(r && !Wt(r.currentRange, e)),
            isToday: Boolean(t && Wt(t, e)),
            isPast: Boolean(n ? e < n : !!t && e < t.start),
            isFuture: Boolean(n ? e > n : !!t && e >= t.end)
        }
    }
    function Un(e, t) {
        var n = ["fc-day", "fc-day-" + Z[e.dow]];
        return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"),
        n.push(t.getClass("today"))),
        e.isPast && n.push("fc-day-past"),
        e.isFuture && n.push("fc-day-future"),
        e.isOther && n.push("fc-day-other")),
        n
    }
    function jn(e, t) {
        var n = ["fc-slot", "fc-slot-" + Z[e.dow]];
        return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"),
        n.push(t.getClass("today"))),
        e.isPast && n.push("fc-slot-past"),
        e.isFuture && n.push("fc-slot-future")),
        n
    }
    function zn(e, t) {
        return void 0 === t && (t = "day"),
        JSON.stringify({
            date: He(e),
            type: t
        })
    }
    var Bn, Fn = null;
    function Vn() {
        return null === Fn && (Fn = function() {
            var e = document.createElement("div");
            _(e, {
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }),
            e.innerHTML = "<div></div>",
            document.body.appendChild(e);
            var t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
            return R(e),
            t
        }()),
        Fn
    }
    function Gn() {
        return Bn || (Bn = function() {
            var e = document.createElement("div");
            e.style.overflow = "scroll",
            document.body.appendChild(e);
            var t = qn(e);
            return document.body.removeChild(e),
            t
        }()),
        Bn
    }
    function qn(e) {
        return {
            x: e.offsetHeight - e.clientHeight,
            y: e.offsetWidth - e.clientWidth
        }
    }
    function Yn(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e)
          , r = parseInt(n.borderLeftWidth, 10) || 0
          , o = parseInt(n.borderRightWidth, 10) || 0
          , i = parseInt(n.borderTopWidth, 10) || 0
          , a = parseInt(n.borderBottomWidth, 10) || 0
          , s = qn(e)
          , l = s.y - r - o
          , u = {
            borderLeft: r,
            borderRight: o,
            borderTop: i,
            borderBottom: a,
            scrollbarBottom: s.x - i - a,
            scrollbarLeft: 0,
            scrollbarRight: 0
        };
        return Vn() && "rtl" === n.direction ? u.scrollbarLeft = l : u.scrollbarRight = l,
        t && (u.paddingLeft = parseInt(n.paddingLeft, 10) || 0,
        u.paddingRight = parseInt(n.paddingRight, 10) || 0,
        u.paddingTop = parseInt(n.paddingTop, 10) || 0,
        u.paddingBottom = parseInt(n.paddingBottom, 10) || 0),
        u
    }
    function Zn(e, t, n) {
        void 0 === t && (t = !1);
        var r = n ? e.getBoundingClientRect() : Xn(e)
          , o = Yn(e, t)
          , i = {
            left: r.left + o.borderLeft + o.scrollbarLeft,
            right: r.right - o.borderRight - o.scrollbarRight,
            top: r.top + o.borderTop,
            bottom: r.bottom - o.borderBottom - o.scrollbarBottom
        };
        return t && (i.left += o.paddingLeft,
        i.right -= o.paddingRight,
        i.top += o.paddingTop,
        i.bottom -= o.paddingBottom),
        i
    }
    function Xn(e) {
        var t = e.getBoundingClientRect();
        return {
            left: t.left + window.pageXOffset,
            top: t.top + window.pageYOffset,
            right: t.right + window.pageXOffset,
            bottom: t.bottom + window.pageYOffset
        }
    }
    function Kn(e, t, n) {
        var r = !1
          , o = function() {
            r || (r = !0,
            t.apply(this, arguments))
        }
          , i = function() {
            r || (r = !0,
            n && n.apply(this, arguments))
        }
          , a = e(o, i);
        a && "function" == typeof a.then && a.then(o, i)
    }
    var Jn = function() {
        function e() {
            this.handlers = {},
            this.thisContext = null
        }
        return e.prototype.setThisContext = function(e) {
            this.thisContext = e
        }
        ,
        e.prototype.setOptions = function(e) {
            this.options = e
        }
        ,
        e.prototype.on = function(e, t) {
            !function(e, t, n) {
                (e[t] || (e[t] = [])).push(n)
            }(this.handlers, e, t)
        }
        ,
        e.prototype.off = function(e, t) {
            !function(e, t, n) {
                n ? e[t] && (e[t] = e[t].filter(function(e) {
                    return e !== n
                })) : delete e[t]
            }(this.handlers, e, t)
        }
        ,
        e.prototype.trigger = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            for (var r = this.handlers[e] || [], o = this.options && this.options[e], i = [].concat(o || [], r), a = 0, s = i; a < s.length; a++) {
                var l = s[a];
                l.apply(this.thisContext, t)
            }
        }
        ,
        e.prototype.hasHandlers = function(e) {
            return this.handlers[e] && this.handlers[e].length || this.options && this.options[e]
        }
        ,
        e
    }();
    var $n = function() {
        function e(e, t, n, r) {
            this.els = t;
            var o = this.originClientRect = e.getBoundingClientRect();
            n && this.buildElHorizontals(o.left),
            r && this.buildElVerticals(o.top)
        }
        return e.prototype.buildElHorizontals = function(e) {
            for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                var i = o[r].getBoundingClientRect();
                t.push(i.left - e),
                n.push(i.right - e)
            }
            this.lefts = t,
            this.rights = n
        }
        ,
        e.prototype.buildElVerticals = function(e) {
            for (var t = [], n = [], r = 0, o = this.els; r < o.length; r++) {
                var i = o[r].getBoundingClientRect();
                t.push(i.top - e),
                n.push(i.bottom - e)
            }
            this.tops = t,
            this.bottoms = n
        }
        ,
        e.prototype.leftToIndex = function(e) {
            var t, n = this.lefts, r = this.rights, o = n.length;
            for (t = 0; t < o; t += 1)
                if (e >= n[t] && e < r[t])
                    return t
        }
        ,
        e.prototype.topToIndex = function(e) {
            var t, n = this.tops, r = this.bottoms, o = n.length;
            for (t = 0; t < o; t += 1)
                if (e >= n[t] && e < r[t])
                    return t
        }
        ,
        e.prototype.getWidth = function(e) {
            return this.rights[e] - this.lefts[e]
        }
        ,
        e.prototype.getHeight = function(e) {
            return this.bottoms[e] - this.tops[e]
        }
        ,
        e
    }()
      , Qn = function() {
        function e() {}
        return e.prototype.getMaxScrollTop = function() {
            return this.getScrollHeight() - this.getClientHeight()
        }
        ,
        e.prototype.getMaxScrollLeft = function() {
            return this.getScrollWidth() - this.getClientWidth()
        }
        ,
        e.prototype.canScrollVertically = function() {
            return this.getMaxScrollTop() > 0
        }
        ,
        e.prototype.canScrollHorizontally = function() {
            return this.getMaxScrollLeft() > 0
        }
        ,
        e.prototype.canScrollUp = function() {
            return this.getScrollTop() > 0
        }
        ,
        e.prototype.canScrollDown = function() {
            return this.getScrollTop() < this.getMaxScrollTop()
        }
        ,
        e.prototype.canScrollLeft = function() {
            return this.getScrollLeft() > 0
        }
        ,
        e.prototype.canScrollRight = function() {
            return this.getScrollLeft() < this.getMaxScrollLeft()
        }
        ,
        e
    }()
      , er = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.el = t,
            n
        }
        return f(t, e),
        t.prototype.getScrollTop = function() {
            return this.el.scrollTop
        }
        ,
        t.prototype.getScrollLeft = function() {
            return this.el.scrollLeft
        }
        ,
        t.prototype.setScrollTop = function(e) {
            this.el.scrollTop = e
        }
        ,
        t.prototype.setScrollLeft = function(e) {
            this.el.scrollLeft = e
        }
        ,
        t.prototype.getScrollWidth = function() {
            return this.el.scrollWidth
        }
        ,
        t.prototype.getScrollHeight = function() {
            return this.el.scrollHeight
        }
        ,
        t.prototype.getClientHeight = function() {
            return this.el.clientHeight
        }
        ,
        t.prototype.getClientWidth = function() {
            return this.el.clientWidth
        }
        ,
        t
    }(Qn)
      , tr = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return f(t, e),
        t.prototype.getScrollTop = function() {
            return window.pageYOffset
        }
        ,
        t.prototype.getScrollLeft = function() {
            return window.pageXOffset
        }
        ,
        t.prototype.setScrollTop = function(e) {
            window.scroll(window.pageXOffset, e)
        }
        ,
        t.prototype.setScrollLeft = function(e) {
            window.scroll(e, window.pageYOffset)
        }
        ,
        t.prototype.getScrollWidth = function() {
            return document.documentElement.scrollWidth
        }
        ,
        t.prototype.getScrollHeight = function() {
            return document.documentElement.scrollHeight
        }
        ,
        t.prototype.getClientHeight = function() {
            return document.documentElement.clientHeight
        }
        ,
        t.prototype.getClientWidth = function() {
            return document.documentElement.clientWidth
        }
        ,
        t
    }(Qn)
      , nr = function() {
        function e(e) {
            this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption])
        }
        return e.prototype.setIconOverride = function(e) {
            var t, n;
            if ("object" == typeof e && e) {
                for (n in t = h({}, this.iconClasses),
                e)
                    t[n] = this.applyIconOverridePrefix(e[n]);
                this.iconClasses = t
            } else
                !1 === e && (this.iconClasses = {})
        }
        ,
        e.prototype.applyIconOverridePrefix = function(e) {
            var t = this.iconOverridePrefix;
            return t && 0 !== e.indexOf(t) && (e = t + e),
            e
        }
        ,
        e.prototype.getClass = function(e) {
            return this.classes[e] || ""
        }
        ,
        e.prototype.getIconClass = function(e, t) {
            var n;
            return (n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e]) ? this.baseIconClass + " " + n : ""
        }
        ,
        e.prototype.getCustomButtonIconClass = function(e) {
            var t;
            return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : ""
        }
        ,
        e
    }();
    nr.prototype.classes = {},
    nr.prototype.iconClasses = {},
    nr.prototype.baseIconClass = "",
    nr.prototype.iconOverridePrefix = "";
    var rr = function() {
        function e(e, t, n) {
            var r = this;
            this.execFunc = e,
            this.emitter = t,
            this.scrollTime = n,
            this.handleScrollRequest = function(e) {
                r.queuedRequest = h({}, r.queuedRequest || {}, e),
                r.drain()
            }
            ,
            t.on("_scrollRequest", this.handleScrollRequest),
            this.fireInitialScroll()
        }
        return e.prototype.detach = function() {
            this.emitter.off("_scrollRequest", this.handleScrollRequest)
        }
        ,
        e.prototype.update = function(e) {
            e ? this.fireInitialScroll() : this.drain()
        }
        ,
        e.prototype.fireInitialScroll = function() {
            this.handleScrollRequest({
                time: this.scrollTime
            })
        }
        ,
        e.prototype.drain = function() {
            this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null)
        }
        ,
        e
    }()
      , or = E({});
    function ir(e, t, n, r, o, i, a, s, l, u, c, d, p) {
        return {
            dateEnv: o,
            options: n,
            pluginHooks: a,
            emitter: u,
            dispatch: s,
            getCurrentData: l,
            calendarApi: c,
            viewSpec: e,
            viewApi: t,
            dateProfileGenerator: r,
            theme: i,
            isRtl: "rtl" === n.direction,
            addResizeHandler: function(e) {
                u.on("_resize", e)
            },
            removeResizeHandler: function(e) {
                u.off("_resize", e)
            },
            createScrollResponder: function(e) {
                return new rr(e,u,Re(n.scrollTime))
            },
            registerInteractiveComponent: d,
            unregisterInteractiveComponent: p
        }
    }
    var ar = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return f(t, e),
        t.prototype.shouldComponentUpdate = function(e, t) {
            return this.debug && console.log(me(e, this.props), me(t, this.state)),
            !ye(this.props, e, this.propEquality) || !ye(this.state, t, this.stateEquality)
        }
        ,
        t.addPropsEquality = lr,
        t.addStateEquality = ur,
        t.contextType = or,
        t
    }(g);
    ar.prototype.propEquality = {},
    ar.prototype.stateEquality = {};
    var sr = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return f(t, e),
        t.contextType = or,
        t
    }(ar);
    function lr(e) {
        var t = Object.create(this.prototype.propEquality);
        h(t, e),
        this.prototype.propEquality = t
    }
    function ur(e) {
        var t = Object.create(this.prototype.stateEquality);
        h(t, e),
        this.prototype.stateEquality = t
    }
    function cr(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t)
    }
    function dr(e, t, n, r, o) {
        switch (t.type) {
        case "RECEIVE_EVENTS":
            return function(e, t, n, r, o, i) {
                if (t && n === t.latestFetchId) {
                    var a = dt(function(e, t, n) {
                        var r = n.options.eventDataTransform
                          , o = t ? t.eventDataTransform : null;
                        o && (e = pr(e, o));
                        r && (e = pr(e, r));
                        return e
                    }(o, t, i), t, i);
                    return r && (a = Ee(a, r, i)),
                    ht(fr(e, t.sourceId), a)
                }
                return e
            }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);
        case "ADD_EVENTS":
            return function(e, t, n, r) {
                n && (t = Ee(t, n, r));
                return ht(e, t)
            }(e, t.eventStore, r ? r.activeRange : null, o);
        case "MERGE_EVENTS":
            return ht(e, t.eventStore);
        case "PREV":
        case "NEXT":
        case "CHANGE_DATE":
        case "CHANGE_VIEW_TYPE":
            return r ? Ee(e, r.activeRange, o) : e;
        case "REMOVE_EVENTS":
            return function(e, t) {
                var n = e.defs
                  , r = e.instances
                  , o = {}
                  , i = {};
                for (var a in n)
                    t.defs[a] || (o[a] = n[a]);
                for (var s in r)
                    !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
                return {
                    defs: o,
                    instances: i
                }
            }(e, t.eventStore);
        case "REMOVE_EVENT_SOURCE":
            return fr(e, t.sourceId);
        case "REMOVE_ALL_EVENT_SOURCES":
            return vt(e, function(e) {
                return !e.sourceId
            });
        case "REMOVE_ALL_EVENTS":
            return {
                defs: {},
                instances: {}
            };
        default:
            return e
        }
    }
    function pr(e, t) {
        var n;
        if (t) {
            n = [];
            for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r]
                  , a = t(i);
                a ? n.push(a) : null == a && n.push(i)
            }
        } else
            n = e;
        return n
    }
    function fr(e, t) {
        return vt(e, function(e) {
            return e.sourceId !== t
        })
    }
    function hr(e, t) {
        return vr({
            eventDrag: e
        }, t)
    }
    function vr(e, t) {
        var n = t.getCurrentData()
          , r = h({
            businessHours: n.businessHours,
            dateSelection: "",
            eventStore: n.eventStore,
            eventUiBases: n.eventUiBases,
            eventSelection: "",
            eventDrag: null,
            eventResize: null
        }, e);
        return (t.pluginHooks.isPropsValid || gr)(r, t)
    }
    function gr(e, t, n, r) {
        return void 0 === n && (n = {}),
        !(e.eventDrag && !function(e, t, n, r) {
            var o = t.getCurrentData()
              , i = e.eventDrag
              , a = i.mutatedEvents
              , s = a.defs
              , l = a.instances
              , u = Bt(s, i.isEvent ? e.eventUiBases : {
                "": o.selectionConfig
            });
            r && (u = fe(u, r));
            var c = (v = e.eventStore,
            g = i.affectedEvents.instances,
            {
                defs: v.defs,
                instances: pe(v.instances, function(e) {
                    return !g[e.instanceId]
                })
            })
              , d = c.defs
              , p = c.instances
              , f = Bt(d, e.eventUiBases);
            var v, g;
            for (var m in l) {
                var y = l[m]
                  , b = y.range
                  , S = u[y.defId]
                  , E = s[y.defId];
                if (!mr(S.constraints, b, c, e.businessHours, t))
                    return !1;
                var w = t.options.eventOverlap
                  , D = "function" == typeof w ? w : null;
                for (var C in p) {
                    var R = p[C];
                    if (At(b, R.range)) {
                        if (!1 === f[R.defId].overlap && i.isEvent)
                            return !1;
                        if (!1 === S.overlap)
                            return !1;
                        if (D && !D(new gn(t,d[R.defId],R), new gn(t,E,y)))
                            return !1
                    }
                }
                for (var T = o.eventStore, x = 0, k = S.allows; x < k.length; x++) {
                    var M = k[x]
                      , _ = h(h({}, n), {
                        range: y.range,
                        allDay: E.allDay
                    })
                      , P = T.defs[E.defId]
                      , I = T.instances[m]
                      , N = void 0;
                    if (N = P ? new gn(t,P,I) : new gn(t,E),
                    !M(on(_, t), N))
                        return !1
                }
            }
            return !0
        }(e, t, n, r)) && !(e.dateSelection && !function(e, t, n, r) {
            var o = e.eventStore
              , i = o.defs
              , a = o.instances
              , s = e.dateSelection
              , l = s.range
              , u = t.getCurrentData().selectionConfig;
            r && (u = r(u));
            if (!mr(u.constraints, l, o, e.businessHours, t))
                return !1;
            var c = t.options.selectOverlap
              , d = "function" == typeof c ? c : null;
            for (var p in a) {
                var f = a[p];
                if (At(l, f.range)) {
                    if (!1 === u.overlap)
                        return !1;
                    if (d && !d(new gn(t,i[f.defId],f), null))
                        return !1
                }
            }
            for (var v = 0, g = u.allows; v < g.length; v++) {
                var m = g[v]
                  , y = h(h({}, n), s);
                if (!m(on(y, t), null))
                    return !1
            }
            return !0
        }(e, t, n, r))
    }
    function mr(e, t, n, r, o) {
        for (var i = 0, a = e; i < a.length; i++) {
            if (!Sr(yr(a[i], t, n, r, o), t))
                return !1
        }
        return !0
    }
    function yr(e, t, n, r, o) {
        return "businessHours" === e ? br(Ee(r, t, o)) : "string" == typeof e ? br(vt(n, function(t) {
            return t.groupId === e
        })) : "object" == typeof e && e ? br(Ee(e, t, o)) : []
    }
    function br(e) {
        var t = e.instances
          , n = [];
        for (var r in t)
            n.push(t[r].range);
        return n
    }
    function Sr(e, t) {
        for (var n = 0, r = e; n < r.length; n++) {
            if (Lt(r[n], t))
                return !0
        }
        return !1
    }
    var Er = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.uid = L(),
            t
        }
        return f(t, e),
        t.prototype.prepareHits = function() {}
        ,
        t.prototype.queryHit = function(e, t, n, r) {
            return null
        }
        ,
        t.prototype.isInteractionValid = function(e) {
            var t = this.props.dateProfile
              , n = e.mutatedEvents.instances;
            if (t)
                for (var r in n)
                    if (!Lt(t.validRange, n[r].range))
                        return !1;
            return hr(e, this.context)
        }
        ,
        t.prototype.isDateSelectionValid = function(e) {
            var t, n, r = this.props.dateProfile;
            return !(r && !Lt(r.validRange, e.range)) && (t = e,
            n = this.context,
            vr({
                dateSelection: t
            }, n))
        }
        ,
        t.prototype.isValidSegDownEl = function(e) {
            return !this.props.eventDrag && !this.props.eventResize && !T(e, ".fc-event-mirror") && (this.isPopover() || !this.isInPopover(e))
        }
        ,
        t.prototype.isValidDateDownEl = function(e) {
            return !(T(e, ".fc-event:not(.fc-bg-event)") || T(e, ".fc-daygrid-more-link") || T(e, "a[data-navlink]") || this.isInPopover(e))
        }
        ,
        t.prototype.isPopover = function() {
            return !1
        }
        ,
        t.prototype.isInPopover = function(e) {
            return Boolean(T(e, ".fc-popover"))
        }
        ,
        t
    }(sr);
    function wr(e) {
        return {
            id: L(),
            deps: e.deps || [],
            reducers: e.reducers || [],
            contextInit: [].concat(e.contextInit || []),
            eventRefiners: e.eventRefiners || {},
            eventDefMemberAdders: e.eventDefMemberAdders || [],
            eventSourceRefiners: e.eventSourceRefiners || {},
            isDraggableTransformers: e.isDraggableTransformers || [],
            eventDragMutationMassagers: e.eventDragMutationMassagers || [],
            eventDefMutationAppliers: e.eventDefMutationAppliers || [],
            dateSelectionTransformers: e.dateSelectionTransformers || [],
            datePointTransforms: e.datePointTransforms || [],
            dateSpanTransforms: e.dateSpanTransforms || [],
            views: e.views || {},
            viewPropsTransformers: e.viewPropsTransformers || [],
            isPropsValid: e.isPropsValid || null,
            externalDefTransforms: e.externalDefTransforms || [],
            eventResizeJoinTransforms: e.eventResizeJoinTransforms || [],
            viewContainerAppends: e.viewContainerAppends || [],
            eventDropTransformers: e.eventDropTransformers || [],
            componentInteractions: e.componentInteractions || [],
            calendarInteractions: e.calendarInteractions || [],
            themeClasses: e.themeClasses || {},
            eventSourceDefs: e.eventSourceDefs || [],
            cmdFormatter: e.cmdFormatter,
            recurringTypes: e.recurringTypes || [],
            namedTimeZonedImpl: e.namedTimeZonedImpl,
            initialView: e.initialView || "",
            elementDraggingImpl: e.elementDraggingImpl,
            optionChangeHandlers: e.optionChangeHandlers || {},
            scrollGridImpl: e.scrollGridImpl || null,
            contentTypeHandlers: e.contentTypeHandlers || {},
            listenerRefiners: e.listenerRefiners || {},
            optionRefiners: e.optionRefiners || {},
            propSetHandlers: e.propSetHandlers || {}
        }
    }
    var Dr = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return f(t, e),
        t
    }(nr);
    function Cr(e, t, n, r) {
        if (t[e])
            return t[e];
        var o = function(e, t, n, r) {
            var o = n[e]
              , i = r[e]
              , a = function(e) {
                return o && null !== o[e] ? o[e] : i && null !== i[e] ? i[e] : null
            }
              , s = a("component")
              , l = a("superType")
              , u = null;
            if (l) {
                if (l === e)
                    throw new Error("Can't have a custom view type that references itself");
                u = Cr(l, t, n, r)
            }
            !s && u && (s = u.component);
            if (!s)
                return null;
            return {
                type: e,
                component: s,
                defaults: h(h({}, u ? u.defaults : {}), o ? o.rawOptions : {}),
                overrides: h(h({}, u ? u.overrides : {}), i ? i.rawOptions : {})
            }
        }(e, t, n, r);
        return o && (t[e] = o),
        o
    }
    Dr.prototype.classes = {
        root: "fc-theme-standard",
        tableCellShaded: "fc-cell-shaded",
        buttonGroup: "fc-button-group",
        button: "fc-button fc-button-primary",
        buttonActive: "fc-button-active"
    },
    Dr.prototype.baseIconClass = "fc-icon",
    Dr.prototype.iconClasses = {
        close: "fc-icon-x",
        prev: "fc-icon-chevron-left",
        next: "fc-icon-chevron-right",
        prevYear: "fc-icon-chevrons-left",
        nextYear: "fc-icon-chevrons-right"
    },
    Dr.prototype.rtlIconClasses = {
        prev: "fc-icon-chevron-right",
        next: "fc-icon-chevron-left",
        prevYear: "fc-icon-chevrons-right",
        nextYear: "fc-icon-chevrons-left"
    },
    Dr.prototype.iconOverrideOption = "buttonIcons",
    Dr.prototype.iconOverrideCustomButtonOption = "icon",
    Dr.prototype.iconOverridePrefix = "fc-icon-";
    var Rr = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = b(),
            t.handleRootEl = function(e) {
                cr(t.rootElRef, e),
                t.props.elRef && cr(t.props.elRef, e)
            }
            ,
            t
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = t.hookProps;
            return m(Mr, {
                hookProps: n,
                didMount: t.didMount,
                willUnmount: t.willUnmount,
                elRef: this.handleRootEl
            }, function(r) {
                return m(xr, {
                    hookProps: n,
                    content: t.content,
                    defaultContent: t.defaultContent,
                    backupElRef: e.rootElRef
                }, function(e, o) {
                    return t.children(r, Pr(t.classNames, n), e, o)
                })
            })
        }
        ,
        t
    }(sr)
      , Tr = E(0);
    function xr(e) {
        return m(Tr.Consumer, null, function(t) {
            return m(kr, h({
                renderId: t
            }, e))
        })
    }
    var kr = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.innerElRef = b(),
            t
        }
        return f(t, e),
        t.prototype.render = function() {
            return this.props.children(this.innerElRef, this.renderInnerContent())
        }
        ,
        t.prototype.componentDidMount = function() {
            this.updateCustomContent()
        }
        ,
        t.prototype.componentDidUpdate = function() {
            this.updateCustomContent()
        }
        ,
        t.prototype.componentWillUnmount = function() {
            this.customContentInfo && this.customContentInfo.destroy && this.customContentInfo.destroy()
        }
        ,
        t.prototype.renderInnerContent = function() {
            var e = this.context.pluginHooks.contentTypeHandlers
              , t = this.props
              , n = this.customContentInfo
              , r = Ir(t.content, t.hookProps)
              , o = null;
            if (void 0 === r && (r = Ir(t.defaultContent, t.hookProps)),
            void 0 !== r) {
                if (n)
                    n.contentVal = r[n.contentKey];
                else if ("object" == typeof r)
                    for (var i in e)
                        if (void 0 !== r[i]) {
                            var a = e[i]();
                            n = this.customContentInfo = h({
                                contentKey: i,
                                contentVal: r[i]
                            }, a);
                            break
                        }
                o = n ? [] : r
            }
            return o
        }
        ,
        t.prototype.updateCustomContent = function() {
            this.customContentInfo && this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, this.customContentInfo.contentVal)
        }
        ,
        t
    }(sr)
      , Mr = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleRootEl = function(e) {
                t.rootEl = e,
                t.props.elRef && cr(t.props.elRef, e)
            }
            ,
            t
        }
        return f(t, e),
        t.prototype.render = function() {
            return this.props.children(this.handleRootEl)
        }
        ,
        t.prototype.componentDidMount = function() {
            var e = this.props.didMount;
            e && e(h(h({}, this.props.hookProps), {
                el: this.rootEl
            }))
        }
        ,
        t.prototype.componentWillUnmount = function() {
            var e = this.props.willUnmount;
            e && e(h(h({}, this.props.hookProps), {
                el: this.rootEl
            }))
        }
        ,
        t
    }(sr);
    function _r() {
        var e, t, n = [];
        return function(r, o) {
            return t && ge(t, o) && r === e || (e = r,
            t = o,
            n = Pr(r, o)),
            n
        }
    }
    function Pr(e, t) {
        return "function" == typeof e && (e = e(t)),
        gt(e)
    }
    function Ir(e, t) {
        return "function" == typeof e ? e(t, m) : e
    }
    var Nr = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.normalizeClassNames = _r(),
            t
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = t.options
              , r = {
                view: t.viewApi
            }
              , o = this.normalizeClassNames(n.viewClassNames, r);
            return m(Mr, {
                hookProps: r,
                didMount: n.viewDidMount,
                willUnmount: n.viewWillUnmount,
                elRef: e.elRef
            }, function(t) {
                return e.children(t, ["fc-" + e.viewSpec.type + "-view", "fc-view"].concat(o))
            })
        }
        ,
        t
    }(sr);
    function Hr(e) {
        return fe(e, Or)
    }
    function Or(e) {
        var t, n = "function" == typeof e ? {
            component: e
        } : e, r = n.component;
        return n.content && (t = n,
        r = function(e) {
            return m(or.Consumer, null, function(n) {
                return m(Nr, {
                    viewSpec: n.viewSpec
                }, function(r, o) {
                    var i = h(h({}, e), {
                        nextDayThreshold: n.options.nextDayThreshold
                    });
                    return m(Rr, {
                        hookProps: i,
                        classNames: t.classNames,
                        content: t.content,
                        didMount: t.didMount,
                        willUnmount: t.willUnmount,
                        elRef: r
                    }, function(e, t, n, r) {
                        return m("div", {
                            className: o.concat(t).join(" "),
                            ref: e
                        }, r)
                    })
                })
            })
        }
        ),
        {
            superType: n.type,
            component: r,
            rawOptions: n
        }
    }
    function Ar(e, t, n, r) {
        var o = Hr(e)
          , i = Hr(t.views);
        return fe(function(e, t) {
            var n, r = {};
            for (n in e)
                Cr(n, r, e, t);
            for (n in t)
                Cr(n, r, e, t);
            return r
        }(o, i), function(e) {
            return function(e, t, n, r, o) {
                var i = e.overrides.duration || e.defaults.duration || r.duration || n.duration
                  , a = null
                  , s = ""
                  , l = ""
                  , u = {};
                if (i && (a = function(e) {
                    var t = JSON.stringify(e)
                      , n = Lr[t];
                    void 0 === n && (n = Re(e),
                    Lr[t] = n);
                    return n
                }(i))) {
                    var c = Ne(a);
                    s = c.unit,
                    1 === c.value && (l = s,
                    u = t[s] ? t[s].rawOptions : {})
                }
                var d = function(t) {
                    var n = t.buttonText || {}
                      , r = e.defaults.buttonTextKey;
                    return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[l] ? n[l] : null
                };
                return {
                    type: e.type,
                    component: e.component,
                    duration: a,
                    durationUnit: s,
                    singleUnit: l,
                    optionDefaults: e.defaults,
                    optionOverrides: h(h({}, u), e.overrides),
                    buttonTextOverride: d(r) || d(n) || e.overrides.buttonText,
                    buttonTextDefault: d(o) || e.defaults.buttonText || d(nt) || e.type
                }
            }(e, i, t, n, r)
        })
    }
    var Lr = {};
    var Wr = function() {
        function e(e) {
            this.props = e,
            this.nowDate = hn(e.nowInput, e.dateEnv),
            this.initHiddenDays()
        }
        return e.prototype.buildPrev = function(e, t, n) {
            var r = this.props.dateEnv
              , o = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(o, -1, n)
        }
        ,
        e.prototype.buildNext = function(e, t, n) {
            var r = this.props.dateEnv
              , o = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
            return this.build(o, 1, n)
        }
        ,
        e.prototype.build = function(e, t, n) {
            void 0 === n && (n = !0);
            var r, o, i, a, s, l, u, c, d = this.props;
            return r = this.buildValidRange(),
            r = this.trimHiddenDays(r),
            n && (u = e,
            e = null != (c = r).start && u < c.start ? c.start : null != c.end && u >= c.end ? new Date(c.end.valueOf() - 1) : u),
            o = this.buildCurrentRangeInfo(e, t),
            i = /^(year|month|week|day)$/.test(o.unit),
            a = this.buildRenderRange(this.trimHiddenDays(o.range), o.unit, i),
            s = a = this.trimHiddenDays(a),
            d.showNonCurrentDates || (s = Ht(s, o.range)),
            s = Ht(s = this.adjustActiveRange(s), r),
            l = At(o.range, r),
            {
                validRange: r,
                currentRange: o.range,
                currentRangeUnit: o.unit,
                isRangeAllDay: i,
                activeRange: s,
                renderRange: a,
                slotMinTime: d.slotMinTime,
                slotMaxTime: d.slotMaxTime,
                isValid: l,
                dateIncrement: this.buildDateIncrement(o.duration)
            }
        }
        ,
        e.prototype.buildValidRange = function() {
            var e = this.props.validRangeInput
              , t = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
            return this.refineRange(t) || {
                start: null,
                end: null
            }
        }
        ,
        e.prototype.buildCurrentRangeInfo = function(e, t) {
            var n, r = this.props, o = null, i = null, a = null;
            return r.duration ? (o = r.duration,
            i = r.durationUnit,
            a = this.buildRangeFromDuration(e, t, o, i)) : (n = this.props.dayCount) ? (i = "day",
            a = this.buildRangeFromDayCount(e, t, n)) : (a = this.buildCustomVisibleRange(e)) ? i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit : (i = Ne(o = this.getFallbackDuration()).unit,
            a = this.buildRangeFromDuration(e, t, o, i)),
            {
                duration: o,
                unit: i,
                range: a
            }
        }
        ,
        e.prototype.getFallbackDuration = function() {
            return Re({
                day: 1
            })
        }
        ,
        e.prototype.adjustActiveRange = function(e) {
            var t = this.props
              , n = t.dateEnv
              , r = t.usesMinMaxTime
              , o = t.slotMinTime
              , i = t.slotMaxTime
              , a = e.start
              , s = e.end;
            return r && (_e(o) < 0 && (a = ee(a),
            a = n.add(a, o)),
            _e(i) > 1 && (s = K(s = ee(s), -1),
            s = n.add(s, i))),
            {
                start: a,
                end: s
            }
        }
        ,
        e.prototype.buildRangeFromDuration = function(e, t, n, r) {
            var o, i, a, s = this.props, l = s.dateEnv, u = s.dateAlignment;
            if (!u) {
                var c = this.props.dateIncrement;
                u = c && Pe(c) < Pe(n) ? Ne(c).unit : r
            }
            function d() {
                o = l.startOf(e, u),
                i = l.add(o, n),
                a = {
                    start: o,
                    end: i
                }
            }
            return _e(n) <= 1 && this.isHiddenDay(o) && (o = ee(o = this.skipHiddenDays(o, t))),
            d(),
            this.trimHiddenDays(a) || (e = this.skipHiddenDays(e, t),
            d()),
            a
        }
        ,
        e.prototype.buildRangeFromDayCount = function(e, t, n) {
            var r, o = this.props, i = o.dateEnv, a = o.dateAlignment, s = 0, l = e;
            a && (l = i.startOf(l, a)),
            l = ee(l),
            r = l = this.skipHiddenDays(l, t);
            do {
                r = K(r, 1),
                this.isHiddenDay(r) || (s += 1)
            } while (s < n);return {
                start: l,
                end: r
            }
        }
        ,
        e.prototype.buildCustomVisibleRange = function(e) {
            var t = this.props
              , n = t.visibleRangeInput
              , r = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n
              , o = this.refineRange(r);
            return !o || null != o.start && null != o.end ? o : null
        }
        ,
        e.prototype.buildRenderRange = function(e, t, n) {
            return e
        }
        ,
        e.prototype.buildDateIncrement = function(e) {
            var t, n = this.props.dateIncrement;
            return n || ((t = this.props.dateAlignment) ? Re(1, t) : e || Re({
                days: 1
            }))
        }
        ,
        e.prototype.refineRange = function(e) {
            if (e) {
                var t = (n = e,
                r = this.props.dateEnv,
                o = null,
                i = null,
                n.start && (o = r.createMarker(n.start)),
                n.end && (i = r.createMarker(n.end)),
                o || i ? o && i && i < o ? null : {
                    start: o,
                    end: i
                } : null);
                return t && (t = _t(t)),
                t
            }
            var n, r, o, i;
            return null
        }
        ,
        e.prototype.initHiddenDays = function() {
            var e, t = this.props.hiddenDays || [], n = [], r = 0;
            for (!1 === this.props.weekends && t.push(0, 6),
            e = 0; e < 7; e += 1)
                (n[e] = -1 !== t.indexOf(e)) || (r += 1);
            if (!r)
                throw new Error("invalid hiddenDays");
            this.isHiddenDayHash = n
        }
        ,
        e.prototype.trimHiddenDays = function(e) {
            var t = e.start
              , n = e.end;
            return t && (t = this.skipHiddenDays(t)),
            n && (n = this.skipHiddenDays(n, -1, !0)),
            null == t || null == n || t < n ? {
                start: t,
                end: n
            } : null
        }
        ,
        e.prototype.isHiddenDay = function(e) {
            return e instanceof Date && (e = e.getUTCDay()),
            this.isHiddenDayHash[e]
        }
        ,
        e.prototype.skipHiddenDays = function(e, t, n) {
            for (void 0 === t && (t = 1),
            void 0 === n && (n = !1); this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7]; )
                e = K(e, t);
            return e
        }
        ,
        e
    }();
    function Ur(e, t, n) {
        var r = t ? t.activeRange : null;
        return Br({}, function(e, t) {
            var n = fn(t)
              , r = [].concat(e.eventSources || [])
              , o = [];
            e.initialEvents && r.unshift(e.initialEvents);
            e.events && r.unshift(e.events);
            for (var i = 0, a = r; i < a.length; i++) {
                var s = pn(a[i], t, n);
                s && o.push(s)
            }
            return o
        }(e, n), r, n)
    }
    function jr(e, t, n, r) {
        var o, i, a = n ? n.activeRange : null;
        switch (t.type) {
        case "ADD_EVENT_SOURCES":
            return Br(e, t.sources, a, r);
        case "REMOVE_EVENT_SOURCE":
            return o = e,
            i = t.sourceId,
            pe(o, function(e) {
                return e.sourceId !== i
            });
        case "PREV":
        case "NEXT":
        case "CHANGE_DATE":
        case "CHANGE_VIEW_TYPE":
            return n ? Fr(e, a, r) : e;
        case "FETCH_EVENT_SOURCES":
            return Vr(e, t.sourceIds ? he(t.sourceIds) : qr(e, r), a, r);
        case "RECEIVE_EVENTS":
        case "RECEIVE_EVENT_ERROR":
            return function(e, t, n, r) {
                var o, i = e[t];
                if (i && n === i.latestFetchId)
                    return h(h({}, e), ((o = {})[t] = h(h({}, i), {
                        isFetching: !1,
                        fetchRange: r
                    }),
                    o));
                return e
            }(e, t.sourceId, t.fetchId, t.fetchRange);
        case "REMOVE_ALL_EVENT_SOURCES":
            return {};
        default:
            return e
        }
    }
    function zr(e) {
        var t = 0;
        for (var n in e)
            e[n].isFetching && (t += 1);
        return t
    }
    function Br(e, t, n, r) {
        for (var o = {}, i = 0, a = t; i < a.length; i++) {
            var s = a[i];
            o[s.sourceId] = s
        }
        return n && (o = Fr(o, n, r)),
        h(h({}, e), o)
    }
    function Fr(e, t, n) {
        return Vr(e, pe(e, function(e) {
            return function(e, t, n) {
                if (!Yr(e, n))
                    return !e.latestFetchId;
                return !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end
            }(e, t, n)
        }), t, n)
    }
    function Vr(e, t, n, r) {
        var o = {};
        for (var i in e) {
            var a = e[i];
            t[i] ? o[i] = Gr(a, n, r) : o[i] = a
        }
        return o
    }
    function Gr(e, t, n) {
        var r = n.options
          , o = n.calendarApi
          , i = n.pluginHooks.eventSourceDefs[e.sourceDefId]
          , a = L();
        return i.fetch({
            eventSource: e,
            range: t,
            context: n
        }, function(i) {
            var s = i.rawEvents;
            r.eventSourceSuccess && (s = r.eventSourceSuccess.call(o, s, i.xhr) || s),
            e.success && (s = e.success.call(o, s, i.xhr) || s),
            n.dispatch({
                type: "RECEIVE_EVENTS",
                sourceId: e.sourceId,
                fetchId: a,
                fetchRange: t,
                rawEvents: s
            })
        }, function(i) {
            console.warn(i.message, i),
            r.eventSourceFailure && r.eventSourceFailure.call(o, i),
            e.failure && e.failure(i),
            n.dispatch({
                type: "RECEIVE_EVENT_ERROR",
                sourceId: e.sourceId,
                fetchId: a,
                fetchRange: t,
                error: i
            })
        }),
        h(h({}, e), {
            isFetching: !0,
            latestFetchId: a
        })
    }
    function qr(e, t) {
        return pe(e, function(e) {
            return Yr(e, t)
        })
    }
    function Yr(e, t) {
        return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange
    }
    function Zr(e, t) {
        switch (t.type) {
        case "UNSELECT_DATES":
            return null;
        case "SELECT_DATES":
            return t.selection;
        default:
            return e
        }
    }
    function Xr(e, t) {
        switch (t.type) {
        case "UNSELECT_EVENT":
            return "";
        case "SELECT_EVENT":
            return t.eventInstanceId;
        default:
            return e
        }
    }
    function Kr(e, t) {
        var n;
        switch (t.type) {
        case "UNSET_EVENT_DRAG":
            return null;
        case "SET_EVENT_DRAG":
            return {
                affectedEvents: (n = t.state).affectedEvents,
                mutatedEvents: n.mutatedEvents,
                isEvent: n.isEvent
            };
        default:
            return e
        }
    }
    function Jr(e, t) {
        var n;
        switch (t.type) {
        case "UNSET_EVENT_RESIZE":
            return null;
        case "SET_EVENT_RESIZE":
            return {
                affectedEvents: (n = t.state).affectedEvents,
                mutatedEvents: n.mutatedEvents,
                isEvent: n.isEvent
            };
        default:
            return e
        }
    }
    function $r(e, t, n, r, o) {
        var i = [];
        return {
            headerToolbar: e.headerToolbar ? Qr(e.headerToolbar, e, t, n, r, o, i) : null,
            footerToolbar: e.footerToolbar ? Qr(e.footerToolbar, e, t, n, r, o, i) : null,
            viewsWithButtons: i
        }
    }
    function Qr(e, t, n, r, o, i, a) {
        return fe(e, function(e) {
            return function(e, t, n, r, o, i, a) {
                var s = "rtl" === t.direction
                  , l = t.customButtons || {}
                  , u = n.buttonText || {}
                  , c = t.buttonText || {};
                return (e ? e.split(" ") : []).map(function(e) {
                    return e.split(",").map(function(e) {
                        return "title" === e ? {
                            buttonName: e
                        } : ((t = l[e]) ? (d = function(e) {
                            t.click && t.click.call(e.target, e, e.target)
                        }
                        ,
                        (p = r.getCustomButtonIconClass(t)) || (p = r.getIconClass(e, s)) || (f = t.text)) : (n = o[e]) ? (a.push(e),
                        d = function() {
                            i.changeView(e)
                        }
                        ,
                        (f = n.buttonTextOverride) || (p = r.getIconClass(e, s)) || (f = n.buttonTextDefault)) : i[e] && (d = function() {
                            i[e]()
                        }
                        ,
                        (f = u[e]) || (p = r.getIconClass(e, s)) || (f = c[e])),
                        {
                            buttonName: e,
                            buttonClick: d,
                            buttonIcon: p,
                            buttonText: f
                        });
                        var t, n, d, p, f
                    })
                })
            }(e, t, n, r, o, i, a)
        })
    }
    function eo(e, t, n, r, o) {
        var i = null;
        "GET" === (e = e.toUpperCase()) ? t = function(e, t) {
            return e + (-1 === e.indexOf("?") ? "?" : "&") + to(t)
        }(t, n) : i = to(n);
        var a = new XMLHttpRequest;
        a.open(e, t, !0),
        "GET" !== e && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        a.onload = function() {
            if (a.status >= 200 && a.status < 400) {
                var e = !1
                  , t = void 0;
                try {
                    t = JSON.parse(a.responseText),
                    e = !0
                } catch (e) {}
                e ? r(t, a) : o("Failure parsing JSON", a)
            } else
                o("Request failed", a)
        }
        ,
        a.onerror = function() {
            o("Request failed", a)
        }
        ,
        a.send(i)
    }
    function to(e) {
        var t = [];
        for (var n in e)
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }
    function no(e, t) {
        for (var n = ve(t.getCurrentData().eventSources), r = [], o = 0, i = e; o < i.length; o++) {
            for (var a = i[o], s = !1, l = 0; l < n.length; l += 1)
                if (n[l]._raw === a) {
                    n.splice(l, 1),
                    s = !0;
                    break
                }
            s || r.push(a)
        }
        for (var u = 0, c = n; u < c.length; u++) {
            var d = c[u];
            t.dispatch({
                type: "REMOVE_EVENT_SOURCE",
                sourceId: d.sourceId
            })
        }
        for (var p = 0, f = r; p < f.length; p++) {
            var h = f[p];
            t.calendarApi.addEventSource(h)
        }
    }
    var ro = [wr({
        eventSourceDefs: [{
            ignoreRange: !0,
            parseMeta: function(e) {
                return Array.isArray(e.events) ? e.events : null
            },
            fetch: function(e, t) {
                t({
                    rawEvents: e.eventSource.meta
                })
            }
        }]
    }), wr({
        eventSourceDefs: [{
            parseMeta: function(e) {
                return "function" == typeof e.events ? e.events : null
            },
            fetch: function(e, t, n) {
                var r = e.context.dateEnv;
                Kn(e.eventSource.meta.bind(null, en(e.range, r)), function(e) {
                    t({
                        rawEvents: e
                    })
                }, n)
            }
        }]
    }), wr({
        eventSourceRefiners: {
            method: String,
            extraParams: ct,
            startParam: String,
            endParam: String,
            timeZoneParam: String
        },
        eventSourceDefs: [{
            parseMeta: function(e) {
                return e.url ? {
                    url: e.url,
                    method: (e.method || "GET").toUpperCase(),
                    extraParams: e.extraParams,
                    startParam: e.startParam,
                    endParam: e.endParam,
                    timeZoneParam: e.timeZoneParam
                } : null
            },
            fetch: function(e, t, n) {
                var r = e.eventSource.meta
                  , o = function(e, t, n) {
                    var r, o, i, a, s = n.dateEnv, l = n.options, u = {};
                    null == (r = e.startParam) && (r = l.startParam);
                    null == (o = e.endParam) && (o = l.endParam);
                    null == (i = e.timeZoneParam) && (i = l.timeZoneParam);
                    a = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                    h(u, a),
                    u[r] = s.formatIso(t.start),
                    u[o] = s.formatIso(t.end),
                    "local" !== s.timeZone && (u[i] = s.timeZone);
                    return u
                }(r, e.range, e.context);
                eo(r.method, r.url, o, function(e, n) {
                    t({
                        rawEvents: e,
                        xhr: n
                    })
                }, function(e, t) {
                    n({
                        message: e,
                        xhr: t
                    })
                })
            }
        }]
    }), wr({
        recurringTypes: [{
            parse: function(e, t) {
                if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
                    var n = {
                        daysOfWeek: e.daysOfWeek || null,
                        startTime: e.startTime || null,
                        endTime: e.endTime || null,
                        startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
                        endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
                    }
                      , r = void 0;
                    return e.duration && (r = e.duration),
                    !r && e.startTime && e.endTime && (o = e.endTime,
                    i = e.startTime,
                    r = {
                        years: o.years - i.years,
                        months: o.months - i.months,
                        days: o.days - i.days,
                        milliseconds: o.milliseconds - i.milliseconds
                    }),
                    {
                        allDayGuess: Boolean(!e.startTime && !e.endTime),
                        duration: r,
                        typeData: n
                    }
                }
                var o, i;
                return null
            },
            expand: function(e, t, n) {
                var r = Ht(t, {
                    start: e.startRecur,
                    end: e.endRecur
                });
                return r ? function(e, t, n, r) {
                    var o = e ? he(e) : null
                      , i = ee(n.start)
                      , a = n.end
                      , s = [];
                    for (; i < a; ) {
                        var l = void 0;
                        o && !o[i.getUTCDay()] || (l = t ? r.add(i, t) : i,
                        s.push(l)),
                        i = K(i, 1)
                    }
                    return s
                }(e.daysOfWeek, e.startTime, r, n) : []
            }
        }],
        eventRefiners: {
            daysOfWeek: ct,
            startTime: Re,
            endTime: Re,
            duration: Re,
            startRecur: ct,
            endRecur: ct
        }
    }), wr({
        optionChangeHandlers: {
            events: function(e, t) {
                no([e], t)
            },
            eventSources: no
        }
    }), wr({
        contentTypeHandlers: {
            html: function() {
                return {
                    render: oo
                }
            },
            domNodes: function() {
                return {
                    render: io
                }
            }
        },
        propSetHandlers: {
            dateProfile: function(e, t) {
                t.emitter.trigger("datesSet", h(h({}, en(e.activeRange, t.dateEnv)), {
                    view: t.viewApi
                }))
            },
            eventStore: function(e, t) {
                var n = t.emitter;
                n.hasHandlers("eventsSet") && n.trigger("eventsSet", yn(e, t))
            }
        }
    })];
    function oo(e, t) {
        e.innerHTML = t
    }
    function io(e, t) {
        var n = Array.prototype.slice.call(e.childNodes)
          , r = Array.prototype.slice.call(t);
        if (!Ae(n, r)) {
            for (var o = 0, i = r; o < i.length; o++) {
                var a = i[o];
                e.appendChild(a)
            }
            n.forEach(R)
        }
    }
    var ao = function() {
        function e(e) {
            this.drainedOption = e,
            this.isRunning = !1,
            this.isDirty = !1,
            this.pauseDepths = {},
            this.timeoutId = 0
        }
        return e.prototype.request = function(e) {
            this.isDirty = !0,
            this.isPaused() || (this.clearTimeout(),
            null == e ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e))
        }
        ,
        e.prototype.pause = function(e) {
            void 0 === e && (e = "");
            var t = this.pauseDepths;
            t[e] = (t[e] || 0) + 1,
            this.clearTimeout()
        }
        ,
        e.prototype.resume = function(e, t) {
            void 0 === e && (e = "");
            var n = this.pauseDepths;
            if (e in n) {
                if (t)
                    delete n[e];
                else
                    n[e] -= 1,
                    n[e] <= 0 && delete n[e];
                this.tryDrain()
            }
        }
        ,
        e.prototype.isPaused = function() {
            return Object.keys(this.pauseDepths).length
        }
        ,
        e.prototype.tryDrain = function() {
            if (!this.isRunning && !this.isPaused()) {
                for (this.isRunning = !0; this.isDirty; )
                    this.isDirty = !1,
                    this.drained();
                this.isRunning = !1
            }
        }
        ,
        e.prototype.clear = function() {
            this.clearTimeout(),
            this.isDirty = !1,
            this.pauseDepths = {}
        }
        ,
        e.prototype.clearTimeout = function() {
            this.timeoutId && (clearTimeout(this.timeoutId),
            this.timeoutId = 0)
        }
        ,
        e.prototype.drained = function() {
            this.drainedOption && this.drainedOption()
        }
        ,
        e
    }()
      , so = function() {
        function e(e, t) {
            this.runTaskOption = e,
            this.drainedOption = t,
            this.queue = [],
            this.delayedRunner = new ao(this.drain.bind(this))
        }
        return e.prototype.request = function(e, t) {
            this.queue.push(e),
            this.delayedRunner.request(t)
        }
        ,
        e.prototype.pause = function(e) {
            this.delayedRunner.pause(e)
        }
        ,
        e.prototype.resume = function(e, t) {
            this.delayedRunner.resume(e, t)
        }
        ,
        e.prototype.drain = function() {
            for (var e = this.queue; e.length; ) {
                for (var t = [], n = void 0; n = e.shift(); )
                    this.runTask(n),
                    t.push(n);
                this.drained(t)
            }
        }
        ,
        e.prototype.runTask = function(e) {
            this.runTaskOption && this.runTaskOption(e)
        }
        ,
        e.prototype.drained = function(e) {
            this.drainedOption && this.drainedOption(e)
        }
        ,
        e
    }();
    function lo(e, t, n) {
        var r;
        return r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange,
        n.formatRange(r.start, r.end, et(t.titleFormat || function(e) {
            var t = e.currentRangeUnit;
            if ("year" === t)
                return {
                    year: "numeric"
                };
            if ("month" === t)
                return {
                    year: "numeric",
                    month: "long"
                };
            var n = Q(e.currentRange.start, e.currentRange.end);
            if (null !== n && n > 1)
                return {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                };
            return {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        }(e)), {
            isEndExclusive: e.isRangeAllDay,
            defaultSeparator: t.titleRangeSeparator
        })
    }
    var uo = function() {
        function e(e) {
            var t, n, r, o = this;
            this.computeOptionsData = Le(this._computeOptionsData),
            this.computeCurrentViewData = Le(this._computeCurrentViewData),
            this.organizeRawLocales = Le(Tn),
            this.buildLocale = Le(xn),
            this.buildPluginHooks = (n = [],
            r = [],
            function(e, o) {
                return t && Ae(e, n) && Ae(o, r) || (t = function(e, t) {
                    var n = {}
                      , r = {
                        reducers: [],
                        contextInit: [],
                        eventRefiners: {},
                        eventDefMemberAdders: [],
                        eventSourceRefiners: {},
                        isDraggableTransformers: [],
                        eventDragMutationMassagers: [],
                        eventDefMutationAppliers: [],
                        dateSelectionTransformers: [],
                        datePointTransforms: [],
                        dateSpanTransforms: [],
                        views: {},
                        viewPropsTransformers: [],
                        isPropsValid: null,
                        externalDefTransforms: [],
                        eventResizeJoinTransforms: [],
                        viewContainerAppends: [],
                        eventDropTransformers: [],
                        componentInteractions: [],
                        calendarInteractions: [],
                        themeClasses: {},
                        eventSourceDefs: [],
                        cmdFormatter: null,
                        recurringTypes: [],
                        namedTimeZonedImpl: null,
                        initialView: "",
                        elementDraggingImpl: null,
                        optionChangeHandlers: {},
                        scrollGridImpl: null,
                        contentTypeHandlers: {},
                        listenerRefiners: {},
                        optionRefiners: {},
                        propSetHandlers: {}
                    };
                    function o(e) {
                        for (var t = 0, i = e; t < i.length; t++) {
                            var a = i[t];
                            n[a.id] || (n[a.id] = !0,
                            o(a.deps),
                            l = a,
                            r = {
                                reducers: (s = r).reducers.concat(l.reducers),
                                contextInit: s.contextInit.concat(l.contextInit),
                                eventRefiners: h(h({}, s.eventRefiners), l.eventRefiners),
                                eventDefMemberAdders: s.eventDefMemberAdders.concat(l.eventDefMemberAdders),
                                eventSourceRefiners: h(h({}, s.eventSourceRefiners), l.eventSourceRefiners),
                                isDraggableTransformers: s.isDraggableTransformers.concat(l.isDraggableTransformers),
                                eventDragMutationMassagers: s.eventDragMutationMassagers.concat(l.eventDragMutationMassagers),
                                eventDefMutationAppliers: s.eventDefMutationAppliers.concat(l.eventDefMutationAppliers),
                                dateSelectionTransformers: s.dateSelectionTransformers.concat(l.dateSelectionTransformers),
                                datePointTransforms: s.datePointTransforms.concat(l.datePointTransforms),
                                dateSpanTransforms: s.dateSpanTransforms.concat(l.dateSpanTransforms),
                                views: h(h({}, s.views), l.views),
                                viewPropsTransformers: s.viewPropsTransformers.concat(l.viewPropsTransformers),
                                isPropsValid: l.isPropsValid || s.isPropsValid,
                                externalDefTransforms: s.externalDefTransforms.concat(l.externalDefTransforms),
                                eventResizeJoinTransforms: s.eventResizeJoinTransforms.concat(l.eventResizeJoinTransforms),
                                viewContainerAppends: s.viewContainerAppends.concat(l.viewContainerAppends),
                                eventDropTransformers: s.eventDropTransformers.concat(l.eventDropTransformers),
                                calendarInteractions: s.calendarInteractions.concat(l.calendarInteractions),
                                componentInteractions: s.componentInteractions.concat(l.componentInteractions),
                                themeClasses: h(h({}, s.themeClasses), l.themeClasses),
                                eventSourceDefs: s.eventSourceDefs.concat(l.eventSourceDefs),
                                cmdFormatter: l.cmdFormatter || s.cmdFormatter,
                                recurringTypes: s.recurringTypes.concat(l.recurringTypes),
                                namedTimeZonedImpl: l.namedTimeZonedImpl || s.namedTimeZonedImpl,
                                initialView: s.initialView || l.initialView,
                                elementDraggingImpl: s.elementDraggingImpl || l.elementDraggingImpl,
                                optionChangeHandlers: h(h({}, s.optionChangeHandlers), l.optionChangeHandlers),
                                scrollGridImpl: l.scrollGridImpl || s.scrollGridImpl,
                                contentTypeHandlers: h(h({}, s.contentTypeHandlers), l.contentTypeHandlers),
                                listenerRefiners: h(h({}, s.listenerRefiners), l.listenerRefiners),
                                optionRefiners: h(h({}, s.optionRefiners), l.optionRefiners),
                                propSetHandlers: h(h({}, s.propSetHandlers), l.propSetHandlers)
                            })
                        }
                        var s, l
                    }
                    return e && o(e),
                    o(t),
                    r
                }(e, o)),
                n = e,
                r = o,
                t
            }
            ),
            this.buildDateEnv = Le(co),
            this.buildTheme = Le(po),
            this.parseToolbars = Le($r),
            this.buildViewSpecs = Le(Ar),
            this.buildDateProfileGenerator = We(fo),
            this.buildViewApi = Le(ho),
            this.buildViewUiProps = We(mo),
            this.buildEventUiBySource = Le(vo, ge),
            this.buildEventUiBases = Le(go),
            this.parseContextBusinessHours = We(yo),
            this.buildTitle = Le(lo),
            this.emitter = new Jn,
            this.actionRunner = new so(this._handleAction.bind(this),this.updateData.bind(this)),
            this.currentCalendarOptionsInput = {},
            this.currentCalendarOptionsRefined = {},
            this.currentViewOptionsInput = {},
            this.currentViewOptionsRefined = {},
            this.currentCalendarOptionsRefiners = {},
            this.getCurrentData = function() {
                return o.data
            }
            ,
            this.dispatch = function(e) {
                o.actionRunner.request(e)
            }
            ,
            this.props = e,
            this.actionRunner.pause();
            var i = {}
              , a = this.computeOptionsData(e.optionOverrides, i, e.calendarApi)
              , s = a.calendarOptions.initialView || a.pluginHooks.initialView
              , l = this.computeCurrentViewData(s, a, e.optionOverrides, i);
            e.calendarApi.currentDataManager = this,
            this.emitter.setThisContext(e.calendarApi),
            this.emitter.setOptions(l.options);
            var u, c, d, p = (u = a.calendarOptions,
            c = a.dateEnv,
            null != (d = u.initialDate) ? c.createMarker(d) : hn(u.now, c)), f = l.dateProfileGenerator.build(p);
            Wt(f.activeRange, p) || (p = f.currentRange.start);
            for (var v = {
                dateEnv: a.dateEnv,
                options: a.calendarOptions,
                pluginHooks: a.pluginHooks,
                calendarApi: e.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData
            }, g = 0, m = a.pluginHooks.contextInit; g < m.length; g++) {
                (0,
                m[g])(v)
            }
            for (var y = Ur(a.calendarOptions, f, v), b = {
                dynamicOptionOverrides: i,
                currentViewType: s,
                currentDate: p,
                dateProfile: f,
                businessHours: this.parseContextBusinessHours(v),
                eventSources: y,
                eventUiBases: {},
                loadingLevel: zr(y),
                eventStore: {
                    defs: {},
                    instances: {}
                },
                renderableEventStore: {
                    defs: {},
                    instances: {}
                },
                dateSelection: null,
                eventSelection: "",
                eventDrag: null,
                eventResize: null,
                selectionConfig: this.buildViewUiProps(v).selectionConfig
            }, S = h(h({}, v), b), E = 0, w = a.pluginHooks.reducers; E < w.length; E++) {
                var D = w[E];
                h(b, D(null, null, S))
            }
            b.loadingLevel && this.emitter.trigger("loading", !0),
            this.state = b,
            this.updateData(),
            this.actionRunner.resume()
        }
        return e.prototype.resetOptions = function(e, t) {
            var n = this.props;
            n.optionOverrides = t ? h(h({}, n.optionOverrides), e) : e,
            this.actionRunner.request({
                type: "NOTHING"
            })
        }
        ,
        e.prototype._handleAction = function(e) {
            var t = this.props
              , n = this.state
              , r = this.emitter
              , o = function(e, t) {
                var n;
                switch (t.type) {
                case "SET_OPTION":
                    return h(h({}, e), ((n = {})[t.optionName] = t.rawOptionValue,
                    n));
                default:
                    return e
                }
            }(n.dynamicOptionOverrides, e)
              , i = this.computeOptionsData(t.optionOverrides, o, t.calendarApi)
              , a = function(e, t) {
                switch (t.type) {
                case "CHANGE_VIEW_TYPE":
                    e = t.viewType
                }
                return e
            }(n.currentViewType, e)
              , s = this.computeCurrentViewData(a, i, t.optionOverrides, o);
            t.calendarApi.currentDataManager = this,
            r.setThisContext(t.calendarApi),
            r.setOptions(s.options);
            var l = {
                dateEnv: i.dateEnv,
                options: i.calendarOptions,
                pluginHooks: i.pluginHooks,
                calendarApi: t.calendarApi,
                dispatch: this.dispatch,
                emitter: r,
                getCurrentData: this.getCurrentData
            }
              , u = n.currentDate
              , c = n.dateProfile;
            this.data && this.data.dateProfileGenerator !== s.dateProfileGenerator && (c = s.dateProfileGenerator.build(u)),
            c = function(e, t, n, r) {
                var o;
                switch (t.type) {
                case "CHANGE_VIEW_TYPE":
                    return r.build(t.dateMarker || n);
                case "CHANGE_DATE":
                    if (!e.activeRange || !Wt(e.currentRange, t.dateMarker))
                        return r.build(t.dateMarker);
                    break;
                case "PREV":
                    if ((o = r.buildPrev(e, n)).isValid)
                        return o;
                    break;
                case "NEXT":
                    if ((o = r.buildNext(e, n)).isValid)
                        return o
                }
                return e
            }(c, e, u = function(e, t) {
                switch (t.type) {
                case "CHANGE_DATE":
                    return t.dateMarker;
                default:
                    return e
                }
            }(u, e), s.dateProfileGenerator),
            Wt(c.currentRange, u) || (u = c.currentRange.start);
            for (var d = jr(n.eventSources, e, c, l), p = zr(d), f = dr(n.eventStore, e, d, c, l), v = p && !s.options.progressiveEventRendering && n.renderableEventStore || f, g = this.buildViewUiProps(l), m = g.eventUiSingleBase, y = g.selectionConfig, b = this.buildEventUiBySource(d), S = this.buildEventUiBases(v.defs, m, b), E = n.loadingLevel || 0, w = p, D = {
                dynamicOptionOverrides: o,
                currentViewType: a,
                currentDate: u,
                dateProfile: c,
                eventSources: d,
                eventStore: f,
                renderableEventStore: v,
                selectionConfig: y,
                eventUiBases: S,
                loadingLevel: w,
                businessHours: this.parseContextBusinessHours(l),
                dateSelection: Zr(n.dateSelection, e),
                eventSelection: Xr(n.eventSelection, e),
                eventDrag: Kr(n.eventDrag, e),
                eventResize: Jr(n.eventResize, e)
            }, C = h(h({}, l), D), R = 0, T = i.pluginHooks.reducers; R < T.length; R++) {
                var x = T[R];
                h(D, x(n, e, C))
            }
            !E && w ? r.trigger("loading", !0) : E && !w && r.trigger("loading", !1),
            this.state = D,
            t.onAction && t.onAction(e)
        }
        ,
        e.prototype.updateData = function() {
            var e, t, n, r, o, i, a, s, l, u = this.props, c = this.state, d = this.data, p = this.computeOptionsData(u.optionOverrides, c.dynamicOptionOverrides, u.calendarApi), f = this.computeCurrentViewData(c.currentViewType, p, u.optionOverrides, c.dynamicOptionOverrides), v = this.data = h(h(h({
                viewTitle: this.buildTitle(c.dateProfile, f.options, p.dateEnv),
                calendarApi: u.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData
            }, p), f), c), g = p.pluginHooks.optionChangeHandlers, m = d && d.calendarOptions, y = p.calendarOptions;
            if (m && m !== y)
                for (var b in m.timeZone !== y.timeZone && (c.eventSources = v.eventSources = (i = v.eventSources,
                a = c.dateProfile,
                s = v,
                l = a ? a.activeRange : null,
                Vr(i, qr(i, s), l, s)),
                c.eventStore = v.eventStore = (e = v.eventStore,
                t = d.dateEnv,
                n = v.dateEnv,
                r = e.defs,
                o = fe(e.instances, function(e) {
                    var o = r[e.defId];
                    return o.allDay || o.recurringDef ? e : h(h({}, e), {
                        range: {
                            start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
                            end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
                        },
                        forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
                        forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo
                    })
                }),
                {
                    defs: r,
                    instances: o
                })),
                g)
                    m[b] !== y[b] && g[b](y[b], v);
            u.onData && u.onData(v)
        }
        ,
        e.prototype._computeOptionsData = function(e, t, n) {
            var r = this.processRawCalendarOptions(e, t)
              , o = r.refinedOptions
              , i = r.pluginHooks
              , a = r.localeDefaults
              , s = r.availableLocaleData;
            bo(r.extra);
            var l = this.buildDateEnv(o.timeZone, o.locale, o.weekNumberCalculation, o.firstDay, o.weekText, i, s, o.defaultRangeSeparator)
              , u = this.buildViewSpecs(i.views, e, t, a)
              , c = this.buildTheme(o, i);
            return {
                calendarOptions: o,
                pluginHooks: i,
                dateEnv: l,
                viewSpecs: u,
                theme: c,
                toolbarConfig: this.parseToolbars(o, e, c, u, n),
                localeDefaults: a,
                availableRawLocales: s.map
            }
        }
        ,
        e.prototype.processRawCalendarOptions = function(e, t) {
            var n = lt([nt, e, t])
              , r = n.locales
              , o = n.locale
              , i = this.organizeRawLocales(r)
              , a = i.map
              , s = this.buildLocale(o || i.defaultCode, a).options
              , l = this.buildPluginHooks(e.plugins || [], ro)
              , u = this.currentCalendarOptionsRefiners = h(h(h(h(h({}, tt), rt), ot), l.listenerRefiners), l.optionRefiners)
              , c = {}
              , d = lt([nt, s, e, t])
              , p = {}
              , f = this.currentCalendarOptionsInput
              , v = this.currentCalendarOptionsRefined
              , g = !1;
            for (var m in d)
                "plugins" !== m && (d[m] === f[m] || it[m] && m in f && it[m](f[m], d[m]) ? p[m] = v[m] : u[m] ? (p[m] = u[m](d[m]),
                g = !0) : c[m] = f[m]);
            return g && (this.currentCalendarOptionsInput = d,
            this.currentCalendarOptionsRefined = p),
            {
                rawOptions: this.currentCalendarOptionsInput,
                refinedOptions: this.currentCalendarOptionsRefined,
                pluginHooks: l,
                availableLocaleData: i,
                localeDefaults: s,
                extra: c
            }
        }
        ,
        e.prototype._computeCurrentViewData = function(e, t, n, r) {
            var o = t.viewSpecs[e];
            if (!o)
                throw new Error('viewType "' + e + "\" is not available. Please make sure you've loaded all neccessary plugins");
            var i = this.processRawViewOptions(o, t.pluginHooks, t.localeDefaults, n, r)
              , a = i.refinedOptions;
            return bo(i.extra),
            {
                viewSpec: o,
                options: a,
                dateProfileGenerator: this.buildDateProfileGenerator({
                    dateProfileGeneratorClass: o.optionDefaults.dateProfileGeneratorClass,
                    duration: o.duration,
                    durationUnit: o.durationUnit,
                    usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
                    dateEnv: t.dateEnv,
                    calendarApi: this.props.calendarApi,
                    slotMinTime: a.slotMinTime,
                    slotMaxTime: a.slotMaxTime,
                    showNonCurrentDates: a.showNonCurrentDates,
                    dayCount: a.dayCount,
                    dateAlignment: a.dateAlignment,
                    dateIncrement: a.dateIncrement,
                    hiddenDays: a.hiddenDays,
                    weekends: a.weekends,
                    nowInput: a.now,
                    validRangeInput: a.validRange,
                    visibleRangeInput: a.visibleRange,
                    monthMode: a.monthMode,
                    fixedWeekCount: a.fixedWeekCount
                }),
                viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
            }
        }
        ,
        e.prototype.processRawViewOptions = function(e, t, n, r, o) {
            var i = lt([nt, e.optionDefaults, n, r, e.optionOverrides, o])
              , a = h(h(h(h(h(h({}, tt), rt), ot), st), t.listenerRefiners), t.optionRefiners)
              , s = {}
              , l = this.currentViewOptionsInput
              , u = this.currentViewOptionsRefined
              , c = !1
              , d = {};
            for (var p in i)
                i[p] === l[p] ? s[p] = u[p] : (i[p] === this.currentCalendarOptionsInput[p] ? p in this.currentCalendarOptionsRefined && (s[p] = this.currentCalendarOptionsRefined[p]) : a[p] ? s[p] = a[p](i[p]) : d[p] = i[p],
                c = !0);
            return c && (this.currentViewOptionsInput = i,
            this.currentViewOptionsRefined = s),
            {
                rawOptions: this.currentViewOptionsInput,
                refinedOptions: this.currentViewOptionsRefined,
                extra: d
            }
        }
        ,
        e
    }();
    function co(e, t, n, r, o, i, a, s) {
        var l = xn(t || a.defaultCode, a.map);
        return new Dn({
            calendarSystem: "gregory",
            timeZone: e,
            namedTimeZoneImpl: i.namedTimeZonedImpl,
            locale: l,
            weekNumberCalculation: n,
            firstDay: r,
            weekText: o,
            cmdFormatter: i.cmdFormatter,
            defaultSeparator: s
        })
    }
    function po(e, t) {
        return new (t.themeClasses[e.themeSystem] || Dr)(e)
    }
    function fo(e) {
        return new (e.dateProfileGeneratorClass || Wr)(e)
    }
    function ho(e, t, n) {
        return new cn(e,t,n)
    }
    function vo(e) {
        return fe(e, function(e) {
            return e.ui
        })
    }
    function go(e, t, n) {
        var r = {
            "": t
        };
        for (var o in e) {
            var i = e[o];
            i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId])
        }
        return r
    }
    function mo(e) {
        var t = e.options;
        return {
            eventUiSingleBase: bt({
                display: t.eventDisplay,
                editable: t.editable,
                startEditable: t.eventStartEditable,
                durationEditable: t.eventDurationEditable,
                constraint: t.eventConstraint,
                overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
                allow: t.eventAllow,
                backgroundColor: t.eventBackgroundColor,
                borderColor: t.eventBorderColor,
                textColor: t.eventTextColor,
                color: t.eventColor
            }, e),
            selectionConfig: bt({
                constraint: t.selectConstraint,
                overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
                allow: t.selectAllow
            }, e)
        }
    }
    function yo(e) {
        return Pn(e.options.businessHours, e)
    }
    function bo(e, t) {
        for (var n in e)
            console.warn("Unknown option '" + n + "'" + (t ? " for view '" + t + "'" : ""))
    }
    !function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleData = function(e) {
                n.dataManager ? n.setState(e) : n.state = e
            }
            ,
            n.dataManager = new uo({
                optionOverrides: t.optionOverrides,
                calendarApi: t.calendarApi,
                onData: n.handleData
            }),
            n
        }
        f(t, e),
        t.prototype.render = function() {
            return this.props.children(this.state)
        }
        ,
        t.prototype.componentDidUpdate = function(e) {
            var t = this.props.optionOverrides;
            t !== e.optionOverrides && this.dataManager.resetOptions(t)
        }
    }(g);
    var So = function() {
        function e(e) {
            this.component = e.component
        }
        return e.prototype.destroy = function() {}
        ,
        e
    }();
    function Eo(e) {
        var t;
        return (t = {})[e.component.uid] = e,
        t
    }
    var wo = {}
      , Do = function() {
        function e(e, t) {
            this.emitter = new Jn
        }
        return e.prototype.destroy = function() {}
        ,
        e.prototype.setMirrorIsVisible = function(e) {}
        ,
        e.prototype.setMirrorNeedsRevert = function(e) {}
        ,
        e.prototype.setAutoScrollEnabled = function(e) {}
        ,
        e
    }()
      , Co = {}
      , Ro = {
        startTime: Re,
        duration: Re,
        create: Boolean,
        sourceId: String
    };
    function To(e) {
        var t = ut(e, Ro)
          , n = t.refined
          , r = t.extra;
        return {
            startTime: n.startTime || null,
            duration: n.duration || null,
            create: null == n.create || n.create,
            sourceId: n.sourceId,
            leftoverProps: r
        }
    }
    var xo = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props.widgetGroups.map(function(t) {
                return e.renderWidgetGroup(t)
            });
            return m.apply(void 0, v(["div", {
                className: "fc-toolbar-chunk"
            }], t))
        }
        ,
        t.prototype.renderWidgetGroup = function(e) {
            for (var t = this.props, n = this.context.theme, r = [], o = !0, i = 0, a = e; i < a.length; i++) {
                var s = a[i]
                  , l = s.buttonName
                  , u = s.buttonClick
                  , c = s.buttonText
                  , d = s.buttonIcon;
                if ("title" === l)
                    o = !1,
                    r.push(m("h2", {
                        className: "fc-toolbar-title"
                    }, t.title));
                else {
                    var p = d ? {
                        "aria-label": l
                    } : {}
                      , f = ["fc-" + l + "-button", n.getClass("button")];
                    l === t.activeButton && f.push(n.getClass("buttonActive"));
                    var g = !t.isTodayEnabled && "today" === l || !t.isPrevEnabled && "prev" === l || !t.isNextEnabled && "next" === l;
                    r.push(m("button", h({
                        disabled: g,
                        className: f.join(" "),
                        onClick: u,
                        type: "button"
                    }, p), c || (d ? m("span", {
                        className: d
                    }) : "")))
                }
            }
            if (r.length > 1) {
                var y = o && n.getClass("buttonGroup") || "";
                return m.apply(void 0, v(["div", {
                    className: y
                }], r))
            }
            return r[0]
        }
        ,
        t
    }(sr)
      , ko = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return f(t, e),
        t.prototype.render = function() {
            var e, t, n = this.props, r = n.model, o = n.extraClassName, i = !1, a = r.center;
            return r.left ? (i = !0,
            e = r.left) : e = r.start,
            r.right ? (i = !0,
            t = r.right) : t = r.end,
            m("div", {
                className: [o || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(" ")
            }, this.renderSection("start", e || []), this.renderSection("center", a || []), this.renderSection("end", t || []))
        }
        ,
        t.prototype.renderSection = function(e, t) {
            var n = this.props;
            return m(xo, {
                key: e,
                widgetGroups: t,
                title: n.title,
                activeButton: n.activeButton,
                isTodayEnabled: n.isTodayEnabled,
                isPrevEnabled: n.isPrevEnabled,
                isNextEnabled: n.isNextEnabled
            })
        }
        ,
        t
    }(sr)
      , Mo = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                availableWidth: null
            },
            t.handleEl = function(e) {
                t.el = e,
                cr(t.props.elRef, e),
                t.updateAvailableWidth()
            }
            ,
            t.handleResize = function() {
                t.updateAvailableWidth()
            }
            ,
            t
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.state
              , n = e.aspectRatio
              , r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"]
              , o = ""
              , i = "";
            return n ? null !== t.availableWidth ? o = t.availableWidth / n : i = 1 / n * 100 + "%" : o = e.height || "",
            m("div", {
                ref: this.handleEl,
                onClick: e.onClick,
                className: r.join(" "),
                style: {
                    height: o,
                    paddingBottom: i
                }
            }, e.children)
        }
        ,
        t.prototype.componentDidMount = function() {
            this.context.addResizeHandler(this.handleResize)
        }
        ,
        t.prototype.componentWillUnmount = function() {
            this.context.removeResizeHandler(this.handleResize)
        }
        ,
        t.prototype.updateAvailableWidth = function() {
            this.el && this.props.aspectRatio && this.setState({
                availableWidth: this.el.offsetWidth
            })
        }
        ,
        t
    }(sr)
      , _o = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.handleSegClick = function(e, t) {
                var r = n.component
                  , o = r.context
                  , i = zt(t);
                if (i && r.isValidSegDownEl(e.target)) {
                    var a = T(e.target, ".fc-event-forced-url")
                      , s = a ? a.querySelector("a[href]").href : "";
                    o.emitter.trigger("eventClick", {
                        el: t,
                        event: new gn(r.context,i.eventRange.def,i.eventRange.instance),
                        jsEvent: e,
                        view: o.viewApi
                    }),
                    s && !e.defaultPrevented && (window.location.href = s)
                }
            }
            ,
            n.destroy = H(t.el, "click", ".fc-event", n.handleSegClick),
            n
        }
        return f(t, e),
        t
    }(So)
      , Po = function(e) {
        function t(t) {
            var n, r, o, i, a, s = e.call(this, t) || this;
            return s.handleEventElRemove = function(e) {
                e === s.currentSegEl && s.handleSegLeave(null, s.currentSegEl)
            }
            ,
            s.handleSegEnter = function(e, t) {
                zt(t) && (s.currentSegEl = t,
                s.triggerEvent("eventMouseEnter", e, t))
            }
            ,
            s.handleSegLeave = function(e, t) {
                s.currentSegEl && (s.currentSegEl = null,
                s.triggerEvent("eventMouseLeave", e, t))
            }
            ,
            s.removeHoverListeners = (n = t.el,
            r = ".fc-event",
            o = s.handleSegEnter,
            i = s.handleSegLeave,
            H(n, "mouseover", r, function(e, t) {
                if (t !== a) {
                    a = t,
                    o(e, t);
                    var n = function(e) {
                        a = null,
                        i(e, t),
                        t.removeEventListener("mouseleave", n)
                    };
                    t.addEventListener("mouseleave", n)
                }
            })),
            s
        }
        return f(t, e),
        t.prototype.destroy = function() {
            this.removeHoverListeners()
        }
        ,
        t.prototype.triggerEvent = function(e, t, n) {
            var r = this.component
              , o = r.context
              , i = zt(n);
            t && !r.isValidSegDownEl(t.target) || o.emitter.trigger(e, {
                el: n,
                event: new gn(o,i.eventRange.def,i.eventRange.instance),
                jsEvent: t,
                view: o.viewApi
            })
        }
        ,
        t
    }(So)
      , Io = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildViewContext = Le(ir),
            t.buildViewPropTransformers = Le(Ho),
            t.buildToolbarProps = Le(No),
            t.handleNavLinkClick = N("a[data-navlink]", t._handleNavLinkClick.bind(t)),
            t.headerRef = b(),
            t.footerRef = b(),
            t.interactionsStore = {},
            t.registerInteractiveComponent = function(e, n) {
                var r = function(e, t) {
                    return {
                        component: e,
                        el: t.el,
                        useEventCenter: null == t.useEventCenter || t.useEventCenter
                    }
                }(e, n)
                  , o = [_o, Po].concat(t.props.pluginHooks.componentInteractions).map(function(e) {
                    return new e(r)
                });
                t.interactionsStore[e.uid] = o,
                wo[e.uid] = r
            }
            ,
            t.unregisterInteractiveComponent = function(e) {
                for (var n = 0, r = t.interactionsStore[e.uid]; n < r.length; n++) {
                    r[n].destroy()
                }
                delete t.interactionsStore[e.uid],
                delete wo[e.uid]
            }
            ,
            t.resizeRunner = new ao(function() {
                t.props.emitter.trigger("_resize", !0),
                t.props.emitter.trigger("windowResize", {
                    view: t.props.viewApi
                })
            }
            ),
            t.handleWindowResize = function(e) {
                var n = t.props.options;
                n.handleWindowResize && e.target === window && t.resizeRunner.request(n.windowResizeDelay)
            }
            ,
            t
        }
        return f(t, e),
        t.prototype.render = function() {
            var e, t = this.props, n = t.toolbarConfig, r = t.options, o = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, hn(t.options.now, t.dateEnv), t.viewTitle), i = !1, a = "";
            t.isHeightAuto || t.forPrint ? a = "" : null != r.height ? i = !0 : null != r.contentHeight ? a = r.contentHeight : e = Math.max(r.aspectRatio, .5);
            var s = this.buildViewContext(t.viewSpec, t.viewApi, t.options, t.dateProfileGenerator, t.dateEnv, t.theme, t.pluginHooks, t.dispatch, t.getCurrentData, t.emitter, t.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
            return m(or.Provider, {
                value: s
            }, n.headerToolbar && m(ko, h({
                ref: this.headerRef,
                extraClassName: "fc-header-toolbar",
                model: n.headerToolbar
            }, o)), m(Mo, {
                liquid: i,
                height: a,
                aspectRatio: e,
                onClick: this.handleNavLinkClick
            }, this.renderView(t), this.buildAppendContent()), n.footerToolbar && m(ko, h({
                ref: this.footerRef,
                extraClassName: "fc-footer-toolbar",
                model: n.footerToolbar
            }, o)))
        }
        ,
        t.prototype.componentDidMount = function() {
            var e = this.props;
            this.calendarInteractions = e.pluginHooks.calendarInteractions.map(function(t) {
                return new t(e)
            }),
            window.addEventListener("resize", this.handleWindowResize);
            var t = e.pluginHooks.propSetHandlers;
            for (var n in t)
                t[n](e[n], e)
        }
        ,
        t.prototype.componentDidUpdate = function(e) {
            var t = this.props
              , n = t.pluginHooks.propSetHandlers;
            for (var r in n)
                t[r] !== e[r] && n[r](t[r], t)
        }
        ,
        t.prototype.componentWillUnmount = function() {
            window.removeEventListener("resize", this.handleWindowResize),
            this.resizeRunner.clear();
            for (var e = 0, t = this.calendarInteractions; e < t.length; e++) {
                t[e].destroy()
            }
            this.props.emitter.trigger("_unmount")
        }
        ,
        t.prototype._handleNavLinkClick = function(e, t) {
            var n = this.props
              , r = n.dateEnv
              , o = n.options
              , i = n.calendarApi
              , a = t.getAttribute("data-navlink");
            a = a ? JSON.parse(a) : {};
            var s = r.createMarker(a.date)
              , l = a.type
              , u = "day" === l ? o.navLinkDayClick : "week" === l ? o.navLinkWeekClick : null;
            "function" == typeof u ? u.call(i, r.toDate(s), e) : ("string" == typeof u && (l = u),
            i.zoomTo(s, l))
        }
        ,
        t.prototype.buildAppendContent = function() {
            var e = this.props
              , t = e.pluginHooks.viewContainerAppends.map(function(t) {
                return t(e)
            });
            return m.apply(void 0, v([S, {}], t))
        }
        ,
        t.prototype.renderView = function(e) {
            for (var t = e.pluginHooks, n = e.viewSpec, r = {
                dateProfile: e.dateProfile,
                businessHours: e.businessHours,
                eventStore: e.renderableEventStore,
                eventUiBases: e.eventUiBases,
                dateSelection: e.dateSelection,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                isHeightAuto: e.isHeightAuto,
                forPrint: e.forPrint
            }, o = 0, i = this.buildViewPropTransformers(t.viewPropsTransformers); o < i.length; o++) {
                var a = i[o];
                h(r, a.transform(r, e))
            }
            var s = n.component;
            return m(s, h({}, r))
        }
        ,
        t
    }(ar);
    function No(e, t, n, r, o, i) {
        var a = n.build(o, void 0, !1)
          , s = n.buildPrev(t, r, !1)
          , l = n.buildNext(t, r, !1);
        return {
            title: i,
            activeButton: e.type,
            isTodayEnabled: a.isValid && !Wt(t.currentRange, o),
            isPrevEnabled: s.isValid,
            isNextEnabled: l.isValid
        }
    }
    function Ho(e) {
        return e.map(function(e) {
            return new e
        })
    }
    var Oo = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.state = {
                forPrint: !1
            },
            t.handleBeforePrint = function() {
                t.setState({
                    forPrint: !0
                })
            }
            ,
            t.handleAfterPrint = function() {
                t.setState({
                    forPrint: !1
                })
            }
            ,
            t
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = e.options
              , n = this.state.forPrint
              , r = n || "auto" === t.height || "auto" === t.contentHeight
              , o = r || null == t.height ? "" : t.height
              , i = ["fc", n ? "fc-media-print" : "fc-media-screen", "fc-direction-" + t.direction, e.theme.getClass("root")];
            return Hn() || i.push("fc-liquid-hack"),
            e.children(i, o, r, n)
        }
        ,
        t.prototype.componentDidMount = function() {
            var e = this.props.emitter;
            e.on("_beforeprint", this.handleBeforePrint),
            e.on("_afterprint", this.handleAfterPrint)
        }
        ,
        t.prototype.componentWillUnmount = function() {
            var e = this.props.emitter;
            e.off("_beforeprint", this.handleBeforePrint),
            e.off("_afterprint", this.handleAfterPrint)
        }
        ,
        t
    }(sr);
    function Ao(e, t) {
        return et(!e || t > 10 ? {
            weekday: "short"
        } : t > 1 ? {
            weekday: "short",
            month: "numeric",
            day: "numeric",
            omitCommas: !0
        } : {
            weekday: "long"
        })
    }
    var Lo = "fc-col-header-cell";
    function Wo(e) {
        return e.text
    }
    var Uo = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this.context
              , t = e.dateEnv
              , n = e.options
              , r = e.theme
              , o = e.viewApi
              , i = this.props
              , a = i.date
              , s = i.dateProfile
              , l = Wn(a, i.todayRange, null, s)
              , u = [Lo].concat(Un(l, r))
              , c = t.format(a, i.dayHeaderFormat)
              , d = n.navLinks && !l.isDisabled && i.colCnt > 1 ? {
                "data-navlink": zn(a),
                tabIndex: 0
            } : {}
              , p = h(h(h({
                date: t.toDate(a),
                view: o
            }, i.extraHookProps), {
                text: c
            }), l);
            return m(Rr, {
                hookProps: p,
                classNames: n.dayHeaderClassNames,
                content: n.dayHeaderContent,
                defaultContent: Wo,
                didMount: n.dayHeaderDidMount,
                willUnmount: n.dayHeaderWillUnmount
            }, function(e, t, n, r) {
                return m("th", h({
                    ref: e,
                    className: u.concat(t).join(" "),
                    "data-date": l.isDisabled ? void 0 : He(a),
                    colSpan: i.colSpan
                }, i.extraDataAttrs), m("div", {
                    className: "fc-scrollgrid-sync-inner"
                }, !l.isDisabled && m("a", h({
                    ref: n,
                    className: ["fc-col-header-cell-cushion", i.isSticky ? "fc-sticky" : ""].join(" ")
                }, d), r)))
            })
        }
        ,
        t
    }(sr)
      , jo = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = t.dateEnv
              , r = t.theme
              , o = t.viewApi
              , i = t.options
              , a = K(new Date(2592e5), e.dow)
              , s = {
                dow: e.dow,
                isDisabled: !1,
                isFuture: !1,
                isPast: !1,
                isToday: !1,
                isOther: !1
            }
              , l = [Lo].concat(Un(s, r), e.extraClassNames || [])
              , u = n.format(a, e.dayHeaderFormat)
              , c = h(h(h(h({
                date: a
            }, s), {
                view: o
            }), e.extraHookProps), {
                text: u
            });
            return m(Rr, {
                hookProps: c,
                classNames: i.dayHeaderClassNames,
                content: i.dayHeaderContent,
                defaultContent: Wo,
                didMount: i.dayHeaderDidMount,
                willUnmount: i.dayHeaderWillUnmount
            }, function(t, n, r, o) {
                return m("th", h({
                    ref: t,
                    className: l.concat(n).join(" "),
                    colSpan: e.colSpan
                }, e.extraDataAttrs), m("div", {
                    className: "fc-scrollgrid-sync-inner"
                }, m("a", {
                    className: ["fc-col-header-cell-cushion", e.isSticky ? "fc-sticky" : ""].join(" "),
                    ref: r
                }, o)))
            })
        }
        ,
        t
    }(sr)
      , zo = function(e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.initialNowDate = hn(n.options.now, n.dateEnv),
            r.initialNowQueriedMs = (new Date).valueOf(),
            r.state = r.computeTiming().currentState,
            r
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.state;
            return e.children(t.nowDate, t.todayRange)
        }
        ,
        t.prototype.componentDidMount = function() {
            this.setTimeout()
        }
        ,
        t.prototype.componentDidUpdate = function(e) {
            e.unit !== this.props.unit && (this.clearTimeout(),
            this.setTimeout())
        }
        ,
        t.prototype.componentWillUnmount = function() {
            this.clearTimeout()
        }
        ,
        t.prototype.computeTiming = function() {
            var e = this.props
              , t = this.context
              , n = J(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs)
              , r = t.dateEnv.startOf(n, e.unit)
              , o = t.dateEnv.add(r, Re(1, e.unit))
              , i = o.valueOf() - n.valueOf();
            return {
                currentState: {
                    nowDate: r,
                    todayRange: Bo(r)
                },
                nextState: {
                    nowDate: o,
                    todayRange: Bo(o)
                },
                waitMs: i
            }
        }
        ,
        t.prototype.setTimeout = function() {
            var e = this
              , t = this.computeTiming()
              , n = t.nextState
              , r = t.waitMs;
            this.timeoutId = setTimeout(function() {
                e.setState(n, function() {
                    e.setTimeout()
                })
            }, r)
        }
        ,
        t.prototype.clearTimeout = function() {
            this.timeoutId && clearTimeout(this.timeoutId)
        }
        ,
        t.contextType = or,
        t
    }(g);
    function Bo(e) {
        var t = ee(e);
        return {
            start: t,
            end: K(t, 1)
        }
    }
    var Fo = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.createDayHeaderFormatter = Le(Vo),
            t
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this.context
              , t = this.props
              , n = t.dates
              , r = t.dateProfile
              , o = t.datesRepDistinctDays
              , i = t.renderIntro
              , a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, o, n.length);
            return m(zo, {
                unit: "day"
            }, function(e, t) {
                return m("tr", null, i && i(), n.map(function(e) {
                    return o ? m(Uo, {
                        key: e.toISOString(),
                        date: e,
                        dateProfile: r,
                        todayRange: t,
                        colCnt: n.length,
                        dayHeaderFormat: a
                    }) : m(jo, {
                        key: e.getUTCDay(),
                        dow: e.getUTCDay(),
                        dayHeaderFormat: a
                    })
                }))
            })
        }
        ,
        t
    }(sr);
    function Vo(e, t, n) {
        return e || Ao(t, n)
    }
    var Go = function() {
        function e(e, t) {
            for (var n = e.start, r = e.end, o = [], i = [], a = -1; n < r; )
                t.isHiddenDay(n) ? o.push(a + .5) : (a += 1,
                o.push(a),
                i.push(n)),
                n = K(n, 1);
            this.dates = i,
            this.indices = o,
            this.cnt = i.length
        }
        return e.prototype.sliceRange = function(e) {
            var t = this.getDateDayIndex(e.start)
              , n = this.getDateDayIndex(K(e.end, -1))
              , r = Math.max(0, t)
              , o = Math.min(this.cnt - 1, n);
            return (r = Math.ceil(r)) <= (o = Math.floor(o)) ? {
                firstIndex: r,
                lastIndex: o,
                isStart: t === r,
                isEnd: n === o
            } : null
        }
        ,
        e.prototype.getDateDayIndex = function(e) {
            var t = this.indices
              , n = Math.floor($(this.dates[0], e));
            return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
        }
        ,
        e
    }()
      , qo = function() {
        function e(e, t) {
            var n, r, o, i = e.dates;
            if (t) {
                for (r = i[0].getUTCDay(),
                n = 1; n < i.length && i[n].getUTCDay() !== r; n += 1)
                    ;
                o = Math.ceil(i.length / n)
            } else
                o = 1,
                n = i.length;
            this.rowCnt = o,
            this.colCnt = n,
            this.daySeries = e,
            this.cells = this.buildCells(),
            this.headerDates = this.buildHeaderDates()
        }
        return e.prototype.buildCells = function() {
            for (var e = [], t = 0; t < this.rowCnt; t += 1) {
                for (var n = [], r = 0; r < this.colCnt; r += 1)
                    n.push(this.buildCell(t, r));
                e.push(n)
            }
            return e
        }
        ,
        e.prototype.buildCell = function(e, t) {
            var n = this.daySeries.dates[e * this.colCnt + t];
            return {
                key: n.toISOString(),
                date: n
            }
        }
        ,
        e.prototype.buildHeaderDates = function() {
            for (var e = [], t = 0; t < this.colCnt; t += 1)
                e.push(this.cells[0][t].date);
            return e
        }
        ,
        e.prototype.sliceRange = function(e) {
            var t = this.colCnt
              , n = this.daySeries.sliceRange(e)
              , r = [];
            if (n)
                for (var o = n.firstIndex, i = n.lastIndex, a = o; a <= i; ) {
                    var s = Math.floor(a / t)
                      , l = Math.min((s + 1) * t, i + 1);
                    r.push({
                        row: s,
                        firstCol: a % t,
                        lastCol: (l - 1) % t,
                        isStart: n.isStart && a === o,
                        isEnd: n.isEnd && l - 1 === i
                    }),
                    a = l
                }
            return r
        }
        ,
        e
    }()
      , Yo = function() {
        function e() {
            this.sliceBusinessHours = Le(this._sliceBusinessHours),
            this.sliceDateSelection = Le(this._sliceDateSpan),
            this.sliceEventStore = Le(this._sliceEventStore),
            this.sliceEventDrag = Le(this._sliceInteraction),
            this.sliceEventResize = Le(this._sliceInteraction),
            this.forceDayIfListItem = !1
        }
        return e.prototype.sliceProps = function(e, t, n, r) {
            for (var o = [], i = 4; i < arguments.length; i++)
                o[i - 4] = arguments[i];
            var a = e.eventUiBases
              , s = this.sliceEventStore.apply(this, v([e.eventStore, a, t, n], o));
            return {
                dateSelectionSegs: this.sliceDateSelection.apply(this, v([e.dateSelection, a, r], o)),
                businessHourSegs: this.sliceBusinessHours.apply(this, v([e.businessHours, t, n, r], o)),
                fgEventSegs: s.fg,
                bgEventSegs: s.bg,
                eventDrag: this.sliceEventDrag.apply(this, v([e.eventDrag, a, t, n], o)),
                eventResize: this.sliceEventResize.apply(this, v([e.eventResize, a, t, n], o)),
                eventSelection: e.eventSelection
            }
        }
        ,
        e.prototype.sliceNowDate = function(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r];
            return this._sliceDateSpan.apply(this, v([{
                range: {
                    start: e,
                    end: J(e, 1)
                },
                allDay: !1
            }, {}, t], n))
        }
        ,
        e.prototype._sliceBusinessHours = function(e, t, n, r) {
            for (var o = [], i = 4; i < arguments.length; i++)
                o[i - 4] = arguments[i];
            return e ? this._sliceEventStore.apply(this, v([Ee(e, Zo(t, Boolean(n)), r), {}, t, n], o)).bg : []
        }
        ,
        e.prototype._sliceEventStore = function(e, t, n, r) {
            for (var o = [], i = 4; i < arguments.length; i++)
                o[i - 4] = arguments[i];
            if (e) {
                var a = Ut(e, t, Zo(n, Boolean(r)), r);
                return {
                    bg: this.sliceEventRanges(a.bg, o),
                    fg: this.sliceEventRanges(a.fg, o)
                }
            }
            return {
                bg: [],
                fg: []
            }
        }
        ,
        e.prototype._sliceInteraction = function(e, t, n, r) {
            for (var o = [], i = 4; i < arguments.length; i++)
                o[i - 4] = arguments[i];
            if (!e)
                return null;
            var a = Ut(e.mutatedEvents, t, Zo(n, Boolean(r)), r);
            return {
                segs: this.sliceEventRanges(a.fg, o),
                affectedInstances: e.affectedEvents.instances,
                isEvent: e.isEvent
            }
        }
        ,
        e.prototype._sliceDateSpan = function(e, t, n) {
            for (var r = [], o = 3; o < arguments.length; o++)
                r[o - 3] = arguments[o];
            if (!e)
                return [];
            for (var i = nn(e, t, n), a = this.sliceRange.apply(this, v([e.range], r)), s = 0, l = a; s < l.length; s++) {
                var u = l[s];
                u.eventRange = i
            }
            return a
        }
        ,
        e.prototype.sliceEventRanges = function(e, t) {
            for (var n = [], r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                n.push.apply(n, this.sliceEventRange(i, t))
            }
            return n
        }
        ,
        e.prototype.sliceEventRange = function(e, t) {
            var n = e.range;
            this.forceDayIfListItem && "list-item" === e.ui.display && (n = {
                start: n.start,
                end: K(n.start, 1)
            });
            for (var r = this.sliceRange.apply(this, v([n], t)), o = 0, i = r; o < i.length; o++) {
                var a = i[o];
                a.eventRange = e,
                a.isStart = e.isStart && a.isStart,
                a.isEnd = e.isEnd && a.isEnd
            }
            return r
        }
        ,
        e
    }();
    function Zo(e, t) {
        var n = e.activeRange;
        return t ? n : {
            start: J(n.start, e.slotMinTime.milliseconds),
            end: J(n.end, e.slotMaxTime.milliseconds - 864e5)
        }
    }
    var Xo = /^(visible|hidden)$/
      , Ko = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleEl = function(e) {
                t.el = e,
                cr(t.props.elRef, e)
            }
            ,
            t
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = e.liquid
              , n = e.liquidIsAbsolute
              , r = t && n
              , o = ["fc-scroller"];
            return t && (n ? o.push("fc-scroller-liquid-absolute") : o.push("fc-scroller-liquid")),
            m("div", {
                ref: this.handleEl,
                className: o.join(" "),
                style: {
                    overflowX: e.overflowX,
                    overflowY: e.overflowY,
                    left: r && -(e.overcomeLeft || 0) || "",
                    right: r && -(e.overcomeRight || 0) || "",
                    bottom: r && -(e.overcomeBottom || 0) || "",
                    marginLeft: !r && -(e.overcomeLeft || 0) || "",
                    marginRight: !r && -(e.overcomeRight || 0) || "",
                    marginBottom: !r && -(e.overcomeBottom || 0) || "",
                    maxHeight: e.maxHeight || ""
                }
            }, e.children)
        }
        ,
        t.prototype.needsXScrolling = function() {
            if (Xo.test(this.props.overflowX))
                return !1;
            for (var e = this.el, t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) {
                if (n[r].getBoundingClientRect().width > t)
                    return !0
            }
            return !1
        }
        ,
        t.prototype.needsYScrolling = function() {
            if (Xo.test(this.props.overflowY))
                return !1;
            for (var e = this.el, t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), n = e.children, r = 0; r < n.length; r += 1) {
                if (n[r].getBoundingClientRect().height > t)
                    return !0
            }
            return !1
        }
        ,
        t.prototype.getXScrollbarWidth = function() {
            return Xo.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight
        }
        ,
        t.prototype.getYScrollbarWidth = function() {
            return Xo.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth
        }
        ,
        t
    }(sr)
      , Jo = function() {
        function e(e) {
            var t = this;
            this.masterCallback = e,
            this.currentMap = {},
            this.depths = {},
            this.callbackMap = {},
            this.handleValue = function(e, n) {
                var r = t
                  , o = r.depths
                  , i = r.currentMap
                  , a = !1
                  , s = !1;
                null !== e ? (a = n in i,
                i[n] = e,
                o[n] = (o[n] || 0) + 1,
                s = !0) : (o[n] -= 1,
                o[n] || (delete i[n],
                delete t.callbackMap[n],
                a = !0)),
                t.masterCallback && (a && t.masterCallback(null, String(n)),
                s && t.masterCallback(e, String(n)))
            }
        }
        return e.prototype.createRef = function(e) {
            var t = this
              , n = this.callbackMap[e];
            return n || (n = this.callbackMap[e] = function(n) {
                t.handleValue(n, String(e))
            }
            ),
            n
        }
        ,
        e.prototype.collect = function(e, t, n) {
            return Se(this.currentMap, e, t, n)
        }
        ,
        e.prototype.getAll = function() {
            return ve(this.currentMap)
        }
        ,
        e
    }();
    function $o(e) {
        for (var t = 0, n = 0, r = k(e, ".fc-scrollgrid-shrink"); n < r.length; n++) {
            var o = r[n];
            t = Math.max(t, Y(o))
        }
        return Math.ceil(t)
    }
    function Qo(e, t) {
        return e.liquid && t.liquid
    }
    function ei(e, t) {
        return null != t.maxHeight || Qo(e, t)
    }
    function ti(e, t, n) {
        var r = n.expandRows;
        return "function" == typeof t.content ? t.content(n) : m("table", {
            className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
            style: {
                minWidth: n.tableMinWidth,
                width: n.clientWidth,
                height: r ? n.clientHeight : ""
            }
        }, n.tableColGroupNode, m("tbody", {}, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent))
    }
    function ni(e, t) {
        return Ae(e, t, ge)
    }
    function ri(e, t) {
        for (var n = [], r = 0, o = e; r < o.length; r++)
            for (var i = o[r], a = i.span || 1, s = 0; s < a; s += 1)
                n.push(m("col", {
                    style: {
                        width: "shrink" === i.width ? oi(t) : i.width || "",
                        minWidth: i.minWidth || ""
                    }
                }));
        return m.apply(void 0, v(["colgroup", {}], n))
    }
    function oi(e) {
        return null == e ? 4 : e
    }
    function ii(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            if ("shrink" === n[t].width)
                return !0
        }
        return !1
    }
    function ai(e, t) {
        var n = ["fc-scrollgrid", t.theme.getClass("table")];
        return e && n.push("fc-scrollgrid-liquid"),
        n
    }
    function si(e, t) {
        var n = ["fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type, e.className];
        return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"),
        e.isSticky && n.push("fc-scrollgrid-section-sticky"),
        n
    }
    function li(e) {
        return m("div", {
            className: "fc-scrollgrid-sticky-shim",
            style: {
                width: e.clientWidth,
                minWidth: e.tableMinWidth
            }
        })
    }
    function ui(e) {
        var t = e.stickyHeaderDates;
        return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight),
        t
    }
    function ci(e) {
        var t = e.stickyFooterScrollbar;
        return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight),
        t
    }
    var di = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.processCols = Le(function(e) {
                return e
            }, ni),
            t.renderMicroColGroup = Le(ri),
            t.scrollerRefs = new Jo,
            t.scrollerElRefs = new Jo(t._handleScrollerEl.bind(t)),
            t.state = {
                shrinkWidth: null,
                forceYScrollbars: !1,
                scrollerClientWidths: {},
                scrollerClientHeights: {}
            },
            t.handleSizing = function() {
                t.setState(h({
                    shrinkWidth: t.computeShrinkWidth()
                }, t.computeScrollerDims()))
            }
            ,
            t
        }
        return f(t, e),
        t.prototype.render = function() {
            for (var e, t = this.props, n = this.state, r = this.context, o = t.sections || [], i = this.processCols(t.cols), a = this.renderMicroColGroup(i, n.shrinkWidth), s = ai(t.liquid, r), l = o.length, u = 0, c = [], d = [], p = []; u < l && "header" === (e = o[u]).type; )
                c.push(this.renderSection(e, u, a)),
                u += 1;
            for (; u < l && "body" === (e = o[u]).type; )
                d.push(this.renderSection(e, u, a)),
                u += 1;
            for (; u < l && "footer" === (e = o[u]).type; )
                p.push(this.renderSection(e, u, a)),
                u += 1;
            var f = !Hn();
            return m("table", {
                className: s.join(" "),
                style: {
                    height: t.height
                }
            }, Boolean(!f && c.length) && m.apply(void 0, v(["thead", {}], c)), Boolean(!f && d.length) && m.apply(void 0, v(["tbody", {}], d)), Boolean(!f && p.length) && m.apply(void 0, v(["tfoot", {}], p)), f && m.apply(void 0, v(["tbody", {}], c, d, p)))
        }
        ,
        t.prototype.renderSection = function(e, t, n) {
            return "outerContent"in e ? m(S, {
                key: e.key
            }, e.outerContent) : m("tr", {
                key: e.key,
                className: si(e, this.props.liquid).join(" ")
            }, this.renderChunkTd(e, t, n, e.chunk))
        }
        ,
        t.prototype.renderChunkTd = function(e, t, n, r) {
            if ("outerContent"in r)
                return r.outerContent;
            var o = this.props
              , i = this.state
              , a = i.forceYScrollbars
              , s = i.scrollerClientWidths
              , l = i.scrollerClientHeights
              , u = ei(o, e)
              , c = Qo(o, e)
              , d = o.liquid ? a ? "scroll" : u ? "auto" : "hidden" : "visible"
              , p = ti(e, r, {
                tableColGroupNode: n,
                tableMinWidth: "",
                clientWidth: void 0 !== s[t] ? s[t] : null,
                clientHeight: void 0 !== l[t] ? l[t] : null,
                expandRows: e.expandRows,
                syncRowHeights: !1,
                rowSyncHeights: [],
                reportRowHeightChange: function() {}
            });
            return m("td", {
                ref: r.elRef
            }, m("div", {
                className: "fc-scroller-harness" + (c ? " fc-scroller-harness-liquid" : "")
            }, m(Ko, {
                ref: this.scrollerRefs.createRef(t),
                elRef: this.scrollerElRefs.createRef(t),
                overflowY: d,
                overflowX: o.liquid ? "hidden" : "visible",
                maxHeight: e.maxHeight,
                liquid: c,
                liquidIsAbsolute: !0
            }, p)))
        }
        ,
        t.prototype._handleScrollerEl = function(e, t) {
            var n = parseInt(t, 10);
            cr(this.props.sections[n].chunk.scrollerElRef, e)
        }
        ,
        t.prototype.componentDidMount = function() {
            this.handleSizing(),
            this.context.addResizeHandler(this.handleSizing)
        }
        ,
        t.prototype.componentDidUpdate = function() {
            this.handleSizing()
        }
        ,
        t.prototype.componentWillUnmount = function() {
            this.context.removeResizeHandler(this.handleSizing)
        }
        ,
        t.prototype.computeShrinkWidth = function() {
            return ii(this.props.cols) ? $o(this.scrollerElRefs.getAll()) : 0
        }
        ,
        t.prototype.computeScrollerDims = function() {
            for (var e = Gn(), t = this.props.sections.length, n = this.scrollerRefs, r = this.scrollerElRefs, o = !1, i = {}, a = {}, s = 0; s < t; s += 1) {
                var l = n.currentMap[s];
                if (l && l.needsYScrolling()) {
                    o = !0;
                    break
                }
            }
            for (s = 0; s < t; s += 1) {
                var u = r.currentMap[s];
                if (u) {
                    var c = u.parentNode;
                    i[s] = Math.floor(c.getBoundingClientRect().width - (o ? e.y : 0)),
                    a[s] = Math.floor(c.getBoundingClientRect().height)
                }
            }
            return {
                forceYScrollbars: o,
                scrollerClientWidths: i,
                scrollerClientHeights: a
            }
        }
        ,
        t
    }(sr);
    di.addStateEquality({
        scrollerClientWidths: ge,
        scrollerClientHeights: ge
    });
    var pi = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.elRef = b(),
            t
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = t.options
              , r = e.seg
              , o = r.eventRange
              , i = o.ui
              , a = {
                event: new gn(t,o.def,o.instance),
                view: t.viewApi,
                timeText: e.timeText,
                textColor: i.textColor,
                backgroundColor: i.backgroundColor,
                borderColor: i.borderColor,
                isDraggable: !e.disableDragging && qt(r, t),
                isStartResizable: !e.disableResizing && Yt(r, t),
                isEndResizable: !e.disableResizing && Zt(r),
                isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
                isStart: Boolean(r.isStart),
                isEnd: Boolean(r.isEnd),
                isPast: Boolean(e.isPast),
                isFuture: Boolean(e.isFuture),
                isToday: Boolean(e.isToday),
                isSelected: Boolean(e.isSelected),
                isDragging: Boolean(e.isDragging),
                isResizing: Boolean(e.isResizing)
            }
              , s = function(e) {
                var t = ["fc-event"];
                return e.isMirror && t.push("fc-event-mirror"),
                e.isDraggable && t.push("fc-event-draggable"),
                (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"),
                e.isDragging && t.push("fc-event-dragging"),
                e.isResizing && t.push("fc-event-resizing"),
                e.isSelected && t.push("fc-event-selected"),
                e.isStart && t.push("fc-event-start"),
                e.isEnd && t.push("fc-event-end"),
                e.isPast && t.push("fc-event-past"),
                e.isToday && t.push("fc-event-today"),
                e.isFuture && t.push("fc-event-future"),
                t
            }(a).concat(i.classNames);
            return m(Rr, {
                hookProps: a,
                classNames: n.eventClassNames,
                content: n.eventContent,
                defaultContent: e.defaultContent,
                didMount: n.eventDidMount,
                willUnmount: n.eventWillUnmount,
                elRef: this.elRef
            }, function(t, n, r, o) {
                return e.children(t, s.concat(n), r, o, a)
            })
        }
        ,
        t.prototype.componentDidMount = function() {
            jt(this.elRef.current, this.props.seg)
        }
        ,
        t.prototype.componentDidUpdate = function(e) {
            var t = this.props.seg;
            t !== e.seg && jt(this.elRef.current, t)
        }
        ,
        t
    }(sr)
      , fi = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = e.seg
              , r = t.options.eventTimeFormat || e.defaultTimeFormat
              , o = Xt(n, r, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
            return m(pi, {
                seg: n,
                timeText: o,
                disableDragging: e.disableDragging,
                disableResizing: e.disableResizing,
                defaultContent: e.defaultContent || hi,
                isDragging: e.isDragging,
                isResizing: e.isResizing,
                isDateSelecting: e.isDateSelecting,
                isSelected: e.isSelected,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday
            }, function(t, r, o, i, a) {
                return m("a", h({
                    className: e.extraClassNames.concat(r).join(" "),
                    style: {
                        borderColor: a.borderColor,
                        backgroundColor: a.backgroundColor
                    },
                    ref: t
                }, function(e) {
                    var t = e.eventRange.def.url;
                    return t ? {
                        href: t
                    } : {}
                }(n)), m("div", {
                    className: "fc-event-main",
                    ref: o,
                    style: {
                        color: a.textColor
                    }
                }, i), a.isStartResizable && m("div", {
                    className: "fc-event-resizer fc-event-resizer-start"
                }), a.isEndResizable && m("div", {
                    className: "fc-event-resizer fc-event-resizer-end"
                }))
            })
        }
        ,
        t
    }(sr);
    function hi(e) {
        return m("div", {
            className: "fc-event-main-frame"
        }, e.timeText && m("div", {
            className: "fc-event-time"
        }, e.timeText), m("div", {
            className: "fc-event-title-container"
        }, m("div", {
            className: "fc-event-title fc-sticky"
        }, e.event.title || m(S, null, " "))))
    }
    var vi = function(e) {
        return m(or.Consumer, null, function(t) {
            var n = t.options
              , r = {
                isAxis: e.isAxis,
                date: t.dateEnv.toDate(e.date),
                view: t.viewApi
            };
            return m(Rr, {
                hookProps: r,
                classNames: n.nowIndicatorClassNames,
                content: n.nowIndicatorContent,
                didMount: n.nowIndicatorDidMount,
                willUnmount: n.nowIndicatorWillUnmount
            }, e.children)
        })
    }
      , gi = et({
        day: "numeric"
    })
      , mi = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = t.options
              , r = yi({
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                showDayNumber: e.showDayNumber,
                extraProps: e.extraHookProps,
                viewApi: t.viewApi,
                dateEnv: t.dateEnv
            });
            return m(xr, {
                hookProps: r,
                content: n.dayCellContent,
                defaultContent: e.defaultContent
            }, e.children)
        }
        ,
        t
    }(sr);
    function yi(e) {
        var t = e.date
          , n = e.dateEnv
          , r = Wn(t, e.todayRange, null, e.dateProfile);
        return h(h(h({
            date: n.toDate(t),
            view: e.viewApi
        }, r), {
            dayNumberText: e.showDayNumber ? n.format(t, gi) : ""
        }), e.extraProps)
    }
    var bi = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.refineHookProps = We(yi),
            t.normalizeClassNames = _r(),
            t
        }
        return f(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = t.options
              , r = this.refineHookProps({
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                showDayNumber: e.showDayNumber,
                extraProps: e.extraHookProps,
                viewApi: t.viewApi,
                dateEnv: t.dateEnv
            })
              , o = Un(r, t.theme).concat(r.isDisabled ? [] : this.normalizeClassNames(n.dayCellClassNames, r))
              , i = r.isDisabled ? {} : {
                "data-date": He(e.date)
            };
            return m(Mr, {
                hookProps: r,
                didMount: n.dayCellDidMount,
                willUnmount: n.dayCellWillUnmount,
                elRef: e.elRef
            }, function(t) {
                return e.children(t, o, i, r.isDisabled)
            })
        }
        ,
        t
    }(sr);
    function Si(e) {
        return m("div", {
            className: "fc-" + e
        })
    }
    var Ei = function(e) {
        return m(pi, {
            defaultContent: wi,
            seg: e.seg,
            timeText: "",
            disableDragging: !0,
            disableResizing: !0,
            isDragging: !1,
            isResizing: !1,
            isDateSelecting: !1,
            isSelected: !1,
            isPast: e.isPast,
            isFuture: e.isFuture,
            isToday: e.isToday
        }, function(e, t, n, r, o) {
            return m("div", {
                ref: e,
                className: ["fc-bg-event"].concat(t).join(" "),
                style: {
                    backgroundColor: o.backgroundColor
                }
            }, r)
        })
    };
    function wi(e) {
        return e.event.title && m("div", {
            className: "fc-event-title"
        }, e.event.title)
    }
    var Di = function(e) {
        return m(or.Consumer, null, function(t) {
            var n = t.dateEnv
              , r = t.options
              , o = e.date
              , i = r.weekNumberFormat || e.defaultFormat
              , a = n.computeWeekNumber(o)
              , s = n.format(o, i);
            return m(Rr, {
                hookProps: {
                    num: a,
                    text: s,
                    date: o
                },
                classNames: r.weekNumberClassNames,
                content: r.weekNumberContent,
                defaultContent: Ci,
                didMount: r.weekNumberDidMount,
                willUnmount: r.weekNumberWillUnmount
            }, e.children)
        })
    };
    function Ci(e) {
        return e.text
    }
    var Ri = function(e) {
        function t(t, n) {
            void 0 === n && (n = {});
            var r = e.call(this) || this;
            return r.isRendering = !1,
            r.isRendered = !1,
            r.currentClassNames = [],
            r.customContentRenderId = 0,
            r.handleAction = function(e) {
                switch (e.type) {
                case "SET_EVENT_DRAG":
                case "SET_EVENT_RESIZE":
                    r.renderRunner.tryDrain()
                }
            }
            ,
            r.handleData = function(e) {
                r.currentData = e,
                r.renderRunner.request(e.calendarOptions.rerenderDelay)
            }
            ,
            r.handleRenderRequest = function() {
                if (r.isRendering) {
                    r.isRendered = !0;
                    var e = r.currentData;
                    y(m(Oo, {
                        options: e.calendarOptions,
                        theme: e.theme,
                        emitter: e.emitter
                    }, function(t, n, o, i) {
                        return r.setClassNames(t),
                        r.setHeight(n),
                        m(Tr.Provider, {
                            value: r.customContentRenderId
                        }, m(Io, l({
                            isHeightAuto: o,
                            forPrint: i
                        }, e)))
                    }), r.el)
                } else
                    r.isRendered && (r.isRendered = !1,
                    D(r.el),
                    r.setClassNames([]),
                    r.setHeight(""));
                w()
            }
            ,
            r.el = t,
            r.renderRunner = new ao(r.handleRenderRequest),
            new uo({
                optionOverrides: n,
                calendarApi: r,
                onAction: r.handleAction,
                onData: r.handleData
            }),
            r
        }
        return s(t, e),
        Object.defineProperty(t.prototype, "view", {
            get: function() {
                return this.currentData.viewApi
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.render = function() {
            var e = this.isRendering;
            e ? this.customContentRenderId += 1 : this.isRendering = !0,
            this.renderRunner.request(),
            e && this.updateSize()
        }
        ,
        t.prototype.destroy = function() {
            this.isRendering && (this.isRendering = !1,
            this.renderRunner.request())
        }
        ,
        t.prototype.updateSize = function() {
            e.prototype.updateSize.call(this),
            w()
        }
        ,
        t.prototype.batchRendering = function(e) {
            this.renderRunner.pause("batchRendering"),
            e(),
            this.renderRunner.resume("batchRendering")
        }
        ,
        t.prototype.pauseRendering = function() {
            this.renderRunner.pause("pauseRendering")
        }
        ,
        t.prototype.resumeRendering = function() {
            this.renderRunner.resume("pauseRendering", !0)
        }
        ,
        t.prototype.resetOptions = function(e, t) {
            this.currentDataManager.resetOptions(e, t)
        }
        ,
        t.prototype.setClassNames = function(e) {
            if (!Ae(e, this.currentClassNames)) {
                for (var t = this.el.classList, n = 0, r = this.currentClassNames; n < r.length; n++) {
                    var o = r[n];
                    t.remove(o)
                }
                for (var i = 0, a = e; i < a.length; i++) {
                    o = a[i];
                    t.add(o)
                }
                this.currentClassNames = e
            }
        }
        ,
        t.prototype.setHeight = function(e) {
            P(this.el, "height", e)
        }
        ,
        t
    }(vn)
      , Ti = (n(15),
    function(e, t) {
        return (Ti = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    }
    );
    /*!
FullCalendar v5.3.2
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/
    function xi(e, t) {
        function n() {
            this.constructor = e
        }
        Ti(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var ki = function() {
        return (ki = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    Object.create;
    /*!
FullCalendar v5.3.2
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/
    var Mi = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.headerElRef = b(),
            t
        }
        return xi(t, e),
        t.prototype.renderSimpleLayout = function(e, t) {
            var n = this.props
              , r = this.context
              , o = []
              , i = ui(r.options);
            return e && o.push({
                type: "header",
                key: "header",
                isSticky: i,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: "fc-col-header",
                    rowContent: e
                }
            }),
            o.push({
                type: "body",
                key: "body",
                liquid: !0,
                chunk: {
                    content: t
                }
            }),
            m(Nr, {
                viewSpec: r.viewSpec
            }, function(e, t) {
                return m("div", {
                    ref: e,
                    className: ["fc-daygrid"].concat(t).join(" ")
                }, m(di, {
                    liquid: !n.isHeightAuto && !n.forPrint,
                    cols: [],
                    sections: o
                }))
            })
        }
        ,
        t.prototype.renderHScrollLayout = function(e, t, n, r) {
            var o = this.context.pluginHooks.scrollGridImpl;
            if (!o)
                throw new Error("No ScrollGrid implementation");
            var i = this.props
              , a = this.context
              , s = !i.forPrint && ui(a.options)
              , l = !i.forPrint && ci(a.options)
              , u = [];
            return e && u.push({
                type: "header",
                key: "header",
                isSticky: s,
                chunks: [{
                    key: "main",
                    elRef: this.headerElRef,
                    tableClassName: "fc-col-header",
                    rowContent: e
                }]
            }),
            u.push({
                type: "body",
                key: "body",
                liquid: !0,
                chunks: [{
                    key: "main",
                    content: t
                }]
            }),
            l && u.push({
                type: "footer",
                key: "footer",
                isSticky: !0,
                chunks: [{
                    key: "main",
                    content: li
                }]
            }),
            m(Nr, {
                viewSpec: a.viewSpec
            }, function(e, t) {
                return m("div", {
                    ref: e,
                    className: ["fc-daygrid"].concat(t).join(" ")
                }, m(o, {
                    liquid: !i.isHeightAuto && !i.forPrint,
                    colGroups: [{
                        cols: [{
                            span: n,
                            minWidth: r
                        }]
                    }],
                    sections: u
                }))
            })
        }
        ,
        t
    }(Er);
    function _i(e, t) {
        for (var n = [], r = 0; r < t; r += 1)
            n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.row].push(a)
        }
        return n
    }
    function Pi(e, t) {
        for (var n = [], r = 0; r < t; r += 1)
            n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.firstCol].push(a)
        }
        return n
    }
    function Ii(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1)
                n[a] = {
                    affectedInstances: e.affectedInstances,
                    isEvent: e.isEvent,
                    segs: []
                };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.row].segs.push(i)
            }
        } else
            for (var a = 0; a < t; a += 1)
                n[a] = null;
        return n
    }
    var Ni = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return xi(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context.options.navLinks ? {
                "data-navlink": zn(e.date),
                tabIndex: 0
            } : {};
            return m(mi, {
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                showDayNumber: e.showDayNumber,
                extraHookProps: e.extraHookProps,
                defaultContent: Hi
            }, function(n, r) {
                return (r || e.forceDayTop) && m("div", {
                    className: "fc-daygrid-day-top",
                    ref: n
                }, m("a", ki({
                    className: "fc-daygrid-day-number"
                }, t), r || m(S, null, " ")))
            })
        }
        ,
        t
    }(sr);
    function Hi(e) {
        return e.dayNumberText
    }
    var Oi = et({
        week: "narrow"
    })
      , Ai = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleRootEl = function(e) {
                t.rootEl = e,
                cr(t.props.elRef, e)
            }
            ,
            t.handleMoreLinkClick = function(e) {
                var n = t.props;
                if (n.onMoreClick) {
                    var r = n.segsByEachCol
                      , o = r.filter(function(e) {
                        return n.segIsHidden[e.eventRange.instance.instanceId]
                    });
                    n.onMoreClick({
                        date: n.date,
                        allSegs: r,
                        hiddenSegs: o,
                        moreCnt: n.moreCnt,
                        dayEl: t.rootEl,
                        ev: e
                    })
                }
            }
            ,
            t
        }
        return xi(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.context
              , n = t.options
              , r = t.viewApi
              , o = this.props
              , i = o.date
              , a = o.dateProfile
              , s = {
                num: o.moreCnt,
                text: o.buildMoreLinkText(o.moreCnt),
                view: r
            }
              , l = n.navLinks ? {
                "data-navlink": zn(i, "week"),
                tabIndex: 0
            } : {};
            return m(bi, {
                date: i,
                dateProfile: a,
                todayRange: o.todayRange,
                showDayNumber: o.showDayNumber,
                extraHookProps: o.extraHookProps,
                elRef: this.handleRootEl
            }, function(t, r, u, c) {
                return m("td", ki({
                    ref: t,
                    className: ["fc-daygrid-day"].concat(r, o.extraClassNames || []).join(" ")
                }, u, o.extraDataAttrs), m("div", {
                    className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                    ref: o.innerElRef
                }, o.showWeekNumber && m(Di, {
                    date: i,
                    defaultFormat: Oi
                }, function(e, t, n, r) {
                    return m("a", ki({
                        ref: e,
                        className: ["fc-daygrid-week-number"].concat(t).join(" ")
                    }, l), r)
                }), !c && m(Ni, {
                    date: i,
                    dateProfile: a,
                    showDayNumber: o.showDayNumber,
                    forceDayTop: o.forceDayTop,
                    todayRange: o.todayRange,
                    extraHookProps: o.extraHookProps
                }), m("div", {
                    className: "fc-daygrid-day-events",
                    ref: o.fgContentElRef,
                    style: {
                        paddingBottom: o.fgPaddingBottom
                    }
                }, o.fgContent, Boolean(o.moreCnt) && m("div", {
                    className: "fc-daygrid-day-bottom",
                    style: {
                        marginTop: o.moreMarginTop
                    }
                }, m(Rr, {
                    hookProps: s,
                    classNames: n.moreLinkClassNames,
                    content: n.moreLinkContent,
                    defaultContent: Li,
                    didMount: n.moreLinkDidMount,
                    willUnmount: n.moreLinkWillUnmount
                }, function(t, n, r, o) {
                    return m("a", {
                        ref: t,
                        className: ["fc-daygrid-more-link"].concat(n).join(" "),
                        onClick: e.handleMoreLinkClick
                    }, o)
                }))), m("div", {
                    className: "fc-daygrid-day-bg"
                }, o.bgContent)))
            })
        }
        ,
        t
    }(Er);
    function Li(e) {
        return e.text
    }
    var Wi = et({
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: !0,
        meridiem: "narrow"
    });
    function Ui(e) {
        var t = e.eventRange.ui.display;
        return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd
    }
    var ji = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return xi(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = t.options.eventTimeFormat || Wi
              , r = Xt(e.seg, n, t, !0, e.defaultDisplayEventEnd);
            return m(pi, {
                seg: e.seg,
                timeText: r,
                defaultContent: zi,
                isDragging: e.isDragging,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: e.isSelected,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday
            }, function(t, n, r, o) {
                return m("a", ki({
                    className: ["fc-daygrid-event", "fc-daygrid-dot-event"].concat(n).join(" "),
                    ref: t
                }, (i = e.seg,
                (a = i.eventRange.def.url) ? {
                    href: a
                } : {})), o);
                var i, a
            })
        }
        ,
        t
    }(sr);
    function zi(e) {
        return m(S, null, m("div", {
            className: "fc-daygrid-event-dot",
            style: {
                borderColor: e.borderColor || e.backgroundColor
            }
        }), e.timeText && m("div", {
            className: "fc-event-time"
        }, e.timeText), m("div", {
            className: "fc-event-title"
        }, e.event.title || m(S, null, " ")))
    }
    var Bi = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return xi(t, e),
        t.prototype.render = function() {
            var e = this.props;
            return m(fi, ki({}, e, {
                extraClassNames: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
                defaultTimeFormat: Wi,
                defaultDisplayEventEnd: e.defaultDisplayEventEnd,
                disableResizing: !e.seg.eventRange.def.allDay
            }))
        }
        ,
        t
    }(sr);
    function Fi(e, t, n, r, o, i, a, s) {
        for (var l = [], u = [], c = {}, d = {}, p = {}, f = {}, h = {}, v = 0; v < a; v += 1)
            l.push([]),
            u.push(0);
        for (var g = 0, m = t = Vt(t, s); g < m.length; g++) {
            R(D = m[g], o[D.eventRange.instance.instanceId + ":" + D.firstCol] || 0)
        }
        !0 === n || !0 === r ? function(e, t, n, r) {
            Gi(e, t, n, !0, function(e) {
                return e.bottom <= r
            })
        }(u, c, l, i) : "number" == typeof n ? function(e, t, n, r) {
            Gi(e, t, n, !1, function(e, t) {
                return t < r
            })
        }(u, c, l, n) : "number" == typeof r && function(e, t, n, r) {
            Gi(e, t, n, !0, function(e, t) {
                return t < r
            })
        }(u, c, l, r);
        for (var y = 0; y < a; y += 1) {
            for (var b = 0, S = 0, E = 0, w = l[y]; E < w.length; E++) {
                var D, C = w[E];
                c[(D = C.seg).eventRange.instance.instanceId] || (d[D.eventRange.instance.instanceId] = C.top,
                D.firstCol === D.lastCol && D.isStart && D.isEnd ? (p[D.eventRange.instance.instanceId] = C.top - b,
                S = 0,
                b = C.bottom) : S = C.bottom - b)
            }
            S && (u[y] ? f[y] = S : h[y] = S)
        }
        function R(e, t) {
            if (!T(e, t, 0))
                for (var n = e.firstCol; n <= e.lastCol; n += 1)
                    for (var r = 0, o = l[n]; r < o.length; r++) {
                        if (T(e, t, o[r].bottom))
                            return
                    }
        }
        function T(e, t, n) {
            if (function(e, t, n) {
                for (var r = e.firstCol; r <= e.lastCol; r += 1)
                    for (var o = 0, i = l[r]; o < i.length; o++) {
                        var a = i[o];
                        if (n < a.bottom && n + t > a.top)
                            return !1
                    }
                return !0
            }(e, t, n)) {
                for (var r = e.firstCol; r <= e.lastCol; r += 1) {
                    for (var o = l[r], i = 0; i < o.length && n >= o[i].top; )
                        i += 1;
                    o.splice(i, 0, {
                        seg: e,
                        top: n,
                        bottom: n + t
                    })
                }
                return !0
            }
            return !1
        }
        for (var x in o)
            o[x] || (c[x.split(":")[0]] = !0);
        return {
            segsByFirstCol: l.map(Vi),
            segsByEachCol: l.map(function(t, n) {
                var r = function(e) {
                    for (var t = [], n = 0, r = e; n < r.length; n++) {
                        var o = r[n];
                        t.push(o.seg)
                    }
                    return t
                }(t);
                return r = function(e, t, n) {
                    for (var r = t, o = K(r, 1), i = {
                        start: r,
                        end: o
                    }, a = [], s = 0, l = e; s < l.length; s++) {
                        var u = l[s]
                          , c = u.eventRange
                          , d = c.range
                          , p = Ht(d, i);
                        p && a.push(ki(ki({}, u), {
                            firstCol: n,
                            lastCol: n,
                            eventRange: {
                                def: c.def,
                                ui: ki(ki({}, c.ui), {
                                    durationEditable: !1
                                }),
                                instance: c.instance,
                                range: p
                            },
                            isStart: u.isStart && p.start.valueOf() === d.start.valueOf(),
                            isEnd: u.isEnd && p.end.valueOf() === d.end.valueOf()
                        }))
                    }
                    return a
                }(r, e[n].date, n)
            }),
            segIsHidden: c,
            segTops: d,
            segMarginTops: p,
            moreCnts: u,
            moreTops: f,
            paddingBottoms: h
        }
    }
    function Vi(e, t) {
        for (var n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            i.seg.firstCol === t && n.push(i.seg)
        }
        return n
    }
    function Gi(e, t, n, r, o) {
        for (var i = e.length, a = {}, s = [], l = 0; l < i; l += 1)
            s.push([]);
        for (l = 0; l < i; l += 1)
            for (var u = 0, c = 0, d = n[l]; c < d.length; c++) {
                var p = d[c];
                o(p, u) ? f(p) : h(p, u, r),
                p.top !== p.bottom && (u += 1)
            }
        function f(e) {
            var t = e.seg
              , n = t.eventRange.instance.instanceId;
            if (!a[n]) {
                a[n] = !0;
                for (var r = t.firstCol; r <= t.lastCol; r += 1)
                    s[r].push(e)
            }
        }
        function h(n, r, o) {
            var i = n.seg
              , a = i.eventRange.instance.instanceId;
            if (!t[a]) {
                t[a] = !0;
                for (var l = i.firstCol; l <= i.lastCol; l += 1) {
                    e[l] += 1;
                    var u = e[l];
                    if (o && 1 === u && r > 0)
                        for (var c = r - 1; s[l].length > c; )
                            h(s[l].pop(), s[l].length, !1)
                }
            }
        }
    }
    var qi = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.cellElRefs = new Jo,
            t.frameElRefs = new Jo,
            t.fgElRefs = new Jo,
            t.segHarnessRefs = new Jo,
            t.rootElRef = b(),
            t.state = {
                framePositions: null,
                maxContentHeight: null,
                segHeights: {}
            },
            t
        }
        return xi(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.state
              , r = this.context
              , o = t.cells.length
              , i = Pi(t.businessHourSegs, o)
              , a = Pi(t.bgEventSegs, o)
              , s = Pi(this.getHighlightSegs(), o)
              , l = Pi(this.getMirrorSegs(), o)
              , u = Fi(t.cells, t.fgEventSegs, t.dayMaxEvents, t.dayMaxEventRows, n.segHeights, n.maxContentHeight, o, r.options.eventOrder)
              , c = u.paddingBottoms
              , d = u.segsByFirstCol
              , p = u.segsByEachCol
              , f = u.segIsHidden
              , h = u.segTops
              , v = u.segMarginTops
              , g = u.moreCnts
              , y = u.moreTops
              , b = t.eventDrag && t.eventDrag.affectedInstances || t.eventResize && t.eventResize.affectedInstances || {};
            return m("tr", {
                ref: this.rootElRef
            }, t.renderIntro && t.renderIntro(), t.cells.map(function(n, r) {
                var o = e.renderFgSegs(d[r], f, h, v, b, t.todayRange)
                  , u = e.renderFgSegs(l[r], {}, h, {}, {}, t.todayRange, Boolean(t.eventDrag), Boolean(t.eventResize), !1);
                return m(Ai, {
                    key: n.key,
                    elRef: e.cellElRefs.createRef(n.key),
                    innerElRef: e.frameElRefs.createRef(n.key),
                    dateProfile: t.dateProfile,
                    date: n.date,
                    showDayNumber: t.showDayNumbers,
                    showWeekNumber: t.showWeekNumbers && 0 === r,
                    forceDayTop: t.showWeekNumbers,
                    todayRange: t.todayRange,
                    extraHookProps: n.extraHookProps,
                    extraDataAttrs: n.extraDataAttrs,
                    extraClassNames: n.extraClassNames,
                    moreCnt: g[r],
                    buildMoreLinkText: t.buildMoreLinkText,
                    onMoreClick: t.onMoreClick,
                    segIsHidden: f,
                    moreMarginTop: y[r],
                    segsByEachCol: p[r],
                    fgPaddingBottom: c[r],
                    fgContentElRef: e.fgElRefs.createRef(n.key),
                    fgContent: m(S, null, m(S, null, o), m(S, null, u)),
                    bgContent: m(S, null, e.renderFillSegs(s[r], "highlight"), e.renderFillSegs(i[r], "non-business"), e.renderFillSegs(a[r], "bg-event"))
                })
            }))
        }
        ,
        t.prototype.componentDidMount = function() {
            this.updateSizing(!0)
        }
        ,
        t.prototype.componentDidUpdate = function(e, t) {
            var n = this.props;
            this.updateSizing(!ge(e, n))
        }
        ,
        t.prototype.getHighlightSegs = function() {
            var e = this.props;
            return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs
        }
        ,
        t.prototype.getMirrorSegs = function() {
            var e = this.props;
            return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : []
        }
        ,
        t.prototype.renderFgSegs = function(e, t, n, r, o, i, a, s, l) {
            var u = this.context
              , c = this.props.eventSelection
              , d = this.state.framePositions
              , p = 1 === this.props.cells.length
              , f = [];
            if (d)
                for (var h = 0, v = e; h < v.length; h++) {
                    var g = v[h]
                      , y = g.eventRange.instance.instanceId
                      , b = a || s || l
                      , S = o[y]
                      , E = t[y] || S
                      , w = t[y] || b || g.firstCol !== g.lastCol || !g.isStart || !g.isEnd
                      , D = void 0
                      , C = void 0
                      , R = void 0
                      , T = void 0;
                    w ? (C = n[y],
                    u.isRtl ? (T = 0,
                    R = d.lefts[g.lastCol] - d.lefts[g.firstCol]) : (R = 0,
                    T = d.rights[g.firstCol] - d.rights[g.lastCol])) : D = r[y],
                    f.push(m("div", {
                        className: "fc-daygrid-event-harness" + (w ? " fc-daygrid-event-harness-abs" : ""),
                        key: y,
                        ref: b ? null : this.segHarnessRefs.createRef(y + ":" + g.firstCol),
                        style: {
                            visibility: E ? "hidden" : "",
                            marginTop: D || "",
                            top: C || "",
                            left: R || "",
                            right: T || ""
                        }
                    }, Ui(g) ? m(ji, ki({
                        seg: g,
                        isDragging: a,
                        isSelected: y === c,
                        defaultDisplayEventEnd: p
                    }, Kt(g, i))) : m(Bi, ki({
                        seg: g,
                        isDragging: a,
                        isResizing: s,
                        isDateSelecting: l,
                        isSelected: y === c,
                        defaultDisplayEventEnd: p
                    }, Kt(g, i)))))
                }
            return f
        }
        ,
        t.prototype.renderFillSegs = function(e, t) {
            var n = this.context.isRtl
              , r = this.props.todayRange
              , o = this.state.framePositions
              , i = [];
            if (o)
                for (var a = 0, s = e; a < s.length; a++) {
                    var l = s[a]
                      , u = n ? {
                        right: 0,
                        left: o.lefts[l.lastCol] - o.lefts[l.firstCol]
                    } : {
                        left: 0,
                        right: o.rights[l.firstCol] - o.rights[l.lastCol]
                    };
                    i.push(m("div", {
                        key: Jt(l.eventRange),
                        className: "fc-daygrid-bg-harness",
                        style: u
                    }, "bg-event" === t ? m(Ei, ki({
                        seg: l
                    }, Kt(l, r))) : Si(t)))
                }
            return m.apply(void 0, function() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                    e += arguments[t].length;
                var r = Array(e)
                  , o = 0;
                for (t = 0; t < n; t++)
                    for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
                    o++)
                        r[o] = i[a];
                return r
            }([S, {}], i))
        }
        ,
        t.prototype.updateSizing = function(e) {
            var t = this.props
              , n = this.frameElRefs;
            if (null !== t.clientWidth) {
                if (e) {
                    var r = t.cells.map(function(e) {
                        return n.currentMap[e.key]
                    });
                    if (r.length) {
                        var o = this.rootElRef.current;
                        this.setState({
                            framePositions: new $n(o,r,!0,!1)
                        })
                    }
                }
                var i = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
                this.setState({
                    segHeights: this.computeSegHeights(),
                    maxContentHeight: i ? this.computeMaxContentHeight() : null
                })
            }
        }
        ,
        t.prototype.computeSegHeights = function() {
            return fe(this.segHarnessRefs.currentMap, function(e) {
                return e.getBoundingClientRect().height
            })
        }
        ,
        t.prototype.computeMaxContentHeight = function() {
            var e = this.props.cells[0].key
              , t = this.cellElRefs.currentMap[e]
              , n = this.fgElRefs.currentMap[e];
            return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top
        }
        ,
        t.prototype.getCellEls = function() {
            var e = this.cellElRefs.currentMap;
            return this.props.cells.map(function(t) {
                return e[t.key]
            })
        }
        ,
        t
    }(Er);
    qi.addStateEquality({
        segHeights: ge
    });
    var Yi = 10
      , Zi = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.repositioner = new ao(t.updateSize.bind(t)),
            t.handleRootEl = function(e) {
                t.rootEl = e,
                t.props.elRef && cr(t.props.elRef, e)
            }
            ,
            t.handleDocumentMousedown = function(e) {
                var n = t.props.onClose;
                n && !t.rootEl.contains(e.target) && n()
            }
            ,
            t.handleDocumentScroll = function() {
                t.repositioner.request(Yi)
            }
            ,
            t.handleCloseClick = function() {
                var e = t.props.onClose;
                e && e()
            }
            ,
            t
        }
        return xi(t, e),
        t.prototype.render = function() {
            var e = this.context.theme
              , t = this.props
              , n = ["fc-popover", e.getClass("popover")].concat(t.extraClassNames || []);
            return m("div", ki({
                className: n.join(" ")
            }, t.extraAttrs, {
                ref: this.handleRootEl
            }), m("div", {
                className: "fc-popover-header " + e.getClass("popoverHeader")
            }, m("span", {
                className: "fc-popover-title"
            }, t.title), m("span", {
                className: "fc-popover-close " + e.getIconClass("close"),
                onClick: this.handleCloseClick
            })), m("div", {
                className: "fc-popover-body " + e.getClass("popoverContent")
            }, t.children))
        }
        ,
        t.prototype.componentDidMount = function() {
            document.addEventListener("mousedown", this.handleDocumentMousedown),
            document.addEventListener("scroll", this.handleDocumentScroll),
            this.updateSize()
        }
        ,
        t.prototype.componentWillUnmount = function() {
            document.removeEventListener("mousedown", this.handleDocumentMousedown),
            document.removeEventListener("scroll", this.handleDocumentScroll)
        }
        ,
        t.prototype.updateSize = function() {
            var e = this.props
              , t = e.alignmentEl
              , n = e.topAlignmentEl
              , r = this.rootEl;
            if (r) {
                var o, i = r.getBoundingClientRect(), a = t.getBoundingClientRect(), s = n ? n.getBoundingClientRect().top : a.top;
                s = Math.min(s, window.innerHeight - i.height - 10),
                s = Math.max(s, 10),
                o = this.context.isRtl ? a.right - i.width : a.left,
                o = Math.min(o, window.innerWidth - i.width - 10),
                _(r, {
                    top: s,
                    left: o = Math.max(o, 10)
                })
            }
        }
        ,
        t
    }(sr)
      , Xi = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handlePopoverEl = function(e) {
                t.popoverEl = e,
                e ? t.context.registerInteractiveComponent(t, {
                    el: e,
                    useEventCenter: !1
                }) : t.context.unregisterInteractiveComponent(t)
            }
            ,
            t
        }
        return xi(t, e),
        t.prototype.render = function() {
            var e = this.context
              , t = e.options
              , n = e.dateEnv
              , r = this.props
              , o = r.date
              , i = r.hiddenInstances
              , a = r.todayRange
              , s = r.dateProfile
              , l = r.selectedInstanceId
              , u = n.format(o, t.dayPopoverFormat);
            return m(bi, {
                date: o,
                dateProfile: s,
                todayRange: a,
                elRef: this.handlePopoverEl
            }, function(e, t, n) {
                return m(Zi, {
                    elRef: e,
                    title: u,
                    extraClassNames: ["fc-more-popover"].concat(t),
                    extraAttrs: n,
                    onClose: r.onCloseClick,
                    alignmentEl: r.alignmentEl,
                    topAlignmentEl: r.topAlignmentEl
                }, m(mi, {
                    date: o,
                    dateProfile: s,
                    todayRange: a
                }, function(e, t) {
                    return t && m("div", {
                        className: "fc-more-popover-misc",
                        ref: e
                    }, t)
                }), r.segs.map(function(e) {
                    var t = e.eventRange.instance.instanceId;
                    return m("div", {
                        className: "fc-daygrid-event-harness",
                        key: t,
                        style: {
                            visibility: i[t] ? "hidden" : ""
                        }
                    }, Ui(e) ? m(ji, ki({
                        seg: e,
                        isDragging: !1,
                        isSelected: t === l,
                        defaultDisplayEventEnd: !1
                    }, Kt(e, a))) : m(Bi, ki({
                        seg: e,
                        isDragging: !1,
                        isResizing: !1,
                        isDateSelecting: !1,
                        isSelected: t === l,
                        defaultDisplayEventEnd: !1
                    }, Kt(e, a))))
                }))
            })
        }
        ,
        t.prototype.queryHit = function(e, t, n, r) {
            var o = this.props.date;
            return e < n && t < r ? {
                component: this,
                dateSpan: {
                    allDay: !0,
                    range: {
                        start: o,
                        end: K(o, 1)
                    }
                },
                dayEl: this.popoverEl,
                rect: {
                    left: 0,
                    top: 0,
                    right: n,
                    bottom: r
                },
                layer: 1
            } : null
        }
        ,
        t.prototype.isPopover = function() {
            return !0
        }
        ,
        t
    }(Er)
      , Ki = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.splitBusinessHourSegs = Le(_i),
            t.splitBgEventSegs = Le(_i),
            t.splitFgEventSegs = Le(_i),
            t.splitDateSelectionSegs = Le(_i),
            t.splitEventDrag = Le(Ii),
            t.splitEventResize = Le(Ii),
            t.buildBuildMoreLinkText = Le(Ji),
            t.rowRefs = new Jo,
            t.state = {
                morePopoverState: null
            },
            t.handleRootEl = function(e) {
                t.rootEl = e,
                cr(t.props.elRef, e)
            }
            ,
            t.handleMoreLinkClick = function(e) {
                var n = t.context
                  , r = n.dateEnv
                  , o = n.options.moreLinkClick;
                function i(e) {
                    var t = e.eventRange
                      , o = t.def
                      , i = t.instance
                      , a = t.range;
                    return {
                        event: new gn(n,o,i),
                        start: r.toDate(a.start),
                        end: r.toDate(a.end),
                        isStart: e.isStart,
                        isEnd: e.isEnd
                    }
                }
                "function" == typeof o && (o = o({
                    date: r.toDate(e.date),
                    allDay: !0,
                    allSegs: e.allSegs.map(i),
                    hiddenSegs: e.hiddenSegs.map(i),
                    jsEvent: e.ev,
                    view: n.viewApi
                })),
                o && "popover" !== o ? "string" == typeof o && n.calendarApi.zoomTo(e.date, o) : t.setState({
                    morePopoverState: ki(ki({}, e), {
                        currentFgEventSegs: t.props.fgEventSegs
                    })
                })
            }
            ,
            t.handleMorePopoverClose = function() {
                t.setState({
                    morePopoverState: null
                })
            }
            ,
            t
        }
        return xi(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = t.dateProfile
              , r = t.dayMaxEventRows
              , o = t.dayMaxEvents
              , i = t.expandRows
              , a = this.state.morePopoverState
              , s = t.cells.length
              , l = this.splitBusinessHourSegs(t.businessHourSegs, s)
              , u = this.splitBgEventSegs(t.bgEventSegs, s)
              , c = this.splitFgEventSegs(t.fgEventSegs, s)
              , d = this.splitDateSelectionSegs(t.dateSelectionSegs, s)
              , p = this.splitEventDrag(t.eventDrag, s)
              , f = this.splitEventResize(t.eventResize, s)
              , h = this.buildBuildMoreLinkText(this.context.options.moreLinkText)
              , v = !0 === o || !0 === r;
            return v && !i && (v = !1,
            r = null,
            o = null),
            m("div", {
                className: ["fc-daygrid-body", v ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", i ? "" : "fc-daygrid-body-natural"].join(" "),
                ref: this.handleRootEl,
                style: {
                    width: t.clientWidth,
                    minWidth: t.tableMinWidth
                }
            }, m(zo, {
                unit: "day"
            }, function(v, g) {
                return m(S, null, m("table", {
                    className: "fc-scrollgrid-sync-table",
                    style: {
                        width: t.clientWidth,
                        minWidth: t.tableMinWidth,
                        height: i ? t.clientHeight : ""
                    }
                }, t.colGroupNode, m("tbody", null, t.cells.map(function(i, a) {
                    return m(qi, {
                        ref: e.rowRefs.createRef(a),
                        key: i.length ? i[0].date.toISOString() : a,
                        showDayNumbers: s > 1,
                        showWeekNumbers: t.showWeekNumbers,
                        todayRange: g,
                        dateProfile: n,
                        cells: i,
                        renderIntro: t.renderRowIntro,
                        businessHourSegs: l[a],
                        eventSelection: t.eventSelection,
                        bgEventSegs: u[a].filter($i),
                        fgEventSegs: c[a],
                        dateSelectionSegs: d[a],
                        eventDrag: p[a],
                        eventResize: f[a],
                        dayMaxEvents: o,
                        dayMaxEventRows: r,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        buildMoreLinkText: h,
                        onMoreClick: e.handleMoreLinkClick
                    })
                }))), !t.forPrint && a && a.currentFgEventSegs === t.fgEventSegs && m(Xi, {
                    date: a.date,
                    dateProfile: n,
                    segs: a.allSegs,
                    alignmentEl: a.dayEl,
                    topAlignmentEl: 1 === s ? t.headerAlignElRef.current : null,
                    onCloseClick: e.handleMorePopoverClose,
                    selectedInstanceId: t.eventSelection,
                    hiddenInstances: (t.eventDrag ? t.eventDrag.affectedInstances : null) || (t.eventResize ? t.eventResize.affectedInstances : null) || {},
                    todayRange: g
                }))
            }))
        }
        ,
        t.prototype.prepareHits = function() {
            this.rowPositions = new $n(this.rootEl,this.rowRefs.collect().map(function(e) {
                return e.getCellEls()[0]
            }),!1,!0),
            this.colPositions = new $n(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)
        }
        ,
        t.prototype.positionToHit = function(e, t) {
            var n = this.colPositions
              , r = this.rowPositions
              , o = n.leftToIndex(e)
              , i = r.topToIndex(t);
            return null != i && null != o ? {
                row: i,
                col: o,
                dateSpan: {
                    range: this.getCellRange(i, o),
                    allDay: !0
                },
                dayEl: this.getCellEl(i, o),
                relativeRect: {
                    left: n.lefts[o],
                    right: n.rights[o],
                    top: r.tops[i],
                    bottom: r.bottoms[i]
                }
            } : null
        }
        ,
        t.prototype.getCellEl = function(e, t) {
            return this.rowRefs.currentMap[e].getCellEls()[t]
        }
        ,
        t.prototype.getCellRange = function(e, t) {
            var n = this.props.cells[e][t].date;
            return {
                start: n,
                end: K(n, 1)
            }
        }
        ,
        t
    }(Er);
    function Ji(e) {
        return "function" == typeof e ? e : function(t) {
            return "+" + t + " " + e
        }
    }
    function $i(e) {
        return e.eventRange.def.allDay
    }
    var Qi = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.forceDayIfListItem = !0,
            t
        }
        return xi(t, e),
        t.prototype.sliceRange = function(e, t) {
            return t.sliceRange(e)
        }
        ,
        t
    }(Yo)
      , ea = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.slicer = new Qi,
            t.tableRef = b(),
            t.handleRootEl = function(e) {
                e ? t.context.registerInteractiveComponent(t, {
                    el: e
                }) : t.context.unregisterInteractiveComponent(t)
            }
            ,
            t
        }
        return xi(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context;
            return m(Ki, ki({
                ref: this.tableRef,
                elRef: this.handleRootEl
            }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
                dateProfile: e.dateProfile,
                cells: e.dayTableModel.cells,
                colGroupNode: e.colGroupNode,
                tableMinWidth: e.tableMinWidth,
                renderRowIntro: e.renderRowIntro,
                dayMaxEvents: e.dayMaxEvents,
                dayMaxEventRows: e.dayMaxEventRows,
                showWeekNumbers: e.showWeekNumbers,
                expandRows: e.expandRows,
                headerAlignElRef: e.headerAlignElRef,
                clientWidth: e.clientWidth,
                clientHeight: e.clientHeight,
                forPrint: e.forPrint
            }))
        }
        ,
        t.prototype.prepareHits = function() {
            this.tableRef.current.prepareHits()
        }
        ,
        t.prototype.queryHit = function(e, t) {
            var n = this.tableRef.current.positionToHit(e, t);
            return n ? {
                component: this,
                dateSpan: n.dateSpan,
                dayEl: n.dayEl,
                rect: {
                    left: n.relativeRect.left,
                    right: n.relativeRect.right,
                    top: n.relativeRect.top,
                    bottom: n.relativeRect.bottom
                },
                layer: 0
            } : null
        }
        ,
        t
    }(Er);
    function ta(e, t) {
        var n = new Go(e.renderRange,t);
        return new qo(n,/year|month|week/.test(e.currentRangeUnit))
    }
    var na = wr({
        initialView: "dayGridMonth",
        optionRefiners: {
            moreLinkClick: ct,
            moreLinkClassNames: ct,
            moreLinkContent: ct,
            moreLinkDidMount: ct,
            moreLinkWillUnmount: ct
        },
        views: {
            dayGrid: {
                component: function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.buildDayTableModel = Le(ta),
                        t.headerRef = b(),
                        t.tableRef = b(),
                        t
                    }
                    return xi(t, e),
                    t.prototype.render = function() {
                        var e = this
                          , t = this.context
                          , n = t.options
                          , r = t.dateProfileGenerator
                          , o = this.props
                          , i = this.buildDayTableModel(o.dateProfile, r)
                          , a = n.dayHeaders && m(Fo, {
                            ref: this.headerRef,
                            dateProfile: o.dateProfile,
                            dates: i.headerDates,
                            datesRepDistinctDays: 1 === i.rowCnt
                        })
                          , s = function(t) {
                            return m(ea, {
                                ref: e.tableRef,
                                dateProfile: o.dateProfile,
                                dayTableModel: i,
                                businessHours: o.businessHours,
                                dateSelection: o.dateSelection,
                                eventStore: o.eventStore,
                                eventUiBases: o.eventUiBases,
                                eventSelection: o.eventSelection,
                                eventDrag: o.eventDrag,
                                eventResize: o.eventResize,
                                nextDayThreshold: n.nextDayThreshold,
                                colGroupNode: t.tableColGroupNode,
                                tableMinWidth: t.tableMinWidth,
                                dayMaxEvents: n.dayMaxEvents,
                                dayMaxEventRows: n.dayMaxEventRows,
                                showWeekNumbers: n.weekNumbers,
                                expandRows: !o.isHeightAuto,
                                headerAlignElRef: e.headerElRef,
                                clientWidth: t.clientWidth,
                                clientHeight: t.clientHeight,
                                forPrint: o.forPrint
                            })
                        };
                        return n.dayMinWidth ? this.renderHScrollLayout(a, s, i.colCnt, n.dayMinWidth) : this.renderSimpleLayout(a, s)
                    }
                    ,
                    t
                }(Mi),
                dateProfileGeneratorClass: function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return xi(t, e),
                    t.prototype.buildRenderRange = function(t, n, r) {
                        var o, i = this.props.dateEnv, a = e.prototype.buildRenderRange.call(this, t, n, r), s = a.start, l = a.end;
                        (/^(year|month)$/.test(n) && (s = i.startOfWeek(s),
                        (o = i.startOfWeek(l)).valueOf() !== l.valueOf() && (l = X(o, 1))),
                        this.props.monthMode && this.props.fixedWeekCount) && (l = X(l, 6 - Math.ceil($(s, l) / 7)));
                        return {
                            start: s,
                            end: l
                        }
                    }
                    ,
                    t
                }(Wr)
            },
            dayGridDay: {
                type: "dayGrid",
                duration: {
                    days: 1
                }
            },
            dayGridWeek: {
                type: "dayGrid",
                duration: {
                    weeks: 1
                }
            },
            dayGridMonth: {
                type: "dayGrid",
                duration: {
                    months: 1
                },
                monthMode: !0,
                fixedWeekCount: !0
            }
        }
    })
      , ra = (n(16),
    function(e, t) {
        return (ra = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    }
    );
    function oa(e, t) {
        function n() {
            this.constructor = e
        }
        ra(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var ia = function() {
        return (ia = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    Object.create;
    /*!
FullCalendar v5.3.2
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/
    var aa = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return oa(t, e),
        t.prototype.getKeyInfo = function() {
            return {
                allDay: {},
                timed: {}
            }
        }
        ,
        t.prototype.getKeysForDateSpan = function(e) {
            return e.allDay ? ["allDay"] : ["timed"]
        }
        ,
        t.prototype.getKeysForEventDef = function(e) {
            return e.allDay ? "background" === (t = e).ui.display || "inverse-background" === t.ui.display ? ["timed", "allDay"] : ["allDay"] : ["timed"];
            var t
        }
        ,
        t
    }(An)
      , sa = et({
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: !0,
        meridiem: "short"
    });
    function la(e) {
        var t = ["fc-timegrid-slot", "fc-timegrid-slot-label", e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
        return m(or.Consumer, null, function(n) {
            if (!e.isLabeled)
                return m("td", {
                    className: t.join(" "),
                    "data-time": e.isoTimeStr
                });
            var r = n.dateEnv
              , o = n.options
              , i = n.viewApi
              , a = null == o.slotLabelFormat ? sa : Array.isArray(o.slotLabelFormat) ? et(o.slotLabelFormat[0]) : et(o.slotLabelFormat)
              , s = {
                level: 0,
                time: e.time,
                date: r.toDate(e.date),
                view: i,
                text: r.format(e.date, a)
            };
            return m(Rr, {
                hookProps: s,
                classNames: o.slotLabelClassNames,
                content: o.slotLabelContent,
                defaultContent: ua,
                didMount: o.slotLabelDidMount,
                willUnmount: o.slotLabelWillUnmount
            }, function(n, r, o, i) {
                return m("td", {
                    ref: n,
                    className: t.concat(r).join(" "),
                    "data-time": e.isoTimeStr
                }, m("div", {
                    className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
                }, m("div", {
                    className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
                    ref: o
                }, i)))
            })
        })
    }
    function ua(e) {
        return e.text
    }
    var ca = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return oa(t, e),
        t.prototype.render = function() {
            return this.props.slatMetas.map(function(e) {
                return m("tr", {
                    key: e.key
                }, m(la, ia({}, e)))
            })
        }
        ,
        t
    }(sr)
      , da = et({
        week: "short"
    })
      , pa = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.allDaySplitter = new aa,
            t.headerElRef = b(),
            t.rootElRef = b(),
            t.scrollerElRef = b(),
            t.state = {
                slatCoords: null
            },
            t.handleScrollTopRequest = function(e) {
                var n = t.scrollerElRef.current;
                n && (n.scrollTop = e)
            }
            ,
            t.renderHeadAxis = function(e) {
                void 0 === e && (e = "");
                var n = t.context.options
                  , r = t.props.dateProfile.renderRange
                  , o = $(r.start, r.end)
                  , i = n.navLinks && 1 === o ? {
                    "data-navlink": zn(r.start, "week"),
                    tabIndex: 0
                } : {};
                return n.weekNumbers ? m(Di, {
                    date: r.start,
                    defaultFormat: da
                }, function(t, n, r, o) {
                    return m("th", {
                        ref: t,
                        className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(n).join(" ")
                    }, m("div", {
                        className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",
                        style: {
                            height: e
                        }
                    }, m("a", ia({
                        ref: r,
                        className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"
                    }, i), o)))
                }) : m("th", {
                    className: "fc-timegrid-axis"
                }, m("div", {
                    className: "fc-timegrid-axis-frame",
                    style: {
                        height: e
                    }
                }))
            }
            ,
            t.renderTableRowAxis = function(e) {
                var n = t.context
                  , r = n.options
                  , o = n.viewApi
                  , i = {
                    text: r.allDayText,
                    view: o
                };
                return m(Rr, {
                    hookProps: i,
                    classNames: r.allDayClassNames,
                    content: r.allDayContent,
                    defaultContent: fa,
                    didMount: r.allDayDidMount,
                    willUnmount: r.allDayWillUnmount
                }, function(t, n, r, o) {
                    return m("td", {
                        ref: t,
                        className: ["fc-timegrid-axis", "fc-scrollgrid-shrink"].concat(n).join(" ")
                    }, m("div", {
                        className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" + (null == e ? " fc-timegrid-axis-frame-liquid" : ""),
                        style: {
                            height: e
                        }
                    }, m("span", {
                        className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                        ref: r
                    }, o)))
                })
            }
            ,
            t.handleSlatCoords = function(e) {
                t.setState({
                    slatCoords: e
                })
            }
            ,
            t
        }
        return oa(t, e),
        t.prototype.renderSimpleLayout = function(e, t, n) {
            var r = this.context
              , o = this.props
              , i = []
              , a = ui(r.options);
            return e && i.push({
                type: "header",
                key: "header",
                isSticky: a,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: "fc-col-header",
                    rowContent: e
                }
            }),
            t && (i.push({
                type: "body",
                key: "all-day",
                chunk: {
                    content: t
                }
            }),
            i.push({
                type: "body",
                key: "all-day-divider",
                outerContent: m("tr", {
                    className: "fc-scrollgrid-section"
                }, m("td", {
                    className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded")
                }))
            })),
            i.push({
                type: "body",
                key: "body",
                liquid: !0,
                expandRows: Boolean(r.options.expandRows),
                chunk: {
                    scrollerElRef: this.scrollerElRef,
                    content: n
                }
            }),
            m(Nr, {
                viewSpec: r.viewSpec,
                elRef: this.rootElRef
            }, function(e, t) {
                return m("div", {
                    className: ["fc-timegrid"].concat(t).join(" "),
                    ref: e
                }, m(di, {
                    liquid: !o.isHeightAuto && !o.forPrint,
                    cols: [{
                        width: "shrink"
                    }],
                    sections: i
                }))
            })
        }
        ,
        t.prototype.renderHScrollLayout = function(e, t, n, r, o, i, a) {
            var s = this
              , l = this.context.pluginHooks.scrollGridImpl;
            if (!l)
                throw new Error("No ScrollGrid implementation");
            var u = this.context
              , c = this.props
              , d = !c.forPrint && ui(u.options)
              , p = !c.forPrint && ci(u.options)
              , f = [];
            e && f.push({
                type: "header",
                key: "header",
                isSticky: d,
                syncRowHeights: !0,
                chunks: [{
                    key: "axis",
                    rowContent: function(e) {
                        return m("tr", null, s.renderHeadAxis(e.rowSyncHeights[0]))
                    }
                }, {
                    key: "cols",
                    elRef: this.headerElRef,
                    tableClassName: "fc-col-header",
                    rowContent: e
                }]
            }),
            t && (f.push({
                type: "body",
                key: "all-day",
                syncRowHeights: !0,
                chunks: [{
                    key: "axis",
                    rowContent: function(e) {
                        return m("tr", null, s.renderTableRowAxis(e.rowSyncHeights[0]))
                    }
                }, {
                    key: "cols",
                    content: t
                }]
            }),
            f.push({
                key: "all-day-divider",
                type: "body",
                outerContent: m("tr", {
                    className: "fc-scrollgrid-section"
                }, m("td", {
                    colSpan: 2,
                    className: "fc-timegrid-divider " + u.theme.getClass("tableCellShaded")
                }))
            }));
            var h = u.options.nowIndicator;
            return f.push({
                type: "body",
                key: "body",
                liquid: !0,
                expandRows: Boolean(u.options.expandRows),
                chunks: [{
                    key: "axis",
                    content: function(e) {
                        return m("div", {
                            className: "fc-timegrid-axis-chunk"
                        }, m("table", {
                            style: {
                                height: e.expandRows ? e.clientHeight : ""
                            }
                        }, e.tableColGroupNode, m("tbody", null, m(ca, {
                            slatMetas: i
                        }))), m("div", {
                            className: "fc-timegrid-now-indicator-container"
                        }, m(zo, {
                            unit: h ? "minute" : "day"
                        }, function(e) {
                            var t = h && a && a.safeComputeTop(e);
                            return "number" == typeof t ? m(vi, {
                                isAxis: !0,
                                date: e
                            }, function(e, n, r, o) {
                                return m("div", {
                                    ref: e,
                                    className: ["fc-timegrid-now-indicator-arrow"].concat(n).join(" "),
                                    style: {
                                        top: t
                                    }
                                }, o)
                            }) : null
                        })))
                    }
                }, {
                    key: "cols",
                    scrollerElRef: this.scrollerElRef,
                    content: n
                }]
            }),
            p && f.push({
                key: "footer",
                type: "footer",
                isSticky: !0,
                chunks: [{
                    key: "axis",
                    content: li
                }, {
                    key: "cols",
                    content: li
                }]
            }),
            m(Nr, {
                viewSpec: u.viewSpec,
                elRef: this.rootElRef
            }, function(e, t) {
                return m("div", {
                    className: ["fc-timegrid"].concat(t).join(" "),
                    ref: e
                }, m(l, {
                    liquid: !c.isHeightAuto && !c.forPrint,
                    colGroups: [{
                        width: "shrink",
                        cols: [{
                            width: "shrink"
                        }]
                    }, {
                        cols: [{
                            span: r,
                            minWidth: o
                        }]
                    }],
                    sections: f
                }))
            })
        }
        ,
        t.prototype.getAllDayMaxEventProps = function() {
            var e = this.context.options
              , t = e.dayMaxEvents
              , n = e.dayMaxEventRows;
            return !0 !== t && !0 !== n || (t = void 0,
            n = 5),
            {
                dayMaxEvents: t,
                dayMaxEventRows: n
            }
        }
        ,
        t
    }(Er);
    function fa(e) {
        return e.text
    }
    var ha = function() {
        function e(e, t, n) {
            this.positions = e,
            this.dateProfile = t,
            this.slatMetas = n
        }
        return e.prototype.safeComputeTop = function(e) {
            var t = this.dateProfile;
            if (Wt(t.currentRange, e)) {
                var n = ee(e)
                  , r = e.valueOf() - n.valueOf();
                if (r >= Pe(t.slotMinTime) && r < Pe(t.slotMaxTime))
                    return this.computeTimeTop(Re(r))
            }
            return null
        }
        ,
        e.prototype.computeDateTop = function(e, t) {
            return t || (t = ee(e)),
            this.computeTimeTop(Re(e.valueOf() - t.valueOf()))
        }
        ,
        e.prototype.computeTimeTop = function(e) {
            var t, n, r = this.positions, o = this.dateProfile, i = this.slatMetas, a = r.els.length, s = i[1].date.valueOf() - i[0].date.valueOf(), l = (e.milliseconds - Pe(o.slotMinTime)) / s;
            return l = Math.max(0, l),
            l = Math.min(a, l),
            t = Math.floor(l),
            n = l - (t = Math.min(t, a - 1)),
            r.tops[t] + r.getHeight(t) * n
        }
        ,
        e
    }()
      , va = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return oa(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = t.options
              , r = e.slatElRefs;
            return m("tbody", null, e.slatMetas.map(function(o, i) {
                var a = {
                    time: o.time,
                    date: t.dateEnv.toDate(o.date),
                    view: t.viewApi
                }
                  , s = ["fc-timegrid-slot", "fc-timegrid-slot-lane", o.isLabeled ? "" : "fc-timegrid-slot-minor"];
                return m("tr", {
                    key: o.key,
                    ref: r.createRef(o.key)
                }, e.axis && m(la, ia({}, o)), m(Rr, {
                    hookProps: a,
                    classNames: n.slotLaneClassNames,
                    content: n.slotLaneContent,
                    didMount: n.slotLaneDidMount,
                    willUnmount: n.slotLaneWillUnmount
                }, function(e, t, n, r) {
                    return m("td", {
                        ref: e,
                        className: s.concat(t).join(" "),
                        "data-time": o.isoTimeStr
                    }, r)
                }))
            }))
        }
        ,
        t
    }(sr)
      , ga = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = b(),
            t.slatElRefs = new Jo,
            t
        }
        return oa(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context;
            return m("div", {
                className: "fc-timegrid-slots",
                ref: this.rootElRef
            }, m("table", {
                className: t.theme.getClass("table"),
                style: {
                    minWidth: e.tableMinWidth,
                    width: e.clientWidth,
                    height: e.minHeight
                }
            }, e.tableColGroupNode, m(va, {
                slatElRefs: this.slatElRefs,
                axis: e.axis,
                slatMetas: e.slatMetas
            })))
        }
        ,
        t.prototype.componentDidMount = function() {
            this.updateSizing()
        }
        ,
        t.prototype.componentDidUpdate = function() {
            this.updateSizing()
        }
        ,
        t.prototype.componentWillUnmount = function() {
            this.props.onCoords && this.props.onCoords(null)
        }
        ,
        t.prototype.updateSizing = function() {
            var e, t = this.props;
            t.onCoords && null !== t.clientWidth && (this.rootElRef.current.offsetHeight && t.onCoords(new ha(new $n(this.rootElRef.current,(e = this.slatElRefs.currentMap,
            t.slatMetas.map(function(t) {
                return e[t.key]
            })),!1,!0),this.props.dateProfile,t.slatMetas)))
        }
        ,
        t
    }(sr);
    function ma(e, t) {
        var n, r = [];
        for (n = 0; n < t; n += 1)
            r.push([]);
        if (e)
            for (n = 0; n < e.length; n += 1)
                r[e[n].col].push(e[n]);
        return r
    }
    function ya(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1)
                n[a] = {
                    affectedInstances: e.affectedInstances,
                    isEvent: e.isEvent,
                    segs: []
                };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.col].segs.push(i)
            }
        } else
            for (var a = 0; a < t; a += 1)
                n[a] = null;
        return n
    }
    function ba(e, t, n, r, o) {
        return Sa(e, t, n, r),
        function(e, t) {
            for (var n = 0, r = e; n < r.length; n++) {
                (c = r[n]).level = null,
                c.forwardCoord = null,
                c.backwardCoord = null,
                c.forwardPressure = null
            }
            var o, i = function(e) {
                var t, n, r, o = [];
                for (t = 0; t < e.length; t += 1) {
                    for (n = e[t],
                    r = 0; r < o.length && Ea(n, o[r]).length; r += 1)
                        ;
                    n.level = r,
                    (o[r] || (o[r] = [])).push(n)
                }
                return o
            }(e = Vt(e, t));
            if (function(e) {
                var t, n, r, o, i;
                for (t = 0; t < e.length; t += 1)
                    for (n = e[t],
                    r = 0; r < n.length; r += 1)
                        for ((o = n[r]).forwardSegs = [],
                        i = t + 1; i < e.length; i += 1)
                            Ea(o, e[i], o.forwardSegs)
            }(i),
            o = i[0]) {
                for (var a = 0, s = o; a < s.length; a++) {
                    wa(c = s[a])
                }
                for (var l = 0, u = o; l < u.length; l++) {
                    var c;
                    Da(c = u[l], 0, 0, t)
                }
            }
            return e
        }(e, o)
    }
    function Sa(e, t, n, r) {
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            a.top = n.computeDateTop(a.start, t),
            a.bottom = Math.max(a.top + (r || 0), n.computeDateTop(a.end, t))
        }
    }
    function Ea(e, t, n) {
        void 0 === n && (n = []);
        for (var r = 0; r < t.length; r += 1)
            o = e,
            i = t[r],
            o.bottom > i.top && o.top < i.bottom && n.push(t[r]);
        var o, i;
        return n
    }
    function wa(e) {
        var t, n, r = e.forwardSegs, o = 0;
        if (null == e.forwardPressure) {
            for (t = 0; t < r.length; t += 1)
                wa(n = r[t]),
                o = Math.max(o, 1 + n.forwardPressure);
            e.forwardPressure = o
        }
    }
    function Da(e, t, n, r) {
        var o, i = e.forwardSegs;
        if (null == e.forwardCoord)
            for (i.length ? (!function(e, t) {
                var n = e.map(Ca)
                  , r = [{
                    field: "forwardPressure",
                    order: -1
                }, {
                    field: "backwardCoord",
                    order: 1
                }].concat(t);
                n.sort(function(e, t) {
                    return z(e, t, r)
                }),
                n.map(function(e) {
                    return e._seg
                })
            }(i, r),
            Da(i[0], t + 1, n, r),
            e.forwardCoord = i[0].backwardCoord) : e.forwardCoord = 1,
            e.backwardCoord = e.forwardCoord - (e.forwardCoord - n) / (t + 1),
            o = 0; o < i.length; o += 1)
                Da(i[o], 0, e.forwardCoord, r)
    }
    function Ca(e) {
        var t = Gt(e);
        return t.forwardPressure = e.forwardPressure,
        t.backwardCoord = e.backwardCoord,
        t
    }
    var Ra = et({
        hour: "numeric",
        minute: "2-digit",
        meridiem: !1
    })
      , Ta = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return oa(t, e),
        t.prototype.render = function() {
            var e = ["fc-timegrid-event", "fc-v-event"];
            return this.props.isCondensed && e.push("fc-timegrid-event-condensed"),
            m(fi, ia({}, this.props, {
                defaultTimeFormat: Ra,
                extraClassNames: e
            }))
        }
        ,
        t
    }(sr)
      , xa = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return oa(t, e),
        t.prototype.render = function() {
            var e = this.props;
            return m(mi, {
                date: e.date,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                extraHookProps: e.extraHookProps
            }, function(e, t) {
                return t && m("div", {
                    className: "fc-timegrid-col-misc",
                    ref: e
                }, t)
            })
        }
        ,
        t
    }(sr);
    Co.timeGridEventCondensedHeight = 30;
    var ka = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return oa(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.context.options.selectMirror
              , r = t.eventDrag && t.eventDrag.segs || t.eventResize && t.eventResize.segs || n && t.dateSelectionSegs || []
              , o = t.eventDrag && t.eventDrag.affectedInstances || t.eventResize && t.eventResize.affectedInstances || {};
            return m(bi, {
                elRef: t.elRef,
                date: t.date,
                dateProfile: t.dateProfile,
                todayRange: t.todayRange,
                extraHookProps: t.extraHookProps
            }, function(i, a, s) {
                return m("td", ia({
                    ref: i,
                    className: ["fc-timegrid-col"].concat(a, t.extraClassNames || []).join(" ")
                }, s, t.extraDataAttrs), m("div", {
                    className: "fc-timegrid-col-frame"
                }, m("div", {
                    className: "fc-timegrid-col-bg"
                }, e.renderFillSegs(t.businessHourSegs, "non-business"), e.renderFillSegs(t.bgEventSegs, "bg-event"), e.renderFillSegs(t.dateSelectionSegs, "highlight")), m("div", {
                    className: "fc-timegrid-col-events"
                }, e.renderFgSegs(t.fgEventSegs, o)), m("div", {
                    className: "fc-timegrid-col-events"
                }, e.renderFgSegs(r, {}, Boolean(t.eventDrag), Boolean(t.eventResize), Boolean(n))), m("div", {
                    className: "fc-timegrid-now-indicator-container"
                }, e.renderNowIndicator(t.nowIndicatorSegs)), m(xa, {
                    date: t.date,
                    dateProfile: t.dateProfile,
                    todayRange: t.todayRange,
                    extraHookProps: t.extraHookProps
                })))
            })
        }
        ,
        t.prototype.renderFgSegs = function(e, t, n, r, o) {
            var i = this.props;
            return i.forPrint ? this.renderPrintFgSegs(e) : i.slatCoords ? this.renderPositionedFgSegs(e, t, n, r, o) : null
        }
        ,
        t.prototype.renderPrintFgSegs = function(e) {
            var t = this.props;
            return (e = Vt(e, this.context.options.eventOrder)).map(function(e) {
                return m("div", {
                    className: "fc-timegrid-event-harness",
                    key: e.eventRange.instance.instanceId
                }, m(Ta, ia({
                    seg: e,
                    isDragging: !1,
                    isResizing: !1,
                    isDateSelecting: !1,
                    isSelected: !1,
                    isCondensed: !1
                }, Kt(e, t.todayRange, t.nowDate))))
            })
        }
        ,
        t.prototype.renderPositionedFgSegs = function(e, t, n, r, o) {
            var i = this
              , a = this.context
              , s = this.props;
            return (e = ba(e, s.date, s.slatCoords, a.options.eventMinHeight, a.options.eventOrder)).map(function(e) {
                var a = e.eventRange.instance.instanceId
                  , l = n || r || o ? ia({
                    left: 0,
                    right: 0
                }, i.computeSegTopBottomCss(e)) : i.computeFgSegPositionCss(e);
                return m("div", {
                    className: "fc-timegrid-event-harness" + (e.level > 0 ? " fc-timegrid-event-harness-inset" : ""),
                    key: a,
                    style: ia({
                        visibility: t[a] ? "hidden" : ""
                    }, l)
                }, m(Ta, ia({
                    seg: e,
                    isDragging: n,
                    isResizing: r,
                    isDateSelecting: o,
                    isSelected: a === s.eventSelection,
                    isCondensed: e.bottom - e.top < Co.timeGridEventCondensedHeight
                }, Kt(e, s.todayRange, s.nowDate))))
            })
        }
        ,
        t.prototype.renderFillSegs = function(e, t) {
            var n = this
              , r = this.context
              , o = this.props;
            if (!o.slatCoords)
                return null;
            Sa(e, o.date, o.slatCoords, r.options.eventMinHeight);
            var i = e.map(function(e) {
                return m("div", {
                    key: Jt(e.eventRange),
                    className: "fc-timegrid-bg-harness",
                    style: n.computeSegTopBottomCss(e)
                }, "bg-event" === t ? m(Ei, ia({
                    seg: e
                }, Kt(e, o.todayRange, o.nowDate))) : Si(t))
            });
            return m(S, null, i)
        }
        ,
        t.prototype.renderNowIndicator = function(e) {
            var t = this.props
              , n = t.slatCoords
              , r = t.date;
            return n ? e.map(function(e, t) {
                return m(vi, {
                    isAxis: !1,
                    date: r,
                    key: t
                }, function(t, o, i, a) {
                    return m("div", {
                        ref: t,
                        className: ["fc-timegrid-now-indicator-line"].concat(o).join(" "),
                        style: {
                            top: n.computeDateTop(e.start, r)
                        }
                    }, a)
                })
            }) : null
        }
        ,
        t.prototype.computeFgSegPositionCss = function(e) {
            var t, n, r = this.context, o = r.isRtl, i = r.options.slotEventOverlap, a = e.backwardCoord, s = e.forwardCoord;
            i && (s = Math.min(1, a + 2 * (s - a))),
            o ? (t = 1 - s,
            n = a) : (t = a,
            n = 1 - s);
            var l = {
                zIndex: e.level + 1,
                left: 100 * t + "%",
                right: 100 * n + "%"
            };
            return i && e.forwardPressure && (l[o ? "marginLeft" : "marginRight"] = 20),
            ia(ia({}, l), this.computeSegTopBottomCss(e))
        }
        ,
        t.prototype.computeSegTopBottomCss = function(e) {
            return {
                top: e.top,
                bottom: -e.bottom
            }
        }
        ,
        t
    }(sr)
      , Ma = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.splitFgEventSegs = Le(ma),
            t.splitBgEventSegs = Le(ma),
            t.splitBusinessHourSegs = Le(ma),
            t.splitNowIndicatorSegs = Le(ma),
            t.splitDateSelectionSegs = Le(ma),
            t.splitEventDrag = Le(ya),
            t.splitEventResize = Le(ya),
            t.rootElRef = b(),
            t.cellElRefs = new Jo,
            t
        }
        return oa(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.context.options.nowIndicator && t.slatCoords && t.slatCoords.safeComputeTop(t.nowDate)
              , r = t.cells.length
              , o = this.splitFgEventSegs(t.fgEventSegs, r)
              , i = this.splitBgEventSegs(t.bgEventSegs, r)
              , a = this.splitBusinessHourSegs(t.businessHourSegs, r)
              , s = this.splitNowIndicatorSegs(t.nowIndicatorSegs, r)
              , l = this.splitDateSelectionSegs(t.dateSelectionSegs, r)
              , u = this.splitEventDrag(t.eventDrag, r)
              , c = this.splitEventResize(t.eventResize, r);
            return m("div", {
                className: "fc-timegrid-cols",
                ref: this.rootElRef
            }, m("table", {
                style: {
                    minWidth: t.tableMinWidth,
                    width: t.clientWidth
                }
            }, t.tableColGroupNode, m("tbody", null, m("tr", null, t.axis && m("td", {
                className: "fc-timegrid-col fc-timegrid-axis"
            }, m("div", {
                className: "fc-timegrid-col-frame"
            }, m("div", {
                className: "fc-timegrid-now-indicator-container"
            }, "number" == typeof n && m(vi, {
                isAxis: !0,
                date: t.nowDate
            }, function(e, t, r, o) {
                return m("div", {
                    ref: e,
                    className: ["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),
                    style: {
                        top: n
                    }
                }, o)
            })))), t.cells.map(function(n, r) {
                return m(ka, {
                    key: n.key,
                    elRef: e.cellElRefs.createRef(n.key),
                    dateProfile: t.dateProfile,
                    date: n.date,
                    nowDate: t.nowDate,
                    todayRange: t.todayRange,
                    extraHookProps: n.extraHookProps,
                    extraDataAttrs: n.extraDataAttrs,
                    extraClassNames: n.extraClassNames,
                    fgEventSegs: o[r],
                    bgEventSegs: i[r],
                    businessHourSegs: a[r],
                    nowIndicatorSegs: s[r],
                    dateSelectionSegs: l[r],
                    eventDrag: u[r],
                    eventResize: c[r],
                    slatCoords: t.slatCoords,
                    eventSelection: t.eventSelection,
                    forPrint: t.forPrint
                })
            })))))
        }
        ,
        t.prototype.componentDidMount = function() {
            this.updateCoords()
        }
        ,
        t.prototype.componentDidUpdate = function() {
            this.updateCoords()
        }
        ,
        t.prototype.updateCoords = function() {
            var e, t = this.props;
            t.onColCoords && null !== t.clientWidth && t.onColCoords(new $n(this.rootElRef.current,(e = this.cellElRefs.currentMap,
            t.cells.map(function(t) {
                return e[t.key]
            })),!0,!1))
        }
        ,
        t
    }(sr);
    var _a = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.processSlotOptions = Le(Pa),
            t.state = {
                slatCoords: null
            },
            t.handleScrollRequest = function(e) {
                var n = t.props.onScrollTopRequest
                  , r = t.state.slatCoords;
                if (n && r) {
                    if (e.time) {
                        var o = r.computeTimeTop(e.time);
                        (o = Math.ceil(o)) && (o += 1),
                        n(o)
                    }
                    return !0
                }
                return !1
            }
            ,
            t.handleColCoords = function(e) {
                t.colCoords = e
            }
            ,
            t.handleSlatCoords = function(e) {
                t.setState({
                    slatCoords: e
                }),
                t.props.onSlatCoords && t.props.onSlatCoords(e)
            }
            ,
            t
        }
        return oa(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.state;
            return m("div", {
                className: "fc-timegrid-body",
                ref: e.rootElRef,
                style: {
                    width: e.clientWidth,
                    minWidth: e.tableMinWidth
                }
            }, m(ga, {
                axis: e.axis,
                dateProfile: e.dateProfile,
                slatMetas: e.slatMetas,
                clientWidth: e.clientWidth,
                minHeight: e.expandRows ? e.clientHeight : "",
                tableMinWidth: e.tableMinWidth,
                tableColGroupNode: e.axis ? e.tableColGroupNode : null,
                onCoords: this.handleSlatCoords
            }), m(Ma, {
                cells: e.cells,
                axis: e.axis,
                dateProfile: e.dateProfile,
                businessHourSegs: e.businessHourSegs,
                bgEventSegs: e.bgEventSegs,
                fgEventSegs: e.fgEventSegs,
                dateSelectionSegs: e.dateSelectionSegs,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                todayRange: e.todayRange,
                nowDate: e.nowDate,
                nowIndicatorSegs: e.nowIndicatorSegs,
                clientWidth: e.clientWidth,
                tableMinWidth: e.tableMinWidth,
                tableColGroupNode: e.tableColGroupNode,
                slatCoords: t.slatCoords,
                onColCoords: this.handleColCoords,
                forPrint: e.forPrint
            }))
        }
        ,
        t.prototype.componentDidMount = function() {
            this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
        }
        ,
        t.prototype.componentDidUpdate = function(e) {
            this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
        }
        ,
        t.prototype.componentWillUnmount = function() {
            this.scrollResponder.detach()
        }
        ,
        t.prototype.positionToHit = function(e, t) {
            var n = this.context
              , r = n.dateEnv
              , o = n.options
              , i = this.colCoords
              , a = this.props.dateProfile
              , s = this.state.slatCoords
              , l = this.processSlotOptions(this.props.slotDuration, o.snapDuration)
              , u = l.snapDuration
              , c = l.snapsPerSlot
              , d = i.leftToIndex(e)
              , p = s.positions.topToIndex(t);
            if (null != d && null != p) {
                var f = s.positions.tops[p]
                  , h = s.positions.getHeight(p)
                  , v = (t - f) / h
                  , g = p * c + Math.floor(v * c)
                  , m = this.props.cells[d].date
                  , y = ke(a.slotMinTime, Me(u, g))
                  , b = r.add(m, y);
                return {
                    col: d,
                    dateSpan: {
                        range: {
                            start: b,
                            end: r.add(b, u)
                        },
                        allDay: !1
                    },
                    dayEl: i.els[d],
                    relativeRect: {
                        left: i.lefts[d],
                        right: i.rights[d],
                        top: f,
                        bottom: f + h
                    }
                }
            }
            return null
        }
        ,
        t
    }(sr);
    function Pa(e, t) {
        var n = t || e
          , r = Ie(e, n);
        return null === r && (n = e,
        r = 1),
        {
            snapDuration: n,
            snapsPerSlot: r
        }
    }
    var Ia = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return oa(t, e),
        t.prototype.sliceRange = function(e, t) {
            for (var n = [], r = 0; r < t.length; r += 1) {
                var o = Ht(e, t[r]);
                o && n.push({
                    start: o.start,
                    end: o.end,
                    isStart: o.start.valueOf() === e.start.valueOf(),
                    isEnd: o.end.valueOf() === e.end.valueOf(),
                    col: r
                })
            }
            return n
        }
        ,
        t
    }(Yo)
      , Na = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildDayRanges = Le(Ha),
            t.slicer = new Ia,
            t.timeColsRef = b(),
            t.handleRootEl = function(e) {
                e ? t.context.registerInteractiveComponent(t, {
                    el: e
                }) : t.context.unregisterInteractiveComponent(t)
            }
            ,
            t
        }
        return oa(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.context
              , r = t.dateProfile
              , o = t.dayTableModel
              , i = n.options.nowIndicator
              , a = this.buildDayRanges(o, r, n.dateEnv);
            return m(zo, {
                unit: i ? "minute" : "day"
            }, function(s, l) {
                return m(_a, ia({
                    ref: e.timeColsRef,
                    rootElRef: e.handleRootEl
                }, e.slicer.sliceProps(t, r, null, n, a), {
                    forPrint: t.forPrint,
                    axis: t.axis,
                    dateProfile: r,
                    slatMetas: t.slatMetas,
                    slotDuration: t.slotDuration,
                    cells: o.cells[0],
                    tableColGroupNode: t.tableColGroupNode,
                    tableMinWidth: t.tableMinWidth,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    expandRows: t.expandRows,
                    nowDate: s,
                    nowIndicatorSegs: i && e.slicer.sliceNowDate(s, n, a),
                    todayRange: l,
                    onScrollTopRequest: t.onScrollTopRequest,
                    onSlatCoords: t.onSlatCoords
                }))
            })
        }
        ,
        t.prototype.queryHit = function(e, t) {
            var n = this.timeColsRef.current.positionToHit(e, t);
            return n ? {
                component: this,
                dateSpan: n.dateSpan,
                dayEl: n.dayEl,
                rect: {
                    left: n.relativeRect.left,
                    right: n.relativeRect.right,
                    top: n.relativeRect.top,
                    bottom: n.relativeRect.bottom
                },
                layer: 0
            } : null
        }
        ,
        t
    }(Er);
    function Ha(e, t, n) {
        for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
            var a = i[o];
            r.push({
                start: n.add(a, t.slotMinTime),
                end: n.add(a, t.slotMaxTime)
            })
        }
        return r
    }
    var Oa = [{
        hours: 1
    }, {
        minutes: 30
    }, {
        minutes: 15
    }, {
        seconds: 30
    }, {
        seconds: 15
    }];
    function Aa(e, t, n, r, o) {
        for (var i, a = new Date(0), s = e, l = Re(0), u = n || function(e) {
            var t, n, r;
            for (t = Oa.length - 1; t >= 0; t -= 1)
                if (n = Re(Oa[t]),
                null !== (r = Ie(n, e)) && r > 1)
                    return n;
            return e
        }(r), c = []; Pe(s) < Pe(t); ) {
            var d = o.add(a, s)
              , p = null !== Ie(l, u);
            c.push({
                date: d,
                time: s,
                key: d.toISOString(),
                isoTimeStr: (i = d,
                V(i.getUTCHours(), 2) + ":" + V(i.getUTCMinutes(), 2) + ":" + V(i.getUTCSeconds(), 2)),
                isLabeled: p
            }),
            s = ke(s, r),
            l = ke(l, r)
        }
        return c
    }
    var La = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildTimeColsModel = Le(Wa),
            t.buildSlatMetas = Le(Aa),
            t
        }
        return oa(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.context
              , n = t.options
              , r = t.dateEnv
              , o = t.dateProfileGenerator
              , i = this.props
              , a = i.dateProfile
              , s = this.buildTimeColsModel(a, o)
              , l = this.allDaySplitter.splitProps(i)
              , u = this.buildSlatMetas(a.slotMinTime, a.slotMaxTime, n.slotLabelInterval, n.slotDuration, r)
              , c = n.dayMinWidth
              , d = !c
              , p = c
              , f = n.dayHeaders && m(Fo, {
                dates: s.headerDates,
                dateProfile: a,
                datesRepDistinctDays: !0,
                renderIntro: d ? this.renderHeadAxis : null
            })
              , h = !1 !== n.allDaySlot && function(t) {
                return m(ea, ia({}, l.allDay, {
                    dateProfile: a,
                    dayTableModel: s,
                    nextDayThreshold: n.nextDayThreshold,
                    tableMinWidth: t.tableMinWidth,
                    colGroupNode: t.tableColGroupNode,
                    renderRowIntro: d ? e.renderTableRowAxis : null,
                    showWeekNumbers: !1,
                    expandRows: !1,
                    headerAlignElRef: e.headerElRef,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    forPrint: i.forPrint
                }, e.getAllDayMaxEventProps()))
            }
              , v = function(t) {
                return m(Na, ia({}, l.timed, {
                    dayTableModel: s,
                    dateProfile: a,
                    axis: d,
                    slotDuration: n.slotDuration,
                    slatMetas: u,
                    forPrint: i.forPrint,
                    tableColGroupNode: t.tableColGroupNode,
                    tableMinWidth: t.tableMinWidth,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    onSlatCoords: e.handleSlatCoords,
                    expandRows: t.expandRows,
                    onScrollTopRequest: e.handleScrollTopRequest
                }))
            };
            return p ? this.renderHScrollLayout(f, h, v, s.colCnt, c, u, this.state.slatCoords) : this.renderSimpleLayout(f, h, v)
        }
        ,
        t
    }(pa);
    function Wa(e, t) {
        var n = new Go(e.renderRange,t);
        return new qo(n,!1)
    }
    var Ua = wr({
        initialView: "timeGridWeek",
        optionRefiners: {
            allDaySlot: Boolean
        },
        views: {
            timeGrid: {
                component: La,
                usesMinMaxTime: !0,
                allDaySlot: !0,
                slotDuration: "00:30:00",
                slotEventOverlap: !0
            },
            timeGridDay: {
                type: "timeGrid",
                duration: {
                    days: 1
                }
            },
            timeGridWeek: {
                type: "timeGrid",
                duration: {
                    weeks: 1
                }
            }
        }
    })
      , ja = (n(17),
    function(e, t) {
        return (ja = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    }
    );
    function za(e, t) {
        function n() {
            this.constructor = e
        }
        ja(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var Ba = function() {
        return (Ba = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    Object.create;
    /*!
FullCalendar v5.3.2
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/
    var Fa = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return za(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = e.dayDate
              , n = e.todayRange
              , r = this.context
              , o = r.theme
              , i = r.dateEnv
              , a = r.options
              , s = r.viewApi
              , l = Wn(t, n)
              , u = a.listDayFormat ? i.format(t, a.listDayFormat) : ""
              , c = a.listDaySideFormat ? i.format(t, a.listDaySideFormat) : ""
              , d = a.navLinks ? zn(t) : null
              , p = Ba({
                date: i.toDate(t),
                view: s,
                text: u,
                sideText: c,
                navLinkData: d
            }, l)
              , f = ["fc-list-day"].concat(Un(l, o));
            return m(Rr, {
                hookProps: p,
                classNames: a.dayHeaderClassNames,
                content: a.dayHeaderContent,
                defaultContent: Va,
                didMount: a.dayHeaderDidMount,
                willUnmount: a.dayHeaderWillUnmount
            }, function(e, n, r, i) {
                return m("tr", {
                    ref: e,
                    className: f.concat(n).join(" "),
                    "data-date": He(t)
                }, m("th", {
                    colSpan: 3
                }, m("div", {
                    className: "fc-list-day-cushion " + o.getClass("tableCellShaded"),
                    ref: r
                }, i)))
            })
        }
        ,
        t
    }(sr);
    function Va(e) {
        var t = e.navLinkData ? {
            "data-navlink": e.navLinkData,
            tabIndex: 0
        } : {};
        return m(S, null, e.text && m("a", Ba({
            className: "fc-list-day-text"
        }, t), e.text), e.sideText && m("a", Ba({
            className: "fc-list-day-side-text"
        }, t), e.sideText))
    }
    var Ga = et({
        hour: "numeric",
        minute: "2-digit",
        meridiem: "short"
    })
      , qa = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return za(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = e.seg
              , r = t.options.eventTimeFormat || Ga;
            return m(pi, {
                seg: n,
                timeText: "",
                disableDragging: !0,
                disableResizing: !0,
                defaultContent: Ya,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday,
                isSelected: e.isSelected,
                isDragging: e.isDragging,
                isResizing: e.isResizing,
                isDateSelecting: e.isDateSelecting
            }, function(e, o, i, a, s) {
                return m("tr", {
                    className: ["fc-list-event", s.event.url ? "fc-event-forced-url" : ""].concat(o).join(" "),
                    ref: e
                }, function(e, t, n) {
                    var r = n.options;
                    if (!1 !== r.displayEventTime) {
                        var o = e.eventRange.def
                          , i = e.eventRange.instance
                          , a = !1
                          , s = void 0;
                        if (o.allDay ? a = !0 : (u = e.eventRange.range,
                        $((c = _t(u)).start, c.end) > 1 ? e.isStart ? s = Xt(e, t, n, null, null, i.range.start, e.end) : e.isEnd ? s = Xt(e, t, n, null, null, e.start, i.range.end) : a = !0 : s = Xt(e, t, n)),
                        a) {
                            var l = {
                                text: n.options.allDayText,
                                view: n.viewApi
                            };
                            return m(Rr, {
                                hookProps: l,
                                classNames: r.allDayClassNames,
                                content: r.allDayContent,
                                defaultContent: Za,
                                didMount: r.allDayDidMount,
                                willUnmount: r.allDayWillUnmount
                            }, function(e, t, n, r) {
                                return m("td", {
                                    className: ["fc-list-event-time"].concat(t).join(" "),
                                    ref: e
                                }, r)
                            })
                        }
                        return m("td", {
                            className: "fc-list-event-time"
                        }, s)
                    }
                    var u, c;
                    return null
                }(n, r, t), m("td", {
                    className: "fc-list-event-graphic"
                }, m("span", {
                    className: "fc-list-event-dot",
                    style: {
                        borderColor: s.borderColor || s.backgroundColor
                    }
                })), m("td", {
                    className: "fc-list-event-title",
                    ref: i
                }, a))
            })
        }
        ,
        t
    }(sr);
    function Ya(e) {
        var t = e.event
          , n = t.url;
        return m("a", Ba({}, n ? {
            href: n
        } : {}), t.title)
    }
    function Za(e) {
        return e.text
    }
    function Xa(e) {
        return e.text
    }
    function Ka(e) {
        for (var t = ee(e.renderRange.start), n = e.renderRange.end, r = [], o = []; t < n; )
            r.push(t),
            o.push({
                start: t,
                end: K(t, 1)
            }),
            t = K(t, 1);
        return {
            dayDates: r,
            dayRanges: o
        }
    }
    function Ja(e) {
        return !1 === e ? null : et(e)
    }
    var $a = wr({
        optionRefiners: {
            listDayFormat: Ja,
            listDaySideFormat: Ja,
            noEventsClassNames: ct,
            noEventsContent: ct,
            noEventsDidMount: ct,
            noEventsWillUnmount: ct
        },
        views: {
            list: {
                component: function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.computeDateVars = Le(Ka),
                        t.eventStoreToSegs = Le(t._eventStoreToSegs),
                        t.setRootEl = function(e) {
                            e ? t.context.registerInteractiveComponent(t, {
                                el: e
                            }) : t.context.unregisterInteractiveComponent(t)
                        }
                        ,
                        t
                    }
                    return za(t, e),
                    t.prototype.render = function() {
                        var e = this
                          , t = this.props
                          , n = this.context
                          , r = ["fc-list", n.theme.getClass("table"), !1 !== n.options.stickyHeaderDates ? "fc-list-sticky" : ""]
                          , o = this.computeDateVars(t.dateProfile)
                          , i = o.dayDates
                          , a = o.dayRanges
                          , s = this.eventStoreToSegs(t.eventStore, t.eventUiBases, a);
                        return m(Nr, {
                            viewSpec: n.viewSpec,
                            elRef: this.setRootEl
                        }, function(n, o) {
                            return m("div", {
                                ref: n,
                                className: r.concat(o).join(" ")
                            }, m(Ko, {
                                liquid: !t.isHeightAuto,
                                overflowX: t.isHeightAuto ? "visible" : "hidden",
                                overflowY: t.isHeightAuto ? "visible" : "auto"
                            }, s.length > 0 ? e.renderSegList(s, i) : e.renderEmptyMessage()))
                        })
                    }
                    ,
                    t.prototype.renderEmptyMessage = function() {
                        var e = this.context
                          , t = e.options
                          , n = e.viewApi
                          , r = {
                            text: t.noEventsText,
                            view: n
                        };
                        return m(Rr, {
                            hookProps: r,
                            classNames: t.noEventsClassNames,
                            content: t.noEventsContent,
                            defaultContent: Xa,
                            didMount: t.noEventsDidMount,
                            willUnmount: t.noEventsWillUnmount
                        }, function(e, t, n, r) {
                            return m("div", {
                                className: ["fc-list-empty"].concat(t).join(" "),
                                ref: e
                            }, m("div", {
                                className: "fc-list-empty-cushion",
                                ref: n
                            }, r))
                        })
                    }
                    ,
                    t.prototype.renderSegList = function(e, t) {
                        var n = this.context
                          , r = n.theme
                          , o = n.options
                          , i = function(e) {
                            var t, n, r = [];
                            for (t = 0; t < e.length; t += 1)
                                n = e[t],
                                (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
                            return r
                        }(e);
                        return m(zo, {
                            unit: "day"
                        }, function(e, n) {
                            for (var a = [], s = 0; s < i.length; s += 1) {
                                var l = i[s];
                                if (l) {
                                    var u = t[s].toISOString();
                                    a.push(m(Fa, {
                                        key: u,
                                        dayDate: t[s],
                                        todayRange: n
                                    }));
                                    for (var c = 0, d = l = Vt(l, o.eventOrder); c < d.length; c++) {
                                        var p = d[c];
                                        a.push(m(qa, Ba({
                                            key: u + ":" + p.eventRange.instance.instanceId,
                                            seg: p,
                                            isDragging: !1,
                                            isResizing: !1,
                                            isDateSelecting: !1,
                                            isSelected: !1
                                        }, Kt(p, n, e))))
                                    }
                                }
                            }
                            return m("table", {
                                className: "fc-list-table " + r.getClass("table")
                            }, m("tbody", null, a))
                        })
                    }
                    ,
                    t.prototype._eventStoreToSegs = function(e, t, n) {
                        return this.eventRangesToSegs(Ut(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n)
                    }
                    ,
                    t.prototype.eventRangesToSegs = function(e, t) {
                        for (var n = [], r = 0, o = e; r < o.length; r++) {
                            var i = o[r];
                            n.push.apply(n, this.eventRangeToSegs(i, t))
                        }
                        return n
                    }
                    ,
                    t.prototype.eventRangeToSegs = function(e, t) {
                        var n, r, o, i = this.context.dateEnv, a = this.context.options.nextDayThreshold, s = e.range, l = e.def.allDay, u = [];
                        for (n = 0; n < t.length; n += 1)
                            if ((r = Ht(s, t[n])) && (o = {
                                component: this,
                                eventRange: e,
                                start: r.start,
                                end: r.end,
                                isStart: e.isStart && r.start.valueOf() === s.start.valueOf(),
                                isEnd: e.isEnd && r.end.valueOf() === s.end.valueOf(),
                                dayIndex: n
                            },
                            u.push(o),
                            !o.isEnd && !l && n + 1 < t.length && s.end < i.add(t[n + 1].start, a))) {
                                o.end = s.end,
                                o.isEnd = !0;
                                break
                            }
                        return u
                    }
                    ,
                    t
                }(Er),
                buttonTextKey: "list",
                listDayFormat: {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            },
            listDay: {
                type: "list",
                duration: {
                    days: 1
                },
                listDayFormat: {
                    weekday: "long"
                }
            },
            listWeek: {
                type: "list",
                duration: {
                    weeks: 1
                },
                listDayFormat: {
                    weekday: "long"
                },
                listDaySideFormat: {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            },
            listMonth: {
                type: "list",
                duration: {
                    month: 1
                },
                listDaySideFormat: {
                    weekday: "long"
                }
            },
            listYear: {
                type: "list",
                duration: {
                    year: 1
                },
                listDaySideFormat: {
                    weekday: "long"
                }
            }
        }
    })
      , Qa = function(e, t) {
        return (Qa = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function es(e, t) {
        function n() {
            this.constructor = e
        }
        Qa(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var ts = function() {
        return (ts = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    Object.create;
    /*!
FullCalendar v5.3.2
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/
    Co.touchMouseIgnoreWait = 500;
    var ns = 0
      , rs = 0
      , os = !1
      , is = function() {
        function e(e) {
            var t = this;
            this.subjectEl = null,
            this.selector = "",
            this.handleSelector = "",
            this.shouldIgnoreMove = !1,
            this.shouldWatchScroll = !0,
            this.isDragging = !1,
            this.isTouchDragging = !1,
            this.wasTouchScroll = !1,
            this.handleMouseDown = function(e) {
                if (!t.shouldIgnoreMouse() && function(e) {
                    return 0 === e.button && !e.ctrlKey
                }(e) && t.tryStart(e)) {
                    var n = t.createEventFromMouse(e, !0);
                    t.emitter.trigger("pointerdown", n),
                    t.initScrollWatch(n),
                    t.shouldIgnoreMove || document.addEventListener("mousemove", t.handleMouseMove),
                    document.addEventListener("mouseup", t.handleMouseUp)
                }
            }
            ,
            this.handleMouseMove = function(e) {
                var n = t.createEventFromMouse(e);
                t.recordCoords(n),
                t.emitter.trigger("pointermove", n)
            }
            ,
            this.handleMouseUp = function(e) {
                document.removeEventListener("mousemove", t.handleMouseMove),
                document.removeEventListener("mouseup", t.handleMouseUp),
                t.emitter.trigger("pointerup", t.createEventFromMouse(e)),
                t.cleanup()
            }
            ,
            this.handleTouchStart = function(e) {
                if (t.tryStart(e)) {
                    t.isTouchDragging = !0;
                    var n = t.createEventFromTouch(e, !0);
                    t.emitter.trigger("pointerdown", n),
                    t.initScrollWatch(n);
                    var r = e.target;
                    t.shouldIgnoreMove || r.addEventListener("touchmove", t.handleTouchMove),
                    r.addEventListener("touchend", t.handleTouchEnd),
                    r.addEventListener("touchcancel", t.handleTouchEnd),
                    window.addEventListener("scroll", t.handleTouchScroll, !0)
                }
            }
            ,
            this.handleTouchMove = function(e) {
                var n = t.createEventFromTouch(e);
                t.recordCoords(n),
                t.emitter.trigger("pointermove", n)
            }
            ,
            this.handleTouchEnd = function(e) {
                if (t.isDragging) {
                    var n = e.target;
                    n.removeEventListener("touchmove", t.handleTouchMove),
                    n.removeEventListener("touchend", t.handleTouchEnd),
                    n.removeEventListener("touchcancel", t.handleTouchEnd),
                    window.removeEventListener("scroll", t.handleTouchScroll, !0),
                    t.emitter.trigger("pointerup", t.createEventFromTouch(e)),
                    t.cleanup(),
                    t.isTouchDragging = !1,
                    ns += 1,
                    setTimeout(function() {
                        ns -= 1
                    }, Co.touchMouseIgnoreWait)
                }
            }
            ,
            this.handleTouchScroll = function() {
                t.wasTouchScroll = !0
            }
            ,
            this.handleScroll = function(e) {
                if (!t.shouldIgnoreMove) {
                    var n = window.pageXOffset - t.prevScrollX + t.prevPageX
                      , r = window.pageYOffset - t.prevScrollY + t.prevPageY;
                    t.emitter.trigger("pointermove", {
                        origEvent: e,
                        isTouch: t.isTouchDragging,
                        subjectEl: t.subjectEl,
                        pageX: n,
                        pageY: r,
                        deltaX: n - t.origPageX,
                        deltaY: r - t.origPageY
                    })
                }
            }
            ,
            this.containerEl = e,
            this.emitter = new Jn,
            e.addEventListener("mousedown", this.handleMouseDown),
            e.addEventListener("touchstart", this.handleTouchStart, {
                passive: !0
            }),
            1 === (rs += 1) && window.addEventListener("touchmove", as, {
                passive: !1
            })
        }
        return e.prototype.destroy = function() {
            this.containerEl.removeEventListener("mousedown", this.handleMouseDown),
            this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
                passive: !0
            }),
            (rs -= 1) || window.removeEventListener("touchmove", as, {
                passive: !1
            })
        }
        ,
        e.prototype.tryStart = function(e) {
            var t = this.querySubjectEl(e)
              , n = e.target;
            return !(!t || this.handleSelector && !T(n, this.handleSelector)) && (this.subjectEl = t,
            this.isDragging = !0,
            this.wasTouchScroll = !1,
            !0)
        }
        ,
        e.prototype.cleanup = function() {
            os = !1,
            this.isDragging = !1,
            this.subjectEl = null,
            this.destroyScrollWatch()
        }
        ,
        e.prototype.querySubjectEl = function(e) {
            return this.selector ? T(e.target, this.selector) : this.containerEl
        }
        ,
        e.prototype.shouldIgnoreMouse = function() {
            return ns || this.isTouchDragging
        }
        ,
        e.prototype.cancelTouchScroll = function() {
            this.isDragging && (os = !0)
        }
        ,
        e.prototype.initScrollWatch = function(e) {
            this.shouldWatchScroll && (this.recordCoords(e),
            window.addEventListener("scroll", this.handleScroll, !0))
        }
        ,
        e.prototype.recordCoords = function(e) {
            this.shouldWatchScroll && (this.prevPageX = e.pageX,
            this.prevPageY = e.pageY,
            this.prevScrollX = window.pageXOffset,
            this.prevScrollY = window.pageYOffset)
        }
        ,
        e.prototype.destroyScrollWatch = function() {
            this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0)
        }
        ,
        e.prototype.createEventFromMouse = function(e, t) {
            var n = 0
              , r = 0;
            return t ? (this.origPageX = e.pageX,
            this.origPageY = e.pageY) : (n = e.pageX - this.origPageX,
            r = e.pageY - this.origPageY),
            {
                origEvent: e,
                isTouch: !1,
                subjectEl: this.subjectEl,
                pageX: e.pageX,
                pageY: e.pageY,
                deltaX: n,
                deltaY: r
            }
        }
        ,
        e.prototype.createEventFromTouch = function(e, t) {
            var n, r, o = e.touches, i = 0, a = 0;
            return o && o.length ? (n = o[0].pageX,
            r = o[0].pageY) : (n = e.pageX,
            r = e.pageY),
            t ? (this.origPageX = n,
            this.origPageY = r) : (i = n - this.origPageX,
            a = r - this.origPageY),
            {
                origEvent: e,
                isTouch: !0,
                subjectEl: this.subjectEl,
                pageX: n,
                pageY: r,
                deltaX: i,
                deltaY: a
            }
        }
        ,
        e
    }();
    function as(e) {
        os && e.preventDefault()
    }
    var ss = function() {
        function e() {
            this.isVisible = !1,
            this.sourceEl = null,
            this.mirrorEl = null,
            this.sourceElRect = null,
            this.parentNode = document.body,
            this.zIndex = 9999,
            this.revertDuration = 0
        }
        return e.prototype.start = function(e, t, n) {
            this.sourceEl = e,
            this.sourceElRect = this.sourceEl.getBoundingClientRect(),
            this.origScreenX = t - window.pageXOffset,
            this.origScreenY = n - window.pageYOffset,
            this.deltaX = 0,
            this.deltaY = 0,
            this.updateElPosition()
        }
        ,
        e.prototype.handleMove = function(e, t) {
            this.deltaX = e - window.pageXOffset - this.origScreenX,
            this.deltaY = t - window.pageYOffset - this.origScreenY,
            this.updateElPosition()
        }
        ,
        e.prototype.setIsVisible = function(e) {
            e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""),
            this.isVisible = e,
            this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"),
            this.isVisible = e)
        }
        ,
        e.prototype.stop = function(e, t) {
            var n = this
              , r = function() {
                n.cleanup(),
                t()
            };
            e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0)
        }
        ,
        e.prototype.doRevertAnimation = function(e, t) {
            var n = this.mirrorEl
              , r = this.sourceEl.getBoundingClientRect();
            n.style.transition = "top " + t + "ms,left " + t + "ms",
            _(n, {
                left: r.left,
                top: r.top
            }),
            function(e, t) {
                var n = function(r) {
                    t(r),
                    O.forEach(function(t) {
                        e.removeEventListener(t, n)
                    })
                };
                O.forEach(function(t) {
                    e.addEventListener(t, n)
                })
            }(n, function() {
                n.style.transition = "",
                e()
            })
        }
        ,
        e.prototype.cleanup = function() {
            this.mirrorEl && (R(this.mirrorEl),
            this.mirrorEl = null),
            this.sourceEl = null
        }
        ,
        e.prototype.updateElPosition = function() {
            this.sourceEl && this.isVisible && _(this.getMirrorEl(), {
                left: this.sourceElRect.left + this.deltaX,
                top: this.sourceElRect.top + this.deltaY
            })
        }
        ,
        e.prototype.getMirrorEl = function() {
            var e = this.sourceElRect
              , t = this.mirrorEl;
            return t || ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),
            t.classList.add("fc-event-dragging"),
            _(t, {
                position: "fixed",
                zIndex: this.zIndex,
                visibility: "",
                boxSizing: "border-box",
                width: e.right - e.left,
                height: e.bottom - e.top,
                right: "auto",
                bottom: "auto",
                margin: 0
            }),
            this.parentNode.appendChild(t)),
            t
        }
        ,
        e
    }()
      , ls = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.handleScroll = function() {
                r.scrollTop = r.scrollController.getScrollTop(),
                r.scrollLeft = r.scrollController.getScrollLeft(),
                r.handleScrollChange()
            }
            ,
            r.scrollController = t,
            r.doesListening = n,
            r.scrollTop = r.origScrollTop = t.getScrollTop(),
            r.scrollLeft = r.origScrollLeft = t.getScrollLeft(),
            r.scrollWidth = t.getScrollWidth(),
            r.scrollHeight = t.getScrollHeight(),
            r.clientWidth = t.getClientWidth(),
            r.clientHeight = t.getClientHeight(),
            r.clientRect = r.computeClientRect(),
            r.doesListening && r.getEventTarget().addEventListener("scroll", r.handleScroll),
            r
        }
        return es(t, e),
        t.prototype.destroy = function() {
            this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll)
        }
        ,
        t.prototype.getScrollTop = function() {
            return this.scrollTop
        }
        ,
        t.prototype.getScrollLeft = function() {
            return this.scrollLeft
        }
        ,
        t.prototype.setScrollTop = function(e) {
            this.scrollController.setScrollTop(e),
            this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0),
            this.handleScrollChange())
        }
        ,
        t.prototype.setScrollLeft = function(e) {
            this.scrollController.setScrollLeft(e),
            this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0),
            this.handleScrollChange())
        }
        ,
        t.prototype.getClientWidth = function() {
            return this.clientWidth
        }
        ,
        t.prototype.getClientHeight = function() {
            return this.clientHeight
        }
        ,
        t.prototype.getScrollWidth = function() {
            return this.scrollWidth
        }
        ,
        t.prototype.getScrollHeight = function() {
            return this.scrollHeight
        }
        ,
        t.prototype.handleScrollChange = function() {}
        ,
        t
    }(Qn)
      , us = function(e) {
        function t(t, n) {
            return e.call(this, new er(t), n) || this
        }
        return es(t, e),
        t.prototype.getEventTarget = function() {
            return this.scrollController.el
        }
        ,
        t.prototype.computeClientRect = function() {
            return Zn(this.scrollController.el)
        }
        ,
        t
    }(ls)
      , cs = function(e) {
        function t(t) {
            return e.call(this, new tr, t) || this
        }
        return es(t, e),
        t.prototype.getEventTarget = function() {
            return window
        }
        ,
        t.prototype.computeClientRect = function() {
            return {
                left: this.scrollLeft,
                right: this.scrollLeft + this.clientWidth,
                top: this.scrollTop,
                bottom: this.scrollTop + this.clientHeight
            }
        }
        ,
        t.prototype.handleScrollChange = function() {
            this.clientRect = this.computeClientRect()
        }
        ,
        t
    }(ls)
      , ds = "function" == typeof performance ? performance.now : Date.now
      , ps = function() {
        function e() {
            var e = this;
            this.isEnabled = !0,
            this.scrollQuery = [window, ".fc-scroller"],
            this.edgeThreshold = 50,
            this.maxVelocity = 300,
            this.pointerScreenX = null,
            this.pointerScreenY = null,
            this.isAnimating = !1,
            this.scrollCaches = null,
            this.everMovedUp = !1,
            this.everMovedDown = !1,
            this.everMovedLeft = !1,
            this.everMovedRight = !1,
            this.animate = function() {
                if (e.isAnimating) {
                    var t = e.computeBestEdge(e.pointerScreenX + window.pageXOffset, e.pointerScreenY + window.pageYOffset);
                    if (t) {
                        var n = ds();
                        e.handleSide(t, (n - e.msSinceRequest) / 1e3),
                        e.requestAnimation(n)
                    } else
                        e.isAnimating = !1
                }
            }
        }
        return e.prototype.start = function(e, t) {
            this.isEnabled && (this.scrollCaches = this.buildCaches(),
            this.pointerScreenX = null,
            this.pointerScreenY = null,
            this.everMovedUp = !1,
            this.everMovedDown = !1,
            this.everMovedLeft = !1,
            this.everMovedRight = !1,
            this.handleMove(e, t))
        }
        ,
        e.prototype.handleMove = function(e, t) {
            if (this.isEnabled) {
                var n = e - window.pageXOffset
                  , r = t - window.pageYOffset
                  , o = null === this.pointerScreenY ? 0 : r - this.pointerScreenY
                  , i = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
                o < 0 ? this.everMovedUp = !0 : o > 0 && (this.everMovedDown = !0),
                i < 0 ? this.everMovedLeft = !0 : i > 0 && (this.everMovedRight = !0),
                this.pointerScreenX = n,
                this.pointerScreenY = r,
                this.isAnimating || (this.isAnimating = !0,
                this.requestAnimation(ds()))
            }
        }
        ,
        e.prototype.stop = function() {
            if (this.isEnabled) {
                this.isAnimating = !1;
                for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                    t[e].destroy()
                }
                this.scrollCaches = null
            }
        }
        ,
        e.prototype.requestAnimation = function(e) {
            this.msSinceRequest = e,
            requestAnimationFrame(this.animate)
        }
        ,
        e.prototype.handleSide = function(e, t) {
            var n = e.scrollCache
              , r = this.edgeThreshold
              , o = r - e.distance
              , i = o * o / (r * r) * this.maxVelocity * t
              , a = 1;
            switch (e.name) {
            case "left":
                a = -1;
            case "right":
                n.setScrollLeft(n.getScrollLeft() + i * a);
                break;
            case "top":
                a = -1;
            case "bottom":
                n.setScrollTop(n.getScrollTop() + i * a)
            }
        }
        ,
        e.prototype.computeBestEdge = function(e, t) {
            for (var n = this.edgeThreshold, r = null, o = 0, i = this.scrollCaches; o < i.length; o++) {
                var a = i[o]
                  , s = a.clientRect
                  , l = e - s.left
                  , u = s.right - e
                  , c = t - s.top
                  , d = s.bottom - t;
                l >= 0 && u >= 0 && c >= 0 && d >= 0 && (c <= n && this.everMovedUp && a.canScrollUp() && (!r || r.distance > c) && (r = {
                    scrollCache: a,
                    name: "top",
                    distance: c
                }),
                d <= n && this.everMovedDown && a.canScrollDown() && (!r || r.distance > d) && (r = {
                    scrollCache: a,
                    name: "bottom",
                    distance: d
                }),
                l <= n && this.everMovedLeft && a.canScrollLeft() && (!r || r.distance > l) && (r = {
                    scrollCache: a,
                    name: "left",
                    distance: l
                }),
                u <= n && this.everMovedRight && a.canScrollRight() && (!r || r.distance > u) && (r = {
                    scrollCache: a,
                    name: "right",
                    distance: u
                }))
            }
            return r
        }
        ,
        e.prototype.buildCaches = function() {
            return this.queryScrollEls().map(function(e) {
                return e === window ? new cs(!1) : new us(e,!1)
            })
        }
        ,
        e.prototype.queryScrollEls = function() {
            for (var e = [], t = 0, n = this.scrollQuery; t < n.length; t++) {
                var r = n[t];
                "object" == typeof r ? e.push(r) : e.push.apply(e, Array.prototype.slice.call(document.querySelectorAll(r)))
            }
            return e
        }
        ,
        e
    }()
      , fs = function(e) {
        function t(t, n) {
            var r = e.call(this, t) || this;
            r.delay = null,
            r.minDistance = 0,
            r.touchScrollAllowed = !0,
            r.mirrorNeedsRevert = !1,
            r.isInteracting = !1,
            r.isDragging = !1,
            r.isDelayEnded = !1,
            r.isDistanceSurpassed = !1,
            r.delayTimeoutId = null,
            r.onPointerDown = function(e) {
                var t;
                r.isDragging || (r.isInteracting = !0,
                r.isDelayEnded = !1,
                r.isDistanceSurpassed = !1,
                (t = document.body).classList.add("fc-unselectable"),
                t.addEventListener("selectstart", I),
                function(e) {
                    e.addEventListener("contextmenu", I)
                }(document.body),
                e.isTouch || e.origEvent.preventDefault(),
                r.emitter.trigger("pointerdown", e),
                r.isInteracting && !r.pointer.shouldIgnoreMove && (r.mirror.setIsVisible(!1),
                r.mirror.start(e.subjectEl, e.pageX, e.pageY),
                r.startDelay(e),
                r.minDistance || r.handleDistanceSurpassed(e)))
            }
            ,
            r.onPointerMove = function(e) {
                if (r.isInteracting) {
                    if (r.emitter.trigger("pointermove", e),
                    !r.isDistanceSurpassed) {
                        var t = r.minDistance
                          , n = e.deltaX
                          , o = e.deltaY;
                        n * n + o * o >= t * t && r.handleDistanceSurpassed(e)
                    }
                    r.isDragging && ("scroll" !== e.origEvent.type && (r.mirror.handleMove(e.pageX, e.pageY),
                    r.autoScroller.handleMove(e.pageX, e.pageY)),
                    r.emitter.trigger("dragmove", e))
                }
            }
            ,
            r.onPointerUp = function(e) {
                var t;
                r.isInteracting && (r.isInteracting = !1,
                (t = document.body).classList.remove("fc-unselectable"),
                t.removeEventListener("selectstart", I),
                function(e) {
                    e.removeEventListener("contextmenu", I)
                }(document.body),
                r.emitter.trigger("pointerup", e),
                r.isDragging && (r.autoScroller.stop(),
                r.tryStopDrag(e)),
                r.delayTimeoutId && (clearTimeout(r.delayTimeoutId),
                r.delayTimeoutId = null))
            }
            ;
            var o = r.pointer = new is(t);
            return o.emitter.on("pointerdown", r.onPointerDown),
            o.emitter.on("pointermove", r.onPointerMove),
            o.emitter.on("pointerup", r.onPointerUp),
            n && (o.selector = n),
            r.mirror = new ss,
            r.autoScroller = new ps,
            r
        }
        return es(t, e),
        t.prototype.destroy = function() {
            this.pointer.destroy(),
            this.onPointerUp({})
        }
        ,
        t.prototype.startDelay = function(e) {
            var t = this;
            "number" == typeof this.delay ? this.delayTimeoutId = setTimeout(function() {
                t.delayTimeoutId = null,
                t.handleDelayEnd(e)
            }, this.delay) : this.handleDelayEnd(e)
        }
        ,
        t.prototype.handleDelayEnd = function(e) {
            this.isDelayEnded = !0,
            this.tryStartDrag(e)
        }
        ,
        t.prototype.handleDistanceSurpassed = function(e) {
            this.isDistanceSurpassed = !0,
            this.tryStartDrag(e)
        }
        ,
        t.prototype.tryStartDrag = function(e) {
            this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0,
            this.mirrorNeedsRevert = !1,
            this.autoScroller.start(e.pageX, e.pageY),
            this.emitter.trigger("dragstart", e),
            !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()))
        }
        ,
        t.prototype.tryStopDrag = function(e) {
            this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
        }
        ,
        t.prototype.stopDrag = function(e) {
            this.isDragging = !1,
            this.emitter.trigger("dragend", e)
        }
        ,
        t.prototype.setIgnoreMove = function(e) {
            this.pointer.shouldIgnoreMove = e
        }
        ,
        t.prototype.setMirrorIsVisible = function(e) {
            this.mirror.setIsVisible(e)
        }
        ,
        t.prototype.setMirrorNeedsRevert = function(e) {
            this.mirrorNeedsRevert = e
        }
        ,
        t.prototype.setAutoScrollEnabled = function(e) {
            this.autoScroller.isEnabled = e
        }
        ,
        t
    }(Do)
      , hs = function() {
        function e(e) {
            this.origRect = Xn(e),
            this.scrollCaches = function(e) {
                for (var t = []; e instanceof HTMLElement; ) {
                    var n = window.getComputedStyle(e);
                    if ("fixed" === n.position)
                        break;
                    /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e),
                    e = e.parentNode
                }
                return t
            }(e).map(function(e) {
                return new us(e,!0)
            })
        }
        return e.prototype.destroy = function() {
            for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                t[e].destroy()
            }
        }
        ,
        e.prototype.computeLeft = function() {
            for (var e = this.origRect.left, t = 0, n = this.scrollCaches; t < n.length; t++) {
                var r = n[t];
                e += r.origScrollLeft - r.getScrollLeft()
            }
            return e
        }
        ,
        e.prototype.computeTop = function() {
            for (var e = this.origRect.top, t = 0, n = this.scrollCaches; t < n.length; t++) {
                var r = n[t];
                e += r.origScrollTop - r.getScrollTop()
            }
            return e
        }
        ,
        e.prototype.isWithinClipping = function(e, t) {
            for (var n, r, o = {
                left: e,
                top: t
            }, i = 0, a = this.scrollCaches; i < a.length; i++) {
                var s = a[i];
                if (n = s.getEventTarget(),
                r = void 0,
                "HTML" !== (r = n.tagName) && "BODY" !== r && !In(o, s.clientRect))
                    return !1
            }
            return !0
        }
        ,
        e
    }();
    var vs = function() {
        function e(e, t) {
            var n = this;
            this.useSubjectCenter = !1,
            this.requireInitial = !0,
            this.initialHit = null,
            this.movingHit = null,
            this.finalHit = null,
            this.handlePointerDown = function(e) {
                var t = n.dragging;
                n.initialHit = null,
                n.movingHit = null,
                n.finalHit = null,
                n.prepareHits(),
                n.processFirstCoord(e),
                n.initialHit || !n.requireInitial ? (t.setIgnoreMove(!1),
                n.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0)
            }
            ,
            this.handleDragStart = function(e) {
                n.emitter.trigger("dragstart", e),
                n.handleMove(e, !0)
            }
            ,
            this.handleDragMove = function(e) {
                n.emitter.trigger("dragmove", e),
                n.handleMove(e)
            }
            ,
            this.handlePointerUp = function(e) {
                n.releaseHits(),
                n.emitter.trigger("pointerup", e)
            }
            ,
            this.handleDragEnd = function(e) {
                n.movingHit && n.emitter.trigger("hitupdate", null, !0, e),
                n.finalHit = n.movingHit,
                n.movingHit = null,
                n.emitter.trigger("dragend", e)
            }
            ,
            this.droppableStore = t,
            e.emitter.on("pointerdown", this.handlePointerDown),
            e.emitter.on("dragstart", this.handleDragStart),
            e.emitter.on("dragmove", this.handleDragMove),
            e.emitter.on("pointerup", this.handlePointerUp),
            e.emitter.on("dragend", this.handleDragEnd),
            this.dragging = e,
            this.emitter = new Jn
        }
        return e.prototype.processFirstCoord = function(e) {
            var t, n, r, o = {
                left: e.pageX,
                top: e.pageY
            }, i = o, a = e.subjectEl;
            a !== document && (t = Xn(a),
            n = i,
            r = t,
            i = {
                left: Math.min(Math.max(n.left, r.left), r.right),
                top: Math.min(Math.max(n.top, r.top), r.bottom)
            });
            var s, l, u, c, d, p = this.initialHit = this.queryHitForOffset(i.left, i.top);
            if (p) {
                if (this.useSubjectCenter && t) {
                    var f = (u = t,
                    c = p.rect,
                    (d = {
                        left: Math.max(u.left, c.left),
                        right: Math.min(u.right, c.right),
                        top: Math.max(u.top, c.top),
                        bottom: Math.min(u.bottom, c.bottom)
                    }).left < d.right && d.top < d.bottom && d);
                    f && (i = function(e) {
                        return {
                            left: (e.left + e.right) / 2,
                            top: (e.top + e.bottom) / 2
                        }
                    }(f))
                }
                this.coordAdjust = (l = o,
                {
                    left: (s = i).left - l.left,
                    top: s.top - l.top
                })
            } else
                this.coordAdjust = {
                    left: 0,
                    top: 0
                }
        }
        ,
        e.prototype.handleMove = function(e, t) {
            var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
            !t && gs(this.movingHit, n) || (this.movingHit = n,
            this.emitter.trigger("hitupdate", n, !1, e))
        }
        ,
        e.prototype.prepareHits = function() {
            this.offsetTrackers = fe(this.droppableStore, function(e) {
                return e.component.prepareHits(),
                new hs(e.el)
            })
        }
        ,
        e.prototype.releaseHits = function() {
            var e = this.offsetTrackers;
            for (var t in e)
                e[t].destroy();
            this.offsetTrackers = {}
        }
        ,
        e.prototype.queryHitForOffset = function(e, t) {
            var n = this.droppableStore
              , r = this.offsetTrackers
              , o = null;
            for (var i in n) {
                var a = n[i].component
                  , s = r[i];
                if (s && s.isWithinClipping(e, t)) {
                    var l = s.computeLeft()
                      , u = s.computeTop()
                      , c = e - l
                      , d = t - u
                      , p = s.origRect
                      , f = p.right - p.left
                      , h = p.bottom - p.top;
                    if (c >= 0 && c < f && d >= 0 && d < h) {
                        var v = a.queryHit(c, d, f, h)
                          , g = a.context.getCurrentData().dateProfile;
                        v && Lt(g.activeRange, v.dateSpan.range) && (!o || v.layer > o.layer) && (v.rect.left += l,
                        v.rect.right += l,
                        v.rect.top += u,
                        v.rect.bottom += u,
                        o = v)
                    }
                }
            }
            return o
        }
        ,
        e
    }();
    function gs(e, t) {
        return !e && !t || Boolean(e) === Boolean(t) && (n = e.dateSpan,
        r = t.dateSpan,
        Ot(n.range, r.range) && n.allDay === r.allDay && function(e, t) {
            for (var n in t)
                if ("range" !== n && "allDay" !== n && e[n] !== t[n])
                    return !1;
            for (var n in e)
                if (!(n in t))
                    return !1;
            return !0
        }(n, r));
        var n, r
    }
    function ms(e, t) {
        for (var n, r, o = {}, i = 0, a = t.pluginHooks.datePointTransforms; i < a.length; i++) {
            var s = a[i];
            ts(o, s(e, t))
        }
        return ts(o, (n = e,
        {
            date: (r = t.dateEnv).toDate(n.range.start),
            dateStr: r.formatIso(n.range.start, {
                omitTime: n.allDay
            }),
            allDay: n.allDay
        })),
        o
    }
    var ys = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.handlePointerDown = function(e) {
                var t = n.dragging
                  , r = e.origEvent.target;
                t.setIgnoreMove(!n.component.isValidDateDownEl(r))
            }
            ,
            n.handleDragEnd = function(e) {
                var t = n.component;
                if (!n.dragging.pointer.wasTouchScroll) {
                    var r = n.hitDragging
                      , o = r.initialHit
                      , i = r.finalHit;
                    if (o && i && gs(o, i)) {
                        var a = t.context
                          , s = ts(ts({}, ms(o.dateSpan, a)), {
                            dayEl: o.dayEl,
                            jsEvent: e.origEvent,
                            view: a.viewApi || a.calendarApi.view
                        });
                        a.emitter.trigger("dateClick", s)
                    }
                }
            }
            ,
            n.dragging = new fs(t.el),
            n.dragging.autoScroller.isEnabled = !1;
            var r = n.hitDragging = new vs(n.dragging,Eo(t));
            return r.emitter.on("pointerdown", n.handlePointerDown),
            r.emitter.on("dragend", n.handleDragEnd),
            n
        }
        return es(t, e),
        t.prototype.destroy = function() {
            this.dragging.destroy()
        }
        ,
        t
    }(So)
      , bs = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.dragSelection = null,
            n.handlePointerDown = function(e) {
                var t = n
                  , r = t.component
                  , o = t.dragging
                  , i = r.context.options.selectable && r.isValidDateDownEl(e.origEvent.target);
                o.setIgnoreMove(!i),
                o.delay = e.isTouch ? function(e) {
                    var t = e.context.options
                      , n = t.selectLongPressDelay;
                    null == n && (n = t.longPressDelay);
                    return n
                }(r) : null
            }
            ,
            n.handleDragStart = function(e) {
                n.component.context.calendarApi.unselect(e)
            }
            ,
            n.handleHitUpdate = function(e, t) {
                var r = n.component.context
                  , o = null
                  , i = !1;
                e && ((o = function(e, t, n) {
                    var r = e.dateSpan
                      , o = t.dateSpan
                      , i = [r.range.start, r.range.end, o.range.start, o.range.end];
                    i.sort(G);
                    for (var a = {}, s = 0, l = n; s < l.length; s++) {
                        var u = (0,
                        l[s])(e, t);
                        if (!1 === u)
                            return null;
                        u && ts(a, u)
                    }
                    return a.range = {
                        start: i[0],
                        end: i[3]
                    },
                    a.allDay = r.allDay,
                    a
                }(n.hitDragging.initialHit, e, r.pluginHooks.dateSelectionTransformers)) && n.component.isDateSelectionValid(o) || (i = !0,
                o = null)),
                o ? r.dispatch({
                    type: "SELECT_DATES",
                    selection: o
                }) : t || r.dispatch({
                    type: "UNSELECT_DATES"
                }),
                i ? W() : U(),
                t || (n.dragSelection = o)
            }
            ,
            n.handlePointerUp = function(e) {
                n.dragSelection && (rn(n.dragSelection, e, n.component.context),
                n.dragSelection = null)
            }
            ;
            var r = t.component.context.options
              , o = n.dragging = new fs(t.el);
            o.touchScrollAllowed = !1,
            o.minDistance = r.selectMinDistance || 0,
            o.autoScroller.isEnabled = r.dragScroll;
            var i = n.hitDragging = new vs(n.dragging,Eo(t));
            return i.emitter.on("pointerdown", n.handlePointerDown),
            i.emitter.on("dragstart", n.handleDragStart),
            i.emitter.on("hitupdate", n.handleHitUpdate),
            i.emitter.on("pointerup", n.handlePointerUp),
            n
        }
        return es(t, e),
        t.prototype.destroy = function() {
            this.dragging.destroy()
        }
        ,
        t
    }(So);
    var Ss = function(e) {
        function t(n) {
            var r = e.call(this, n) || this;
            r.subjectEl = null,
            r.subjectSeg = null,
            r.isDragging = !1,
            r.eventRange = null,
            r.relevantEvents = null,
            r.receivingContext = null,
            r.validMutation = null,
            r.mutatedRelevantEvents = null,
            r.handlePointerDown = function(e) {
                var t = e.origEvent.target
                  , n = r
                  , o = n.component
                  , i = n.dragging
                  , a = i.mirror
                  , s = o.context.options
                  , l = o.context;
                r.subjectEl = e.subjectEl;
                var u = r.subjectSeg = zt(e.subjectEl)
                  , c = (r.eventRange = u.eventRange).instance.instanceId;
                r.relevantEvents = ft(l.getCurrentData().eventStore, c),
                i.minDistance = e.isTouch ? 0 : s.eventDragMinDistance,
                i.delay = e.isTouch && c !== o.props.eventSelection ? function(e) {
                    var t = e.context.options
                      , n = t.eventLongPressDelay;
                    null == n && (n = t.longPressDelay);
                    return n
                }(o) : null,
                s.fixedMirrorParent ? a.parentNode = s.fixedMirrorParent : a.parentNode = T(t, ".fc"),
                a.revertDuration = s.dragRevertDuration;
                var d = o.isValidSegDownEl(t) && !T(t, ".fc-event-resizer");
                i.setIgnoreMove(!d),
                r.isDragging = d && e.subjectEl.classList.contains("fc-event-draggable")
            }
            ,
            r.handleDragStart = function(e) {
                var t = r.component.context
                  , n = r.eventRange
                  , o = n.instance.instanceId;
                e.isTouch ? o !== r.component.props.eventSelection && t.dispatch({
                    type: "SELECT_EVENT",
                    eventInstanceId: o
                }) : t.dispatch({
                    type: "UNSELECT_EVENT"
                }),
                r.isDragging && (t.calendarApi.unselect(e),
                t.emitter.trigger("eventDragStart", {
                    el: r.subjectEl,
                    event: new gn(t,n.def,n.instance),
                    jsEvent: e.origEvent,
                    view: t.viewApi
                }))
            }
            ,
            r.handleHitUpdate = function(e, t) {
                if (r.isDragging) {
                    var n = r.relevantEvents
                      , o = r.hitDragging.initialHit
                      , i = r.component.context
                      , a = null
                      , s = null
                      , l = null
                      , u = !1
                      , c = {
                        affectedEvents: n,
                        mutatedEvents: {
                            defs: {},
                            instances: {}
                        },
                        isEvent: !0
                    };
                    if (e) {
                        var d = e.component
                          , p = (a = d.context).options;
                        i === a || p.editable && p.droppable ? (s = function(e, t, n) {
                            var r = e.dateSpan
                              , o = t.dateSpan
                              , i = r.range.start
                              , a = o.range.start
                              , s = {};
                            r.allDay !== o.allDay && (s.allDay = o.allDay,
                            s.hasEnd = t.component.context.options.allDayMaintainDuration,
                            o.allDay && (i = ee(i)));
                            var l = Pt(i, a, e.component.context.dateEnv, e.component === t.component ? e.component.largeUnit : null);
                            l.milliseconds && (s.allDay = !1);
                            for (var u = {
                                datesDelta: l,
                                standardProps: s
                            }, c = 0, d = n; c < d.length; c++) {
                                (0,
                                d[c])(u, e, t)
                            }
                            return u
                        }(o, e, a.getCurrentData().pluginHooks.eventDragMutationMassagers)) && (l = sn(n, a.getCurrentData().eventUiBases, s, a),
                        c.mutatedEvents = l,
                        d.isInteractionValid(c) || (u = !0,
                        s = null,
                        l = null,
                        c.mutatedEvents = {
                            defs: {},
                            instances: {}
                        })) : a = null
                    }
                    r.displayDrag(a, c),
                    u ? W() : U(),
                    t || (i === a && gs(o, e) && (s = null),
                    r.dragging.setMirrorNeedsRevert(!s),
                    r.dragging.setMirrorIsVisible(!e || !document.querySelector(".fc-event-mirror")),
                    r.receivingContext = a,
                    r.validMutation = s,
                    r.mutatedRelevantEvents = l)
                }
            }
            ,
            r.handlePointerUp = function() {
                r.isDragging || r.cleanup()
            }
            ,
            r.handleDragEnd = function(e) {
                if (r.isDragging) {
                    var t = r.component.context
                      , n = t.viewApi
                      , o = r
                      , i = o.receivingContext
                      , a = o.validMutation
                      , s = r.eventRange.def
                      , l = r.eventRange.instance
                      , u = new gn(t,s,l)
                      , c = r.relevantEvents
                      , d = r.mutatedRelevantEvents
                      , p = r.hitDragging.finalHit;
                    if (r.clearDrag(),
                    t.emitter.trigger("eventDragStop", {
                        el: r.subjectEl,
                        event: u,
                        jsEvent: e.origEvent,
                        view: n
                    }),
                    a) {
                        if (i === t) {
                            var f = new gn(t,d.defs[s.defId],l ? d.instances[l.instanceId] : null);
                            t.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: d
                            });
                            for (var h = {
                                oldEvent: u,
                                event: f,
                                relatedEvents: yn(d, t, l),
                                revert: function() {
                                    t.dispatch({
                                        type: "MERGE_EVENTS",
                                        eventStore: c
                                    })
                                }
                            }, v = {}, g = 0, m = t.getCurrentData().pluginHooks.eventDropTransformers; g < m.length; g++) {
                                var y = m[g];
                                ts(v, y(a, t))
                            }
                            t.emitter.trigger("eventDrop", ts(ts(ts({}, h), v), {
                                el: e.subjectEl,
                                delta: a.datesDelta,
                                jsEvent: e.origEvent,
                                view: n
                            })),
                            t.emitter.trigger("eventChange", h)
                        } else if (i) {
                            var b = {
                                event: u,
                                relatedEvents: yn(c, t, l),
                                revert: function() {
                                    t.dispatch({
                                        type: "MERGE_EVENTS",
                                        eventStore: c
                                    })
                                }
                            };
                            t.emitter.trigger("eventLeave", ts(ts({}, b), {
                                draggedEl: e.subjectEl,
                                view: n
                            })),
                            t.dispatch({
                                type: "REMOVE_EVENTS",
                                eventStore: c
                            }),
                            t.emitter.trigger("eventRemove", b);
                            var S = d.defs[s.defId]
                              , E = d.instances[l.instanceId]
                              , w = new gn(i,S,E);
                            i.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: d
                            });
                            var D = {
                                event: w,
                                relatedEvents: yn(d, i, E),
                                revert: function() {
                                    i.dispatch({
                                        type: "REMOVE_EVENTS",
                                        eventStore: d
                                    })
                                }
                            };
                            i.emitter.trigger("eventAdd", D),
                            e.isTouch && i.dispatch({
                                type: "SELECT_EVENT",
                                eventInstanceId: l.instanceId
                            }),
                            i.emitter.trigger("drop", ts(ts({}, ms(p.dateSpan, i)), {
                                draggedEl: e.subjectEl,
                                jsEvent: e.origEvent,
                                view: p.component.context.viewApi
                            })),
                            i.emitter.trigger("eventReceive", ts(ts({}, D), {
                                draggedEl: e.subjectEl,
                                view: p.component.context.viewApi
                            }))
                        }
                    } else
                        t.emitter.trigger("_noEventDrop")
                }
                r.cleanup()
            }
            ;
            var o = r.component.context.options
              , i = r.dragging = new fs(n.el);
            i.pointer.selector = t.SELECTOR,
            i.touchScrollAllowed = !1,
            i.autoScroller.isEnabled = o.dragScroll;
            var a = r.hitDragging = new vs(r.dragging,wo);
            return a.useSubjectCenter = n.useEventCenter,
            a.emitter.on("pointerdown", r.handlePointerDown),
            a.emitter.on("dragstart", r.handleDragStart),
            a.emitter.on("hitupdate", r.handleHitUpdate),
            a.emitter.on("pointerup", r.handlePointerUp),
            a.emitter.on("dragend", r.handleDragEnd),
            r
        }
        return es(t, e),
        t.prototype.destroy = function() {
            this.dragging.destroy()
        }
        ,
        t.prototype.displayDrag = function(e, t) {
            var n = this.component.context
              , r = this.receivingContext;
            r && r !== e && (r === n ? r.dispatch({
                type: "SET_EVENT_DRAG",
                state: {
                    affectedEvents: t.affectedEvents,
                    mutatedEvents: {
                        defs: {},
                        instances: {}
                    },
                    isEvent: !0
                }
            }) : r.dispatch({
                type: "UNSET_EVENT_DRAG"
            })),
            e && e.dispatch({
                type: "SET_EVENT_DRAG",
                state: t
            })
        }
        ,
        t.prototype.clearDrag = function() {
            var e = this.component.context
              , t = this.receivingContext;
            t && t.dispatch({
                type: "UNSET_EVENT_DRAG"
            }),
            e !== t && e.dispatch({
                type: "UNSET_EVENT_DRAG"
            })
        }
        ,
        t.prototype.cleanup = function() {
            this.subjectSeg = null,
            this.isDragging = !1,
            this.eventRange = null,
            this.relevantEvents = null,
            this.receivingContext = null,
            this.validMutation = null,
            this.mutatedRelevantEvents = null
        }
        ,
        t.SELECTOR = ".fc-event-draggable, .fc-event-resizable",
        t
    }(So);
    var Es = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.draggingSegEl = null,
            n.draggingSeg = null,
            n.eventRange = null,
            n.relevantEvents = null,
            n.validMutation = null,
            n.mutatedRelevantEvents = null,
            n.handlePointerDown = function(e) {
                var t = n.component
                  , r = zt(n.querySegEl(e))
                  , o = n.eventRange = r.eventRange;
                n.dragging.minDistance = t.context.options.eventDragMinDistance,
                n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && n.component.props.eventSelection !== o.instance.instanceId)
            }
            ,
            n.handleDragStart = function(e) {
                var t = n.component.context
                  , r = n.eventRange;
                n.relevantEvents = ft(t.getCurrentData().eventStore, n.eventRange.instance.instanceId);
                var o = n.querySegEl(e);
                n.draggingSegEl = o,
                n.draggingSeg = zt(o),
                t.calendarApi.unselect(),
                t.emitter.trigger("eventResizeStart", {
                    el: o,
                    event: new gn(t,r.def,r.instance),
                    jsEvent: e.origEvent,
                    view: t.viewApi
                })
            }
            ,
            n.handleHitUpdate = function(e, t, r) {
                var o = n.component.context
                  , i = n.relevantEvents
                  , a = n.hitDragging.initialHit
                  , s = n.eventRange.instance
                  , l = null
                  , u = null
                  , c = !1
                  , d = {
                    affectedEvents: i,
                    mutatedEvents: {
                        defs: {},
                        instances: {}
                    },
                    isEvent: !0
                };
                e && (l = function(e, t, n, r, o) {
                    for (var i = e.component.context.dateEnv, a = e.dateSpan.range.start, s = t.dateSpan.range.start, l = Pt(a, s, i, e.component.largeUnit), u = {}, c = 0, d = o; c < d.length; c++) {
                        var p = (0,
                        d[c])(e, t);
                        if (!1 === p)
                            return null;
                        p && ts(u, p)
                    }
                    if (n) {
                        if (i.add(r.start, l) < r.end)
                            return u.startDelta = l,
                            u
                    } else if (i.add(r.end, l) > r.start)
                        return u.endDelta = l,
                        u;
                    return null
                }(a, e, r.subjectEl.classList.contains("fc-event-resizer-start"), s.range, o.pluginHooks.eventResizeJoinTransforms)),
                l && (u = sn(i, o.getCurrentData().eventUiBases, l, o),
                d.mutatedEvents = u,
                n.component.isInteractionValid(d) || (c = !0,
                l = null,
                u = null,
                d.mutatedEvents = null)),
                u ? o.dispatch({
                    type: "SET_EVENT_RESIZE",
                    state: d
                }) : o.dispatch({
                    type: "UNSET_EVENT_RESIZE"
                }),
                c ? W() : U(),
                t || (l && gs(a, e) && (l = null),
                n.validMutation = l,
                n.mutatedRelevantEvents = u)
            }
            ,
            n.handleDragEnd = function(e) {
                var t = n.component.context
                  , r = n.eventRange.def
                  , o = n.eventRange.instance
                  , i = new gn(t,r,o)
                  , a = n.relevantEvents
                  , s = n.mutatedRelevantEvents;
                if (t.emitter.trigger("eventResizeStop", {
                    el: n.draggingSegEl,
                    event: i,
                    jsEvent: e.origEvent,
                    view: t.viewApi
                }),
                n.validMutation) {
                    var l = new gn(t,s.defs[r.defId],o ? s.instances[o.instanceId] : null);
                    t.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: s
                    });
                    var u = {
                        oldEvent: i,
                        event: l,
                        relatedEvents: yn(s, t, o),
                        revert: function() {
                            t.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: a
                            })
                        }
                    };
                    t.emitter.trigger("eventResize", ts(ts({}, u), {
                        el: n.draggingSegEl,
                        startDelta: n.validMutation.startDelta || Re(0),
                        endDelta: n.validMutation.endDelta || Re(0),
                        jsEvent: e.origEvent,
                        view: t.viewApi
                    })),
                    t.emitter.trigger("eventChange", u)
                } else
                    t.emitter.trigger("_noEventResize");
                n.draggingSeg = null,
                n.relevantEvents = null,
                n.validMutation = null
            }
            ;
            var r = t.component
              , o = n.dragging = new fs(t.el);
            o.pointer.selector = ".fc-event-resizer",
            o.touchScrollAllowed = !1,
            o.autoScroller.isEnabled = r.context.options.dragScroll;
            var i = n.hitDragging = new vs(n.dragging,Eo(t));
            return i.emitter.on("pointerdown", n.handlePointerDown),
            i.emitter.on("dragstart", n.handleDragStart),
            i.emitter.on("hitupdate", n.handleHitUpdate),
            i.emitter.on("dragend", n.handleDragEnd),
            n
        }
        return es(t, e),
        t.prototype.destroy = function() {
            this.dragging.destroy()
        }
        ,
        t.prototype.querySegEl = function(e) {
            return T(e.subjectEl, ".fc-event")
        }
        ,
        t
    }(So);
    var ws = function() {
        function e(e) {
            var t = this;
            this.context = e,
            this.isRecentPointerDateSelect = !1,
            this.matchesCancel = !1,
            this.matchesEvent = !1,
            this.onSelect = function(e) {
                e.jsEvent && (t.isRecentPointerDateSelect = !0)
            }
            ,
            this.onDocumentPointerDown = function(e) {
                var n = t.context.options.unselectCancel
                  , r = e.origEvent.target;
                t.matchesCancel = !!T(r, n),
                t.matchesEvent = !!T(r, Ss.SELECTOR)
            }
            ,
            this.onDocumentPointerUp = function(e) {
                var n = t.context
                  , r = t.documentPointer
                  , o = n.getCurrentData();
                if (!r.wasTouchScroll) {
                    if (o.dateSelection && !t.isRecentPointerDateSelect) {
                        var i = n.options.unselectAuto;
                        !i || i && t.matchesCancel || n.calendarApi.unselect(e)
                    }
                    o.eventSelection && !t.matchesEvent && n.dispatch({
                        type: "UNSELECT_EVENT"
                    })
                }
                t.isRecentPointerDateSelect = !1
            }
            ;
            var n = this.documentPointer = new is(document);
            n.shouldIgnoreMove = !0,
            n.shouldWatchScroll = !1,
            n.emitter.on("pointerdown", this.onDocumentPointerDown),
            n.emitter.on("pointerup", this.onDocumentPointerUp),
            e.emitter.on("select", this.onSelect)
        }
        return e.prototype.destroy = function() {
            this.context.emitter.off("select", this.onSelect),
            this.documentPointer.destroy()
        }
        ,
        e
    }()
      , Ds = {
        fixedMirrorParent: ct
    }
      , Cs = {
        dateClick: ct,
        eventDragStart: ct,
        eventDragStop: ct,
        eventDrop: ct,
        eventResizeStart: ct,
        eventResizeStop: ct,
        eventResize: ct,
        drop: ct,
        eventReceive: ct,
        eventLeave: ct
    }
      , Rs = function() {
        function e(e, t) {
            var n = this;
            this.receivingContext = null,
            this.droppableEvent = null,
            this.suppliedDragMeta = null,
            this.dragMeta = null,
            this.handleDragStart = function(e) {
                n.dragMeta = n.buildDragMeta(e.subjectEl)
            }
            ,
            this.handleHitUpdate = function(e, t, r) {
                var o = n.hitDragging.dragging
                  , i = null
                  , a = null
                  , s = !1
                  , l = {
                    affectedEvents: {
                        defs: {},
                        instances: {}
                    },
                    mutatedEvents: {
                        defs: {},
                        instances: {}
                    },
                    isEvent: n.dragMeta.create
                };
                e && (i = e.component.context,
                n.canDropElOnCalendar(r.subjectEl, i) && (a = function(e, t, n) {
                    for (var r = ts({}, t.leftoverProps), o = 0, i = n.pluginHooks.externalDefTransforms; o < i.length; o++) {
                        var a = i[o];
                        ts(r, a(e, t))
                    }
                    var s = Tt(r, n)
                      , l = s.refined
                      , u = s.extra
                      , c = kt(l, u, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n)
                      , d = e.range.start;
                    e.allDay && t.startTime && (d = n.dateEnv.add(d, t.startTime));
                    var p = t.duration ? n.dateEnv.add(d, t.duration) : an(e.allDay, d, n)
                      , f = ue(c.defId, {
                        start: d,
                        end: p
                    });
                    return {
                        def: c,
                        instance: f
                    }
                }(e.dateSpan, n.dragMeta, i),
                l.mutatedEvents = pt(a),
                (s = !hr(l, i)) && (l.mutatedEvents = {
                    defs: {},
                    instances: {}
                },
                a = null))),
                n.displayDrag(i, l),
                o.setMirrorIsVisible(t || !a || !document.querySelector(".fc-event-mirror")),
                s ? W() : U(),
                t || (o.setMirrorNeedsRevert(!a),
                n.receivingContext = i,
                n.droppableEvent = a)
            }
            ,
            this.handleDragEnd = function(e) {
                var t = n
                  , r = t.receivingContext
                  , o = t.droppableEvent;
                if (n.clearDrag(),
                r && o) {
                    var i = n.hitDragging.finalHit
                      , a = i.component.context.viewApi
                      , s = n.dragMeta;
                    if (r.emitter.trigger("drop", ts(ts({}, ms(i.dateSpan, r)), {
                        draggedEl: e.subjectEl,
                        jsEvent: e.origEvent,
                        view: a
                    })),
                    s.create) {
                        var l = pt(o);
                        r.dispatch({
                            type: "MERGE_EVENTS",
                            eventStore: l
                        }),
                        e.isTouch && r.dispatch({
                            type: "SELECT_EVENT",
                            eventInstanceId: o.instance.instanceId
                        }),
                        r.emitter.trigger("eventReceive", {
                            event: new gn(r,o.def,o.instance),
                            relatedEvents: [],
                            revert: function() {
                                r.dispatch({
                                    type: "REMOVE_EVENTS",
                                    eventStore: l
                                })
                            },
                            draggedEl: e.subjectEl,
                            view: a
                        })
                    }
                }
                n.receivingContext = null,
                n.droppableEvent = null
            }
            ;
            var r = this.hitDragging = new vs(e,wo);
            r.requireInitial = !1,
            r.emitter.on("dragstart", this.handleDragStart),
            r.emitter.on("hitupdate", this.handleHitUpdate),
            r.emitter.on("dragend", this.handleDragEnd),
            this.suppliedDragMeta = t
        }
        return e.prototype.buildDragMeta = function(e) {
            return "object" == typeof this.suppliedDragMeta ? To(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? To(this.suppliedDragMeta(e)) : To((t = function(e, t) {
                var n = Co.dataAttrPrefix
                  , r = (n ? n + "-" : "") + t;
                return e.getAttribute("data-" + r) || ""
            }(e, "event")) ? JSON.parse(t) : {
                create: !1
            });
            var t
        }
        ,
        e.prototype.displayDrag = function(e, t) {
            var n = this.receivingContext;
            n && n !== e && n.dispatch({
                type: "UNSET_EVENT_DRAG"
            }),
            e && e.dispatch({
                type: "SET_EVENT_DRAG",
                state: t
            })
        }
        ,
        e.prototype.clearDrag = function() {
            this.receivingContext && this.receivingContext.dispatch({
                type: "UNSET_EVENT_DRAG"
            })
        }
        ,
        e.prototype.canDropElOnCalendar = function(e, t) {
            var n = t.options.dropAccept;
            return "function" == typeof n ? n.call(t.calendarApi, e) : "string" != typeof n || !n || Boolean(x(e, n))
        }
        ,
        e
    }();
    Co.dataAttrPrefix = "";
    var Ts = function() {
        function e(e, t) {
            var n = this;
            void 0 === t && (t = {}),
            this.handlePointerDown = function(e) {
                var t = n.dragging
                  , r = n.settings
                  , o = r.minDistance
                  , i = r.longPressDelay;
                t.minDistance = null != o ? o : e.isTouch ? 0 : nt.eventDragMinDistance,
                t.delay = e.isTouch ? null != i ? i : nt.longPressDelay : 0
            }
            ,
            this.handleDragStart = function(e) {
                e.isTouch && n.dragging.delay && e.subjectEl.classList.contains("fc-event") && n.dragging.mirror.getMirrorEl().classList.add("fc-event-selected")
            }
            ,
            this.settings = t;
            var r = this.dragging = new fs(e);
            r.touchScrollAllowed = !1,
            null != t.itemSelector && (r.pointer.selector = t.itemSelector),
            null != t.appendTo && (r.mirror.parentNode = t.appendTo),
            r.emitter.on("pointerdown", this.handlePointerDown),
            r.emitter.on("dragstart", this.handleDragStart),
            new Rs(r,t.eventData)
        }
        return e.prototype.destroy = function() {
            this.dragging.destroy()
        }
        ,
        e
    }()
      , xs = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.shouldIgnoreMove = !1,
            n.mirrorSelector = "",
            n.currentMirrorEl = null,
            n.handlePointerDown = function(e) {
                n.emitter.trigger("pointerdown", e),
                n.shouldIgnoreMove || n.emitter.trigger("dragstart", e)
            }
            ,
            n.handlePointerMove = function(e) {
                n.shouldIgnoreMove || n.emitter.trigger("dragmove", e)
            }
            ,
            n.handlePointerUp = function(e) {
                n.emitter.trigger("pointerup", e),
                n.shouldIgnoreMove || n.emitter.trigger("dragend", e)
            }
            ;
            var r = n.pointer = new is(t);
            return r.emitter.on("pointerdown", n.handlePointerDown),
            r.emitter.on("pointermove", n.handlePointerMove),
            r.emitter.on("pointerup", n.handlePointerUp),
            n
        }
        return es(t, e),
        t.prototype.destroy = function() {
            this.pointer.destroy()
        }
        ,
        t.prototype.setIgnoreMove = function(e) {
            this.shouldIgnoreMove = e
        }
        ,
        t.prototype.setMirrorIsVisible = function(e) {
            if (e)
                this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "",
                this.currentMirrorEl = null);
            else {
                var t = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
                t && (this.currentMirrorEl = t,
                t.style.visibility = "hidden")
            }
        }
        ,
        t
    }(Do)
      , ks = (function() {
        function e(e, t) {
            var n = document;
            e === document || e instanceof Element ? (n = e,
            t = t || {}) : t = e || {};
            var r = this.dragging = new xs(n);
            "string" == typeof t.itemSelector ? r.pointer.selector = t.itemSelector : n === document && (r.pointer.selector = "[data-event]"),
            "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector),
            new Rs(r,t.eventData)
        }
        e.prototype.destroy = function() {
            this.dragging.destroy()
        }
    }(),
    wr({
        componentInteractions: [ys, bs, Ss, Es],
        calendarInteractions: [ws],
        elementDraggingImpl: fs,
        optionRefiners: Ds,
        listenerRefiners: Cs
    }))
      , Ms = function() {
        function e() {
            this.title = "",
            this.controlHtml = "",
            this.contentHtml = '<div class="demo-calendar"></div>'
        }
        return e.prototype.initSafely = function(e, t, n) {
            var r = this.init(e, t, n);
            r instanceof Ri && (r.render(),
            this.calendar = r)
        }
        ,
        e.prototype.init = function(e, t, n) {}
        ,
        e.prototype.destroy = function() {
            this.calendar && (this.calendar.destroy(),
            this.calendar = null)
        }
        ,
        e
    }()
      , _s = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.title = "Drag-n-Drop Events",
            t.controlHtml = "\n    <p>Drag these onto the calendar:</p>\n    <div class='fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable'>Event 1</div>\n    <div class='fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable'>Event 2</div>\n    <p><a href='/docs/external-dragging' class='more-link'>More info</a></p>\n  ",
            t
        }
        return i.b(t, e),
        t.prototype.init = function(e, t, n) {
            var r = new Ts(e,{
                itemSelector: ".fc-event",
                eventData: function(e) {
                    return {
                        title: e.innerText.trim()
                    }
                }
            })
              , o = new Ri(n,{
                timeZone: "UTC",
                plugins: [ks, na, Ua, $a],
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                },
                navLinks: !0,
                editable: !0,
                dayMaxEvents: !0,
                events: "/demo-events.json?overload-day"
            });
            o.render(),
            this.draggable = r,
            this.calendar = o
        }
        ,
        t.prototype.destroy = function() {
            this.draggable.destroy(),
            this.calendar.destroy()
        }
        ,
        t
    }(Ms)
      , Ps = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.title = "Selectable Dates",
            t.controlHtml = "\n    <p>\n      Click and drag your pointer over some dates.\n      You will be asked to create an event via the API.\n      <a href='/docs/date-clicking-selecting' class='more-link'>Learn more</a>\n    </p>\n  ",
            t
        }
        return i.b(t, e),
        t.prototype.init = function(e, t, n) {
            var r = new Ri(n,{
                timeZone: "UTC",
                plugins: [ks, na, Ua],
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                },
                navLinks: !0,
                dayMaxEvents: !0,
                editable: !0,
                selectable: !0,
                selectMirror: !0,
                select: function(e) {
                    var t = prompt("Create an event from " + e.startStr + " to " + e.endStr + " (excl).\nEnter a title:");
                    (t || e.view.type.match(/^timeGrid/)) && r.unselect(),
                    t && r.addEvent({
                        title: t,
                        start: e.start,
                        end: e.end
                    })
                }
            });
            return r
        }
        ,
        t
    }(Ms)
      , Is = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.title = "Background Events",
            t.controlHtml = "\n    <p>\n      Display <a href='/docs/background-events'>background events</a>.\n    </p>\n    <p>\n      Also, control where events are\n      <a href='/docs/eventOverlap'>allowed to go</a>\n      (the <span style='color:#83ef70'>green areas</span> are prohibited).\n    </p>\n  ",
            t
        }
        return i.b(t, e),
        t.prototype.init = function(e, t, n) {
            var r = (new Date).toISOString().match(/^\d\d\d\d-\d\d/)[0];
            return new Ri(n,{
                plugins: [ks, Ua, na],
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek"
                },
                initialView: "dayGridMonth",
                initialDate: r + "-12",
                businessHours: !0,
                editable: !0,
                events: [{
                    title: "Meeting",
                    start: r + "-03T16:00:00",
                    constraint: "businessHours"
                }, {
                    title: "Meeting",
                    start: r + "-16T09:00:00"
                }, {
                    title: "Conference Call",
                    start: r + "-20T08:00:00"
                }, {
                    title: "Party",
                    start: r + "-29T20:00:00"
                }, {
                    start: r + "-24",
                    end: r + "-28",
                    overlap: !1,
                    display: "background"
                }, {
                    start: r + "-06",
                    end: r + "-08",
                    overlap: !1,
                    display: "background"
                }, {
                    daysOfWeek: [3, 4],
                    startTime: "10:00",
                    endTime: "16:00",
                    overlap: !1,
                    display: "background"
                }]
            })
        }
        ,
        t
    }(Ms)
      , Ns = /^\w+:\/\//
      , Hs = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.title = "Theming",
            t.controlHtml = "\n    <p><label for='theme-select'>Change the theme:</label></p>\n    <p>\n    <select id='theme-select' name='theme'>\n      <option value='fullcalendar'>Default FullCalendar Theme</option>\n      <option value='bootstrap' selected>Default Bootstrap Theme</option>\n      <option value='cerulean'>Cerulean</option>\n      <option value='cosmo'>Cosmo</option>\n      <option value='cyborg'>Cyborg</option>\n      <option value='darkly'>Darkly</option>\n      <option value='flatly'>Flatly</option>\n      <option value='journal'>Journal</option>\n      <option value='litera'>Litera</option>\n      <option value='lumen'>Lumen</option>\n      <option value='lux'>Lux</option>\n      <option value='materia'>Materia</option>\n      <option value='minty'>Minty</option>\n      <option value='pulse'>Pulse</option>\n      <option value='sandstone'>Sandstone</option>\n      <option value='simplex'>Simplex</option>\n      <option value='sketchy'>Sketchy</option>\n      <option value='slate'>Slate</option>\n      <option value='solar'>Solar</option>\n      <option value='spacelab'>Spacelab</option>\n      <option value='superhero'>Superhero</option>\n      <option value='united'>United</option>\n      <option value='yeti'>Yeti</option>\n    </select>\n    </p>\n    <p><a href='/docs/theming' class='more-link'>More info</a></p>\n  ",
            t.contentHtml = "\n    <iframe src='about:blank' class='demos__main-iframe'></iframe>\n  ",
            t
        }
        return i.b(t, e),
        t.prototype.init = function(e, t) {
            var n = t.querySelector("iframe")
              , r = n.contentWindow.document;
            r.open(),
            r.write("\n<!DOCTYPE html>\n<head>\n<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />\n<script>isCalendarThemeRender = true<\/script>\n" + o('link[rel="stylesheet"]').map(function(e) {
                return e.getAttribute("href")
            }).map(function(e) {
                return '<link rel="stylesheet" href="' + e + '" />'
            }).join("\n") + "\n" + o("script[src]").map(function(e) {
                return e.getAttribute("src")
            }).filter(Os).map(function(e) {
                return '<script src="' + e + '"><\/script>'
            }).join("\n") + "\n<style>\nbody, html { margin: 0; padding: 0; overflow: hidden }\n</style>\n</head>\n<body>\n<div id='calendar' class='demo-calendar'></div>\n</body>\n</html>\n"),
            r.close(),
            r.addEventListener("DOMContentLoaded", a);
            var i = e.querySelector('select[name="theme"]');
            function a() {
                var e, t, r = i.value;
                "fullcalendar" === r ? (e = "standard",
                t = "") : (e = "bootstrap",
                t = "bootstrap" === r ? "" : r),
                n.contentWindow.renderCalendarTheme(e, t)
            }
            i.addEventListener("change", a)
        }
        ,
        t
    }(Ms);
    function Os(e) {
        return !Ns.test(e)
    }
    var As = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.title = "Time Zones",
            t.controlHtml = "\n    <p>\n      <label for='time-zone-select'>\n        Select a different time zone:\n      </label>\n    </p>\n    <p>\n      <select>\n        <option value='UTC'>UTC</option>\n      </select>\n    </p>\n    <p><a href='/docs/timeZone' class='more-link'>More info</a></p>\n  ",
            t
        }
        return i.b(t, e),
        t.prototype.init = function(e, t, n) {
            var r = e.querySelector("select")
              , o = new Ri(n,{
                plugins: [ks, na, Ua, $a],
                initialView: "timeGridWeek",
                timeZone: "Europe/Luxembourg",
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                },
                navLinks: !0,
                editable: !0,
                selectable: !0,
                dayMaxEvents: !0,
                events: "/demo-events.json",
                loading: function(e) {},
                eventTimeFormat: {
                    hour: "numeric",
                    minute: "2-digit",
                    timeZoneName: "short"
                }
            });
            return eo("GET", "/demo-timezones.json", {}, function(e) {
                e.forEach(function(e) {
                    if ("UTC" !== e) {
                        var t = document.createElement("option");
                        t.value = e,
                        t.innerText = e,
                        r.appendChild(t),
                        r.value = "Europe/Luxembourg"
                    }
                })
            }, function() {}),
            r.addEventListener("change", function() {
                o.setOption("timeZone", this.value)
            }),
            o
        }
        ,
        t
    }(Ms)
      , Ls = n(7)
      , Ws = n.n(Ls)
      , Us = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.title = "Locales",
            t.controlHtml = "\n    <p>\n      <label for='locale-select'>\n        Select a new locale:\n      </lable>\n    </p>\n    <p><select id='locale-select'></select></p>\n    <p><a href='/docs/localization' class='more-link'>More info</a></p>\n  ",
            t
        }
        return i.b(t, e),
        t.prototype.init = function(e, t, n) {
            var r = e.querySelector("select")
              , o = new Ri(n,{
                plugins: [ks, na, Ua, $a],
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                },
                locales: Ws.a,
                locale: "bg",
                buttonIcons: !1,
                weekNumbers: !0,
                navLinks: !0,
                editable: !0,
                dayMaxEvents: !0,
                events: "/demo-events.json?overload-day"
            });
            return o.getAvailableLocaleCodes().forEach(function(e) {
                var t = document.createElement("option");
                t.value = e,
                t.selected = "bg" == e,
                t.innerText = e,
                r.appendChild(t)
            }),
            r.addEventListener("change", function() {
                this.value && o.setOption("locale", this.value)
            }),
            o
        }
        ,
        t
    }(Ms)
      , js = (n(18),
    "2020-11-12")
      , zs = 372
      , Bs = "http://fullcalendar.io/docs/schedulerLicenseKey#invalid"
      , Fs = "http://fullcalendar.io/docs/schedulerLicenseKey#outdated"
      , Vs = ["GPL-My-Project-Is-Open-Source", "CC-Attribution-NonCommercial-NoDerivatives"]
      , Gs = {
        position: "absolute",
        zIndex: 99999,
        bottom: "1px",
        left: "1px",
        background: "#eee",
        borderColor: "#ddd",
        borderStyle: "solid",
        borderWidth: "1px 1px 0 0",
        padding: "2px 4px",
        fontSize: "12px",
        borderTopRightRadius: "3px"
    };
    var qs = wr({
        optionRefiners: {
            schedulerLicenseKey: String
        },
        viewContainerAppends: [function(e) {
            var t, n = e.options.schedulerLicenseKey;
            if (t = window.location.href,
            !/\w+:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(t)) {
                var r = function(e) {
                    if (-1 !== Vs.indexOf(e))
                        return "valid";
                    var t = (e || "").match(/^(\d+)-fcs-(\d+)$/);
                    if (t && 10 === t[1].length) {
                        var n = new Date(1e3 * parseInt(t[2], 10))
                          , r = new Date(Co.mockSchedulerReleaseDate || js);
                        if (se(r))
                            return K(r, -zs) < n ? "valid" : "outdated"
                    }
                    return "invalid"
                }(n);
                if ("valid" !== r)
                    return m("div", {
                        className: "fc-license-message",
                        style: Gs
                    }, "outdated" === r ? m(S, null, "Your license key is too old to work with this version. ", m("a", {
                        href: Fs
                    }, "More Info")) : m(S, null, "Your license key is invalid. ", m("a", {
                        href: Bs
                    }, "More Info")))
            }
            return null
        }
        ]
    })
      , Ys = (n(19),
    function(e, t) {
        return (Ys = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    }
    );
    function Zs(e, t) {
        function n() {
            this.constructor = e
        }
        Ys(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var Xs = function() {
        return (Xs = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    Object.create;
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var Ks = function(e, t) {
        return (Ks = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function Js(e, t) {
        function n() {
            this.constructor = e
        }
        Ks(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var $s = function() {
        return ($s = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    function Qs() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , o = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
            o++)
                r[o] = i[a];
        return r
    }
    Object.create;
    /*!
FullCalendar Scheduler v5.3.2
Docs & License: https://fullcalendar.io/scheduler
(c) 2020 Adam Shaw
*/
    var el, tl = "wheel mousewheel DomMouseScroll MozMousePixelScroll".split(" "), nl = function() {
        function e(e) {
            var t = this;
            this.el = e,
            this.emitter = new Jn,
            this.isScrolling = !1,
            this.isTouching = !1,
            this.isRecentlyWheeled = !1,
            this.isRecentlyScrolled = !1,
            this.wheelWaiter = new ao(this._handleWheelWaited.bind(this)),
            this.scrollWaiter = new ao(this._handleScrollWaited.bind(this)),
            this.handleScroll = function() {
                t.startScroll(),
                t.emitter.trigger("scroll", t.isRecentlyWheeled, t.isTouching),
                t.isRecentlyScrolled = !0,
                t.scrollWaiter.request(500)
            }
            ,
            this.handleWheel = function() {
                t.isRecentlyWheeled = !0,
                t.wheelWaiter.request(500)
            }
            ,
            this.handleTouchStart = function() {
                t.isTouching = !0
            }
            ,
            this.handleTouchEnd = function() {
                t.isTouching = !1,
                t.isRecentlyScrolled || t.endScroll()
            }
            ,
            e.addEventListener("scroll", this.handleScroll),
            e.addEventListener("touchstart", this.handleTouchStart, {
                passive: !0
            }),
            e.addEventListener("touchend", this.handleTouchEnd);
            for (var n = 0, r = tl; n < r.length; n++) {
                var o = r[n];
                e.addEventListener(o, this.handleWheel)
            }
        }
        return e.prototype.destroy = function() {
            var e = this.el;
            e.removeEventListener("scroll", this.handleScroll),
            e.removeEventListener("touchstart", this.handleTouchStart, {
                passive: !0
            }),
            e.removeEventListener("touchend", this.handleTouchEnd);
            for (var t = 0, n = tl; t < n.length; t++) {
                var r = n[t];
                e.removeEventListener(r, this.handleWheel)
            }
        }
        ,
        e.prototype.startScroll = function() {
            this.isScrolling || (this.isScrolling = !0,
            this.emitter.trigger("scrollStart", this.isRecentlyWheeled, this.isTouching))
        }
        ,
        e.prototype.endScroll = function() {
            this.isScrolling && (this.emitter.trigger("scrollEnd"),
            this.isScrolling = !1,
            this.isRecentlyScrolled = !0,
            this.isRecentlyWheeled = !1,
            this.scrollWaiter.clear(),
            this.wheelWaiter.clear())
        }
        ,
        e.prototype._handleScrollWaited = function() {
            this.isRecentlyScrolled = !1,
            this.isTouching || this.endScroll()
        }
        ,
        e.prototype._handleWheelWaited = function() {
            this.isRecentlyWheeled = !1
        }
        ,
        e
    }();
    function rl(e) {
        var t = e.scrollLeft;
        if ("rtl" === window.getComputedStyle(e).direction)
            switch (il()) {
            case "negative":
                t = e.scrollWidth - e.clientWidth + t;
                break;
            case "reverse":
                t = e.scrollWidth - e.clientWidth - t
            }
        return t
    }
    function ol(e, t) {
        if ("rtl" === window.getComputedStyle(e).direction)
            switch (il()) {
            case "positive":
                t = e.scrollWidth - e.clientWidth + t;
                break;
            case "reverse":
                t = -t
            }
        e.scrollLeft = t
    }
    function il() {
        return el || (el = function() {
            var e, t = document.createElement("div");
            t.style.position = "absolute",
            t.style.top = "-1000px",
            t.style.width = "1px",
            t.style.height = "1px",
            t.style.overflow = "scroll",
            t.style.direction = "rtl",
            t.style.fontSize = "100px",
            t.innerHTML = "A",
            document.body.appendChild(t),
            t.scrollLeft > 0 ? e = "positive" : (t.scrollLeft = 1,
            e = t.scrollLeft > 0 ? "reverse" : "negative");
            return R(t),
            e
        }())
    }
    var al = /Edge/.test(navigator.userAgent)
      , sl = ".fc-sticky"
      , ll = function() {
        function e(e, t) {
            var n = this;
            this.scrollEl = e,
            this.isRtl = t,
            this.usingRelative = null,
            this.updateSize = function() {
                var e = n.scrollEl
                  , t = k(e, sl)
                  , r = n.queryElGeoms(t)
                  , o = e.clientWidth
                  , i = e.clientHeight;
                n.usingRelative ? function(e, t, n, r, o) {
                    e.forEach(function(e, i) {
                        var a, s, l = t[i], u = l.naturalBound, c = l.parentBound, d = c.right - c.left, p = c.bottom - c.bottom;
                        d > r || p > o ? (a = n[i].left - u.left,
                        s = n[i].top - u.top) : (a = "",
                        s = ""),
                        _(e, {
                            position: "relative",
                            left: a,
                            right: -a,
                            top: s
                        })
                    })
                }(t, r, n.computeElDestinations(r, o), o, i) : function(e, t, n) {
                    e.forEach(function(e, r) {
                        var o, i = t[r], a = i.textAlign, s = i.elWidth, l = i.parentBound, u = l.right - l.left;
                        _(e, {
                            left: o = "center" === a && u > n ? (n - s) / 2 : "",
                            right: o,
                            top: 0
                        })
                    })
                }(t, r, o)
            }
            ,
            this.usingRelative = !function() {
                var e = document.createElement("div");
                e.className = "fc-sticky",
                document.body.appendChild(e);
                var t = window.getComputedStyle(e).position;
                if (R(e),
                -1 !== t.indexOf("sticky"))
                    return t;
                return null
            }() || al && t,
            this.usingRelative && (this.listener = new nl(e),
            this.listener.emitter.on("scrollEnd", this.updateSize))
        }
        return e.prototype.destroy = function() {
            this.listener && this.listener.destroy()
        }
        ,
        e.prototype.queryElGeoms = function(e) {
            for (var t = this.scrollEl, n = this.isRtl, r = function(e) {
                var t = e.getBoundingClientRect()
                  , n = Yn(e);
                return {
                    left: t.left + n.borderLeft + n.scrollbarLeft - rl(e),
                    top: t.top + n.borderTop - e.scrollTop
                }
            }(t), o = [], i = 0, a = e; i < a.length; i++) {
                var s = a[i]
                  , l = Nn(Zn(s.parentNode, !0, !0), -r.left, -r.top)
                  , u = s.getBoundingClientRect()
                  , c = window.getComputedStyle(s)
                  , d = window.getComputedStyle(s.parentNode).textAlign
                  , p = null;
                "start" === d ? d = n ? "right" : "left" : "end" === d && (d = n ? "left" : "right"),
                "sticky" !== c.position && (p = Nn(u, -r.left - (parseFloat(c.left) || 0), -r.top - (parseFloat(c.top) || 0))),
                o.push({
                    parentBound: l,
                    naturalBound: p,
                    elWidth: u.width,
                    elHeight: u.height,
                    textAlign: d
                })
            }
            return o
        }
        ,
        e.prototype.computeElDestinations = function(e, t) {
            var n = this.scrollEl
              , r = n.scrollTop
              , o = rl(n)
              , i = o + t;
            return e.map(function(e) {
                var t, n, a = e.elWidth, s = e.elHeight, l = e.parentBound, u = e.naturalBound;
                switch (e.textAlign) {
                case "left":
                    t = o;
                    break;
                case "right":
                    t = i - a;
                    break;
                case "center":
                    t = (o + i) / 2 - a / 2
                }
                return t = Math.min(t, l.right - a),
                t = Math.max(t, l.left),
                n = r,
                n = Math.min(n, l.bottom - s),
                {
                    left: t,
                    top: n = Math.max(n, u.top)
                }
            })
        }
        ,
        e
    }();
    var ul = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.elRef = b(),
            t.state = {
                xScrollbarWidth: Gn().x,
                yScrollbarWidth: Gn().y
            },
            t.handleScroller = function(e) {
                t.scroller = e,
                cr(t.props.scrollerRef, e)
            }
            ,
            t.handleSizing = function() {
                var e = t.props;
                "scroll-hidden" === e.overflowY && t.setState({
                    yScrollbarWidth: t.scroller.getYScrollbarWidth()
                }),
                "scroll-hidden" === e.overflowX && t.setState({
                    xScrollbarWidth: t.scroller.getXScrollbarWidth()
                })
            }
            ,
            t
        }
        return Js(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.state
              , n = this.context.isRtl && Vn()
              , r = 0
              , o = 0
              , i = 0;
            return "scroll-hidden" === e.overflowX && (i = t.xScrollbarWidth),
            "scroll-hidden" === e.overflowY && null != t.yScrollbarWidth && (n ? r = t.yScrollbarWidth : o = t.yScrollbarWidth),
            m("div", {
                ref: this.elRef,
                className: "fc-scroller-harness" + (e.liquid ? " fc-scroller-harness-liquid" : "")
            }, m(Ko, {
                ref: this.handleScroller,
                elRef: this.props.scrollerElRef,
                overflowX: "scroll-hidden" === e.overflowX ? "scroll" : e.overflowX,
                overflowY: "scroll-hidden" === e.overflowY ? "scroll" : e.overflowY,
                overcomeLeft: r,
                overcomeRight: o,
                overcomeBottom: i,
                maxHeight: "number" == typeof e.maxHeight ? e.maxHeight + ("scroll-hidden" === e.overflowX ? t.xScrollbarWidth : 0) : "",
                liquid: e.liquid,
                liquidIsAbsolute: !0
            }, e.children))
        }
        ,
        t.prototype.componentDidMount = function() {
            this.handleSizing(),
            this.context.addResizeHandler(this.handleSizing)
        }
        ,
        t.prototype.componentDidUpdate = function(e) {
            ge(e, this.props) || this.handleSizing()
        }
        ,
        t.prototype.componentWillUnmount = function() {
            this.context.removeResizeHandler(this.handleSizing)
        }
        ,
        t.prototype.needsXScrolling = function() {
            return this.scroller.needsXScrolling()
        }
        ,
        t.prototype.needsYScrolling = function() {
            return this.scroller.needsYScrolling()
        }
        ,
        t
    }(sr)
      , cl = function() {
        function e(e, t) {
            var n = this;
            this.isVertical = e,
            this.scrollEls = t,
            this.isPaused = !1,
            this.scrollListeners = t.map(function(e) {
                return n.bindScroller(e)
            })
        }
        return e.prototype.destroy = function() {
            for (var e = 0, t = this.scrollListeners; e < t.length; e++) {
                t[e].destroy()
            }
        }
        ,
        e.prototype.bindScroller = function(e) {
            var t = this
              , n = this.scrollEls
              , r = this.isVertical
              , o = new nl(e);
            return o.emitter.on("scroll", function(o, i) {
                if (!t.isPaused && ((!t.masterEl || t.masterEl !== e && (o || i)) && t.assignMaster(e),
                t.masterEl === e))
                    for (var a = 0, s = n; a < s.length; a++) {
                        var l = s[a];
                        l !== e && (r ? l.scrollTop = e.scrollTop : l.scrollLeft = e.scrollLeft)
                    }
            }),
            o.emitter.on("scrollEnd", function() {
                t.masterEl === e && (t.masterEl = null)
            }),
            o
        }
        ,
        e.prototype.assignMaster = function(e) {
            this.masterEl = e;
            for (var t = 0, n = this.scrollListeners; t < n.length; t++) {
                var r = n[t];
                r.el !== e && r.endScroll()
            }
        }
        ,
        e.prototype.forceScrollLeft = function(e) {
            this.isPaused = !0;
            for (var t = 0, n = this.scrollListeners; t < n.length; t++) {
                ol(n[t].el, e)
            }
            this.isPaused = !1
        }
        ,
        e.prototype.forceScrollTop = function(e) {
            this.isPaused = !0;
            for (var t = 0, n = this.scrollListeners; t < n.length; t++) {
                n[t].el.scrollTop = e
            }
            this.isPaused = !1
        }
        ,
        e
    }()
      , dl = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.compileColGroupStats = Ue(vl, yl),
            t.renderMicroColGroups = Ue(ri),
            t.clippedScrollerRefs = new Jo,
            t.scrollerElRefs = new Jo(t._handleScrollerEl.bind(t)),
            t.chunkElRefs = new Jo(t._handleChunkEl.bind(t)),
            t.getStickyScrolling = Ue(El, null, wl),
            t.getScrollSyncersBySection = je(bl.bind(t, !0), null, Sl),
            t.getScrollSyncersByColumn = je(bl.bind(t, !1), null, Sl),
            t.stickyScrollings = [],
            t.scrollSyncersBySection = {},
            t.scrollSyncersByColumn = {},
            t.rowUnstableMap = new Map,
            t.rowInnerMaxHeightMap = new Map,
            t.anyRowHeightsChanged = !1,
            t.state = {
                shrinkWidths: [],
                forceYScrollbars: !1,
                forceXScrollbars: !1,
                scrollerClientWidths: {},
                scrollerClientHeights: {},
                sectionRowMaxHeights: []
            },
            t.handleSizing = function(e, n) {
                n || (t.anyRowHeightsChanged = !0);
                var r = {};
                (e || !n && !t.rowUnstableMap.size) && (r.sectionRowMaxHeights = t.computeSectionRowMaxHeights()),
                t.setState($s($s({
                    shrinkWidths: t.computeShrinkWidths()
                }, t.computeScrollerDims()), r), function() {
                    t.rowUnstableMap.size || t.updateStickyScrolling()
                })
            }
            ,
            t.handleRowHeightChange = function(e, n) {
                var r = t
                  , o = r.rowUnstableMap
                  , i = r.rowInnerMaxHeightMap;
                if (n) {
                    o.delete(e);
                    var a = fl(e);
                    i.has(e) && i.get(e) === a || (i.set(e, a),
                    t.anyRowHeightsChanged = !0),
                    !o.size && t.anyRowHeightsChanged && (t.anyRowHeightsChanged = !1,
                    t.setState({
                        sectionRowMaxHeights: t.computeSectionRowMaxHeights()
                    }))
                } else
                    o.set(e, !0)
            }
            ,
            t
        }
        return Js(t, e),
        t.prototype.render = function() {
            for (var e, t = this.props, n = this.state, r = this.context, o = n.shrinkWidths, i = this.compileColGroupStats(t.colGroups.map(function(e) {
                return [e]
            })), a = this.renderMicroColGroups(i.map(function(e, t) {
                return [e.cols, o[t]]
            })), s = ai(t.liquid, r), l = this.getDims(), u = (l[0],
            l[1],
            t.sections), c = u.length, d = 0, p = [], f = [], h = []; d < c && "header" === (e = u[d]).type; )
                p.push(this.renderSection(e, d, i, a, n.sectionRowMaxHeights)),
                d += 1;
            for (; d < c && "body" === (e = u[d]).type; )
                f.push(this.renderSection(e, d, i, a, n.sectionRowMaxHeights)),
                d += 1;
            for (; d < c && "footer" === (e = u[d]).type; )
                h.push(this.renderSection(e, d, i, a, n.sectionRowMaxHeights)),
                d += 1;
            var v = !Hn();
            return m("table", {
                ref: t.elRef,
                className: s.join(" ")
            }, function(e, t) {
                var n = e.map(function(e, n) {
                    var r = e.width;
                    return "shrink" === r && (r = e.totalColWidth + oi(t[n]) + 1),
                    m("col", {
                        style: {
                            width: r
                        }
                    })
                });
                return m.apply(void 0, Qs(["colgroup", {}], n))
            }(i, o), Boolean(!v && p.length) && m.apply(void 0, Qs(["thead", {}], p)), Boolean(!v && f.length) && m.apply(void 0, Qs(["tbody", {}], f)), Boolean(!v && h.length) && m.apply(void 0, Qs(["tfoot", {}], h)), v && m.apply(void 0, Qs(["tbody", {}], p, f, h)))
        }
        ,
        t.prototype.renderSection = function(e, t, n, r, o) {
            var i = this;
            return "outerContent"in e ? m(S, {
                key: e.key
            }, e.outerContent) : m("tr", {
                key: e.key,
                className: si(e, this.props.liquid).join(" ")
            }, e.chunks.map(function(a, s) {
                return i.renderChunk(e, t, n[s], r[s], a, s, (o[t] || [])[s] || [])
            }))
        }
        ,
        t.prototype.renderChunk = function(e, t, n, r, o, i, a) {
            if ("outerContent"in o)
                return m(S, {
                    key: o.key
                }, o.outerContent);
            var s = this.state
              , l = s.scrollerClientWidths
              , u = s.scrollerClientHeights
              , c = this.getDims()
              , d = c[0]
              , p = c[1]
              , f = t * p + i
              , h = i === (!this.context.isRtl || Vn() ? p - 1 : 0)
              , v = t === d - 1
              , g = v && s.forceXScrollbars
              , y = h && s.forceYScrollbars
              , b = n && n.allowXScrolling
              , E = ei(this.props, e)
              , w = Qo(this.props, e)
              , D = e.expandRows && w
              , C = ti(e, o, {
                tableColGroupNode: r,
                tableMinWidth: n && n.totalColMinWidth || "",
                clientWidth: void 0 !== l[f] ? l[f] : null,
                clientHeight: void 0 !== u[f] ? u[f] : null,
                expandRows: D,
                syncRowHeights: Boolean(e.syncRowHeights),
                rowSyncHeights: a,
                reportRowHeightChange: this.handleRowHeightChange
            })
              , R = g ? v ? "scroll" : "scroll-hidden" : b ? v ? "auto" : "scroll-hidden" : "hidden"
              , T = y ? h ? "scroll" : "scroll-hidden" : E ? h ? "auto" : "scroll-hidden" : "hidden";
            return C = m(ul, {
                ref: this.clippedScrollerRefs.createRef(f),
                scrollerElRef: this.scrollerElRefs.createRef(f),
                overflowX: R,
                overflowY: T,
                liquid: w,
                maxHeight: e.maxHeight
            }, C),
            m("td", {
                key: o.key,
                ref: this.chunkElRefs.createRef(f)
            }, C)
        }
        ,
        t.prototype.componentDidMount = function() {
            this.updateScrollSyncers(),
            this.handleSizing(!1),
            this.context.addResizeHandler(this.handleSizing)
        }
        ,
        t.prototype.componentDidUpdate = function(e, t) {
            this.updateScrollSyncers(),
            this.handleSizing(!1, t.sectionRowMaxHeights !== this.state.sectionRowMaxHeights)
        }
        ,
        t.prototype.componentWillUnmount = function() {
            this.context.removeResizeHandler(this.handleSizing),
            this.destroyStickyScrolling(),
            this.destroyScrollSyncers()
        }
        ,
        t.prototype.computeShrinkWidths = function() {
            var e = this
              , t = this.compileColGroupStats(this.props.colGroups.map(function(e) {
                return [e]
            }))
              , n = this.getDims()
              , r = n[0]
              , o = n[1]
              , i = r * o
              , a = [];
            return t.forEach(function(t, n) {
                if (t.hasShrinkCol) {
                    var r = e.chunkElRefs.collect(n, i, o);
                    a[n] = $o(r)
                }
            }),
            a
        }
        ,
        t.prototype.computeSectionRowMaxHeights = function() {
            for (var e = new Map, t = this.getDims(), n = t[0], r = t[1], o = [], i = 0; i < n; i += 1) {
                var a = this.props.sections[i]
                  , s = [];
                if (a && a.syncRowHeights) {
                    for (var l = [], u = 0; u < r; u += 1) {
                        var c = i * r + u
                          , d = []
                          , p = this.chunkElRefs.currentMap[c];
                        d = p ? k(p, ".fc-scrollgrid-sync-table tr").map(function(t) {
                            var n = fl(t);
                            return e.set(t, n),
                            n
                        }) : [],
                        l.push(d)
                    }
                    var f = l[0].length
                      , h = !0;
                    for (u = 1; u < r; u += 1) {
                        if (!(a.chunks[u] && void 0 !== a.chunks[u].outerContent) && l[u].length !== f) {
                            h = !1;
                            break
                        }
                    }
                    if (h) {
                        for (u = 0; u < r; u += 1)
                            s.push([]);
                        for (S = 0; S < f; S += 1) {
                            var v = [];
                            for (u = 0; u < r; u += 1) {
                                var g = l[u][S];
                                null != g && v.push(g)
                            }
                            var m = Math.max.apply(Math, v);
                            for (u = 0; u < r; u += 1)
                                s[u].push(m)
                        }
                    } else {
                        for (var y = [], u = 0; u < r; u += 1)
                            y.push(pl(l[u]) + l[u].length);
                        for (var b = Math.max.apply(Math, y), u = 0; u < r; u += 1) {
                            var S, E = l[u].length, w = b - E, D = Math.floor(w / E), C = w - D * (E - 1), R = [];
                            for ((S = 0) < E && (R.push(C),
                            S += 1); S < E; )
                                R.push(D),
                                S += 1;
                            s.push(R)
                        }
                    }
                }
                o.push(s)
            }
            return this.rowInnerMaxHeightMap = e,
            o
        }
        ,
        t.prototype.computeScrollerDims = function() {
            for (var e = Gn(), t = this.getDims(), n = t[0], r = t[1], o = !this.context.isRtl || Vn() ? r - 1 : 0, i = n - 1, a = this.clippedScrollerRefs.currentMap, s = this.scrollerElRefs.currentMap, l = !1, u = !1, c = {}, d = {}, p = 0; p < n; p += 1) {
                if ((h = a[v = p * r + o]) && h.needsYScrolling()) {
                    l = !0;
                    break
                }
            }
            for (var f = 0; f < r; f += 1) {
                var h;
                if ((h = a[v = i * r + f]) && h.needsXScrolling()) {
                    u = !0;
                    break
                }
            }
            for (p = 0; p < n; p += 1)
                for (f = 0; f < r; f += 1) {
                    var v, g = s[v = p * r + f];
                    if (g) {
                        var m = g.parentNode;
                        c[v] = Math.floor(m.getBoundingClientRect().width - (f === o && l ? e.y : 0)),
                        d[v] = Math.floor(m.getBoundingClientRect().height - (p === i && u ? e.x : 0))
                    }
                }
            return {
                forceYScrollbars: l,
                forceXScrollbars: u,
                scrollerClientWidths: c,
                scrollerClientHeights: d
            }
        }
        ,
        t.prototype.updateStickyScrolling = function() {
            var e = this.context.isRtl
              , t = this.scrollerElRefs.getAll().map(function(t) {
                return [t, e]
            })
              , n = this.getStickyScrolling(t);
            n.forEach(function(e) {
                return e.updateSize()
            }),
            this.stickyScrollings = n
        }
        ,
        t.prototype.destroyStickyScrolling = function() {
            this.stickyScrollings.forEach(wl)
        }
        ,
        t.prototype.updateScrollSyncers = function() {
            for (var e = this.getDims(), t = e[0], n = e[1], r = t * n, o = {}, i = {}, a = this.scrollerElRefs.currentMap, s = 0; s < t; s += 1) {
                var l = s * n
                  , u = l + n;
                o[s] = Se(a, l, u, 1)
            }
            for (var c = 0; c < n; c += 1)
                i[c] = this.scrollerElRefs.collect(c, r, n);
            this.scrollSyncersBySection = this.getScrollSyncersBySection(o),
            this.scrollSyncersByColumn = this.getScrollSyncersByColumn(i)
        }
        ,
        t.prototype.destroyScrollSyncers = function() {
            fe(this.scrollSyncersBySection, Sl),
            fe(this.scrollSyncersByColumn, Sl)
        }
        ,
        t.prototype.getChunkConfigByIndex = function(e) {
            var t = this.getDims()[1]
              , n = Math.floor(e / t)
              , r = e % t
              , o = this.props.sections[n];
            return o && o.chunks[r]
        }
        ,
        t.prototype.forceScrollLeft = function(e, t) {
            var n = this.scrollSyncersByColumn[e];
            n && n.forceScrollLeft(t)
        }
        ,
        t.prototype.forceScrollTop = function(e, t) {
            var n = this.scrollSyncersBySection[e];
            n && n.forceScrollTop(t)
        }
        ,
        t.prototype._handleChunkEl = function(e, t) {
            var n = this.getChunkConfigByIndex(parseInt(t, 10));
            n && cr(n.elRef, e)
        }
        ,
        t.prototype._handleScrollerEl = function(e, t) {
            var n = this.getChunkConfigByIndex(parseInt(t, 10));
            n && cr(n.scrollerElRef, e)
        }
        ,
        t.prototype.getDims = function() {
            var e = this.props.sections.length;
            return [e, e ? this.props.sections[0].chunks.length : 0]
        }
        ,
        t
    }(sr);
    function pl(e) {
        for (var t = 0, n = 0, r = e; n < r.length; n++) {
            t += r[n]
        }
        return t
    }
    function fl(e) {
        var t = k(e, ".fc-scrollgrid-sync-inner").map(hl);
        return t.length ? Math.max.apply(Math, t) : 0
    }
    function hl(e) {
        return e.offsetHeight
    }
    function vl(e) {
        var t = gl(e.cols, "width")
          , n = gl(e.cols, "minWidth")
          , r = ii(e.cols);
        return {
            hasShrinkCol: r,
            totalColWidth: t,
            totalColMinWidth: n,
            allowXScrolling: "shrink" !== e.width && Boolean(t || n || r),
            cols: e.cols,
            width: e.width
        }
    }
    function gl(e, t) {
        for (var n = 0, r = 0, o = e; r < o.length; r++) {
            var i = o[r]
              , a = i[t];
            "number" == typeof a && (n += a * (i.span || 1))
        }
        return n
    }
    dl.addStateEquality({
        shrinkWidths: Ae,
        scrollerClientWidths: ge,
        scrollerClientHeights: ge
    });
    var ml = {
        cols: ni
    };
    function yl(e, t) {
        return ye(e, t, ml)
    }
    function bl(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        return new cl(e,t)
    }
    function Sl(e) {
        e.destroy()
    }
    function El(e, t) {
        return new ll(e,t)
    }
    function wl(e) {
        e.destroy()
    }
    wr({
        deps: [qs],
        scrollGridImpl: dl
    });
    var Dl = 18
      , Cl = 6
      , Rl = 200;
    Co.MAX_TIMELINE_SLOTS = 1e3;
    var Tl = [{
        years: 1
    }, {
        months: 1
    }, {
        days: 1
    }, {
        hours: 1
    }, {
        minutes: 30
    }, {
        minutes: 15
    }, {
        minutes: 10
    }, {
        minutes: 5
    }, {
        minutes: 1
    }, {
        seconds: 30
    }, {
        seconds: 15
    }, {
        seconds: 10
    }, {
        seconds: 5
    }, {
        seconds: 1
    }, {
        milliseconds: 500
    }, {
        milliseconds: 100
    }, {
        milliseconds: 10
    }, {
        milliseconds: 1
    }];
    function xl(e, t, n, r) {
        var o = {
            labelInterval: n.slotLabelInterval,
            slotDuration: n.slotDuration
        };
        !function(e, t, n) {
            var r = t.currentRange;
            if (e.labelInterval) {
                n.countDurationsBetween(r.start, r.end, e.labelInterval) > Co.MAX_TIMELINE_SLOTS && (console.warn("slotLabelInterval results in too many cells"),
                e.labelInterval = null)
            }
            if (e.slotDuration) {
                n.countDurationsBetween(r.start, r.end, e.slotDuration) > Co.MAX_TIMELINE_SLOTS && (console.warn("slotDuration results in too many cells"),
                e.slotDuration = null)
            }
            if (e.labelInterval && e.slotDuration) {
                var o = Ie(e.labelInterval, e.slotDuration);
                (null === o || o < 1) && (console.warn("slotLabelInterval must be a multiple of slotDuration"),
                e.slotDuration = null)
            }
        }(o, e, t),
        _l(o, e, t),
        function(e, t, n) {
            var r = t.currentRange
              , o = e.slotDuration;
            if (!o) {
                for (var i = _l(e, t, n), a = 0, s = Tl; a < s.length; a++) {
                    var l = Re(s[a])
                      , u = Ie(i, l);
                    if (null !== u && u > 1 && u <= Cl) {
                        o = l;
                        break
                    }
                }
                if (o)
                    n.countDurationsBetween(r.start, r.end, o) > Rl && (o = null);
                o || (o = i),
                e.slotDuration = o
            }
        }(o, e, t);
        var i = n.slotLabelFormat
          , a = Array.isArray(i) ? i : null != i ? [i] : function(e, t, n, r) {
            var o, i, a = e.labelInterval, s = Ne(a).unit, l = r.weekNumbers, u = o = i = null;
            "week" !== s || l || (s = "day");
            switch (s) {
            case "year":
                u = {
                    year: "numeric"
                };
                break;
            case "month":
                Pl("years", t, n) > 1 && (u = {
                    year: "numeric"
                }),
                o = {
                    month: "short"
                };
                break;
            case "week":
                Pl("years", t, n) > 1 && (u = {
                    year: "numeric"
                }),
                o = {
                    week: "narrow"
                };
                break;
            case "day":
                Pl("years", t, n) > 1 ? u = {
                    year: "numeric",
                    month: "long"
                } : Pl("months", t, n) > 1 && (u = {
                    month: "long"
                }),
                l && (o = {
                    week: "short"
                }),
                i = {
                    weekday: "narrow",
                    day: "numeric"
                };
                break;
            case "hour":
                l && (u = {
                    week: "short"
                }),
                Pl("days", t, n) > 1 && (o = {
                    weekday: "short",
                    day: "numeric",
                    month: "numeric",
                    omitCommas: !0
                }),
                i = {
                    hour: "numeric",
                    minute: "2-digit",
                    omitZeroMinute: !0,
                    meridiem: "short"
                };
                break;
            case "minute":
                Pe(a) / 6e4 / 60 >= Cl ? (u = {
                    hour: "numeric",
                    meridiem: "short"
                },
                o = function(e) {
                    return ":" + V(e.date.minute, 2)
                }
                ) : u = {
                    hour: "numeric",
                    minute: "numeric",
                    meridiem: "short"
                };
                break;
            case "second":
                (function(e) {
                    return Pe(e) / 1e3
                }
                )(a) / 60 >= Cl ? (u = {
                    hour: "numeric",
                    minute: "2-digit",
                    meridiem: "lowercase"
                },
                o = function(e) {
                    return ":" + V(e.date.second, 2)
                }
                ) : u = {
                    hour: "numeric",
                    minute: "2-digit",
                    second: "2-digit",
                    meridiem: "lowercase"
                };
                break;
            case "millisecond":
                u = {
                    hour: "numeric",
                    minute: "2-digit",
                    second: "2-digit",
                    meridiem: "lowercase"
                },
                o = function(e) {
                    return "." + V(e.millisecond, 3)
                }
            }
            return [].concat(u || [], o || [], i || [])
        }(o, e, t, n);
        o.headerFormats = a.map(function(e) {
            return et(e)
        }),
        o.isTimeScale = Boolean(o.slotDuration.milliseconds);
        var s = null;
        if (!o.isTimeScale) {
            var l = Ne(o.slotDuration).unit;
            /year|month|week/.test(l) && (s = l)
        }
        o.largeUnit = s,
        o.emphasizeWeeks = 1 === xe(o.slotDuration) && Pl("weeks", e, t) >= 2 && !n.businessHours;
        var u, c, d = n.snapDuration;
        d && (u = Re(d),
        c = Ie(o.slotDuration, u)),
        null == c && (u = o.slotDuration,
        c = 1),
        o.snapDuration = u,
        o.snapsPerSlot = c;
        var p = Pe(e.slotMaxTime) - Pe(e.slotMinTime)
          , f = kl(e.renderRange.start, o, t)
          , h = kl(e.renderRange.end, o, t);
        o.isTimeScale && (f = t.add(f, e.slotMinTime),
        h = t.add(K(h, -1), e.slotMaxTime)),
        o.timeWindowMs = p,
        o.normalizedRange = {
            start: f,
            end: h
        };
        for (var v = [], g = f; g < h; )
            Ml(g, o, e, r) && v.push(g),
            g = t.add(g, o.slotDuration);
        o.slotDates = v;
        var m = -1
          , y = 0
          , b = []
          , S = [];
        for (g = f; g < h; )
            Ml(g, o, e, r) ? (m += 1,
            b.push(m),
            S.push(y)) : b.push(m + .5),
            g = t.add(g, o.snapDuration),
            y += 1;
        return o.snapDiffToIndex = b,
        o.snapIndexToDiff = S,
        o.snapCnt = m + 1,
        o.slotCnt = o.snapCnt / o.snapsPerSlot,
        o.isWeekStarts = function(e, t) {
            for (var n = e.slotDates, r = e.emphasizeWeeks, o = null, i = [], a = 0, s = n; a < s.length; a++) {
                var l = s[a]
                  , u = t.computeWeekNumber(l)
                  , c = r && null !== o && o !== u;
                o = u,
                i.push(c)
            }
            return i
        }(o, t),
        o.cellRows = function(e, t) {
            for (var n = e.slotDates, r = e.headerFormats, o = r.map(function() {
                return []
            }), i = xe(e.slotDuration), a = 7 === i ? "week" : 1 === i ? "day" : null, s = r.map(function(e) {
                return e.getLargestUnit ? e.getLargestUnit() : null
            }), l = 0; l < n.length; l += 1)
                for (var u = n[l], c = e.isWeekStarts[l], d = 0; d < r.length; d += 1) {
                    var p = r[d]
                      , f = o[d]
                      , h = f[f.length - 1]
                      , v = d === r.length - 1
                      , g = r.length > 1 && !v
                      , m = null
                      , y = s[d] || (v ? a : null);
                    if (g) {
                        var b = t.format(u, p);
                        h && h.text === b ? h.colspan += 1 : m = Il(u, b, y)
                    } else if (!h || q(t.countDurationsBetween(e.normalizedRange.start, u, e.labelInterval))) {
                        b = t.format(u, p);
                        m = Il(u, b, y)
                    } else
                        h.colspan += 1;
                    m && (m.weekStart = c,
                    f.push(m))
                }
            return o
        }(o, t),
        o.slotsPerLabel = Ie(o.labelInterval, o.slotDuration),
        o
    }
    function kl(e, t, n) {
        var r = e;
        return t.isTimeScale || (r = ee(r),
        t.largeUnit && (r = n.startOf(r, t.largeUnit))),
        r
    }
    function Ml(e, t, n, r) {
        if (r.isHiddenDay(e))
            return !1;
        if (t.isTimeScale) {
            var o = ee(e)
              , i = e.valueOf() - o.valueOf() - Pe(n.slotMinTime);
            return (i = (i % 864e5 + 864e5) % 864e5) < t.timeWindowMs
        }
        return !0
    }
    function _l(e, t, n) {
        var r = t.currentRange
          , o = e.labelInterval;
        if (!o) {
            if (e.slotDuration) {
                for (var i = 0, a = Tl; i < a.length; i++) {
                    var s = Re(a[i])
                      , l = Ie(s, e.slotDuration);
                    if (null !== l && l <= Cl) {
                        o = s;
                        break
                    }
                }
                o || (o = e.slotDuration)
            } else
                for (var u = 0, c = Tl; u < c.length; u++) {
                    if (o = Re(c[u]),
                    n.countDurationsBetween(r.start, r.end, o) >= Dl)
                        break
                }
            e.labelInterval = o
        }
        return o
    }
    function Pl(e, t, n) {
        var r = t.currentRange
          , o = null;
        return "years" === e ? o = n.diffWholeYears(r.start, r.end) : "months" === e ? o = n.diffWholeMonths(r.start, r.end) : "weeks" === e ? o = n.diffWholeMonths(r.start, r.end) : "days" === e && (o = Q(r.start, r.end)),
        o || 0
    }
    function Il(e, t, n) {
        return {
            date: e,
            text: t,
            rowUnit: n,
            colspan: 1,
            isWeekStart: !1
        }
    }
    var Nl = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Zs(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = e.navLinkData ? {
                "data-navlink": e.navLinkData,
                tabIndex: 0
            } : {};
            return m(xr, {
                hookProps: e.hookProps,
                content: t.options.slotLabelContent,
                defaultContent: Hl
            }, function(t, r) {
                return m("a", Xs({
                    ref: t,
                    className: "fc-timeline-slot-cushion fc-scrollgrid-sync-inner" + (e.isSticky ? " fc-sticky" : "")
                }, n), r)
            })
        }
        ,
        t
    }(sr);
    function Hl(e) {
        return e.text
    }
    function Ol(e) {
        return {
            level: e.level,
            date: e.dateEnv.toDate(e.dateMarker),
            view: e.viewApi,
            text: e.text
        }
    }
    var Al = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.refineHookProps = We(Ol),
            t.normalizeClassNames = _r(),
            t
        }
        return Zs(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = t.dateEnv
              , r = t.options
              , o = e.cell
              , i = e.dateProfile
              , a = e.tDateProfile
              , s = Wn(o.date, e.todayRange, e.nowDate, i)
              , l = ["fc-timeline-slot", "fc-timeline-slot-label"].concat("time" === o.rowUnit ? jn(s, t.theme) : Un(s, t.theme));
            o.isWeekStart && l.push("fc-timeline-slot-em");
            var u = r.navLinks && o.rowUnit && "time" !== o.rowUnit ? zn(o.date, o.rowUnit) : null
              , c = this.refineHookProps({
                level: e.rowLevel,
                dateMarker: o.date,
                text: o.text,
                dateEnv: t.dateEnv,
                viewApi: t.viewApi
            })
              , d = this.normalizeClassNames(r.slotLabelClassNames, c);
            return m(Mr, {
                hookProps: c,
                didMount: r.slotLabelDidMount,
                willUnmount: r.slotLabelWillUnmount
            }, function(t) {
                return m("th", {
                    ref: t,
                    className: l.concat(d).join(" "),
                    "data-date": n.formatIso(o.date, {
                        omitTime: !a.isTimeScale,
                        omitTimeZoneOffset: !0
                    }),
                    colSpan: o.colspan
                }, m("div", {
                    className: "fc-timeline-slot-frame",
                    style: {
                        height: e.rowInnerHeight
                    }
                }, m(Nl, {
                    hookProps: c,
                    isSticky: e.isSticky,
                    navLinkData: u
                })))
            })
        }
        ,
        t
    }(sr)
      , Ll = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Zs(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = e.dateProfile
              , n = e.tDateProfile
              , r = e.rowInnerHeights
              , o = e.todayRange
              , i = e.nowDate
              , a = n.cellRows;
            return m(S, null, a.map(function(e, s) {
                var l = s === a.length - 1
                  , u = n.isTimeScale && l;
                return m("tr", {
                    key: s,
                    className: ["fc-timeline-header-row", u ? "fc-timeline-header-row-chrono" : ""].join(" ")
                }, e.map(function(e) {
                    return m(Al, {
                        key: e.date.toISOString(),
                        cell: e,
                        rowLevel: s,
                        dateProfile: t,
                        tDateProfile: n,
                        todayRange: o,
                        nowDate: i,
                        rowInnerHeight: r && r[s],
                        isSticky: !l
                    })
                }))
            }))
        }
        ,
        t
    }(sr)
      , Wl = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = b(),
            t
        }
        return Zs(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.context
              , r = Ne(t.tDateProfile.slotDuration).unit
              , o = t.slatCoords && t.slatCoords.dateProfile === t.dateProfile ? t.slatCoords : null;
            return m(zo, {
                unit: r
            }, function(r, i) {
                return m("div", {
                    className: "fc-timeline-header",
                    ref: e.rootElRef
                }, m("table", {
                    className: "fc-scrollgrid-sync-table",
                    style: {
                        minWidth: t.tableMinWidth,
                        width: t.clientWidth
                    }
                }, t.tableColGroupNode, m("tbody", null, m(Ll, {
                    dateProfile: t.dateProfile,
                    tDateProfile: t.tDateProfile,
                    nowDate: r,
                    todayRange: i,
                    rowInnerHeights: t.rowInnerHeights
                }))), n.options.nowIndicator && m("div", {
                    className: "fc-timeline-now-indicator-container"
                }, o && o.isDateInRange(r) && m(vi, {
                    isAxis: !0,
                    date: r
                }, function(e, t, n, i) {
                    return m("div", {
                        ref: e,
                        className: ["fc-timeline-now-indicator-arrow"].concat(t).join(" "),
                        style: {
                            left: o.dateToCoord(r)
                        }
                    }, i)
                })))
            })
        }
        ,
        t.prototype.componentDidMount = function() {
            this.updateSize()
        }
        ,
        t.prototype.componentDidUpdate = function() {
            this.updateSize()
        }
        ,
        t.prototype.updateSize = function() {
            this.props.onMaxCushionWidth && this.props.onMaxCushionWidth(this.computeMaxCushionWidth())
        }
        ,
        t.prototype.computeMaxCushionWidth = function() {
            return Math.max.apply(Math, k(this.rootElRef.current, ".fc-timeline-header-row:last-child .fc-timeline-slot-cushion").map(function(e) {
                return e.getBoundingClientRect().width
            }))
        }
        ,
        t
    }(sr)
      , Ul = function() {
        function e(e, t, n, r, o, i) {
            this.slatRootEl = e,
            this.dateProfile = n,
            this.tDateProfile = r,
            this.dateEnv = o,
            this.isRtl = i,
            this.outerCoordCache = new $n(e,t,!0,!1),
            this.innerCoordCache = new $n(e,function(e, t) {
                for (var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0; o < n.length; o += 1)
                    for (var i = n[o].children, a = 0; a < i.length; a += 1) {
                        var s = i[a];
                        t && !x(s, t) || r.push(s)
                    }
                return r
            }(t, "div"),!0,!1)
        }
        return e.prototype.rangeToCoords = function(e) {
            return this.isRtl ? {
                right: this.dateToCoord(e.start),
                left: this.dateToCoord(e.end)
            } : {
                left: this.dateToCoord(e.start),
                right: this.dateToCoord(e.end)
            }
        }
        ,
        e.prototype.isDateInRange = function(e) {
            return Wt(this.dateProfile.currentRange, e)
        }
        ,
        e.prototype.dateToCoord = function(e) {
            var t = this.tDateProfile
              , n = this.computeDateSnapCoverage(e) / t.snapsPerSlot
              , r = Math.floor(n)
              , o = n - (r = Math.min(r, t.slotCnt - 1))
              , i = this.innerCoordCache
              , a = this.outerCoordCache;
            return this.isRtl ? a.rights[r] - i.getWidth(r) * o - a.originClientRect.width : a.lefts[r] + i.getWidth(r) * o
        }
        ,
        e.prototype.computeDateSnapCoverage = function(e) {
            return jl(e, this.tDateProfile, this.dateEnv)
        }
        ,
        e.prototype.computeDurationLeft = function(e) {
            var t = this.dateProfile
              , n = this.tDateProfile
              , r = this.dateEnv
              , o = this.isRtl
              , i = 0;
            if (t) {
                var a = r.add(t.activeRange.start, e);
                n.isTimeScale || (a = ee(a)),
                i = this.dateToCoord(a),
                !o && i && (i += 1)
            }
            return i
        }
        ,
        e
    }();
    function jl(e, t, n) {
        var r = n.countDurationsBetween(t.normalizedRange.start, e, t.snapDuration);
        if (r < 0)
            return 0;
        if (r >= t.snapDiffToIndex.length)
            return t.snapCnt;
        var o = Math.floor(r)
          , i = t.snapDiffToIndex[o];
        return q(i) ? i += r - o : i = Math.ceil(i),
        i
    }
    var zl = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Zs(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = t.dateEnv
              , r = t.options
              , o = t.theme
              , i = e.date
              , a = e.tDateProfile
              , s = e.isEm
              , l = Wn(e.date, e.todayRange, e.nowDate, e.dateProfile)
              , u = ["fc-timeline-slot", "fc-timeline-slot-lane"]
              , c = {
                "data-date": n.formatIso(i, {
                    omitTimeZoneOffset: !0,
                    omitTime: !a.isTimeScale
                })
            }
              , d = Xs(Xs({
                date: n.toDate(e.date)
            }, l), {
                view: t.viewApi
            });
            return s && u.push("fc-timeline-slot-em"),
            a.isTimeScale && u.push(q(n.countDurationsBetween(a.normalizedRange.start, e.date, a.labelInterval)) ? "fc-timeline-slot-major" : "fc-timeline-slot-minor"),
            u.push.apply(u, e.isDay ? Un(l, o) : jn(l, o)),
            m(Rr, {
                hookProps: d,
                classNames: r.slotLaneClassNames,
                content: r.slotLaneContent,
                didMount: r.slotLaneDidMount,
                willUnmount: r.slotLaneWillUnmount,
                elRef: e.elRef
            }, function(e, t, n, r) {
                return m("td", Xs({
                    ref: e,
                    className: u.concat(t).join(" ")
                }, c), m("div", {
                    ref: n
                }, r))
            })
        }
        ,
        t
    }(sr)
      , Bl = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Zs(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = e.tDateProfile
              , n = e.cellElRefs
              , r = t.slotDates
              , o = t.isWeekStarts
              , i = !t.isTimeScale && !t.largeUnit;
            return m("tbody", null, m("tr", null, r.map(function(r, a) {
                var s = r.toISOString();
                return m(zl, {
                    key: s,
                    elRef: n.createRef(s),
                    date: r,
                    dateProfile: e.dateProfile,
                    tDateProfile: t,
                    nowDate: e.nowDate,
                    todayRange: e.todayRange,
                    isEm: o[a],
                    isDay: i
                })
            })))
        }
        ,
        t
    }(sr)
      , Fl = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = b(),
            t.cellElRefs = new Jo,
            t.handleScrollRequest = function(e) {
                var n = t.props.onScrollLeftRequest
                  , r = t.coords;
                if (n && r) {
                    if (e.time)
                        n(r.computeDurationLeft(e.time));
                    return !0
                }
                return null
            }
            ,
            t
        }
        return Zs(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context;
            return m("div", {
                className: "fc-timeline-slots",
                ref: this.rootElRef
            }, m("table", {
                className: t.theme.getClass("table"),
                style: {
                    minWidth: e.tableMinWidth,
                    width: e.clientWidth
                }
            }, e.tableColGroupNode, m(Bl, {
                cellElRefs: this.cellElRefs,
                dateProfile: e.dateProfile,
                tDateProfile: e.tDateProfile,
                nowDate: e.nowDate,
                todayRange: e.todayRange
            })))
        }
        ,
        t.prototype.componentDidMount = function() {
            this.updateSizing(),
            this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
        }
        ,
        t.prototype.componentDidUpdate = function(e) {
            this.updateSizing(),
            this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
        }
        ,
        t.prototype.componentWillUnmount = function() {
            this.scrollResponder.detach(),
            this.props.onCoords && this.props.onCoords(null)
        }
        ,
        t.prototype.updateSizing = function() {
            var e, t = this.props, n = this.context;
            null !== t.clientWidth && this.scrollResponder && (this.rootElRef.current.offsetWidth && (this.coords = new Ul(this.rootElRef.current,(e = this.cellElRefs.currentMap,
            t.tDateProfile.slotDates.map(function(t) {
                var n = t.toISOString();
                return e[n]
            })),t.dateProfile,t.tDateProfile,n.dateEnv,n.isRtl),
            t.onCoords && t.onCoords(this.coords),
            this.scrollResponder.update(!1)))
        }
        ,
        t.prototype.positionToHit = function(e) {
            var t = this.coords.outerCoordCache
              , n = this.context
              , r = n.dateEnv
              , o = n.isRtl
              , i = this.props.tDateProfile
              , a = t.leftToIndex(e);
            if (null != a) {
                var s = t.getWidth(a)
                  , l = o ? (t.rights[a] - e) / s : (e - t.lefts[a]) / s
                  , u = Math.floor(l * i.snapsPerSlot)
                  , c = r.add(i.slotDates[a], Me(i.snapDuration, u));
                return {
                    dateSpan: {
                        range: {
                            start: c,
                            end: r.add(c, i.snapDuration)
                        },
                        allDay: !this.props.tDateProfile.isTimeScale
                    },
                    dayEl: this.cellElRefs.currentMap[a],
                    left: t.lefts[a],
                    right: t.rights[a]
                }
            }
            return null
        }
        ,
        t
    }(sr);
    var Vl = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Zs(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = [].concat(e.eventResizeSegs, e.dateSelectionSegs);
            return e.timelineCoords && m("div", {
                className: "fc-timeline-bg"
            }, this.renderSegs(e.businessHourSegs || [], e.timelineCoords, "non-business"), this.renderSegs(e.bgEventSegs || [], e.timelineCoords, "bg-event"), this.renderSegs(t, e.timelineCoords, "highlight"))
        }
        ,
        t.prototype.renderSegs = function(e, t, n) {
            var r = this.props
              , o = r.todayRange
              , i = r.nowDate
              , a = e.map(function(e) {
                var r = t.rangeToCoords(e);
                return m("div", {
                    key: Jt(e.eventRange),
                    className: "fc-timeline-bg-harness",
                    style: {
                        left: r.left,
                        right: -r.right
                    }
                }, "bg-event" === n ? m(Ei, Xs({
                    seg: e
                }, Kt(e, o, i))) : Si(n))
            });
            return m(S, null, a)
        }
        ,
        t
    }(sr)
      , Gl = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Zs(t, e),
        t.prototype.sliceRange = function(e, t, n, r, o) {
            var i = function(e, t, n) {
                if (!t.isTimeScale && (e = _t(e),
                t.largeUnit)) {
                    var r = e;
                    ((e = {
                        start: n.startOf(e.start, t.largeUnit),
                        end: n.startOf(e.end, t.largeUnit)
                    }).end.valueOf() !== r.end.valueOf() || e.end <= e.start) && (e = {
                        start: e.start,
                        end: n.add(e.end, t.slotDuration)
                    })
                }
                return e
            }(e, r, o)
              , a = [];
            if (jl(i.start, r, o) < jl(i.end, r, o)) {
                var s = Ht(i, r.normalizedRange);
                s && a.push({
                    start: s.start,
                    end: s.end,
                    isStart: s.start.valueOf() === i.start.valueOf() && Ml(s.start, r, t, n),
                    isEnd: s.end.valueOf() === i.end.valueOf() && Ml(J(s.end, -1), r, t, n)
                })
            }
            return a
        }
        ,
        t
    }(Yo)
      , ql = et({
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: !0,
        meridiem: "narrow"
    })
      , Yl = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Zs(t, e),
        t.prototype.render = function() {
            var e = this.props;
            return m(fi, Xs({}, e, {
                extraClassNames: ["fc-timeline-event", "fc-h-event"],
                defaultTimeFormat: ql,
                defaultDisplayEventTime: !e.isTimeScale
            }))
        }
        ,
        t
    }(sr);
    function Zl(e, t) {
        var n = {};
        if (t)
            for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r];
                n[i.eventRange.instance.instanceId] = t.rangeToCoords(i)
            }
        return n
    }
    function Xl(e, t, n) {
        var r, o, i, a, s = [], l = 0;
        if (n)
            for (var u = 0, c = e = Vt(e, t); u < c.length; u++) {
                var d = c[u].eventRange.instance.instanceId
                  , p = n[d];
                if (p) {
                    for (var f = 0, h = 0, v = 0; v < s.length; v += 1) {
                        var g = s[v];
                        r = p,
                        o = f,
                        i = g.dims,
                        a = g.top,
                        r.right > i.left && r.left < i.right && o + r.height > a && o < a + i.height && (f = g.top + g.dims.height,
                        h = v)
                    }
                    for (; h < s.length && f >= s[h].top; )
                        h += 1;
                    s.splice(h, 0, {
                        key: d,
                        dims: p,
                        top: f
                    }),
                    l = Math.max(l, f + p.height)
                }
            }
        for (var m = {}, y = 0, b = s; y < b.length; y++) {
            m[(g = b[y]).key] = g.top
        }
        return {
            segTops: m,
            height: l
        }
    }
    var Kl = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.slicer = new Gl,
            t.computeFgSegHorizontals = Le(Zl),
            t.computeSegVerticals = Le(Xl),
            t.harnessElRefs = new Jo,
            t.innerElRef = b(),
            t.state = {
                segDims: null
            },
            t
        }
        return Zs(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.state
              , n = this.context
              , r = e.dateProfile
              , o = e.tDateProfile
              , i = this.slicer.sliceProps(e, r, o.isTimeScale ? null : e.nextDayThreshold, n, r, n.dateProfileGenerator, o, n.dateEnv)
              , a = (i.eventDrag ? i.eventDrag.segs : null) || (i.eventResize ? i.eventResize.segs : null) || []
              , s = this.computeFgSegHorizontals(i.fgEventSegs, e.timelineCoords)
              , l = this.computeSegVerticals(i.fgEventSegs, n.options.eventOrder, t.segDims)
              , u = l.segTops
              , c = l.height
              , d = (i.eventDrag ? i.eventDrag.affectedInstances : null) || (i.eventResize ? i.eventResize.affectedInstances : null) || {};
            return m(S, null, m(Vl, {
                businessHourSegs: i.businessHourSegs,
                bgEventSegs: i.bgEventSegs,
                timelineCoords: e.timelineCoords,
                eventResizeSegs: i.eventResize ? i.eventResize.segs : [],
                dateSelectionSegs: i.dateSelectionSegs,
                nowDate: e.nowDate,
                todayRange: e.todayRange
            }), m("div", {
                className: "fc-timeline-events fc-scrollgrid-sync-inner",
                ref: this.innerElRef,
                style: {
                    height: c
                }
            }, this.renderFgSegs(i.fgEventSegs, s, u, d, !1, !1, !1), this.renderFgSegs(a, Zl(a, e.timelineCoords), u, {}, Boolean(i.eventDrag), Boolean(i.eventResize), !1)))
        }
        ,
        t.prototype.componentDidMount = function() {
            this.updateSize()
        }
        ,
        t.prototype.componentDidUpdate = function(e, t) {
            e.eventStore === this.props.eventStore && e.timelineCoords === this.props.timelineCoords || this.updateSize()
        }
        ,
        t.prototype.updateSize = function() {
            var e = this
              , t = this.props
              , n = t.timelineCoords;
            if (t.onHeightChange && t.onHeightChange(this.innerElRef.current, !1),
            n) {
                var r = n.slatRootEl.getBoundingClientRect();
                this.setState({
                    segDims: fe(this.harnessElRefs.currentMap, function(e) {
                        var t = e.getBoundingClientRect();
                        return {
                            left: Math.round(t.left - r.left),
                            right: Math.round(t.right - r.left),
                            height: Math.round(t.height)
                        }
                    })
                }, function() {
                    t.onHeightChange && t.onHeightChange(e.innerElRef.current, !0)
                })
            }
        }
        ,
        t.prototype.renderFgSegs = function(e, t, n, r, o, i, a) {
            var s = this
              , l = this.harnessElRefs
              , u = this.props
              , c = o || i || a;
            return m(S, null, e.map(function(e) {
                var d = e.eventRange.instance.instanceId
                  , p = t[d]
                  , f = n[d];
                return m("div", {
                    key: d,
                    ref: c ? null : l.createRef(d),
                    className: "fc-timeline-event-harness",
                    style: {
                        left: p ? p.left : "",
                        right: p ? -p.right : "",
                        top: null != f ? f : "",
                        visibility: r[d] ? "hidden" : ""
                    }
                }, m(Yl, Xs({
                    isTimeScale: s.props.tDateProfile.isTimeScale,
                    seg: e,
                    isDragging: o,
                    isResizing: i,
                    isDateSelecting: a,
                    isSelected: d === s.props.eventSelection
                }, Kt(e, u.todayRange, u.nowDate))))
            }))
        }
        ,
        t
    }(sr)
      , Jl = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.slatsRef = b(),
            t.state = {
                coords: null
            },
            t.handeEl = function(e) {
                e ? t.context.registerInteractiveComponent(t, {
                    el: e
                }) : t.context.unregisterInteractiveComponent(t)
            }
            ,
            t.handleCoords = function(e) {
                t.setState({
                    coords: e
                }),
                t.props.onSlatCoords && t.props.onSlatCoords(e)
            }
            ,
            t
        }
        return Zs(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.state
              , r = this.context.options
              , o = t.dateProfile
              , i = t.tDateProfile
              , a = Ne(i.slotDuration).unit;
            return m("div", {
                className: "fc-timeline-body",
                ref: this.handeEl,
                style: {
                    minWidth: t.tableMinWidth,
                    height: t.clientHeight,
                    width: t.clientWidth
                }
            }, m(zo, {
                unit: a
            }, function(a, s) {
                return m(S, null, m(Fl, {
                    ref: e.slatsRef,
                    dateProfile: o,
                    tDateProfile: i,
                    nowDate: a,
                    todayRange: s,
                    clientWidth: t.clientWidth,
                    tableColGroupNode: t.tableColGroupNode,
                    tableMinWidth: t.tableMinWidth,
                    onCoords: e.handleCoords,
                    onScrollLeftRequest: t.onScrollLeftRequest
                }), m(Kl, {
                    dateProfile: o,
                    tDateProfile: t.tDateProfile,
                    nowDate: a,
                    todayRange: s,
                    nextDayThreshold: r.nextDayThreshold,
                    businessHours: t.businessHours,
                    eventStore: t.eventStore,
                    eventUiBases: t.eventUiBases,
                    dateSelection: t.dateSelection,
                    eventSelection: t.eventSelection,
                    eventDrag: t.eventDrag,
                    eventResize: t.eventResize,
                    timelineCoords: n.coords
                }), r.nowIndicator && n.coords && n.coords.isDateInRange(a) && m("div", {
                    className: "fc-timeline-now-indicator-container"
                }, m(vi, {
                    isAxis: !1,
                    date: a
                }, function(e, t, r, o) {
                    return m("div", {
                        ref: e,
                        className: ["fc-timeline-now-indicator-line"].concat(t).join(" "),
                        style: {
                            left: n.coords.dateToCoord(a)
                        }
                    }, o)
                })))
            }))
        }
        ,
        t.prototype.queryHit = function(e, t, n, r) {
            var o = this.slatsRef.current.positionToHit(e);
            return o ? {
                component: this,
                dateSpan: o.dateSpan,
                rect: {
                    left: o.left,
                    right: o.right,
                    top: 0,
                    bottom: r
                },
                dayEl: o.dayEl,
                layer: 0
            } : null
        }
        ,
        t
    }(Er);
    function $l(e, t) {
        return [{
            span: e.slotCnt,
            minWidth: t || 1
        }]
    }
    var Ql = wr({
        deps: [qs],
        initialView: "timelineDay",
        views: {
            timeline: {
                component: function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.buildTimelineDateProfile = Le(xl),
                        t.scrollGridRef = b(),
                        t.state = {
                            slatCoords: null,
                            slotCushionMaxWidth: null
                        },
                        t.handleSlatCoords = function(e) {
                            t.setState({
                                slatCoords: e
                            })
                        }
                        ,
                        t.handleScrollLeftRequest = function(e) {
                            t.scrollGridRef.current.forceScrollLeft(0, e)
                        }
                        ,
                        t.handleMaxCushionWidth = function(e) {
                            t.setState({
                                slotCushionMaxWidth: Math.ceil(e)
                            })
                        }
                        ,
                        t
                    }
                    return Zs(t, e),
                    t.prototype.render = function() {
                        var e = this
                          , t = this.props
                          , n = this.state
                          , r = this.context
                          , o = r.options
                          , i = !t.forPrint && ui(o)
                          , a = !t.forPrint && ci(o)
                          , s = this.buildTimelineDateProfile(t.dateProfile, r.dateEnv, o, r.dateProfileGenerator)
                          , l = ["fc-timeline", !1 === o.eventOverlap ? "fc-timeline-overlap-disabled" : ""]
                          , u = o.slotMinWidth
                          , c = $l(s, u || this.computeFallbackSlotMinWidth(s))
                          , d = [{
                            type: "header",
                            key: "header",
                            isSticky: i,
                            chunks: [{
                                key: "timeline",
                                content: function(r) {
                                    return m(Wl, {
                                        dateProfile: t.dateProfile,
                                        clientWidth: r.clientWidth,
                                        clientHeight: r.clientHeight,
                                        tableMinWidth: r.tableMinWidth,
                                        tableColGroupNode: r.tableColGroupNode,
                                        tDateProfile: s,
                                        slatCoords: n.slatCoords,
                                        onMaxCushionWidth: u ? null : e.handleMaxCushionWidth
                                    })
                                }
                            }]
                        }, {
                            type: "body",
                            key: "body",
                            liquid: !0,
                            chunks: [{
                                key: "timeline",
                                content: function(n) {
                                    return m(Jl, Xs({}, t, {
                                        clientWidth: n.clientWidth,
                                        clientHeight: n.clientHeight,
                                        tableMinWidth: n.tableMinWidth,
                                        tableColGroupNode: n.tableColGroupNode,
                                        tDateProfile: s,
                                        onSlatCoords: e.handleSlatCoords,
                                        onScrollLeftRequest: e.handleScrollLeftRequest
                                    }))
                                }
                            }]
                        }];
                        return a && d.push({
                            type: "footer",
                            key: "footer",
                            isSticky: !0,
                            chunks: [{
                                key: "timeline",
                                content: li
                            }]
                        }),
                        m(Nr, {
                            viewSpec: r.viewSpec
                        }, function(n, r) {
                            return m("div", {
                                ref: n,
                                className: l.concat(r).join(" ")
                            }, m(dl, {
                                ref: e.scrollGridRef,
                                liquid: !t.isHeightAuto && !t.forPrint,
                                colGroups: [{
                                    cols: c
                                }],
                                sections: d
                            }))
                        })
                    }
                    ,
                    t.prototype.computeFallbackSlotMinWidth = function(e) {
                        return Math.max(30, (this.state.slotCushionMaxWidth || 0) / e.slotsPerLabel)
                    }
                    ,
                    t
                }(Er),
                usesMinMaxTime: !0,
                eventResizableFromStart: !0
            },
            timelineDay: {
                type: "timeline",
                duration: {
                    days: 1
                }
            },
            timelineWeek: {
                type: "timeline",
                duration: {
                    weeks: 1
                }
            },
            timelineMonth: {
                type: "timeline",
                duration: {
                    months: 1
                }
            },
            timelineYear: {
                type: "timeline",
                duration: {
                    years: 1
                }
            }
        }
    })
      , eu = function(e, t) {
        return (eu = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function tu(e, t) {
        function n() {
            this.constructor = e
        }
        eu(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var nu = function() {
        return (nu = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    function ru() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , o = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
            o++)
                r[o] = i[a];
        return r
    }
    Object.create;
    function ou(e, t) {
        var n = e.resourceEditable;
        if (null == n) {
            var r = e.sourceId && t.getCurrentData().eventSources[e.sourceId];
            r && (n = r.extendedProps.resourceEditable),
            null == n && null == (n = t.options.eventResourceEditable) && (n = t.options.editable)
        }
        return n
    }
    var iu = function() {
        function e() {
            this.filterResources = Le(au)
        }
        return e.prototype.transform = function(e, t) {
            return t.viewSpec.optionDefaults.needsResourceData ? {
                resourceStore: this.filterResources(t.resourceStore, t.options.filterResourcesWithEvents, t.eventStore, t.dateProfile.activeRange),
                resourceEntityExpansions: t.resourceEntityExpansions
            } : null
        }
        ,
        e
    }();
    function au(e, t, n, r) {
        if (t) {
            var o = function(e, t) {
                var n = {};
                for (var r in e)
                    for (var o = e[r], i = 0, a = t[o.defId].resourceIds; i < a.length; i++) {
                        var s = a[i];
                        n[s] = !0
                    }
                return n
            }(function(e, t) {
                return pe(e, function(e) {
                    return At(e.range, t)
                })
            }(n.instances, r), n.defs);
            return nu(o, function(e, t) {
                var n = {};
                for (var r in e)
                    for (var o = void 0; (o = t[r]) && (r = o.parentId); )
                        n[r] = !0;
                return n
            }(o, e)),
            pe(e, function(e, t) {
                return o[t]
            })
        }
        return e
    }
    var su = function() {
        function e() {
            this.buildResourceEventUis = Le(lu, ge),
            this.injectResourceEventUis = Le(uu)
        }
        return e.prototype.transform = function(e, t) {
            return t.viewSpec.optionDefaults.needsResourceData ? null : {
                eventUiBases: this.injectResourceEventUis(e.eventUiBases, e.eventStore.defs, this.buildResourceEventUis(t.resourceStore))
            }
        }
        ,
        e
    }();
    function lu(e) {
        return fe(e, function(e) {
            return e.ui
        })
    }
    function uu(e, t, n) {
        return fe(e, function(e, r) {
            return r ? function(e, t, n) {
                for (var r = [], o = 0, i = t.resourceIds; o < i.length; o++) {
                    var a = i[o];
                    n[a] && r.unshift(n[a])
                }
                return r.unshift(e),
                St(r)
            }(e, t[r], n) : e
        })
    }
    var cu = [];
    function du(e) {
        cu.push(e)
    }
    function pu(e) {
        return cu[e]
    }
    var fu = {
        id: String,
        resources: ct,
        url: String,
        method: String,
        startParam: String,
        endParam: String,
        timeZoneParam: String,
        extraParams: ct
    };
    function hu(e) {
        var t;
        if ("string" == typeof e ? t = {
            url: e
        } : "function" == typeof e || Array.isArray(e) ? t = {
            resources: e
        } : "object" == typeof e && e && (t = e),
        t) {
            var n = ut(t, fu)
              , r = n.refined;
            !function(e) {
                for (var t in e)
                    console.warn("Unknown resource prop '" + t + "'")
            }(n.extra);
            var o = function(e) {
                for (var t = cu, n = t.length - 1; n >= 0; n -= 1) {
                    var r = t[n].parseMeta(e);
                    if (r)
                        return {
                            meta: r,
                            sourceDefId: n
                        }
                }
                return null
            }(r);
            if (o)
                return {
                    _raw: e,
                    sourceId: L(),
                    sourceDefId: o.sourceDefId,
                    meta: o.meta,
                    publicId: r.id || "",
                    isFetching: !1,
                    latestFetchId: "",
                    fetchRange: null
                }
        }
        return null
    }
    function vu(e, t, n) {
        var r = n.options
          , o = n.dateProfile;
        if (!e || !t)
            return gu(r.initialResources || r.resources, o.activeRange, r.refetchResourcesOnNavigate, n);
        switch (t.type) {
        case "RESET_RESOURCE_SOURCE":
            return gu(t.resourceSourceInput, o.activeRange, r.refetchResourcesOnNavigate, n);
        case "PREV":
        case "NEXT":
        case "CHANGE_DATE":
        case "CHANGE_VIEW_TYPE":
            return function(e, t, n, r) {
                if (n && !function(e) {
                    return Boolean(pu(e.sourceDefId).ignoreRange)
                }(e) && (!e.fetchRange || !Ot(e.fetchRange, t)))
                    return mu(e, t, r);
                return e
            }(e, o.activeRange, r.refetchResourcesOnNavigate, n);
        case "RECEIVE_RESOURCES":
        case "RECEIVE_RESOURCE_ERROR":
            return function(e, t, n) {
                if (t === e.latestFetchId)
                    return nu(nu({}, e), {
                        isFetching: !1,
                        fetchRange: n
                    });
                return e
            }(e, t.fetchId, t.fetchRange);
        case "REFETCH_RESOURCES":
            return mu(e, o.activeRange, n);
        default:
            return e
        }
    }
    function gu(e, t, n, r) {
        if (e) {
            var o = hu(e);
            return o = mu(o, n ? t : null, r)
        }
        return null
    }
    function mu(e, t, n) {
        var r = pu(e.sourceDefId)
          , o = L();
        return r.fetch({
            resourceSource: e,
            range: t,
            context: n
        }, function(e) {
            n.dispatch({
                type: "RECEIVE_RESOURCES",
                fetchId: o,
                fetchRange: t,
                rawResources: e.rawResources
            })
        }, function(e) {
            n.dispatch({
                type: "RECEIVE_RESOURCE_ERROR",
                fetchId: o,
                fetchRange: t,
                error: e
            })
        }),
        nu(nu({}, e), {
            isFetching: !0,
            latestFetchId: o
        })
    }
    var yu = "_fc:"
      , bu = {
        id: String,
        parentId: String,
        children: ct,
        title: String,
        businessHours: ct,
        extendedProps: ct,
        eventEditable: Boolean,
        eventStartEditable: Boolean,
        eventDurationEditable: Boolean,
        eventConstraint: ct,
        eventOverlap: Boolean,
        eventAllow: ct,
        eventClassNames: gt,
        eventBackgroundColor: String,
        eventBorderColor: String,
        eventTextColor: String,
        eventColor: String
    };
    function Su(e, t, n, r) {
        void 0 === t && (t = "");
        var o = ut(e, bu)
          , i = o.refined
          , a = o.extra
          , s = {
            id: i.id || yu + L(),
            parentId: i.parentId || t,
            title: i.title || "",
            businessHours: i.businessHours ? Pn(i.businessHours, r) : null,
            ui: bt({
                editable: i.eventEditable,
                startEditable: i.eventStartEditable,
                durationEditable: i.eventDurationEditable,
                constraint: i.eventConstraint,
                overlap: i.eventOverlap,
                allow: i.eventAllow,
                classNames: i.eventClassNames,
                backgroundColor: i.eventBackgroundColor,
                borderColor: i.eventBorderColor,
                textColor: i.eventTextColor,
                color: i.eventColor
            }, r),
            extendedProps: nu(nu({}, a), i.extendedProps)
        };
        if (Object.freeze(s.ui.classNames),
        Object.freeze(s.extendedProps),
        n[s.id])
            ;
        else if (n[s.id] = s,
        i.children)
            for (var l = 0, u = i.children; l < u.length; l++) {
                Su(u[l], s.id, n, r)
            }
        return s
    }
    function Eu(e) {
        return 0 === e.indexOf(yu) ? "" : e
    }
    function wu(e, t, n, r) {
        if (!e || !t)
            return {};
        switch (t.type) {
        case "RECEIVE_RESOURCES":
            return function(e, t, n, r, o) {
                if (r.latestFetchId === n) {
                    for (var i = {}, a = 0, s = t; a < s.length; a++) {
                        Su(s[a], "", i, o)
                    }
                    return i
                }
                return e
            }(e, t.rawResources, t.fetchId, n, r);
        case "ADD_RESOURCE":
            return o = e,
            i = t.resourceHash,
            nu(nu({}, o), i);
        case "REMOVE_RESOURCE":
            return function(e, t) {
                var n = nu({}, e);
                for (var r in delete n[t],
                n)
                    n[r].parentId === t && (n[r] = nu(nu({}, n[r]), {
                        parentId: ""
                    }));
                return n
            }(e, t.resourceId);
        case "SET_RESOURCE_PROP":
            return function(e, t, n, r) {
                var o, i, a = e[t];
                if (a)
                    return nu(nu({}, e), ((o = {})[t] = nu(nu({}, a), ((i = {})[n] = r,
                    i)),
                    o));
                return e
            }(e, t.resourceId, t.propName, t.propValue);
        case "SET_RESOURCE_EXTENDED_PROP":
            return function(e, t, n, r) {
                var o, i, a = e[t];
                if (a)
                    return nu(nu({}, e), ((o = {})[t] = nu(nu({}, a), {
                        extendedProps: nu(nu({}, a.extendedProps), (i = {},
                        i[n] = r,
                        i))
                    }),
                    o));
                return e
            }(e, t.resourceId, t.propName, t.propValue);
        default:
            return e
        }
        var o, i
    }
    var Du = {
        resourceId: String,
        resourceIds: ct,
        resourceEditable: Boolean
    };
    var Cu = function() {
        function e(e, t) {
            this._context = e,
            this._resource = t
        }
        return e.prototype.setProp = function(e, t) {
            var n = this._resource;
            this._context.dispatch({
                type: "SET_RESOURCE_PROP",
                resourceId: n.id,
                propName: e,
                propValue: t
            }),
            this.sync(n)
        }
        ,
        e.prototype.setExtendedProp = function(e, t) {
            var n = this._resource;
            this._context.dispatch({
                type: "SET_RESOURCE_EXTENDED_PROP",
                resourceId: n.id,
                propName: e,
                propValue: t
            }),
            this.sync(n)
        }
        ,
        e.prototype.sync = function(t) {
            var n = this._context
              , r = t.id;
            this._resource = n.getCurrentData().resourceStore[r],
            n.emitter.trigger("resourceChange", {
                oldResource: new e(n,t),
                resource: this,
                revert: function() {
                    var e;
                    n.dispatch({
                        type: "ADD_RESOURCE",
                        resourceHash: (e = {},
                        e[r] = t,
                        e)
                    })
                }
            })
        }
        ,
        e.prototype.remove = function() {
            var e = this._context
              , t = this._resource
              , n = t.id;
            e.dispatch({
                type: "REMOVE_RESOURCE",
                resourceId: n
            }),
            e.emitter.trigger("resourceRemove", {
                resource: this,
                revert: function() {
                    var r;
                    e.dispatch({
                        type: "ADD_RESOURCE",
                        resourceHash: (r = {},
                        r[n] = t,
                        r)
                    })
                }
            })
        }
        ,
        e.prototype.getParent = function() {
            var t = this._context
              , n = this._resource.parentId;
            return n ? new e(t,t.getCurrentData().resourceSource[n]) : null
        }
        ,
        e.prototype.getChildren = function() {
            var t = this._resource.id
              , n = this._context
              , r = n.getCurrentData().resourceStore
              , o = [];
            for (var i in r)
                r[i].parentId === t && o.push(new e(n,r[i]));
            return o
        }
        ,
        e.prototype.getEvents = function() {
            var e = this._resource.id
              , t = this._context
              , n = t.getCurrentData().eventStore
              , r = n.defs
              , o = n.instances
              , i = [];
            for (var a in o) {
                var s = o[a]
                  , l = r[s.defId];
                -1 !== l.resourceIds.indexOf(e) && i.push(new gn(t,l,s))
            }
            return i
        }
        ,
        Object.defineProperty(e.prototype, "id", {
            get: function() {
                return Eu(this._resource.id)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "title", {
            get: function() {
                return this._resource.title
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventConstraint", {
            get: function() {
                return this._resource.ui.constraints[0] || null
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventOverlap", {
            get: function() {
                return this._resource.ui.overlap
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventAllow", {
            get: function() {
                return this._resource.ui.allows[0] || null
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventBackgroundColor", {
            get: function() {
                return this._resource.ui.backgroundColor
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventBorderColor", {
            get: function() {
                return this._resource.ui.borderColor
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventTextColor", {
            get: function() {
                return this._resource.ui.textColor
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventClassNames", {
            get: function() {
                return this._resource.ui.classNames
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "extendedProps", {
            get: function() {
                return this._resource.extendedProps
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.toPlainObject = function(e) {
            void 0 === e && (e = {});
            var t = this._resource
              , n = t.ui
              , r = this.id
              , o = {};
            return r && (o.id = r),
            t.title && (o.title = t.title),
            e.collapseEventColor && n.backgroundColor && n.backgroundColor === n.borderColor ? o.eventColor = n.backgroundColor : (n.backgroundColor && (o.eventBackgroundColor = n.backgroundColor),
            n.borderColor && (o.eventBorderColor = n.borderColor)),
            n.textColor && (o.eventTextColor = n.textColor),
            n.classNames.length && (o.eventClassNames = n.classNames),
            Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? nu(o, t.extendedProps) : o.extendedProps = t.extendedProps),
            o
        }
        ,
        e.prototype.toJSON = function() {
            return this.toPlainObject()
        }
        ,
        e
    }();
    vn.prototype.addResource = function(e, t) {
        var n, r = this;
        void 0 === t && (t = !0);
        var o, i, a = this.getCurrentData();
        e instanceof Cu ? ((n = {})[(i = e._resource).id] = i,
        o = n) : i = Su(e, "", o = {}, a),
        this.dispatch({
            type: "ADD_RESOURCE",
            resourceHash: o
        }),
        t && this.trigger("_scrollRequest", {
            resourceId: i.id
        });
        var s = new Cu(a,i);
        return a.emitter.trigger("resourceAdd", {
            resource: s,
            revert: function() {
                r.dispatch({
                    type: "REMOVE_RESOURCE",
                    resourceId: i.id
                })
            }
        }),
        s
    }
    ,
    vn.prototype.getResourceById = function(e) {
        e = String(e);
        var t = this.getCurrentData();
        if (t.resourceStore) {
            var n = t.resourceStore[e];
            if (n)
                return new Cu(t,n)
        }
        return null
    }
    ,
    vn.prototype.getResources = function() {
        var e = this.getCurrentData()
          , t = e.resourceStore
          , n = [];
        if (t)
            for (var r in t)
                n.push(new Cu(e,t[r]));
        return n
    }
    ,
    vn.prototype.getTopLevelResources = function() {
        var e = this.getCurrentData()
          , t = e.resourceStore
          , n = [];
        if (t)
            for (var r in t)
                t[r].parentId || n.push(new Cu(e,t[r]));
        return n
    }
    ,
    vn.prototype.refetchResources = function() {
        this.dispatch({
            type: "REFETCH_RESOURCES"
        })
    }
    ;
    var Ru = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return tu(t, e),
        t.prototype.getKeyInfo = function(e) {
            return nu({
                "": {}
            }, e.resourceStore)
        }
        ,
        t.prototype.getKeysForDateSpan = function(e) {
            return [e.resourceId || ""]
        }
        ,
        t.prototype.getKeysForEventDef = function(e) {
            var t = e.resourceIds;
            return t.length ? t : [""]
        }
        ,
        t
    }(An);
    function Tu(e, t) {
        return nu(nu({}, t), {
            constraints: xu(e, t.constraints)
        })
    }
    function xu(e, t) {
        return t.map(function(t) {
            var n = t.defs;
            if (n)
                for (var r in n) {
                    var o = n[r].resourceIds;
                    if (o.length && -1 === o.indexOf(e))
                        return !1
                }
            return t
        })
    }
    gn.prototype.getResources = function() {
        var e = this._context.calendarApi;
        return this._def.resourceIds.map(function(t) {
            return e.getResourceById(t)
        })
    }
    ,
    gn.prototype.setResources = function(e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            var o = r[n]
              , i = null;
            "string" == typeof o ? i = o : "number" == typeof o ? i = String(o) : o instanceof Cu ? i = o.id : console.warn("unknown resource type: " + o),
            i && t.push(i)
        }
        this.mutate({
            standardProps: {
                resourceIds: t
            }
        })
    }
    ;
    var ku = {
        resources: function(e, t) {
            t.getCurrentData().resourceSource._raw !== e && t.dispatch({
                type: "RESET_RESOURCE_SOURCE",
                resourceSourceInput: e
            })
        }
    };
    var Mu = j("id,title");
    var _u = {
        initialResources: ct,
        resources: ct,
        eventResourceEditable: Boolean,
        refetchResourcesOnNavigate: Boolean,
        resourceOrder: j,
        filterResourcesWithEvents: Boolean,
        resourceGroupField: String,
        resourceAreaWidth: ct,
        resourceAreaColumns: ct,
        resourcesInitiallyExpanded: Boolean,
        datesAboveResources: Boolean,
        needsResourceData: Boolean,
        resourceAreaHeaderClassNames: ct,
        resourceAreaHeaderContent: ct,
        resourceAreaHeaderDidMount: ct,
        resourceAreaHeaderWillUnmount: ct,
        resourceGroupLabelClassNames: ct,
        resourceGroupLabelContent: ct,
        resourceGroupLabelDidMount: ct,
        resourceGroupLabelWillUnmount: ct,
        resourceLabelClassNames: ct,
        resourceLabelContent: ct,
        resourceLabelDidMount: ct,
        resourceLabelWillUnmount: ct,
        resourceLaneClassNames: ct,
        resourceLaneContent: ct,
        resourceLaneDidMount: ct,
        resourceLaneWillUnmount: ct,
        resourceGroupLaneClassNames: ct,
        resourceGroupLaneContent: ct,
        resourceGroupLaneDidMount: ct,
        resourceGroupLaneWillUnmount: ct
    }
      , Pu = {
        resourcesSet: ct,
        resourceAdd: ct,
        resourceChange: ct,
        resourceRemove: ct
    };
    function Iu(e) {
        return m(or.Consumer, null, function(t) {
            var n = t.options
              , r = {
                resource: new Cu(t,e.resource),
                date: e.date ? t.dateEnv.toDate(e.date) : null,
                view: t.viewApi
            }
              , o = {
                "data-resource-id": e.resource.id,
                "data-date": e.date ? He(e.date) : void 0
            };
            return m(Rr, {
                hookProps: r,
                classNames: n.resourceLabelClassNames,
                content: n.resourceLabelContent,
                defaultContent: Nu,
                didMount: n.resourceLabelDidMount,
                willUnmount: n.resourceLabelWillUnmount
            }, function(t, n, r, i) {
                return e.children(t, n, o, r, i)
            })
        })
    }
    function Nu(e) {
        return e.resource.title || e.resource.id
    }
    du({
        ignoreRange: !0,
        parseMeta: function(e) {
            return Array.isArray(e.resources) ? e.resources : null
        },
        fetch: function(e, t) {
            t({
                rawResources: e.resourceSource.meta
            })
        }
    }),
    du({
        parseMeta: function(e) {
            return "function" == typeof e.resources ? e.resources : null
        },
        fetch: function(e, t, n) {
            var r = e.context.dateEnv
              , o = e.resourceSource.meta
              , i = e.range ? {
                start: r.toDate(e.range.start),
                end: r.toDate(e.range.end),
                startStr: r.formatIso(e.range.start),
                endStr: r.formatIso(e.range.end),
                timeZone: r.timeZone
            } : {};
            Kn(o.bind(null, i), function(e) {
                t({
                    rawResources: e
                })
            }, n)
        }
    }),
    du({
        parseMeta: function(e) {
            return e.url ? {
                url: e.url,
                method: (e.method || "GET").toUpperCase(),
                extraParams: e.extraParams
            } : null
        },
        fetch: function(e, t, n) {
            var r = e.resourceSource.meta
              , o = function(e, t, n) {
                var r, o, i, a, s = n.dateEnv, l = n.options, u = {};
                t && (null == (r = e.startParam) && (r = l.startParam),
                null == (o = e.endParam) && (o = l.endParam),
                null == (i = e.timeZoneParam) && (i = l.timeZoneParam),
                u[r] = s.formatIso(t.start),
                u[o] = s.formatIso(t.end),
                "local" !== s.timeZone && (u[i] = s.timeZone));
                a = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                return nu(u, a),
                u
            }(r, e.range, e.context);
            eo(r.method, r.url, o, function(e, n) {
                t({
                    rawResources: e,
                    xhr: n
                })
            }, function(e, t) {
                n({
                    message: e,
                    xhr: t
                })
            })
        }
    });
    var Hu = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return tu(t, e),
        t.prototype.render = function() {
            var e = this.props;
            return m(Iu, {
                resource: e.resource,
                date: e.date
            }, function(t, n, r, o, i) {
                return m("th", nu({
                    ref: t,
                    className: ["fc-col-header-cell", "fc-resource"].concat(n).join(" "),
                    colSpan: e.colSpan
                }, r), m("div", {
                    className: "fc-scrollgrid-sync-inner"
                }, m("span", {
                    className: ["fc-col-header-cell-cushion", e.isSticky ? "fc-sticky" : ""].join(" "),
                    ref: o
                }, i)))
            })
        }
        ,
        t
    }(sr)
      , Ou = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.buildDateFormat = Le(Au),
            t
        }
        return tu(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.context
              , r = this.buildDateFormat(n.options.dayHeaderFormat, t.datesRepDistinctDays, t.dates.length);
            return m(zo, {
                unit: "day"
            }, function(o, i) {
                return 1 === t.dates.length ? e.renderResourceRow(t.resources, t.dates[0]) : n.options.datesAboveResources ? e.renderDayAndResourceRows(t.dates, r, i, t.resources) : e.renderResourceAndDayRows(t.resources, t.dates, r, i)
            })
        }
        ,
        t.prototype.renderResourceRow = function(e, t) {
            var n = e.map(function(e) {
                return m(Hu, {
                    key: e.id,
                    resource: e,
                    colSpan: 1,
                    date: t
                })
            });
            return this.buildTr(n, "resources")
        }
        ,
        t.prototype.renderDayAndResourceRows = function(e, t, n, r) {
            for (var o = [], i = [], a = 0, s = e; a < s.length; a++) {
                var l = s[a];
                o.push(this.renderDateCell(l, t, n, r.length, null, !0));
                for (var u = 0, c = r; u < c.length; u++) {
                    var d = c[u];
                    i.push(m(Hu, {
                        key: d.id + ":" + l.toISOString(),
                        resource: d,
                        colSpan: 1,
                        date: l
                    }))
                }
            }
            return m(S, null, this.buildTr(o, "day"), this.buildTr(i, "resources"))
        }
        ,
        t.prototype.renderResourceAndDayRows = function(e, t, n, r) {
            for (var o = [], i = [], a = 0, s = e; a < s.length; a++) {
                var l = s[a];
                o.push(m(Hu, {
                    key: l.id,
                    resource: l,
                    colSpan: t.length,
                    isSticky: !0
                }));
                for (var u = 0, c = t; u < c.length; u++) {
                    var d = c[u];
                    i.push(this.renderDateCell(d, n, r, 1, l))
                }
            }
            return m(S, null, this.buildTr(o, "day"), this.buildTr(i, "resources"))
        }
        ,
        t.prototype.renderDateCell = function(e, t, n, r, o, i) {
            var a = this.props
              , s = o ? ":" + o.id : ""
              , l = o ? {
                resource: new Cu(this.context,o)
            } : {}
              , u = o ? {
                "data-resource-id": o.id
            } : {};
            return a.datesRepDistinctDays ? m(Uo, {
                key: e.toISOString() + s,
                date: e,
                dateProfile: a.dateProfile,
                todayRange: n,
                colCnt: a.dates.length * a.resources.length,
                dayHeaderFormat: t,
                colSpan: r,
                isSticky: i,
                extraHookProps: l,
                extraDataAttrs: u
            }) : m(jo, {
                key: e.getUTCDay() + s,
                dow: e.getUTCDay(),
                dayHeaderFormat: t,
                colSpan: r,
                isSticky: i,
                extraHookProps: l,
                extraDataAttrs: u
            })
        }
        ,
        t.prototype.buildTr = function(e, t) {
            var n = this.props.renderIntro;
            return e.length || (e = [m("td", {
                key: 0
            }, " ")]),
            m("tr", {
                key: t
            }, n && n(), e)
        }
        ,
        t
    }(sr);
    function Au(e, t, n) {
        return e || Ao(t, n)
    }
    var Lu = function(e) {
        for (var t = {}, n = [], r = 0; r < e.length; r += 1) {
            var o = e[r].id;
            n.push(o),
            t[o] = r
        }
        this.ids = n,
        this.indicesById = t,
        this.length = e.length
    }
      , Wu = function() {
        function e(e, t, n) {
            this.dayTableModel = e,
            this.resources = t,
            this.context = n,
            this.resourceIndex = new Lu(t),
            this.rowCnt = e.rowCnt,
            this.colCnt = e.colCnt * t.length,
            this.cells = this.buildCells()
        }
        return e.prototype.buildCells = function() {
            for (var e = this.rowCnt, t = this.dayTableModel, n = this.resources, r = [], o = 0; o < e; o += 1) {
                for (var i = [], a = 0; a < t.colCnt; a += 1)
                    for (var s = 0; s < n.length; s += 1) {
                        var l = n[s]
                          , u = {
                            resource: new Cu(this.context,l)
                        }
                          , c = {
                            "data-resource-id": l.id
                        }
                          , d = t.cells[o][a].date;
                        i[this.computeCol(a, s)] = {
                            key: l.id + ":" + d.toISOString(),
                            date: d,
                            resource: l,
                            extraHookProps: u,
                            extraDataAttrs: c,
                            extraClassNames: ["fc-resource"]
                        }
                    }
                r.push(i)
            }
            return r
        }
        ,
        e
    }()
      , Uu = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return tu(t, e),
        t.prototype.computeCol = function(e, t) {
            return t * this.dayTableModel.colCnt + e
        }
        ,
        t.prototype.computeColRanges = function(e, t, n) {
            return [{
                firstCol: this.computeCol(e, n),
                lastCol: this.computeCol(t, n),
                isStart: !0,
                isEnd: !0
            }]
        }
        ,
        t
    }(Wu)
      , ju = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return tu(t, e),
        t.prototype.computeCol = function(e, t) {
            return e * this.resources.length + t
        }
        ,
        t.prototype.computeColRanges = function(e, t, n) {
            for (var r = [], o = e; o <= t; o += 1) {
                var i = this.computeCol(o, n);
                r.push({
                    firstCol: i,
                    lastCol: i,
                    isStart: o === e,
                    isEnd: o === t
                })
            }
            return r
        }
        ,
        t
    }(Wu)
      , zu = []
      , Bu = function() {
        function e() {
            this.joinDateSelection = Le(this.joinSegs),
            this.joinBusinessHours = Le(this.joinSegs),
            this.joinFgEvents = Le(this.joinSegs),
            this.joinBgEvents = Le(this.joinSegs),
            this.joinEventDrags = Le(this.joinInteractions),
            this.joinEventResizes = Le(this.joinInteractions)
        }
        return e.prototype.joinProps = function(e, t) {
            for (var n = [], r = [], o = [], i = [], a = [], s = [], l = "", u = 0, c = t.resourceIndex.ids.concat([""]); u < c.length; u++) {
                var d = c[u]
                  , p = e[d];
                n.push(p.dateSelectionSegs),
                r.push(d ? p.businessHourSegs : zu),
                o.push(d ? p.fgEventSegs : zu),
                i.push(p.bgEventSegs),
                a.push(p.eventDrag),
                s.push(p.eventResize),
                l = l || p.eventSelection
            }
            return {
                dateSelectionSegs: this.joinDateSelection.apply(this, ru([t], n)),
                businessHourSegs: this.joinBusinessHours.apply(this, ru([t], r)),
                fgEventSegs: this.joinFgEvents.apply(this, ru([t], o)),
                bgEventSegs: this.joinBgEvents.apply(this, ru([t], i)),
                eventDrag: this.joinEventDrags.apply(this, ru([t], a)),
                eventResize: this.joinEventResizes.apply(this, ru([t], s)),
                eventSelection: l
            }
        }
        ,
        e.prototype.joinSegs = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            for (var r = e.resources.length, o = [], i = 0; i < r; i += 1) {
                for (var a = 0, s = t[i]; a < s.length; a++) {
                    var l = s[a];
                    o.push.apply(o, this.transformSeg(l, e, i))
                }
                for (var u = 0, c = t[r]; u < c.length; u++) {
                    l = c[u];
                    o.push.apply(o, this.transformSeg(l, e, i))
                }
            }
            return o
        }
        ,
        e.prototype.expandSegs = function(e, t) {
            for (var n = e.resources.length, r = [], o = 0; o < n; o += 1)
                for (var i = 0, a = t; i < a.length; i++) {
                    var s = a[i];
                    r.push.apply(r, this.transformSeg(s, e, o))
                }
            return r
        }
        ,
        e.prototype.joinInteractions = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            for (var r = e.resources.length, o = {}, i = [], a = !1, s = !1, l = 0; l < r; l += 1) {
                var u = t[l];
                if (u) {
                    a = !0;
                    for (var c = 0, d = u.segs; c < d.length; c++) {
                        var p = d[c];
                        i.push.apply(i, this.transformSeg(p, e, l))
                    }
                    nu(o, u.affectedInstances),
                    s = s || u.isEvent
                }
                if (t[r])
                    for (var f = 0, h = t[r].segs; f < h.length; f++) {
                        p = h[f];
                        i.push.apply(i, this.transformSeg(p, e, l))
                    }
            }
            return a ? {
                affectedInstances: o,
                segs: i,
                isEvent: s
            } : null
        }
        ,
        e
    }()
      , Fu = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return tu(t, e),
        t.prototype.getKeyInfo = function(e) {
            var t = e.resourceDayTableModel
              , n = fe(t.resourceIndex.indicesById, function(e) {
                return t.resources[e]
            });
            return n[""] = {},
            n
        }
        ,
        t.prototype.getKeysForDateSpan = function(e) {
            return [e.resourceId || ""]
        }
        ,
        t.prototype.getKeysForEventDef = function(e) {
            var t = e.resourceIds;
            return t.length ? t : [""]
        }
        ,
        t
    }(An);
    function Vu(e, t) {
        return Gu(e, [], t, !1, {}, !0).map(function(e) {
            return e.resource
        })
    }
    function Gu(e, t, n, r, o, i) {
        var a = [];
        return function e(t, n, r, o, i, a, s) {
            for (var l = 0; l < t.length; l += 1) {
                var u = t[l]
                  , c = u.group;
                if (c)
                    if (r) {
                        var d = n.length
                          , p = o.length;
                        if (e(u.children, n, r, o.concat(0), i, a, s),
                        d < n.length) {
                            var f = n[d]
                              , h = f.rowSpans = f.rowSpans.slice();
                            h[p] = n.length - d
                        }
                    } else {
                        var v = c.spec.field + ":" + c.value
                          , g = null != a[v] ? a[v] : s;
                        n.push({
                            id: v,
                            group: c,
                            isExpanded: g
                        }),
                        g && e(u.children, n, r, o, i + 1, a, s)
                    }
                else if (u.resource) {
                    var v = u.resource.id
                      , g = null != a[v] ? a[v] : s;
                    n.push({
                        id: v,
                        rowSpans: o,
                        depth: i,
                        isExpanded: g,
                        hasChildren: Boolean(u.children.length),
                        resource: u.resource,
                        resourceFields: u.resourceFields
                    }),
                    g && e(u.children, n, r, o, i + 1, a, s)
                }
            }
        }(function(e, t, n, r) {
            var o = function(e, t) {
                var n = {};
                for (var r in e) {
                    var o = e[r];
                    n[r] = {
                        resource: o,
                        resourceFields: Zu(o),
                        children: []
                    }
                }
                for (var r in e) {
                    if ((o = e[r]).parentId) {
                        var i = n[o.parentId];
                        i && Yu(n[r], i.children, t)
                    }
                }
                return n
            }(e, r)
              , i = [];
            for (var a in o) {
                var s = o[a];
                s.resource.parentId || qu(s, i, n, 0, t, r)
            }
            return i
        }(e, r ? -1 : 1, t, n), a, r, [], 0, o, i),
        a
    }
    function qu(e, t, n, r, o, i) {
        n.length && (-1 === o || r <= o) ? qu(e, function(e, t, n) {
            var r, o, i = e.resourceFields[n.field];
            if (n.order)
                for (o = 0; o < t.length; o += 1) {
                    if ((s = t[o]).group) {
                        var a = F(i, s.group.value) * n.order;
                        if (0 === a) {
                            r = s;
                            break
                        }
                        if (a < 0)
                            break
                    }
                }
            else
                for (o = 0; o < t.length; o += 1) {
                    var s;
                    if ((s = t[o]).group && i === s.group.value) {
                        r = s;
                        break
                    }
                }
            r || (r = {
                group: {
                    value: i,
                    spec: n
                },
                children: []
            },
            t.splice(o, 0, r));
            return r
        }(e, t, n[0]).children, n.slice(1), r + 1, o, i) : Yu(e, t, i)
    }
    function Yu(e, t, n) {
        var r;
        for (r = 0; r < t.length; r += 1) {
            if (z(t[r].resourceFields, e.resourceFields, n) > 0)
                break
        }
        t.splice(r, 0, e)
    }
    function Zu(e) {
        var t = nu(nu(nu({}, e.extendedProps), e.ui), e);
        return delete t.ui,
        delete t.extendedProps,
        t
    }
    var Xu = wr({
        deps: [qs],
        reducers: [function(e, t, n) {
            var r = vu(e && e.resourceSource, t, n);
            return {
                resourceSource: r,
                resourceStore: wu(e && e.resourceStore, t, r, n),
                resourceEntityExpansions: function(e, t) {
                    var n;
                    if (!e || !t)
                        return {};
                    switch (t.type) {
                    case "SET_RESOURCE_ENTITY_EXPANDED":
                        return nu(nu({}, e), ((n = {})[t.id] = t.isExpanded,
                        n));
                    default:
                        return e
                    }
                }(e && e.resourceEntityExpansions, t),
                loadingLevel: n.loadingLevel + (r && r.isFetching ? 1 : 0)
            }
        }
        ],
        eventRefiners: Du,
        eventDefMemberAdders: [function(e) {
            return {
                resourceIds: (t = e.resourceIds,
                (t || []).map(function(e) {
                    return String(e)
                })).concat(e.resourceId ? [e.resourceId] : []),
                resourceEditable: e.resourceEditable
            };
            var t
        }
        ],
        isDraggableTransformers: [function(e, t, n, r) {
            if (!e) {
                var o = r.getCurrentData();
                if (o.viewSpecs[o.currentViewType].optionDefaults.needsResourceData && ou(t, r))
                    return !0
            }
            return e
        }
        ],
        eventDragMutationMassagers: [/*!
FullCalendar Scheduler v5.3.2
Docs & License: https://fullcalendar.io/scheduler
(c) 2020 Adam Shaw
*/
        function(e, t, n) {
            var r = t.dateSpan.resourceId
              , o = n.dateSpan.resourceId;
            r && o && r !== o && (e.resourceMutation = {
                matchResourceId: r,
                setResourceId: o
            })
        }
        ],
        eventDefMutationAppliers: [function(e, t, n) {
            var r = t.resourceMutation;
            if (r && ou(e, n)) {
                var o = e.resourceIds.indexOf(r.matchResourceId);
                if (-1 !== o) {
                    var i = e.resourceIds.slice();
                    i.splice(o, 1),
                    -1 === i.indexOf(r.setResourceId) && i.push(r.setResourceId),
                    e.resourceIds = i
                }
            }
        }
        ],
        dateSelectionTransformers: [function(e, t) {
            var n = e.dateSpan.resourceId
              , r = t.dateSpan.resourceId;
            return n && r ? (!1 !== e.component.allowAcrossResources || n === r) && {
                resourceId: n
            } : null
        }
        ],
        datePointTransforms: [function(e, t) {
            return e.resourceId ? {
                resource: t.calendarApi.getResourceById(e.resourceId)
            } : {}
        }
        ],
        dateSpanTransforms: [function(e, t) {
            return e.resourceId ? {
                resource: t.calendarApi.getResourceById(e.resourceId)
            } : {}
        }
        ],
        viewPropsTransformers: [iu, su],
        isPropsValid: function(e, t) {
            var n = (new Ru).splitProps(nu(nu({}, e), {
                resourceStore: t.getCurrentData().resourceStore
            }));
            for (var r in n) {
                var o = n[r];
                if (r && n[""] && (o = nu(nu({}, o), {
                    eventStore: ht(n[""].eventStore, o.eventStore),
                    eventUiBases: nu(nu({}, n[""].eventUiBases), o.eventUiBases)
                })),
                !gr(o, t, {
                    resourceId: r
                }, Tu.bind(null, r)))
                    return !1
            }
            return !0
        },
        externalDefTransforms: [function(e) {
            return e.resourceId ? {
                resourceId: e.resourceId
            } : {}
        }
        ],
        eventResizeJoinTransforms: [function(e, t) {
            return (!1 !== e.component.allowAcrossResources || e.dateSpan.resourceId === t.dateSpan.resourceId) && null
        }
        ],
        eventDropTransformers: [function(e, t) {
            var n = e.resourceMutation;
            if (n) {
                var r = t.calendarApi;
                return {
                    oldResource: r.getResourceById(n.matchResourceId),
                    newResource: r.getResourceById(n.setResourceId)
                }
            }
            return {
                oldResource: null,
                newResource: null
            }
        }
        ],
        optionChangeHandlers: ku,
        optionRefiners: _u,
        listenerRefiners: Pu,
        propSetHandlers: {
            resourceStore: function(e, t) {
                var n = t.emitter;
                n.hasHandlers("resourcesSet") && n.trigger("resourcesSet", function(e, t) {
                    var n = [];
                    for (var r in e)
                        n.push(new Cu(t,e[r]));
                    return n
                }(e, t))
            }
        }
    })
      , Ku = function(e, t) {
        return (Ku = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function Ju(e, t) {
        function n() {
            this.constructor = e
        }
        Ku(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var $u = function() {
        return ($u = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    Object.create;
    /*!
FullCalendar Scheduler v5.3.2
Docs & License: https://fullcalendar.io/scheduler
(c) 2020 Adam Shaw
*/
    function Qu(e) {
        for (var t = e.depth, n = e.hasChildren, r = e.isExpanded, o = e.onExpanderClick, i = [], a = 0; a < t; a += 1)
            i.push(m("span", {
                className: "fc-icon"
            }));
        var s = ["fc-icon"];
        return n && (r ? s.push("fc-icon-minus-square") : s.push("fc-icon-plus-square")),
        i.push(m("span", {
            className: "fc-datagrid-expander" + (n ? "" : " fc-datagrid-expander-placeholder"),
            onClick: o
        }, m("span", {
            className: s.join(" ")
        }))),
        m.apply(void 0, function() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                e += arguments[t].length;
            var r = Array(e)
              , o = 0;
            for (t = 0; t < n; t++)
                for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
                o++)
                    r[o] = i[a];
            return r
        }([S, {}], i))
    }
    function ec(e) {
        return {
            resource: new Cu(e.context,e.resource),
            fieldValue: e.fieldValue,
            view: e.context.viewApi
        }
    }
    var tc = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this.props;
            return m(xr, {
                hookProps: e.hookProps,
                content: e.colSpec.cellContent,
                defaultContent: nc
            }, function(e, t) {
                return m("span", {
                    className: "fc-datagrid-cell-main",
                    ref: e
                }, t)
            })
        }
        ,
        t
    }(sr);
    function nc(e) {
        return e.fieldValue || m(S, null, " ")
    }
    var rc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.refineHookProps = We(ec),
            t.normalizeClassNames = _r(),
            t.onExpanderClick = function(e) {
                var n = t.props;
                n.hasChildren && t.context.dispatch({
                    type: "SET_RESOURCE_ENTITY_EXPANDED",
                    id: n.resource.id,
                    isExpanded: !n.isExpanded
                })
            }
            ,
            t
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.context
              , r = t.colSpec
              , o = this.refineHookProps({
                resource: t.resource,
                fieldValue: t.fieldValue,
                context: n
            })
              , i = this.normalizeClassNames(r.cellClassNames, o);
            return m(Mr, {
                hookProps: o,
                didMount: r.cellDidMount,
                willUnmount: r.cellWillUnmount
            }, function(n) {
                return m("td", {
                    ref: n,
                    "data-resource-id": t.resource.id,
                    className: ["fc-datagrid-cell", "fc-resource"].concat(i).join(" ")
                }, m("div", {
                    className: "fc-datagrid-cell-frame",
                    style: {
                        height: t.innerHeight
                    }
                }, m("div", {
                    className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner"
                }, r.isMain && m(Qu, {
                    depth: t.depth,
                    hasChildren: t.hasChildren,
                    isExpanded: t.isExpanded,
                    onExpanderClick: e.onExpanderClick
                }), m(tc, {
                    hookProps: o,
                    colSpec: r
                }))))
            })
        }
        ,
        t
    }(sr)
      , oc = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = e.colSpec
              , r = {
                groupValue: e.fieldValue,
                view: t.viewApi
            };
            return m(Rr, {
                hookProps: r,
                classNames: n.cellClassNames,
                content: n.cellContent,
                defaultContent: ic,
                didMount: n.cellDidMount,
                willUnmount: n.cellWillUnmount
            }, function(t, n, r, o) {
                return m("td", {
                    className: ["fc-datagrid-cell", "fc-resource-group"].concat(n).join(" "),
                    rowSpan: e.rowSpan,
                    ref: t
                }, m("div", {
                    className: "fc-datagrid-cell-frame fc-datagrid-cell-frame-liquid"
                }, m("div", {
                    className: "fc-datagrid-cell-cushion fc-sticky",
                    ref: r
                }, o)))
            })
        }
        ,
        t
    }(sr);
    function ic(e) {
        return e.groupValue || m(S, null, " ")
    }
    var ac = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = e.resource
              , n = e.rowSpans
              , r = e.depth
              , o = Zu(t);
            return m("tr", null, e.colSpecs.map(function(i, a) {
                var s = n[a];
                if (0 === s)
                    return null;
                null == s && (s = 1);
                var l = i.field ? o[i.field] : t.title || Eu(t.id);
                return s > 1 ? m(oc, {
                    key: a,
                    colSpec: i,
                    fieldValue: l,
                    rowSpan: s
                }) : m(rc, {
                    key: a,
                    colSpec: i,
                    resource: t,
                    fieldValue: l,
                    depth: r,
                    hasChildren: e.hasChildren,
                    isExpanded: e.isExpanded,
                    innerHeight: e.innerHeight
                })
            }))
        }
        ,
        t
    }(sr);
    ac.addPropsEquality({
        rowSpans: Ae
    });
    var sc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.innerInnerRef = b(),
            t.onExpanderClick = function() {
                var e = t.props;
                t.context.dispatch({
                    type: "SET_RESOURCE_ENTITY_EXPANDED",
                    id: e.id,
                    isExpanded: !e.isExpanded
                })
            }
            ,
            t
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.context
              , r = {
                groupValue: t.group.value,
                view: n.viewApi
            }
              , o = t.group.spec;
            return m("tr", null, m(Rr, {
                hookProps: r,
                classNames: o.labelClassNames,
                content: o.labelContent,
                defaultContent: lc,
                didMount: o.labelDidMount,
                willUnmount: o.labelWillUnmount
            }, function(r, o, i, a) {
                return m("td", {
                    ref: r,
                    colSpan: t.spreadsheetColCnt,
                    className: ["fc-datagrid-cell", "fc-resource-group", n.theme.getClass("tableCellShaded")].concat(o).join(" ")
                }, m("div", {
                    className: "fc-datagrid-cell-frame",
                    style: {
                        height: t.innerHeight
                    }
                }, m("div", {
                    className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner",
                    ref: e.innerInnerRef
                }, m(Qu, {
                    depth: 0,
                    hasChildren: !0,
                    isExpanded: t.isExpanded,
                    onExpanderClick: e.onExpanderClick
                }), m("span", {
                    className: "fc-datagrid-cell-main",
                    ref: i
                }, a))))
            }))
        }
        ,
        t
    }(sr);
    function lc(e) {
        return e.groupValue || m(S, null, " ")
    }
    sc.addPropsEquality({
        group: function(e, t) {
            return e.spec === t.spec && e.value === t.value
        }
    });
    var uc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.resizerElRefs = new Jo(t._handleColResizerEl.bind(t)),
            t.colDraggings = {},
            t
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = t.colSpecs
              , r = t.superHeaderRendering
              , o = t.rowInnerHeights
              , i = {
                view: this.context.viewApi
            }
              , a = [];
            if (o = o.slice(),
            r) {
                var s = o.shift();
                a.push(m("tr", {
                    key: "row-super"
                }, m(Rr, {
                    hookProps: i,
                    classNames: r.headerClassNames,
                    content: r.headerContent,
                    didMount: r.headerDidMount,
                    willUnmount: r.headerWillUnmount
                }, function(e, t, r, o) {
                    return m("th", {
                        colSpan: n.length,
                        ref: e,
                        className: ["fc-datagrid-cell", "fc-datagrid-cell-super"].concat(t).join(" ")
                    }, m("div", {
                        className: "fc-datagrid-cell-frame",
                        style: {
                            height: s
                        }
                    }, m("div", {
                        className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner",
                        ref: r
                    }, o)))
                })))
            }
            var l = o.shift();
            return a.push(m("tr", {
                key: "row"
            }, n.map(function(t, r) {
                var o = r === n.length - 1;
                return m(Rr, {
                    key: r,
                    hookProps: i,
                    classNames: t.headerClassNames,
                    content: t.headerContent,
                    didMount: t.headerDidMount,
                    willUnmount: t.headerWillUnmount
                }, function(n, i, a, s) {
                    return m("th", {
                        ref: n,
                        className: ["fc-datagrid-cell"].concat(i).join(" ")
                    }, m("div", {
                        className: "fc-datagrid-cell-frame",
                        style: {
                            height: l
                        }
                    }, m("div", {
                        className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner"
                    }, t.isMain && m("span", {
                        className: "fc-datagrid-expander fc-datagrid-expander-placeholder"
                    }, m("span", {
                        className: "fc-icon"
                    })), m("span", {
                        className: "fc-datagrid-cell-main",
                        ref: a
                    }, s)), !o && m("div", {
                        className: "fc-datagrid-cell-resizer",
                        ref: e.resizerElRefs.createRef(r)
                    })))
                })
            }))),
            m(S, null, a)
        }
        ,
        t.prototype._handleColResizerEl = function(e, t) {
            var n, r = this.colDraggings;
            e ? (n = this.initColResizing(e, parseInt(t, 10))) && (r[t] = n) : (n = r[t]) && (n.destroy(),
            delete r[t])
        }
        ,
        t.prototype.initColResizing = function(e, t) {
            var n = this.context
              , r = n.pluginHooks
              , o = n.isRtl
              , i = this.props.onColWidthChange
              , a = r.elementDraggingImpl;
            if (a) {
                var s, l, u = new a(e);
                return u.emitter.on("dragstart", function() {
                    var n = k(T(e, "tr"), "th");
                    l = n.map(function(e) {
                        return e.getBoundingClientRect().width
                    }),
                    s = l[t]
                }),
                u.emitter.on("dragmove", function(e) {
                    l[t] = Math.max(s + e.deltaX * (o ? -1 : 1), 20),
                    i && i(l.slice())
                }),
                u.setAutoScrollEnabled(!1),
                u
            }
            return null
        }
        ,
        t
    }(sr)
      , cc = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = {
                resource: new Cu(t,e.resource)
            };
            return m(xr, {
                hookProps: n,
                content: t.options.resourceLaneContent
            }, function(e, t) {
                return t && m("div", {
                    className: "fc-timeline-lane-misc",
                    ref: e
                }, t)
            })
        }
        ,
        t
    }(sr)
      , dc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.refineHookProps = We(pc),
            t.normalizeClassNames = _r(),
            t.handleHeightChange = function(e, n) {
                t.props.onHeightChange && t.props.onHeightChange(T(e, "tr"), n)
            }
            ,
            t
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.context
              , r = n.options
              , o = this.refineHookProps({
                resource: t.resource,
                context: n
            })
              , i = this.normalizeClassNames(r.resourceLaneClassNames, o);
            return m("tr", {
                ref: t.elRef
            }, m(Mr, {
                hookProps: o,
                didMount: r.resourceLaneDidMount,
                willUnmount: r.resourceLaneWillUnmount
            }, function(n) {
                return m("td", {
                    ref: n,
                    className: ["fc-timeline-lane", "fc-resource"].concat(i).join(" "),
                    "data-resource-id": t.resource.id
                }, m("div", {
                    className: "fc-timeline-lane-frame",
                    style: {
                        height: t.innerHeight
                    }
                }, m(cc, {
                    resource: t.resource
                }), m(Kl, {
                    dateProfile: t.dateProfile,
                    tDateProfile: t.tDateProfile,
                    nowDate: t.nowDate,
                    todayRange: t.todayRange,
                    nextDayThreshold: t.nextDayThreshold,
                    businessHours: t.businessHours,
                    eventStore: t.eventStore,
                    eventUiBases: t.eventUiBases,
                    dateSelection: t.dateSelection,
                    eventSelection: t.eventSelection,
                    eventDrag: t.eventDrag,
                    eventResize: t.eventResize,
                    timelineCoords: t.timelineCoords,
                    onHeightChange: e.handleHeightChange
                })))
            }))
        }
        ,
        t
    }(sr);
    function pc(e) {
        return {
            resource: new Cu(e.context,e.resource)
        }
    }
    var fc = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.props.renderingHooks
              , r = {
                groupValue: t.groupValue,
                view: this.context.viewApi
            };
            return m("tr", {
                ref: t.elRef
            }, m(Rr, {
                hookProps: r,
                classNames: n.laneClassNames,
                content: n.laneContent,
                didMount: n.laneDidMount,
                willUnmount: n.laneWillUnmount
            }, function(n, r, o, i) {
                return m("td", {
                    ref: n,
                    className: ["fc-timeline-lane", "fc-resource-group", e.context.theme.getClass("tableCellShaded")].concat(r).join(" ")
                }, m("div", {
                    style: {
                        height: t.innerHeight
                    },
                    ref: o
                }, i))
            }))
        }
        ,
        t
    }(sr)
      , hc = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context
              , n = e.rowElRefs
              , r = e.innerHeights;
            return m("tbody", null, e.rowNodes.map(function(o, i) {
                if (o.group)
                    return m(fc, {
                        key: o.id,
                        elRef: n.createRef(o.id),
                        groupValue: o.group.value,
                        renderingHooks: o.group.spec,
                        innerHeight: r[i] || ""
                    });
                if (o.resource) {
                    var a = o.resource;
                    return m(dc, $u({
                        key: o.id,
                        elRef: n.createRef(o.id)
                    }, e.splitProps[a.id], {
                        resource: a,
                        dateProfile: e.dateProfile,
                        tDateProfile: e.tDateProfile,
                        nowDate: e.nowDate,
                        todayRange: e.todayRange,
                        nextDayThreshold: t.options.nextDayThreshold,
                        businessHours: a.businessHours || e.fallbackBusinessHours,
                        innerHeight: r[i] || "",
                        timelineCoords: e.slatCoords,
                        onHeightChange: e.onRowHeightChange
                    }))
                }
                return null
            }))
        }
        ,
        t
    }(sr)
      , vc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rootElRef = b(),
            t.rowElRefs = new Jo,
            t
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.context;
            return m("table", {
                ref: this.rootElRef,
                className: "fc-scrollgrid-sync-table " + t.theme.getClass("table"),
                style: {
                    minWidth: e.tableMinWidth,
                    width: e.clientWidth,
                    height: e.minHeight
                }
            }, m(hc, {
                rowElRefs: this.rowElRefs,
                rowNodes: e.rowNodes,
                dateProfile: e.dateProfile,
                tDateProfile: e.tDateProfile,
                nowDate: e.nowDate,
                todayRange: e.todayRange,
                splitProps: e.splitProps,
                fallbackBusinessHours: e.fallbackBusinessHours,
                slatCoords: e.slatCoords,
                innerHeights: e.innerHeights,
                onRowHeightChange: e.onRowHeightChange
            }))
        }
        ,
        t.prototype.componentDidMount = function() {
            this.updateCoords()
        }
        ,
        t.prototype.componentDidUpdate = function() {
            this.updateCoords()
        }
        ,
        t.prototype.componentWillUnmount = function() {
            this.props.onRowCoords && this.props.onRowCoords(null)
        }
        ,
        t.prototype.updateCoords = function() {
            var e, t = this.props;
            t.onRowCoords && null !== t.clientWidth && this.props.onRowCoords(new $n(this.rootElRef.current,(e = this.rowElRefs.currentMap,
            t.rowNodes.map(function(t) {
                return e[t.id]
            })),!1,!0))
        }
        ,
        t
    }(sr);
    var gc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.computeHasResourceBusinessHours = Le(mc),
            t.resourceSplitter = new Ru,
            t.bgSlicer = new Gl,
            t.slatsRef = b(),
            t.state = {
                slatCoords: null
            },
            t.handleEl = function(e) {
                e ? t.context.registerInteractiveComponent(t, {
                    el: e
                }) : t.context.unregisterInteractiveComponent(t)
            }
            ,
            t.handleSlatCoords = function(e) {
                t.setState({
                    slatCoords: e
                }),
                t.props.onSlatCoords && t.props.onSlatCoords(e)
            }
            ,
            t.handleRowCoords = function(e) {
                t.rowCoords = e,
                t.props.onRowCoords && t.props.onRowCoords(e)
            }
            ,
            t
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.state
              , r = this.context
              , o = t.dateProfile
              , i = t.tDateProfile
              , a = Ne(i.slotDuration).unit
              , s = this.computeHasResourceBusinessHours(t.rowNodes)
              , l = this.resourceSplitter.splitProps(t)
              , u = l[""]
              , c = this.bgSlicer.sliceProps(u, o, i.isTimeScale ? null : t.nextDayThreshold, r, o, r.dateProfileGenerator, i, r.dateEnv)
              , d = n.slatCoords && n.slatCoords.dateProfile === t.dateProfile ? n.slatCoords : null;
            return m("div", {
                ref: this.handleEl,
                className: "fc-timeline-body",
                style: {
                    minWidth: t.tableMinWidth
                }
            }, m(zo, {
                unit: a
            }, function(n, a) {
                return m(S, null, m(Fl, {
                    ref: e.slatsRef,
                    dateProfile: o,
                    tDateProfile: i,
                    nowDate: n,
                    todayRange: a,
                    clientWidth: t.clientWidth,
                    tableColGroupNode: t.tableColGroupNode,
                    tableMinWidth: t.tableMinWidth,
                    onCoords: e.handleSlatCoords,
                    onScrollLeftRequest: t.onScrollLeftRequest
                }), m(Vl, {
                    businessHourSegs: s ? null : c.businessHourSegs,
                    bgEventSegs: c.bgEventSegs,
                    timelineCoords: d,
                    eventResizeSegs: c.eventResize ? c.eventResize.segs : [],
                    dateSelectionSegs: c.dateSelectionSegs,
                    nowDate: n,
                    todayRange: a
                }), m(vc, {
                    rowNodes: t.rowNodes,
                    dateProfile: o,
                    tDateProfile: t.tDateProfile,
                    nowDate: n,
                    todayRange: a,
                    splitProps: l,
                    fallbackBusinessHours: s ? t.businessHours : null,
                    clientWidth: t.clientWidth,
                    minHeight: t.expandRows ? t.clientHeight : "",
                    tableMinWidth: t.tableMinWidth,
                    innerHeights: t.rowInnerHeights,
                    slatCoords: d,
                    onRowCoords: e.handleRowCoords,
                    onRowHeightChange: t.onRowHeightChange
                }), r.options.nowIndicator && d && d.isDateInRange(n) && m("div", {
                    className: "fc-timeline-now-indicator-container"
                }, m(vi, {
                    isAxis: !1,
                    date: n
                }, function(e, t, r, o) {
                    return m("div", {
                        ref: e,
                        className: ["fc-timeline-now-indicator-line"].concat(t).join(" "),
                        style: {
                            left: d.dateToCoord(n)
                        }
                    }, o)
                })))
            }))
        }
        ,
        t.prototype.queryHit = function(e, t) {
            var n = this.rowCoords
              , r = n.topToIndex(t);
            if (null != r) {
                var o = this.props.rowNodes[r].resource;
                if (o) {
                    var i = this.slatsRef.current.positionToHit(e);
                    if (i)
                        return {
                            component: this,
                            dateSpan: {
                                range: i.dateSpan.range,
                                allDay: i.dateSpan.allDay,
                                resourceId: o.id
                            },
                            rect: {
                                left: i.left,
                                right: i.right,
                                top: n.tops[r],
                                bottom: n.bottoms[r]
                            },
                            dayEl: i.dayEl,
                            layer: 0
                        }
                }
            }
            return null
        }
        ,
        t
    }(Er);
    function mc(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            var r = n[t].resource;
            if (r && r.businessHours)
                return !0
        }
        return !1
    }
    var yc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.scrollGridRef = b(),
            t.timeBodyScrollerElRef = b(),
            t.spreadsheetHeaderChunkElRef = b(),
            t.rootElRef = b(),
            t.state = {
                resourceAreaWidthOverride: null
            },
            t
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this.props
              , t = this.state
              , n = this.context
              , r = n.options
              , o = !e.forPrint && ui(r)
              , i = !e.forPrint && ci(r)
              , a = [{
                type: "header",
                key: "header",
                syncRowHeights: !0,
                isSticky: o,
                chunks: [{
                    key: "datagrid",
                    elRef: this.spreadsheetHeaderChunkElRef,
                    tableClassName: "fc-datagrid-header",
                    rowContent: e.spreadsheetHeaderRows
                }, {
                    key: "divider",
                    outerContent: m("td", {
                        className: "fc-resource-timeline-divider " + n.theme.getClass("tableCellShaded")
                    })
                }, {
                    key: "timeline",
                    content: e.timeHeaderContent
                }]
            }, {
                type: "body",
                key: "body",
                syncRowHeights: !0,
                liquid: !0,
                expandRows: Boolean(r.expandRows),
                chunks: [{
                    key: "datagrid",
                    tableClassName: "fc-datagrid-body",
                    rowContent: e.spreadsheetBodyRows
                }, {
                    key: "divider",
                    outerContent: m("td", {
                        className: "fc-resource-timeline-divider " + n.theme.getClass("tableCellShaded")
                    })
                }, {
                    key: "timeline",
                    scrollerElRef: this.timeBodyScrollerElRef,
                    content: e.timeBodyContent
                }]
            }];
            i && a.push({
                type: "footer",
                key: "footer",
                isSticky: !0,
                chunks: [{
                    key: "datagrid",
                    content: li
                }, {
                    key: "divider",
                    outerContent: m("td", {
                        className: "fc-resource-timeline-divider " + n.theme.getClass("tableCellShaded")
                    })
                }, {
                    key: "timeline",
                    content: li
                }]
            });
            var s = null != t.resourceAreaWidthOverride ? t.resourceAreaWidthOverride : r.resourceAreaWidth;
            return m(dl, {
                ref: this.scrollGridRef,
                elRef: this.rootElRef,
                liquid: !e.isHeightAuto && !e.forPrint,
                colGroups: [{
                    cols: e.spreadsheetCols,
                    width: s
                }, {
                    cols: []
                }, {
                    cols: e.timeCols
                }],
                sections: a
            })
        }
        ,
        t.prototype.forceTimeScroll = function(e) {
            this.scrollGridRef.current.forceScrollLeft(2, e)
        }
        ,
        t.prototype.forceResourceScroll = function(e) {
            this.scrollGridRef.current.forceScrollTop(1, e)
        }
        ,
        t.prototype.getResourceScroll = function() {
            return this.timeBodyScrollerElRef.current.scrollTop
        }
        ,
        t.prototype.componentDidMount = function() {
            this.initSpreadsheetResizing()
        }
        ,
        t.prototype.componentWillUnmount = function() {
            this.destroySpreadsheetResizing()
        }
        ,
        t.prototype.initSpreadsheetResizing = function() {
            var e = this
              , t = this.context
              , n = t.isRtl
              , r = t.pluginHooks.elementDraggingImpl
              , o = this.spreadsheetHeaderChunkElRef.current;
            if (r) {
                var i, a, s = this.rootElRef.current, l = this.spreadsheetResizerDragging = new r(s,".fc-resource-timeline-divider");
                l.emitter.on("dragstart", function() {
                    i = o.getBoundingClientRect().width,
                    a = s.getBoundingClientRect().width
                }),
                l.emitter.on("dragmove", function(t) {
                    var r = i + t.deltaX * (n ? -1 : 1);
                    r = Math.max(r, 30),
                    r = Math.min(r, a - 30),
                    e.setState({
                        resourceAreaWidthOverride: r
                    })
                }),
                l.setAutoScrollEnabled(!1)
            }
        }
        ,
        t.prototype.destroySpreadsheetResizing = function() {
            this.spreadsheetResizerDragging && this.spreadsheetResizerDragging.destroy()
        }
        ,
        t
    }(sr)
      , bc = function(e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.processColOptions = Le(Dc),
            r.buildTimelineDateProfile = Le(xl),
            r.hasNesting = Le(wc),
            r.buildRowNodes = Le(Gu),
            r.layoutRef = b(),
            r.rowNodes = [],
            r.renderedRowNodes = [],
            r.buildRowIndex = Le(Sc),
            r.handleSlatCoords = function(e) {
                r.setState({
                    slatCoords: e
                })
            }
            ,
            r.handleRowCoords = function(e) {
                r.rowCoords = e,
                r.scrollResponder.update(!1)
            }
            ,
            r.handleMaxCushionWidth = function(e) {
                r.setState({
                    slotCushionMaxWidth: Math.ceil(e)
                })
            }
            ,
            r.handleScrollLeftRequest = function(e) {
                r.layoutRef.current.forceTimeScroll(e)
            }
            ,
            r.handleScrollRequest = function(e) {
                var t = r.rowCoords
                  , n = r.layoutRef.current
                  , o = e.rowId || e.resourceId;
                if (t) {
                    if (o) {
                        var i = r.buildRowIndex(r.renderedRowNodes)[o];
                        if (null != i) {
                            var a = null != e.fromBottom ? t.bottoms[i] - e.fromBottom : t.tops[i];
                            n.forceResourceScroll(a)
                        }
                    }
                    return !0
                }
                return null
            }
            ,
            r.handleColWidthChange = function(e) {
                r.setState({
                    spreadsheetColWidths: e
                })
            }
            ,
            r.state = {
                resourceAreaWidth: n.options.resourceAreaWidth,
                spreadsheetColWidths: []
            },
            r
        }
        return Ju(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.state
              , r = this.context
              , o = r.options
              , i = r.viewSpec
              , a = this.processColOptions(r.options)
              , s = a.superHeaderRendering
              , l = a.groupSpecs
              , u = a.orderSpecs
              , c = a.isVGrouping
              , d = a.colSpecs
              , p = this.buildTimelineDateProfile(t.dateProfile, r.dateEnv, o, r.dateProfileGenerator)
              , f = this.rowNodes = this.buildRowNodes(t.resourceStore, l, u, c, t.resourceEntityExpansions, o.resourcesInitiallyExpanded)
              , h = ["fc-resource-timeline", this.hasNesting(f) ? "" : "fc-resource-timeline-flat", "fc-timeline", !1 === o.eventOverlap ? "fc-timeline-overlap-disabled" : "fc-timeline-overlap-enabled"]
              , v = o.slotMinWidth
              , g = $l(p, v || this.computeFallbackSlotMinWidth(p));
            return m(Nr, {
                viewSpec: i
            }, function(o, i) {
                return m("div", {
                    ref: o,
                    className: h.concat(i).join(" ")
                }, m(yc, {
                    ref: e.layoutRef,
                    forPrint: t.forPrint,
                    isHeightAuto: t.isHeightAuto,
                    spreadsheetCols: Ec(d, n.spreadsheetColWidths, ""),
                    spreadsheetHeaderRows: function(t) {
                        return m(uc, {
                            superHeaderRendering: s,
                            colSpecs: d,
                            onColWidthChange: e.handleColWidthChange,
                            rowInnerHeights: t.rowSyncHeights
                        })
                    },
                    spreadsheetBodyRows: function(t) {
                        return m(S, null, e.renderSpreadsheetRows(f, d, t.rowSyncHeights))
                    },
                    timeCols: g,
                    timeHeaderContent: function(r) {
                        return m(Wl, {
                            clientWidth: r.clientWidth,
                            clientHeight: r.clientHeight,
                            tableMinWidth: r.tableMinWidth,
                            tableColGroupNode: r.tableColGroupNode,
                            dateProfile: t.dateProfile,
                            tDateProfile: p,
                            slatCoords: n.slatCoords,
                            rowInnerHeights: r.rowSyncHeights,
                            onMaxCushionWidth: v ? null : e.handleMaxCushionWidth
                        })
                    },
                    timeBodyContent: function(n) {
                        return m(gc, {
                            dateProfile: t.dateProfile,
                            clientWidth: n.clientWidth,
                            clientHeight: n.clientHeight,
                            tableMinWidth: n.tableMinWidth,
                            tableColGroupNode: n.tableColGroupNode,
                            expandRows: n.expandRows,
                            tDateProfile: p,
                            rowNodes: f,
                            businessHours: t.businessHours,
                            dateSelection: t.dateSelection,
                            eventStore: t.eventStore,
                            eventUiBases: t.eventUiBases,
                            eventSelection: t.eventSelection,
                            eventDrag: t.eventDrag,
                            eventResize: t.eventResize,
                            resourceStore: t.resourceStore,
                            nextDayThreshold: r.options.nextDayThreshold,
                            rowInnerHeights: n.rowSyncHeights,
                            onSlatCoords: e.handleSlatCoords,
                            onRowCoords: e.handleRowCoords,
                            onScrollLeftRequest: e.handleScrollLeftRequest,
                            onRowHeightChange: n.reportRowHeightChange
                        })
                    }
                }))
            })
        }
        ,
        t.prototype.renderSpreadsheetRows = function(e, t, n) {
            return e.map(function(e, r) {
                return e.group ? m(sc, {
                    key: e.id,
                    id: e.id,
                    spreadsheetColCnt: t.length,
                    isExpanded: e.isExpanded,
                    group: e.group,
                    innerHeight: n[r] || ""
                }) : e.resource ? m(ac, {
                    key: e.id,
                    colSpecs: t,
                    rowSpans: e.rowSpans,
                    depth: e.depth,
                    isExpanded: e.isExpanded,
                    hasChildren: e.hasChildren,
                    resource: e.resource,
                    innerHeight: n[r] || ""
                }) : null
            })
        }
        ,
        t.prototype.componentDidMount = function() {
            this.renderedRowNodes = this.rowNodes,
            this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
        }
        ,
        t.prototype.getSnapshotBeforeUpdate = function() {
            return this.props.forPrint ? {} : {
                resourceScroll: this.queryResourceScroll()
            }
        }
        ,
        t.prototype.componentDidUpdate = function(e, t, n) {
            this.renderedRowNodes = this.rowNodes,
            this.scrollResponder.update(e.dateProfile !== this.props.dateProfile),
            n.resourceScroll && this.handleScrollRequest(n.resourceScroll)
        }
        ,
        t.prototype.componentWillUnmount = function() {
            this.scrollResponder.detach()
        }
        ,
        t.prototype.computeFallbackSlotMinWidth = function(e) {
            return Math.max(30, (this.state.slotCushionMaxWidth || 0) / e.slotsPerLabel)
        }
        ,
        t.prototype.queryResourceScroll = function() {
            var e = this.rowCoords
              , t = this.renderedRowNodes;
            if (e) {
                for (var n = this.layoutRef.current, r = e.bottoms, o = n.getResourceScroll(), i = {}, a = 0; a < r.length; a += 1) {
                    var s = t[a]
                      , l = r[a] - o;
                    if (l > 0) {
                        i.rowId = s.id,
                        i.fromBottom = l;
                        break
                    }
                }
                return i
            }
            return null
        }
        ,
        t
    }(sr);
    function Sc(e) {
        for (var t = {}, n = 0; n < e.length; n += 1)
            t[e[n].id] = n;
        return t
    }
    function Ec(e, t, n) {
        return void 0 === n && (n = ""),
        e.map(function(e, r) {
            return {
                className: e.isMain ? "fc-main-col" : "",
                width: t[r] || e.width || n
            }
        })
    }
    function wc(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            var r = n[t];
            if (r.group)
                return !0;
            if (r.resource && r.hasChildren)
                return !0
        }
        return !1
    }
    function Dc(e) {
        var t = e.resourceAreaColumns || []
          , n = null;
        t.length ? e.resourceAreaHeaderContent && (n = {
            headerClassNames: e.resourceAreaHeaderClassNames,
            headerContent: e.resourceAreaHeaderContent,
            headerDidMount: e.resourceAreaHeaderDidMount,
            headerWillUnmount: e.resourceAreaHeaderWillUnmount
        }) : t.push({
            headerClassNames: e.resourceAreaHeaderClassNames,
            headerContent: e.resourceAreaHeaderContent || "Resources",
            headerDidMount: e.resourceAreaHeaderDidMount,
            headerWillUnmount: e.resourceAreaHeaderWillUnmount
        });
        for (var r = [], o = [], i = [], a = !1, s = 0, l = t; s < l.length; s++) {
            var u = l[s];
            u.group ? o.push($u($u({}, u), {
                cellClassNames: u.cellClassNames || e.resourceGroupLabelClassNames,
                cellContent: u.cellContent || e.resourceGroupLabelContent,
                cellDidMount: u.cellDidMount || e.resourceGroupLabelDidMount,
                cellWillUnmount: u.cellWillUnmount || e.resourceGroupLaneWillUnmount
            })) : r.push(u)
        }
        var c = r[0];
        if (c.isMain = !0,
        c.cellClassNames = c.cellClassNames || e.resourceLabelClassNames,
        c.cellContent = c.cellContent || e.resourceLabelContent,
        c.cellDidMount = c.cellDidMount || e.resourceLabelDidMount,
        c.cellWillUnmount = c.cellWillUnmount || e.resourceLabelWillUnmount,
        o.length)
            i = o,
            a = !0;
        else {
            var d = e.resourceGroupField;
            d && i.push({
                field: d,
                labelClassNames: e.resourceGroupLabelClassNames,
                labelContent: e.resourceGroupLabelContent,
                labelDidMount: e.resourceGroupLabelDidMount,
                labelWillUnmount: e.resourceGroupLabelWillUnmount,
                laneClassNames: e.resourceGroupLaneClassNames,
                laneContent: e.resourceGroupLaneContent,
                laneDidMount: e.resourceGroupLaneDidMount,
                laneWillUnmount: e.resourceGroupLaneWillUnmount
            })
        }
        for (var p = [], f = 0, h = e.resourceOrder || Mu; f < h.length; f++) {
            for (var v = h[f], g = !1, m = 0, y = i; m < y.length; m++) {
                var b = y[m];
                if (b.field === v.field) {
                    b.order = v.order,
                    g = !0;
                    break
                }
            }
            g || p.push(v)
        }
        return {
            superHeaderRendering: n,
            isVGrouping: a,
            groupSpecs: i,
            colSpecs: o.concat(r),
            orderSpecs: p
        }
    }
    bc.addStateEquality({
        spreadsheetColWidths: Ae
    });
    var Cc = wr({
        deps: [qs, Xu, Ql],
        initialView: "resourceTimelineDay",
        views: {
            resourceTimeline: {
                type: "timeline",
                component: bc,
                needsResourceData: !0,
                resourceAreaWidth: "30%",
                resourcesInitiallyExpanded: !0,
                eventResizableFromStart: !0
            },
            resourceTimelineDay: {
                type: "resourceTimeline",
                duration: {
                    days: 1
                }
            },
            resourceTimelineWeek: {
                type: "resourceTimeline",
                duration: {
                    weeks: 1
                }
            },
            resourceTimelineMonth: {
                type: "resourceTimeline",
                duration: {
                    months: 1
                }
            },
            resourceTimelineYear: {
                type: "resourceTimeline",
                duration: {
                    years: 1
                }
            }
        }
    })
      , Rc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.title = "Resource Timeline",
            t.controlHtml = "\n    <span class='badge'>Premium</span>\n    <p>\n      Display resources as rows.\n      The exact time interval is configurable.\n      <a href='/docs/timeline-view' class='more-link'>Learn more</a>\n    </p>\n  ",
            t
        }
        return i.b(t, e),
        t.prototype.init = function(e, t, n) {
            return new Ri(n,{
                plugins: [ks, Cc],
                timeZone: "UTC",
                initialView: "resourceTimelineDay",
                aspectRatio: 1.5,
                headerToolbar: {
                    left: "prev,next",
                    center: "title",
                    right: "resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth"
                },
                editable: !0,
                resourceLabelText: "Rooms",
                resources: "/demo-resources.json?with-nesting&with-colors",
                events: "/demo-events.json?single-day&for-resource-timeline"
            })
        }
        ,
        t
    }(Ms)
      , Tc = function(e, t) {
        return (Tc = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function xc(e, t) {
        function n() {
            this.constructor = e
        }
        Tc(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var kc = function() {
        return (kc = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    Object.create;
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var Mc = function(e, t) {
        return (Mc = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function _c(e, t) {
        function n() {
            this.constructor = e
        }
        Mc(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var Pc = function() {
        return (Pc = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    Object.create;
    Object.create;
    /*!
FullCalendar Scheduler v5.3.2
Docs & License: https://fullcalendar.io/scheduler
(c) 2020 Adam Shaw
*/
    var Ic = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return _c(t, e),
        t.prototype.transformSeg = function(e, t, n) {
            return t.computeColRanges(e.firstCol, e.lastCol, n).map(function(t) {
                return Pc(Pc(Pc({}, e), t), {
                    isStart: e.isStart && t.isStart,
                    isEnd: e.isEnd && t.isEnd
                })
            })
        }
        ,
        t
    }(Bu)
      , Nc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.allowAcrossResources = !1,
            t.splitter = new Fu,
            t.slicers = {},
            t.joiner = new Ic,
            t.tableRef = b(),
            t.handleRootEl = function(e) {
                e ? t.context.registerInteractiveComponent(t, {
                    el: e
                }) : t.context.unregisterInteractiveComponent(t)
            }
            ,
            t
        }
        return _c(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.context
              , r = t.resourceDayTableModel
              , o = t.nextDayThreshold
              , i = t.dateProfile
              , a = this.splitter.splitProps(t);
            this.slicers = fe(a, function(t, n) {
                return e.slicers[n] || new Qi
            });
            var s = fe(this.slicers, function(e, t) {
                return e.sliceProps(a[t], i, o, n, r.dayTableModel)
            });
            return this.allowAcrossResources = 1 === r.dayTableModel.colCnt,
            m(Ki, Pc({
                forPrint: t.forPrint,
                ref: this.tableRef,
                elRef: this.handleRootEl
            }, this.joiner.joinProps(s, r), {
                cells: r.cells,
                dateProfile: i,
                colGroupNode: t.colGroupNode,
                tableMinWidth: t.tableMinWidth,
                renderRowIntro: t.renderRowIntro,
                dayMaxEvents: t.dayMaxEvents,
                dayMaxEventRows: t.dayMaxEventRows,
                showWeekNumbers: t.showWeekNumbers,
                expandRows: t.expandRows,
                headerAlignElRef: t.headerAlignElRef,
                clientWidth: t.clientWidth,
                clientHeight: t.clientHeight
            }))
        }
        ,
        t.prototype.prepareHits = function() {
            this.tableRef.current.prepareHits()
        }
        ,
        t.prototype.queryHit = function(e, t) {
            var n = this.tableRef.current.positionToHit(e, t);
            return n ? {
                component: this,
                dateSpan: {
                    range: n.dateSpan.range,
                    allDay: n.dateSpan.allDay,
                    resourceId: this.props.resourceDayTableModel.cells[n.row][n.col].resource.id
                },
                dayEl: n.dayEl,
                rect: {
                    left: n.relativeRect.left,
                    right: n.relativeRect.right,
                    top: n.relativeRect.top,
                    bottom: n.relativeRect.bottom
                },
                layer: 0
            } : null
        }
        ,
        t
    }(Er)
      , Hc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.flattenResources = Le(Vu),
            t.buildResourceDayTableModel = Le(Oc),
            t.headerRef = b(),
            t.tableRef = b(),
            t
        }
        return _c(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.context
              , r = n.options
              , o = r.resourceOrder || Mu
              , i = this.flattenResources(t.resourceStore, o)
              , a = this.buildResourceDayTableModel(t.dateProfile, n.dateProfileGenerator, i, r.datesAboveResources, n)
              , s = r.dayHeaders && m(Ou, {
                ref: this.headerRef,
                resources: i,
                dateProfile: t.dateProfile,
                dates: a.dayTableModel.headerDates,
                datesRepDistinctDays: !0
            })
              , l = function(n) {
                return m(Nc, {
                    ref: e.tableRef,
                    dateProfile: t.dateProfile,
                    resourceDayTableModel: a,
                    businessHours: t.businessHours,
                    eventStore: t.eventStore,
                    eventUiBases: t.eventUiBases,
                    dateSelection: t.dateSelection,
                    eventSelection: t.eventSelection,
                    eventDrag: t.eventDrag,
                    eventResize: t.eventResize,
                    nextDayThreshold: r.nextDayThreshold,
                    tableMinWidth: n.tableMinWidth,
                    colGroupNode: n.tableColGroupNode,
                    dayMaxEvents: r.dayMaxEvents,
                    dayMaxEventRows: r.dayMaxEventRows,
                    showWeekNumbers: r.weekNumbers,
                    expandRows: !t.isHeightAuto,
                    headerAlignElRef: e.headerElRef,
                    clientWidth: n.clientWidth,
                    clientHeight: n.clientHeight,
                    forPrint: t.forPrint
                })
            };
            return r.dayMinWidth ? this.renderHScrollLayout(s, l, a.colCnt, r.dayMinWidth) : this.renderSimpleLayout(s, l)
        }
        ,
        t
    }(Mi);
    function Oc(e, t, n, r, o) {
        var i = ta(e, t);
        return r ? new ju(i,n,o) : new Uu(i,n,o)
    }
    wr({
        deps: [qs, Xu, na],
        initialView: "resourceDayGridDay",
        views: {
            resourceDayGrid: {
                type: "dayGrid",
                component: Hc,
                needsResourceData: !0
            },
            resourceDayGridDay: {
                type: "resourceDayGrid",
                duration: {
                    days: 1
                }
            },
            resourceDayGridWeek: {
                type: "resourceDayGrid",
                duration: {
                    weeks: 1
                }
            },
            resourceDayGridMonth: {
                type: "resourceDayGrid",
                duration: {
                    months: 1
                },
                monthMode: !0,
                fixedWeekCount: !0
            }
        }
    });
    var Ac = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return xc(t, e),
        t.prototype.transformSeg = function(e, t, n) {
            return [kc(kc({}, e), {
                col: t.computeCol(e.col, n)
            })]
        }
        ,
        t
    }(Bu)
      , Lc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.allowAcrossResources = !1,
            t.buildDayRanges = Le(Ha),
            t.splitter = new Fu,
            t.slicers = {},
            t.joiner = new Ac,
            t.timeColsRef = b(),
            t.handleRootEl = function(e) {
                e ? t.context.registerInteractiveComponent(t, {
                    el: e
                }) : t.context.unregisterInteractiveComponent(t)
            }
            ,
            t
        }
        return xc(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.context
              , r = n.dateEnv
              , o = n.options
              , i = t.dateProfile
              , a = t.resourceDayTableModel
              , s = this.dayRanges = this.buildDayRanges(a.dayTableModel, i, r)
              , l = this.splitter.splitProps(t);
            this.slicers = fe(l, function(t, n) {
                return e.slicers[n] || new Ia
            });
            var u = fe(this.slicers, function(e, t) {
                return e.sliceProps(l[t], i, null, n, s)
            });
            return this.allowAcrossResources = 1 === s.length,
            m(zo, {
                unit: o.nowIndicator ? "minute" : "day"
            }, function(n, r) {
                return m(_a, kc({
                    ref: e.timeColsRef,
                    rootElRef: e.handleRootEl
                }, e.joiner.joinProps(u, a), {
                    dateProfile: i,
                    axis: t.axis,
                    slotDuration: t.slotDuration,
                    slatMetas: t.slatMetas,
                    cells: a.cells[0],
                    tableColGroupNode: t.tableColGroupNode,
                    tableMinWidth: t.tableMinWidth,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    expandRows: t.expandRows,
                    nowDate: n,
                    nowIndicatorSegs: o.nowIndicator && e.buildNowIndicatorSegs(n),
                    todayRange: r,
                    onScrollTopRequest: t.onScrollTopRequest,
                    forPrint: t.forPrint,
                    onSlatCoords: t.onSlatCoords
                }))
            })
        }
        ,
        t.prototype.buildNowIndicatorSegs = function(e) {
            var t = this.slicers[""].sliceNowDate(e, this.context, this.dayRanges);
            return this.joiner.expandSegs(this.props.resourceDayTableModel, t)
        }
        ,
        t.prototype.queryHit = function(e, t) {
            var n = this.timeColsRef.current.positionToHit(e, t);
            return n ? {
                component: this,
                dateSpan: {
                    range: n.dateSpan.range,
                    allDay: n.dateSpan.allDay,
                    resourceId: this.props.resourceDayTableModel.cells[0][n.col].resource.id
                },
                dayEl: n.dayEl,
                rect: {
                    left: n.relativeRect.left,
                    right: n.relativeRect.right,
                    top: n.relativeRect.top,
                    bottom: n.relativeRect.bottom
                },
                layer: 0
            } : null
        }
        ,
        t
    }(Er)
      , Wc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.flattenResources = Le(Vu),
            t.buildResourceTimeColsModel = Le(Uc),
            t.buildSlatMetas = Le(Aa),
            t
        }
        return xc(t, e),
        t.prototype.render = function() {
            var e = this
              , t = this.props
              , n = this.context
              , r = n.options
              , o = n.dateEnv
              , i = t.dateProfile
              , a = this.allDaySplitter.splitProps(t)
              , s = r.resourceOrder || Mu
              , l = this.flattenResources(t.resourceStore, s)
              , u = this.buildResourceTimeColsModel(i, n.dateProfileGenerator, l, r.datesAboveResources, n)
              , c = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, r.slotLabelInterval, r.slotDuration, o)
              , d = r.dayMinWidth
              , p = !d
              , f = d
              , h = r.dayHeaders && m(Ou, {
                resources: l,
                dates: u.dayTableModel.headerDates,
                dateProfile: i,
                datesRepDistinctDays: !0,
                renderIntro: p ? this.renderHeadAxis : null
            })
              , v = !1 !== r.allDaySlot && function(n) {
                return m(Nc, kc({}, a.allDay, {
                    dateProfile: i,
                    resourceDayTableModel: u,
                    nextDayThreshold: r.nextDayThreshold,
                    tableMinWidth: n.tableMinWidth,
                    colGroupNode: n.tableColGroupNode,
                    renderRowIntro: p ? e.renderTableRowAxis : null,
                    showWeekNumbers: !1,
                    expandRows: !1,
                    headerAlignElRef: e.headerElRef,
                    clientWidth: n.clientWidth,
                    clientHeight: n.clientHeight,
                    forPrint: t.forPrint
                }, e.getAllDayMaxEventProps()))
            }
              , g = function(n) {
                return m(Lc, kc({}, a.timed, {
                    dateProfile: i,
                    axis: p,
                    slotDuration: r.slotDuration,
                    slatMetas: c,
                    resourceDayTableModel: u,
                    tableColGroupNode: n.tableColGroupNode,
                    tableMinWidth: n.tableMinWidth,
                    clientWidth: n.clientWidth,
                    clientHeight: n.clientHeight,
                    onSlatCoords: e.handleSlatCoords,
                    expandRows: n.expandRows,
                    forPrint: t.forPrint,
                    onScrollTopRequest: e.handleScrollTopRequest
                }))
            };
            return f ? this.renderHScrollLayout(h, v, g, u.colCnt, d, c, this.state.slatCoords) : this.renderSimpleLayout(h, v, g)
        }
        ,
        t
    }(pa);
    function Uc(e, t, n, r, o) {
        var i = Wa(e, t);
        return r ? new ju(i,n,o) : new Uu(i,n,o)
    }
    var jc = wr({
        deps: [qs, Xu, Ua],
        initialView: "resourceTimeGridDay",
        views: {
            resourceTimeGrid: {
                type: "timeGrid",
                component: Wc,
                needsResourceData: !0
            },
            resourceTimeGridDay: {
                type: "resourceTimeGrid",
                duration: {
                    days: 1
                }
            },
            resourceTimeGridWeek: {
                type: "resourceTimeGrid",
                duration: {
                    weeks: 1
                }
            }
        }
    })
      , zc = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.title = "Resource Time Grid",
            t.controlHtml = "\n    <span class='badge'>Premium</span>\n    <p>\n      Display resources as columns.\n      <a href='/docs/vertical-resource-view' class='more-link'>Learn more</a>\n    </p>\n  ",
            t
        }
        return i.b(t, e),
        t.prototype.init = function(e, t, n) {
            return new Ri(n,{
                plugins: [ks, jc],
                timeZone: "UTC",
                initialView: "resourceTimeGridDay",
                resources: [{
                    id: "a",
                    title: "Room A"
                }, {
                    id: "b",
                    title: "Room B"
                }, {
                    id: "c",
                    title: "Room C"
                }, {
                    id: "d",
                    title: "Room D"
                }],
                editable: !0,
                events: "/demo-events.json?with-resources=4&single-day"
            })
        }
        ,
        t
    }(Ms)
      , Bc = (n(20),
    function(e, t) {
        return (Bc = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    }
    );
    Object.create;
    Object.create;
    /*!
FullCalendar v5.3.2
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/
    var Fc = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return function(e, t) {
            function n() {
                this.constructor = e
            }
            Bc(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }(t, e),
        t
    }(nr);
    Fc.prototype.classes = {
        root: "fc-theme-bootstrap",
        table: "table-bordered",
        tableCellShaded: "table-active",
        buttonGroup: "btn-group",
        button: "btn btn-primary",
        buttonActive: "active",
        popover: "popover",
        popoverHeader: "popover-header",
        popoverContent: "popover-body"
    },
    Fc.prototype.baseIconClass = "fa",
    Fc.prototype.iconClasses = {
        close: "fa-times",
        prev: "fa-chevron-left",
        next: "fa-chevron-right",
        prevYear: "fa-angle-double-left",
        nextYear: "fa-angle-double-right"
    },
    Fc.prototype.rtlIconClasses = {
        prev: "fa-chevron-right",
        next: "fa-chevron-left",
        prevYear: "fa-angle-double-right",
        nextYear: "fa-angle-double-left"
    },
    Fc.prototype.iconOverrideOption = "bootstrapFontAwesome",
    Fc.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome",
    Fc.prototype.iconOverridePrefix = "fa-";
    var Vc = wr({
        themeClasses: {
            bootstrap: Fc
        }
    })
      , Gc = {}
      , qc = {}
      , Yc = 0;
    function Zc(e, t) {
        if (qc[e])
            t();
        else {
            var n = document.querySelector('link[href="' + e + '"]');
            n ? (Gc[e] = n,
            qc[e] = !0,
            t()) : ((n = document.createElement("link")).setAttribute("rel", "stylesheet"),
            n.setAttribute("href", e),
            document.querySelector("head").appendChild(n),
            Gc[e] = n,
            function(e, t) {
                var n = !1;
                function r() {
                    n || (n = !0,
                    t())
                }
                e.onload = r,
                setTimeout(r, 2e3)
            }(n, function() {
                qc[e] = !0,
                t()
            }))
        }
    }
    function Xc(e) {
        var t = Gc[e];
        t && (t.parentNode.removeChild(t),
        delete Gc[e],
        delete qc[e])
    }
    var Kc, Jc = "https://use.fontawesome.com/releases/v5.0.6/css/all.css";
    function $c(e) {
        var t = e.callback || function() {}
          , n = e.loadingCallback || function() {}
          , r = [Jc]
          , o = function(e, t) {
            if ("bootstrap" === e)
                return t ? "https://bootswatch.com/4/" + t + "/bootstrap.min.css" : "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        }(e.themeSystemName, e.themeName);
        o && r.push(o),
        n(!0),
        function(e, t) {
            for (var n = ++Yc, r = 0, o = 0, i = e; o < i.length; o++) {
                Zc(i[o], a)
            }
            function a() {
                if (++r === e.length && n === Yc) {
                    for (var o in Gc)
                        -1 === e.indexOf(o) && Xc(o);
                    t()
                }
            }
        }(r, function() {
            n(!1),
            t()
        })
    }
    var Qc = [_s, Rc, zc, Ps, Is, Hs, Us, As];
    window.isCalendarThemeRender ? window.renderCalendarTheme = function(e, t, n) {
        $c({
            themeSystemName: e,
            themeName: t,
            callback: function() {
                var t;
                Kc ? Kc.setOption("themeSystem", e) : (t = document.getElementById("calendar"),
                (Kc = new Ri(t,{
                    timeZone: "UTC",
                    plugins: [na, Ua, $a, Vc],
                    themeSystem: "bootstrap",
                    headerToolbar: {
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                    },
                    navLinks: !0,
                    dayMaxEvents: !0,
                    events: "/demo-events.json?overload-day"
                })).render()),
                n && n()
            }
        })
    }
    : document.addEventListener("DOMContentLoaded", function() {
        var e = document.getElementById("demo-accordion")
          , t = document.getElementById("demo-content");
        new ed(e,t)
    });
    var ed = function() {
        function e(e, t) {
            this.accordionEl = e,
            this.contentEl = t,
            this.demos = Qc.map(function(e) {
                return new e
            }),
            this.renderAccordion()
        }
        return e.prototype.runDemo = function(e) {
            e !== this.demoIndex && (null != this.demoIndex && this.destroyDemo(this.demoIndex),
            this.demoIndex = e,
            this.initDemo(e))
        }
        ,
        e.prototype.initDemo = function(e) {
            var t = this.demos[e]
              , n = this.panelEls[e].querySelector(".accordion__panel-content")
              , r = this.contentEl;
            r.innerHTML = t.contentHtml;
            var o = r.querySelector(".demo-calendar");
            t.initSafely(n, r, o)
        }
        ,
        e.prototype.destroyDemo = function(e) {
            var t = this.demos[e]
              , n = this.panelEls[e].querySelector(".accordion__panel-content");
            t.destroy(),
            n.innerHTML = t.controlHtml
        }
        ,
        e.prototype.renderAccordion = function() {
            var e = this
              , t = this.accordionEl;
            t.innerHTML = this.renderAccordionHtml(),
            this.panelEls = o(".accordion__panel", t),
            t.classList.add("snap"),
            this.panelEls[0].classList.add("accordion__panel--open"),
            new r.Accordion(t,{
                openClass: "accordion__panel--open",
                closeClass: "accordion__panel--closed",
                modal: !0,
                onToggle: function(t, n) {
                    n && e.runDemo(t.index)
                }
            }),
            setTimeout(function() {
                t.classList.remove("snap")
            }, 0),
            this.runDemo(0)
        }
        ,
        e.prototype.renderAccordionHtml = function() {
            for (var e = "", t = 0, n = this.demos; t < n.length; t++) {
                var r = n[t];
                e += '<div class="accordion__panel"><div class="accordion__panel-title"><span class="fc-icon"></span>' + (r.title + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />") + '</div><div class="accordion__panel-content">' + r.controlHtml + "</div></div>"
            }
            return e
        }
        ,
        e
    }()
}
]);
