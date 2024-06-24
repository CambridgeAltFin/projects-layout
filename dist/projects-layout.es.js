import { watch as q, onScopeDispose as be, effectScope as $n, Fragment as ie, reactive as ln, computed as h, watchEffect as He, toRefs as aa, capitalize as Et, isVNode as qi, Comment as Ki, shallowRef as W, unref as he, warn as an, getCurrentInstance as Yi, ref as j, provide as pe, inject as me, defineComponent as Tt, camelize as ia, h as gt, toRaw as xe, createVNode as u, mergeProps as Q, onBeforeUnmount as Be, readonly as Fn, onDeactivated as Xi, onActivated as Qi, nextTick as ye, TransitionGroup as Rn, Transition as it, isRef as ft, toRef as M, onBeforeMount as oa, withDirectives as _e, resolveDirective as st, vShow as yt, onMounted as rt, onUpdated as Ji, Text as Zi, resolveDynamicComponent as eo, Teleport as to, cloneVNode as no, createTextVNode as Fe, openBlock as Ce, createBlock as vt, withCtx as J, createElementVNode as Z, toDisplayString as Ee, createCommentVNode as Ct, renderSlot as wn, pushScopeId as Mn, popScopeId as Nn, createElementBlock as nt, renderList as sa, normalizeClass as Dn } from "vue";
function Ke(e, n) {
  let t;
  function l() {
    t = $n(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), l();
    }) : n());
  }
  q(e, (a) => {
    a && !t ? l() : a || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), be(() => {
    t == null || t.stop();
  });
}
const ve = typeof window < "u", zn = ve && "IntersectionObserver" in window;
function ra(e, n, t) {
  const l = n.length - 1;
  if (l < 0)
    return e === void 0 ? t : e;
  for (let a = 0; a < l; a++) {
    if (e == null)
      return t;
    e = e[n[a]];
  }
  return e == null || e[n[l]] === void 0 ? t : e[n[l]];
}
function ht(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((l) => ht(e[l], n[l]));
}
function lo(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), ra(e, n.split("."), t));
}
function Me(e, n, t) {
  if (n === !0)
    return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean")
    return t;
  if (e !== Object(e)) {
    if (typeof n != "function")
      return t;
    const a = n(e, t);
    return typeof a > "u" ? t : a;
  }
  if (typeof n == "string")
    return lo(e, n, t);
  if (Array.isArray(n))
    return ra(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return typeof l > "u" ? t : l;
}
function G(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function xn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ua(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const gl = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
function fn(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function ca(e, n) {
  const t = {}, l = new Set(Object.keys(e));
  for (const a of n)
    l.has(a) && (t[a] = e[a]);
  return t;
}
function yl(e, n, t) {
  const l = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((o) => o instanceof RegExp ? o.test(i) : o === i) && !(t != null && t.some((o) => o === i)) ? l[i] = e[i] : a[i] = e[i];
  return [l, a];
}
function bt(e, n) {
  const t = {
    ...e
  };
  return n.forEach((l) => delete t[l]), t;
}
function ao(e, n) {
  const t = {};
  return n.forEach((l) => t[l] = e[l]), t;
}
const da = /^on[^a-z]/, Hn = (e) => da.test(e), io = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function fa(e) {
  const [n, t] = yl(e, [da]), l = bt(n, io), [a, i] = yl(t, ["class", "style", "id", /^data-/]);
  return Object.assign(a, n), Object.assign(i, l), [a, i];
}
function Pe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function oo(e, n) {
  let t = 0;
  const l = function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    clearTimeout(t), t = setTimeout(() => e(...i), he(n));
  };
  return l.clear = () => {
    clearTimeout(t);
  }, l.immediate = e, l;
}
function ze(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function hl(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function so(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let l = 0;
  for (; l < e.length; )
    t.push(e.substr(l, n)), l += n;
  return t;
}
function Ne() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const a in e)
    l[a] = e[a];
  for (const a in n) {
    const i = e[a], o = n[a];
    if (xn(i) && xn(o)) {
      l[a] = Ne(i, o, t);
      continue;
    }
    if (Array.isArray(i) && Array.isArray(o) && t) {
      l[a] = t(i, o);
      continue;
    }
    l[a] = o;
  }
  return l;
}
function va(e) {
  return e.map((n) => n.type === ie ? va(n.children) : n).flat();
}
function lt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (lt.cache.has(e))
    return lt.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return lt.cache.set(e, n), n;
}
lt.cache = /* @__PURE__ */ new Map();
function kt(e, n) {
  if (!n || typeof n != "object")
    return [];
  if (Array.isArray(n))
    return n.map((t) => kt(e, t)).flat(1);
  if (n.suspense)
    return kt(e, n.ssContent);
  if (Array.isArray(n.children))
    return n.children.map((t) => kt(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return kt(e, n.component.subTree).flat(1);
  }
  return [];
}
function jn(e) {
  const n = ln({}), t = h(e);
  return He(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, {
    flush: "sync"
  }), aa(n);
}
function Kt(e, n) {
  return e.includes(n);
}
function ma(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const we = () => [Function, Array];
function bl(e, n) {
  return n = "on" + Et(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function ro(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  if (Array.isArray(e))
    for (const a of e)
      a(...t);
  else
    typeof e == "function" && e(...t);
}
function pt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function ga(e, n, t) {
  let l, a = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    a += i, l = e[a];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? !0)) && a < e.length && a >= 0);
  return l;
}
function Yt(e, n) {
  var l, a, i, o;
  const t = pt(e);
  if (!n)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((l = t[0]) == null || l.focus());
  else if (n === "first")
    (a = t[0]) == null || a.focus();
  else if (n === "last")
    (i = t.at(-1)) == null || i.focus();
  else if (typeof n == "number")
    (o = t[n]) == null || o.focus();
  else {
    const s = ga(t, n);
    s ? s.focus() : Yt(e, n === "next" ? "first" : "last");
  }
}
function Xt(e, n) {
  if (!(ve && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`)))
    return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function ya(e) {
  return e.some((n) => qi(n) ? n.type === Ki ? !1 : n.type !== ie || ya(n.children) : !0) ? e : null;
}
function uo(e, n) {
  if (!ve || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function co(e, n) {
  const t = e.clientX, l = e.clientY, a = n.getBoundingClientRect(), i = a.left, o = a.top, s = a.right, r = a.bottom;
  return t >= i && t <= s && l >= o && l <= r;
}
function _n() {
  const e = W(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => ua(e.value)
  }), n;
}
const ha = ["top", "bottom"], fo = ["start", "end", "left", "right"];
function pn(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = Kt(ha, t) ? "start" : Kt(fo, t) ? "top" : "center"), {
    side: Sl(t, n),
    align: Sl(l, n)
  };
}
function Sl(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function vn(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function mn(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function Cl(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function kl(e) {
  return Kt(ha, e.side) ? "y" : "x";
}
class at {
  constructor(n) {
    let {
      x: t,
      y: l,
      width: a,
      height: i
    } = n;
    this.x = t, this.y = l, this.width = a, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function wl(e, n) {
  return {
    x: {
      before: Math.max(0, n.left - e.left),
      after: Math.max(0, e.right - n.right)
    },
    y: {
      before: Math.max(0, n.top - e.top),
      after: Math.max(0, e.bottom - n.bottom)
    }
  };
}
function ba(e) {
  return Array.isArray(e) ? new at({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function Wn(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), l = t.transform;
  if (l) {
    let a, i, o, s, r;
    if (l.startsWith("matrix3d("))
      a = l.slice(9, -1).split(/, /), i = +a[0], o = +a[5], s = +a[12], r = +a[13];
    else if (l.startsWith("matrix("))
      a = l.slice(7, -1).split(/, /), i = +a[0], o = +a[3], s = +a[4], r = +a[5];
    else
      return new at(n);
    const c = t.transformOrigin, v = n.x - s - (1 - i) * parseFloat(c), g = n.y - r - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), m = i ? n.width / i : e.offsetWidth + 1, d = o ? n.height / o : e.offsetHeight + 1;
    return new at({
      x: v,
      y: g,
      width: m,
      height: d
    });
  } else
    return new at(n);
}
function dt(e, n, t) {
  if (typeof e.animate > "u")
    return {
      finished: Promise.resolve()
    };
  let l;
  try {
    l = e.animate(n, t);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof l.finished > "u" && (l.finished = new Promise((a) => {
    l.onfinish = () => {
      a(l);
    };
  })), l;
}
const Wt = /* @__PURE__ */ new WeakMap();
function vo(e, n) {
  Object.keys(n).forEach((t) => {
    if (Hn(t)) {
      const l = ma(t), a = Wt.get(e);
      if (n[t] == null)
        a == null || a.forEach((i) => {
          const [o, s] = i;
          o === l && (e.removeEventListener(l, s), a.delete(i));
        });
      else if (!a || ![...a].some((i) => i[0] === l && i[1] === n[t])) {
        e.addEventListener(l, n[t]);
        const i = a || /* @__PURE__ */ new Set();
        i.add([l, n[t]]), Wt.has(e) || Wt.set(e, i);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function mo(e, n) {
  Object.keys(n).forEach((t) => {
    if (Hn(t)) {
      const l = ma(t), a = Wt.get(e);
      a == null || a.forEach((i) => {
        const [o, s] = i;
        o === l && (e.removeEventListener(l, s), a.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const ct = 2.4, xl = 0.2126729, _l = 0.7151522, pl = 0.072175, go = 0.55, yo = 0.58, ho = 0.57, bo = 0.62, zt = 0.03, Vl = 1.45, So = 5e-4, Co = 1.25, ko = 1.25, Il = 0.078, Al = 12.82051282051282, Ht = 0.06, Pl = 1e-3;
function Bl(e, n) {
  const t = (e.r / 255) ** ct, l = (e.g / 255) ** ct, a = (e.b / 255) ** ct, i = (n.r / 255) ** ct, o = (n.g / 255) ** ct, s = (n.b / 255) ** ct;
  let r = t * xl + l * _l + a * pl, c = i * xl + o * _l + s * pl;
  if (r <= zt && (r += (zt - r) ** Vl), c <= zt && (c += (zt - c) ** Vl), Math.abs(c - r) < So)
    return 0;
  let v;
  if (c > r) {
    const g = (c ** go - r ** yo) * Co;
    v = g < Pl ? 0 : g < Il ? g - g * Al * Ht : g - Ht;
  } else {
    const g = (c ** bo - r ** ho) * ko;
    v = g > -Pl ? 0 : g > -Il ? g - g * Al * Ht : g + Ht;
  }
  return v * 100;
}
function qe(e) {
  an(`Vuetify: ${e}`);
}
function wo(e) {
  an(`Vuetify error: ${e}`);
}
function xo(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, an(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
function Vn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function _o(e) {
  return Vn(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const El = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, po = {
  rgb: (e, n, t, l) => ({
    r: e,
    g: n,
    b: t,
    a: l
  }),
  rgba: (e, n, t, l) => ({
    r: e,
    g: n,
    b: t,
    a: l
  }),
  hsl: (e, n, t, l) => Tl({
    h: e,
    s: n,
    l: t,
    a: l
  }),
  hsla: (e, n, t, l) => Tl({
    h: e,
    s: n,
    l: t,
    a: l
  }),
  hsv: (e, n, t, l) => Vt({
    h: e,
    s: n,
    v: t,
    a: l
  }),
  hsva: (e, n, t, l) => Vt({
    h: e,
    s: n,
    v: t,
    a: l
  })
};
function wt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && qe(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && El.test(e)) {
    const {
      groups: n
    } = e.match(El), {
      fn: t,
      values: l
    } = n, a = l.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return po[t](...a);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((l) => l + l).join("") : [6, 8].includes(n.length) || qe(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && qe(`'${e}' is not a valid hex(a) color`), Vo(n);
  } else if (typeof e == "object") {
    if (fn(e, ["r", "g", "b"]))
      return e;
    if (fn(e, ["h", "s", "l"]))
      return Vt(Sa(e));
    if (fn(e, ["h", "s", "v"]))
      return Vt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Vt(e) {
  const {
    h: n,
    s: t,
    v: l,
    a
  } = e, i = (s) => {
    const r = (s + n / 60) % 6;
    return l - l * t * Math.max(Math.min(r, 4 - r, 1), 0);
  }, o = [i(5), i(3), i(1)].map((s) => Math.round(s * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a
  };
}
function Tl(e) {
  return Vt(Sa(e));
}
function Sa(e) {
  const {
    h: n,
    s: t,
    l,
    a
  } = e, i = l + t * Math.min(l, 1 - l), o = i === 0 ? 0 : 2 - 2 * l / i;
  return {
    h: n,
    s: o,
    v: i,
    a
  };
}
function Vo(e) {
  e = Io(e);
  let [n, t, l, a] = so(e, 2).map((i) => parseInt(i, 16));
  return a = a === void 0 ? a : a / 255, {
    r: n,
    g: t,
    b: l,
    a
  };
}
function Io(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = hl(hl(e, 6), 8, "F")), e;
}
function Ao(e) {
  const n = Math.abs(Bl(wt(0), wt(e)));
  return Math.abs(Bl(wt(16777215), wt(e))) > Math.min(n, 50) ? "#fff" : "#000";
}
function B(e, n) {
  return (t) => Object.keys(e).reduce((l, a) => {
    const o = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : {
      type: e[a]
    };
    return t && a in t ? l[a] = {
      ...o,
      default: t[a]
    } : l[a] = o, n && !l[a].source && (l[a].source = n), l;
  }, {});
}
const Y = B({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function ce(e, n) {
  const t = Yi();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function Le() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = ce(e).type;
  return lt((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let Ca = 0, Gt = /* @__PURE__ */ new WeakMap();
function Oe() {
  const e = ce("getUid");
  if (Gt.has(e))
    return Gt.get(e);
  {
    const n = Ca++;
    return Gt.set(e, n), n;
  }
}
Oe.reset = () => {
  Ca = 0, Gt = /* @__PURE__ */ new WeakMap();
};
function Po(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const Qt = Symbol.for("vuetify:defaults");
function Gn() {
  const e = me(Qt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function ut(e, n) {
  const t = Gn(), l = j(e), a = h(() => {
    if (he(n == null ? void 0 : n.disabled))
      return t.value;
    const o = he(n == null ? void 0 : n.scoped), s = he(n == null ? void 0 : n.reset), r = he(n == null ? void 0 : n.root);
    if (l.value == null && !(o || s || r))
      return t.value;
    let c = Ne(l.value, {
      prev: t.value
    });
    if (o)
      return c;
    if (s || r) {
      const v = Number(s || 1 / 0);
      for (let g = 0; g <= v && !(!c || !("prev" in c)); g++)
        c = c.prev;
      return c && typeof r == "string" && r in c && (c = Ne(Ne(c, {
        prev: c
      }), c[r])), c;
    }
    return c.prev ? Ne(c.prev, c) : c;
  });
  return pe(Qt, a), a;
}
function Bo(e, n) {
  var t, l;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((l = e.props) == null ? void 0 : l[lt(n)]) < "u";
}
function Eo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gn();
  const l = ce("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const a = h(() => {
    var r;
    return (r = t.value) == null ? void 0 : r[e._as ?? n];
  }), i = new Proxy(e, {
    get(r, c) {
      var g, m, d, y, f, b, S;
      const v = Reflect.get(r, c);
      return c === "class" || c === "style" ? [(g = a.value) == null ? void 0 : g[c], v].filter((_) => _ != null) : typeof c == "string" && !Bo(l.vnode, c) ? ((m = a.value) == null ? void 0 : m[c]) !== void 0 ? (d = a.value) == null ? void 0 : d[c] : ((f = (y = t.value) == null ? void 0 : y.global) == null ? void 0 : f[c]) !== void 0 ? (S = (b = t.value) == null ? void 0 : b.global) == null ? void 0 : S[c] : v : v;
    }
  }), o = W();
  He(() => {
    if (a.value) {
      const r = Object.entries(a.value).filter((c) => {
        let [v] = c;
        return v.startsWith(v[0].toUpperCase());
      });
      o.value = r.length ? Object.fromEntries(r) : void 0;
    } else
      o.value = void 0;
  });
  function s() {
    const r = Po(Qt, l);
    pe(Qt, h(() => o.value ? Ne((r == null ? void 0 : r.value) ?? {}, o.value) : r == null ? void 0 : r.value));
  }
  return {
    props: i,
    provideSubDefaults: s
  };
}
function Lt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return qe("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = B(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(l) {
      return ca(l, n);
    }, e.props._as = String, e.setup = function(l, a) {
      const i = Gn();
      if (!i.value)
        return e._setup(l, a);
      const {
        props: o,
        provideSubDefaults: s
      } = Eo(l, l._as ?? e.name, i), r = e._setup(o, a);
      return s(), r;
    };
  }
  return e;
}
function N() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? Lt : Tt)(n);
}
function Un(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return N()({
    name: t ?? Et(ia(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: n
      },
      ...Y()
    },
    setup(l, a) {
      let {
        slots: i
      } = a;
      return () => {
        var o;
        return gt(l.tag, {
          class: [e, l.class],
          style: l.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function ka(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({
    composed: !0
  }) !== document ? null : n;
}
const Jt = "cubic-bezier(0.4, 0, 0.2, 1)", To = "cubic-bezier(0.0, 0, 0.2, 1)", Lo = "cubic-bezier(0.4, 0, 1, 1)";
function wa(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? Oo(e) : qn(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Zt(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (qn(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function qn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Oo(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function $o(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function U(e) {
  const n = ce("useRender");
  n.render = e;
}
function ue(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (g) => g, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (g) => g;
  const i = ce("useProxiedModel"), o = j(e[n] !== void 0 ? e[n] : t), s = lt(n), c = s !== n ? h(() => {
    var g, m, d, y;
    return e[n], !!(((g = i.vnode.props) != null && g.hasOwnProperty(n) || (m = i.vnode.props) != null && m.hasOwnProperty(s)) && ((d = i.vnode.props) != null && d.hasOwnProperty(`onUpdate:${n}`) || (y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${s}`)));
  }) : h(() => {
    var g, m;
    return e[n], !!((g = i.vnode.props) != null && g.hasOwnProperty(n) && ((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${n}`)));
  });
  Ke(() => !c.value, () => {
    q(() => e[n], (g) => {
      o.value = g;
    });
  });
  const v = h({
    get() {
      const g = e[n];
      return l(c.value ? g : o.value);
    },
    set(g) {
      const m = a(g), d = xe(c.value ? e[n] : o.value);
      d === m || l(d) === g || (o.value = m, i == null || i.emit(`update:${n}`, m));
    }
  });
  return Object.defineProperty(v, "externalValue", {
    get: () => c.value ? e[n] : o.value
  }), v;
}
const xa = Symbol.for("vuetify:locale");
function Kn() {
  const e = me(xa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function We() {
  const e = me(xa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const on = ["sm", "md", "lg", "xl", "xxl"], Fo = Symbol.for("vuetify:display"), Ro = B({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function Ot() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  const t = me(Fo);
  if (!t)
    throw new Error("Could not find Vuetify display injection");
  const l = h(() => {
    if (e.mobile != null)
      return e.mobile;
    if (!e.mobileBreakpoint)
      return t.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < i;
  }), a = h(() => n ? {
    [`${n}--mobile`]: l.value
  } : {});
  return {
    ...t,
    displayClasses: a,
    mobile: l
  };
}
const Mo = Symbol.for("vuetify:goto");
function No() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => --e ** 3 + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - --e ** 4,
      easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + --e ** 5,
      easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
    }
  };
}
function Do(e) {
  return Yn(e) ?? (document.scrollingElement || document.body);
}
function Yn(e) {
  return typeof e == "string" ? document.querySelector(e) : ua(e);
}
function gn(e, n, t) {
  if (typeof e == "number")
    return n && t ? -e : e;
  let l = Yn(e), a = 0;
  for (; l; )
    a += n ? l.offsetLeft : l.offsetTop, l = l.offsetParent;
  return a;
}
async function Ll(e, n, t, l) {
  const a = t ? "scrollLeft" : "scrollTop", i = Ne((l == null ? void 0 : l.options) ?? No(), n), o = l == null ? void 0 : l.rtl.value, s = (typeof e == "number" ? e : Yn(e)) ?? 0, r = i.container === "parent" && s instanceof HTMLElement ? s.parentElement : Do(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c)
    throw new TypeError(`Easing function "${i.easing}" not found.`);
  let v;
  if (typeof s == "number")
    v = gn(s, t, o);
  else if (v = gn(s, t, o) - gn(r, t, o), i.layout) {
    const y = window.getComputedStyle(s).getPropertyValue("--v-layout-top");
    y && (v -= parseInt(y, 10));
  }
  v += i.offset, v = zo(r, v, !!o, !!t);
  const g = r[a] ?? 0;
  if (v === g)
    return Promise.resolve(v);
  const m = performance.now();
  return new Promise((d) => requestAnimationFrame(function y(f) {
    const S = (f - m) / i.duration, _ = Math.floor(g + (v - g) * c(ze(S, 0, 1)));
    if (r[a] = _, S >= 1 && Math.abs(_ - r[a]) < 10)
      return d(v);
    if (S > 2)
      return qe("Scroll target is not reachable"), d(r[a]);
    requestAnimationFrame(y);
  }));
}
function _a() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = me(Mo), {
    isRtl: t
  } = We();
  if (!n)
    throw new Error("[Vuetify] Could not find injected goto instance");
  const l = {
    ...n,
    // can be set via VLocaleProvider
    rtl: h(() => n.rtl.value || t.value)
  };
  async function a(i, o) {
    return Ll(i, Ne(e, o), !1, l);
  }
  return a.horizontal = async (i, o) => Ll(i, Ne(e, o), !0, l), a;
}
function zo(e, n, t, l) {
  const {
    scrollWidth: a,
    scrollHeight: i
  } = e, [o, s] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let r, c;
  return l ? t ? (r = -(a - o), c = 0) : (r = 0, c = a - o) : (r = 0, c = i + -s), Math.max(Math.min(n, c), r);
}
const le = [String, Function, Object, Array], Ho = Symbol.for("vuetify:icons"), sn = B({
  icon: {
    type: le
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Ol = N()({
  name: "VComponentIcon",
  props: sn(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return () => {
      const l = e.icon;
      return u(e.tag, null, {
        default: () => {
          var a;
          return [e.icon ? u(l, null, null) : (a = t.default) == null ? void 0 : a.call(t)];
        }
      });
    };
  }
}), jo = Lt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: sn(),
  setup(e, n) {
    let {
      attrs: t
    } = n;
    return () => u(e.tag, Q(t, {
      style: null
    }), {
      default: () => [u("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? u("path", {
        d: l[0],
        "fill-opacity": l[1]
      }, null) : u("path", {
        d: l
      }, null)) : u("path", {
        d: e.icon
      }, null)])]
    });
  }
});
Lt({
  name: "VLigatureIcon",
  props: sn(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
Lt({
  name: "VClassIcon",
  props: sn(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
});
const Wo = (e) => {
  const n = me(Ho);
  if (!n)
    throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: h(() => {
      var r;
      const l = he(e);
      if (!l)
        return {
          component: Ol
        };
      let a = l;
      if (typeof a == "string" && (a = a.trim(), a.startsWith("$") && (a = (r = n.aliases) == null ? void 0 : r[a.slice(1)])), a || qe(`Could not find aliased icon "${l}"`), Array.isArray(a))
        return {
          component: jo,
          icon: a
        };
      if (typeof a != "string")
        return {
          component: Ol,
          icon: a
        };
      const i = Object.keys(n.sets).find((c) => typeof a == "string" && a.startsWith(`${c}:`)), o = i ? a.slice(i.length + 1) : a;
      return {
        component: n.sets[i ?? n.defaultSet].component,
        icon: o
      };
    })
  };
}, $l = Symbol.for("vuetify:theme"), de = B({
  theme: String
}, "theme");
function ge(e) {
  ce("provideTheme");
  const n = me($l, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = h(() => e.theme ?? n.name.value), l = h(() => n.themes.value[t.value]), a = h(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = {
    ...n,
    name: t,
    current: l,
    themeClasses: a
  };
  return pe($l, i), i;
}
function mt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = _n(), l = j();
  if (ve) {
    const a = new ResizeObserver((i) => {
      e == null || e(i, a), i.length && (n === "content" ? l.value = i[0].contentRect : l.value = i[0].target.getBoundingClientRect());
    });
    Be(() => {
      a.disconnect();
    }), q(() => t.el, (i, o) => {
      o && (a.unobserve(o), l.value = void 0), i && a.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: Fn(l)
  };
}
const Go = Symbol.for("vuetify:layout"), Uo = Symbol.for("vuetify:layout-item"), pa = B({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function Va(e) {
  const n = me(Go);
  if (!n)
    throw new Error("[Vuetify] Could not find injected layout");
  const t = e.id ?? `layout-item-${Oe()}`, l = ce("useLayoutItem");
  pe(Uo, {
    id: t
  });
  const a = W(!1);
  Xi(() => a.value = !0), Qi(() => a.value = !1);
  const i = ye(), {
    layoutItemStyles: o,
    layoutItemScrimStyles: s
  } = n.register(l, {
    ...e,
    active: h(() => a.value ? !1 : e.active.value),
    id: t
  });
  return Be(() => n.unregister(t)), {
    layoutItemStyles: o,
    layoutRect: n.layoutRect,
    layoutItemScrimStyles: s,
    layoutIsReady: i
  };
}
const oe = B({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), qo = B({
  text: String,
  ...Y(),
  ...oe()
}, "VToolbarTitle"), Ko = N()({
  name: "VToolbarTitle",
  props: qo(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return U(() => {
      const l = !!(t.default || t.text || e.text);
      return u(e.tag, {
        class: ["v-toolbar-title", e.class],
        style: e.style
      }, {
        default: () => {
          var a;
          return [l && u("div", {
            class: "v-toolbar-title__placeholder"
          }, [t.text ? t.text() : e.text, (a = t.default) == null ? void 0 : a.call(t)])];
        }
      });
    }), {};
  }
}), Yo = B({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function Ve(e, n, t) {
  return N()({
    name: e,
    props: Yo({
      mode: t,
      origin: n
    }),
    setup(l, a) {
      let {
        slots: i
      } = a;
      const o = {
        onBeforeEnter(s) {
          l.origin && (s.style.transformOrigin = l.origin);
        },
        onLeave(s) {
          if (l.leaveAbsolute) {
            const {
              offsetTop: r,
              offsetLeft: c,
              offsetWidth: v,
              offsetHeight: g
            } = s;
            s._transitionInitialStyles = {
              position: s.style.position,
              top: s.style.top,
              left: s.style.left,
              width: s.style.width,
              height: s.style.height
            }, s.style.position = "absolute", s.style.top = `${r}px`, s.style.left = `${c}px`, s.style.width = `${v}px`, s.style.height = `${g}px`;
          }
          l.hideOnLeave && s.style.setProperty("display", "none", "important");
        },
        onAfterLeave(s) {
          if (l.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
            const {
              position: r,
              top: c,
              left: v,
              width: g,
              height: m
            } = s._transitionInitialStyles;
            delete s._transitionInitialStyles, s.style.position = r || "", s.style.top = c || "", s.style.left = v || "", s.style.width = g || "", s.style.height = m || "";
          }
        }
      };
      return () => {
        const s = l.group ? Rn : it;
        return gt(s, {
          name: l.disabled ? "" : e,
          css: !l.disabled,
          ...l.group ? void 0 : {
            mode: l.mode
          },
          ...l.disabled ? {} : o
        }, i.default);
      };
    }
  });
}
function Ia(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return N()({
    name: e,
    props: {
      mode: {
        type: String,
        default: t
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(l, a) {
      let {
        slots: i
      } = a;
      const o = l.group ? Rn : it;
      return () => gt(o, {
        name: l.disabled ? "" : e,
        css: !l.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...l.disabled ? {} : n
      }, i.default);
    }
  });
}
function Aa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", l = ia(`offset-${t}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [t]: o.style[t]
      };
    },
    onEnter(o) {
      const s = o._initialStyle;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const r = `${o[l]}px`;
      o.style[t] = "0", o.offsetHeight, o.style.transition = s.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[t] = r;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [t]: o.style[t]
      }, o.style.overflow = "hidden", o.style[t] = `${o[l]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[t] = "0");
    },
    onAfterLeave: a,
    onLeaveCancelled: a
  };
  function a(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    const s = o._initialStyle[t];
    o.style.overflow = o._initialStyle.overflow, s != null && (o.style[t] = s), delete o._initialStyle;
  }
}
const Xo = B({
  target: [Object, Array]
}, "v-dialog-transition"), Xn = N()({
  name: "VDialogTransition",
  props: Xo(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = {
      onBeforeEnter(a) {
        a.style.pointerEvents = "none", a.style.visibility = "hidden";
      },
      async onEnter(a, i) {
        var m;
        await new Promise((d) => requestAnimationFrame(d)), await new Promise((d) => requestAnimationFrame(d)), a.style.visibility = "";
        const {
          x: o,
          y: s,
          sx: r,
          sy: c,
          speed: v
        } = Rl(e.target, a), g = dt(a, [{
          transform: `translate(${o}px, ${s}px) scale(${r}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * v,
          easing: To
        });
        (m = Fl(a)) == null || m.forEach((d) => {
          dt(d, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * v,
            easing: Jt
          });
        }), g.finished.then(() => i());
      },
      onAfterEnter(a) {
        a.style.removeProperty("pointer-events");
      },
      onBeforeLeave(a) {
        a.style.pointerEvents = "none";
      },
      async onLeave(a, i) {
        var m;
        await new Promise((d) => requestAnimationFrame(d));
        const {
          x: o,
          y: s,
          sx: r,
          sy: c,
          speed: v
        } = Rl(e.target, a);
        dt(a, [{}, {
          transform: `translate(${o}px, ${s}px) scale(${r}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * v,
          easing: Lo
        }).finished.then(() => i()), (m = Fl(a)) == null || m.forEach((d) => {
          dt(d, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * v,
            easing: Jt
          });
        });
      },
      onAfterLeave(a) {
        a.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? u(it, Q({
      name: "dialog-transition"
    }, l, {
      css: !1
    }), t) : u(it, {
      name: "dialog-transition"
    }, t);
  }
});
function Fl(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function Rl(e, n) {
  const t = ba(e), l = Wn(n), [a, i] = getComputedStyle(n).transformOrigin.split(" ").map((S) => parseFloat(S)), [o, s] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let r = t.left + t.width / 2;
  o === "left" || s === "left" ? r -= t.width / 2 : (o === "right" || s === "right") && (r += t.width / 2);
  let c = t.top + t.height / 2;
  o === "top" || s === "top" ? c -= t.height / 2 : (o === "bottom" || s === "bottom") && (c += t.height / 2);
  const v = t.width / l.width, g = t.height / l.height, m = Math.max(1, v, g), d = v / m || 0, y = g / m || 0, f = l.width * l.height / (window.innerWidth * window.innerHeight), b = f > 0.12 ? Math.min(1.5, (f - 0.12) * 10 + 1) : 1;
  return {
    x: r - (a + l.left),
    y: c - (i + l.top),
    sx: d,
    sy: y,
    speed: b
  };
}
Ve("fab-transition", "center center", "out-in");
Ve("dialog-bottom-transition");
Ve("dialog-top-transition");
const Ml = Ve("fade-transition");
Ve("scale-transition");
Ve("scroll-x-transition");
Ve("scroll-x-reverse-transition");
Ve("scroll-y-transition");
Ve("scroll-y-reverse-transition");
Ve("slide-x-transition");
Ve("slide-x-reverse-transition");
const Pa = Ve("slide-y-transition");
Ve("slide-y-reverse-transition");
const Ba = Ia("expand-transition", Aa()), Ea = Ia("expand-x-transition", Aa("", !0)), Qo = B({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), re = N(!1)({
  name: "VDefaultsProvider",
  props: Qo(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      defaults: l,
      disabled: a,
      reset: i,
      root: o,
      scoped: s
    } = aa(e);
    return ut(l, {
      reset: i,
      root: o,
      scoped: s,
      disabled: a
    }), () => {
      var r;
      return (r = t.default) == null ? void 0 : r.call(t);
    };
  }
}), Ye = B({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Xe(e) {
  return {
    dimensionStyles: h(() => {
      const t = {}, l = G(e.height), a = G(e.maxHeight), i = G(e.maxWidth), o = G(e.minHeight), s = G(e.minWidth), r = G(e.width);
      return l != null && (t.height = l), a != null && (t.maxHeight = a), i != null && (t.maxWidth = i), o != null && (t.minHeight = o), s != null && (t.minWidth = s), r != null && (t.width = r), t;
    })
  };
}
function Jo(e) {
  return {
    aspectStyles: h(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const Ta = B({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...Y(),
  ...Ye()
}, "VResponsive"), Nl = N()({
  name: "VResponsive",
  props: Ta(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: l
    } = Jo(e), {
      dimensionStyles: a
    } = Xe(e);
    return U(() => {
      var i;
      return u("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [a.value, e.style]
      }, [u("div", {
        class: "v-responsive__sizer",
        style: l.value
      }, null), (i = t.additional) == null ? void 0 : i.call(t), t.default && u("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [t.default()])]);
    }), {};
  }
});
function Qn(e) {
  return jn(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Vn(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && _o(e.value.background)) {
          const l = wt(e.value.background);
          if (l.a == null || l.a === 1) {
            const a = Ao(l);
            t.color = a, t.caretColor = a;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    return e.value.text && (Vn(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), {
      colorClasses: n,
      colorStyles: t
    };
  });
}
function je(e, n) {
  const t = h(() => ({
    text: ft(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = Qn(t);
  return {
    textColorClasses: l,
    textColorStyles: a
  };
}
function Te(e, n) {
  const t = h(() => ({
    background: ft(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = Qn(t);
  return {
    backgroundColorClasses: l,
    backgroundColorStyles: a
  };
}
const Ie = B({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Ae(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    roundedClasses: h(() => {
      const l = ft(e) ? e.value : e.rounded, a = ft(e) ? e.value : e.tile, i = [];
      if (l === !0 || l === "")
        i.push(`${n}--rounded`);
      else if (typeof l == "string" || l === 0)
        for (const o of String(l).split(" "))
          i.push(`rounded-${o}`);
      else
        (a || l === !1) && i.push("rounded-0");
      return i;
    })
  };
}
const $t = B({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Ue = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: l,
    disabled: a,
    group: i,
    ...o
  } = e, {
    component: s = i ? Rn : it,
    ...r
  } = typeof l == "object" ? l : {};
  return gt(s, Q(typeof l == "string" ? {
    name: a ? "" : l
  } : r, typeof l == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: a,
    group: i
  }).filter((c) => {
    let [v, g] = c;
    return g !== void 0;
  })), o), t);
};
function Zo(e, n) {
  if (!zn)
    return;
  const t = n.modifiers || {}, l = n.value, {
    handler: a,
    options: i
  } = typeof l == "object" ? l : {
    handler: l,
    options: {}
  }, o = new IntersectionObserver(function() {
    var g;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 ? arguments[1] : void 0;
    const c = (g = e._observe) == null ? void 0 : g[n.instance.$.uid];
    if (!c)
      return;
    const v = s.some((m) => m.isIntersecting);
    a && (!t.quiet || c.init) && (!t.once || v || c.init) && a(v, s, r), v && t.once ? La(e, n) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function La(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const Oa = {
  mounted: Zo,
  unmounted: La
}, es = B({
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...Ta(),
  ...Y(),
  ...Ie(),
  ...$t()
}, "VImg"), Jn = N()({
  name: "VImg",
  directives: {
    intersect: Oa
  },
  props: es(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: l
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: i
    } = Te(M(e, "color")), {
      roundedClasses: o
    } = Ae(e), s = ce("VImg"), r = W(""), c = j(), v = W(e.eager ? "loading" : "idle"), g = W(), m = W(), d = h(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), y = h(() => d.value.aspect || g.value / m.value || 0);
    q(() => e.src, () => {
      f(v.value !== "idle");
    }), q(y, (x, A) => {
      !x && A && c.value && p(c.value);
    }), oa(() => f());
    function f(x) {
      if (!(e.eager && x) && !(zn && !x && !e.eager)) {
        if (v.value = "loading", d.value.lazySrc) {
          const A = new Image();
          A.src = d.value.lazySrc, p(A, null);
        }
        d.value.src && ye(() => {
          var A;
          t("loadstart", ((A = c.value) == null ? void 0 : A.currentSrc) || d.value.src), setTimeout(() => {
            var T;
            if (!s.isUnmounted)
              if ((T = c.value) != null && T.complete) {
                if (c.value.naturalWidth || S(), v.value === "error")
                  return;
                y.value || p(c.value, null), v.value === "loading" && b();
              } else
                y.value || p(c.value), _();
          });
        });
      }
    }
    function b() {
      var x;
      s.isUnmounted || (_(), p(c.value), v.value = "loaded", t("load", ((x = c.value) == null ? void 0 : x.currentSrc) || d.value.src));
    }
    function S() {
      var x;
      s.isUnmounted || (v.value = "error", t("error", ((x = c.value) == null ? void 0 : x.currentSrc) || d.value.src));
    }
    function _() {
      const x = c.value;
      x && (r.value = x.currentSrc || x.src);
    }
    let w = -1;
    Be(() => {
      clearTimeout(w);
    });
    function p(x) {
      let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const T = () => {
        if (clearTimeout(w), s.isUnmounted)
          return;
        const {
          naturalHeight: D,
          naturalWidth: X
        } = x;
        D || X ? (g.value = X, m.value = D) : !x.complete && v.value === "loading" && A != null ? w = window.setTimeout(T, A) : (x.currentSrc.endsWith(".svg") || x.currentSrc.startsWith("data:image/svg+xml")) && (g.value = 1, m.value = 1);
      };
      T();
    }
    const L = h(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), V = () => {
      var T;
      if (!d.value.src || v.value === "idle")
        return null;
      const x = u("img", {
        class: ["v-img__img", L.value],
        style: {
          objectPosition: e.position
        },
        src: d.value.src,
        srcset: d.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: b,
        onError: S
      }, null), A = (T = l.sources) == null ? void 0 : T.call(l);
      return u(Ue, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [_e(A ? u("picture", {
          class: "v-img__picture"
        }, [A, x]) : x, [[yt, v.value === "loaded"]])]
      });
    }, C = () => u(Ue, {
      transition: e.transition
    }, {
      default: () => [d.value.lazySrc && v.value !== "loaded" && u("img", {
        class: ["v-img__img", "v-img__img--preload", L.value],
        style: {
          objectPosition: e.position
        },
        src: d.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), $ = () => l.placeholder ? u(Ue, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(v.value === "loading" || v.value === "error" && !l.error) && u("div", {
        class: "v-img__placeholder"
      }, [l.placeholder()])]
    }) : null, H = () => l.error ? u(Ue, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [v.value === "error" && u("div", {
        class: "v-img__error"
      }, [l.error()])]
    }) : null, R = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, O = W(!1);
    {
      const x = q(y, (A) => {
        A && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            O.value = !0;
          });
        }), x());
      });
    }
    return U(() => {
      const x = Nl.filterProps(e);
      return _e(u(Nl, Q({
        class: ["v-img", {
          "v-img--booting": !O.value
        }, a.value, o.value, e.class],
        style: [{
          width: G(e.width === "auto" ? g.value : e.width)
        }, i.value, e.style]
      }, x, {
        aspectRatio: y.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(ie, null, [u(V, null, null), u(C, null, null), u(R, null, null), u($, null, null), u(H, null, null)]),
        default: l.default
      }), [[st("intersect"), {
        handler: f,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: r,
      image: c,
      state: v,
      naturalWidth: g,
      naturalHeight: m
    };
  }
}), Qe = B({
  border: [Boolean, Number, String]
}, "border");
function Je(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    borderClasses: h(() => {
      const l = ft(e) ? e.value : e.border, a = [];
      if (l === !0 || l === "")
        a.push(`${n}--border`);
      else if (typeof l == "string" || l === 0)
        for (const i of String(l).split(" "))
          a.push(`border-${i}`);
      return a;
    })
  };
}
const Ze = B({
  elevation: {
    type: [Number, String],
    validator(e) {
      const n = parseInt(e);
      return !isNaN(n) && n >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      n <= 24;
    }
  }
}, "elevation");
function et(e) {
  return {
    elevationClasses: h(() => {
      const t = ft(e) ? e.value : e.elevation, l = [];
      return t == null || l.push(`elevation-${t}`), l;
    })
  };
}
const ts = [null, "prominent", "default", "comfortable", "compact"], $a = B({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => ts.includes(e)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...Qe(),
  ...Y(),
  ...Ze(),
  ...Ie(),
  ...oe({
    tag: "header"
  }),
  ...de()
}, "VToolbar"), Dl = N()({
  name: "VToolbar",
  props: $a(),
  setup(e, n) {
    var d;
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: a
    } = Te(M(e, "color")), {
      borderClasses: i
    } = Je(e), {
      elevationClasses: o
    } = et(e), {
      roundedClasses: s
    } = Ae(e), {
      themeClasses: r
    } = ge(e), {
      rtlClasses: c
    } = We(), v = W(!!(e.extended || (d = t.extension) != null && d.call(t))), g = h(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), m = h(() => v.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return ut({
      VBtn: {
        variant: "text"
      }
    }), U(() => {
      var S;
      const y = !!(e.title || t.title), f = !!(t.image || e.image), b = (S = t.extension) == null ? void 0 : S.call(t);
      return v.value = !!(e.extended || b), u(e.tag, {
        class: ["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, l.value, i.value, o.value, s.value, r.value, c.value, e.class],
        style: [a.value, e.style]
      }, {
        default: () => [f && u("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [t.image ? u(re, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, t.image) : u(Jn, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), u(re, {
          defaults: {
            VTabs: {
              height: G(g.value)
            }
          }
        }, {
          default: () => {
            var _, w, p;
            return [u("div", {
              class: "v-toolbar__content",
              style: {
                height: G(g.value)
              }
            }, [t.prepend && u("div", {
              class: "v-toolbar__prepend"
            }, [(_ = t.prepend) == null ? void 0 : _.call(t)]), y && u(Ko, {
              key: "title",
              text: e.title
            }, {
              text: t.title
            }), (w = t.default) == null ? void 0 : w.call(t), t.append && u("div", {
              class: "v-toolbar__append"
            }, [(p = t.append) == null ? void 0 : p.call(t)])])];
          }
        }), u(re, {
          defaults: {
            VTabs: {
              height: G(m.value)
            }
          }
        }, {
          default: () => [u(Ba, null, {
            default: () => [v.value && u("div", {
              class: "v-toolbar__extension",
              style: {
                height: G(m.value)
              }
            }, [b])]
          })]
        })]
      });
    }), {
      contentHeight: g,
      extensionHeight: m
    };
  }
}), ns = B({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function ls(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let l = 0;
  const a = j(null), i = W(0), o = W(0), s = W(0), r = W(!1), c = W(!1), v = h(() => Number(e.scrollThreshold)), g = h(() => ze((v.value - i.value) / v.value || 0)), m = () => {
    const d = a.value;
    !d || t && !t.value || (l = i.value, i.value = "window" in d ? d.pageYOffset : d.scrollTop, c.value = i.value < l, s.value = Math.abs(i.value - v.value));
  };
  return q(c, () => {
    o.value = o.value || i.value;
  }), q(r, () => {
    o.value = 0;
  }), rt(() => {
    q(() => e.scrollTarget, (d) => {
      var f;
      const y = d ? document.querySelector(d) : window;
      if (!y) {
        qe(`Unable to locate element with identifier ${d}`);
        return;
      }
      y !== a.value && ((f = a.value) == null || f.removeEventListener("scroll", m), a.value = y, a.value.addEventListener("scroll", m, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), Be(() => {
    var d;
    (d = a.value) == null || d.removeEventListener("scroll", m);
  }), t && q(t, m, {
    immediate: !0
  }), {
    scrollThreshold: v,
    currentScroll: i,
    currentThreshold: s,
    isScrollActive: r,
    scrollRatio: g,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: c,
    savedScroll: o
  };
}
function Fa() {
  const e = W(!1);
  return rt(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: h(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: Fn(e)
  };
}
const as = B({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  location: {
    type: String,
    default: "top",
    validator: (e) => ["top", "bottom"].includes(e)
  },
  ...$a(),
  ...pa(),
  ...ns(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), is = N()({
  name: "VAppBar",
  props: as(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = j(), a = ue(e, "modelValue"), i = h(() => {
      var p;
      const w = new Set(((p = e.scrollBehavior) == null ? void 0 : p.split(" ")) ?? []);
      return {
        hide: w.has("hide"),
        fullyHide: w.has("fully-hide"),
        inverted: w.has("inverted"),
        collapse: w.has("collapse"),
        elevate: w.has("elevate"),
        fadeImage: w.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), o = h(() => {
      const w = i.value;
      return w.hide || w.fullyHide || w.inverted || w.collapse || w.elevate || w.fadeImage || // behavior.shrink ||
      !a.value;
    }), {
      currentScroll: s,
      scrollThreshold: r,
      isScrollingUp: c,
      scrollRatio: v
    } = ls(e, {
      canScroll: o
    }), g = h(() => i.value.hide || i.value.fullyHide), m = h(() => e.collapse || i.value.collapse && (i.value.inverted ? v.value > 0 : v.value === 0)), d = h(() => e.flat || i.value.fullyHide && !a.value || i.value.elevate && (i.value.inverted ? s.value > 0 : s.value === 0)), y = h(() => i.value.fadeImage ? i.value.inverted ? 1 - v.value : v.value : void 0), f = h(() => {
      var L, V;
      const w = Number(((L = l.value) == null ? void 0 : L.contentHeight) ?? e.height), p = Number(((V = l.value) == null ? void 0 : V.extensionHeight) ?? 0);
      return g.value ? s.value < r.value || i.value.fullyHide ? w + p : w : w + p;
    });
    Ke(h(() => !!e.scrollBehavior), () => {
      He(() => {
        g.value ? i.value.inverted ? a.value = s.value > r.value : a.value = c.value || s.value < r.value : a.value = !0;
      });
    });
    const {
      ssrBootStyles: b
    } = Fa(), {
      layoutItemStyles: S,
      layoutIsReady: _
    } = Va({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: M(e, "location"),
      layoutSize: f,
      elementSize: W(void 0),
      active: a,
      absolute: M(e, "absolute")
    });
    return U(() => {
      const w = Dl.filterProps(e);
      return u(Dl, Q({
        ref: l,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...S.value,
          "--v-toolbar-image-opacity": y.value,
          height: void 0,
          ...b.value
        }, e.style]
      }, w, {
        collapse: m.value,
        flat: d.value
      }), t);
    }), _;
  }
}), os = [null, "default", "comfortable", "compact"], $e = B({
  density: {
    type: String,
    default: "default",
    validator: (e) => os.includes(e)
  }
}, "density");
function Ge(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    densityClasses: h(() => `${n}--density-${e.density}`)
  };
}
const ss = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ft(e, n) {
  return u(ie, null, [e && u("span", {
    key: "overlay",
    class: `${n}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${n}__underlay`
  }, null)]);
}
const tt = B({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => ss.includes(e)
  }
}, "variant");
function Rt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  const t = h(() => {
    const {
      variant: i
    } = he(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: l,
    colorStyles: a
  } = Qn(h(() => {
    const {
      variant: i,
      color: o
    } = he(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  }));
  return {
    colorClasses: l,
    colorStyles: a,
    variantClasses: t
  };
}
const Ra = B({
  baseColor: String,
  divided: Boolean,
  ...Qe(),
  ...Y(),
  ...$e(),
  ...Ze(),
  ...Ie(),
  ...oe(),
  ...de(),
  ...tt()
}, "VBtnGroup"), zl = N()({
  name: "VBtnGroup",
  props: Ra(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = ge(e), {
      densityClasses: a
    } = Ge(e), {
      borderClasses: i
    } = Je(e), {
      elevationClasses: o
    } = et(e), {
      roundedClasses: s
    } = Ae(e);
    ut({
      VBtn: {
        height: "auto",
        baseColor: M(e, "baseColor"),
        color: M(e, "color"),
        density: M(e, "density"),
        flat: !0,
        variant: M(e, "variant")
      }
    }), U(() => u(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, l.value, i.value, a.value, o.value, s.value, e.class],
      style: e.style
    }, t));
  }
}), Zn = B({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Ma = B({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Na(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const l = ce("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = Oe();
  pe(Symbol.for(`${n.description}:id`), a);
  const i = me(n, null);
  if (!i) {
    if (!t)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const o = M(e, "value"), s = h(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: a,
    value: o,
    disabled: s
  }, l), Be(() => {
    i.unregister(a);
  });
  const r = h(() => i.isSelected(a)), c = h(() => i.items.value[0].id === a), v = h(() => i.items.value[i.items.value.length - 1].id === a), g = h(() => r.value && [i.selectedClass.value, e.selectedClass]);
  return q(r, (m) => {
    l.emit("group:selected", {
      value: m
    });
  }, {
    flush: "sync"
  }), {
    id: a,
    isSelected: r,
    isFirst: c,
    isLast: v,
    toggle: () => i.select(a, !r.value),
    select: (m) => i.select(a, m),
    selectedClass: g,
    value: o,
    disabled: s,
    group: i
  };
}
function el(e, n) {
  let t = !1;
  const l = ln([]), a = ue(e, "modelValue", [], (m) => m == null ? [] : Da(l, Pe(m)), (m) => {
    const d = us(l, m);
    return e.multiple ? d : d[0];
  }), i = ce("useGroup");
  function o(m, d) {
    const y = m, f = Symbol.for(`${n.description}:id`), S = kt(f, i == null ? void 0 : i.vnode).indexOf(d);
    he(y.value) == null && (y.value = S, y.useIndexAsValue = !0), S > -1 ? l.splice(S, 0, y) : l.push(y);
  }
  function s(m) {
    if (t)
      return;
    r();
    const d = l.findIndex((y) => y.id === m);
    l.splice(d, 1);
  }
  function r() {
    const m = l.find((d) => !d.disabled);
    m && e.mandatory === "force" && !a.value.length && (a.value = [m.id]);
  }
  rt(() => {
    r();
  }), Be(() => {
    t = !0;
  }), Ji(() => {
    for (let m = 0; m < l.length; m++)
      l[m].useIndexAsValue && (l[m].value = m);
  });
  function c(m, d) {
    const y = l.find((f) => f.id === m);
    if (!(d && (y != null && y.disabled)))
      if (e.multiple) {
        const f = a.value.slice(), b = f.findIndex((_) => _ === m), S = ~b;
        if (d = d ?? !S, S && e.mandatory && f.length <= 1 || !S && e.max != null && f.length + 1 > e.max)
          return;
        b < 0 && d ? f.push(m) : b >= 0 && !d && f.splice(b, 1), a.value = f;
      } else {
        const f = a.value.includes(m);
        if (e.mandatory && f)
          return;
        a.value = d ?? !f ? [m] : [];
      }
  }
  function v(m) {
    if (e.multiple && qe('This method is not supported when using "multiple" prop'), a.value.length) {
      const d = a.value[0], y = l.findIndex((S) => S.id === d);
      let f = (y + m) % l.length, b = l[f];
      for (; b.disabled && f !== y; )
        f = (f + m) % l.length, b = l[f];
      if (b.disabled)
        return;
      a.value = [l[f].id];
    } else {
      const d = l.find((y) => !y.disabled);
      d && (a.value = [d.id]);
    }
  }
  const g = {
    register: o,
    unregister: s,
    selected: a,
    select: c,
    disabled: M(e, "disabled"),
    prev: () => v(l.length - 1),
    next: () => v(1),
    isSelected: (m) => a.value.includes(m),
    selectedClass: h(() => e.selectedClass),
    items: h(() => l),
    getItemIndex: (m) => rs(l, m)
  };
  return pe(n, g), g;
}
function rs(e, n) {
  const t = Da(e, [n]);
  return t.length ? e.findIndex((l) => l.id === t[0]) : -1;
}
function Da(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.find((o) => ht(l, o.value)), i = e[l];
    (a == null ? void 0 : a.value) != null ? t.push(a.id) : i != null && t.push(i.id);
  }), t;
}
function us(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.findIndex((i) => i.id === l);
    if (~a) {
      const i = e[a];
      t.push(i.value != null ? i.value : a);
    }
  }), t;
}
const za = Symbol.for("vuetify:v-btn-toggle"), cs = B({
  ...Ra(),
  ...Zn()
}, "VBtnToggle");
N()({
  name: "VBtnToggle",
  props: cs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: l,
      next: a,
      prev: i,
      select: o,
      selected: s
    } = el(e, za);
    return U(() => {
      const r = zl.filterProps(e);
      return u(zl, Q({
        class: ["v-btn-toggle", e.class]
      }, r, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = t.default) == null ? void 0 : c.call(t, {
            isSelected: l,
            next: a,
            prev: i,
            select: o,
            selected: s
          })];
        }
      });
    }), {
      next: a,
      prev: i,
      select: o
    };
  }
});
const ds = ["x-small", "small", "default", "large", "x-large"], Mt = B({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Nt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return jn(() => {
    let t, l;
    return Kt(ds, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = {
      width: G(e.size),
      height: G(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: l
    };
  });
}
const fs = B({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: le,
  ...Y(),
  ...Mt(),
  ...oe({
    tag: "i"
  }),
  ...de()
}, "VIcon"), ae = N()({
  name: "VIcon",
  props: fs(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const a = j(), {
      themeClasses: i
    } = ge(e), {
      iconData: o
    } = Wo(h(() => a.value || e.icon)), {
      sizeClasses: s
    } = Nt(e), {
      textColorClasses: r,
      textColorStyles: c
    } = je(M(e, "color"));
    return U(() => {
      var m, d;
      const v = (m = l.default) == null ? void 0 : m.call(l);
      v && (a.value = (d = va(v).filter((y) => y.type === Zi && y.children && typeof y.children == "string")[0]) == null ? void 0 : d.children);
      const g = !!(t.onClick || t.onClickOnce);
      return u(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", i.value, s.value, r.value, {
          "v-icon--clickable": g,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [s.value ? void 0 : {
          fontSize: G(e.size),
          height: G(e.size),
          width: G(e.size)
        }, c.value, e.style],
        role: g ? "button" : void 0,
        "aria-hidden": !g,
        tabindex: g ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [v]
      });
    }), {};
  }
});
function Ha(e, n) {
  const t = j(), l = W(!1);
  if (zn) {
    const a = new IntersectionObserver((i) => {
      l.value = !!i.find((o) => o.isIntersecting);
    }, n);
    Be(() => {
      a.disconnect();
    }), q(t, (i, o) => {
      o && (a.unobserve(o), l.value = !1), i && a.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: t,
    isIntersecting: l
  };
}
const vs = B({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...Y(),
  ...Mt(),
  ...oe({
    tag: "div"
  }),
  ...de()
}, "VProgressCircular"), ms = N()({
  name: "VProgressCircular",
  props: vs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = 20, a = 2 * Math.PI * l, i = j(), {
      themeClasses: o
    } = ge(e), {
      sizeClasses: s,
      sizeStyles: r
    } = Nt(e), {
      textColorClasses: c,
      textColorStyles: v
    } = je(M(e, "color")), {
      textColorClasses: g,
      textColorStyles: m
    } = je(M(e, "bgColor")), {
      intersectionRef: d,
      isIntersecting: y
    } = Ha(), {
      resizeRef: f,
      contentRect: b
    } = mt(), S = h(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), _ = h(() => Number(e.width)), w = h(() => r.value ? Number(e.size) : b.value ? b.value.width : Math.max(_.value, 32)), p = h(() => l / (1 - _.value / w.value) * 2), L = h(() => _.value / w.value * p.value), V = h(() => G((100 - S.value) / 100 * a));
    return He(() => {
      d.value = i.value, f.value = i.value;
    }), U(() => u(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": y.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, s.value, c.value, e.class],
      style: [r.value, v.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : S.value
    }, {
      default: () => [u("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${p.value} ${p.value}`
      }, [u("circle", {
        class: ["v-progress-circular__underlay", g.value],
        style: m.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: l,
        "stroke-width": L.value,
        "stroke-dasharray": a,
        "stroke-dashoffset": 0
      }, null), u("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: l,
        "stroke-width": L.value,
        "stroke-dasharray": a,
        "stroke-dashoffset": V.value
      }, null)]), t.default && u("div", {
        class: "v-progress-circular__content"
      }, [t.default({
        value: S.value
      })])]
    })), {};
  }
}), Hl = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, tl = B({
  location: String
}, "location");
function nl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: l
  } = We();
  return {
    locationStyles: h(() => {
      if (!e.location)
        return {};
      const {
        side: i,
        align: o
      } = pn(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
      function s(c) {
        return t ? t(c) : 0;
      }
      const r = {};
      return i !== "center" && (n ? r[Hl[i]] = `calc(100% - ${s(i)}px)` : r[i] = 0), o !== "center" ? n ? r[Hl[o]] = `calc(100% - ${s(o)}px)` : r[o] = 0 : (i === "center" ? r.top = r.left = "50%" : r[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", r.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), r;
    })
  };
}
const gs = B({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...Y(),
  ...tl({
    location: "top"
  }),
  ...Ie(),
  ...oe(),
  ...de()
}, "VProgressLinear"), ys = N()({
  name: "VProgressLinear",
  props: gs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ue(e, "modelValue"), {
      isRtl: a,
      rtlClasses: i
    } = We(), {
      themeClasses: o
    } = ge(e), {
      locationStyles: s
    } = nl(e), {
      textColorClasses: r,
      textColorStyles: c
    } = je(e, "color"), {
      backgroundColorClasses: v,
      backgroundColorStyles: g
    } = Te(h(() => e.bgColor || e.color)), {
      backgroundColorClasses: m,
      backgroundColorStyles: d
    } = Te(h(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: y,
      backgroundColorStyles: f
    } = Te(e, "color"), {
      roundedClasses: b
    } = Ae(e), {
      intersectionRef: S,
      isIntersecting: _
    } = Ha(), w = h(() => parseFloat(e.max)), p = h(() => parseFloat(e.height)), L = h(() => ze(parseFloat(e.bufferValue) / w.value * 100, 0, 100)), V = h(() => ze(parseFloat(l.value) / w.value * 100, 0, 100)), C = h(() => a.value !== e.reverse), $ = h(() => e.indeterminate ? "fade-transition" : "slide-x-transition");
    function H(R) {
      if (!S.value)
        return;
      const {
        left: O,
        right: x,
        width: A
      } = S.value.getBoundingClientRect(), T = C.value ? A - R.clientX + (x - A) : R.clientX - O;
      l.value = Math.round(T / A * w.value);
    }
    return U(() => u(e.tag, {
      ref: S,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && _.value,
        "v-progress-linear--reverse": C.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, b.value, o.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? G(p.value) : 0,
        "--v-progress-linear-height": G(p.value),
        ...e.absolute ? s.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : V.value,
      onClick: e.clickable && H
    }, {
      default: () => [e.stream && u("div", {
        key: "stream",
        class: ["v-progress-linear__stream", r.value],
        style: {
          ...c.value,
          [C.value ? "left" : "right"]: G(-p.value),
          borderTop: `${G(p.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${G(p.value / 4)})`,
          width: G(100 - L.value, "%"),
          "--v-progress-linear-stream-to": G(p.value * (C.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", v.value],
        style: [g.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), u("div", {
        class: ["v-progress-linear__buffer", m.value],
        style: [d.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: G(L.value, "%")
        }]
      }, null), u(it, {
        name: $.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((R) => u("div", {
          key: R,
          class: ["v-progress-linear__indeterminate", R, y.value],
          style: f.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", y.value],
          style: [f.value, {
            width: G(V.value, "%")
          }]
        }, null)]
      }), t.default && u("div", {
        class: "v-progress-linear__content"
      }, [t.default({
        value: V.value,
        buffer: L.value
      })])]
    })), {};
  }
}), ll = B({
  loading: [Boolean, String]
}, "loader");
function al(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    loaderClasses: h(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function ja(e, n) {
  var l;
  let {
    slots: t
  } = n;
  return u("div", {
    class: `${e.name}__loader`
  }, [((l = t.default) == null ? void 0 : l.call(t, {
    color: e.color,
    isActive: e.active
  })) || u(ys, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const hs = ["static", "relative", "fixed", "absolute", "sticky"], Wa = B({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => hs.includes(e)
    )
  }
}, "position");
function Ga(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    positionClasses: h(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function bs() {
  const e = ce("useRoute");
  return h(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function Ss() {
  var e, n;
  return (n = (e = ce("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function rn(e, n) {
  var c, v;
  const t = eo("RouterLink"), l = h(() => !!(e.href || e.to)), a = h(() => (l == null ? void 0 : l.value) || bl(n, "click") || bl(e, "click"));
  if (typeof t == "string" || !("useLink" in t))
    return {
      isLink: l,
      isClickable: a,
      href: M(e, "href")
    };
  const i = h(() => ({
    ...e,
    to: M(() => e.to || "")
  })), o = t.useLink(i.value), s = h(() => e.to ? o : void 0), r = bs();
  return {
    isLink: l,
    isClickable: a,
    route: (c = s.value) == null ? void 0 : c.route,
    navigate: (v = s.value) == null ? void 0 : v.navigate,
    isActive: h(() => {
      var g, m, d;
      return s.value ? e.exact ? r.value ? ((d = s.value.isExactActive) == null ? void 0 : d.value) && ht(s.value.route.value.query, r.value.query) : ((m = s.value.isExactActive) == null ? void 0 : m.value) ?? !1 : ((g = s.value.isActive) == null ? void 0 : g.value) ?? !1 : !1;
    }),
    href: h(() => {
      var g;
      return e.to ? (g = s.value) == null ? void 0 : g.route.value.href : e.href;
    })
  };
}
const un = B({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let yn = !1;
function Cs(e, n) {
  let t = !1, l, a;
  ve && (ye(() => {
    window.addEventListener("popstate", i), l = e == null ? void 0 : e.beforeEach((o, s, r) => {
      yn ? t ? n(r) : r() : setTimeout(() => t ? n(r) : r()), yn = !0;
    }), a = e == null ? void 0 : e.afterEach(() => {
      yn = !1;
    });
  }), be(() => {
    window.removeEventListener("popstate", i), l == null || l(), a == null || a();
  }));
  function i(o) {
    var s;
    (s = o.state) != null && s.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
function ks(e, n) {
  q(() => {
    var t;
    return (t = e.isActive) == null ? void 0 : t.value;
  }, (t) => {
    e.isLink.value && t && n && ye(() => {
      n(!0);
    });
  }, {
    immediate: !0
  });
}
const In = Symbol("rippleStop"), ws = 80;
function jl(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function An(e) {
  return e.constructor.name === "TouchEvent";
}
function Ua(e) {
  return e.constructor.name === "KeyboardEvent";
}
const xs = function(e, n) {
  var g;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = 0, a = 0;
  if (!Ua(e)) {
    const m = n.getBoundingClientRect(), d = An(e) ? e.touches[e.touches.length - 1] : e;
    l = d.clientX - m.left, a = d.clientY - m.top;
  }
  let i = 0, o = 0.3;
  (g = n._ripple) != null && g.circle ? (o = 0.15, i = n.clientWidth / 2, i = t.center ? i : i + Math.sqrt((l - i) ** 2 + (a - i) ** 2) / 4) : i = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2;
  const s = `${(n.clientWidth - i * 2) / 2}px`, r = `${(n.clientHeight - i * 2) / 2}px`, c = t.center ? s : `${l - i}px`, v = t.center ? r : `${a - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: v,
    centerX: s,
    centerY: r
  };
}, en = {
  /* eslint-disable max-statements */
  show(e, n) {
    var d;
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((d = n == null ? void 0 : n._ripple) != null && d.enabled))
      return;
    const l = document.createElement("span"), a = document.createElement("span");
    l.appendChild(a), l.className = "v-ripple__container", t.class && (l.className += ` ${t.class}`);
    const {
      radius: i,
      scale: o,
      x: s,
      y: r,
      centerX: c,
      centerY: v
    } = xs(e, n, t), g = `${i * 2}px`;
    a.className = "v-ripple__animation", a.style.width = g, a.style.height = g, n.appendChild(l);
    const m = window.getComputedStyle(n);
    m && m.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), jl(a, `translate(${s}, ${r}) scale3d(${o},${o},${o})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
      a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), jl(a, `translate(${c}, ${v}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled))
      return;
    const n = e.getElementsByClassName("v-ripple__animation");
    if (n.length === 0)
      return;
    const t = n[n.length - 1];
    if (t.dataset.isHiding)
      return;
    t.dataset.isHiding = "true";
    const l = performance.now() - Number(t.dataset.activated), a = Math.max(250 - l, 0);
    setTimeout(() => {
      t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var s;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((s = t.parentNode) == null ? void 0 : s.parentNode) === e && e.removeChild(t.parentNode);
      }, 300);
    }, a);
  }
};
function qa(e) {
  return typeof e > "u" || !!e;
}
function It(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[In])) {
    if (e[In] = !0, An(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || Ua(e), t._ripple.class && (n.class = t._ripple.class), An(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        en.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, ws);
    } else
      en.show(e, t, n);
  }
}
function Wl(e) {
  e[In] = !0;
}
function ke(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        ke(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), en.hide(n);
  }
}
function Ka(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let At = !1;
function Ya(e) {
  !At && (e.keyCode === gl.enter || e.keyCode === gl.space) && (At = !0, It(e));
}
function Xa(e) {
  At = !1, ke(e);
}
function Qa(e) {
  At && (At = !1, ke(e));
}
function Ja(e, n, t) {
  const {
    value: l,
    modifiers: a
  } = n, i = qa(l);
  if (i || en.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, xn(l) && l.class && (e._ripple.class = l.class), i && !t) {
    if (a.stop) {
      e.addEventListener("touchstart", Wl, {
        passive: !0
      }), e.addEventListener("mousedown", Wl);
      return;
    }
    e.addEventListener("touchstart", It, {
      passive: !0
    }), e.addEventListener("touchend", ke, {
      passive: !0
    }), e.addEventListener("touchmove", Ka, {
      passive: !0
    }), e.addEventListener("touchcancel", ke), e.addEventListener("mousedown", It), e.addEventListener("mouseup", ke), e.addEventListener("mouseleave", ke), e.addEventListener("keydown", Ya), e.addEventListener("keyup", Xa), e.addEventListener("blur", Qa), e.addEventListener("dragstart", ke, {
      passive: !0
    });
  } else
    !i && t && Za(e);
}
function Za(e) {
  e.removeEventListener("mousedown", It), e.removeEventListener("touchstart", It), e.removeEventListener("touchend", ke), e.removeEventListener("touchmove", Ka), e.removeEventListener("touchcancel", ke), e.removeEventListener("mouseup", ke), e.removeEventListener("mouseleave", ke), e.removeEventListener("keydown", Ya), e.removeEventListener("keyup", Xa), e.removeEventListener("dragstart", ke), e.removeEventListener("blur", Qa);
}
function _s(e, n) {
  Ja(e, n, !1);
}
function ps(e) {
  delete e._ripple, Za(e);
}
function Vs(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = qa(n.oldValue);
  Ja(e, n, t);
}
const Dt = {
  mounted: _s,
  unmounted: ps,
  updated: Vs
}, Is = B({
  active: {
    type: Boolean,
    default: void 0
  },
  baseColor: String,
  symbol: {
    type: null,
    default: za
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: le,
  appendIcon: le,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...Qe(),
  ...Y(),
  ...$e(),
  ...Ye(),
  ...Ze(),
  ...Ma(),
  ...ll(),
  ...tl(),
  ...Wa(),
  ...Ie(),
  ...un(),
  ...Mt(),
  ...oe({
    tag: "button"
  }),
  ...de(),
  ...tt({
    variant: "elevated"
  })
}, "VBtn"), As = N()({
  name: "VBtn",
  props: Is(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const {
      themeClasses: a
    } = ge(e), {
      borderClasses: i
    } = Je(e), {
      densityClasses: o
    } = Ge(e), {
      dimensionStyles: s
    } = Xe(e), {
      elevationClasses: r
    } = et(e), {
      loaderClasses: c
    } = al(e), {
      locationStyles: v
    } = nl(e), {
      positionClasses: g
    } = Ga(e), {
      roundedClasses: m
    } = Ae(e), {
      sizeClasses: d,
      sizeStyles: y
    } = Nt(e), f = Na(e, e.symbol, !1), b = rn(e, t), S = h(() => {
      var R;
      return e.active !== void 0 ? e.active : b.isLink.value ? (R = b.isActive) == null ? void 0 : R.value : f == null ? void 0 : f.isSelected.value;
    }), _ = h(() => {
      var O, x;
      return {
        color: (f == null ? void 0 : f.isSelected.value) && (!b.isLink.value || ((O = b.isActive) == null ? void 0 : O.value)) || !f || ((x = b.isActive) == null ? void 0 : x.value) ? e.color ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: w,
      colorStyles: p,
      variantClasses: L
    } = Rt(_), V = h(() => (f == null ? void 0 : f.disabled.value) || e.disabled), C = h(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), $ = h(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function H(R) {
      var O;
      V.value || b.isLink.value && (R.metaKey || R.ctrlKey || R.shiftKey || R.button !== 0 || t.target === "_blank") || ((O = b.navigate) == null || O.call(b, R), f == null || f.toggle());
    }
    return ks(b, f == null ? void 0 : f.select), U(() => {
      const R = b.isLink.value ? "a" : e.tag, O = !!(e.prependIcon || l.prepend), x = !!(e.appendIcon || l.append), A = !!(e.icon && e.icon !== !0);
      return _e(u(R, {
        type: R === "a" ? void 0 : "button",
        class: ["v-btn", f == null ? void 0 : f.selectedClass.value, {
          "v-btn--active": S.value,
          "v-btn--block": e.block,
          "v-btn--disabled": V.value,
          "v-btn--elevated": C.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, a.value, i.value, w.value, o.value, r.value, c.value, g.value, m.value, d.value, L.value, e.class],
        style: [p.value, s.value, v.value, y.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: V.value || void 0,
        href: b.href.value,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: H,
        value: $.value
      }, {
        default: () => {
          var T;
          return [Ft(!0, "v-btn"), !e.icon && O && u("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [l.prepend ? u(re, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, l.prepend) : u(ae, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), u("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!l.default && A ? u(ae, {
            key: "content-icon",
            icon: e.icon
          }, null) : u(re, {
            key: "content-defaults",
            disabled: !A,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var D;
              return [((D = l.default) == null ? void 0 : D.call(l)) ?? e.text];
            }
          })]), !e.icon && x && u("span", {
            key: "append",
            class: "v-btn__append"
          }, [l.append ? u(re, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, l.append) : u(ae, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && u("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((T = l.loader) == null ? void 0 : T.call(l)) ?? u(ms, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Dt, !V.value && !!e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: f
    };
  }
});
function hn(e, n) {
  return {
    x: e.x + n.x,
    y: e.y + n.y
  };
}
function Ps(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function Gl(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: t,
      align: l
    } = e, a = l === "left" ? 0 : l === "center" ? n.width / 2 : l === "right" ? n.width : l, i = t === "top" ? 0 : t === "bottom" ? n.height : t;
    return hn({
      x: a,
      y: i
    }, n);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: t,
      align: l
    } = e, a = t === "left" ? 0 : t === "right" ? n.width : t, i = l === "top" ? 0 : l === "center" ? n.height / 2 : l === "bottom" ? n.height : l;
    return hn({
      x: a,
      y: i
    }, n);
  }
  return hn({
    x: n.width / 2,
    y: n.height / 2
  }, n);
}
const ei = {
  static: Ts,
  // specific viewport position, usually centered
  connected: Os
  // connected to a certain element
}, Bs = B({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in ei
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function Es(e, n) {
  const t = j({}), l = j();
  ve && Ke(() => !!(n.isActive.value && e.locationStrategy), (i) => {
    var o, s;
    q(() => e.locationStrategy, i), be(() => {
      window.removeEventListener("resize", a), l.value = void 0;
    }), window.addEventListener("resize", a, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? l.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation : l.value = (s = ei[e.locationStrategy](n, e, t)) == null ? void 0 : s.updateLocation;
  });
  function a(i) {
    var o;
    (o = l.value) == null || o.call(l, i);
  }
  return {
    contentStyles: t,
    updateLocation: l
  };
}
function Ts() {
}
function Ls(e, n) {
  n ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const t = Wn(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function Os(e, n, t) {
  (Array.isArray(e.target.value) || $o(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: a,
    preferredOrigin: i
  } = jn(() => {
    const y = pn(n.location, e.isRtl.value), f = n.origin === "overlap" ? y : n.origin === "auto" ? vn(y) : pn(n.origin, e.isRtl.value);
    return y.side === f.side && y.align === mn(f).align ? {
      preferredAnchor: Cl(y),
      preferredOrigin: Cl(f)
    } : {
      preferredAnchor: y,
      preferredOrigin: f
    };
  }), [o, s, r, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((y) => h(() => {
    const f = parseFloat(n[y]);
    return isNaN(f) ? 1 / 0 : f;
  })), v = h(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const y = n.offset.split(" ").map(parseFloat);
      return y.length < 2 && y.push(0), y;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let g = !1;
  const m = new ResizeObserver(() => {
    g && d();
  });
  q([e.target, e.contentEl], (y, f) => {
    let [b, S] = y, [_, w] = f;
    _ && !Array.isArray(_) && m.unobserve(_), b && !Array.isArray(b) && m.observe(b), w && m.unobserve(w), S && m.observe(S);
  }, {
    immediate: !0
  }), be(() => {
    m.disconnect();
  });
  function d() {
    if (g = !1, requestAnimationFrame(() => g = !0), !e.target.value || !e.contentEl.value)
      return;
    const y = ba(e.target.value), f = Ls(e.contentEl.value, e.isRtl.value), b = Zt(e.contentEl.value), S = 12;
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (f.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), f.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const _ = b.reduce((O, x) => {
      const A = x.getBoundingClientRect(), T = new at({
        x: x === document.documentElement ? 0 : A.x,
        y: x === document.documentElement ? 0 : A.y,
        width: x.clientWidth,
        height: x.clientHeight
      });
      return O ? new at({
        x: Math.max(O.left, T.left),
        y: Math.max(O.top, T.top),
        width: Math.min(O.right, T.right) - Math.max(O.left, T.left),
        height: Math.min(O.bottom, T.bottom) - Math.max(O.top, T.top)
      }) : T;
    }, void 0);
    _.x += S, _.y += S, _.width -= S * 2, _.height -= S * 2;
    let w = {
      anchor: a.value,
      origin: i.value
    };
    function p(O) {
      const x = new at(f), A = Gl(O.anchor, y), T = Gl(O.origin, x);
      let {
        x: D,
        y: X
      } = Ps(A, T);
      switch (O.anchor.side) {
        case "top":
          X -= v.value[0];
          break;
        case "bottom":
          X += v.value[0];
          break;
        case "left":
          D -= v.value[0];
          break;
        case "right":
          D += v.value[0];
          break;
      }
      switch (O.anchor.align) {
        case "top":
          X -= v.value[1];
          break;
        case "bottom":
          X += v.value[1];
          break;
        case "left":
          D -= v.value[1];
          break;
        case "right":
          D += v.value[1];
          break;
      }
      return x.x += D, x.y += X, x.width = Math.min(x.width, r.value), x.height = Math.min(x.height, c.value), {
        overflows: wl(x, _),
        x: D,
        y: X
      };
    }
    let L = 0, V = 0;
    const C = {
      x: 0,
      y: 0
    }, $ = {
      x: !1,
      y: !1
    };
    let H = -1;
    for (; ; ) {
      if (H++ > 10) {
        wo("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: O,
        y: x,
        overflows: A
      } = p(w);
      L += O, V += x, f.x += O, f.y += x;
      {
        const T = kl(w.anchor), D = A.x.before || A.x.after, X = A.y.before || A.y.after;
        let ee = !1;
        if (["x", "y"].forEach((I) => {
          if (I === "x" && D && !$.x || I === "y" && X && !$.y) {
            const P = {
              anchor: {
                ...w.anchor
              },
              origin: {
                ...w.origin
              }
            }, k = I === "x" ? T === "y" ? mn : vn : T === "y" ? vn : mn;
            P.anchor = k(P.anchor), P.origin = k(P.origin);
            const {
              overflows: E
            } = p(P);
            (E[I].before <= A[I].before && E[I].after <= A[I].after || E[I].before + E[I].after < (A[I].before + A[I].after) / 2) && (w = P, ee = $[I] = !0);
          }
        }), ee)
          continue;
      }
      A.x.before && (L += A.x.before, f.x += A.x.before), A.x.after && (L -= A.x.after, f.x -= A.x.after), A.y.before && (V += A.y.before, f.y += A.y.before), A.y.after && (V -= A.y.after, f.y -= A.y.after);
      {
        const T = wl(f, _);
        C.x = _.width - T.x.before - T.x.after, C.y = _.height - T.y.before - T.y.after, L += T.x.before, f.x += T.x.before, V += T.y.before, f.y += T.y.before;
      }
      break;
    }
    const R = kl(w.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`,
      transformOrigin: `${w.origin.side} ${w.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: G(bn(V)),
      left: e.isRtl.value ? void 0 : G(bn(L)),
      right: e.isRtl.value ? G(bn(-L)) : void 0,
      minWidth: G(R === "y" ? Math.min(o.value, y.width) : o.value),
      maxWidth: G(Ul(ze(C.x, o.value === 1 / 0 ? 0 : o.value, r.value))),
      maxHeight: G(Ul(ze(C.y, s.value === 1 / 0 ? 0 : s.value, c.value)))
    }), {
      available: C,
      contentBox: f
    };
  }
  return q(() => [a.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => d()), ye(() => {
    const y = d();
    if (!y)
      return;
    const {
      available: f,
      contentBox: b
    } = y;
    b.height > f.y && requestAnimationFrame(() => {
      d(), requestAnimationFrame(() => {
        d();
      });
    });
  }), {
    updateLocation: d
  };
}
function bn(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Ul(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Pn = !0;
const tn = [];
function $s(e) {
  !Pn || tn.length ? (tn.push(e), Bn()) : (Pn = !1, e(), Bn());
}
let ql = -1;
function Bn() {
  cancelAnimationFrame(ql), ql = requestAnimationFrame(() => {
    const e = tn.shift();
    e && e(), tn.length ? Bn() : Pn = !0;
  });
}
const Ut = {
  none: null,
  close: Ms,
  block: Ns,
  reposition: Ds
}, Fs = B({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Ut
  }
}, "VOverlay-scroll-strategies");
function Rs(e, n) {
  if (!ve)
    return;
  let t;
  He(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = $n(), await new Promise((l) => setTimeout(l)), t.active && t.run(() => {
      var l;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (l = Ut[e.scrollStrategy]) == null || l.call(Ut, n, e, t);
    }));
  }), be(() => {
    t == null || t.stop();
  });
}
function Ms(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  ti(e.targetEl.value ?? e.contentEl.value, n);
}
function Ns(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, l = [.../* @__PURE__ */ new Set([...Zt(e.targetEl.value, n.contained ? t : void 0), ...Zt(e.contentEl.value, n.contained ? t : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = ((s) => qn(s) && s)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, r) => {
    s.style.setProperty("--v-body-scroll-x", G(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", G(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", G(a)), s.classList.add("v-overlay-scroll-blocked");
  }), be(() => {
    l.forEach((s, r) => {
      const c = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), v = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), g = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -c, s.scrollTop = -v, s.style.scrollBehavior = g;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Ds(e, n, t) {
  let l = !1, a = -1, i = -1;
  function o(s) {
    $s(() => {
      var v, g;
      const r = performance.now();
      (g = (v = e.updateLocation).value) == null || g.call(v, s), l = (performance.now() - r) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      ti(e.targetEl.value ?? e.contentEl.value, (s) => {
        l ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            o(s);
          });
        })) : o(s);
      });
    });
  }), be(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
}
function ti(e, n) {
  const t = [document, ...Zt(e)];
  t.forEach((l) => {
    l.addEventListener("scroll", n, {
      passive: !0
    });
  }), be(() => {
    t.forEach((l) => {
      l.removeEventListener("scroll", n);
    });
  });
}
const En = Symbol.for("vuetify:v-menu"), zs = B({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Hs(e, n) {
  let t = () => {
  };
  function l(o) {
    t == null || t();
    const s = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((r) => {
      t = uo(s, () => {
        n == null || n(o), r(o);
      });
    });
  }
  function a() {
    return l(!0);
  }
  function i() {
    return l(!1);
  }
  return {
    clearDelay: t,
    runOpenDelay: a,
    runCloseDelay: i
  };
}
const js = B({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...zs()
}, "VOverlay-activator");
function Ws(e, n) {
  let {
    isActive: t,
    isTop: l
  } = n;
  const a = ce("useActivator"), i = j();
  let o = !1, s = !1, r = !0;
  const c = h(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), v = h(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: g,
    runCloseDelay: m
  } = Hs(e, (C) => {
    C === (e.openOnHover && o || c.value && s) && !(e.openOnHover && t.value && !l.value) && (t.value !== C && (r = !0), t.value = C);
  }), d = j(), y = {
    onClick: (C) => {
      C.stopPropagation(), i.value = C.currentTarget || C.target, t.value || (d.value = [C.clientX, C.clientY]), t.value = !t.value;
    },
    onMouseenter: (C) => {
      var $;
      ($ = C.sourceCapabilities) != null && $.firesTouchEvents || (o = !0, i.value = C.currentTarget || C.target, g());
    },
    onMouseleave: (C) => {
      o = !1, m();
    },
    onFocus: (C) => {
      Xt(C.target, ":focus-visible") !== !1 && (s = !0, C.stopPropagation(), i.value = C.currentTarget || C.target, g());
    },
    onBlur: (C) => {
      s = !1, C.stopPropagation(), m();
    }
  }, f = h(() => {
    const C = {};
    return v.value && (C.onClick = y.onClick), e.openOnHover && (C.onMouseenter = y.onMouseenter, C.onMouseleave = y.onMouseleave), c.value && (C.onFocus = y.onFocus, C.onBlur = y.onBlur), C;
  }), b = h(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      o = !0, g();
    }, C.onMouseleave = () => {
      o = !1, m();
    }), c.value && (C.onFocusin = () => {
      s = !0, g();
    }, C.onFocusout = () => {
      s = !1, m();
    }), e.closeOnContentClick) {
      const $ = me(En, null);
      C.onClick = () => {
        t.value = !1, $ == null || $.closeParents();
      };
    }
    return C;
  }), S = h(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      r && (o = !0, r = !1, g());
    }, C.onMouseleave = () => {
      o = !1, m();
    }), C;
  });
  q(l, (C) => {
    C && (e.openOnHover && !o && (!c.value || !s) || c.value && !s && (!e.openOnHover || !o)) && (t.value = !1);
  }), q(t, (C) => {
    C || setTimeout(() => {
      d.value = void 0;
    });
  }, {
    flush: "post"
  });
  const _ = _n();
  He(() => {
    _.value && ye(() => {
      i.value = _.el;
    });
  });
  const w = _n(), p = h(() => e.target === "cursor" && d.value ? d.value : w.value ? w.el : ni(e.target, a) || i.value), L = h(() => Array.isArray(p.value) ? void 0 : p.value);
  let V;
  return q(() => !!e.activator, (C) => {
    C && ve ? (V = $n(), V.run(() => {
      Gs(e, a, {
        activatorEl: i,
        activatorEvents: f
      });
    })) : V && V.stop();
  }, {
    flush: "post",
    immediate: !0
  }), be(() => {
    V == null || V.stop();
  }), {
    activatorEl: i,
    activatorRef: _,
    target: p,
    targetEl: L,
    targetRef: w,
    activatorEvents: f,
    contentEvents: b,
    scrimEvents: S
  };
}
function Gs(e, n, t) {
  let {
    activatorEl: l,
    activatorEvents: a
  } = t;
  q(() => e.activator, (r, c) => {
    if (c && r !== c) {
      const v = s(c);
      v && o(v);
    }
    r && ye(() => i());
  }, {
    immediate: !0
  }), q(() => e.activatorProps, () => {
    i();
  }), be(() => {
    o();
  });
  function i() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    r && vo(r, Q(a.value, c));
  }
  function o() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    r && mo(r, Q(a.value, c));
  }
  function s() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = ni(r, n);
    return l.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, l.value;
  }
}
function ni(e, n) {
  var l, a;
  if (!e)
    return;
  let t;
  if (e === "parent") {
    let i = (a = (l = n == null ? void 0 : n.proxy) == null ? void 0 : l.$el) == null ? void 0 : a.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    t = i;
  } else
    typeof e == "string" ? t = document.querySelector(e) : "$el" in e ? t = e.$el : t = e;
  return t;
}
function Us() {
  if (!ve)
    return W(!1);
  const {
    ssr: e
  } = Ot();
  if (e) {
    const n = W(!1);
    return rt(() => {
      n.value = !0;
    }), n;
  } else
    return W(!0);
}
const qs = B({
  eager: Boolean
}, "lazy");
function Ks(e, n) {
  const t = W(!1), l = h(() => t.value || e.eager || n.value);
  q(n, () => t.value = !0);
  function a() {
    e.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: l,
    onAfterLeave: a
  };
}
function il() {
  const n = ce("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const Kl = Symbol.for("vuetify:stack"), St = ln([]);
function Ys(e, n, t) {
  const l = ce("useStack"), a = !t, i = me(Kl, void 0), o = ln({
    activeChildren: /* @__PURE__ */ new Set()
  });
  pe(Kl, o);
  const s = W(+n.value);
  Ke(e, () => {
    var g;
    const v = (g = St.at(-1)) == null ? void 0 : g[1];
    s.value = v ? v + 10 : +n.value, a && St.push([l.uid, s.value]), i == null || i.activeChildren.add(l.uid), be(() => {
      if (a) {
        const m = xe(St).findIndex((d) => d[0] === l.uid);
        St.splice(m, 1);
      }
      i == null || i.activeChildren.delete(l.uid);
    });
  });
  const r = W(!0);
  a && He(() => {
    var g;
    const v = ((g = St.at(-1)) == null ? void 0 : g[0]) === l.uid;
    setTimeout(() => r.value = v);
  });
  const c = h(() => !o.activeChildren.size);
  return {
    globalTop: Fn(r),
    localTop: c,
    stackStyles: h(() => ({
      zIndex: s.value
    }))
  };
}
function Xs(e) {
  return {
    teleportTarget: h(() => {
      const t = e.value;
      if (t === !0 || !ve)
        return;
      const l = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (l == null) {
        an(`Unable to locate target ${t}`);
        return;
      }
      let a = l.querySelector(":scope > .v-overlay-container");
      return a || (a = document.createElement("div"), a.className = "v-overlay-container", l.appendChild(a)), a;
    })
  };
}
function Qs() {
  return !0;
}
function li(e, n, t) {
  if (!e || ai(e, t) === !1)
    return !1;
  const l = ka(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const a = (typeof t.value == "object" && t.value.include || (() => []))();
  return a.push(n), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function ai(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Qs)(e);
}
function Js(e, n, t) {
  const l = typeof t.value == "function" ? t.value : t.value.handler;
  n._clickOutside.lastMousedownWasOutside && li(e, n, t) && setTimeout(() => {
    ai(e, t) && l && l(e);
  }, 0);
}
function Yl(e, n) {
  const t = ka(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Zs = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (a) => Js(a, e, n), l = (a) => {
      e._clickOutside.lastMousedownWasOutside = li(a, e, n);
    };
    Yl(e, (a) => {
      a.addEventListener("click", t, !0), a.addEventListener("mousedown", l, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: l
    };
  },
  unmounted(e, n) {
    e._clickOutside && (Yl(e, (t) => {
      var i;
      if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid]))
        return;
      const {
        onClick: l,
        onMousedown: a
      } = e._clickOutside[n.instance.$.uid];
      t.removeEventListener("click", l, !0), t.removeEventListener("mousedown", a, !0);
    }), delete e._clickOutside[n.instance.$.uid]);
  }
};
function er(e) {
  const {
    modelValue: n,
    color: t,
    ...l
  } = e;
  return u(it, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", Q({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, l), null)]
  });
}
const ol = B({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...js(),
  ...Y(),
  ...Ye(),
  ...qs(),
  ...Bs(),
  ...Fs(),
  ...de(),
  ...$t()
}, "VOverlay"), nn = N()({
  name: "VOverlay",
  directives: {
    ClickOutside: Zs
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...ol()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      slots: t,
      attrs: l,
      emit: a
    } = n;
    const i = ue(e, "modelValue"), o = h({
      get: () => i.value,
      set: (z) => {
        z && e.disabled || (i.value = z);
      }
    }), {
      teleportTarget: s
    } = Xs(h(() => e.attach || e.contained)), {
      themeClasses: r
    } = ge(e), {
      rtlClasses: c,
      isRtl: v
    } = We(), {
      hasContent: g,
      onAfterLeave: m
    } = Ks(e, o), d = Te(h(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: y,
      localTop: f,
      stackStyles: b
    } = Ys(o, M(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: S,
      activatorRef: _,
      target: w,
      targetEl: p,
      targetRef: L,
      activatorEvents: V,
      contentEvents: C,
      scrimEvents: $
    } = Ws(e, {
      isActive: o,
      isTop: f
    }), {
      dimensionStyles: H
    } = Xe(e), R = Us(), {
      scopeId: O
    } = il();
    q(() => e.disabled, (z) => {
      z && (o.value = !1);
    });
    const x = j(), A = j(), T = j(), {
      contentStyles: D,
      updateLocation: X
    } = Es(e, {
      isRtl: v,
      contentEl: T,
      target: w,
      isActive: o
    });
    Rs(e, {
      root: x,
      contentEl: T,
      targetEl: p,
      isActive: o,
      updateLocation: X
    });
    function ee(z) {
      a("click:outside", z), e.persistent ? F() : o.value = !1;
    }
    function I(z) {
      return o.value && y.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || z.target === A.value);
    }
    ve && q(o, (z) => {
      z ? window.addEventListener("keydown", P) : window.removeEventListener("keydown", P);
    }, {
      immediate: !0
    }), Be(() => {
      ve && window.removeEventListener("keydown", P);
    });
    function P(z) {
      var ne, se;
      z.key === "Escape" && y.value && (e.persistent ? F() : (o.value = !1, (ne = T.value) != null && ne.contains(document.activeElement) && ((se = S.value) == null || se.focus())));
    }
    const k = Ss();
    Ke(() => e.closeOnBack, () => {
      Cs(k, (z) => {
        y.value && o.value ? (z(!1), e.persistent ? F() : o.value = !1) : z();
      });
    });
    const E = j();
    q(() => o.value && (e.absolute || e.contained) && s.value == null, (z) => {
      if (z) {
        const ne = wa(x.value);
        ne && ne !== document.scrollingElement && (E.value = ne.scrollTop);
      }
    });
    function F() {
      e.noClickAnimation || T.value && dt(T.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Jt
      });
    }
    function K() {
      a("afterEnter");
    }
    function te() {
      m(), a("afterLeave");
    }
    return U(() => {
      var z;
      return u(ie, null, [(z = t.activator) == null ? void 0 : z.call(t, {
        isActive: o.value,
        targetRef: L,
        props: Q({
          ref: _
        }, V.value, e.activatorProps)
      }), R.value && g.value && u(to, {
        disabled: !s.value,
        to: s.value
      }, {
        default: () => [u("div", Q({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": o.value,
            "v-overlay--contained": e.contained
          }, r.value, c.value, e.class],
          style: [b.value, {
            "--v-overlay-opacity": e.opacity,
            top: G(E.value)
          }, e.style],
          ref: x
        }, O, l), [u(er, Q({
          color: d,
          modelValue: o.value && !!e.scrim,
          ref: A
        }, $.value), null), u(Ue, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: w.value,
          onAfterEnter: K,
          onAfterLeave: te
        }, {
          default: () => {
            var ne;
            return [_e(u("div", Q({
              ref: T,
              class: ["v-overlay__content", e.contentClass],
              style: [H.value, D.value]
            }, C.value, e.contentProps), [(ne = t.default) == null ? void 0 : ne.call(t, {
              isActive: o
            })]), [[yt, o.value], [st("click-outside"), {
              handler: ee,
              closeConditional: I,
              include: () => [S.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: S,
      scrimEl: A,
      target: w,
      animateClick: F,
      contentEl: T,
      globalTop: y,
      localTop: f,
      updateLocation: X
    };
  }
}), Sn = Symbol("Forwarded refs");
function Cn(e, n) {
  let t = e;
  for (; t; ) {
    const l = Reflect.getOwnPropertyDescriptor(t, n);
    if (l)
      return l;
    t = Object.getPrototypeOf(t);
  }
}
function cn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  return e[Sn] = t, new Proxy(e, {
    get(a, i) {
      if (Reflect.has(a, i))
        return Reflect.get(a, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of t)
          if (o.value && Reflect.has(o.value, i)) {
            const s = Reflect.get(o.value, i);
            return typeof s == "function" ? s.bind(o.value) : s;
          }
      }
    },
    has(a, i) {
      if (Reflect.has(a, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
        return !1;
      for (const o of t)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(a, i, o) {
      if (Reflect.has(a, i))
        return Reflect.set(a, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
        return !1;
      for (const s of t)
        if (s.value && Reflect.has(s.value, i))
          return Reflect.set(s.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(a, i) {
      var s;
      const o = Reflect.getOwnPropertyDescriptor(a, i);
      if (o)
        return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const r of t) {
          if (!r.value)
            continue;
          const c = Cn(r.value, i) ?? ("_" in r.value ? Cn((s = r.value._) == null ? void 0 : s.setupState, i) : void 0);
          if (c)
            return c;
        }
        for (const r of t) {
          const c = r.value && r.value[Sn];
          if (!c)
            continue;
          const v = c.slice();
          for (; v.length; ) {
            const g = v.shift(), m = Cn(g.value, i);
            if (m)
              return m;
            const d = g.value && g.value[Sn];
            d && v.push(...d);
          }
        }
      }
    }
  });
}
const tr = B({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...ol({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: Xn
    },
    zIndex: 2400
  })
}, "VDialog"), nr = N()({
  name: "VDialog",
  props: tr(),
  emits: {
    "update:modelValue": (e) => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: l
    } = n;
    const a = ue(e, "modelValue"), {
      scopeId: i
    } = il(), o = j();
    function s(v) {
      var d, y;
      const g = v.relatedTarget, m = v.target;
      if (g !== m && ((d = o.value) != null && d.contentEl) && // We're the topmost dialog
      ((y = o.value) != null && y.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(m) && // It isn't inside the dialog body
      !o.value.contentEl.contains(m)) {
        const f = pt(o.value.contentEl);
        if (!f.length)
          return;
        const b = f[0], S = f[f.length - 1];
        g === b ? S.focus() : b.focus();
      }
    }
    ve && q(() => a.value && e.retainFocus, (v) => {
      v ? document.addEventListener("focusin", s) : document.removeEventListener("focusin", s);
    }, {
      immediate: !0
    });
    function r() {
      var v;
      (v = o.value) != null && v.contentEl && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      t("afterLeave");
    }
    return q(a, async (v) => {
      var g;
      v || (await ye(), (g = o.value.activatorEl) == null || g.focus({
        preventScroll: !0
      }));
    }), U(() => {
      const v = nn.filterProps(e), g = Q({
        "aria-haspopup": "dialog",
        "aria-expanded": String(a.value)
      }, e.activatorProps), m = Q({
        tabindex: -1
      }, e.contentProps);
      return u(nn, Q({
        ref: o,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, v, {
        modelValue: a.value,
        "onUpdate:modelValue": (d) => a.value = d,
        "aria-modal": "true",
        activatorProps: g,
        contentProps: m,
        role: "dialog",
        onAfterEnter: r,
        onAfterLeave: c
      }, i), {
        activator: l.activator,
        default: function() {
          for (var d = arguments.length, y = new Array(d), f = 0; f < d; f++)
            y[f] = arguments[f];
          return u(re, {
            root: "VDialog"
          }, {
            default: () => {
              var b;
              return [(b = l.default) == null ? void 0 : b.call(l, ...y)];
            }
          });
        }
      });
    }), cn({}, o);
  }
}), lr = B({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...Y(),
  ...oe()
}, "VContainer"), ii = N()({
  name: "VContainer",
  props: lr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: l
    } = We();
    return U(() => u(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, l.value, e.class],
      style: e.style
    }, t)), {};
  }
}), oi = on.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), si = on.reduce((e, n) => {
  const t = "offset" + Et(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), ri = on.reduce((e, n) => {
  const t = "order" + Et(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Xl = {
  col: Object.keys(oi),
  offset: Object.keys(si),
  order: Object.keys(ri)
};
function ar(e, n, t) {
  let l = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return e === "col" && (l = "v-" + l), e === "col" && (t === "" || t === !0) || (l += `-${t}`), l.toLowerCase();
  }
}
const ir = ["auto", "start", "end", "center", "baseline", "stretch"], or = B({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...oi,
  offset: {
    type: [String, Number],
    default: null
  },
  ...si,
  order: {
    type: [String, Number],
    default: null
  },
  ...ri,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => ir.includes(e)
  },
  ...Y(),
  ...oe()
}, "VCol"), Re = N()({
  name: "VCol",
  props: or(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => {
      const a = [];
      let i;
      for (i in Xl)
        Xl[i].forEach((s) => {
          const r = e[s], c = ar(i, s, r);
          c && a.push(c);
        });
      const o = a.some((s) => s.startsWith("v-col-"));
      return a.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !o || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), a;
    });
    return () => {
      var a;
      return gt(e.tag, {
        class: [l.value, e.class],
        style: e.style
      }, (a = t.default) == null ? void 0 : a.call(t));
    };
  }
}), sl = ["start", "end", "center"], ui = ["space-between", "space-around", "space-evenly"];
function rl(e, n) {
  return on.reduce((t, l) => {
    const a = e + Et(l);
    return t[a] = n(), t;
  }, {});
}
const sr = [...sl, "baseline", "stretch"], ci = (e) => sr.includes(e), di = rl("align", () => ({
  type: String,
  default: null,
  validator: ci
})), rr = [...sl, ...ui], fi = (e) => rr.includes(e), vi = rl("justify", () => ({
  type: String,
  default: null,
  validator: fi
})), ur = [...sl, ...ui, "stretch"], mi = (e) => ur.includes(e), gi = rl("alignContent", () => ({
  type: String,
  default: null,
  validator: mi
})), Ql = {
  align: Object.keys(di),
  justify: Object.keys(vi),
  alignContent: Object.keys(gi)
}, cr = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function dr(e, n, t) {
  let l = cr[e];
  if (t != null) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return l += `-${t}`, l.toLowerCase();
  }
}
const fr = B({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: ci
  },
  ...di,
  justify: {
    type: String,
    default: null,
    validator: fi
  },
  ...vi,
  alignContent: {
    type: String,
    default: null,
    validator: mi
  },
  ...gi,
  ...Y(),
  ...oe()
}, "VRow"), _t = N()({
  name: "VRow",
  props: fr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => {
      const a = [];
      let i;
      for (i in Ql)
        Ql[i].forEach((o) => {
          const s = e[o], r = dr(i, o, s);
          r && a.push(r);
        });
      return a.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), a;
    });
    return () => {
      var a;
      return gt(e.tag, {
        class: ["v-row", l.value, e.class],
        style: e.style
      }, (a = t.default) == null ? void 0 : a.call(t));
    };
  }
}), yi = Un("v-spacer", "div", "VSpacer"), Tn = Symbol.for("vuetify:list");
function hi() {
  const e = me(Tn, {
    hasPrepend: W(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: W(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return pe(Tn, n), e;
}
function bi() {
  return me(Tn, null);
}
const ul = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: l,
        value: a,
        activated: i
      } = t;
      return l = xe(l), e && !a && i.size === 1 && i.has(l) || (a ? i.add(l) : i.delete(l)), i;
    },
    in: (t, l, a) => {
      let i = /* @__PURE__ */ new Set();
      if (t != null)
        for (const o of Pe(t))
          i = n.activate({
            id: o,
            value: !0,
            activated: new Set(i),
            children: l,
            parents: a
          });
      return i;
    },
    out: (t) => Array.from(t)
  };
  return n;
}, Si = (e) => {
  const n = ul(e);
  return {
    activate: (l) => {
      let {
        activated: a,
        id: i,
        ...o
      } = l;
      i = xe(i);
      const s = a.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return n.activate({
        ...o,
        id: i,
        activated: s
      });
    },
    in: (l, a, i) => {
      let o = /* @__PURE__ */ new Set();
      if (l != null) {
        const s = Pe(l);
        s.length && (o = n.in(s.slice(0, 1), a, i));
      }
      return o;
    },
    out: (l, a, i) => n.out(l, a, i)
  };
}, vr = (e) => {
  const n = ul(e);
  return {
    activate: (l) => {
      let {
        id: a,
        activated: i,
        children: o,
        ...s
      } = l;
      return a = xe(a), o.has(a) ? i : n.activate({
        id: a,
        activated: i,
        children: o,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, mr = (e) => {
  const n = Si(e);
  return {
    activate: (l) => {
      let {
        id: a,
        activated: i,
        children: o,
        ...s
      } = l;
      return a = xe(a), o.has(a) ? i : n.activate({
        id: a,
        activated: i,
        children: o,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, gr = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: l,
      parents: a
    } = e;
    if (t) {
      const i = /* @__PURE__ */ new Set();
      i.add(n);
      let o = a.get(n);
      for (; o != null; )
        i.add(o), o = a.get(o);
      return i;
    } else
      return l.delete(n), l;
  },
  select: () => null
}, Ci = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: l,
      parents: a
    } = e;
    if (t) {
      let i = a.get(n);
      for (l.add(n); i != null && i !== n; )
        l.add(i), i = a.get(i);
      return l;
    } else
      l.delete(n);
    return l;
  },
  select: () => null
}, yr = {
  open: Ci.open,
  select: (e) => {
    let {
      id: n,
      value: t,
      opened: l,
      parents: a
    } = e;
    if (!t)
      return l;
    const i = [];
    let o = a.get(n);
    for (; o != null; )
      i.push(o), o = a.get(o);
    return new Set(i);
  }
}, cl = (e) => {
  const n = {
    select: (t) => {
      let {
        id: l,
        value: a,
        selected: i
      } = t;
      if (l = xe(l), e && !a) {
        const o = Array.from(i.entries()).reduce((s, r) => {
          let [c, v] = r;
          return v === "on" && s.push(c), s;
        }, []);
        if (o.length === 1 && o[0] === l)
          return i;
      }
      return i.set(l, a ? "on" : "off"), i;
    },
    in: (t, l, a) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        i = n.select({
          id: o,
          value: !0,
          selected: new Map(i),
          children: l,
          parents: a
        });
      return i;
    },
    out: (t) => {
      const l = [];
      for (const [a, i] of t.entries())
        i === "on" && l.push(a);
      return l;
    }
  };
  return n;
}, ki = (e) => {
  const n = cl(e);
  return {
    select: (l) => {
      let {
        selected: a,
        id: i,
        ...o
      } = l;
      i = xe(i);
      const s = a.has(i) ? /* @__PURE__ */ new Map([[i, a.get(i)]]) : /* @__PURE__ */ new Map();
      return n.select({
        ...o,
        id: i,
        selected: s
      });
    },
    in: (l, a, i) => {
      let o = /* @__PURE__ */ new Map();
      return l != null && l.length && (o = n.in(l.slice(0, 1), a, i)), o;
    },
    out: (l, a, i) => n.out(l, a, i)
  };
}, hr = (e) => {
  const n = cl(e);
  return {
    select: (l) => {
      let {
        id: a,
        selected: i,
        children: o,
        ...s
      } = l;
      return a = xe(a), o.has(a) ? i : n.select({
        id: a,
        selected: i,
        children: o,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, br = (e) => {
  const n = ki(e);
  return {
    select: (l) => {
      let {
        id: a,
        selected: i,
        children: o,
        ...s
      } = l;
      return a = xe(a), o.has(a) ? i : n.select({
        id: a,
        selected: i,
        children: o,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, Sr = (e) => {
  const n = {
    select: (t) => {
      let {
        id: l,
        value: a,
        selected: i,
        children: o,
        parents: s
      } = t;
      l = xe(l);
      const r = new Map(i), c = [l];
      for (; c.length; ) {
        const g = c.shift();
        i.set(g, a ? "on" : "off"), o.has(g) && c.push(...o.get(g));
      }
      let v = s.get(l);
      for (; v; ) {
        const g = o.get(v), m = g.every((y) => i.get(y) === "on"), d = g.every((y) => !i.has(y) || i.get(y) === "off");
        i.set(v, m ? "on" : d ? "off" : "indeterminate"), v = s.get(v);
      }
      return e && !a && Array.from(i.entries()).reduce((m, d) => {
        let [y, f] = d;
        return f === "on" && m.push(y), m;
      }, []).length === 0 ? r : i;
    },
    in: (t, l, a) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        i = n.select({
          id: o,
          value: !0,
          selected: new Map(i),
          children: l,
          parents: a
        });
      return i;
    },
    out: (t, l) => {
      const a = [];
      for (const [i, o] of t.entries())
        o === "on" && !l.has(i) && a.push(i);
      return a;
    }
  };
  return n;
}, Pt = Symbol.for("vuetify:nested"), wi = {
  id: W(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: j(/* @__PURE__ */ new Map()),
    children: j(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: j(!1),
    selectable: j(!1),
    opened: j(/* @__PURE__ */ new Set()),
    activated: j(/* @__PURE__ */ new Set()),
    selected: j(/* @__PURE__ */ new Map()),
    selectedValues: j([])
  }
}, Cr = B({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), kr = (e) => {
  let n = !1;
  const t = j(/* @__PURE__ */ new Map()), l = j(/* @__PURE__ */ new Map()), a = ue(e, "opened", e.opened, (d) => new Set(d), (d) => [...d.values()]), i = h(() => {
    if (typeof e.activeStrategy == "object")
      return e.activeStrategy;
    if (typeof e.activeStrategy == "function")
      return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return vr(e.mandatory);
      case "single-leaf":
        return mr(e.mandatory);
      case "independent":
        return ul(e.mandatory);
      case "single-independent":
      default:
        return Si(e.mandatory);
    }
  }), o = h(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    if (typeof e.selectStrategy == "function")
      return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return br(e.mandatory);
      case "leaf":
        return hr(e.mandatory);
      case "independent":
        return cl(e.mandatory);
      case "single-independent":
        return ki(e.mandatory);
      case "classic":
      default:
        return Sr(e.mandatory);
    }
  }), s = h(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return yr;
      case "single":
        return gr;
      case "multiple":
      default:
        return Ci;
    }
  }), r = ue(e, "activated", e.activated, (d) => i.value.in(d, t.value, l.value), (d) => i.value.out(d, t.value, l.value)), c = ue(e, "selected", e.selected, (d) => o.value.in(d, t.value, l.value), (d) => o.value.out(d, t.value, l.value));
  Be(() => {
    n = !0;
  });
  function v(d) {
    const y = [];
    let f = d;
    for (; f != null; )
      y.unshift(f), f = l.value.get(f);
    return y;
  }
  const g = ce("nested"), m = {
    id: W(),
    root: {
      opened: a,
      activatable: M(e, "activatable"),
      selectable: M(e, "selectable"),
      activated: r,
      selected: c,
      selectedValues: h(() => {
        const d = [];
        for (const [y, f] of c.value.entries())
          f === "on" && d.push(y);
        return d;
      }),
      register: (d, y, f) => {
        y && d !== y && l.value.set(d, y), f && t.value.set(d, []), y != null && t.value.set(y, [...t.value.get(y) || [], d]);
      },
      unregister: (d) => {
        if (n)
          return;
        t.value.delete(d);
        const y = l.value.get(d);
        if (y) {
          const f = t.value.get(y) ?? [];
          t.value.set(y, f.filter((b) => b !== d));
        }
        l.value.delete(d), a.value.delete(d);
      },
      open: (d, y, f) => {
        g.emit("click:open", {
          id: d,
          value: y,
          path: v(d),
          event: f
        });
        const b = s.value.open({
          id: d,
          value: y,
          opened: new Set(a.value),
          children: t.value,
          parents: l.value,
          event: f
        });
        b && (a.value = b);
      },
      openOnSelect: (d, y, f) => {
        const b = s.value.select({
          id: d,
          value: y,
          selected: new Map(c.value),
          opened: new Set(a.value),
          children: t.value,
          parents: l.value,
          event: f
        });
        b && (a.value = b);
      },
      select: (d, y, f) => {
        g.emit("click:select", {
          id: d,
          value: y,
          path: v(d),
          event: f
        });
        const b = o.value.select({
          id: d,
          value: y,
          selected: new Map(c.value),
          children: t.value,
          parents: l.value,
          event: f
        });
        b && (c.value = b), m.root.openOnSelect(d, y, f);
      },
      activate: (d, y, f) => {
        if (!e.activatable)
          return m.root.select(d, !0, f);
        g.emit("click:activate", {
          id: d,
          value: y,
          path: v(d),
          event: f
        });
        const b = i.value.activate({
          id: d,
          value: y,
          activated: new Set(r.value),
          children: t.value,
          parents: l.value,
          event: f
        });
        b && (r.value = b);
      },
      children: t,
      parents: l
    }
  };
  return pe(Pt, m), m.root;
}, xi = (e, n) => {
  const t = me(Pt, wi), l = Symbol(Oe()), a = h(() => e.value !== void 0 ? e.value : l), i = {
    ...t,
    id: a,
    open: (o, s) => t.root.open(a.value, o, s),
    openOnSelect: (o, s) => t.root.openOnSelect(a.value, o, s),
    isOpen: h(() => t.root.opened.value.has(a.value)),
    parent: h(() => t.root.parents.value.get(a.value)),
    activate: (o, s) => t.root.activate(a.value, o, s),
    isActivated: h(() => t.root.activated.value.has(xe(a.value))),
    select: (o, s) => t.root.select(a.value, o, s),
    isSelected: h(() => t.root.selected.value.get(xe(a.value)) === "on"),
    isIndeterminate: h(() => t.root.selected.value.get(a.value) === "indeterminate"),
    isLeaf: h(() => !t.root.children.value.get(a.value)),
    isGroupActivator: t.isGroupActivator
  };
  return !t.isGroupActivator && t.root.register(a.value, t.id.value, n), Be(() => {
    !t.isGroupActivator && t.root.unregister(a.value);
  }), n && pe(Pt, i), i;
}, wr = () => {
  const e = me(Pt, wi);
  pe(Pt, {
    ...e,
    isGroupActivator: !0
  });
}, xr = Lt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return wr(), () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), _r = B({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: le,
    default: "$collapse"
  },
  expandIcon: {
    type: le,
    default: "$expand"
  },
  prependIcon: le,
  appendIcon: le,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...Y(),
  ...oe()
}, "VListGroup"), Jl = N()({
  name: "VListGroup",
  props: _r(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: l,
      open: a,
      id: i
    } = xi(M(e, "value"), !0), o = h(() => `v-list-group--id-${String(i.value)}`), s = bi(), {
      isBooted: r
    } = Fa();
    function c(d) {
      d.stopPropagation(), a(!l.value, d);
    }
    const v = h(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), g = h(() => l.value ? e.collapseIcon : e.expandIcon), m = h(() => ({
      VListItem: {
        active: l.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && g.value,
        appendIcon: e.appendIcon || !e.subgroup && g.value,
        title: e.title,
        value: e.value
      }
    }));
    return U(() => u(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": l.value
      }, e.class],
      style: e.style
    }, {
      default: () => [t.activator && u(re, {
        defaults: m.value
      }, {
        default: () => [u(xr, null, {
          default: () => [t.activator({
            props: v.value,
            isOpen: l.value
          })]
        })]
      }), u(Ue, {
        transition: {
          component: Ba
        },
        disabled: !r.value
      }, {
        default: () => {
          var d;
          return [_e(u("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(d = t.default) == null ? void 0 : d.call(t)]), [[yt, l.value]])];
        }
      })]
    })), {
      isOpen: l
    };
  }
}), pr = B({
  opacity: [Number, String],
  ...Y(),
  ...oe()
}, "VListItemSubtitle"), Vr = N()({
  name: "VListItemSubtitle",
  props: pr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return U(() => u(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), xt = Un("v-list-item-title"), Ir = B({
  start: Boolean,
  end: Boolean,
  icon: le,
  image: String,
  text: String,
  ...Y(),
  ...$e(),
  ...Ie(),
  ...Mt(),
  ...oe(),
  ...de(),
  ...tt({
    variant: "flat"
  })
}, "VAvatar"), ot = N()({
  name: "VAvatar",
  props: Ir(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = ge(e), {
      colorClasses: a,
      colorStyles: i,
      variantClasses: o
    } = Rt(e), {
      densityClasses: s
    } = Ge(e), {
      roundedClasses: r
    } = Ae(e), {
      sizeClasses: c,
      sizeStyles: v
    } = Nt(e);
    return U(() => u(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, l.value, a.value, s.value, r.value, c.value, o.value, e.class],
      style: [i.value, v.value, e.style]
    }, {
      default: () => [t.default ? u(re, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            image: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [t.default()]
      }) : e.image ? u(Jn, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? u(ae, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Ft(!1, "v-avatar")]
    })), {};
  }
}), Ar = B({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: le,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: le,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: we(),
  onClickOnce: we(),
  ...Qe(),
  ...Y(),
  ...$e(),
  ...Ye(),
  ...Ze(),
  ...Ie(),
  ...un(),
  ...oe(),
  ...de(),
  ...tt({
    variant: "text"
  })
}, "VListItem"), De = N()({
  name: "VListItem",
  directives: {
    Ripple: Dt
  },
  props: Ar(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: l,
      emit: a
    } = n;
    const i = rn(e, t), o = h(() => e.value === void 0 ? i.href.value : e.value), {
      activate: s,
      isActivated: r,
      select: c,
      isSelected: v,
      isIndeterminate: g,
      isGroupActivator: m,
      root: d,
      parent: y,
      openOnSelect: f
    } = xi(o, !1), b = bi(), S = h(() => {
      var k;
      return e.active !== !1 && (e.active || ((k = i.isActive) == null ? void 0 : k.value) || (d.activatable.value ? r.value : v.value));
    }), _ = h(() => e.link !== !1 && i.isLink.value), w = h(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || !!b && (d.selectable.value || d.activatable.value || e.value != null))), p = h(() => e.rounded || e.nav), L = h(() => e.color ?? e.activeColor), V = h(() => ({
      color: S.value ? L.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    q(() => {
      var k;
      return (k = i.isActive) == null ? void 0 : k.value;
    }, (k) => {
      k && y.value != null && d.open(y.value, !0), k && f(k);
    }, {
      immediate: !0
    });
    const {
      themeClasses: C
    } = ge(e), {
      borderClasses: $
    } = Je(e), {
      colorClasses: H,
      colorStyles: R,
      variantClasses: O
    } = Rt(V), {
      densityClasses: x
    } = Ge(e), {
      dimensionStyles: A
    } = Xe(e), {
      elevationClasses: T
    } = et(e), {
      roundedClasses: D
    } = Ae(p), X = h(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), ee = h(() => ({
      isActive: S.value,
      select: c,
      isSelected: v.value,
      isIndeterminate: g.value
    }));
    function I(k) {
      var E;
      a("click", k), w.value && ((E = i.navigate) == null || E.call(i, k), !m && (d.activatable.value ? s(!r.value, k) : (d.selectable.value || e.value != null) && c(!v.value, k)));
    }
    function P(k) {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), I(k));
    }
    return U(() => {
      const k = _.value ? "a" : e.tag, E = l.title || e.title != null, F = l.subtitle || e.subtitle != null, K = !!(e.appendAvatar || e.appendIcon), te = !!(K || l.append), z = !!(e.prependAvatar || e.prependIcon), ne = !!(z || l.prepend);
      return b == null || b.updateHasPrepend(ne), e.activeColor && xo("active-color", ["color", "base-color"]), _e(u(k, {
        class: ["v-list-item", {
          "v-list-item--active": S.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": w.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !ne && (b == null ? void 0 : b.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && S.value
        }, C.value, $.value, H.value, x.value, T.value, X.value, D.value, O.value, e.class],
        style: [R.value, A.value, e.style],
        href: i.href.value,
        tabindex: w.value ? b ? -2 : 0 : void 0,
        onClick: I,
        onKeydown: w.value && !_.value && P
      }, {
        default: () => {
          var se;
          return [Ft(w.value || S.value, "v-list-item"), ne && u("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [l.prepend ? u(re, {
            key: "prepend-defaults",
            disabled: !z,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var fe;
              return [(fe = l.prepend) == null ? void 0 : fe.call(l, ee.value)];
            }
          }) : u(ie, null, [e.prependAvatar && u(ot, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && u(ae, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)]), u("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [E && u(xt, {
            key: "title"
          }, {
            default: () => {
              var fe;
              return [((fe = l.title) == null ? void 0 : fe.call(l, {
                title: e.title
              })) ?? e.title];
            }
          }), F && u(Vr, {
            key: "subtitle"
          }, {
            default: () => {
              var fe;
              return [((fe = l.subtitle) == null ? void 0 : fe.call(l, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (se = l.default) == null ? void 0 : se.call(l, ee.value)]), te && u("div", {
            key: "append",
            class: "v-list-item__append"
          }, [l.append ? u(re, {
            key: "append-defaults",
            disabled: !K,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var fe;
              return [(fe = l.append) == null ? void 0 : fe.call(l, ee.value)];
            }
          }) : u(ie, null, [e.appendIcon && u(ae, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(ot, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[st("ripple"), w.value && e.ripple]]);
    }), {
      activate: s,
      isActivated: r,
      isGroupActivator: m,
      isSelected: v,
      list: b,
      select: c
    };
  }
}), Pr = B({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...Y(),
  ...oe()
}, "VListSubheader"), Br = N()({
  name: "VListSubheader",
  props: Pr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: l,
      textColorStyles: a
    } = je(M(e, "color"));
    return U(() => {
      const i = !!(t.default || e.title);
      return u(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, l.value, e.class],
        style: [{
          textColorStyles: a
        }, e.style]
      }, {
        default: () => {
          var o;
          return [i && u("div", {
            class: "v-list-subheader__text"
          }, [((o = t.default) == null ? void 0 : o.call(t)) ?? e.title])];
        }
      });
    }), {};
  }
}), Er = B({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...Y(),
  ...de()
}, "VDivider"), qt = N()({
  name: "VDivider",
  props: Er(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const {
      themeClasses: a
    } = ge(e), {
      textColorClasses: i,
      textColorStyles: o
    } = je(M(e, "color")), s = h(() => {
      const r = {};
      return e.length && (r[e.vertical ? "height" : "width"] = G(e.length)), e.thickness && (r[e.vertical ? "borderRightWidth" : "borderTopWidth"] = G(e.thickness)), r;
    });
    return U(() => {
      const r = u("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, a.value, i.value, e.class],
        style: [s.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !t.role || t.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${t.role || "separator"}`
      }, null);
      return l.default ? u("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [r, u("div", {
        class: "v-divider__content"
      }, [l.default()]), r]) : r;
    }), {};
  }
}), Tr = B({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), _i = N()({
  name: "VListChildren",
  props: Tr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return hi(), () => {
      var l, a;
      return ((l = t.default) == null ? void 0 : l.call(t)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
        var m, d;
        let {
          children: o,
          props: s,
          type: r,
          raw: c
        } = i;
        if (r === "divider")
          return ((m = t.divider) == null ? void 0 : m.call(t, {
            props: s
          })) ?? u(qt, s, null);
        if (r === "subheader")
          return ((d = t.subheader) == null ? void 0 : d.call(t, {
            props: s
          })) ?? u(Br, s, null);
        const v = {
          subtitle: t.subtitle ? (y) => {
            var f;
            return (f = t.subtitle) == null ? void 0 : f.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          prepend: t.prepend ? (y) => {
            var f;
            return (f = t.prepend) == null ? void 0 : f.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          append: t.append ? (y) => {
            var f;
            return (f = t.append) == null ? void 0 : f.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          title: t.title ? (y) => {
            var f;
            return (f = t.title) == null ? void 0 : f.call(t, {
              ...y,
              item: c
            });
          } : void 0
        }, g = Jl.filterProps(s);
        return o ? u(Jl, Q({
          value: s == null ? void 0 : s.value
        }, g), {
          activator: (y) => {
            let {
              props: f
            } = y;
            const b = {
              ...s,
              ...f,
              value: e.returnObject ? c : s.value
            };
            return t.header ? t.header({
              props: b
            }) : u(De, b, v);
          },
          default: () => u(_i, {
            items: o,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: s
        }) : u(De, Q(s, {
          value: e.returnObject ? c : s.value
        }), v);
      }));
    };
  }
}), pi = B({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: ht
  }
}, "list-items");
function Ln(e, n) {
  const t = Me(n, e.itemTitle, n), l = Me(n, e.itemValue, t), a = Me(n, e.itemChildren), i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? bt(n, ["children"]) : n : void 0 : Me(n, e.itemProps), o = {
    title: t,
    value: l,
    ...i
  };
  return {
    title: String(o.title ?? ""),
    value: o.value,
    props: o,
    children: Array.isArray(a) ? Vi(e, a) : void 0,
    raw: n
  };
}
function Vi(e, n) {
  const t = [];
  for (const l of n)
    t.push(Ln(e, l));
  return t;
}
function Lr(e) {
  const n = h(() => Vi(e, e.items)), t = h(() => n.value.some((i) => i.value === null));
  function l(i) {
    return t.value || (i = i.filter((o) => o !== null)), i.map((o) => e.returnObject && typeof o == "string" ? Ln(e, o) : n.value.find((s) => e.valueComparator(o, s.value)) || Ln(e, o));
  }
  function a(i) {
    return e.returnObject ? i.map((o) => {
      let {
        raw: s
      } = o;
      return s;
    }) : i.map((o) => {
      let {
        value: s
      } = o;
      return s;
    });
  }
  return {
    items: n,
    transformIn: l,
    transformOut: a
  };
}
function Or(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function $r(e, n) {
  const t = Me(n, e.itemType, "item"), l = Or(n) ? n : Me(n, e.itemTitle), a = Me(n, e.itemValue, void 0), i = Me(n, e.itemChildren), o = e.itemProps === !0 ? bt(n, ["children"]) : Me(n, e.itemProps), s = {
    title: l,
    value: a,
    ...o
  };
  return {
    type: t,
    title: s.title,
    value: s.value,
    props: s,
    children: t === "item" && i ? Ii(e, i) : void 0,
    raw: n
  };
}
function Ii(e, n) {
  const t = [];
  for (const l of n)
    t.push($r(e, l));
  return t;
}
function Fr(e) {
  return {
    items: h(() => Ii(e, e.items))
  };
}
const Rr = B({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": we(),
  "onClick:select": we(),
  ...Cr({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...Qe(),
  ...Y(),
  ...$e(),
  ...Ye(),
  ...Ze(),
  itemType: {
    type: String,
    default: "type"
  },
  ...pi(),
  ...Ie(),
  ...oe(),
  ...de(),
  ...tt({
    variant: "text"
  })
}, "VList"), Mr = N()({
  name: "VList",
  props: Rr(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: l
    } = Fr(e), {
      themeClasses: a
    } = ge(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Te(M(e, "bgColor")), {
      borderClasses: s
    } = Je(e), {
      densityClasses: r
    } = Ge(e), {
      dimensionStyles: c
    } = Xe(e), {
      elevationClasses: v
    } = et(e), {
      roundedClasses: g
    } = Ae(e), {
      children: m,
      open: d,
      parents: y,
      select: f
    } = kr(e), b = h(() => e.lines ? `v-list--${e.lines}-line` : void 0), S = M(e, "activeColor"), _ = M(e, "baseColor"), w = M(e, "color");
    hi(), ut({
      VListGroup: {
        activeColor: S,
        baseColor: _,
        color: w,
        expandIcon: M(e, "expandIcon"),
        collapseIcon: M(e, "collapseIcon")
      },
      VListItem: {
        activeClass: M(e, "activeClass"),
        activeColor: S,
        baseColor: _,
        color: w,
        density: M(e, "density"),
        disabled: M(e, "disabled"),
        lines: M(e, "lines"),
        nav: M(e, "nav"),
        slim: M(e, "slim"),
        variant: M(e, "variant")
      }
    });
    const p = W(!1), L = j();
    function V(x) {
      p.value = !0;
    }
    function C(x) {
      p.value = !1;
    }
    function $(x) {
      var A;
      !p.value && !(x.relatedTarget && ((A = L.value) != null && A.contains(x.relatedTarget))) && O();
    }
    function H(x) {
      const A = x.target;
      if (!(!L.value || ["INPUT", "TEXTAREA"].includes(A.tagName))) {
        if (x.key === "ArrowDown")
          O("next");
        else if (x.key === "ArrowUp")
          O("prev");
        else if (x.key === "Home")
          O("first");
        else if (x.key === "End")
          O("last");
        else
          return;
        x.preventDefault();
      }
    }
    function R(x) {
      p.value = !0;
    }
    function O(x) {
      if (L.value)
        return Yt(L.value, x);
    }
    return U(() => u(e.tag, {
      ref: L,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, a.value, i.value, s.value, r.value, v.value, b.value, g.value, e.class],
      style: [o.value, c.value, e.style],
      tabindex: e.disabled || p.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: V,
      onFocusout: C,
      onFocus: $,
      onKeydown: H,
      onMousedown: R
    }, {
      default: () => [u(_i, {
        items: l.value,
        returnObject: e.returnObject
      }, t)]
    })), {
      open: d,
      select: f,
      focus: O,
      children: m,
      parents: y
    };
  }
}), Nr = B({
  text: String,
  onClick: we(),
  ...Y(),
  ...de()
}, "VLabel"), Ai = N()({
  name: "VLabel",
  props: Nr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return U(() => {
      var l;
      return u("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (l = t.default) == null ? void 0 : l.call(t)]);
    }), {};
  }
}), Pi = Symbol.for("vuetify:selection-control-group"), Bi = B({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: le,
  trueIcon: le,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: ht
  },
  ...Y(),
  ...$e(),
  ...de()
}, "SelectionControlGroup"), Dr = B({
  ...Bi({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
N()({
  name: "VSelectionControlGroup",
  props: Dr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ue(e, "modelValue"), a = Oe(), i = h(() => e.id || `v-selection-control-group-${a}`), o = h(() => e.name || i.value), s = /* @__PURE__ */ new Set();
    return pe(Pi, {
      modelValue: l,
      forceUpdate: () => {
        s.forEach((r) => r());
      },
      onForceUpdate: (r) => {
        s.add(r), be(() => {
          s.delete(r);
        });
      }
    }), ut({
      [e.defaultsTarget]: {
        color: M(e, "color"),
        disabled: M(e, "disabled"),
        density: M(e, "density"),
        error: M(e, "error"),
        inline: M(e, "inline"),
        modelValue: l,
        multiple: h(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)),
        name: o,
        falseIcon: M(e, "falseIcon"),
        trueIcon: M(e, "trueIcon"),
        readonly: M(e, "readonly"),
        ripple: M(e, "ripple"),
        type: M(e, "type"),
        valueComparator: M(e, "valueComparator")
      }
    }), U(() => {
      var r;
      return u("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(r = t.default) == null ? void 0 : r.call(t)]);
    }), {};
  }
});
const Ei = B({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...Y(),
  ...Bi()
}, "VSelectionControl");
function zr(e) {
  const n = me(Pi, void 0), {
    densityClasses: t
  } = Ge(e), l = ue(e, "modelValue"), a = h(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = h(() => e.falseValue !== void 0 ? e.falseValue : !1), o = h(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), s = h({
    get() {
      const d = n ? n.modelValue.value : l.value;
      return o.value ? Pe(d).some((y) => e.valueComparator(y, a.value)) : e.valueComparator(d, a.value);
    },
    set(d) {
      if (e.readonly)
        return;
      const y = d ? a.value : i.value;
      let f = y;
      o.value && (f = d ? [...Pe(l.value), y] : Pe(l.value).filter((b) => !e.valueComparator(b, a.value))), n ? n.modelValue.value = f : l.value = f;
    }
  }), {
    textColorClasses: r,
    textColorStyles: c
  } = je(h(() => {
    if (!(e.error || e.disabled))
      return s.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: v,
    backgroundColorStyles: g
  } = Te(h(() => s.value && !e.error && !e.disabled ? e.color : e.baseColor)), m = h(() => s.value ? e.trueIcon : e.falseIcon);
  return {
    group: n,
    densityClasses: t,
    trueValue: a,
    falseValue: i,
    model: s,
    textColorClasses: r,
    textColorStyles: c,
    backgroundColorClasses: v,
    backgroundColorStyles: g,
    icon: m
  };
}
const Zl = N()({
  name: "VSelectionControl",
  directives: {
    Ripple: Dt
  },
  inheritAttrs: !1,
  props: Ei(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const {
      group: a,
      densityClasses: i,
      icon: o,
      model: s,
      textColorClasses: r,
      textColorStyles: c,
      backgroundColorClasses: v,
      backgroundColorStyles: g,
      trueValue: m
    } = zr(e), d = Oe(), y = W(!1), f = W(!1), b = j(), S = h(() => e.id || `input-${d}`), _ = h(() => !e.disabled && !e.readonly);
    a == null || a.onForceUpdate(() => {
      b.value && (b.value.checked = s.value);
    });
    function w(C) {
      _.value && (y.value = !0, Xt(C.target, ":focus-visible") !== !1 && (f.value = !0));
    }
    function p() {
      y.value = !1, f.value = !1;
    }
    function L(C) {
      C.stopPropagation();
    }
    function V(C) {
      if (!_.value) {
        b.value && (b.value.checked = s.value);
        return;
      }
      e.readonly && a && ye(() => a.forceUpdate()), s.value = C.target.checked;
    }
    return U(() => {
      var O, x;
      const C = l.label ? l.label({
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label, [$, H] = fa(t), R = u("input", Q({
        ref: b,
        checked: s.value,
        disabled: !!e.disabled,
        id: S.value,
        onBlur: p,
        onFocus: w,
        onInput: V,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: m.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? s.value : void 0
      }, H), null);
      return u("div", Q({
        class: ["v-selection-control", {
          "v-selection-control--dirty": s.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": y.value,
          "v-selection-control--focus-visible": f.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, $, {
        style: e.style
      }), [u("div", {
        class: ["v-selection-control__wrapper", r.value],
        style: c.value
      }, [(O = l.default) == null ? void 0 : O.call(l, {
        backgroundColorClasses: v,
        backgroundColorStyles: g
      }), _e(u("div", {
        class: ["v-selection-control__input"]
      }, [((x = l.input) == null ? void 0 : x.call(l, {
        model: s,
        textColorClasses: r,
        textColorStyles: c,
        backgroundColorClasses: v,
        backgroundColorStyles: g,
        inputNode: R,
        icon: o.value,
        props: {
          onFocus: w,
          onBlur: p,
          id: S.value
        }
      })) ?? u(ie, null, [o.value && u(ae, {
        key: "icon",
        icon: o.value
      }, null), R])]), [[st("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), C && u(Ai, {
        for: S.value,
        onClick: L
      }, {
        default: () => [C]
      })]);
    }), {
      isFocused: y,
      input: b
    };
  }
}), Hr = B({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: le,
    default: "$checkboxIndeterminate"
  },
  ...Ei({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), jr = N()({
  name: "VCheckboxBtn",
  props: Hr(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ue(e, "indeterminate"), a = ue(e, "modelValue");
    function i(r) {
      l.value && (l.value = !1);
    }
    const o = h(() => l.value ? e.indeterminateIcon : e.falseIcon), s = h(() => l.value ? e.indeterminateIcon : e.trueIcon);
    return U(() => {
      const r = bt(Zl.filterProps(e), ["modelValue"]);
      return u(Zl, Q(r, {
        modelValue: a.value,
        "onUpdate:modelValue": [(c) => a.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: s.value,
        "aria-checked": l.value ? "mixed" : void 0
      }), t);
    }), {};
  }
});
function Ti(e) {
  const {
    t: n
  } = Kn();
  function t(l) {
    let {
      name: a
    } = l;
    const i = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[a], o = e[`onClick:${a}`], s = o && i ? n(`$vuetify.input.${i}`, e.label ?? "") : void 0;
    return u(ae, {
      icon: e[`${a}Icon`],
      "aria-label": s,
      onClick: o
    }, null);
  }
  return {
    InputIcon: t
  };
}
const Wr = B({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...Y(),
  ...$t({
    transition: {
      component: Pa,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Gr = N()({
  name: "VMessages",
  props: Wr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => Pe(e.messages)), {
      textColorClasses: a,
      textColorStyles: i
    } = je(h(() => e.color));
    return U(() => u(Ue, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", a.value, e.class],
      style: [i.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && l.value.map((o, s) => u("div", {
        class: "v-messages__message",
        key: `${s}-${l.value}`
      }, [t.message ? t.message({
        message: o
      }) : o]))]
    })), {};
  }
}), Li = B({
  focused: Boolean,
  "onUpdate:focused": we()
}, "focus");
function Oi(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  const t = ue(e, "focused"), l = h(() => ({
    [`${n}--focused`]: t.value
  }));
  function a() {
    t.value = !0;
  }
  function i() {
    t.value = !1;
  }
  return {
    focusClasses: l,
    isFocused: t,
    focus: a,
    blur: i
  };
}
const Ur = Symbol.for("vuetify:form");
function $i() {
  return me(Ur, null);
}
const qr = B({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...Li()
}, "validation");
function Kr(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Oe();
  const l = ue(e, "modelValue"), a = h(() => e.validationValue === void 0 ? l.value : e.validationValue), i = $i(), o = j([]), s = W(!0), r = h(() => !!(Pe(l.value === "" ? null : l.value).length || Pe(a.value === "" ? null : a.value).length)), c = h(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), v = h(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), g = h(() => {
    var L;
    return (L = e.errorMessages) != null && L.length ? Pe(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), m = h(() => {
    let L = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || "input";
    L === "lazy" && (L = "input lazy");
    const V = new Set((L == null ? void 0 : L.split(" ")) ?? []);
    return {
      blur: V.has("blur") || V.has("input"),
      input: V.has("input"),
      submit: V.has("submit"),
      lazy: V.has("lazy")
    };
  }), d = h(() => {
    var L;
    return e.error || (L = e.errorMessages) != null && L.length ? !1 : e.rules.length ? s.value ? o.value.length || m.value.lazy ? null : !0 : !o.value.length : !0;
  }), y = W(!1), f = h(() => ({
    [`${n}--error`]: d.value === !1,
    [`${n}--dirty`]: r.value,
    [`${n}--disabled`]: c.value,
    [`${n}--readonly`]: v.value
  })), b = ce("validation"), S = h(() => e.name ?? he(t));
  oa(() => {
    i == null || i.register({
      id: S.value,
      vm: b,
      validate: p,
      reset: _,
      resetValidation: w
    });
  }), Be(() => {
    i == null || i.unregister(S.value);
  }), rt(async () => {
    m.value.lazy || await p(!0), i == null || i.update(S.value, d.value, g.value);
  }), Ke(() => m.value.input, () => {
    q(a, () => {
      if (a.value != null)
        p();
      else if (e.focused) {
        const L = q(() => e.focused, (V) => {
          V || p(), L();
        });
      }
    });
  }), Ke(() => m.value.blur, () => {
    q(() => e.focused, (L) => {
      L || p();
    });
  }), q([d, g], () => {
    i == null || i.update(S.value, d.value, g.value);
  });
  async function _() {
    l.value = null, await ye(), await w();
  }
  async function w() {
    s.value = !0, m.value.lazy ? o.value = [] : await p(!0);
  }
  async function p() {
    let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const V = [];
    y.value = !0;
    for (const C of e.rules) {
      if (V.length >= +(e.maxErrors ?? 1))
        break;
      const H = await (typeof C == "function" ? C : () => C)(a.value);
      if (H !== !0) {
        if (H !== !1 && typeof H != "string") {
          console.warn(`${H} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        V.push(H || "");
      }
    }
    return o.value = V, y.value = !1, s.value = L, o.value;
  }
  return {
    errorMessages: g,
    isDirty: r,
    isDisabled: c,
    isReadonly: v,
    isPristine: s,
    isValid: d,
    isValidating: y,
    reset: _,
    resetValidation: w,
    validate: p,
    validationClasses: f
  };
}
const Fi = B({
  id: String,
  appendIcon: le,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: le,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": we(),
  "onClick:append": we(),
  ...Y(),
  ...$e(),
  ...ao(Ye(), ["maxWidth", "minWidth", "width"]),
  ...de(),
  ...qr()
}, "VInput"), ea = N()({
  name: "VInput",
  props: {
    ...Fi()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: l,
      emit: a
    } = n;
    const {
      densityClasses: i
    } = Ge(e), {
      dimensionStyles: o
    } = Xe(e), {
      themeClasses: s
    } = ge(e), {
      rtlClasses: r
    } = We(), {
      InputIcon: c
    } = Ti(e), v = Oe(), g = h(() => e.id || `input-${v}`), m = h(() => `${g.value}-messages`), {
      errorMessages: d,
      isDirty: y,
      isDisabled: f,
      isReadonly: b,
      isPristine: S,
      isValid: _,
      isValidating: w,
      reset: p,
      resetValidation: L,
      validate: V,
      validationClasses: C
    } = Kr(e, "v-input", g), $ = h(() => ({
      id: g,
      messagesId: m,
      isDirty: y,
      isDisabled: f,
      isReadonly: b,
      isPristine: S,
      isValid: _,
      isValidating: w,
      reset: p,
      resetValidation: L,
      validate: V
    })), H = h(() => {
      var R;
      return (R = e.errorMessages) != null && R.length || !S.value && d.value.length ? d.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return U(() => {
      var T, D, X, ee;
      const R = !!(l.prepend || e.prependIcon), O = !!(l.append || e.appendIcon), x = H.value.length > 0, A = !e.hideDetails || e.hideDetails === "auto" && (x || !!l.details);
      return u("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, s.value, r.value, C.value, e.class],
        style: [o.value, e.style]
      }, [R && u("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(T = l.prepend) == null ? void 0 : T.call(l, $.value), e.prependIcon && u(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), l.default && u("div", {
        class: "v-input__control"
      }, [(D = l.default) == null ? void 0 : D.call(l, $.value)]), O && u("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && u(c, {
        key: "append-icon",
        name: "append"
      }, null), (X = l.append) == null ? void 0 : X.call(l, $.value)]), A && u("div", {
        class: "v-input__details"
      }, [u(Gr, {
        id: m.value,
        active: x,
        messages: H.value
      }, {
        message: l.message
      }), (ee = l.details) == null ? void 0 : ee.call(l, $.value)])]);
    }), {
      reset: p,
      resetValidation: L,
      validate: V,
      isValid: _,
      errorMessages: d
    };
  }
});
function Yr(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: l,
    isHorizontal: a
  } = e;
  const i = Bt(a, t), o = Ri(a, l, t), s = Bt(a, n), r = Mi(a, n), c = s * 0.4;
  return o > r ? r - c : o + i < r + s ? r - i + s + c : o;
}
function Xr(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: l
  } = e;
  const a = Bt(l, t), i = Mi(l, n), o = Bt(l, n);
  return i - a / 2 + o / 2;
}
function ta(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Qr(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Ri(e, n, t) {
  if (!t)
    return 0;
  const {
    scrollLeft: l,
    offsetWidth: a,
    scrollWidth: i
  } = t;
  return e ? n ? i - a + l : l : t.scrollTop;
}
function Bt(e, n) {
  const t = e ? "offsetWidth" : "offsetHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Mi(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const Jr = Symbol.for("vuetify:v-slide-group"), Ni = B({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Jr
  },
  nextIcon: {
    type: le,
    default: "$next"
  },
  prevIcon: {
    type: le,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...Y(),
  ...Ro({
    mobile: null
  }),
  ...oe(),
  ...Zn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), na = N()({
  name: "VSlideGroup",
  props: Ni(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isRtl: l
    } = We(), {
      displayClasses: a,
      mobile: i
    } = Ot(e), o = el(e, e.symbol), s = W(!1), r = W(0), c = W(0), v = W(0), g = h(() => e.direction === "horizontal"), {
      resizeRef: m,
      contentRect: d
    } = mt(), {
      resizeRef: y,
      contentRect: f
    } = mt(), b = _a(), S = h(() => ({
      container: m.el,
      duration: 200,
      easing: "easeOutQuart"
    })), _ = h(() => o.selected.value.length ? o.items.value.findIndex((k) => k.id === o.selected.value[0]) : -1), w = h(() => o.selected.value.length ? o.items.value.findIndex((k) => k.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (ve) {
      let k = -1;
      q(() => [o.selected.value, d.value, f.value, g.value], () => {
        cancelAnimationFrame(k), k = requestAnimationFrame(() => {
          if (d.value && f.value) {
            const E = g.value ? "width" : "height";
            c.value = d.value[E], v.value = f.value[E], s.value = c.value + 1 < v.value;
          }
          if (_.value >= 0 && y.el) {
            const E = y.el.children[w.value];
            L(E, e.centerActive);
          }
        });
      });
    }
    const p = W(!1);
    function L(k, E) {
      let F = 0;
      E ? F = Xr({
        containerElement: m.el,
        isHorizontal: g.value,
        selectedElement: k
      }) : F = Yr({
        containerElement: m.el,
        isHorizontal: g.value,
        isRtl: l.value,
        selectedElement: k
      }), V(F);
    }
    function V(k) {
      if (!ve || !m.el)
        return;
      const E = Bt(g.value, m.el), F = Ri(g.value, l.value, m.el);
      if (!(ta(g.value, m.el) <= E || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(k - F) < 16)) {
        if (g.value && l.value && m.el) {
          const {
            scrollWidth: te,
            offsetWidth: z
          } = m.el;
          k = te - z - k;
        }
        g.value ? b.horizontal(k, S.value) : b(k, S.value);
      }
    }
    function C(k) {
      const {
        scrollTop: E,
        scrollLeft: F
      } = k.target;
      r.value = g.value ? F : E;
    }
    function $(k) {
      if (p.value = !0, !(!s.value || !y.el)) {
        for (const E of k.composedPath())
          for (const F of y.el.children)
            if (F === E) {
              L(F);
              return;
            }
      }
    }
    function H(k) {
      p.value = !1;
    }
    let R = !1;
    function O(k) {
      var E;
      !R && !p.value && !(k.relatedTarget && ((E = y.el) != null && E.contains(k.relatedTarget))) && T(), R = !1;
    }
    function x() {
      R = !0;
    }
    function A(k) {
      if (!y.el)
        return;
      function E(F) {
        k.preventDefault(), T(F);
      }
      g.value ? k.key === "ArrowRight" ? E(l.value ? "prev" : "next") : k.key === "ArrowLeft" && E(l.value ? "next" : "prev") : k.key === "ArrowDown" ? E("next") : k.key === "ArrowUp" && E("prev"), k.key === "Home" ? E("first") : k.key === "End" && E("last");
    }
    function T(k) {
      var F, K;
      if (!y.el)
        return;
      let E;
      if (!k)
        E = pt(y.el)[0];
      else if (k === "next") {
        if (E = (F = y.el.querySelector(":focus")) == null ? void 0 : F.nextElementSibling, !E)
          return T("first");
      } else if (k === "prev") {
        if (E = (K = y.el.querySelector(":focus")) == null ? void 0 : K.previousElementSibling, !E)
          return T("last");
      } else
        k === "first" ? E = y.el.firstElementChild : k === "last" && (E = y.el.lastElementChild);
      E && E.focus({
        preventScroll: !0
      });
    }
    function D(k) {
      const E = g.value && l.value ? -1 : 1, F = (k === "prev" ? -E : E) * c.value;
      let K = r.value + F;
      if (g.value && l.value && m.el) {
        const {
          scrollWidth: te,
          offsetWidth: z
        } = m.el;
        K += te - z;
      }
      V(K);
    }
    const X = h(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), ee = h(() => {
      switch (e.showArrows) {
        case "always":
          return !0;
        case "desktop":
          return !i.value;
        case !0:
          return s.value || Math.abs(r.value) > 0;
        case "mobile":
          return i.value || s.value || Math.abs(r.value) > 0;
        default:
          return !i.value && (s.value || Math.abs(r.value) > 0);
      }
    }), I = h(() => Math.abs(r.value) > 1), P = h(() => {
      if (!m.value)
        return !1;
      const k = ta(g.value, m.el), E = Qr(g.value, m.el);
      return k - E - Math.abs(r.value) > 1;
    });
    return U(() => u(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !g.value,
        "v-slide-group--has-affixes": ee.value,
        "v-slide-group--is-overflowing": s.value
      }, a.value, e.class],
      style: e.style,
      tabindex: p.value || o.selected.value.length ? -1 : 0,
      onFocus: O
    }, {
      default: () => {
        var k, E, F;
        return [ee.value && u("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !I.value
          }],
          onMousedown: x,
          onClick: () => I.value && D("prev")
        }, [((k = t.prev) == null ? void 0 : k.call(t, X.value)) ?? u(Ml, null, {
          default: () => [u(ae, {
            icon: l.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), u("div", {
          key: "container",
          ref: m,
          class: "v-slide-group__container",
          onScroll: C
        }, [u("div", {
          ref: y,
          class: "v-slide-group__content",
          onFocusin: $,
          onFocusout: H,
          onKeydown: A
        }, [(E = t.default) == null ? void 0 : E.call(t, X.value)])]), ee.value && u("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !P.value
          }],
          onMousedown: x,
          onClick: () => P.value && D("next")
        }, [((F = t.next) == null ? void 0 : F.call(t, X.value)) ?? u(Ml, null, {
          default: () => [u(ae, {
            icon: l.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: D,
      scrollOffset: r,
      focus: T
    };
  }
}), Di = Symbol.for("vuetify:v-chip-group"), Zr = B({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: ht
  },
  ...Ni(),
  ...Y(),
  ...Zn({
    selectedClass: "v-chip--selected"
  }),
  ...oe(),
  ...de(),
  ...tt({
    variant: "tonal"
  })
}, "VChipGroup");
N()({
  name: "VChipGroup",
  props: Zr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = ge(e), {
      isSelected: a,
      select: i,
      next: o,
      prev: s,
      selected: r
    } = el(e, Di);
    return ut({
      VChip: {
        color: M(e, "color"),
        disabled: M(e, "disabled"),
        filter: M(e, "filter"),
        variant: M(e, "variant")
      }
    }), U(() => {
      const c = na.filterProps(e);
      return u(na, Q(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, l.value, e.class],
        style: e.style
      }), {
        default: () => {
          var v;
          return [(v = t.default) == null ? void 0 : v.call(t, {
            isSelected: a,
            select: i,
            next: o,
            prev: s,
            selected: r.value
          })];
        }
      });
    }), {};
  }
});
const eu = B({
  activeClass: String,
  appendAvatar: String,
  appendIcon: le,
  closable: Boolean,
  closeIcon: {
    type: le,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: String,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: le,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: we(),
  onClickOnce: we(),
  ...Qe(),
  ...Y(),
  ...$e(),
  ...Ze(),
  ...Ma(),
  ...Ie(),
  ...un(),
  ...Mt(),
  ...oe({
    tag: "span"
  }),
  ...de(),
  ...tt({
    variant: "tonal"
  })
}, "VChip"), On = N()({
  name: "VChip",
  directives: {
    Ripple: Dt
  },
  props: eu(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: l,
      slots: a
    } = n;
    const {
      t: i
    } = Kn(), {
      borderClasses: o
    } = Je(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: c
    } = Rt(e), {
      densityClasses: v
    } = Ge(e), {
      elevationClasses: g
    } = et(e), {
      roundedClasses: m
    } = Ae(e), {
      sizeClasses: d
    } = Nt(e), {
      themeClasses: y
    } = ge(e), f = ue(e, "modelValue"), b = Na(e, Di, !1), S = rn(e, t), _ = h(() => e.link !== !1 && S.isLink.value), w = h(() => !e.disabled && e.link !== !1 && (!!b || e.link || S.isClickable.value)), p = h(() => ({
      "aria-label": i(e.closeLabel),
      onClick(C) {
        C.preventDefault(), C.stopPropagation(), f.value = !1, l("click:close", C);
      }
    }));
    function L(C) {
      var $;
      l("click", C), w.value && (($ = S.navigate) == null || $.call(S, C), b == null || b.toggle());
    }
    function V(C) {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), L(C));
    }
    return () => {
      const C = S.isLink.value ? "a" : e.tag, $ = !!(e.appendIcon || e.appendAvatar), H = !!($ || a.append), R = !!(a.close || e.closable), O = !!(a.filter || e.filter) && b, x = !!(e.prependIcon || e.prependAvatar), A = !!(x || a.prepend), T = !b || b.isSelected.value;
      return f.value && _e(u(C, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": w.value,
          "v-chip--filter": O,
          "v-chip--pill": e.pill
        }, y.value, o.value, T ? s.value : void 0, v.value, g.value, m.value, d.value, c.value, b == null ? void 0 : b.selectedClass.value, e.class],
        style: [T ? r.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: S.href.value,
        tabindex: w.value ? 0 : void 0,
        onClick: L,
        onKeydown: w.value && !_.value && V
      }, {
        default: () => {
          var D;
          return [Ft(w.value, "v-chip"), O && u(Ea, {
            key: "filter"
          }, {
            default: () => [_e(u("div", {
              class: "v-chip__filter"
            }, [a.filter ? u(re, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, a.filter) : u(ae, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[yt, b.isSelected.value]])]
          }), A && u("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [a.prepend ? u(re, {
            key: "prepend-defaults",
            disabled: !x,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, a.prepend) : u(ie, null, [e.prependIcon && u(ae, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && u(ot, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), u("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((D = a.default) == null ? void 0 : D.call(a, {
            isSelected: b == null ? void 0 : b.isSelected.value,
            selectedClass: b == null ? void 0 : b.selectedClass.value,
            select: b == null ? void 0 : b.select,
            toggle: b == null ? void 0 : b.toggle,
            value: b == null ? void 0 : b.value.value,
            disabled: e.disabled
          })) ?? e.text]), H && u("div", {
            key: "append",
            class: "v-chip__append"
          }, [a.append ? u(re, {
            key: "append-defaults",
            disabled: !$,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, a.append) : u(ie, null, [e.appendIcon && u(ae, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(ot, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), R && u("button", Q({
            key: "close",
            class: "v-chip__close",
            type: "button"
          }, p.value), [a.close ? u(re, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, a.close) : u(ae, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[st("ripple"), w.value && e.ripple, null]]);
    };
  }
}), tu = B({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...bt(ol({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Xn
    }
  }), ["absolute"])
}, "VMenu"), nu = N()({
  name: "VMenu",
  props: tu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ue(e, "modelValue"), {
      scopeId: a
    } = il(), i = Oe(), o = h(() => e.id || `v-menu-${i}`), s = j(), r = me(En, null), c = W(0);
    pe(En, {
      register() {
        ++c.value;
      },
      unregister() {
        --c.value;
      },
      closeParents(f) {
        setTimeout(() => {
          !c.value && !e.persistent && (f == null || f && !co(f, s.value.contentEl)) && (l.value = !1, r == null || r.closeParents());
        }, 40);
      }
    });
    async function v(f) {
      var _, w, p;
      const b = f.relatedTarget, S = f.target;
      await ye(), l.value && b !== S && ((_ = s.value) != null && _.contentEl) && // We're the topmost menu
      ((w = s.value) != null && w.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(S) && // It isn't inside the menu body
      !s.value.contentEl.contains(S) && ((p = pt(s.value.contentEl)[0]) == null || p.focus());
    }
    q(l, (f) => {
      f ? (r == null || r.register(), document.addEventListener("focusin", v, {
        once: !0
      })) : (r == null || r.unregister(), document.removeEventListener("focusin", v));
    });
    function g(f) {
      r == null || r.closeParents(f);
    }
    function m(f) {
      var b, S, _;
      if (!e.disabled)
        if (f.key === "Tab" || f.key === "Enter" && !e.closeOnContentClick) {
          if (f.key === "Enter" && f.target instanceof HTMLTextAreaElement)
            return;
          f.key === "Enter" && f.preventDefault(), ga(pt((b = s.value) == null ? void 0 : b.contentEl, !1), f.shiftKey ? "prev" : "next", (p) => p.tabIndex >= 0) || (l.value = !1, (_ = (S = s.value) == null ? void 0 : S.activatorEl) == null || _.focus());
        } else
          ["Enter", " "].includes(f.key) && e.closeOnContentClick && (l.value = !1, r == null || r.closeParents());
    }
    function d(f) {
      var S;
      if (e.disabled)
        return;
      const b = (S = s.value) == null ? void 0 : S.contentEl;
      b && l.value ? f.key === "ArrowDown" ? (f.preventDefault(), Yt(b, "next")) : f.key === "ArrowUp" && (f.preventDefault(), Yt(b, "prev")) : ["ArrowDown", "ArrowUp"].includes(f.key) && (l.value = !0, f.preventDefault(), setTimeout(() => setTimeout(() => d(f))));
    }
    const y = h(() => Q({
      "aria-haspopup": "menu",
      "aria-expanded": String(l.value),
      "aria-owns": o.value,
      onKeydown: d
    }, e.activatorProps));
    return U(() => {
      const f = nn.filterProps(e);
      return u(nn, Q({
        ref: s,
        id: o.value,
        class: ["v-menu", e.class],
        style: e.style
      }, f, {
        modelValue: l.value,
        "onUpdate:modelValue": (b) => l.value = b,
        absolute: !0,
        activatorProps: y.value,
        "onClick:outside": g,
        onKeydown: m
      }, a), {
        activator: t.activator,
        default: function() {
          for (var b = arguments.length, S = new Array(b), _ = 0; _ < b; _++)
            S[_] = arguments[_];
          return u(re, {
            root: "VMenu"
          }, {
            default: () => {
              var w;
              return [(w = t.default) == null ? void 0 : w.call(t, ...S)];
            }
          });
        }
      });
    }), cn({
      id: o,
      ΨopenChildren: c
    }, s);
  }
}), lu = B({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...Y(),
  ...$t({
    transition: {
      component: Pa
    }
  })
}, "VCounter"), au = N()({
  name: "VCounter",
  functional: !0,
  props: lu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return U(() => u(Ue, {
      transition: e.transition
    }, {
      default: () => [_e(u("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [t.default ? t.default({
        counter: l.value,
        max: e.max,
        value: e.value
      }) : l.value]), [[yt, e.active]])]
    })), {};
  }
}), iu = B({
  floating: Boolean,
  ...Y()
}, "VFieldLabel"), jt = N()({
  name: "VFieldLabel",
  props: iu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return U(() => u(Ai, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
}), ou = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], zi = B({
  appendInnerIcon: le,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: le,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: le,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => ou.includes(e)
  },
  "onClick:clear": we(),
  "onClick:appendInner": we(),
  "onClick:prependInner": we(),
  ...Y(),
  ...ll(),
  ...Ie(),
  ...de()
}, "VField"), Hi = N()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Li(),
    ...zi()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: l,
      slots: a
    } = n;
    const {
      themeClasses: i
    } = ge(e), {
      loaderClasses: o
    } = al(e), {
      focusClasses: s,
      isFocused: r,
      focus: c,
      blur: v
    } = Oi(e), {
      InputIcon: g
    } = Ti(e), {
      roundedClasses: m
    } = Ae(e), {
      rtlClasses: d
    } = We(), y = h(() => e.dirty || e.active), f = h(() => !e.singleLine && !!(e.label || a.label)), b = Oe(), S = h(() => e.id || `input-${b}`), _ = h(() => `${S.value}-messages`), w = j(), p = j(), L = j(), V = h(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: C,
      backgroundColorStyles: $
    } = Te(M(e, "bgColor")), {
      textColorClasses: H,
      textColorStyles: R
    } = je(h(() => e.error || e.disabled ? void 0 : y.value && r.value ? e.color : e.baseColor));
    q(y, (T) => {
      if (f.value) {
        const D = w.value.$el, X = p.value.$el;
        requestAnimationFrame(() => {
          const ee = Wn(D), I = X.getBoundingClientRect(), P = I.x - ee.x, k = I.y - ee.y - (ee.height / 2 - I.height / 2), E = I.width / 0.75, F = Math.abs(E - ee.width) > 1 ? {
            maxWidth: G(E)
          } : void 0, K = getComputedStyle(D), te = getComputedStyle(X), z = parseFloat(K.transitionDuration) * 1e3 || 150, ne = parseFloat(te.getPropertyValue("--v-field-label-scale")), se = te.getPropertyValue("color");
          D.style.visibility = "visible", X.style.visibility = "hidden", dt(D, {
            transform: `translate(${P}px, ${k}px) scale(${ne})`,
            color: se,
            ...F
          }, {
            duration: z,
            easing: Jt,
            direction: T ? "normal" : "reverse"
          }).finished.then(() => {
            D.style.removeProperty("visibility"), X.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const O = h(() => ({
      isActive: y,
      isFocused: r,
      controlRef: L,
      blur: v,
      focus: c
    }));
    function x(T) {
      T.target !== document.activeElement && T.preventDefault();
    }
    function A(T) {
      var D;
      T.key !== "Enter" && T.key !== " " || (T.preventDefault(), T.stopPropagation(), (D = e["onClick:clear"]) == null || D.call(e, new MouseEvent("click")));
    }
    return U(() => {
      var P, k, E;
      const T = e.variant === "outlined", D = !!(a["prepend-inner"] || e.prependInnerIcon), X = !!(e.clearable || a.clear), ee = !!(a["append-inner"] || e.appendInnerIcon || X), I = () => a.label ? a.label({
        ...O.value,
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label;
      return u("div", Q({
        class: ["v-field", {
          "v-field--active": y.value,
          "v-field--appended": ee,
          "v-field--center-affix": e.centerAffix ?? !V.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": D,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !I(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, C.value, s.value, o.value, m.value, d.value, e.class],
        style: [$.value, e.style],
        onClick: x
      }, t), [u("div", {
        class: "v-field__overlay"
      }, null), u(ja, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: a.loader
      }), D && u("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && u(g, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (P = a["prepend-inner"]) == null ? void 0 : P.call(a, O.value)]), u("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && f.value && u(jt, {
        key: "floating-label",
        ref: p,
        class: [H.value],
        floating: !0,
        for: S.value,
        style: R.value
      }, {
        default: () => [I()]
      }), u(jt, {
        ref: w,
        for: S.value
      }, {
        default: () => [I()]
      }), (k = a.default) == null ? void 0 : k.call(a, {
        ...O.value,
        props: {
          id: S.value,
          class: "v-field__input",
          "aria-describedby": _.value
        },
        focus: c,
        blur: v
      })]), X && u(Ea, {
        key: "clear"
      }, {
        default: () => [_e(u("div", {
          class: "v-field__clearable",
          onMousedown: (F) => {
            F.preventDefault(), F.stopPropagation();
          }
        }, [u(re, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [a.clear ? a.clear({
            ...O.value,
            props: {
              onKeydown: A,
              onFocus: c,
              onBlur: v,
              onClick: e["onClick:clear"]
            }
          }) : u(g, {
            name: "clear",
            onKeydown: A,
            onFocus: c,
            onBlur: v
          }, null)]
        })]), [[yt, e.dirty]])]
      }), ee && u("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(E = a["append-inner"]) == null ? void 0 : E.call(a, O.value), e.appendInnerIcon && u(g, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), u("div", {
        class: ["v-field__outline", H.value],
        style: R.value
      }, [T && u(ie, null, [u("div", {
        class: "v-field__outline__start"
      }, null), f.value && u("div", {
        class: "v-field__outline__notch"
      }, [u(jt, {
        ref: p,
        floating: !0,
        for: S.value
      }, {
        default: () => [I()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), V.value && f.value && u(jt, {
        ref: p,
        floating: !0,
        for: S.value
      }, {
        default: () => [I()]
      })])]);
    }), {
      controlRef: L
    };
  }
});
function su(e) {
  const n = Object.keys(Hi.props).filter((t) => !Hn(t) && t !== "class" && t !== "style");
  return ca(e, n);
}
const ru = ["color", "file", "time", "date", "datetime-local", "week", "month"], ji = B({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...Fi(),
  ...zi()
}, "VTextField"), la = N()({
  name: "VTextField",
  directives: {
    Intersect: Oa
  },
  inheritAttrs: !1,
  props: ji(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: l,
      slots: a
    } = n;
    const i = ue(e, "modelValue"), {
      isFocused: o,
      focus: s,
      blur: r
    } = Oi(e), c = h(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), v = h(() => {
      if (t.maxlength)
        return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), g = h(() => ["plain", "underlined"].includes(e.variant));
    function m(V, C) {
      var $, H;
      !e.autofocus || !V || (H = ($ = C[0].target) == null ? void 0 : $.focus) == null || H.call($);
    }
    const d = j(), y = j(), f = j(), b = h(() => ru.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function S() {
      var V;
      f.value !== document.activeElement && ((V = f.value) == null || V.focus()), o.value || s();
    }
    function _(V) {
      l("mousedown:control", V), V.target !== f.value && (S(), V.preventDefault());
    }
    function w(V) {
      S(), l("click:control", V);
    }
    function p(V) {
      V.stopPropagation(), S(), ye(() => {
        i.value = null, ro(e["onClick:clear"], V);
      });
    }
    function L(V) {
      var $;
      const C = V.target;
      if (i.value = C.value, ($ = e.modelModifiers) != null && $.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const H = [C.selectionStart, C.selectionEnd];
        ye(() => {
          C.selectionStart = H[0], C.selectionEnd = H[1];
        });
      }
    }
    return U(() => {
      const V = !!(a.counter || e.counter !== !1 && e.counter != null), C = !!(V || a.details), [$, H] = fa(t), {
        modelValue: R,
        ...O
      } = ea.filterProps(e), x = su(e);
      return u(ea, Q({
        ref: d,
        modelValue: i.value,
        "onUpdate:modelValue": (A) => i.value = A,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": g.value
        }, e.class],
        style: e.style
      }, $, O, {
        centerAffix: !g.value,
        focused: o.value
      }), {
        ...a,
        default: (A) => {
          let {
            id: T,
            isDisabled: D,
            isDirty: X,
            isReadonly: ee,
            isValid: I
          } = A;
          return u(Hi, Q({
            ref: y,
            onMousedown: _,
            onClick: w,
            "onClick:clear": p,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, x, {
            id: T.value,
            active: b.value || X.value,
            dirty: X.value || e.dirty,
            disabled: D.value,
            focused: o.value,
            error: I.value === !1
          }), {
            ...a,
            default: (P) => {
              let {
                props: {
                  class: k,
                  ...E
                }
              } = P;
              const F = _e(u("input", Q({
                ref: f,
                value: i.value,
                onInput: L,
                autofocus: e.autofocus,
                readonly: ee.value,
                disabled: D.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: S,
                onBlur: r
              }, E, H), null), [[st("intersect"), {
                handler: m
              }, null, {
                once: !0
              }]]);
              return u(ie, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [u("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), a.default ? u("div", {
                class: k,
                "data-no-activator": ""
              }, [a.default(), F]) : no(F, {
                class: k
              }), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [u("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: C ? (A) => {
          var T;
          return u(ie, null, [(T = a.details) == null ? void 0 : T.call(a, A), V && u(ie, null, [u("span", null, null), u(au, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: v.value,
            disabled: e.disabled
          }, a.counter)])]);
        } : void 0
      });
    }), cn({}, d, y, f);
  }
}), uu = B({
  renderless: Boolean,
  ...Y()
}, "VVirtualScrollItem"), cu = N()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: uu(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: l,
      slots: a
    } = n;
    const {
      resizeRef: i,
      contentRect: o
    } = mt(void 0, "border");
    q(() => {
      var s;
      return (s = o.value) == null ? void 0 : s.height;
    }, (s) => {
      s != null && l("update:height", s);
    }), U(() => {
      var s, r;
      return e.renderless ? u(ie, null, [(s = a.default) == null ? void 0 : s.call(a, {
        itemRef: i
      })]) : u("div", Q({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, t), [(r = a.default) == null ? void 0 : r.call(a)]);
    });
  }
}), du = -1, fu = 1, kn = 100, vu = B({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function mu(e, n) {
  const t = Ot(), l = W(0);
  He(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = W(0), i = W(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (l.value || 16)
  ) || 1), o = W(0), s = W(0), r = j(), c = j();
  let v = 0;
  const {
    resizeRef: g,
    contentRect: m
  } = mt();
  He(() => {
    g.value = r.value;
  });
  const d = h(() => {
    var P;
    return r.value === document.documentElement ? t.height.value : ((P = m.value) == null ? void 0 : P.height) || parseInt(e.height) || 0;
  }), y = h(() => !!(r.value && c.value && d.value && l.value));
  let f = Array.from({
    length: n.value.length
  }), b = Array.from({
    length: n.value.length
  });
  const S = W(0);
  let _ = -1;
  function w(P) {
    return f[P] || l.value;
  }
  const p = oo(() => {
    const P = performance.now();
    b[0] = 0;
    const k = n.value.length;
    for (let E = 1; E <= k - 1; E++)
      b[E] = (b[E - 1] || 0) + w(E - 1);
    S.value = Math.max(S.value, performance.now() - P);
  }, S), L = q(y, (P) => {
    P && (L(), v = c.value.offsetTop, p.immediate(), D(), ~_ && ye(() => {
      ve && window.requestAnimationFrame(() => {
        ee(_), _ = -1;
      });
    }));
  });
  be(() => {
    p.clear();
  });
  function V(P, k) {
    const E = f[P], F = l.value;
    l.value = F ? Math.min(l.value, k) : k, (E !== k || F !== l.value) && (f[P] = k, p());
  }
  function C(P) {
    return P = ze(P, 0, n.value.length - 1), b[P] || 0;
  }
  function $(P) {
    return gu(b, P);
  }
  let H = 0, R = 0, O = 0;
  q(d, (P, k) => {
    k && (D(), P < k && requestAnimationFrame(() => {
      R = 0, D();
    }));
  });
  function x() {
    if (!r.value || !c.value)
      return;
    const P = r.value.scrollTop, k = performance.now();
    k - O > 500 ? (R = Math.sign(P - H), v = c.value.offsetTop) : R = P - H, H = P, O = k, D();
  }
  function A() {
    !r.value || !c.value || (R = 0, O = 0, D());
  }
  let T = -1;
  function D() {
    cancelAnimationFrame(T), T = requestAnimationFrame(X);
  }
  function X() {
    if (!r.value || !d.value)
      return;
    const P = H - v, k = Math.sign(R), E = Math.max(0, P - kn), F = ze($(E), 0, n.value.length), K = P + d.value + kn, te = ze($(K) + 1, F + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (k !== du || F < a.value) && (k !== fu || te > i.value)
    ) {
      const z = C(a.value) - C(F), ne = C(te) - C(i.value);
      Math.max(z, ne) > kn ? (a.value = F, i.value = te) : (F <= 0 && (a.value = F), te >= n.value.length && (i.value = te));
    }
    o.value = C(a.value), s.value = C(n.value.length) - C(i.value);
  }
  function ee(P) {
    const k = C(P);
    !r.value || P && !k ? _ = P : r.value.scrollTop = k;
  }
  const I = h(() => n.value.slice(a.value, i.value).map((P, k) => ({
    raw: P,
    index: k + a.value
  })));
  return q(n, () => {
    f = Array.from({
      length: n.value.length
    }), b = Array.from({
      length: n.value.length
    }), p.immediate(), D();
  }, {
    deep: !0
  }), {
    containerRef: r,
    markerRef: c,
    computedItems: I,
    paddingTop: o,
    paddingBottom: s,
    scrollToIndex: ee,
    handleScroll: x,
    handleScrollend: A,
    handleItemResize: V
  };
}
function gu(e, n) {
  let t = e.length - 1, l = 0, a = 0, i = null, o = -1;
  if (e[t] < n)
    return t;
  for (; l <= t; )
    if (a = l + t >> 1, i = e[a], i > n)
      t = a - 1;
    else if (i < n)
      o = a, l = a + 1;
    else
      return i === n ? a : l;
  return o;
}
const yu = B({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...vu(),
  ...Y(),
  ...Ye()
}, "VVirtualScroll"), hu = N()({
  name: "VVirtualScroll",
  props: yu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ce("VVirtualScroll"), {
      dimensionStyles: a
    } = Xe(e), {
      containerRef: i,
      markerRef: o,
      handleScroll: s,
      handleScrollend: r,
      handleItemResize: c,
      scrollToIndex: v,
      paddingTop: g,
      paddingBottom: m,
      computedItems: d
    } = mu(e, M(e, "items"));
    return Ke(() => e.renderless, () => {
      function y() {
        var S, _;
        const b = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        i.value === document.documentElement ? (document[b]("scroll", s, {
          passive: !0
        }), document[b]("scrollend", r)) : ((S = i.value) == null || S[b]("scroll", s, {
          passive: !0
        }), (_ = i.value) == null || _[b]("scrollend", r));
      }
      rt(() => {
        i.value = wa(l.vnode.el, !0), y(!0);
      }), be(y);
    }), U(() => {
      const y = d.value.map((f) => u(cu, {
        key: f.index,
        renderless: e.renderless,
        "onUpdate:height": (b) => c(f.index, b)
      }, {
        default: (b) => {
          var S;
          return (S = t.default) == null ? void 0 : S.call(t, {
            item: f.raw,
            index: f.index,
            ...b
          });
        }
      }));
      return e.renderless ? u(ie, null, [u("div", {
        ref: o,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: G(g.value)
        }
      }, null), y, u("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: G(m.value)
        }
      }, null)]) : u("div", {
        ref: i,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: s,
        onScrollend: r,
        style: [a.value, e.style]
      }, [u("div", {
        ref: o,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: G(g.value),
          paddingBottom: G(m.value)
        }
      }, [y])]);
    }), {
      scrollToIndex: v
    };
  }
});
function bu(e, n) {
  const t = W(!1);
  let l;
  function a(s) {
    cancelAnimationFrame(l), t.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((s) => requestAnimationFrame(s)), await new Promise((s) => requestAnimationFrame(s)), await new Promise((s) => requestAnimationFrame(s)), await new Promise((s) => {
      if (t.value) {
        const r = q(t, () => {
          r(), s();
        });
      } else
        s();
    });
  }
  async function o(s) {
    var v, g;
    if (s.key === "Tab" && ((v = n.value) == null || v.focus()), !["PageDown", "PageUp", "Home", "End"].includes(s.key))
      return;
    const r = (g = e.value) == null ? void 0 : g.$el;
    if (!r)
      return;
    (s.key === "Home" || s.key === "End") && r.scrollTo({
      top: s.key === "Home" ? 0 : r.scrollHeight,
      behavior: "smooth"
    }), await i();
    const c = r.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (s.key === "PageDown" || s.key === "Home") {
      const m = r.getBoundingClientRect().top;
      for (const d of c)
        if (d.getBoundingClientRect().top >= m) {
          d.focus();
          break;
        }
    } else {
      const m = r.getBoundingClientRect().bottom;
      for (const d of [...c].reverse())
        if (d.getBoundingClientRect().bottom <= m) {
          d.focus();
          break;
        }
    }
  }
  return {
    onListScroll: a,
    onListKeydown: o
  };
}
const Su = B({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: le,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  ...pi({
    itemChildren: !1
  })
}, "Select"), Cu = B({
  ...Su(),
  ...bt(ji({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...$t({
    transition: {
      component: Xn
    }
  })
}, "VSelect"), ku = N()({
  name: "VSelect",
  props: Cu(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: l
    } = Kn(), a = j(), i = j(), o = j(), s = ue(e, "menu"), r = h({
      get: () => s.value,
      set: (I) => {
        var P;
        s.value && !I && ((P = i.value) != null && P.ΨopenChildren) || (s.value = I);
      }
    }), {
      items: c,
      transformIn: v,
      transformOut: g
    } = Lr(e), m = ue(e, "modelValue", [], (I) => v(I === null ? [null] : Pe(I)), (I) => {
      const P = g(I);
      return e.multiple ? P : P[0] ?? null;
    }), d = h(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), y = $i(), f = h(() => m.value.map((I) => I.value)), b = W(!1), S = h(() => r.value ? e.closeText : e.openText);
    let _ = "", w;
    const p = h(() => e.hideSelected ? c.value.filter((I) => !m.value.some((P) => e.valueComparator(P, I))) : c.value), L = h(() => e.hideNoData && !p.value.length || e.readonly || (y == null ? void 0 : y.isReadonly.value)), V = h(() => {
      var I;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((I = e.menuProps) == null ? void 0 : I.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), C = j(), {
      onListScroll: $,
      onListKeydown: H
    } = bu(C, a);
    function R(I) {
      e.openOnClear && (r.value = !0);
    }
    function O() {
      L.value || (r.value = !r.value);
    }
    function x(I) {
      var K, te;
      if (!I.key || e.readonly || y != null && y.isReadonly.value)
        return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(I.key) && I.preventDefault(), ["Enter", "ArrowDown", " "].includes(I.key) && (r.value = !0), ["Escape", "Tab"].includes(I.key) && (r.value = !1), I.key === "Home" ? (K = C.value) == null || K.focus("first") : I.key === "End" && ((te = C.value) == null || te.focus("last"));
      const P = 1e3;
      function k(z) {
        const ne = z.key.length === 1, se = !z.ctrlKey && !z.metaKey && !z.altKey;
        return ne && se;
      }
      if (e.multiple || !k(I))
        return;
      const E = performance.now();
      E - w > P && (_ = ""), _ += I.key.toLowerCase(), w = E;
      const F = c.value.find((z) => z.title.toLowerCase().startsWith(_));
      if (F !== void 0) {
        m.value = [F];
        const z = p.value.indexOf(F);
        ve && window.requestAnimationFrame(() => {
          var ne;
          z >= 0 && ((ne = o.value) == null || ne.scrollToIndex(z));
        });
      }
    }
    function A(I) {
      let P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!I.props.disabled)
        if (e.multiple) {
          const k = m.value.findIndex((F) => e.valueComparator(F.value, I.value)), E = P ?? !~k;
          if (~k) {
            const F = E ? [...m.value, I] : [...m.value];
            F.splice(k, 1), m.value = F;
          } else
            E && (m.value = [...m.value, I]);
        } else {
          const k = P !== !1;
          m.value = k ? [I] : [], ye(() => {
            r.value = !1;
          });
        }
    }
    function T(I) {
      var P;
      (P = C.value) != null && P.$el.contains(I.relatedTarget) || (r.value = !1);
    }
    function D() {
      var I;
      b.value && ((I = a.value) == null || I.focus());
    }
    function X(I) {
      b.value = !0;
    }
    function ee(I) {
      if (I == null)
        m.value = [];
      else if (Xt(a.value, ":autofill") || Xt(a.value, ":-webkit-autofill")) {
        const P = c.value.find((k) => k.title === I);
        P && A(P);
      } else
        a.value && (a.value.value = "");
    }
    return q(r, () => {
      if (!e.hideSelected && r.value && m.value.length) {
        const I = p.value.findIndex((P) => m.value.some((k) => e.valueComparator(k.value, P.value)));
        ve && window.requestAnimationFrame(() => {
          var P;
          I >= 0 && ((P = o.value) == null || P.scrollToIndex(I));
        });
      }
    }), q(() => e.items, (I, P) => {
      r.value || b.value && !P.length && I.length && (r.value = !0);
    }), U(() => {
      const I = !!(e.chips || t.chip), P = !!(!e.hideNoData || p.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), k = m.value.length > 0, E = la.filterProps(e), F = k || !b.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return u(la, Q({
        ref: a
      }, E, {
        modelValue: m.value.map((K) => K.props.value).join(", "),
        "onUpdate:modelValue": ee,
        focused: b.value,
        "onUpdate:focused": (K) => b.value = K,
        validationValue: m.externalValue,
        counterValue: d.value,
        dirty: k,
        class: ["v-select", {
          "v-select--active-menu": r.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": m.value.length,
          "v-select--selection-slot": !!t.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: F,
        "onClick:clear": R,
        "onMousedown:control": O,
        onBlur: T,
        onKeydown: x,
        "aria-label": l(S.value),
        title: l(S.value)
      }), {
        ...t,
        default: () => u(ie, null, [u(nu, Q({
          ref: i,
          modelValue: r.value,
          "onUpdate:modelValue": (K) => r.value = K,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: L.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: D
        }, V.value), {
          default: () => [P && u(Mr, Q({
            ref: C,
            selected: f.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (K) => K.preventDefault(),
            onKeydown: H,
            onFocusin: X,
            onScrollPassive: $,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var K, te, z;
              return [(K = t["prepend-item"]) == null ? void 0 : K.call(t), !p.value.length && !e.hideNoData && (((te = t["no-data"]) == null ? void 0 : te.call(t)) ?? u(De, {
                title: l(e.noDataText)
              }, null)), u(hu, {
                ref: o,
                renderless: !0,
                items: p.value
              }, {
                default: (ne) => {
                  var ml;
                  let {
                    item: se,
                    index: fe,
                    itemRef: Se
                  } = ne;
                  const vl = Q(se.props, {
                    ref: Se,
                    key: fe,
                    onClick: () => A(se, null)
                  });
                  return ((ml = t.item) == null ? void 0 : ml.call(t, {
                    item: se,
                    index: fe,
                    props: vl
                  })) ?? u(De, Q(vl, {
                    role: "option"
                  }), {
                    prepend: (Gi) => {
                      let {
                        isSelected: Ui
                      } = Gi;
                      return u(ie, null, [e.multiple && !e.hideSelected ? u(jr, {
                        key: se.value,
                        modelValue: Ui,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, se.props.prependAvatar && u(ot, {
                        image: se.props.prependAvatar
                      }, null), se.props.prependIcon && u(ae, {
                        icon: se.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (z = t["append-item"]) == null ? void 0 : z.call(t)];
            }
          })]
        }), m.value.map((K, te) => {
          function z(Se) {
            Se.stopPropagation(), Se.preventDefault(), A(K, !1);
          }
          const ne = {
            "onClick:close": z,
            onKeydown(Se) {
              Se.key !== "Enter" && Se.key !== " " || (Se.preventDefault(), Se.stopPropagation(), z(Se));
            },
            onMousedown(Se) {
              Se.preventDefault(), Se.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, se = I ? !!t.chip : !!t.selection, fe = se ? ya(I ? t.chip({
            item: K,
            index: te,
            props: ne
          }) : t.selection({
            item: K,
            index: te
          })) : void 0;
          if (!(se && !fe))
            return u("div", {
              key: K.value,
              class: "v-select__selection"
            }, [I ? t.chip ? u(re, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: K.title
                }
              }
            }, {
              default: () => [fe]
            }) : u(On, Q({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: K.title,
              disabled: K.props.disabled
            }, ne), null) : fe ?? u("span", {
              class: "v-select__selection-text"
            }, [K.title, e.multiple && te < m.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [Fe(",")])])]);
        })]),
        "append-inner": function() {
          var ne;
          for (var K = arguments.length, te = new Array(K), z = 0; z < K; z++)
            te[z] = arguments[z];
          return u(ie, null, [(ne = t["append-inner"]) == null ? void 0 : ne.call(t, ...te), e.menuIcon ? u(ae, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), cn({
      isFocused: b,
      menu: r,
      select: A
    }, a);
  }
}), dl = (e) => (Mn("data-v-6b3114c5"), e = e(), Nn(), e), wu = ["href"], xu = /* @__PURE__ */ dl(() => /* @__PURE__ */ Z("img", {
  src: "https://firebasestorage.googleapis.com/v0/b/ccaf-afea-test.appspot.com/o/logo.webp?alt=media&token=f4da887e-96cf-4325-b67b-5afd938250bf",
  width: "179",
  height: "52",
  alt: "Cambridge Centre for Alternative Finance (CCAF.io)"
}, null, -1)), _u = [
  xu
], pu = {
  class: "ma-0 ml-8 d-none d-sm-flex header__title",
  style: { "font-family": "MyriadPro" }
}, Vu = { class: "project-selector" }, Iu = /* @__PURE__ */ dl(() => /* @__PURE__ */ Z("strong", { style: { "font-size": "14px", "font-weight": "600" } }, "CBNSI", -1)), Au = /* @__PURE__ */ dl(() => /* @__PURE__ */ Z("div", { class: "hidden-lg-and-up" }, null, -1)), Pu = /* @__PURE__ */ Tt({
  __name: "LayoutHeader",
  props: {
    env: {
      type: String,
      default: ""
    },
    topic: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  emits: {},
  setup(e) {
    const { mdAndUp: n } = Ot(), t = e, l = j(!1), a = j([
      {
        title: "Alternative Finance Benchmarks",
        id: "cafb",
        tag: "CAFB",
        link: "cafb"
      },
      {
        title: "Blockchain Network Sustainability Index",
        id: "cbnsi",
        tag: "CBNSI",
        link: "cbnsi"
      },
      {
        title: "Digital Money Dashboard",
        id: "dmd",
        tag: "DMD",
        link: "cdmd"
      },
      {
        title: "Fintech Ecosystem Atlas",
        id: "atlas",
        tag: "Atlas",
        link: "atlas"
      },
      {
        title: "Global Regulatory Innovation Dashboard",
        id: "grid",
        tag: "GRID",
        link: "grid"
      },
      {
        title: "SupTech Vendor Database",
        id: "svd",
        link: "suptechlab/vendor_database",
        tag: ""
      },
      {
        title: "SupTech Solutions Tracker",
        id: "ssr",
        link: "suptechlab/solutions_tracker",
        tag: ""
      }
    ]), i = j(a.value[1]), o = (s) => {
      const r = a.value.find(
        (c) => {
          if (typeof s == "string")
            return c.title === s;
        }
      );
      r && (window.location.href = `https://${t.env}ccaf.io/${r.link}`);
    };
    return (s, r) => (Ce(), vt(is, {
      id: "header",
      class: "header noselect",
      color: "#FFB71A",
      height: "72",
      "clipped-right": "",
      "clipped-left": "",
      flat: "",
      app: ""
    }, {
      default: J(() => [
        u(_t, {
          align: "center",
          justify: "start",
          class: "header__logo"
        }, {
          default: J(() => [
            Z("a", {
              title: "CCAF.io",
              href: `https://${e.env}ccaf.io/`
            }, _u, 8, wu),
            Z("h4", pu, Ee(e.title), 1),
            u(yi),
            Z("div", Vu, [
              he(n) ? (Ce(), vt(ku, {
                key: 0,
                variant: "solo",
                class: "project-selector__select",
                "model-value": i.value,
                items: a.value,
                "menu-props": {
                  contentClass: "project-selector__menu"
                },
                "item-value": "title",
                "item-title": "tag",
                "background-color": "rgba(255, 183, 26, 0.32);",
                color: "#333333",
                height: "40",
                "menu-icon": "mdi-chevron-down",
                "hide-details": "",
                flat: "",
                "onUpdate:modelValue": o
              }, {
                selection: J(() => [
                  Iu
                ]),
                item: J(({ item: c, props: v }) => [
                  u(De, Q(v, {
                    title: c.value,
                    subtitle: c.title || void 0
                  }), null, 16, ["title", "subtitle"])
                ]),
                _: 1
              }, 8, ["model-value", "items"])) : Ct("", !0)
            ])
          ]),
          _: 1
        }),
        u(nr, {
          class: "header-overlay",
          scrim: !1,
          "onUpdate:modelValue": r[0] || (r[0] = (c) => l.value = c),
          fullscreen: ""
        }, {
          activator: J(({ props: c }) => [
            u(As, Q(c, { class: "hidden-lg-and-up dialog-button" }), {
              default: J(() => [
                u(ae, { color: "#000" }, {
                  default: J(() => [
                    Fe(Ee(l.value ? "mdi-close" : "mdi-menu"), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1040),
            Au
          ]),
          default: J(({ isActive: c }) => [
            wn(s.$slots, "default", {
              close: () => c.value = !1
            }, void 0, !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), dn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, a] of n)
    t[l] = a;
  return t;
}, dc = /* @__PURE__ */ dn(Pu, [["__scopeId", "data-v-6b3114c5"]]), Bu = B({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Qe(),
  ...Y(),
  ...Ze(),
  ...pa(),
  ...Ie(),
  ...oe({
    tag: "footer"
  }),
  ...de()
}, "VFooter"), Eu = N()({
  name: "VFooter",
  props: Bu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = ge(e), {
      backgroundColorClasses: a,
      backgroundColorStyles: i
    } = Te(M(e, "color")), {
      borderClasses: o
    } = Je(e), {
      elevationClasses: s
    } = et(e), {
      roundedClasses: r
    } = Ae(e), c = W(32), {
      resizeRef: v
    } = mt((y) => {
      y.length && (c.value = y[0].target.clientHeight);
    }), g = h(() => e.height === "auto" ? c.value : parseInt(e.height, 10)), {
      layoutItemStyles: m,
      layoutIsReady: d
    } = Va({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: h(() => "bottom"),
      layoutSize: g,
      elementSize: h(() => e.height === "auto" ? void 0 : g.value),
      active: h(() => e.app),
      absolute: M(e, "absolute")
    });
    return U(() => u(e.tag, {
      ref: v,
      class: ["v-footer", l.value, a.value, o.value, s.value, r.value, e.class],
      style: [i.value, e.app ? m.value : {
        height: G(e.height)
      }, e.style]
    }, t)), e.app ? d : {};
  }
}), fl = (e) => (Mn("data-v-1218adb2"), e = e(), Nn(), e), Tu = ["href"], Lu = ["href"], Ou = ["href"], $u = { class: "ml-7" }, Fu = ["href"], Ru = ["href"], Mu = {
  key: 2,
  class: "link-icon",
  href: "facebookLink",
  target: "_blank"
}, Nu = /* @__PURE__ */ fl(() => /* @__PURE__ */ Z("a", {
  rel: "license",
  href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
  target: "_blank"
}, [
  /* @__PURE__ */ Z("img", {
    alt: "Creative Commons License",
    style: { "border-width": "0" },
    src: "https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg"
  })
], -1)), Du = /* @__PURE__ */ fl(() => /* @__PURE__ */ Z("br", null, null, -1)), zu = /* @__PURE__ */ fl(() => /* @__PURE__ */ Z("p", { style: { "font-size": "12px", "max-width": "280px" } }, [
  /* @__PURE__ */ Fe(" This work is licensed under a "),
  /* @__PURE__ */ Z("a", {
    rel: "license",
    href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
    target: "_blank",
    style: { color: "#262b4a" }
  }, " Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ")
], -1)), Hu = {
  class: "mb-2",
  style: { "font-size": "16px", height: "20px" }
}, ju = ["href"], Wu = ["src", "width", "height", "alt"], Gu = ["href"], Uu = /* @__PURE__ */ Tt({
  __name: "LayoutFooter",
  props: {
    webLink: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    },
    location: {
      type: String,
      default: ""
    },
    locationLink: {
      type: String,
      default: ""
    },
    supportedBy: {
      type: Array
    },
    env: {
      type: String,
      default: ""
    },
    linkedinLink: {
      type: String,
      default: ""
    },
    twitterLink: {
      type: String,
      default: ""
    },
    facebookLink: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const n = _a(), { smAndDown: t } = Ot(), l = j(!1);
    return rt(() => {
      typeof window < "u" && (window.onscroll = () => {
        l.value = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
        const i = document.getElementById("sidebar"), o = document.getElementById("sidebar__menu"), s = document.getElementById("footer");
        if (o && i && s) {
          const r = window.innerHeight < o.getBoundingClientRect().height + 72 ? window.innerHeight - 72 : o.getBoundingClientRect().height, c = s.getBoundingClientRect().top, v = o.getBoundingClientRect().top, g = document.body.scrollTop;
          let m = Math.max(72, v - g);
          g + r + 72 > c && (m = Math.min(
            m,
            c - g - r
          )), i.style.top = m + "px";
        }
      });
    }), (a, i) => (Ce(), vt(Eu, {
      id: "footer",
      color: "white",
      width: "100vw",
      class: "footer pa-0"
    }, {
      default: J(() => [
        l.value ? (Ce(), nt("div", {
          key: 0,
          class: "goup",
          onClick: i[0] || (i[0] = (o) => he(n)(0, {
            duration: 300,
            offset: 0,
            easing: "easeInOutCubic"
          }))
        }, [
          u(ae, {
            size: "16",
            color: "#0e1436",
            class: "mr-2",
            icon: "mdi-arrow-up"
          })
        ])) : Ct("", !0),
        u(ii, { fluid: "" }, {
          default: J(() => [
            u(_t, {
              class: "footer__pre-footer",
              align: "start",
              justify: "start",
              "no-gutters": ""
            }, {
              default: J(() => [
                u(Re, {
                  cols: "auto",
                  class: "mb-4 pa-4"
                }, {
                  default: J(() => [
                    Z("a", {
                      class: "footer__link mb-2 link-icon",
                      href: e.webLink,
                      target: "_blank"
                    }, [
                      u(ae, {
                        size: "16",
                        color: "#0e1436",
                        class: "mr-2",
                        icon: "mdi-web"
                      }),
                      Z("p", null, Ee(e.webLink), 1)
                    ], 8, Tu),
                    Z("a", {
                      class: "footer__link mb-2 link-icon",
                      href: `mailto:${e.email}`
                    }, [
                      u(ae, {
                        size: "16",
                        color: "#0e1436",
                        class: "mr-2",
                        icon: "mdi-email"
                      }),
                      Z("p", null, Ee(e.email), 1)
                    ], 8, Lu),
                    Z("a", {
                      href: e.locationLink,
                      class: "footer__link footer__link--location mb-2 link-icon"
                    }, [
                      u(ae, {
                        size: "16",
                        color: "#0e1436",
                        class: "mr-2",
                        icon: "mdi-map-marker"
                      }),
                      Z("p", null, Ee(e.location), 1)
                    ], 8, Ou),
                    Z("div", $u, [
                      u(_t, null, {
                        default: J(() => [
                          u(Re, null, {
                            default: J(() => [
                              e.linkedinLink ? (Ce(), nt("a", {
                                key: 0,
                                class: "link-icon",
                                href: e.linkedinLink,
                                target: "_blank"
                              }, [
                                u(ae, {
                                  size: "24",
                                  color: "#0e1436",
                                  class: "mr-2",
                                  icon: "mdi-linkedin"
                                })
                              ], 8, Fu)) : Ct("", !0),
                              e.twitterLink ? (Ce(), nt("a", {
                                key: 1,
                                class: "link-icon",
                                href: e.twitterLink,
                                target: "_blank"
                              }, [
                                u(ae, {
                                  size: "24",
                                  color: "#0e1436",
                                  class: "mr-2",
                                  icon: "mdi-twitter"
                                })
                              ], 8, Ru)) : Ct("", !0),
                              e.facebookLink ? (Ce(), nt("a", Mu, [
                                u(ae, {
                                  size: "24",
                                  color: "#0e1436",
                                  class: "mr-2",
                                  icon: "mdi-facebook"
                                })
                              ])) : Ct("", !0)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                u(Re, {
                  cols: "auto",
                  class: "mb-4 pa-4"
                }, {
                  default: J(() => [
                    Nu,
                    Du,
                    zu
                  ]),
                  _: 1
                }),
                u(yi, { class: "hidden-sm-and-down" }),
                (Ce(!0), nt(ie, null, sa(e.supportedBy, (o) => (Ce(), vt(Re, {
                  key: o.id,
                  cols: "auto",
                  class: "pa-4"
                }, {
                  default: J(() => [
                    Z("div", Hu, [
                      Z("strong", null, Ee(o.description), 1)
                    ]),
                    Z("a", {
                      href: o.link,
                      target: "_blank"
                    }, [
                      Z("img", {
                        src: o.image,
                        width: o.imageWidth,
                        height: o.imageHeight,
                        alt: o.imageAlt
                      }, null, 8, Wu)
                    ], 8, ju)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }),
            u(_t, {
              class: "footer__main-footer",
              align: "center",
              justify: he(t) ? "center" : "space-between",
              "no-gutters": ""
            }, {
              default: J(() => [
                u(Re, {
                  class: Dn({ "footer-privacy": he(t) }),
                  cols: "auto"
                }, {
                  default: J(() => [
                    Z("a", {
                      href: `https://${e.env}ccaf.io/privacy_policy`
                    }, " Privacy Policy ", 8, Gu)
                  ]),
                  _: 1
                }, 8, ["class"]),
                u(Re, { cols: "auto" }, {
                  default: J(() => [
                    Z("span", null, "Cambridge Centre for Alternative Finance © " + Ee(" " + (/* @__PURE__ */ new Date()).getFullYear()), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["justify"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), fc = /* @__PURE__ */ dn(Uu, [["__scopeId", "data-v-1218adb2"]]), qu = N()({
  name: "VCardActions",
  props: Y(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return ut({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), U(() => {
      var l;
      return u("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    }), {};
  }
}), Ku = B({
  opacity: [Number, String],
  ...Y(),
  ...oe()
}, "VCardSubtitle"), Yu = N()({
  name: "VCardSubtitle",
  props: Ku(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return U(() => u(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), Xu = Un("v-card-title"), Qu = B({
  appendAvatar: String,
  appendIcon: le,
  prependAvatar: String,
  prependIcon: le,
  subtitle: [String, Number],
  title: [String, Number],
  ...Y(),
  ...$e()
}, "VCardItem"), Ju = N()({
  name: "VCardItem",
  props: Qu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return U(() => {
      var c;
      const l = !!(e.prependAvatar || e.prependIcon), a = !!(l || t.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || t.append), s = !!(e.title != null || t.title), r = !!(e.subtitle != null || t.subtitle);
      return u("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [a && u("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [t.prepend ? u(re, {
        key: "prepend-defaults",
        disabled: !l,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, t.prepend) : u(ie, null, [e.prependAvatar && u(ot, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && u(ae, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), u("div", {
        class: "v-card-item__content"
      }, [s && u(Xu, {
        key: "title"
      }, {
        default: () => {
          var v;
          return [((v = t.title) == null ? void 0 : v.call(t)) ?? e.title];
        }
      }), r && u(Yu, {
        key: "subtitle"
      }, {
        default: () => {
          var v;
          return [((v = t.subtitle) == null ? void 0 : v.call(t)) ?? e.subtitle];
        }
      }), (c = t.default) == null ? void 0 : c.call(t)]), o && u("div", {
        key: "append",
        class: "v-card-item__append"
      }, [t.append ? u(re, {
        key: "append-defaults",
        disabled: !i,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, t.append) : u(ie, null, [e.appendIcon && u(ae, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && u(ot, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Zu = B({
  opacity: [Number, String],
  ...Y(),
  ...oe()
}, "VCardText"), ec = N()({
  name: "VCardText",
  props: Zu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return U(() => u(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), tc = B({
  appendAvatar: String,
  appendIcon: le,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: le,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...Qe(),
  ...Y(),
  ...$e(),
  ...Ye(),
  ...Ze(),
  ...ll(),
  ...tl(),
  ...Wa(),
  ...Ie(),
  ...un(),
  ...oe(),
  ...de(),
  ...tt({
    variant: "elevated"
  })
}, "VCard"), nc = N()({
  name: "VCard",
  directives: {
    Ripple: Dt
  },
  props: tc(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const {
      themeClasses: a
    } = ge(e), {
      borderClasses: i
    } = Je(e), {
      colorClasses: o,
      colorStyles: s,
      variantClasses: r
    } = Rt(e), {
      densityClasses: c
    } = Ge(e), {
      dimensionStyles: v
    } = Xe(e), {
      elevationClasses: g
    } = et(e), {
      loaderClasses: m
    } = al(e), {
      locationStyles: d
    } = nl(e), {
      positionClasses: y
    } = Ga(e), {
      roundedClasses: f
    } = Ae(e), b = rn(e, t), S = h(() => e.link !== !1 && b.isLink.value), _ = h(() => !e.disabled && e.link !== !1 && (e.link || b.isClickable.value));
    return U(() => {
      const w = S.value ? "a" : e.tag, p = !!(l.title || e.title != null), L = !!(l.subtitle || e.subtitle != null), V = p || L, C = !!(l.append || e.appendAvatar || e.appendIcon), $ = !!(l.prepend || e.prependAvatar || e.prependIcon), H = !!(l.image || e.image), R = V || $ || C, O = !!(l.text || e.text != null);
      return _e(u(w, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": _.value
        }, a.value, i.value, o.value, c.value, g.value, m.value, y.value, f.value, r.value, e.class],
        style: [s.value, v.value, d.value, e.style],
        href: b.href.value,
        onClick: _.value && b.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var x;
          return [H && u("div", {
            key: "image",
            class: "v-card__image"
          }, [l.image ? u(re, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, l.image) : u(Jn, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(ja, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: l.loader
          }), R && u(Ju, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: l.item,
            prepend: l.prepend,
            title: l.title,
            subtitle: l.subtitle,
            append: l.append
          }), O && u(ec, {
            key: "text"
          }, {
            default: () => {
              var A;
              return [((A = l.text) == null ? void 0 : A.call(l)) ?? e.text];
            }
          }), (x = l.default) == null ? void 0 : x.call(l), l.actions && u(qu, null, {
            default: l.actions
          }), Ft(_.value, "v-card")];
        }
      }), [[st("ripple"), _.value && e.ripple]]);
    }), {};
  }
}), lc = { class: "pa-4" }, ac = { class: "chips" }, ic = /* @__PURE__ */ Tt({
  __name: "mobile-menu",
  props: {
    dialogModel: {
      type: Boolean,
      required: !0
    },
    env: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    activeProject: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const n = e, t = h(() => {
      const l = [
        {
          title: "Alternative Finance Benchmarks",
          id: "cafb",
          tag: "CAFB",
          link: "cafb"
        },
        {
          title: "Blockchain Network Sustainability Index",
          id: "cbnsi",
          tag: "CBNSI",
          link: "cbnsi"
        },
        {
          title: "Digital Money Dashboard",
          id: "dmd",
          tag: "DMD",
          link: "cdmd"
        },
        {
          title: "Fintech Ecosystem Atlas",
          id: "atlas",
          tag: "Atlas",
          link: "atlas"
        },
        {
          title: "Global Regulatory Innovation Dashboard",
          id: "grid",
          tag: "GRID",
          link: "grid"
        },
        {
          title: "SupTech Vendor Database",
          id: "svd",
          link: "suptechlab/vendor_database",
          tag: ""
        },
        {
          title: "SupTech Solutions Tracker",
          id: "ssr",
          link: "suptechlab/solutions_tracker",
          tag: ""
        }
      ];
      return n.activeProject ? l.filter((a) => a.link === n.activeProject) : l;
    });
    return (l, a) => (Ce(), vt(nc, null, {
      default: J(() => [
        Z("h4", lc, Ee(e.title), 1),
        wn(l.$slots, "switcher", {}, void 0, !0),
        wn(l.$slots, "default", {}, void 0, !0),
        u(De, {
          href: `https://${e.env}ccaf.io/`
        }, {
          default: J(() => [
            u(xt, { class: "list__title" }, {
              default: J(() => [
                Fe(" CCAF Home ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["href"]),
        u(qt),
        u(De, {
          href: `https://${e.env}ccaf.io/about_ccaf`
        }, {
          default: J(() => [
            u(xt, { class: "list__title" }, {
              default: J(() => [
                Fe(" CCAF About ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["href"]),
        u(qt),
        u(De, {
          href: `https://${e.env}ccaf.io/contact?topic=cbeci`
        }, {
          default: J(() => [
            u(xt, { class: "list__title" }, {
              default: J(() => [
                Fe(" CCAF Contact ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["href"]),
        u(qt),
        u(De, null, {
          default: J(() => [
            u(xt, { class: "list__title" }, {
              default: J(() => [
                Fe(" CCAF Digital Tools: ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Z("div", ac, [
          (Ce(!0), nt(ie, null, sa(t.value, (i, o) => (Ce(), vt(On, {
            class: Dn(["chips__item", { "chips__item-active": !o }]),
            key: i.id,
            href: o ? `https://${e.env}ccaf.io/${i.link}` : void 0
          }, {
            default: J(() => [
              Fe(Ee(i.tag || i.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href"]))), 128)),
          u(On, { class: "chips__item" }, {
            default: J(() => [
              Fe(" Atlas ")
            ]),
            _: 1
          })
        ])
      ]),
      _: 3
    }));
  }
}), vc = /* @__PURE__ */ dn(ic, [["__scopeId", "data-v-0cbbe524"]]), Wi = (e) => (Mn("data-v-057ac096"), e = e(), Nn(), e), oc = { class: "app-loader__title" }, sc = /* @__PURE__ */ Wi(() => /* @__PURE__ */ Z("div", { class: "lds-ring" }, [
  /* @__PURE__ */ Z("div"),
  /* @__PURE__ */ Z("div"),
  /* @__PURE__ */ Z("div"),
  /* @__PURE__ */ Z("div")
], -1)), rc = /* @__PURE__ */ Wi(() => /* @__PURE__ */ Z("p", { class: "app-loader__state" }, "LOADING", -1)), uc = /* @__PURE__ */ Tt({
  __name: "loader",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (n, t) => (Ce(), nt("div", {
      class: Dn(["app-loader", { "app-loader--visible": e.visible }])
    }, [
      u(ii, null, {
        default: J(() => [
          u(_t, {
            align: "center",
            justify: "center",
            class: "flex-column"
          }, {
            default: J(() => [
              u(Re, { cols: "12" }, {
                default: J(() => [
                  Z("h1", oc, Ee(e.title), 1)
                ]),
                _: 1
              }),
              u(Re, {
                cols: "12",
                class: "d-flex justify-center"
              }, {
                default: J(() => [
                  sc
                ]),
                _: 1
              }),
              u(Re, { cols: "12" }, {
                default: J(() => [
                  rc
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 2));
  }
}), mc = /* @__PURE__ */ dn(uc, [["__scopeId", "data-v-057ac096"]]);
export {
  fc as LayoutFooter,
  dc as LayoutHeader,
  mc as Loader,
  vc as MobileMenu
};
