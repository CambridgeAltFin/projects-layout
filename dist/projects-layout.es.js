import { ref as j, onMounted as ze, onUnmounted as Hi, computed as y, Fragment as se, reactive as nn, watchEffect as Ne, toRefs as ea, capitalize as Bt, isVNode as ji, Comment as Wi, shallowRef as G, unref as Ce, warn as ln, getCurrentInstance as Gi, provide as _e, inject as me, defineComponent as Tt, camelize as ta, h as mt, createVNode as u, TransitionGroup as $n, Transition as nt, mergeProps as J, isRef as dt, toRef as M, watch as K, onBeforeMount as na, nextTick as ye, onBeforeUnmount as Ee, withDirectives as we, resolveDirective as at, vShow as gt, onScopeDispose as he, effectScope as Fn, toRaw as pe, readonly as Rn, onDeactivated as Ui, onActivated as qi, onUpdated as Ki, Text as Yi, resolveDynamicComponent as Xi, Teleport as Qi, cloneVNode as Ji, createTextVNode as ft, openBlock as Ae, createBlock as wt, withCtx as ae, createElementVNode as W, renderSlot as ut, toDisplayString as Fe, normalizeClass as pt, createCommentVNode as St, pushScopeId as an, popScopeId as on, createElementBlock as st, renderList as Zi } from "vue";
function la() {
  const e = j(0), n = () => {
    e.value = window.innerWidth;
  };
  ze(() => {
    e.value = window.innerWidth, window.addEventListener("resize", n);
  }), Hi(() => {
    window.removeEventListener("resize", n);
  });
  const t = y(() => e.value < 600), l = y(() => e.value >= 600 && e.value < 960), a = y(() => e.value >= 960 && e.value < 1280), i = y(() => e.value >= 1280 && e.value < 1920), o = y(() => e.value >= 1920), s = y(() => t.value || l.value), r = y(() => a.value || i.value || o.value), c = y(() => i.value || o.value);
  return {
    width: e,
    xs: t,
    sm: l,
    md: a,
    lg: i,
    xl: o,
    smAndDown: s,
    mdAndUp: r,
    lgAndUp: c
  };
}
function E(e, n) {
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
const X = E({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), ve = typeof window < "u", Mn = ve && "IntersectionObserver" in window;
function aa(e, n, t) {
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
function yt(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((l) => yt(e[l], n[l]));
}
function eo(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), aa(e, n.split("."), t));
}
function $e(e, n, t) {
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
    return eo(e, n, t);
  if (Array.isArray(n))
    return aa(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return typeof l > "u" ? t : l;
}
function U(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function pn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ia(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const dl = Object.freeze({
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
function vn(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function oa(e, n) {
  const t = {}, l = new Set(Object.keys(e));
  for (const a of n)
    l.has(a) && (t[a] = e[a]);
  return t;
}
function fl(e, n, t) {
  const l = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((o) => o instanceof RegExp ? o.test(i) : o === i) && !(t != null && t.some((o) => o === i)) ? l[i] = e[i] : a[i] = e[i];
  return [l, a];
}
function ht(e, n) {
  const t = {
    ...e
  };
  return n.forEach((l) => delete t[l]), t;
}
function to(e, n) {
  const t = {};
  return n.forEach((l) => t[l] = e[l]), t;
}
const sa = /^on[^a-z]/, Nn = (e) => sa.test(e), no = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function ra(e) {
  const [n, t] = fl(e, [sa]), l = ht(n, no), [a, i] = fl(t, ["class", "style", "id", /^data-/]);
  return Object.assign(a, n), Object.assign(i, l), [a, i];
}
function Pe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function lo(e, n) {
  let t = 0;
  const l = function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    clearTimeout(t), t = setTimeout(() => e(...i), Ce(n));
  };
  return l.clear = () => {
    clearTimeout(t);
  }, l.immediate = e, l;
}
function Me(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function vl(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function ao(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let l = 0;
  for (; l < e.length; )
    t.push(e.substr(l, n)), l += n;
  return t;
}
function Re() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const a in e)
    l[a] = e[a];
  for (const a in n) {
    const i = e[a], o = n[a];
    if (pn(i) && pn(o)) {
      l[a] = Re(i, o, t);
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
function ua(e) {
  return e.map((n) => n.type === se ? ua(n.children) : n).flat();
}
function et() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (et.cache.has(e))
    return et.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return et.cache.set(e, n), n;
}
et.cache = /* @__PURE__ */ new Map();
function Ct(e, n) {
  if (!n || typeof n != "object")
    return [];
  if (Array.isArray(n))
    return n.map((t) => Ct(e, t)).flat(1);
  if (n.suspense)
    return Ct(e, n.ssContent);
  if (Array.isArray(n.children))
    return n.children.map((t) => Ct(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return Ct(e, n.component.subTree).flat(1);
  }
  return [];
}
function Dn(e) {
  const n = nn({}), t = y(e);
  return Ne(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, {
    flush: "sync"
  }), ea(n);
}
function Ut(e, n) {
  return e.includes(n);
}
function ca(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const ke = () => [Function, Array];
function ml(e, n) {
  return n = "on" + Bt(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function io(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  if (Array.isArray(e))
    for (const a of e)
      a(...t);
  else
    typeof e == "function" && e(...t);
}
function _t(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function da(e, n, t) {
  let l, a = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    a += i, l = e[a];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? !0)) && a < e.length && a >= 0);
  return l;
}
function qt(e, n) {
  var l, a, i, o;
  const t = _t(e);
  if (!n)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((l = t[0]) == null || l.focus());
  else if (n === "first")
    (a = t[0]) == null || a.focus();
  else if (n === "last")
    (i = t.at(-1)) == null || i.focus();
  else if (typeof n == "number")
    (o = t[n]) == null || o.focus();
  else {
    const s = da(t, n);
    s ? s.focus() : qt(e, n === "next" ? "first" : "last");
  }
}
function Kt(e, n) {
  if (!(ve && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`)))
    return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function fa(e) {
  return e.some((n) => ji(n) ? n.type === Wi ? !1 : n.type !== se || fa(n.children) : !0) ? e : null;
}
function oo(e, n) {
  if (!ve || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function so(e, n) {
  const t = e.clientX, l = e.clientY, a = n.getBoundingClientRect(), i = a.left, o = a.top, s = a.right, r = a.bottom;
  return t >= i && t <= s && l >= o && l <= r;
}
function _n() {
  const e = G(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => ia(e.value)
  }), n;
}
const va = ["top", "bottom"], ro = ["start", "end", "left", "right"];
function xn(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = Ut(va, t) ? "start" : Ut(ro, t) ? "top" : "center"), {
    side: gl(t, n),
    align: gl(l, n)
  };
}
function gl(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function mn(e) {
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
function gn(e) {
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
function yl(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function hl(e) {
  return Ut(va, e.side) ? "y" : "x";
}
class tt {
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
function bl(e, n) {
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
function ma(e) {
  return Array.isArray(e) ? new tt({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function zn(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), l = t.transform;
  if (l) {
    let a, i, o, s, r;
    if (l.startsWith("matrix3d("))
      a = l.slice(9, -1).split(/, /), i = +a[0], o = +a[5], s = +a[12], r = +a[13];
    else if (l.startsWith("matrix("))
      a = l.slice(7, -1).split(/, /), i = +a[0], o = +a[3], s = +a[4], r = +a[5];
    else
      return new tt(n);
    const c = t.transformOrigin, m = n.x - s - (1 - i) * parseFloat(c), g = n.y - r - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), v = i ? n.width / i : e.offsetWidth + 1, d = o ? n.height / o : e.offsetHeight + 1;
    return new tt({
      x: m,
      y: g,
      width: v,
      height: d
    });
  } else
    return new tt(n);
}
function rt(e, n, t) {
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
const jt = /* @__PURE__ */ new WeakMap();
function uo(e, n) {
  Object.keys(n).forEach((t) => {
    if (Nn(t)) {
      const l = ca(t), a = jt.get(e);
      if (n[t] == null)
        a == null || a.forEach((i) => {
          const [o, s] = i;
          o === l && (e.removeEventListener(l, s), a.delete(i));
        });
      else if (!a || ![...a].some((i) => i[0] === l && i[1] === n[t])) {
        e.addEventListener(l, n[t]);
        const i = a || /* @__PURE__ */ new Set();
        i.add([l, n[t]]), jt.has(e) || jt.set(e, i);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function co(e, n) {
  Object.keys(n).forEach((t) => {
    if (Nn(t)) {
      const l = ca(t), a = jt.get(e);
      a == null || a.forEach((i) => {
        const [o, s] = i;
        o === l && (e.removeEventListener(l, s), a.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const ot = 2.4, Sl = 0.2126729, Cl = 0.7151522, kl = 0.072175, fo = 0.55, vo = 0.58, mo = 0.57, go = 0.62, Dt = 0.03, wl = 1.45, yo = 5e-4, ho = 1.25, bo = 1.25, pl = 0.078, _l = 12.82051282051282, zt = 0.06, xl = 1e-3;
function Vl(e, n) {
  const t = (e.r / 255) ** ot, l = (e.g / 255) ** ot, a = (e.b / 255) ** ot, i = (n.r / 255) ** ot, o = (n.g / 255) ** ot, s = (n.b / 255) ** ot;
  let r = t * Sl + l * Cl + a * kl, c = i * Sl + o * Cl + s * kl;
  if (r <= Dt && (r += (Dt - r) ** wl), c <= Dt && (c += (Dt - c) ** wl), Math.abs(c - r) < yo)
    return 0;
  let m;
  if (c > r) {
    const g = (c ** fo - r ** vo) * ho;
    m = g < xl ? 0 : g < pl ? g - g * _l * zt : g - zt;
  } else {
    const g = (c ** go - r ** mo) * bo;
    m = g > -xl ? 0 : g > -pl ? g - g * _l * zt : g + zt;
  }
  return m * 100;
}
function Ge(e) {
  ln(`Vuetify: ${e}`);
}
function So(e) {
  ln(`Vuetify error: ${e}`);
}
function Co(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, ln(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
function Vn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function ko(e) {
  return Vn(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Il = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, wo = {
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
  hsl: (e, n, t, l) => Al({
    h: e,
    s: n,
    l: t,
    a: l
  }),
  hsla: (e, n, t, l) => Al({
    h: e,
    s: n,
    l: t,
    a: l
  }),
  hsv: (e, n, t, l) => xt({
    h: e,
    s: n,
    v: t,
    a: l
  }),
  hsva: (e, n, t, l) => xt({
    h: e,
    s: n,
    v: t,
    a: l
  })
};
function kt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Ge(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Il.test(e)) {
    const {
      groups: n
    } = e.match(Il), {
      fn: t,
      values: l
    } = n, a = l.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return wo[t](...a);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((l) => l + l).join("") : [6, 8].includes(n.length) || Ge(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && Ge(`'${e}' is not a valid hex(a) color`), po(n);
  } else if (typeof e == "object") {
    if (vn(e, ["r", "g", "b"]))
      return e;
    if (vn(e, ["h", "s", "l"]))
      return xt(ga(e));
    if (vn(e, ["h", "s", "v"]))
      return xt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function xt(e) {
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
function Al(e) {
  return xt(ga(e));
}
function ga(e) {
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
function po(e) {
  e = _o(e);
  let [n, t, l, a] = ao(e, 2).map((i) => parseInt(i, 16));
  return a = a === void 0 ? a : a / 255, {
    r: n,
    g: t,
    b: l,
    a
  };
}
function _o(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = vl(vl(e, 6), 8, "F")), e;
}
function xo(e) {
  const n = Math.abs(Vl(kt(0), kt(e)));
  return Math.abs(Vl(kt(16777215), kt(e))) > Math.min(n, 50) ? "#fff" : "#000";
}
function ce(e, n) {
  const t = Gi();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function Te() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = ce(e).type;
  return et((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let ya = 0, Wt = /* @__PURE__ */ new WeakMap();
function Le() {
  const e = ce("getUid");
  if (Wt.has(e))
    return Wt.get(e);
  {
    const n = ya++;
    return Wt.set(e, n), n;
  }
}
Le.reset = () => {
  ya = 0, Wt = /* @__PURE__ */ new WeakMap();
};
function Vo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const Yt = Symbol.for("vuetify:defaults");
function Hn() {
  const e = me(Yt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function it(e, n) {
  const t = Hn(), l = j(e), a = y(() => {
    if (Ce(n == null ? void 0 : n.disabled))
      return t.value;
    const o = Ce(n == null ? void 0 : n.scoped), s = Ce(n == null ? void 0 : n.reset), r = Ce(n == null ? void 0 : n.root);
    if (l.value == null && !(o || s || r))
      return t.value;
    let c = Re(l.value, {
      prev: t.value
    });
    if (o)
      return c;
    if (s || r) {
      const m = Number(s || 1 / 0);
      for (let g = 0; g <= m && !(!c || !("prev" in c)); g++)
        c = c.prev;
      return c && typeof r == "string" && r in c && (c = Re(Re(c, {
        prev: c
      }), c[r])), c;
    }
    return c.prev ? Re(c.prev, c) : c;
  });
  return _e(Yt, a), a;
}
function Io(e, n) {
  var t, l;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((l = e.props) == null ? void 0 : l[et(n)]) < "u";
}
function Ao() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Hn();
  const l = ce("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const a = y(() => {
    var r;
    return (r = t.value) == null ? void 0 : r[e._as ?? n];
  }), i = new Proxy(e, {
    get(r, c) {
      var g, v, d, h, f, b, S;
      const m = Reflect.get(r, c);
      return c === "class" || c === "style" ? [(g = a.value) == null ? void 0 : g[c], m].filter((_) => _ != null) : typeof c == "string" && !Io(l.vnode, c) ? ((v = a.value) == null ? void 0 : v[c]) !== void 0 ? (d = a.value) == null ? void 0 : d[c] : ((f = (h = t.value) == null ? void 0 : h.global) == null ? void 0 : f[c]) !== void 0 ? (S = (b = t.value) == null ? void 0 : b.global) == null ? void 0 : S[c] : m : m;
    }
  }), o = G();
  Ne(() => {
    if (a.value) {
      const r = Object.entries(a.value).filter((c) => {
        let [m] = c;
        return m.startsWith(m[0].toUpperCase());
      });
      o.value = r.length ? Object.fromEntries(r) : void 0;
    } else
      o.value = void 0;
  });
  function s() {
    const r = Vo(Yt, l);
    _e(Yt, y(() => o.value ? Re((r == null ? void 0 : r.value) ?? {}, o.value) : r == null ? void 0 : r.value));
  }
  return {
    props: i,
    provideSubDefaults: s
  };
}
function Lt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Ge("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = E(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(l) {
      return oa(l, n);
    }, e.props._as = String, e.setup = function(l, a) {
      const i = Hn();
      if (!i.value)
        return e._setup(l, a);
      const {
        props: o,
        provideSubDefaults: s
      } = Ao(l, l._as ?? e.name, i), r = e._setup(o, a);
      return s(), r;
    };
  }
  return e;
}
function N() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? Lt : Tt)(n);
}
function jn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return N()({
    name: t ?? Bt(ta(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: n
      },
      ...X()
    },
    setup(l, a) {
      let {
        slots: i
      } = a;
      return () => {
        var o;
        return mt(l.tag, {
          class: [e, l.class],
          style: l.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function ha(e) {
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
const Xt = "cubic-bezier(0.4, 0, 0.2, 1)", Po = "cubic-bezier(0.0, 0, 0.2, 1)", Eo = "cubic-bezier(0.4, 0, 1, 1)";
function ba(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? Bo(e) : Wn(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Qt(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (Wn(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function Wn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Bo(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function To(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function q(e) {
  const n = ce("useRender");
  n.render = e;
}
const ie = E({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), Lo = E({
  text: String,
  ...X(),
  ...ie()
}, "VToolbarTitle"), Oo = N()({
  name: "VToolbarTitle",
  props: Lo(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return q(() => {
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
}), $o = E({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function xe(e, n, t) {
  return N()({
    name: e,
    props: $o({
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
              offsetWidth: m,
              offsetHeight: g
            } = s;
            s._transitionInitialStyles = {
              position: s.style.position,
              top: s.style.top,
              left: s.style.left,
              width: s.style.width,
              height: s.style.height
            }, s.style.position = "absolute", s.style.top = `${r}px`, s.style.left = `${c}px`, s.style.width = `${m}px`, s.style.height = `${g}px`;
          }
          l.hideOnLeave && s.style.setProperty("display", "none", "important");
        },
        onAfterLeave(s) {
          if (l.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
            const {
              position: r,
              top: c,
              left: m,
              width: g,
              height: v
            } = s._transitionInitialStyles;
            delete s._transitionInitialStyles, s.style.position = r || "", s.style.top = c || "", s.style.left = m || "", s.style.width = g || "", s.style.height = v || "";
          }
        }
      };
      return () => {
        const s = l.group ? $n : nt;
        return mt(s, {
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
function Sa(e, n) {
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
      const o = l.group ? $n : nt;
      return () => mt(o, {
        name: l.disabled ? "" : e,
        css: !l.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...l.disabled ? {} : n
      }, i.default);
    }
  });
}
function Ca() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", l = ta(`offset-${t}`);
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
const Fo = E({
  target: [Object, Array]
}, "v-dialog-transition"), Gn = N()({
  name: "VDialogTransition",
  props: Fo(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = {
      onBeforeEnter(a) {
        a.style.pointerEvents = "none", a.style.visibility = "hidden";
      },
      async onEnter(a, i) {
        var v;
        await new Promise((d) => requestAnimationFrame(d)), await new Promise((d) => requestAnimationFrame(d)), a.style.visibility = "";
        const {
          x: o,
          y: s,
          sx: r,
          sy: c,
          speed: m
        } = El(e.target, a), g = rt(a, [{
          transform: `translate(${o}px, ${s}px) scale(${r}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * m,
          easing: Po
        });
        (v = Pl(a)) == null || v.forEach((d) => {
          rt(d, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * m,
            easing: Xt
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
        var v;
        await new Promise((d) => requestAnimationFrame(d));
        const {
          x: o,
          y: s,
          sx: r,
          sy: c,
          speed: m
        } = El(e.target, a);
        rt(a, [{}, {
          transform: `translate(${o}px, ${s}px) scale(${r}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * m,
          easing: Eo
        }).finished.then(() => i()), (v = Pl(a)) == null || v.forEach((d) => {
          rt(d, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * m,
            easing: Xt
          });
        });
      },
      onAfterLeave(a) {
        a.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? u(nt, J({
      name: "dialog-transition"
    }, l, {
      css: !1
    }), t) : u(nt, {
      name: "dialog-transition"
    }, t);
  }
});
function Pl(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function El(e, n) {
  const t = ma(e), l = zn(n), [a, i] = getComputedStyle(n).transformOrigin.split(" ").map((S) => parseFloat(S)), [o, s] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let r = t.left + t.width / 2;
  o === "left" || s === "left" ? r -= t.width / 2 : (o === "right" || s === "right") && (r += t.width / 2);
  let c = t.top + t.height / 2;
  o === "top" || s === "top" ? c -= t.height / 2 : (o === "bottom" || s === "bottom") && (c += t.height / 2);
  const m = t.width / l.width, g = t.height / l.height, v = Math.max(1, m, g), d = m / v || 0, h = g / v || 0, f = l.width * l.height / (window.innerWidth * window.innerHeight), b = f > 0.12 ? Math.min(1.5, (f - 0.12) * 10 + 1) : 1;
  return {
    x: r - (a + l.left),
    y: c - (i + l.top),
    sx: d,
    sy: h,
    speed: b
  };
}
xe("fab-transition", "center center", "out-in");
xe("dialog-bottom-transition");
xe("dialog-top-transition");
const Bl = xe("fade-transition");
xe("scale-transition");
xe("scroll-x-transition");
xe("scroll-x-reverse-transition");
xe("scroll-y-transition");
xe("scroll-y-reverse-transition");
xe("slide-x-transition");
xe("slide-x-reverse-transition");
const ka = xe("slide-y-transition");
xe("slide-y-reverse-transition");
const wa = Sa("expand-transition", Ca()), pa = Sa("expand-x-transition", Ca("", !0)), Ro = E({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), re = N(!1)({
  name: "VDefaultsProvider",
  props: Ro(),
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
    } = ea(e);
    return it(l, {
      reset: i,
      root: o,
      scoped: s,
      disabled: a
    }), () => {
      var r;
      return (r = t.default) == null ? void 0 : r.call(t);
    };
  }
}), qe = E({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Ke(e) {
  return {
    dimensionStyles: y(() => {
      const t = {}, l = U(e.height), a = U(e.maxHeight), i = U(e.maxWidth), o = U(e.minHeight), s = U(e.minWidth), r = U(e.width);
      return l != null && (t.height = l), a != null && (t.maxHeight = a), i != null && (t.maxWidth = i), o != null && (t.minHeight = o), s != null && (t.minWidth = s), r != null && (t.width = r), t;
    })
  };
}
function Mo(e) {
  return {
    aspectStyles: y(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const _a = E({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...X(),
  ...qe()
}, "VResponsive"), Tl = N()({
  name: "VResponsive",
  props: _a(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: l
    } = Mo(e), {
      dimensionStyles: a
    } = Ke(e);
    return q(() => {
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
function Un(e) {
  return Dn(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Vn(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && ko(e.value.background)) {
          const l = kt(e.value.background);
          if (l.a == null || l.a === 1) {
            const a = xo(l);
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
function De(e, n) {
  const t = y(() => ({
    text: dt(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = Un(t);
  return {
    textColorClasses: l,
    textColorStyles: a
  };
}
function Be(e, n) {
  const t = y(() => ({
    background: dt(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = Un(t);
  return {
    backgroundColorClasses: l,
    backgroundColorStyles: a
  };
}
const Ve = E({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Ie(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    roundedClasses: y(() => {
      const l = dt(e) ? e.value : e.rounded, a = dt(e) ? e.value : e.tile, i = [];
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
const Ot = E({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), We = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: l,
    disabled: a,
    group: i,
    ...o
  } = e, {
    component: s = i ? $n : nt,
    ...r
  } = typeof l == "object" ? l : {};
  return mt(s, J(typeof l == "string" ? {
    name: a ? "" : l
  } : r, typeof l == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: a,
    group: i
  }).filter((c) => {
    let [m, g] = c;
    return g !== void 0;
  })), o), t);
};
function No(e, n) {
  if (!Mn)
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
    const m = s.some((v) => v.isIntersecting);
    a && (!t.quiet || c.init) && (!t.once || m || c.init) && a(m, s, r), m && t.once ? xa(e, n) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function xa(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const Va = {
  mounted: No,
  unmounted: xa
}, Do = E({
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
  ..._a(),
  ...X(),
  ...Ve(),
  ...Ot()
}, "VImg"), qn = N()({
  name: "VImg",
  directives: {
    intersect: Va
  },
  props: Do(),
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
    } = Be(M(e, "color")), {
      roundedClasses: o
    } = Ie(e), s = ce("VImg"), r = G(""), c = j(), m = G(e.eager ? "loading" : "idle"), g = G(), v = G(), d = y(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), h = y(() => d.value.aspect || g.value / v.value || 0);
    K(() => e.src, () => {
      f(m.value !== "idle");
    }), K(h, (p, A) => {
      !p && A && c.value && x(c.value);
    }), na(() => f());
    function f(p) {
      if (!(e.eager && p) && !(Mn && !p && !e.eager)) {
        if (m.value = "loading", d.value.lazySrc) {
          const A = new Image();
          A.src = d.value.lazySrc, x(A, null);
        }
        d.value.src && ye(() => {
          var A;
          t("loadstart", ((A = c.value) == null ? void 0 : A.currentSrc) || d.value.src), setTimeout(() => {
            var T;
            if (!s.isUnmounted)
              if ((T = c.value) != null && T.complete) {
                if (c.value.naturalWidth || S(), m.value === "error")
                  return;
                h.value || x(c.value, null), m.value === "loading" && b();
              } else
                h.value || x(c.value), _();
          });
        });
      }
    }
    function b() {
      var p;
      s.isUnmounted || (_(), x(c.value), m.value = "loaded", t("load", ((p = c.value) == null ? void 0 : p.currentSrc) || d.value.src));
    }
    function S() {
      var p;
      s.isUnmounted || (m.value = "error", t("error", ((p = c.value) == null ? void 0 : p.currentSrc) || d.value.src));
    }
    function _() {
      const p = c.value;
      p && (r.value = p.currentSrc || p.src);
    }
    let w = -1;
    Ee(() => {
      clearTimeout(w);
    });
    function x(p) {
      let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const T = () => {
        if (clearTimeout(w), s.isUnmounted)
          return;
        const {
          naturalHeight: D,
          naturalWidth: Q
        } = p;
        D || Q ? (g.value = Q, v.value = D) : !p.complete && m.value === "loading" && A != null ? w = window.setTimeout(T, A) : (p.currentSrc.endsWith(".svg") || p.currentSrc.startsWith("data:image/svg+xml")) && (g.value = 1, v.value = 1);
      };
      T();
    }
    const L = y(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), V = () => {
      var T;
      if (!d.value.src || m.value === "idle")
        return null;
      const p = u("img", {
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
      return u(We, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [we(A ? u("picture", {
          class: "v-img__picture"
        }, [A, p]) : p, [[gt, m.value === "loaded"]])]
      });
    }, C = () => u(We, {
      transition: e.transition
    }, {
      default: () => [d.value.lazySrc && m.value !== "loaded" && u("img", {
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
    }), $ = () => l.placeholder ? u(We, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(m.value === "loading" || m.value === "error" && !l.error) && u("div", {
        class: "v-img__placeholder"
      }, [l.placeholder()])]
    }) : null, H = () => l.error ? u(We, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [m.value === "error" && u("div", {
        class: "v-img__error"
      }, [l.error()])]
    }) : null, R = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, O = G(!1);
    {
      const p = K(h, (A) => {
        A && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            O.value = !0;
          });
        }), p());
      });
    }
    return q(() => {
      const p = Tl.filterProps(e);
      return we(u(Tl, J({
        class: ["v-img", {
          "v-img--booting": !O.value
        }, a.value, o.value, e.class],
        style: [{
          width: U(e.width === "auto" ? g.value : e.width)
        }, i.value, e.style]
      }, p, {
        aspectRatio: h.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(se, null, [u(V, null, null), u(C, null, null), u(R, null, null), u($, null, null), u(H, null, null)]),
        default: l.default
      }), [[at("intersect"), {
        handler: f,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: r,
      image: c,
      state: m,
      naturalWidth: g,
      naturalHeight: v
    };
  }
}), Ye = E({
  border: [Boolean, Number, String]
}, "border");
function Xe(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    borderClasses: y(() => {
      const l = dt(e) ? e.value : e.border, a = [];
      if (l === !0 || l === "")
        a.push(`${n}--border`);
      else if (typeof l == "string" || l === 0)
        for (const i of String(l).split(" "))
          a.push(`border-${i}`);
      return a;
    })
  };
}
const Qe = E({
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
function Je(e) {
  return {
    elevationClasses: y(() => {
      const t = dt(e) ? e.value : e.elevation, l = [];
      return t == null || l.push(`elevation-${t}`), l;
    })
  };
}
function Ue(e, n) {
  let t;
  function l() {
    t = Fn(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), l();
    }) : n());
  }
  K(e, (a) => {
    a && !t ? l() : a || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), he(() => {
    t == null || t.stop();
  });
}
function ue(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (g) => g, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (g) => g;
  const i = ce("useProxiedModel"), o = j(e[n] !== void 0 ? e[n] : t), s = et(n), c = s !== n ? y(() => {
    var g, v, d, h;
    return e[n], !!(((g = i.vnode.props) != null && g.hasOwnProperty(n) || (v = i.vnode.props) != null && v.hasOwnProperty(s)) && ((d = i.vnode.props) != null && d.hasOwnProperty(`onUpdate:${n}`) || (h = i.vnode.props) != null && h.hasOwnProperty(`onUpdate:${s}`)));
  }) : y(() => {
    var g, v;
    return e[n], !!((g = i.vnode.props) != null && g.hasOwnProperty(n) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${n}`)));
  });
  Ue(() => !c.value, () => {
    K(() => e[n], (g) => {
      o.value = g;
    });
  });
  const m = y({
    get() {
      const g = e[n];
      return l(c.value ? g : o.value);
    },
    set(g) {
      const v = a(g), d = pe(c.value ? e[n] : o.value);
      d === v || l(d) === g || (o.value = v, i == null || i.emit(`update:${n}`, v));
    }
  });
  return Object.defineProperty(m, "externalValue", {
    get: () => c.value ? e[n] : o.value
  }), m;
}
const Ia = Symbol.for("vuetify:locale");
function Kn() {
  const e = me(Ia);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function He() {
  const e = me(Ia);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Ll = Symbol.for("vuetify:theme"), de = E({
  theme: String
}, "theme");
function ge(e) {
  ce("provideTheme");
  const n = me(Ll, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = y(() => e.theme ?? n.name.value), l = y(() => n.themes.value[t.value]), a = y(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = {
    ...n,
    name: t,
    current: l,
    themeClasses: a
  };
  return _e(Ll, i), i;
}
const zo = [null, "prominent", "default", "comfortable", "compact"], Aa = E({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => zo.includes(e)
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
  ...Ye(),
  ...X(),
  ...Qe(),
  ...Ve(),
  ...ie({
    tag: "header"
  }),
  ...de()
}, "VToolbar"), Ol = N()({
  name: "VToolbar",
  props: Aa(),
  setup(e, n) {
    var d;
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: a
    } = Be(M(e, "color")), {
      borderClasses: i
    } = Xe(e), {
      elevationClasses: o
    } = Je(e), {
      roundedClasses: s
    } = Ie(e), {
      themeClasses: r
    } = ge(e), {
      rtlClasses: c
    } = He(), m = G(!!(e.extended || (d = t.extension) != null && d.call(t))), g = y(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = y(() => m.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return it({
      VBtn: {
        variant: "text"
      }
    }), q(() => {
      var S;
      const h = !!(e.title || t.title), f = !!(t.image || e.image), b = (S = t.extension) == null ? void 0 : S.call(t);
      return m.value = !!(e.extended || b), u(e.tag, {
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
        }, t.image) : u(qn, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), u(re, {
          defaults: {
            VTabs: {
              height: U(g.value)
            }
          }
        }, {
          default: () => {
            var _, w, x;
            return [u("div", {
              class: "v-toolbar__content",
              style: {
                height: U(g.value)
              }
            }, [t.prepend && u("div", {
              class: "v-toolbar__prepend"
            }, [(_ = t.prepend) == null ? void 0 : _.call(t)]), h && u(Oo, {
              key: "title",
              text: e.title
            }, {
              text: t.title
            }), (w = t.default) == null ? void 0 : w.call(t), t.append && u("div", {
              class: "v-toolbar__append"
            }, [(x = t.append) == null ? void 0 : x.call(t)])])];
          }
        }), u(re, {
          defaults: {
            VTabs: {
              height: U(v.value)
            }
          }
        }, {
          default: () => [u(wa, null, {
            default: () => [m.value && u("div", {
              class: "v-toolbar__extension",
              style: {
                height: U(v.value)
              }
            }, [b])]
          })]
        })]
      });
    }), {
      contentHeight: g,
      extensionHeight: v
    };
  }
});
function vt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = _n(), l = j();
  if (ve) {
    const a = new ResizeObserver((i) => {
      e == null || e(i, a), i.length && (n === "content" ? l.value = i[0].contentRect : l.value = i[0].target.getBoundingClientRect());
    });
    Ee(() => {
      a.disconnect();
    }), K(() => t.el, (i, o) => {
      o && (a.unobserve(o), l.value = void 0), i && a.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: Rn(l)
  };
}
const Ho = Symbol.for("vuetify:layout"), jo = Symbol.for("vuetify:layout-item"), Pa = E({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function Ea(e) {
  const n = me(Ho);
  if (!n)
    throw new Error("[Vuetify] Could not find injected layout");
  const t = e.id ?? `layout-item-${Le()}`, l = ce("useLayoutItem");
  _e(jo, {
    id: t
  });
  const a = G(!1);
  Ui(() => a.value = !0), qi(() => a.value = !1);
  const i = ye(), {
    layoutItemStyles: o,
    layoutItemScrimStyles: s
  } = n.register(l, {
    ...e,
    active: y(() => a.value ? !1 : e.active.value),
    id: t
  });
  return Ee(() => n.unregister(t)), {
    layoutItemStyles: o,
    layoutRect: n.layoutRect,
    layoutItemScrimStyles: s,
    layoutIsReady: i
  };
}
const Wo = E({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function Go(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let l = 0;
  const a = j(null), i = G(0), o = G(0), s = G(0), r = G(!1), c = G(!1), m = y(() => Number(e.scrollThreshold)), g = y(() => Me((m.value - i.value) / m.value || 0)), v = () => {
    const d = a.value;
    !d || t && !t.value || (l = i.value, i.value = "window" in d ? d.pageYOffset : d.scrollTop, c.value = i.value < l, s.value = Math.abs(i.value - m.value));
  };
  return K(c, () => {
    o.value = o.value || i.value;
  }), K(r, () => {
    o.value = 0;
  }), ze(() => {
    K(() => e.scrollTarget, (d) => {
      var f;
      const h = d ? document.querySelector(d) : window;
      if (!h) {
        Ge(`Unable to locate element with identifier ${d}`);
        return;
      }
      h !== a.value && ((f = a.value) == null || f.removeEventListener("scroll", v), a.value = h, a.value.addEventListener("scroll", v, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), Ee(() => {
    var d;
    (d = a.value) == null || d.removeEventListener("scroll", v);
  }), t && K(t, v, {
    immediate: !0
  }), {
    scrollThreshold: m,
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
function Ba() {
  const e = G(!1);
  return ze(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: y(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: Rn(e)
  };
}
const Uo = E({
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
  ...Aa(),
  ...Pa(),
  ...Wo(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), qo = N()({
  name: "VAppBar",
  props: Uo(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = j(), a = ue(e, "modelValue"), i = y(() => {
      var x;
      const w = new Set(((x = e.scrollBehavior) == null ? void 0 : x.split(" ")) ?? []);
      return {
        hide: w.has("hide"),
        fullyHide: w.has("fully-hide"),
        inverted: w.has("inverted"),
        collapse: w.has("collapse"),
        elevate: w.has("elevate"),
        fadeImage: w.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    }), o = y(() => {
      const w = i.value;
      return w.hide || w.fullyHide || w.inverted || w.collapse || w.elevate || w.fadeImage || // behavior.shrink ||
      !a.value;
    }), {
      currentScroll: s,
      scrollThreshold: r,
      isScrollingUp: c,
      scrollRatio: m
    } = Go(e, {
      canScroll: o
    }), g = y(() => i.value.hide || i.value.fullyHide), v = y(() => e.collapse || i.value.collapse && (i.value.inverted ? m.value > 0 : m.value === 0)), d = y(() => e.flat || i.value.fullyHide && !a.value || i.value.elevate && (i.value.inverted ? s.value > 0 : s.value === 0)), h = y(() => i.value.fadeImage ? i.value.inverted ? 1 - m.value : m.value : void 0), f = y(() => {
      var L, V;
      const w = Number(((L = l.value) == null ? void 0 : L.contentHeight) ?? e.height), x = Number(((V = l.value) == null ? void 0 : V.extensionHeight) ?? 0);
      return g.value ? s.value < r.value || i.value.fullyHide ? w + x : w : w + x;
    });
    Ue(y(() => !!e.scrollBehavior), () => {
      Ne(() => {
        g.value ? i.value.inverted ? a.value = s.value > r.value : a.value = c.value || s.value < r.value : a.value = !0;
      });
    });
    const {
      ssrBootStyles: b
    } = Ba(), {
      layoutItemStyles: S,
      layoutIsReady: _
    } = Ea({
      id: e.name,
      order: y(() => parseInt(e.order, 10)),
      position: M(e, "location"),
      layoutSize: f,
      elementSize: G(void 0),
      active: a,
      absolute: M(e, "absolute")
    });
    return q(() => {
      const w = Ol.filterProps(e);
      return u(Ol, J({
        ref: l,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...S.value,
          "--v-toolbar-image-opacity": h.value,
          height: void 0,
          ...b.value
        }, e.style]
      }, w, {
        collapse: v.value,
        flat: d.value
      }), t);
    }), _;
  }
}), Ko = [null, "default", "comfortable", "compact"], Oe = E({
  density: {
    type: String,
    default: "default",
    validator: (e) => Ko.includes(e)
  }
}, "density");
function je(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    densityClasses: y(() => `${n}--density-${e.density}`)
  };
}
const Yo = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function $t(e, n) {
  return u(se, null, [e && u("span", {
    key: "overlay",
    class: `${n}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${n}__underlay`
  }, null)]);
}
const Ze = E({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Yo.includes(e)
  }
}, "variant");
function Ft(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  const t = y(() => {
    const {
      variant: i
    } = Ce(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: l,
    colorStyles: a
  } = Un(y(() => {
    const {
      variant: i,
      color: o
    } = Ce(e);
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
const Ta = E({
  baseColor: String,
  divided: Boolean,
  ...Ye(),
  ...X(),
  ...Oe(),
  ...Qe(),
  ...Ve(),
  ...ie(),
  ...de(),
  ...Ze()
}, "VBtnGroup"), $l = N()({
  name: "VBtnGroup",
  props: Ta(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = ge(e), {
      densityClasses: a
    } = je(e), {
      borderClasses: i
    } = Xe(e), {
      elevationClasses: o
    } = Je(e), {
      roundedClasses: s
    } = Ie(e);
    it({
      VBtn: {
        height: "auto",
        baseColor: M(e, "baseColor"),
        color: M(e, "color"),
        density: M(e, "density"),
        flat: !0,
        variant: M(e, "variant")
      }
    }), q(() => u(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, l.value, i.value, a.value, o.value, s.value, e.class],
      style: e.style
    }, t));
  }
}), Yn = E({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), La = E({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Oa(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const l = ce("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = Le();
  _e(Symbol.for(`${n.description}:id`), a);
  const i = me(n, null);
  if (!i) {
    if (!t)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const o = M(e, "value"), s = y(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: a,
    value: o,
    disabled: s
  }, l), Ee(() => {
    i.unregister(a);
  });
  const r = y(() => i.isSelected(a)), c = y(() => i.items.value[0].id === a), m = y(() => i.items.value[i.items.value.length - 1].id === a), g = y(() => r.value && [i.selectedClass.value, e.selectedClass]);
  return K(r, (v) => {
    l.emit("group:selected", {
      value: v
    });
  }, {
    flush: "sync"
  }), {
    id: a,
    isSelected: r,
    isFirst: c,
    isLast: m,
    toggle: () => i.select(a, !r.value),
    select: (v) => i.select(a, v),
    selectedClass: g,
    value: o,
    disabled: s,
    group: i
  };
}
function Xn(e, n) {
  let t = !1;
  const l = nn([]), a = ue(e, "modelValue", [], (v) => v == null ? [] : $a(l, Pe(v)), (v) => {
    const d = Qo(l, v);
    return e.multiple ? d : d[0];
  }), i = ce("useGroup");
  function o(v, d) {
    const h = v, f = Symbol.for(`${n.description}:id`), S = Ct(f, i == null ? void 0 : i.vnode).indexOf(d);
    Ce(h.value) == null && (h.value = S, h.useIndexAsValue = !0), S > -1 ? l.splice(S, 0, h) : l.push(h);
  }
  function s(v) {
    if (t)
      return;
    r();
    const d = l.findIndex((h) => h.id === v);
    l.splice(d, 1);
  }
  function r() {
    const v = l.find((d) => !d.disabled);
    v && e.mandatory === "force" && !a.value.length && (a.value = [v.id]);
  }
  ze(() => {
    r();
  }), Ee(() => {
    t = !0;
  }), Ki(() => {
    for (let v = 0; v < l.length; v++)
      l[v].useIndexAsValue && (l[v].value = v);
  });
  function c(v, d) {
    const h = l.find((f) => f.id === v);
    if (!(d && (h != null && h.disabled)))
      if (e.multiple) {
        const f = a.value.slice(), b = f.findIndex((_) => _ === v), S = ~b;
        if (d = d ?? !S, S && e.mandatory && f.length <= 1 || !S && e.max != null && f.length + 1 > e.max)
          return;
        b < 0 && d ? f.push(v) : b >= 0 && !d && f.splice(b, 1), a.value = f;
      } else {
        const f = a.value.includes(v);
        if (e.mandatory && f)
          return;
        a.value = d ?? !f ? [v] : [];
      }
  }
  function m(v) {
    if (e.multiple && Ge('This method is not supported when using "multiple" prop'), a.value.length) {
      const d = a.value[0], h = l.findIndex((S) => S.id === d);
      let f = (h + v) % l.length, b = l[f];
      for (; b.disabled && f !== h; )
        f = (f + v) % l.length, b = l[f];
      if (b.disabled)
        return;
      a.value = [l[f].id];
    } else {
      const d = l.find((h) => !h.disabled);
      d && (a.value = [d.id]);
    }
  }
  const g = {
    register: o,
    unregister: s,
    selected: a,
    select: c,
    disabled: M(e, "disabled"),
    prev: () => m(l.length - 1),
    next: () => m(1),
    isSelected: (v) => a.value.includes(v),
    selectedClass: y(() => e.selectedClass),
    items: y(() => l),
    getItemIndex: (v) => Xo(l, v)
  };
  return _e(n, g), g;
}
function Xo(e, n) {
  const t = $a(e, [n]);
  return t.length ? e.findIndex((l) => l.id === t[0]) : -1;
}
function $a(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.find((o) => yt(l, o.value)), i = e[l];
    (a == null ? void 0 : a.value) != null ? t.push(a.id) : i != null && t.push(i.id);
  }), t;
}
function Qo(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.findIndex((i) => i.id === l);
    if (~a) {
      const i = e[a];
      t.push(i.value != null ? i.value : a);
    }
  }), t;
}
const Fa = Symbol.for("vuetify:v-btn-toggle"), Jo = E({
  ...Ta(),
  ...Yn()
}, "VBtnToggle");
N()({
  name: "VBtnToggle",
  props: Jo(),
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
    } = Xn(e, Fa);
    return q(() => {
      const r = $l.filterProps(e);
      return u($l, J({
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
const ne = [String, Function, Object, Array], Zo = Symbol.for("vuetify:icons"), sn = E({
  icon: {
    type: ne
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Fl = N()({
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
}), es = Lt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: sn(),
  setup(e, n) {
    let {
      attrs: t
    } = n;
    return () => u(e.tag, J(t, {
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
const ts = (e) => {
  const n = me(Zo);
  if (!n)
    throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: y(() => {
      var r;
      const l = Ce(e);
      if (!l)
        return {
          component: Fl
        };
      let a = l;
      if (typeof a == "string" && (a = a.trim(), a.startsWith("$") && (a = (r = n.aliases) == null ? void 0 : r[a.slice(1)])), a || Ge(`Could not find aliased icon "${l}"`), Array.isArray(a))
        return {
          component: es,
          icon: a
        };
      if (typeof a != "string")
        return {
          component: Fl,
          icon: a
        };
      const i = Object.keys(n.sets).find((c) => typeof a == "string" && a.startsWith(`${c}:`)), o = i ? a.slice(i.length + 1) : a;
      return {
        component: n.sets[i ?? n.defaultSet].component,
        icon: o
      };
    })
  };
}, ns = ["x-small", "small", "default", "large", "x-large"], Rt = E({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Mt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return Dn(() => {
    let t, l;
    return Ut(ns, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = {
      width: U(e.size),
      height: U(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: l
    };
  });
}
const ls = E({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: ne,
  ...X(),
  ...Rt(),
  ...ie({
    tag: "i"
  }),
  ...de()
}, "VIcon"), le = N()({
  name: "VIcon",
  props: ls(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const a = j(), {
      themeClasses: i
    } = ge(e), {
      iconData: o
    } = ts(y(() => a.value || e.icon)), {
      sizeClasses: s
    } = Mt(e), {
      textColorClasses: r,
      textColorStyles: c
    } = De(M(e, "color"));
    return q(() => {
      var v, d;
      const m = (v = l.default) == null ? void 0 : v.call(l);
      m && (a.value = (d = ua(m).filter((h) => h.type === Yi && h.children && typeof h.children == "string")[0]) == null ? void 0 : d.children);
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
          fontSize: U(e.size),
          height: U(e.size),
          width: U(e.size)
        }, c.value, e.style],
        role: g ? "button" : void 0,
        "aria-hidden": !g,
        tabindex: g ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [m]
      });
    }), {};
  }
});
function Ra(e, n) {
  const t = j(), l = G(!1);
  if (Mn) {
    const a = new IntersectionObserver((i) => {
      l.value = !!i.find((o) => o.isIntersecting);
    }, n);
    Ee(() => {
      a.disconnect();
    }), K(t, (i, o) => {
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
const as = E({
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
  ...X(),
  ...Rt(),
  ...ie({
    tag: "div"
  }),
  ...de()
}, "VProgressCircular"), is = N()({
  name: "VProgressCircular",
  props: as(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = 20, a = 2 * Math.PI * l, i = j(), {
      themeClasses: o
    } = ge(e), {
      sizeClasses: s,
      sizeStyles: r
    } = Mt(e), {
      textColorClasses: c,
      textColorStyles: m
    } = De(M(e, "color")), {
      textColorClasses: g,
      textColorStyles: v
    } = De(M(e, "bgColor")), {
      intersectionRef: d,
      isIntersecting: h
    } = Ra(), {
      resizeRef: f,
      contentRect: b
    } = vt(), S = y(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), _ = y(() => Number(e.width)), w = y(() => r.value ? Number(e.size) : b.value ? b.value.width : Math.max(_.value, 32)), x = y(() => l / (1 - _.value / w.value) * 2), L = y(() => _.value / w.value * x.value), V = y(() => U((100 - S.value) / 100 * a));
    return Ne(() => {
      d.value = i.value, f.value = i.value;
    }), q(() => u(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": h.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, s.value, c.value, e.class],
      style: [r.value, m.value, e.style],
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
        viewBox: `0 0 ${x.value} ${x.value}`
      }, [u("circle", {
        class: ["v-progress-circular__underlay", g.value],
        style: v.value,
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
}), Rl = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Qn = E({
  location: String
}, "location");
function Jn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: l
  } = He();
  return {
    locationStyles: y(() => {
      if (!e.location)
        return {};
      const {
        side: i,
        align: o
      } = xn(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
      function s(c) {
        return t ? t(c) : 0;
      }
      const r = {};
      return i !== "center" && (n ? r[Rl[i]] = `calc(100% - ${s(i)}px)` : r[i] = 0), o !== "center" ? n ? r[Rl[o]] = `calc(100% - ${s(o)}px)` : r[o] = 0 : (i === "center" ? r.top = r.left = "50%" : r[{
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
const os = E({
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
  ...X(),
  ...Qn({
    location: "top"
  }),
  ...Ve(),
  ...ie(),
  ...de()
}, "VProgressLinear"), ss = N()({
  name: "VProgressLinear",
  props: os(),
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
    } = He(), {
      themeClasses: o
    } = ge(e), {
      locationStyles: s
    } = Jn(e), {
      textColorClasses: r,
      textColorStyles: c
    } = De(e, "color"), {
      backgroundColorClasses: m,
      backgroundColorStyles: g
    } = Be(y(() => e.bgColor || e.color)), {
      backgroundColorClasses: v,
      backgroundColorStyles: d
    } = Be(y(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: h,
      backgroundColorStyles: f
    } = Be(e, "color"), {
      roundedClasses: b
    } = Ie(e), {
      intersectionRef: S,
      isIntersecting: _
    } = Ra(), w = y(() => parseFloat(e.max)), x = y(() => parseFloat(e.height)), L = y(() => Me(parseFloat(e.bufferValue) / w.value * 100, 0, 100)), V = y(() => Me(parseFloat(l.value) / w.value * 100, 0, 100)), C = y(() => a.value !== e.reverse), $ = y(() => e.indeterminate ? "fade-transition" : "slide-x-transition");
    function H(R) {
      if (!S.value)
        return;
      const {
        left: O,
        right: p,
        width: A
      } = S.value.getBoundingClientRect(), T = C.value ? A - R.clientX + (p - A) : R.clientX - O;
      l.value = Math.round(T / A * w.value);
    }
    return q(() => u(e.tag, {
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
        height: e.active ? U(x.value) : 0,
        "--v-progress-linear-height": U(x.value),
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
          [C.value ? "left" : "right"]: U(-x.value),
          borderTop: `${U(x.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${U(x.value / 4)})`,
          width: U(100 - L.value, "%"),
          "--v-progress-linear-stream-to": U(x.value * (C.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", m.value],
        style: [g.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), u("div", {
        class: ["v-progress-linear__buffer", v.value],
        style: [d.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: U(L.value, "%")
        }]
      }, null), u(nt, {
        name: $.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((R) => u("div", {
          key: R,
          class: ["v-progress-linear__indeterminate", R, h.value],
          style: f.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", h.value],
          style: [f.value, {
            width: U(V.value, "%")
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
}), Zn = E({
  loading: [Boolean, String]
}, "loader");
function el(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    loaderClasses: y(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function Ma(e, n) {
  var l;
  let {
    slots: t
  } = n;
  return u("div", {
    class: `${e.name}__loader`
  }, [((l = t.default) == null ? void 0 : l.call(t, {
    color: e.color,
    isActive: e.active
  })) || u(ss, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const rs = ["static", "relative", "fixed", "absolute", "sticky"], Na = E({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => rs.includes(e)
    )
  }
}, "position");
function Da(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    positionClasses: y(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function us() {
  const e = ce("useRoute");
  return y(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function cs() {
  var e, n;
  return (n = (e = ce("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function rn(e, n) {
  var c, m;
  const t = Xi("RouterLink"), l = y(() => !!(e.href || e.to)), a = y(() => (l == null ? void 0 : l.value) || ml(n, "click") || ml(e, "click"));
  if (typeof t == "string" || !("useLink" in t))
    return {
      isLink: l,
      isClickable: a,
      href: M(e, "href")
    };
  const i = y(() => ({
    ...e,
    to: M(() => e.to || "")
  })), o = t.useLink(i.value), s = y(() => e.to ? o : void 0), r = us();
  return {
    isLink: l,
    isClickable: a,
    route: (c = s.value) == null ? void 0 : c.route,
    navigate: (m = s.value) == null ? void 0 : m.navigate,
    isActive: y(() => {
      var g, v, d;
      return s.value ? e.exact ? r.value ? ((d = s.value.isExactActive) == null ? void 0 : d.value) && yt(s.value.route.value.query, r.value.query) : ((v = s.value.isExactActive) == null ? void 0 : v.value) ?? !1 : ((g = s.value.isActive) == null ? void 0 : g.value) ?? !1 : !1;
    }),
    href: y(() => {
      var g;
      return e.to ? (g = s.value) == null ? void 0 : g.route.value.href : e.href;
    })
  };
}
const un = E({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let yn = !1;
function ds(e, n) {
  let t = !1, l, a;
  ve && (ye(() => {
    window.addEventListener("popstate", i), l = e == null ? void 0 : e.beforeEach((o, s, r) => {
      yn ? t ? n(r) : r() : setTimeout(() => t ? n(r) : r()), yn = !0;
    }), a = e == null ? void 0 : e.afterEach(() => {
      yn = !1;
    });
  }), he(() => {
    window.removeEventListener("popstate", i), l == null || l(), a == null || a();
  }));
  function i(o) {
    var s;
    (s = o.state) != null && s.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
function fs(e, n) {
  K(() => {
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
const In = Symbol("rippleStop"), vs = 80;
function Ml(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function An(e) {
  return e.constructor.name === "TouchEvent";
}
function za(e) {
  return e.constructor.name === "KeyboardEvent";
}
const ms = function(e, n) {
  var g;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = 0, a = 0;
  if (!za(e)) {
    const v = n.getBoundingClientRect(), d = An(e) ? e.touches[e.touches.length - 1] : e;
    l = d.clientX - v.left, a = d.clientY - v.top;
  }
  let i = 0, o = 0.3;
  (g = n._ripple) != null && g.circle ? (o = 0.15, i = n.clientWidth / 2, i = t.center ? i : i + Math.sqrt((l - i) ** 2 + (a - i) ** 2) / 4) : i = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2;
  const s = `${(n.clientWidth - i * 2) / 2}px`, r = `${(n.clientHeight - i * 2) / 2}px`, c = t.center ? s : `${l - i}px`, m = t.center ? r : `${a - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: m,
    centerX: s,
    centerY: r
  };
}, Jt = {
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
      centerY: m
    } = ms(e, n, t), g = `${i * 2}px`;
    a.className = "v-ripple__animation", a.style.width = g, a.style.height = g, n.appendChild(l);
    const v = window.getComputedStyle(n);
    v && v.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), Ml(a, `translate(${s}, ${r}) scale3d(${o},${o},${o})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
      a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), Ml(a, `translate(${c}, ${m}) scale3d(1,1,1)`);
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
function Ha(e) {
  return typeof e > "u" || !!e;
}
function Vt(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[In])) {
    if (e[In] = !0, An(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || za(e), t._ripple.class && (n.class = t._ripple.class), An(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        Jt.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, vs);
    } else
      Jt.show(e, t, n);
  }
}
function Nl(e) {
  e[In] = !0;
}
function Se(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        Se(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), Jt.hide(n);
  }
}
function ja(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let It = !1;
function Wa(e) {
  !It && (e.keyCode === dl.enter || e.keyCode === dl.space) && (It = !0, Vt(e));
}
function Ga(e) {
  It = !1, Se(e);
}
function Ua(e) {
  It && (It = !1, Se(e));
}
function qa(e, n, t) {
  const {
    value: l,
    modifiers: a
  } = n, i = Ha(l);
  if (i || Jt.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, pn(l) && l.class && (e._ripple.class = l.class), i && !t) {
    if (a.stop) {
      e.addEventListener("touchstart", Nl, {
        passive: !0
      }), e.addEventListener("mousedown", Nl);
      return;
    }
    e.addEventListener("touchstart", Vt, {
      passive: !0
    }), e.addEventListener("touchend", Se, {
      passive: !0
    }), e.addEventListener("touchmove", ja, {
      passive: !0
    }), e.addEventListener("touchcancel", Se), e.addEventListener("mousedown", Vt), e.addEventListener("mouseup", Se), e.addEventListener("mouseleave", Se), e.addEventListener("keydown", Wa), e.addEventListener("keyup", Ga), e.addEventListener("blur", Ua), e.addEventListener("dragstart", Se, {
      passive: !0
    });
  } else
    !i && t && Ka(e);
}
function Ka(e) {
  e.removeEventListener("mousedown", Vt), e.removeEventListener("touchstart", Vt), e.removeEventListener("touchend", Se), e.removeEventListener("touchmove", ja), e.removeEventListener("touchcancel", Se), e.removeEventListener("mouseup", Se), e.removeEventListener("mouseleave", Se), e.removeEventListener("keydown", Wa), e.removeEventListener("keyup", Ga), e.removeEventListener("dragstart", Se), e.removeEventListener("blur", Ua);
}
function gs(e, n) {
  qa(e, n, !1);
}
function ys(e) {
  delete e._ripple, Ka(e);
}
function hs(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = Ha(n.oldValue);
  qa(e, n, t);
}
const Nt = {
  mounted: gs,
  unmounted: ys,
  updated: hs
}, bs = E({
  active: {
    type: Boolean,
    default: void 0
  },
  baseColor: String,
  symbol: {
    type: null,
    default: Fa
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: ne,
  appendIcon: ne,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...Ye(),
  ...X(),
  ...Oe(),
  ...qe(),
  ...Qe(),
  ...La(),
  ...Zn(),
  ...Qn(),
  ...Na(),
  ...Ve(),
  ...un(),
  ...Rt(),
  ...ie({
    tag: "button"
  }),
  ...de(),
  ...Ze({
    variant: "elevated"
  })
}, "VBtn"), Ss = N()({
  name: "VBtn",
  props: bs(),
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
    } = Xe(e), {
      densityClasses: o
    } = je(e), {
      dimensionStyles: s
    } = Ke(e), {
      elevationClasses: r
    } = Je(e), {
      loaderClasses: c
    } = el(e), {
      locationStyles: m
    } = Jn(e), {
      positionClasses: g
    } = Da(e), {
      roundedClasses: v
    } = Ie(e), {
      sizeClasses: d,
      sizeStyles: h
    } = Mt(e), f = Oa(e, e.symbol, !1), b = rn(e, t), S = y(() => {
      var R;
      return e.active !== void 0 ? e.active : b.isLink.value ? (R = b.isActive) == null ? void 0 : R.value : f == null ? void 0 : f.isSelected.value;
    }), _ = y(() => {
      var O, p;
      return {
        color: (f == null ? void 0 : f.isSelected.value) && (!b.isLink.value || ((O = b.isActive) == null ? void 0 : O.value)) || !f || ((p = b.isActive) == null ? void 0 : p.value) ? e.color ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: w,
      colorStyles: x,
      variantClasses: L
    } = Ft(_), V = y(() => (f == null ? void 0 : f.disabled.value) || e.disabled), C = y(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), $ = y(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function H(R) {
      var O;
      V.value || b.isLink.value && (R.metaKey || R.ctrlKey || R.shiftKey || R.button !== 0 || t.target === "_blank") || ((O = b.navigate) == null || O.call(b, R), f == null || f.toggle());
    }
    return fs(b, f == null ? void 0 : f.select), q(() => {
      const R = b.isLink.value ? "a" : e.tag, O = !!(e.prependIcon || l.prepend), p = !!(e.appendIcon || l.append), A = !!(e.icon && e.icon !== !0);
      return we(u(R, {
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
        }, a.value, i.value, w.value, o.value, r.value, c.value, g.value, v.value, d.value, L.value, e.class],
        style: [x.value, s.value, m.value, h.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: V.value || void 0,
        href: b.href.value,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: H,
        value: $.value
      }, {
        default: () => {
          var T;
          return [$t(!0, "v-btn"), !e.icon && O && u("span", {
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
          }, l.prepend) : u(le, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), u("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!l.default && A ? u(le, {
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
          })]), !e.icon && p && u("span", {
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
          }, l.append) : u(le, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && u("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((T = l.loader) == null ? void 0 : T.call(l)) ?? u(is, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Nt, !V.value && !!e.ripple, "", {
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
function Cs(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function Dl(e, n) {
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
const Ya = {
  static: ps,
  // specific viewport position, usually centered
  connected: xs
  // connected to a certain element
}, ks = E({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Ya
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
function ws(e, n) {
  const t = j({}), l = j();
  ve && Ue(() => !!(n.isActive.value && e.locationStrategy), (i) => {
    var o, s;
    K(() => e.locationStrategy, i), he(() => {
      window.removeEventListener("resize", a), l.value = void 0;
    }), window.addEventListener("resize", a, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? l.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation : l.value = (s = Ya[e.locationStrategy](n, e, t)) == null ? void 0 : s.updateLocation;
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
function ps() {
}
function _s(e, n) {
  n ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const t = zn(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function xs(e, n, t) {
  (Array.isArray(e.target.value) || To(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: a,
    preferredOrigin: i
  } = Dn(() => {
    const h = xn(n.location, e.isRtl.value), f = n.origin === "overlap" ? h : n.origin === "auto" ? mn(h) : xn(n.origin, e.isRtl.value);
    return h.side === f.side && h.align === gn(f).align ? {
      preferredAnchor: yl(h),
      preferredOrigin: yl(f)
    } : {
      preferredAnchor: h,
      preferredOrigin: f
    };
  }), [o, s, r, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((h) => y(() => {
    const f = parseFloat(n[h]);
    return isNaN(f) ? 1 / 0 : f;
  })), m = y(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const h = n.offset.split(" ").map(parseFloat);
      return h.length < 2 && h.push(0), h;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let g = !1;
  const v = new ResizeObserver(() => {
    g && d();
  });
  K([e.target, e.contentEl], (h, f) => {
    let [b, S] = h, [_, w] = f;
    _ && !Array.isArray(_) && v.unobserve(_), b && !Array.isArray(b) && v.observe(b), w && v.unobserve(w), S && v.observe(S);
  }, {
    immediate: !0
  }), he(() => {
    v.disconnect();
  });
  function d() {
    if (g = !1, requestAnimationFrame(() => g = !0), !e.target.value || !e.contentEl.value)
      return;
    const h = ma(e.target.value), f = _s(e.contentEl.value, e.isRtl.value), b = Qt(e.contentEl.value), S = 12;
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (f.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), f.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const _ = b.reduce((O, p) => {
      const A = p.getBoundingClientRect(), T = new tt({
        x: p === document.documentElement ? 0 : A.x,
        y: p === document.documentElement ? 0 : A.y,
        width: p.clientWidth,
        height: p.clientHeight
      });
      return O ? new tt({
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
    function x(O) {
      const p = new tt(f), A = Dl(O.anchor, h), T = Dl(O.origin, p);
      let {
        x: D,
        y: Q
      } = Cs(A, T);
      switch (O.anchor.side) {
        case "top":
          Q -= m.value[0];
          break;
        case "bottom":
          Q += m.value[0];
          break;
        case "left":
          D -= m.value[0];
          break;
        case "right":
          D += m.value[0];
          break;
      }
      switch (O.anchor.align) {
        case "top":
          Q -= m.value[1];
          break;
        case "bottom":
          Q += m.value[1];
          break;
        case "left":
          D -= m.value[1];
          break;
        case "right":
          D += m.value[1];
          break;
      }
      return p.x += D, p.y += Q, p.width = Math.min(p.width, r.value), p.height = Math.min(p.height, c.value), {
        overflows: bl(p, _),
        x: D,
        y: Q
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
        So("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: O,
        y: p,
        overflows: A
      } = x(w);
      L += O, V += p, f.x += O, f.y += p;
      {
        const T = hl(w.anchor), D = A.x.before || A.x.after, Q = A.y.before || A.y.after;
        let Z = !1;
        if (["x", "y"].forEach((I) => {
          if (I === "x" && D && !$.x || I === "y" && Q && !$.y) {
            const P = {
              anchor: {
                ...w.anchor
              },
              origin: {
                ...w.origin
              }
            }, k = I === "x" ? T === "y" ? gn : mn : T === "y" ? mn : gn;
            P.anchor = k(P.anchor), P.origin = k(P.origin);
            const {
              overflows: B
            } = x(P);
            (B[I].before <= A[I].before && B[I].after <= A[I].after || B[I].before + B[I].after < (A[I].before + A[I].after) / 2) && (w = P, Z = $[I] = !0);
          }
        }), Z)
          continue;
      }
      A.x.before && (L += A.x.before, f.x += A.x.before), A.x.after && (L -= A.x.after, f.x -= A.x.after), A.y.before && (V += A.y.before, f.y += A.y.before), A.y.after && (V -= A.y.after, f.y -= A.y.after);
      {
        const T = bl(f, _);
        C.x = _.width - T.x.before - T.x.after, C.y = _.height - T.y.before - T.y.after, L += T.x.before, f.x += T.x.before, V += T.y.before, f.y += T.y.before;
      }
      break;
    }
    const R = hl(w.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`,
      transformOrigin: `${w.origin.side} ${w.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: U(bn(V)),
      left: e.isRtl.value ? void 0 : U(bn(L)),
      right: e.isRtl.value ? U(bn(-L)) : void 0,
      minWidth: U(R === "y" ? Math.min(o.value, h.width) : o.value),
      maxWidth: U(zl(Me(C.x, o.value === 1 / 0 ? 0 : o.value, r.value))),
      maxHeight: U(zl(Me(C.y, s.value === 1 / 0 ? 0 : s.value, c.value)))
    }), {
      available: C,
      contentBox: f
    };
  }
  return K(() => [a.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => d()), ye(() => {
    const h = d();
    if (!h)
      return;
    const {
      available: f,
      contentBox: b
    } = h;
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
function zl(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Pn = !0;
const Zt = [];
function Vs(e) {
  !Pn || Zt.length ? (Zt.push(e), En()) : (Pn = !1, e(), En());
}
let Hl = -1;
function En() {
  cancelAnimationFrame(Hl), Hl = requestAnimationFrame(() => {
    const e = Zt.shift();
    e && e(), Zt.length ? En() : Pn = !0;
  });
}
const Gt = {
  none: null,
  close: Ps,
  block: Es,
  reposition: Bs
}, Is = E({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Gt
  }
}, "VOverlay-scroll-strategies");
function As(e, n) {
  if (!ve)
    return;
  let t;
  Ne(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = Fn(), await new Promise((l) => setTimeout(l)), t.active && t.run(() => {
      var l;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (l = Gt[e.scrollStrategy]) == null || l.call(Gt, n, e, t);
    }));
  }), he(() => {
    t == null || t.stop();
  });
}
function Ps(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  Xa(e.targetEl.value ?? e.contentEl.value, n);
}
function Es(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, l = [.../* @__PURE__ */ new Set([...Qt(e.targetEl.value, n.contained ? t : void 0), ...Qt(e.contentEl.value, n.contained ? t : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = ((s) => Wn(s) && s)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, r) => {
    s.style.setProperty("--v-body-scroll-x", U(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", U(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", U(a)), s.classList.add("v-overlay-scroll-blocked");
  }), he(() => {
    l.forEach((s, r) => {
      const c = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), m = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), g = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -c, s.scrollTop = -m, s.style.scrollBehavior = g;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Bs(e, n, t) {
  let l = !1, a = -1, i = -1;
  function o(s) {
    Vs(() => {
      var m, g;
      const r = performance.now();
      (g = (m = e.updateLocation).value) == null || g.call(m, s), l = (performance.now() - r) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      Xa(e.targetEl.value ?? e.contentEl.value, (s) => {
        l ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            o(s);
          });
        })) : o(s);
      });
    });
  }), he(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
}
function Xa(e, n) {
  const t = [document, ...Qt(e)];
  t.forEach((l) => {
    l.addEventListener("scroll", n, {
      passive: !0
    });
  }), he(() => {
    t.forEach((l) => {
      l.removeEventListener("scroll", n);
    });
  });
}
const Bn = Symbol.for("vuetify:v-menu"), Ts = E({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Ls(e, n) {
  let t = () => {
  };
  function l(o) {
    t == null || t();
    const s = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((r) => {
      t = oo(s, () => {
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
const Os = E({
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
  ...Ts()
}, "VOverlay-activator");
function $s(e, n) {
  let {
    isActive: t,
    isTop: l
  } = n;
  const a = ce("useActivator"), i = j();
  let o = !1, s = !1, r = !0;
  const c = y(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), m = y(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: g,
    runCloseDelay: v
  } = Ls(e, (C) => {
    C === (e.openOnHover && o || c.value && s) && !(e.openOnHover && t.value && !l.value) && (t.value !== C && (r = !0), t.value = C);
  }), d = j(), h = {
    onClick: (C) => {
      C.stopPropagation(), i.value = C.currentTarget || C.target, t.value || (d.value = [C.clientX, C.clientY]), t.value = !t.value;
    },
    onMouseenter: (C) => {
      var $;
      ($ = C.sourceCapabilities) != null && $.firesTouchEvents || (o = !0, i.value = C.currentTarget || C.target, g());
    },
    onMouseleave: (C) => {
      o = !1, v();
    },
    onFocus: (C) => {
      Kt(C.target, ":focus-visible") !== !1 && (s = !0, C.stopPropagation(), i.value = C.currentTarget || C.target, g());
    },
    onBlur: (C) => {
      s = !1, C.stopPropagation(), v();
    }
  }, f = y(() => {
    const C = {};
    return m.value && (C.onClick = h.onClick), e.openOnHover && (C.onMouseenter = h.onMouseenter, C.onMouseleave = h.onMouseleave), c.value && (C.onFocus = h.onFocus, C.onBlur = h.onBlur), C;
  }), b = y(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      o = !0, g();
    }, C.onMouseleave = () => {
      o = !1, v();
    }), c.value && (C.onFocusin = () => {
      s = !0, g();
    }, C.onFocusout = () => {
      s = !1, v();
    }), e.closeOnContentClick) {
      const $ = me(Bn, null);
      C.onClick = () => {
        t.value = !1, $ == null || $.closeParents();
      };
    }
    return C;
  }), S = y(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      r && (o = !0, r = !1, g());
    }, C.onMouseleave = () => {
      o = !1, v();
    }), C;
  });
  K(l, (C) => {
    C && (e.openOnHover && !o && (!c.value || !s) || c.value && !s && (!e.openOnHover || !o)) && (t.value = !1);
  }), K(t, (C) => {
    C || setTimeout(() => {
      d.value = void 0;
    });
  }, {
    flush: "post"
  });
  const _ = _n();
  Ne(() => {
    _.value && ye(() => {
      i.value = _.el;
    });
  });
  const w = _n(), x = y(() => e.target === "cursor" && d.value ? d.value : w.value ? w.el : Qa(e.target, a) || i.value), L = y(() => Array.isArray(x.value) ? void 0 : x.value);
  let V;
  return K(() => !!e.activator, (C) => {
    C && ve ? (V = Fn(), V.run(() => {
      Fs(e, a, {
        activatorEl: i,
        activatorEvents: f
      });
    })) : V && V.stop();
  }, {
    flush: "post",
    immediate: !0
  }), he(() => {
    V == null || V.stop();
  }), {
    activatorEl: i,
    activatorRef: _,
    target: x,
    targetEl: L,
    targetRef: w,
    activatorEvents: f,
    contentEvents: b,
    scrimEvents: S
  };
}
function Fs(e, n, t) {
  let {
    activatorEl: l,
    activatorEvents: a
  } = t;
  K(() => e.activator, (r, c) => {
    if (c && r !== c) {
      const m = s(c);
      m && o(m);
    }
    r && ye(() => i());
  }, {
    immediate: !0
  }), K(() => e.activatorProps, () => {
    i();
  }), he(() => {
    o();
  });
  function i() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    r && uo(r, J(a.value, c));
  }
  function o() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    r && co(r, J(a.value, c));
  }
  function s() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = Qa(r, n);
    return l.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, l.value;
  }
}
function Qa(e, n) {
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
const cn = ["sm", "md", "lg", "xl", "xxl"], Rs = Symbol.for("vuetify:display"), Ms = E({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function tl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  const t = me(Rs);
  if (!t)
    throw new Error("Could not find Vuetify display injection");
  const l = y(() => {
    if (e.mobile != null)
      return e.mobile;
    if (!e.mobileBreakpoint)
      return t.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < i;
  }), a = y(() => n ? {
    [`${n}--mobile`]: l.value
  } : {});
  return {
    ...t,
    displayClasses: a,
    mobile: l
  };
}
function Ns() {
  if (!ve)
    return G(!1);
  const {
    ssr: e
  } = tl();
  if (e) {
    const n = G(!1);
    return ze(() => {
      n.value = !0;
    }), n;
  } else
    return G(!0);
}
const Ds = E({
  eager: Boolean
}, "lazy");
function zs(e, n) {
  const t = G(!1), l = y(() => t.value || e.eager || n.value);
  K(n, () => t.value = !0);
  function a() {
    e.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: l,
    onAfterLeave: a
  };
}
function nl() {
  const n = ce("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const jl = Symbol.for("vuetify:stack"), bt = nn([]);
function Hs(e, n, t) {
  const l = ce("useStack"), a = !t, i = me(jl, void 0), o = nn({
    activeChildren: /* @__PURE__ */ new Set()
  });
  _e(jl, o);
  const s = G(+n.value);
  Ue(e, () => {
    var g;
    const m = (g = bt.at(-1)) == null ? void 0 : g[1];
    s.value = m ? m + 10 : +n.value, a && bt.push([l.uid, s.value]), i == null || i.activeChildren.add(l.uid), he(() => {
      if (a) {
        const v = pe(bt).findIndex((d) => d[0] === l.uid);
        bt.splice(v, 1);
      }
      i == null || i.activeChildren.delete(l.uid);
    });
  });
  const r = G(!0);
  a && Ne(() => {
    var g;
    const m = ((g = bt.at(-1)) == null ? void 0 : g[0]) === l.uid;
    setTimeout(() => r.value = m);
  });
  const c = y(() => !o.activeChildren.size);
  return {
    globalTop: Rn(r),
    localTop: c,
    stackStyles: y(() => ({
      zIndex: s.value
    }))
  };
}
function js(e) {
  return {
    teleportTarget: y(() => {
      const t = e.value;
      if (t === !0 || !ve)
        return;
      const l = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (l == null) {
        ln(`Unable to locate target ${t}`);
        return;
      }
      let a = l.querySelector(":scope > .v-overlay-container");
      return a || (a = document.createElement("div"), a.className = "v-overlay-container", l.appendChild(a)), a;
    })
  };
}
function Ws() {
  return !0;
}
function Ja(e, n, t) {
  if (!e || Za(e, t) === !1)
    return !1;
  const l = ha(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const a = (typeof t.value == "object" && t.value.include || (() => []))();
  return a.push(n), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Za(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Ws)(e);
}
function Gs(e, n, t) {
  const l = typeof t.value == "function" ? t.value : t.value.handler;
  n._clickOutside.lastMousedownWasOutside && Ja(e, n, t) && setTimeout(() => {
    Za(e, t) && l && l(e);
  }, 0);
}
function Wl(e, n) {
  const t = ha(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Us = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (a) => Gs(a, e, n), l = (a) => {
      e._clickOutside.lastMousedownWasOutside = Ja(a, e, n);
    };
    Wl(e, (a) => {
      a.addEventListener("click", t, !0), a.addEventListener("mousedown", l, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: l
    };
  },
  unmounted(e, n) {
    e._clickOutside && (Wl(e, (t) => {
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
function qs(e) {
  const {
    modelValue: n,
    color: t,
    ...l
  } = e;
  return u(nt, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", J({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, l), null)]
  });
}
const ll = E({
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
  ...Os(),
  ...X(),
  ...qe(),
  ...Ds(),
  ...ks(),
  ...Is(),
  ...de(),
  ...Ot()
}, "VOverlay"), en = N()({
  name: "VOverlay",
  directives: {
    ClickOutside: Us
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...ll()
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
    const i = ue(e, "modelValue"), o = y({
      get: () => i.value,
      set: (z) => {
        z && e.disabled || (i.value = z);
      }
    }), {
      teleportTarget: s
    } = js(y(() => e.attach || e.contained)), {
      themeClasses: r
    } = ge(e), {
      rtlClasses: c,
      isRtl: m
    } = He(), {
      hasContent: g,
      onAfterLeave: v
    } = zs(e, o), d = Be(y(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: h,
      localTop: f,
      stackStyles: b
    } = Hs(o, M(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: S,
      activatorRef: _,
      target: w,
      targetEl: x,
      targetRef: L,
      activatorEvents: V,
      contentEvents: C,
      scrimEvents: $
    } = $s(e, {
      isActive: o,
      isTop: f
    }), {
      dimensionStyles: H
    } = Ke(e), R = Ns(), {
      scopeId: O
    } = nl();
    K(() => e.disabled, (z) => {
      z && (o.value = !1);
    });
    const p = j(), A = j(), T = j(), {
      contentStyles: D,
      updateLocation: Q
    } = ws(e, {
      isRtl: m,
      contentEl: T,
      target: w,
      isActive: o
    });
    As(e, {
      root: p,
      contentEl: T,
      targetEl: x,
      isActive: o,
      updateLocation: Q
    });
    function Z(z) {
      a("click:outside", z), e.persistent ? F() : o.value = !1;
    }
    function I(z) {
      return o.value && h.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || z.target === A.value);
    }
    ve && K(o, (z) => {
      z ? window.addEventListener("keydown", P) : window.removeEventListener("keydown", P);
    }, {
      immediate: !0
    }), Ee(() => {
      ve && window.removeEventListener("keydown", P);
    });
    function P(z) {
      var te, oe;
      z.key === "Escape" && h.value && (e.persistent ? F() : (o.value = !1, (te = T.value) != null && te.contains(document.activeElement) && ((oe = S.value) == null || oe.focus())));
    }
    const k = cs();
    Ue(() => e.closeOnBack, () => {
      ds(k, (z) => {
        h.value && o.value ? (z(!1), e.persistent ? F() : o.value = !1) : z();
      });
    });
    const B = j();
    K(() => o.value && (e.absolute || e.contained) && s.value == null, (z) => {
      if (z) {
        const te = ba(p.value);
        te && te !== document.scrollingElement && (B.value = te.scrollTop);
      }
    });
    function F() {
      e.noClickAnimation || T.value && rt(T.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Xt
      });
    }
    function Y() {
      a("afterEnter");
    }
    function ee() {
      v(), a("afterLeave");
    }
    return q(() => {
      var z;
      return u(se, null, [(z = t.activator) == null ? void 0 : z.call(t, {
        isActive: o.value,
        targetRef: L,
        props: J({
          ref: _
        }, V.value, e.activatorProps)
      }), R.value && g.value && u(Qi, {
        disabled: !s.value,
        to: s.value
      }, {
        default: () => [u("div", J({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": o.value,
            "v-overlay--contained": e.contained
          }, r.value, c.value, e.class],
          style: [b.value, {
            "--v-overlay-opacity": e.opacity,
            top: U(B.value)
          }, e.style],
          ref: p
        }, O, l), [u(qs, J({
          color: d,
          modelValue: o.value && !!e.scrim,
          ref: A
        }, $.value), null), u(We, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: w.value,
          onAfterEnter: Y,
          onAfterLeave: ee
        }, {
          default: () => {
            var te;
            return [we(u("div", J({
              ref: T,
              class: ["v-overlay__content", e.contentClass],
              style: [H.value, D.value]
            }, C.value, e.contentProps), [(te = t.default) == null ? void 0 : te.call(t, {
              isActive: o
            })]), [[gt, o.value], [at("click-outside"), {
              handler: Z,
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
      globalTop: h,
      localTop: f,
      updateLocation: Q
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
function dn(e) {
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
          const m = c.slice();
          for (; m.length; ) {
            const g = m.shift(), v = Cn(g.value, i);
            if (v)
              return v;
            const d = g.value && g.value[Sn];
            d && m.push(...d);
          }
        }
      }
    }
  });
}
const Ks = E({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...ll({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: Gn
    },
    zIndex: 2400
  })
}, "VDialog"), Ys = N()({
  name: "VDialog",
  props: Ks(),
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
    } = nl(), o = j();
    function s(m) {
      var d, h;
      const g = m.relatedTarget, v = m.target;
      if (g !== v && ((d = o.value) != null && d.contentEl) && // We're the topmost dialog
      ((h = o.value) != null && h.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(v) && // It isn't inside the dialog body
      !o.value.contentEl.contains(v)) {
        const f = _t(o.value.contentEl);
        if (!f.length)
          return;
        const b = f[0], S = f[f.length - 1];
        g === b ? S.focus() : b.focus();
      }
    }
    ve && K(() => a.value && e.retainFocus, (m) => {
      m ? document.addEventListener("focusin", s) : document.removeEventListener("focusin", s);
    }, {
      immediate: !0
    });
    function r() {
      var m;
      (m = o.value) != null && m.contentEl && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      t("afterLeave");
    }
    return K(a, async (m) => {
      var g;
      m || (await ye(), (g = o.value.activatorEl) == null || g.focus({
        preventScroll: !0
      }));
    }), q(() => {
      const m = en.filterProps(e), g = J({
        "aria-haspopup": "dialog",
        "aria-expanded": String(a.value)
      }, e.activatorProps), v = J({
        tabindex: -1
      }, e.contentProps);
      return u(en, J({
        ref: o,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, m, {
        modelValue: a.value,
        "onUpdate:modelValue": (d) => a.value = d,
        "aria-modal": "true",
        activatorProps: g,
        contentProps: v,
        role: "dialog",
        onAfterEnter: r,
        onAfterLeave: c
      }, i), {
        activator: l.activator,
        default: function() {
          for (var d = arguments.length, h = new Array(d), f = 0; f < d; f++)
            h[f] = arguments[f];
          return u(re, {
            root: "VDialog"
          }, {
            default: () => {
              var b;
              return [(b = l.default) == null ? void 0 : b.call(l, ...h)];
            }
          });
        }
      });
    }), dn({}, o);
  }
}), Xs = E({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...X(),
  ...ie()
}, "VContainer"), ei = N()({
  name: "VContainer",
  props: Xs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: l
    } = He();
    return q(() => u(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, l.value, e.class],
      style: e.style
    }, t)), {};
  }
}), ti = cn.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), ni = cn.reduce((e, n) => {
  const t = "offset" + Bt(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), li = cn.reduce((e, n) => {
  const t = "order" + Bt(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Gl = {
  col: Object.keys(ti),
  offset: Object.keys(ni),
  order: Object.keys(li)
};
function Qs(e, n, t) {
  let l = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return e === "col" && (l = "v-" + l), e === "col" && (t === "" || t === !0) || (l += `-${t}`), l.toLowerCase();
  }
}
const Js = ["auto", "start", "end", "center", "baseline", "stretch"], Zs = E({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...ti,
  offset: {
    type: [String, Number],
    default: null
  },
  ...ni,
  order: {
    type: [String, Number],
    default: null
  },
  ...li,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => Js.includes(e)
  },
  ...X(),
  ...ie()
}, "VCol"), ct = N()({
  name: "VCol",
  props: Zs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = y(() => {
      const a = [];
      let i;
      for (i in Gl)
        Gl[i].forEach((s) => {
          const r = e[s], c = Qs(i, s, r);
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
      return mt(e.tag, {
        class: [l.value, e.class],
        style: e.style
      }, (a = t.default) == null ? void 0 : a.call(t));
    };
  }
}), al = ["start", "end", "center"], ai = ["space-between", "space-around", "space-evenly"];
function il(e, n) {
  return cn.reduce((t, l) => {
    const a = e + Bt(l);
    return t[a] = n(), t;
  }, {});
}
const er = [...al, "baseline", "stretch"], ii = (e) => er.includes(e), oi = il("align", () => ({
  type: String,
  default: null,
  validator: ii
})), tr = [...al, ...ai], si = (e) => tr.includes(e), ri = il("justify", () => ({
  type: String,
  default: null,
  validator: si
})), nr = [...al, ...ai, "stretch"], ui = (e) => nr.includes(e), ci = il("alignContent", () => ({
  type: String,
  default: null,
  validator: ui
})), Ul = {
  align: Object.keys(oi),
  justify: Object.keys(ri),
  alignContent: Object.keys(ci)
}, lr = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function ar(e, n, t) {
  let l = lr[e];
  if (t != null) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return l += `-${t}`, l.toLowerCase();
  }
}
const ir = E({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: ii
  },
  ...oi,
  justify: {
    type: String,
    default: null,
    validator: si
  },
  ...ri,
  alignContent: {
    type: String,
    default: null,
    validator: ui
  },
  ...ci,
  ...X(),
  ...ie()
}, "VRow"), tn = N()({
  name: "VRow",
  props: ir(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = y(() => {
      const a = [];
      let i;
      for (i in Ul)
        Ul[i].forEach((o) => {
          const s = e[o], r = ar(i, o, s);
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
      return mt(e.tag, {
        class: ["v-row", l.value, e.class],
        style: e.style
      }, (a = t.default) == null ? void 0 : a.call(t));
    };
  }
}), or = jn("v-spacer", "div", "VSpacer"), Tn = Symbol.for("vuetify:list");
function di() {
  const e = me(Tn, {
    hasPrepend: G(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: G(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return _e(Tn, n), e;
}
function fi() {
  return me(Tn, null);
}
const ol = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: l,
        value: a,
        activated: i
      } = t;
      return l = pe(l), e && !a && i.size === 1 && i.has(l) || (a ? i.add(l) : i.delete(l)), i;
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
}, vi = (e) => {
  const n = ol(e);
  return {
    activate: (l) => {
      let {
        activated: a,
        id: i,
        ...o
      } = l;
      i = pe(i);
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
}, sr = (e) => {
  const n = ol(e);
  return {
    activate: (l) => {
      let {
        id: a,
        activated: i,
        children: o,
        ...s
      } = l;
      return a = pe(a), o.has(a) ? i : n.activate({
        id: a,
        activated: i,
        children: o,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, rr = (e) => {
  const n = vi(e);
  return {
    activate: (l) => {
      let {
        id: a,
        activated: i,
        children: o,
        ...s
      } = l;
      return a = pe(a), o.has(a) ? i : n.activate({
        id: a,
        activated: i,
        children: o,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, ur = {
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
}, mi = {
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
}, cr = {
  open: mi.open,
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
}, sl = (e) => {
  const n = {
    select: (t) => {
      let {
        id: l,
        value: a,
        selected: i
      } = t;
      if (l = pe(l), e && !a) {
        const o = Array.from(i.entries()).reduce((s, r) => {
          let [c, m] = r;
          return m === "on" && s.push(c), s;
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
}, gi = (e) => {
  const n = sl(e);
  return {
    select: (l) => {
      let {
        selected: a,
        id: i,
        ...o
      } = l;
      i = pe(i);
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
}, dr = (e) => {
  const n = sl(e);
  return {
    select: (l) => {
      let {
        id: a,
        selected: i,
        children: o,
        ...s
      } = l;
      return a = pe(a), o.has(a) ? i : n.select({
        id: a,
        selected: i,
        children: o,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, fr = (e) => {
  const n = gi(e);
  return {
    select: (l) => {
      let {
        id: a,
        selected: i,
        children: o,
        ...s
      } = l;
      return a = pe(a), o.has(a) ? i : n.select({
        id: a,
        selected: i,
        children: o,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, vr = (e) => {
  const n = {
    select: (t) => {
      let {
        id: l,
        value: a,
        selected: i,
        children: o,
        parents: s
      } = t;
      l = pe(l);
      const r = new Map(i), c = [l];
      for (; c.length; ) {
        const g = c.shift();
        i.set(g, a ? "on" : "off"), o.has(g) && c.push(...o.get(g));
      }
      let m = s.get(l);
      for (; m; ) {
        const g = o.get(m), v = g.every((h) => i.get(h) === "on"), d = g.every((h) => !i.has(h) || i.get(h) === "off");
        i.set(m, v ? "on" : d ? "off" : "indeterminate"), m = s.get(m);
      }
      return e && !a && Array.from(i.entries()).reduce((v, d) => {
        let [h, f] = d;
        return f === "on" && v.push(h), v;
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
}, At = Symbol.for("vuetify:nested"), yi = {
  id: G(),
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
}, mr = E({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), gr = (e) => {
  let n = !1;
  const t = j(/* @__PURE__ */ new Map()), l = j(/* @__PURE__ */ new Map()), a = ue(e, "opened", e.opened, (d) => new Set(d), (d) => [...d.values()]), i = y(() => {
    if (typeof e.activeStrategy == "object")
      return e.activeStrategy;
    if (typeof e.activeStrategy == "function")
      return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return sr(e.mandatory);
      case "single-leaf":
        return rr(e.mandatory);
      case "independent":
        return ol(e.mandatory);
      case "single-independent":
      default:
        return vi(e.mandatory);
    }
  }), o = y(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    if (typeof e.selectStrategy == "function")
      return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return fr(e.mandatory);
      case "leaf":
        return dr(e.mandatory);
      case "independent":
        return sl(e.mandatory);
      case "single-independent":
        return gi(e.mandatory);
      case "classic":
      default:
        return vr(e.mandatory);
    }
  }), s = y(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return cr;
      case "single":
        return ur;
      case "multiple":
      default:
        return mi;
    }
  }), r = ue(e, "activated", e.activated, (d) => i.value.in(d, t.value, l.value), (d) => i.value.out(d, t.value, l.value)), c = ue(e, "selected", e.selected, (d) => o.value.in(d, t.value, l.value), (d) => o.value.out(d, t.value, l.value));
  Ee(() => {
    n = !0;
  });
  function m(d) {
    const h = [];
    let f = d;
    for (; f != null; )
      h.unshift(f), f = l.value.get(f);
    return h;
  }
  const g = ce("nested"), v = {
    id: G(),
    root: {
      opened: a,
      activatable: M(e, "activatable"),
      selectable: M(e, "selectable"),
      activated: r,
      selected: c,
      selectedValues: y(() => {
        const d = [];
        for (const [h, f] of c.value.entries())
          f === "on" && d.push(h);
        return d;
      }),
      register: (d, h, f) => {
        h && d !== h && l.value.set(d, h), f && t.value.set(d, []), h != null && t.value.set(h, [...t.value.get(h) || [], d]);
      },
      unregister: (d) => {
        if (n)
          return;
        t.value.delete(d);
        const h = l.value.get(d);
        if (h) {
          const f = t.value.get(h) ?? [];
          t.value.set(h, f.filter((b) => b !== d));
        }
        l.value.delete(d), a.value.delete(d);
      },
      open: (d, h, f) => {
        g.emit("click:open", {
          id: d,
          value: h,
          path: m(d),
          event: f
        });
        const b = s.value.open({
          id: d,
          value: h,
          opened: new Set(a.value),
          children: t.value,
          parents: l.value,
          event: f
        });
        b && (a.value = b);
      },
      openOnSelect: (d, h, f) => {
        const b = s.value.select({
          id: d,
          value: h,
          selected: new Map(c.value),
          opened: new Set(a.value),
          children: t.value,
          parents: l.value,
          event: f
        });
        b && (a.value = b);
      },
      select: (d, h, f) => {
        g.emit("click:select", {
          id: d,
          value: h,
          path: m(d),
          event: f
        });
        const b = o.value.select({
          id: d,
          value: h,
          selected: new Map(c.value),
          children: t.value,
          parents: l.value,
          event: f
        });
        b && (c.value = b), v.root.openOnSelect(d, h, f);
      },
      activate: (d, h, f) => {
        if (!e.activatable)
          return v.root.select(d, !0, f);
        g.emit("click:activate", {
          id: d,
          value: h,
          path: m(d),
          event: f
        });
        const b = i.value.activate({
          id: d,
          value: h,
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
  return _e(At, v), v.root;
}, hi = (e, n) => {
  const t = me(At, yi), l = Symbol(Le()), a = y(() => e.value !== void 0 ? e.value : l), i = {
    ...t,
    id: a,
    open: (o, s) => t.root.open(a.value, o, s),
    openOnSelect: (o, s) => t.root.openOnSelect(a.value, o, s),
    isOpen: y(() => t.root.opened.value.has(a.value)),
    parent: y(() => t.root.parents.value.get(a.value)),
    activate: (o, s) => t.root.activate(a.value, o, s),
    isActivated: y(() => t.root.activated.value.has(pe(a.value))),
    select: (o, s) => t.root.select(a.value, o, s),
    isSelected: y(() => t.root.selected.value.get(pe(a.value)) === "on"),
    isIndeterminate: y(() => t.root.selected.value.get(a.value) === "indeterminate"),
    isLeaf: y(() => !t.root.children.value.get(a.value)),
    isGroupActivator: t.isGroupActivator
  };
  return !t.isGroupActivator && t.root.register(a.value, t.id.value, n), Ee(() => {
    !t.isGroupActivator && t.root.unregister(a.value);
  }), n && _e(At, i), i;
}, yr = () => {
  const e = me(At, yi);
  _e(At, {
    ...e,
    isGroupActivator: !0
  });
}, hr = Lt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return yr(), () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), br = E({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: ne,
    default: "$collapse"
  },
  expandIcon: {
    type: ne,
    default: "$expand"
  },
  prependIcon: ne,
  appendIcon: ne,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...X(),
  ...ie()
}, "VListGroup"), ql = N()({
  name: "VListGroup",
  props: br(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: l,
      open: a,
      id: i
    } = hi(M(e, "value"), !0), o = y(() => `v-list-group--id-${String(i.value)}`), s = fi(), {
      isBooted: r
    } = Ba();
    function c(d) {
      d.stopPropagation(), a(!l.value, d);
    }
    const m = y(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), g = y(() => l.value ? e.collapseIcon : e.expandIcon), v = y(() => ({
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
    return q(() => u(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": l.value
      }, e.class],
      style: e.style
    }, {
      default: () => [t.activator && u(re, {
        defaults: v.value
      }, {
        default: () => [u(hr, null, {
          default: () => [t.activator({
            props: m.value,
            isOpen: l.value
          })]
        })]
      }), u(We, {
        transition: {
          component: wa
        },
        disabled: !r.value
      }, {
        default: () => {
          var d;
          return [we(u("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(d = t.default) == null ? void 0 : d.call(t)]), [[gt, l.value]])];
        }
      })]
    })), {
      isOpen: l
    };
  }
}), Sr = E({
  opacity: [Number, String],
  ...X(),
  ...ie()
}, "VListItemSubtitle"), Cr = N()({
  name: "VListItemSubtitle",
  props: Sr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return q(() => u(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), kr = jn("v-list-item-title"), wr = E({
  start: Boolean,
  end: Boolean,
  icon: ne,
  image: String,
  text: String,
  ...X(),
  ...Oe(),
  ...Ve(),
  ...Rt(),
  ...ie(),
  ...de(),
  ...Ze({
    variant: "flat"
  })
}, "VAvatar"), lt = N()({
  name: "VAvatar",
  props: wr(),
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
    } = Ft(e), {
      densityClasses: s
    } = je(e), {
      roundedClasses: r
    } = Ie(e), {
      sizeClasses: c,
      sizeStyles: m
    } = Mt(e);
    return q(() => u(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, l.value, a.value, s.value, r.value, c.value, o.value, e.class],
      style: [i.value, m.value, e.style]
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
      }) : e.image ? u(qn, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? u(le, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, $t(!1, "v-avatar")]
    })), {};
  }
}), pr = E({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: ne,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: ne,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: ke(),
  onClickOnce: ke(),
  ...Ye(),
  ...X(),
  ...Oe(),
  ...qe(),
  ...Qe(),
  ...Ve(),
  ...un(),
  ...ie(),
  ...de(),
  ...Ze({
    variant: "text"
  })
}, "VListItem"), Pt = N()({
  name: "VListItem",
  directives: {
    Ripple: Nt
  },
  props: pr(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: l,
      emit: a
    } = n;
    const i = rn(e, t), o = y(() => e.value === void 0 ? i.href.value : e.value), {
      activate: s,
      isActivated: r,
      select: c,
      isSelected: m,
      isIndeterminate: g,
      isGroupActivator: v,
      root: d,
      parent: h,
      openOnSelect: f
    } = hi(o, !1), b = fi(), S = y(() => {
      var k;
      return e.active !== !1 && (e.active || ((k = i.isActive) == null ? void 0 : k.value) || (d.activatable.value ? r.value : m.value));
    }), _ = y(() => e.link !== !1 && i.isLink.value), w = y(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || !!b && (d.selectable.value || d.activatable.value || e.value != null))), x = y(() => e.rounded || e.nav), L = y(() => e.color ?? e.activeColor), V = y(() => ({
      color: S.value ? L.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    K(() => {
      var k;
      return (k = i.isActive) == null ? void 0 : k.value;
    }, (k) => {
      k && h.value != null && d.open(h.value, !0), k && f(k);
    }, {
      immediate: !0
    });
    const {
      themeClasses: C
    } = ge(e), {
      borderClasses: $
    } = Xe(e), {
      colorClasses: H,
      colorStyles: R,
      variantClasses: O
    } = Ft(V), {
      densityClasses: p
    } = je(e), {
      dimensionStyles: A
    } = Ke(e), {
      elevationClasses: T
    } = Je(e), {
      roundedClasses: D
    } = Ie(x), Q = y(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), Z = y(() => ({
      isActive: S.value,
      select: c,
      isSelected: m.value,
      isIndeterminate: g.value
    }));
    function I(k) {
      var B;
      a("click", k), w.value && ((B = i.navigate) == null || B.call(i, k), !v && (d.activatable.value ? s(!r.value, k) : (d.selectable.value || e.value != null) && c(!m.value, k)));
    }
    function P(k) {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), I(k));
    }
    return q(() => {
      const k = _.value ? "a" : e.tag, B = l.title || e.title != null, F = l.subtitle || e.subtitle != null, Y = !!(e.appendAvatar || e.appendIcon), ee = !!(Y || l.append), z = !!(e.prependAvatar || e.prependIcon), te = !!(z || l.prepend);
      return b == null || b.updateHasPrepend(te), e.activeColor && Co("active-color", ["color", "base-color"]), we(u(k, {
        class: ["v-list-item", {
          "v-list-item--active": S.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": w.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !te && (b == null ? void 0 : b.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && S.value
        }, C.value, $.value, H.value, p.value, T.value, Q.value, D.value, O.value, e.class],
        style: [R.value, A.value, e.style],
        href: i.href.value,
        tabindex: w.value ? b ? -2 : 0 : void 0,
        onClick: I,
        onKeydown: w.value && !_.value && P
      }, {
        default: () => {
          var oe;
          return [$t(w.value || S.value, "v-list-item"), te && u("div", {
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
              return [(fe = l.prepend) == null ? void 0 : fe.call(l, Z.value)];
            }
          }) : u(se, null, [e.prependAvatar && u(lt, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && u(le, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)]), u("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [B && u(kr, {
            key: "title"
          }, {
            default: () => {
              var fe;
              return [((fe = l.title) == null ? void 0 : fe.call(l, {
                title: e.title
              })) ?? e.title];
            }
          }), F && u(Cr, {
            key: "subtitle"
          }, {
            default: () => {
              var fe;
              return [((fe = l.subtitle) == null ? void 0 : fe.call(l, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (oe = l.default) == null ? void 0 : oe.call(l, Z.value)]), ee && u("div", {
            key: "append",
            class: "v-list-item__append"
          }, [l.append ? u(re, {
            key: "append-defaults",
            disabled: !Y,
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
              return [(fe = l.append) == null ? void 0 : fe.call(l, Z.value)];
            }
          }) : u(se, null, [e.appendIcon && u(le, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(lt, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[at("ripple"), w.value && e.ripple]]);
    }), {
      activate: s,
      isActivated: r,
      isGroupActivator: v,
      isSelected: m,
      list: b,
      select: c
    };
  }
}), _r = E({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...X(),
  ...ie()
}, "VListSubheader"), xr = N()({
  name: "VListSubheader",
  props: _r(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: l,
      textColorStyles: a
    } = De(M(e, "color"));
    return q(() => {
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
}), Vr = E({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...X(),
  ...de()
}, "VDivider"), Ir = N()({
  name: "VDivider",
  props: Vr(),
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
    } = De(M(e, "color")), s = y(() => {
      const r = {};
      return e.length && (r[e.vertical ? "height" : "width"] = U(e.length)), e.thickness && (r[e.vertical ? "borderRightWidth" : "borderTopWidth"] = U(e.thickness)), r;
    });
    return q(() => {
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
}), Ar = E({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), bi = N()({
  name: "VListChildren",
  props: Ar(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return di(), () => {
      var l, a;
      return ((l = t.default) == null ? void 0 : l.call(t)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
        var v, d;
        let {
          children: o,
          props: s,
          type: r,
          raw: c
        } = i;
        if (r === "divider")
          return ((v = t.divider) == null ? void 0 : v.call(t, {
            props: s
          })) ?? u(Ir, s, null);
        if (r === "subheader")
          return ((d = t.subheader) == null ? void 0 : d.call(t, {
            props: s
          })) ?? u(xr, s, null);
        const m = {
          subtitle: t.subtitle ? (h) => {
            var f;
            return (f = t.subtitle) == null ? void 0 : f.call(t, {
              ...h,
              item: c
            });
          } : void 0,
          prepend: t.prepend ? (h) => {
            var f;
            return (f = t.prepend) == null ? void 0 : f.call(t, {
              ...h,
              item: c
            });
          } : void 0,
          append: t.append ? (h) => {
            var f;
            return (f = t.append) == null ? void 0 : f.call(t, {
              ...h,
              item: c
            });
          } : void 0,
          title: t.title ? (h) => {
            var f;
            return (f = t.title) == null ? void 0 : f.call(t, {
              ...h,
              item: c
            });
          } : void 0
        }, g = ql.filterProps(s);
        return o ? u(ql, J({
          value: s == null ? void 0 : s.value
        }, g), {
          activator: (h) => {
            let {
              props: f
            } = h;
            const b = {
              ...s,
              ...f,
              value: e.returnObject ? c : s.value
            };
            return t.header ? t.header({
              props: b
            }) : u(Pt, b, m);
          },
          default: () => u(bi, {
            items: o,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: s
        }) : u(Pt, J(s, {
          value: e.returnObject ? c : s.value
        }), m);
      }));
    };
  }
}), Si = E({
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
    default: yt
  }
}, "list-items");
function Ln(e, n) {
  const t = $e(n, e.itemTitle, n), l = $e(n, e.itemValue, t), a = $e(n, e.itemChildren), i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? ht(n, ["children"]) : n : void 0 : $e(n, e.itemProps), o = {
    title: t,
    value: l,
    ...i
  };
  return {
    title: String(o.title ?? ""),
    value: o.value,
    props: o,
    children: Array.isArray(a) ? Ci(e, a) : void 0,
    raw: n
  };
}
function Ci(e, n) {
  const t = [];
  for (const l of n)
    t.push(Ln(e, l));
  return t;
}
function Pr(e) {
  const n = y(() => Ci(e, e.items)), t = y(() => n.value.some((i) => i.value === null));
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
function Er(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Br(e, n) {
  const t = $e(n, e.itemType, "item"), l = Er(n) ? n : $e(n, e.itemTitle), a = $e(n, e.itemValue, void 0), i = $e(n, e.itemChildren), o = e.itemProps === !0 ? ht(n, ["children"]) : $e(n, e.itemProps), s = {
    title: l,
    value: a,
    ...o
  };
  return {
    type: t,
    title: s.title,
    value: s.value,
    props: s,
    children: t === "item" && i ? ki(e, i) : void 0,
    raw: n
  };
}
function ki(e, n) {
  const t = [];
  for (const l of n)
    t.push(Br(e, l));
  return t;
}
function Tr(e) {
  return {
    items: y(() => ki(e, e.items))
  };
}
const Lr = E({
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
  "onClick:open": ke(),
  "onClick:select": ke(),
  ...mr({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...Ye(),
  ...X(),
  ...Oe(),
  ...qe(),
  ...Qe(),
  itemType: {
    type: String,
    default: "type"
  },
  ...Si(),
  ...Ve(),
  ...ie(),
  ...de(),
  ...Ze({
    variant: "text"
  })
}, "VList"), Or = N()({
  name: "VList",
  props: Lr(),
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
    } = Tr(e), {
      themeClasses: a
    } = ge(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Be(M(e, "bgColor")), {
      borderClasses: s
    } = Xe(e), {
      densityClasses: r
    } = je(e), {
      dimensionStyles: c
    } = Ke(e), {
      elevationClasses: m
    } = Je(e), {
      roundedClasses: g
    } = Ie(e), {
      children: v,
      open: d,
      parents: h,
      select: f
    } = gr(e), b = y(() => e.lines ? `v-list--${e.lines}-line` : void 0), S = M(e, "activeColor"), _ = M(e, "baseColor"), w = M(e, "color");
    di(), it({
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
    const x = G(!1), L = j();
    function V(p) {
      x.value = !0;
    }
    function C(p) {
      x.value = !1;
    }
    function $(p) {
      var A;
      !x.value && !(p.relatedTarget && ((A = L.value) != null && A.contains(p.relatedTarget))) && O();
    }
    function H(p) {
      const A = p.target;
      if (!(!L.value || ["INPUT", "TEXTAREA"].includes(A.tagName))) {
        if (p.key === "ArrowDown")
          O("next");
        else if (p.key === "ArrowUp")
          O("prev");
        else if (p.key === "Home")
          O("first");
        else if (p.key === "End")
          O("last");
        else
          return;
        p.preventDefault();
      }
    }
    function R(p) {
      x.value = !0;
    }
    function O(p) {
      if (L.value)
        return qt(L.value, p);
    }
    return q(() => u(e.tag, {
      ref: L,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, a.value, i.value, s.value, r.value, m.value, b.value, g.value, e.class],
      style: [o.value, c.value, e.style],
      tabindex: e.disabled || x.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: V,
      onFocusout: C,
      onFocus: $,
      onKeydown: H,
      onMousedown: R
    }, {
      default: () => [u(bi, {
        items: l.value,
        returnObject: e.returnObject
      }, t)]
    })), {
      open: d,
      select: f,
      focus: O,
      children: v,
      parents: h
    };
  }
}), $r = E({
  text: String,
  onClick: ke(),
  ...X(),
  ...de()
}, "VLabel"), wi = N()({
  name: "VLabel",
  props: $r(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return q(() => {
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
}), pi = Symbol.for("vuetify:selection-control-group"), _i = E({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: ne,
  trueIcon: ne,
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
    default: yt
  },
  ...X(),
  ...Oe(),
  ...de()
}, "SelectionControlGroup"), Fr = E({
  ..._i({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
N()({
  name: "VSelectionControlGroup",
  props: Fr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ue(e, "modelValue"), a = Le(), i = y(() => e.id || `v-selection-control-group-${a}`), o = y(() => e.name || i.value), s = /* @__PURE__ */ new Set();
    return _e(pi, {
      modelValue: l,
      forceUpdate: () => {
        s.forEach((r) => r());
      },
      onForceUpdate: (r) => {
        s.add(r), he(() => {
          s.delete(r);
        });
      }
    }), it({
      [e.defaultsTarget]: {
        color: M(e, "color"),
        disabled: M(e, "disabled"),
        density: M(e, "density"),
        error: M(e, "error"),
        inline: M(e, "inline"),
        modelValue: l,
        multiple: y(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)),
        name: o,
        falseIcon: M(e, "falseIcon"),
        trueIcon: M(e, "trueIcon"),
        readonly: M(e, "readonly"),
        ripple: M(e, "ripple"),
        type: M(e, "type"),
        valueComparator: M(e, "valueComparator")
      }
    }), q(() => {
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
const xi = E({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...X(),
  ..._i()
}, "VSelectionControl");
function Rr(e) {
  const n = me(pi, void 0), {
    densityClasses: t
  } = je(e), l = ue(e, "modelValue"), a = y(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = y(() => e.falseValue !== void 0 ? e.falseValue : !1), o = y(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), s = y({
    get() {
      const d = n ? n.modelValue.value : l.value;
      return o.value ? Pe(d).some((h) => e.valueComparator(h, a.value)) : e.valueComparator(d, a.value);
    },
    set(d) {
      if (e.readonly)
        return;
      const h = d ? a.value : i.value;
      let f = h;
      o.value && (f = d ? [...Pe(l.value), h] : Pe(l.value).filter((b) => !e.valueComparator(b, a.value))), n ? n.modelValue.value = f : l.value = f;
    }
  }), {
    textColorClasses: r,
    textColorStyles: c
  } = De(y(() => {
    if (!(e.error || e.disabled))
      return s.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: m,
    backgroundColorStyles: g
  } = Be(y(() => s.value && !e.error && !e.disabled ? e.color : e.baseColor)), v = y(() => s.value ? e.trueIcon : e.falseIcon);
  return {
    group: n,
    densityClasses: t,
    trueValue: a,
    falseValue: i,
    model: s,
    textColorClasses: r,
    textColorStyles: c,
    backgroundColorClasses: m,
    backgroundColorStyles: g,
    icon: v
  };
}
const Kl = N()({
  name: "VSelectionControl",
  directives: {
    Ripple: Nt
  },
  inheritAttrs: !1,
  props: xi(),
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
      backgroundColorClasses: m,
      backgroundColorStyles: g,
      trueValue: v
    } = Rr(e), d = Le(), h = G(!1), f = G(!1), b = j(), S = y(() => e.id || `input-${d}`), _ = y(() => !e.disabled && !e.readonly);
    a == null || a.onForceUpdate(() => {
      b.value && (b.value.checked = s.value);
    });
    function w(C) {
      _.value && (h.value = !0, Kt(C.target, ":focus-visible") !== !1 && (f.value = !0));
    }
    function x() {
      h.value = !1, f.value = !1;
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
    return q(() => {
      var O, p;
      const C = l.label ? l.label({
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label, [$, H] = ra(t), R = u("input", J({
        ref: b,
        checked: s.value,
        disabled: !!e.disabled,
        id: S.value,
        onBlur: x,
        onFocus: w,
        onInput: V,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: v.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? s.value : void 0
      }, H), null);
      return u("div", J({
        class: ["v-selection-control", {
          "v-selection-control--dirty": s.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": h.value,
          "v-selection-control--focus-visible": f.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, $, {
        style: e.style
      }), [u("div", {
        class: ["v-selection-control__wrapper", r.value],
        style: c.value
      }, [(O = l.default) == null ? void 0 : O.call(l, {
        backgroundColorClasses: m,
        backgroundColorStyles: g
      }), we(u("div", {
        class: ["v-selection-control__input"]
      }, [((p = l.input) == null ? void 0 : p.call(l, {
        model: s,
        textColorClasses: r,
        textColorStyles: c,
        backgroundColorClasses: m,
        backgroundColorStyles: g,
        inputNode: R,
        icon: o.value,
        props: {
          onFocus: w,
          onBlur: x,
          id: S.value
        }
      })) ?? u(se, null, [o.value && u(le, {
        key: "icon",
        icon: o.value
      }, null), R])]), [[at("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), C && u(wi, {
        for: S.value,
        onClick: L
      }, {
        default: () => [C]
      })]);
    }), {
      isFocused: h,
      input: b
    };
  }
}), Mr = E({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: ne,
    default: "$checkboxIndeterminate"
  },
  ...xi({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Nr = N()({
  name: "VCheckboxBtn",
  props: Mr(),
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
    const o = y(() => l.value ? e.indeterminateIcon : e.falseIcon), s = y(() => l.value ? e.indeterminateIcon : e.trueIcon);
    return q(() => {
      const r = ht(Kl.filterProps(e), ["modelValue"]);
      return u(Kl, J(r, {
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
function Vi(e) {
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
    return u(le, {
      icon: e[`${a}Icon`],
      "aria-label": s,
      onClick: o
    }, null);
  }
  return {
    InputIcon: t
  };
}
const Dr = E({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...X(),
  ...Ot({
    transition: {
      component: ka,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), zr = N()({
  name: "VMessages",
  props: Dr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = y(() => Pe(e.messages)), {
      textColorClasses: a,
      textColorStyles: i
    } = De(y(() => e.color));
    return q(() => u(We, {
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
}), Ii = E({
  focused: Boolean,
  "onUpdate:focused": ke()
}, "focus");
function Ai(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  const t = ue(e, "focused"), l = y(() => ({
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
const Hr = Symbol.for("vuetify:form");
function Pi() {
  return me(Hr, null);
}
const jr = E({
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
  ...Ii()
}, "validation");
function Wr(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Le();
  const l = ue(e, "modelValue"), a = y(() => e.validationValue === void 0 ? l.value : e.validationValue), i = Pi(), o = j([]), s = G(!0), r = y(() => !!(Pe(l.value === "" ? null : l.value).length || Pe(a.value === "" ? null : a.value).length)), c = y(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), m = y(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), g = y(() => {
    var L;
    return (L = e.errorMessages) != null && L.length ? Pe(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), v = y(() => {
    let L = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || "input";
    L === "lazy" && (L = "input lazy");
    const V = new Set((L == null ? void 0 : L.split(" ")) ?? []);
    return {
      blur: V.has("blur") || V.has("input"),
      input: V.has("input"),
      submit: V.has("submit"),
      lazy: V.has("lazy")
    };
  }), d = y(() => {
    var L;
    return e.error || (L = e.errorMessages) != null && L.length ? !1 : e.rules.length ? s.value ? o.value.length || v.value.lazy ? null : !0 : !o.value.length : !0;
  }), h = G(!1), f = y(() => ({
    [`${n}--error`]: d.value === !1,
    [`${n}--dirty`]: r.value,
    [`${n}--disabled`]: c.value,
    [`${n}--readonly`]: m.value
  })), b = ce("validation"), S = y(() => e.name ?? Ce(t));
  na(() => {
    i == null || i.register({
      id: S.value,
      vm: b,
      validate: x,
      reset: _,
      resetValidation: w
    });
  }), Ee(() => {
    i == null || i.unregister(S.value);
  }), ze(async () => {
    v.value.lazy || await x(!0), i == null || i.update(S.value, d.value, g.value);
  }), Ue(() => v.value.input, () => {
    K(a, () => {
      if (a.value != null)
        x();
      else if (e.focused) {
        const L = K(() => e.focused, (V) => {
          V || x(), L();
        });
      }
    });
  }), Ue(() => v.value.blur, () => {
    K(() => e.focused, (L) => {
      L || x();
    });
  }), K([d, g], () => {
    i == null || i.update(S.value, d.value, g.value);
  });
  async function _() {
    l.value = null, await ye(), await w();
  }
  async function w() {
    s.value = !0, v.value.lazy ? o.value = [] : await x(!0);
  }
  async function x() {
    let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const V = [];
    h.value = !0;
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
    return o.value = V, h.value = !1, s.value = L, o.value;
  }
  return {
    errorMessages: g,
    isDirty: r,
    isDisabled: c,
    isReadonly: m,
    isPristine: s,
    isValid: d,
    isValidating: h,
    reset: _,
    resetValidation: w,
    validate: x,
    validationClasses: f
  };
}
const Ei = E({
  id: String,
  appendIcon: ne,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: ne,
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
  "onClick:prepend": ke(),
  "onClick:append": ke(),
  ...X(),
  ...Oe(),
  ...to(qe(), ["maxWidth", "minWidth", "width"]),
  ...de(),
  ...jr()
}, "VInput"), Yl = N()({
  name: "VInput",
  props: {
    ...Ei()
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
    } = je(e), {
      dimensionStyles: o
    } = Ke(e), {
      themeClasses: s
    } = ge(e), {
      rtlClasses: r
    } = He(), {
      InputIcon: c
    } = Vi(e), m = Le(), g = y(() => e.id || `input-${m}`), v = y(() => `${g.value}-messages`), {
      errorMessages: d,
      isDirty: h,
      isDisabled: f,
      isReadonly: b,
      isPristine: S,
      isValid: _,
      isValidating: w,
      reset: x,
      resetValidation: L,
      validate: V,
      validationClasses: C
    } = Wr(e, "v-input", g), $ = y(() => ({
      id: g,
      messagesId: v,
      isDirty: h,
      isDisabled: f,
      isReadonly: b,
      isPristine: S,
      isValid: _,
      isValidating: w,
      reset: x,
      resetValidation: L,
      validate: V
    })), H = y(() => {
      var R;
      return (R = e.errorMessages) != null && R.length || !S.value && d.value.length ? d.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return q(() => {
      var T, D, Q, Z;
      const R = !!(l.prepend || e.prependIcon), O = !!(l.append || e.appendIcon), p = H.value.length > 0, A = !e.hideDetails || e.hideDetails === "auto" && (p || !!l.details);
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
      }, null), (Q = l.append) == null ? void 0 : Q.call(l, $.value)]), A && u("div", {
        class: "v-input__details"
      }, [u(zr, {
        id: v.value,
        active: p,
        messages: H.value
      }, {
        message: l.message
      }), (Z = l.details) == null ? void 0 : Z.call(l, $.value)])]);
    }), {
      reset: x,
      resetValidation: L,
      validate: V,
      isValid: _,
      errorMessages: d
    };
  }
}), Gr = Symbol.for("vuetify:goto");
function Ur() {
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
function qr(e) {
  return rl(e) ?? (document.scrollingElement || document.body);
}
function rl(e) {
  return typeof e == "string" ? document.querySelector(e) : ia(e);
}
function kn(e, n, t) {
  if (typeof e == "number")
    return n && t ? -e : e;
  let l = rl(e), a = 0;
  for (; l; )
    a += n ? l.offsetLeft : l.offsetTop, l = l.offsetParent;
  return a;
}
async function Xl(e, n, t, l) {
  const a = t ? "scrollLeft" : "scrollTop", i = Re((l == null ? void 0 : l.options) ?? Ur(), n), o = l == null ? void 0 : l.rtl.value, s = (typeof e == "number" ? e : rl(e)) ?? 0, r = i.container === "parent" && s instanceof HTMLElement ? s.parentElement : qr(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c)
    throw new TypeError(`Easing function "${i.easing}" not found.`);
  let m;
  if (typeof s == "number")
    m = kn(s, t, o);
  else if (m = kn(s, t, o) - kn(r, t, o), i.layout) {
    const h = window.getComputedStyle(s).getPropertyValue("--v-layout-top");
    h && (m -= parseInt(h, 10));
  }
  m += i.offset, m = Yr(r, m, !!o, !!t);
  const g = r[a] ?? 0;
  if (m === g)
    return Promise.resolve(m);
  const v = performance.now();
  return new Promise((d) => requestAnimationFrame(function h(f) {
    const S = (f - v) / i.duration, _ = Math.floor(g + (m - g) * c(Me(S, 0, 1)));
    if (r[a] = _, S >= 1 && Math.abs(_ - r[a]) < 10)
      return d(m);
    if (S > 2)
      return Ge("Scroll target is not reachable"), d(r[a]);
    requestAnimationFrame(h);
  }));
}
function Kr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = me(Gr), {
    isRtl: t
  } = He();
  if (!n)
    throw new Error("[Vuetify] Could not find injected goto instance");
  const l = {
    ...n,
    // can be set via VLocaleProvider
    rtl: y(() => n.rtl.value || t.value)
  };
  async function a(i, o) {
    return Xl(i, Re(e, o), !1, l);
  }
  return a.horizontal = async (i, o) => Xl(i, Re(e, o), !0, l), a;
}
function Yr(e, n, t, l) {
  const {
    scrollWidth: a,
    scrollHeight: i
  } = e, [o, s] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let r, c;
  return l ? t ? (r = -(a - o), c = 0) : (r = 0, c = a - o) : (r = 0, c = i + -s), Math.max(Math.min(n, c), r);
}
function Xr(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: l,
    isHorizontal: a
  } = e;
  const i = Et(a, t), o = Bi(a, l, t), s = Et(a, n), r = Ti(a, n), c = s * 0.4;
  return o > r ? r - c : o + i < r + s ? r - i + s + c : o;
}
function Qr(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: l
  } = e;
  const a = Et(l, t), i = Ti(l, n), o = Et(l, n);
  return i - a / 2 + o / 2;
}
function Ql(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Jr(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Bi(e, n, t) {
  if (!t)
    return 0;
  const {
    scrollLeft: l,
    offsetWidth: a,
    scrollWidth: i
  } = t;
  return e ? n ? i - a + l : l : t.scrollTop;
}
function Et(e, n) {
  const t = e ? "offsetWidth" : "offsetHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Ti(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const Zr = Symbol.for("vuetify:v-slide-group"), Li = E({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Zr
  },
  nextIcon: {
    type: ne,
    default: "$next"
  },
  prevIcon: {
    type: ne,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...X(),
  ...Ms({
    mobile: null
  }),
  ...ie(),
  ...Yn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), Jl = N()({
  name: "VSlideGroup",
  props: Li(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isRtl: l
    } = He(), {
      displayClasses: a,
      mobile: i
    } = tl(e), o = Xn(e, e.symbol), s = G(!1), r = G(0), c = G(0), m = G(0), g = y(() => e.direction === "horizontal"), {
      resizeRef: v,
      contentRect: d
    } = vt(), {
      resizeRef: h,
      contentRect: f
    } = vt(), b = Kr(), S = y(() => ({
      container: v.el,
      duration: 200,
      easing: "easeOutQuart"
    })), _ = y(() => o.selected.value.length ? o.items.value.findIndex((k) => k.id === o.selected.value[0]) : -1), w = y(() => o.selected.value.length ? o.items.value.findIndex((k) => k.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (ve) {
      let k = -1;
      K(() => [o.selected.value, d.value, f.value, g.value], () => {
        cancelAnimationFrame(k), k = requestAnimationFrame(() => {
          if (d.value && f.value) {
            const B = g.value ? "width" : "height";
            c.value = d.value[B], m.value = f.value[B], s.value = c.value + 1 < m.value;
          }
          if (_.value >= 0 && h.el) {
            const B = h.el.children[w.value];
            L(B, e.centerActive);
          }
        });
      });
    }
    const x = G(!1);
    function L(k, B) {
      let F = 0;
      B ? F = Qr({
        containerElement: v.el,
        isHorizontal: g.value,
        selectedElement: k
      }) : F = Xr({
        containerElement: v.el,
        isHorizontal: g.value,
        isRtl: l.value,
        selectedElement: k
      }), V(F);
    }
    function V(k) {
      if (!ve || !v.el)
        return;
      const B = Et(g.value, v.el), F = Bi(g.value, l.value, v.el);
      if (!(Ql(g.value, v.el) <= B || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(k - F) < 16)) {
        if (g.value && l.value && v.el) {
          const {
            scrollWidth: ee,
            offsetWidth: z
          } = v.el;
          k = ee - z - k;
        }
        g.value ? b.horizontal(k, S.value) : b(k, S.value);
      }
    }
    function C(k) {
      const {
        scrollTop: B,
        scrollLeft: F
      } = k.target;
      r.value = g.value ? F : B;
    }
    function $(k) {
      if (x.value = !0, !(!s.value || !h.el)) {
        for (const B of k.composedPath())
          for (const F of h.el.children)
            if (F === B) {
              L(F);
              return;
            }
      }
    }
    function H(k) {
      x.value = !1;
    }
    let R = !1;
    function O(k) {
      var B;
      !R && !x.value && !(k.relatedTarget && ((B = h.el) != null && B.contains(k.relatedTarget))) && T(), R = !1;
    }
    function p() {
      R = !0;
    }
    function A(k) {
      if (!h.el)
        return;
      function B(F) {
        k.preventDefault(), T(F);
      }
      g.value ? k.key === "ArrowRight" ? B(l.value ? "prev" : "next") : k.key === "ArrowLeft" && B(l.value ? "next" : "prev") : k.key === "ArrowDown" ? B("next") : k.key === "ArrowUp" && B("prev"), k.key === "Home" ? B("first") : k.key === "End" && B("last");
    }
    function T(k) {
      var F, Y;
      if (!h.el)
        return;
      let B;
      if (!k)
        B = _t(h.el)[0];
      else if (k === "next") {
        if (B = (F = h.el.querySelector(":focus")) == null ? void 0 : F.nextElementSibling, !B)
          return T("first");
      } else if (k === "prev") {
        if (B = (Y = h.el.querySelector(":focus")) == null ? void 0 : Y.previousElementSibling, !B)
          return T("last");
      } else
        k === "first" ? B = h.el.firstElementChild : k === "last" && (B = h.el.lastElementChild);
      B && B.focus({
        preventScroll: !0
      });
    }
    function D(k) {
      const B = g.value && l.value ? -1 : 1, F = (k === "prev" ? -B : B) * c.value;
      let Y = r.value + F;
      if (g.value && l.value && v.el) {
        const {
          scrollWidth: ee,
          offsetWidth: z
        } = v.el;
        Y += ee - z;
      }
      V(Y);
    }
    const Q = y(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), Z = y(() => {
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
    }), I = y(() => Math.abs(r.value) > 1), P = y(() => {
      if (!v.value)
        return !1;
      const k = Ql(g.value, v.el), B = Jr(g.value, v.el);
      return k - B - Math.abs(r.value) > 1;
    });
    return q(() => u(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !g.value,
        "v-slide-group--has-affixes": Z.value,
        "v-slide-group--is-overflowing": s.value
      }, a.value, e.class],
      style: e.style,
      tabindex: x.value || o.selected.value.length ? -1 : 0,
      onFocus: O
    }, {
      default: () => {
        var k, B, F;
        return [Z.value && u("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !I.value
          }],
          onMousedown: p,
          onClick: () => I.value && D("prev")
        }, [((k = t.prev) == null ? void 0 : k.call(t, Q.value)) ?? u(Bl, null, {
          default: () => [u(le, {
            icon: l.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), u("div", {
          key: "container",
          ref: v,
          class: "v-slide-group__container",
          onScroll: C
        }, [u("div", {
          ref: h,
          class: "v-slide-group__content",
          onFocusin: $,
          onFocusout: H,
          onKeydown: A
        }, [(B = t.default) == null ? void 0 : B.call(t, Q.value)])]), Z.value && u("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !P.value
          }],
          onMousedown: p,
          onClick: () => P.value && D("next")
        }, [((F = t.next) == null ? void 0 : F.call(t, Q.value)) ?? u(Bl, null, {
          default: () => [u(le, {
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
}), Oi = Symbol.for("vuetify:v-chip-group"), eu = E({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: yt
  },
  ...Li(),
  ...X(),
  ...Yn({
    selectedClass: "v-chip--selected"
  }),
  ...ie(),
  ...de(),
  ...Ze({
    variant: "tonal"
  })
}, "VChipGroup");
N()({
  name: "VChipGroup",
  props: eu(),
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
    } = Xn(e, Oi);
    return it({
      VChip: {
        color: M(e, "color"),
        disabled: M(e, "disabled"),
        filter: M(e, "filter"),
        variant: M(e, "variant")
      }
    }), q(() => {
      const c = Jl.filterProps(e);
      return u(Jl, J(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, l.value, e.class],
        style: e.style
      }), {
        default: () => {
          var m;
          return [(m = t.default) == null ? void 0 : m.call(t, {
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
const tu = E({
  activeClass: String,
  appendAvatar: String,
  appendIcon: ne,
  closable: Boolean,
  closeIcon: {
    type: ne,
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
  prependIcon: ne,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: ke(),
  onClickOnce: ke(),
  ...Ye(),
  ...X(),
  ...Oe(),
  ...Qe(),
  ...La(),
  ...Ve(),
  ...un(),
  ...Rt(),
  ...ie({
    tag: "span"
  }),
  ...de(),
  ...Ze({
    variant: "tonal"
  })
}, "VChip"), On = N()({
  name: "VChip",
  directives: {
    Ripple: Nt
  },
  props: tu(),
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
    } = Xe(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: c
    } = Ft(e), {
      densityClasses: m
    } = je(e), {
      elevationClasses: g
    } = Je(e), {
      roundedClasses: v
    } = Ie(e), {
      sizeClasses: d
    } = Mt(e), {
      themeClasses: h
    } = ge(e), f = ue(e, "modelValue"), b = Oa(e, Oi, !1), S = rn(e, t), _ = y(() => e.link !== !1 && S.isLink.value), w = y(() => !e.disabled && e.link !== !1 && (!!b || e.link || S.isClickable.value)), x = y(() => ({
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
      const C = S.isLink.value ? "a" : e.tag, $ = !!(e.appendIcon || e.appendAvatar), H = !!($ || a.append), R = !!(a.close || e.closable), O = !!(a.filter || e.filter) && b, p = !!(e.prependIcon || e.prependAvatar), A = !!(p || a.prepend), T = !b || b.isSelected.value;
      return f.value && we(u(C, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": w.value,
          "v-chip--filter": O,
          "v-chip--pill": e.pill
        }, h.value, o.value, T ? s.value : void 0, m.value, g.value, v.value, d.value, c.value, b == null ? void 0 : b.selectedClass.value, e.class],
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
          return [$t(w.value, "v-chip"), O && u(pa, {
            key: "filter"
          }, {
            default: () => [we(u("div", {
              class: "v-chip__filter"
            }, [a.filter ? u(re, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, a.filter) : u(le, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[gt, b.isSelected.value]])]
          }), A && u("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [a.prepend ? u(re, {
            key: "prepend-defaults",
            disabled: !p,
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
          }, a.prepend) : u(se, null, [e.prependIcon && u(le, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && u(lt, {
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
          }, a.append) : u(se, null, [e.appendIcon && u(le, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(lt, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), R && u("button", J({
            key: "close",
            class: "v-chip__close",
            type: "button"
          }, x.value), [a.close ? u(re, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, a.close) : u(le, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[at("ripple"), w.value && e.ripple, null]]);
    };
  }
}), nu = E({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...ht(ll({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Gn
    }
  }), ["absolute"])
}, "VMenu"), lu = N()({
  name: "VMenu",
  props: nu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ue(e, "modelValue"), {
      scopeId: a
    } = nl(), i = Le(), o = y(() => e.id || `v-menu-${i}`), s = j(), r = me(Bn, null), c = G(0);
    _e(Bn, {
      register() {
        ++c.value;
      },
      unregister() {
        --c.value;
      },
      closeParents(f) {
        setTimeout(() => {
          !c.value && !e.persistent && (f == null || f && !so(f, s.value.contentEl)) && (l.value = !1, r == null || r.closeParents());
        }, 40);
      }
    });
    async function m(f) {
      var _, w, x;
      const b = f.relatedTarget, S = f.target;
      await ye(), l.value && b !== S && ((_ = s.value) != null && _.contentEl) && // We're the topmost menu
      ((w = s.value) != null && w.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(S) && // It isn't inside the menu body
      !s.value.contentEl.contains(S) && ((x = _t(s.value.contentEl)[0]) == null || x.focus());
    }
    K(l, (f) => {
      f ? (r == null || r.register(), document.addEventListener("focusin", m, {
        once: !0
      })) : (r == null || r.unregister(), document.removeEventListener("focusin", m));
    });
    function g(f) {
      r == null || r.closeParents(f);
    }
    function v(f) {
      var b, S, _;
      if (!e.disabled)
        if (f.key === "Tab" || f.key === "Enter" && !e.closeOnContentClick) {
          if (f.key === "Enter" && f.target instanceof HTMLTextAreaElement)
            return;
          f.key === "Enter" && f.preventDefault(), da(_t((b = s.value) == null ? void 0 : b.contentEl, !1), f.shiftKey ? "prev" : "next", (x) => x.tabIndex >= 0) || (l.value = !1, (_ = (S = s.value) == null ? void 0 : S.activatorEl) == null || _.focus());
        } else
          ["Enter", " "].includes(f.key) && e.closeOnContentClick && (l.value = !1, r == null || r.closeParents());
    }
    function d(f) {
      var S;
      if (e.disabled)
        return;
      const b = (S = s.value) == null ? void 0 : S.contentEl;
      b && l.value ? f.key === "ArrowDown" ? (f.preventDefault(), qt(b, "next")) : f.key === "ArrowUp" && (f.preventDefault(), qt(b, "prev")) : ["ArrowDown", "ArrowUp"].includes(f.key) && (l.value = !0, f.preventDefault(), setTimeout(() => setTimeout(() => d(f))));
    }
    const h = y(() => J({
      "aria-haspopup": "menu",
      "aria-expanded": String(l.value),
      "aria-owns": o.value,
      onKeydown: d
    }, e.activatorProps));
    return q(() => {
      const f = en.filterProps(e);
      return u(en, J({
        ref: s,
        id: o.value,
        class: ["v-menu", e.class],
        style: e.style
      }, f, {
        modelValue: l.value,
        "onUpdate:modelValue": (b) => l.value = b,
        absolute: !0,
        activatorProps: h.value,
        "onClick:outside": g,
        onKeydown: v
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
    }), dn({
      id: o,
      ΨopenChildren: c
    }, s);
  }
}), au = E({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...X(),
  ...Ot({
    transition: {
      component: ka
    }
  })
}, "VCounter"), iu = N()({
  name: "VCounter",
  functional: !0,
  props: au(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = y(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return q(() => u(We, {
      transition: e.transition
    }, {
      default: () => [we(u("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [t.default ? t.default({
        counter: l.value,
        max: e.max,
        value: e.value
      }) : l.value]), [[gt, e.active]])]
    })), {};
  }
}), ou = E({
  floating: Boolean,
  ...X()
}, "VFieldLabel"), Ht = N()({
  name: "VFieldLabel",
  props: ou(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return q(() => u(wi, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
}), su = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], $i = E({
  appendInnerIcon: ne,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: ne,
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
  prependInnerIcon: ne,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => su.includes(e)
  },
  "onClick:clear": ke(),
  "onClick:appendInner": ke(),
  "onClick:prependInner": ke(),
  ...X(),
  ...Zn(),
  ...Ve(),
  ...de()
}, "VField"), Fi = N()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Ii(),
    ...$i()
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
    } = el(e), {
      focusClasses: s,
      isFocused: r,
      focus: c,
      blur: m
    } = Ai(e), {
      InputIcon: g
    } = Vi(e), {
      roundedClasses: v
    } = Ie(e), {
      rtlClasses: d
    } = He(), h = y(() => e.dirty || e.active), f = y(() => !e.singleLine && !!(e.label || a.label)), b = Le(), S = y(() => e.id || `input-${b}`), _ = y(() => `${S.value}-messages`), w = j(), x = j(), L = j(), V = y(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: C,
      backgroundColorStyles: $
    } = Be(M(e, "bgColor")), {
      textColorClasses: H,
      textColorStyles: R
    } = De(y(() => e.error || e.disabled ? void 0 : h.value && r.value ? e.color : e.baseColor));
    K(h, (T) => {
      if (f.value) {
        const D = w.value.$el, Q = x.value.$el;
        requestAnimationFrame(() => {
          const Z = zn(D), I = Q.getBoundingClientRect(), P = I.x - Z.x, k = I.y - Z.y - (Z.height / 2 - I.height / 2), B = I.width / 0.75, F = Math.abs(B - Z.width) > 1 ? {
            maxWidth: U(B)
          } : void 0, Y = getComputedStyle(D), ee = getComputedStyle(Q), z = parseFloat(Y.transitionDuration) * 1e3 || 150, te = parseFloat(ee.getPropertyValue("--v-field-label-scale")), oe = ee.getPropertyValue("color");
          D.style.visibility = "visible", Q.style.visibility = "hidden", rt(D, {
            transform: `translate(${P}px, ${k}px) scale(${te})`,
            color: oe,
            ...F
          }, {
            duration: z,
            easing: Xt,
            direction: T ? "normal" : "reverse"
          }).finished.then(() => {
            D.style.removeProperty("visibility"), Q.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const O = y(() => ({
      isActive: h,
      isFocused: r,
      controlRef: L,
      blur: m,
      focus: c
    }));
    function p(T) {
      T.target !== document.activeElement && T.preventDefault();
    }
    function A(T) {
      var D;
      T.key !== "Enter" && T.key !== " " || (T.preventDefault(), T.stopPropagation(), (D = e["onClick:clear"]) == null || D.call(e, new MouseEvent("click")));
    }
    return q(() => {
      var P, k, B;
      const T = e.variant === "outlined", D = !!(a["prepend-inner"] || e.prependInnerIcon), Q = !!(e.clearable || a.clear), Z = !!(a["append-inner"] || e.appendInnerIcon || Q), I = () => a.label ? a.label({
        ...O.value,
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label;
      return u("div", J({
        class: ["v-field", {
          "v-field--active": h.value,
          "v-field--appended": Z,
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
        }, i.value, C.value, s.value, o.value, v.value, d.value, e.class],
        style: [$.value, e.style],
        onClick: p
      }, t), [u("div", {
        class: "v-field__overlay"
      }, null), u(Ma, {
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
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && f.value && u(Ht, {
        key: "floating-label",
        ref: x,
        class: [H.value],
        floating: !0,
        for: S.value,
        style: R.value
      }, {
        default: () => [I()]
      }), u(Ht, {
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
        blur: m
      })]), Q && u(pa, {
        key: "clear"
      }, {
        default: () => [we(u("div", {
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
              onBlur: m,
              onClick: e["onClick:clear"]
            }
          }) : u(g, {
            name: "clear",
            onKeydown: A,
            onFocus: c,
            onBlur: m
          }, null)]
        })]), [[gt, e.dirty]])]
      }), Z && u("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(B = a["append-inner"]) == null ? void 0 : B.call(a, O.value), e.appendInnerIcon && u(g, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), u("div", {
        class: ["v-field__outline", H.value],
        style: R.value
      }, [T && u(se, null, [u("div", {
        class: "v-field__outline__start"
      }, null), f.value && u("div", {
        class: "v-field__outline__notch"
      }, [u(Ht, {
        ref: x,
        floating: !0,
        for: S.value
      }, {
        default: () => [I()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), V.value && f.value && u(Ht, {
        ref: x,
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
function ru(e) {
  const n = Object.keys(Fi.props).filter((t) => !Nn(t) && t !== "class" && t !== "style");
  return oa(e, n);
}
const uu = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ri = E({
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
  ...Ei(),
  ...$i()
}, "VTextField"), Zl = N()({
  name: "VTextField",
  directives: {
    Intersect: Va
  },
  inheritAttrs: !1,
  props: Ri(),
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
    } = Ai(e), c = y(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), m = y(() => {
      if (t.maxlength)
        return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), g = y(() => ["plain", "underlined"].includes(e.variant));
    function v(V, C) {
      var $, H;
      !e.autofocus || !V || (H = ($ = C[0].target) == null ? void 0 : $.focus) == null || H.call($);
    }
    const d = j(), h = j(), f = j(), b = y(() => uu.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
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
    function x(V) {
      V.stopPropagation(), S(), ye(() => {
        i.value = null, io(e["onClick:clear"], V);
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
    return q(() => {
      const V = !!(a.counter || e.counter !== !1 && e.counter != null), C = !!(V || a.details), [$, H] = ra(t), {
        modelValue: R,
        ...O
      } = Yl.filterProps(e), p = ru(e);
      return u(Yl, J({
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
            isDirty: Q,
            isReadonly: Z,
            isValid: I
          } = A;
          return u(Fi, J({
            ref: h,
            onMousedown: _,
            onClick: w,
            "onClick:clear": x,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, p, {
            id: T.value,
            active: b.value || Q.value,
            dirty: Q.value || e.dirty,
            disabled: D.value,
            focused: o.value,
            error: I.value === !1
          }), {
            ...a,
            default: (P) => {
              let {
                props: {
                  class: k,
                  ...B
                }
              } = P;
              const F = we(u("input", J({
                ref: f,
                value: i.value,
                onInput: L,
                autofocus: e.autofocus,
                readonly: Z.value,
                disabled: D.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: S,
                onBlur: r
              }, B, H), null), [[at("intersect"), {
                handler: v
              }, null, {
                once: !0
              }]]);
              return u(se, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [u("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), a.default ? u("div", {
                class: k,
                "data-no-activator": ""
              }, [a.default(), F]) : Ji(F, {
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
          return u(se, null, [(T = a.details) == null ? void 0 : T.call(a, A), V && u(se, null, [u("span", null, null), u(iu, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: m.value,
            disabled: e.disabled
          }, a.counter)])]);
        } : void 0
      });
    }), dn({}, d, h, f);
  }
}), cu = E({
  renderless: Boolean,
  ...X()
}, "VVirtualScrollItem"), du = N()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: cu(),
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
    } = vt(void 0, "border");
    K(() => {
      var s;
      return (s = o.value) == null ? void 0 : s.height;
    }, (s) => {
      s != null && l("update:height", s);
    }), q(() => {
      var s, r;
      return e.renderless ? u(se, null, [(s = a.default) == null ? void 0 : s.call(a, {
        itemRef: i
      })]) : u("div", J({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, t), [(r = a.default) == null ? void 0 : r.call(a)]);
    });
  }
}), fu = -1, vu = 1, wn = 100, mu = E({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function gu(e, n) {
  const t = tl(), l = G(0);
  Ne(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = G(0), i = G(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (l.value || 16)
  ) || 1), o = G(0), s = G(0), r = j(), c = j();
  let m = 0;
  const {
    resizeRef: g,
    contentRect: v
  } = vt();
  Ne(() => {
    g.value = r.value;
  });
  const d = y(() => {
    var P;
    return r.value === document.documentElement ? t.height.value : ((P = v.value) == null ? void 0 : P.height) || parseInt(e.height) || 0;
  }), h = y(() => !!(r.value && c.value && d.value && l.value));
  let f = Array.from({
    length: n.value.length
  }), b = Array.from({
    length: n.value.length
  });
  const S = G(0);
  let _ = -1;
  function w(P) {
    return f[P] || l.value;
  }
  const x = lo(() => {
    const P = performance.now();
    b[0] = 0;
    const k = n.value.length;
    for (let B = 1; B <= k - 1; B++)
      b[B] = (b[B - 1] || 0) + w(B - 1);
    S.value = Math.max(S.value, performance.now() - P);
  }, S), L = K(h, (P) => {
    P && (L(), m = c.value.offsetTop, x.immediate(), D(), ~_ && ye(() => {
      ve && window.requestAnimationFrame(() => {
        Z(_), _ = -1;
      });
    }));
  });
  he(() => {
    x.clear();
  });
  function V(P, k) {
    const B = f[P], F = l.value;
    l.value = F ? Math.min(l.value, k) : k, (B !== k || F !== l.value) && (f[P] = k, x());
  }
  function C(P) {
    return P = Me(P, 0, n.value.length - 1), b[P] || 0;
  }
  function $(P) {
    return yu(b, P);
  }
  let H = 0, R = 0, O = 0;
  K(d, (P, k) => {
    k && (D(), P < k && requestAnimationFrame(() => {
      R = 0, D();
    }));
  });
  function p() {
    if (!r.value || !c.value)
      return;
    const P = r.value.scrollTop, k = performance.now();
    k - O > 500 ? (R = Math.sign(P - H), m = c.value.offsetTop) : R = P - H, H = P, O = k, D();
  }
  function A() {
    !r.value || !c.value || (R = 0, O = 0, D());
  }
  let T = -1;
  function D() {
    cancelAnimationFrame(T), T = requestAnimationFrame(Q);
  }
  function Q() {
    if (!r.value || !d.value)
      return;
    const P = H - m, k = Math.sign(R), B = Math.max(0, P - wn), F = Me($(B), 0, n.value.length), Y = P + d.value + wn, ee = Me($(Y) + 1, F + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (k !== fu || F < a.value) && (k !== vu || ee > i.value)
    ) {
      const z = C(a.value) - C(F), te = C(ee) - C(i.value);
      Math.max(z, te) > wn ? (a.value = F, i.value = ee) : (F <= 0 && (a.value = F), ee >= n.value.length && (i.value = ee));
    }
    o.value = C(a.value), s.value = C(n.value.length) - C(i.value);
  }
  function Z(P) {
    const k = C(P);
    !r.value || P && !k ? _ = P : r.value.scrollTop = k;
  }
  const I = y(() => n.value.slice(a.value, i.value).map((P, k) => ({
    raw: P,
    index: k + a.value
  })));
  return K(n, () => {
    f = Array.from({
      length: n.value.length
    }), b = Array.from({
      length: n.value.length
    }), x.immediate(), D();
  }, {
    deep: !0
  }), {
    containerRef: r,
    markerRef: c,
    computedItems: I,
    paddingTop: o,
    paddingBottom: s,
    scrollToIndex: Z,
    handleScroll: p,
    handleScrollend: A,
    handleItemResize: V
  };
}
function yu(e, n) {
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
const hu = E({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...mu(),
  ...X(),
  ...qe()
}, "VVirtualScroll"), bu = N()({
  name: "VVirtualScroll",
  props: hu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ce("VVirtualScroll"), {
      dimensionStyles: a
    } = Ke(e), {
      containerRef: i,
      markerRef: o,
      handleScroll: s,
      handleScrollend: r,
      handleItemResize: c,
      scrollToIndex: m,
      paddingTop: g,
      paddingBottom: v,
      computedItems: d
    } = gu(e, M(e, "items"));
    return Ue(() => e.renderless, () => {
      function h() {
        var S, _;
        const b = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        i.value === document.documentElement ? (document[b]("scroll", s, {
          passive: !0
        }), document[b]("scrollend", r)) : ((S = i.value) == null || S[b]("scroll", s, {
          passive: !0
        }), (_ = i.value) == null || _[b]("scrollend", r));
      }
      ze(() => {
        i.value = ba(l.vnode.el, !0), h(!0);
      }), he(h);
    }), q(() => {
      const h = d.value.map((f) => u(du, {
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
      return e.renderless ? u(se, null, [u("div", {
        ref: o,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: U(g.value)
        }
      }, null), h, u("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: U(v.value)
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
          paddingTop: U(g.value),
          paddingBottom: U(v.value)
        }
      }, [h])]);
    }), {
      scrollToIndex: m
    };
  }
});
function Su(e, n) {
  const t = G(!1);
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
        const r = K(t, () => {
          r(), s();
        });
      } else
        s();
    });
  }
  async function o(s) {
    var m, g;
    if (s.key === "Tab" && ((m = n.value) == null || m.focus()), !["PageDown", "PageUp", "Home", "End"].includes(s.key))
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
      const v = r.getBoundingClientRect().top;
      for (const d of c)
        if (d.getBoundingClientRect().top >= v) {
          d.focus();
          break;
        }
    } else {
      const v = r.getBoundingClientRect().bottom;
      for (const d of [...c].reverse())
        if (d.getBoundingClientRect().bottom <= v) {
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
const Cu = E({
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
    type: ne,
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
  ...Si({
    itemChildren: !1
  })
}, "Select"), ku = E({
  ...Cu(),
  ...ht(Ri({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Ot({
    transition: {
      component: Gn
    }
  })
}, "VSelect"), wu = N()({
  name: "VSelect",
  props: ku(),
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
    } = Kn(), a = j(), i = j(), o = j(), s = ue(e, "menu"), r = y({
      get: () => s.value,
      set: (I) => {
        var P;
        s.value && !I && ((P = i.value) != null && P.ΨopenChildren) || (s.value = I);
      }
    }), {
      items: c,
      transformIn: m,
      transformOut: g
    } = Pr(e), v = ue(e, "modelValue", [], (I) => m(I === null ? [null] : Pe(I)), (I) => {
      const P = g(I);
      return e.multiple ? P : P[0] ?? null;
    }), d = y(() => typeof e.counterValue == "function" ? e.counterValue(v.value) : typeof e.counterValue == "number" ? e.counterValue : v.value.length), h = Pi(), f = y(() => v.value.map((I) => I.value)), b = G(!1), S = y(() => r.value ? e.closeText : e.openText);
    let _ = "", w;
    const x = y(() => e.hideSelected ? c.value.filter((I) => !v.value.some((P) => e.valueComparator(P, I))) : c.value), L = y(() => e.hideNoData && !x.value.length || e.readonly || (h == null ? void 0 : h.isReadonly.value)), V = y(() => {
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
    } = Su(C, a);
    function R(I) {
      e.openOnClear && (r.value = !0);
    }
    function O() {
      L.value || (r.value = !r.value);
    }
    function p(I) {
      var Y, ee;
      if (!I.key || e.readonly || h != null && h.isReadonly.value)
        return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(I.key) && I.preventDefault(), ["Enter", "ArrowDown", " "].includes(I.key) && (r.value = !0), ["Escape", "Tab"].includes(I.key) && (r.value = !1), I.key === "Home" ? (Y = C.value) == null || Y.focus("first") : I.key === "End" && ((ee = C.value) == null || ee.focus("last"));
      const P = 1e3;
      function k(z) {
        const te = z.key.length === 1, oe = !z.ctrlKey && !z.metaKey && !z.altKey;
        return te && oe;
      }
      if (e.multiple || !k(I))
        return;
      const B = performance.now();
      B - w > P && (_ = ""), _ += I.key.toLowerCase(), w = B;
      const F = c.value.find((z) => z.title.toLowerCase().startsWith(_));
      if (F !== void 0) {
        v.value = [F];
        const z = x.value.indexOf(F);
        ve && window.requestAnimationFrame(() => {
          var te;
          z >= 0 && ((te = o.value) == null || te.scrollToIndex(z));
        });
      }
    }
    function A(I) {
      let P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!I.props.disabled)
        if (e.multiple) {
          const k = v.value.findIndex((F) => e.valueComparator(F.value, I.value)), B = P ?? !~k;
          if (~k) {
            const F = B ? [...v.value, I] : [...v.value];
            F.splice(k, 1), v.value = F;
          } else
            B && (v.value = [...v.value, I]);
        } else {
          const k = P !== !1;
          v.value = k ? [I] : [], ye(() => {
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
    function Q(I) {
      b.value = !0;
    }
    function Z(I) {
      if (I == null)
        v.value = [];
      else if (Kt(a.value, ":autofill") || Kt(a.value, ":-webkit-autofill")) {
        const P = c.value.find((k) => k.title === I);
        P && A(P);
      } else
        a.value && (a.value.value = "");
    }
    return K(r, () => {
      if (!e.hideSelected && r.value && v.value.length) {
        const I = x.value.findIndex((P) => v.value.some((k) => e.valueComparator(k.value, P.value)));
        ve && window.requestAnimationFrame(() => {
          var P;
          I >= 0 && ((P = o.value) == null || P.scrollToIndex(I));
        });
      }
    }), K(() => e.items, (I, P) => {
      r.value || b.value && !P.length && I.length && (r.value = !0);
    }), q(() => {
      const I = !!(e.chips || t.chip), P = !!(!e.hideNoData || x.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), k = v.value.length > 0, B = Zl.filterProps(e), F = k || !b.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return u(Zl, J({
        ref: a
      }, B, {
        modelValue: v.value.map((Y) => Y.props.value).join(", "),
        "onUpdate:modelValue": Z,
        focused: b.value,
        "onUpdate:focused": (Y) => b.value = Y,
        validationValue: v.externalValue,
        counterValue: d.value,
        dirty: k,
        class: ["v-select", {
          "v-select--active-menu": r.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": v.value.length,
          "v-select--selection-slot": !!t.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: F,
        "onClick:clear": R,
        "onMousedown:control": O,
        onBlur: T,
        onKeydown: p,
        "aria-label": l(S.value),
        title: l(S.value)
      }), {
        ...t,
        default: () => u(se, null, [u(lu, J({
          ref: i,
          modelValue: r.value,
          "onUpdate:modelValue": (Y) => r.value = Y,
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
          default: () => [P && u(Or, J({
            ref: C,
            selected: f.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (Y) => Y.preventDefault(),
            onKeydown: H,
            onFocusin: Q,
            onScrollPassive: $,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var Y, ee, z;
              return [(Y = t["prepend-item"]) == null ? void 0 : Y.call(t), !x.value.length && !e.hideNoData && (((ee = t["no-data"]) == null ? void 0 : ee.call(t)) ?? u(Pt, {
                title: l(e.noDataText)
              }, null)), u(bu, {
                ref: o,
                renderless: !0,
                items: x.value
              }, {
                default: (te) => {
                  var cl;
                  let {
                    item: oe,
                    index: fe,
                    itemRef: be
                  } = te;
                  const ul = J(oe.props, {
                    ref: be,
                    key: fe,
                    onClick: () => A(oe, null)
                  });
                  return ((cl = t.item) == null ? void 0 : cl.call(t, {
                    item: oe,
                    index: fe,
                    props: ul
                  })) ?? u(Pt, J(ul, {
                    role: "option"
                  }), {
                    prepend: (Di) => {
                      let {
                        isSelected: zi
                      } = Di;
                      return u(se, null, [e.multiple && !e.hideSelected ? u(Nr, {
                        key: oe.value,
                        modelValue: zi,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, oe.props.prependAvatar && u(lt, {
                        image: oe.props.prependAvatar
                      }, null), oe.props.prependIcon && u(le, {
                        icon: oe.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (z = t["append-item"]) == null ? void 0 : z.call(t)];
            }
          })]
        }), v.value.map((Y, ee) => {
          function z(be) {
            be.stopPropagation(), be.preventDefault(), A(Y, !1);
          }
          const te = {
            "onClick:close": z,
            onKeydown(be) {
              be.key !== "Enter" && be.key !== " " || (be.preventDefault(), be.stopPropagation(), z(be));
            },
            onMousedown(be) {
              be.preventDefault(), be.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, oe = I ? !!t.chip : !!t.selection, fe = oe ? fa(I ? t.chip({
            item: Y,
            index: ee,
            props: te
          }) : t.selection({
            item: Y,
            index: ee
          })) : void 0;
          if (!(oe && !fe))
            return u("div", {
              key: Y.value,
              class: "v-select__selection"
            }, [I ? t.chip ? u(re, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: Y.title
                }
              }
            }, {
              default: () => [fe]
            }) : u(On, J({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: Y.title,
              disabled: Y.props.disabled
            }, te), null) : fe ?? u("span", {
              class: "v-select__selection-text"
            }, [Y.title, e.multiple && ee < v.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [ft(",")])])]);
        })]),
        "append-inner": function() {
          var te;
          for (var Y = arguments.length, ee = new Array(Y), z = 0; z < Y; z++)
            ee[z] = arguments[z];
          return u(se, null, [(te = t["append-inner"]) == null ? void 0 : te.call(t, ...ee), e.menuIcon ? u(le, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), dn({
      isFocused: b,
      menu: r,
      select: A
    }, a);
  }
}), pu = (e) => (an("data-v-85c2bfed"), e = e(), on(), e), _u = ["href"], xu = /* @__PURE__ */ pu(() => /* @__PURE__ */ W("img", {
  src: "https://firebasestorage.googleapis.com/v0/b/ccaf-afea-test.appspot.com/o/logo.webp?alt=media&token=f4da887e-96cf-4325-b67b-5afd938250bf",
  width: "179",
  height: "52",
  alt: "Cambridge Centre for Alternative Finance (CCAF.io)"
}, null, -1)), Vu = [
  xu
], Iu = {
  class: "header__title",
  style: { "font-family": "MyriadPro" }
}, Au = { class: "header-links__element" }, Pu = ["href"], Eu = { class: "header-links__element" }, Bu = ["href"], Tu = { class: "header-links__element" }, Lu = ["href"], Ou = { class: "project-selector" }, $u = /* @__PURE__ */ Tt({
  __name: "LayoutHeader",
  props: {
    dialog: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: ""
    },
    activeSelect: {
      type: String,
      default: ""
    },
    env: {
      type: String,
      default: ""
    },
    topic: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    }
  },
  emits: ["changeDialog"],
  setup(e) {
    const { mdAndUp: n } = la(), t = e, l = j([]), a = j(), i = (o) => {
      const s = l.value.find(
        (r) => {
          if (typeof o == "string")
            return r.title === o;
        }
      );
      s && (window.location.href = `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/${s.link}`);
    };
    return ze(async () => {
      const { data: o } = await fetch(`${t.url}/projects`).then(
        (s) => s.json()
      );
      l.value = o, a.value = l.value.find(
        (s) => s.title === t.activeSelect || !!s.tag && s.tag === t.activeSelect
      ) || l.value[0];
    }), (o, s) => (Ae(), wt(qo, {
      id: "header",
      class: "header noselect",
      color: "#FFB71A",
      height: "72",
      "clipped-right": "",
      "clipped-left": "",
      flat: "",
      app: ""
    }, {
      default: ae(() => [
        u(tn, {
          align: "center",
          justify: "start",
          class: "header__logo"
        }, {
          default: ae(() => [
            W("a", {
              title: "CCAF.io",
              href: `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/`
            }, Vu, 8, _u),
            ut(o.$slots, "title", {}, () => [
              W("h4", Iu, Fe(e.title), 1)
            ], !0),
            u(or),
            ut(o.$slots, "links", {}, void 0, !0),
            W("ul", {
              class: pt(["header-links", { "is-long-title": !!a.value && !a.value.tag }])
            }, [
              W("li", Au, [
                W("a", {
                  class: "header-links__element-link",
                  title: "Home",
                  href: `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/`
                }, "Home ", 8, Pu)
              ]),
              W("li", Eu, [
                W("a", {
                  class: "header-links__element-link",
                  title: "Home",
                  href: `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/about_ccaf`
                }, "About CCAF ", 8, Bu)
              ]),
              W("li", Tu, [
                W("a", {
                  class: "header-links__element-link",
                  title: "Home",
                  href: `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/contact${e.topic ? `?topic=${e.topic}` : ""}`
                }, "Contact ", 8, Lu)
              ])
            ], 2),
            W("div", Ou, [
              Ce(n) ? (Ae(), wt(wu, {
                key: 0,
                variant: "solo",
                class: pt(["project-selector__select", { "is-title": !!a.value && !a.value.tag }]),
                "model-value": a.value,
                items: l.value,
                loading: !l.value.length,
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
                "onUpdate:modelValue": i
              }, {
                selection: ae(({ item: r }) => [
                  ft(Fe(r.title || r.value), 1)
                ]),
                item: ae(({ item: r, props: c }) => [
                  u(Pt, J(c, {
                    title: r.value,
                    subtitle: r.title || void 0
                  }), null, 16, ["title", "subtitle"])
                ]),
                _: 1
              }, 8, ["class", "model-value", "items", "loading"])) : St("", !0)
            ])
          ]),
          _: 3
        }),
        u(Ys, {
          class: "header-overlay",
          scrim: !1,
          "model-value": e.dialog,
          "onUpdate:modelValue": s[0] || (s[0] = (r) => o.$emit("changeDialog", r)),
          fullscreen: ""
        }, {
          activator: ae(({ props: r }) => [
            u(Ss, J(r, {
              flat: "",
              ripple: !1,
              class: "dialog-button"
            }), {
              default: ae(() => [
                u(le, {
                  color: "#000",
                  size: "24"
                }, {
                  default: ae(() => [
                    ft(Fe(e.dialog ? "mdi-close" : "mdi-menu"), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1040)
          ]),
          default: ae(({ isActive: r }) => [
            ut(o.$slots, "default", {
              close: () => r.value = !1
            }, void 0, !0)
          ]),
          _: 3
        }, 8, ["model-value"])
      ]),
      _: 3
    }));
  }
}), fn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, a] of n)
    t[l] = a;
  return t;
}, xc = /* @__PURE__ */ fn($u, [["__scopeId", "data-v-85c2bfed"]]), Fu = E({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Ye(),
  ...X(),
  ...Qe(),
  ...Pa(),
  ...Ve(),
  ...ie({
    tag: "footer"
  }),
  ...de()
}, "VFooter"), Ru = N()({
  name: "VFooter",
  props: Fu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = ge(e), {
      backgroundColorClasses: a,
      backgroundColorStyles: i
    } = Be(M(e, "color")), {
      borderClasses: o
    } = Xe(e), {
      elevationClasses: s
    } = Je(e), {
      roundedClasses: r
    } = Ie(e), c = G(32), {
      resizeRef: m
    } = vt((h) => {
      h.length && (c.value = h[0].target.clientHeight);
    }), g = y(() => e.height === "auto" ? c.value : parseInt(e.height, 10)), {
      layoutItemStyles: v,
      layoutIsReady: d
    } = Ea({
      id: e.name,
      order: y(() => parseInt(e.order, 10)),
      position: y(() => "bottom"),
      layoutSize: g,
      elementSize: y(() => e.height === "auto" ? void 0 : g.value),
      active: y(() => e.app),
      absolute: M(e, "absolute")
    });
    return q(() => u(e.tag, {
      ref: m,
      class: ["v-footer", l.value, a.value, o.value, s.value, r.value, e.class],
      style: [i.value, e.app ? v.value : {
        height: U(e.height)
      }, e.style]
    }, t)), e.app ? d : {};
  }
}), Mu = (e) => (an("data-v-c55fb2eb"), e = e(), on(), e), Nu = {
  class: "footer__pre-footer",
  align: "start",
  justify: "start",
  "no-gutters": ""
}, Du = { class: "footer__info" }, zu = {
  class: "footer__pre-links mb-4 pa-4",
  cols: "auto"
}, Hu = ["href"], ju = ["href"], Wu = ["href"], Gu = { class: "ml-7" }, Uu = ["href"], qu = ["href"], Ku = {
  key: 2,
  class: "link-icon",
  href: "facebookLink",
  target: "_blank"
}, Yu = /* @__PURE__ */ Mu(() => /* @__PURE__ */ W("div", {
  class: "footer__pre-commons mb-4 pa-4",
  cols: "auto"
}, [
  /* @__PURE__ */ W("a", {
    rel: "license",
    href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
    target: "_blank"
  }, [
    /* @__PURE__ */ W("img", {
      alt: "Creative Commons License",
      style: { "border-width": "0" },
      src: "https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg"
    })
  ]),
  /* @__PURE__ */ W("br"),
  /* @__PURE__ */ W("p", { style: { "font-size": "12px", "max-width": "280px" } }, [
    /* @__PURE__ */ ft(" This work is licensed under a "),
    /* @__PURE__ */ W("a", {
      rel: "license",
      href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
      target: "_blank",
      style: { color: "#262b4a" }
    }, " Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ")
  ])
], -1)), Xu = ["href"], Qu = /* @__PURE__ */ Tt({
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
    const n = () => window.scrollTo({ top: 0, behavior: "smooth" }), { smAndDown: t } = la(), l = j(!1);
    return ze(() => {
      typeof window < "u" && (window.onscroll = () => {
        l.value = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
        const i = document.getElementById("sidebar"), o = document.getElementById("sidebar__menu"), s = document.getElementById("footer");
        if (o && i && s) {
          const r = window.innerHeight < o.getBoundingClientRect().height + 72 ? window.innerHeight - 72 : o.getBoundingClientRect().height, c = s.getBoundingClientRect().top, m = o.getBoundingClientRect().top, g = document.body.scrollTop;
          let v = Math.max(72, m - g);
          g + r + 72 > c && (v = Math.min(
            v,
            c - g - r
          )), i.style.top = v + "px";
        }
      });
    }), (a, i) => (Ae(), wt(Ru, {
      id: "footer",
      color: "white",
      width: "100vw",
      class: "footer pa-0"
    }, {
      default: ae(() => [
        l.value ? (Ae(), st("div", {
          key: 0,
          class: "goup",
          onClick: n
        }, [
          u(le, {
            size: "18",
            color: "#FFB71A",
            icon: "mdi-arrow-up"
          })
        ])) : St("", !0),
        u(ei, {
          fluid: "",
          style: { height: "100%" }
        }, {
          default: ae(() => [
            W("div", Nu, [
              W("div", Du, [
                W("div", zu, [
                  W("a", {
                    class: "footer__link mb-2 link-icon",
                    href: e.webLink,
                    target: "_blank"
                  }, [
                    u(le, {
                      size: "16",
                      color: "#0e1436",
                      class: "mr-2",
                      icon: "mdi-web"
                    }),
                    W("p", null, Fe(e.webLink), 1)
                  ], 8, Hu),
                  W("a", {
                    class: "footer__link mb-2 link-icon",
                    href: `mailto:${e.email}`
                  }, [
                    u(le, {
                      size: "16",
                      color: "#0e1436",
                      class: "mr-2",
                      icon: "mdi-email"
                    }),
                    W("p", null, Fe(e.email), 1)
                  ], 8, ju),
                  W("a", {
                    href: e.locationLink,
                    class: "footer__link footer__link--location mb-2 link-icon"
                  }, [
                    u(le, {
                      size: "16",
                      color: "#0e1436",
                      class: "mr-2",
                      icon: "mdi-map-marker"
                    }),
                    W("p", null, Fe(e.location), 1)
                  ], 8, Wu),
                  W("div", Gu, [
                    u(tn, null, {
                      default: ae(() => [
                        u(ct, null, {
                          default: ae(() => [
                            e.linkedinLink ? (Ae(), st("a", {
                              key: 0,
                              class: "link-icon",
                              href: e.linkedinLink,
                              target: "_blank"
                            }, [
                              u(le, {
                                size: "24",
                                color: "#0e1436",
                                class: "mr-2",
                                icon: "mdi-linkedin"
                              })
                            ], 8, Uu)) : St("", !0),
                            e.twitterLink ? (Ae(), st("a", {
                              key: 1,
                              class: "link-icon",
                              href: e.twitterLink,
                              target: "_blank"
                            }, [
                              u(le, {
                                size: "24",
                                color: "#0e1436",
                                class: "mr-2",
                                icon: "mdi-twitter"
                              })
                            ], 8, qu)) : St("", !0),
                            e.facebookLink ? (Ae(), st("a", Ku, [
                              u(le, {
                                size: "24",
                                color: "#0e1436",
                                class: "mr-2",
                                icon: "mdi-facebook"
                              })
                            ])) : St("", !0)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                Yu
              ]),
              ut(a.$slots, "supported", {}, void 0, !0)
            ]),
            u(tn, {
              class: "footer__main-footer",
              align: "center",
              justify: Ce(t) ? "center" : "space-between",
              "no-gutters": ""
            }, {
              default: ae(() => [
                u(ct, {
                  class: pt({ "footer-privacy": Ce(t) }),
                  cols: "auto"
                }, {
                  default: ae(() => [
                    W("a", {
                      href: `https://${e.env}ccaf.io/privacy_policy`
                    }, " Privacy Policy ", 8, Xu)
                  ]),
                  _: 1
                }, 8, ["class"]),
                u(ct, { cols: "auto" }, {
                  default: ae(() => [
                    W("span", null, "Cambridge Centre for Alternative Finance © " + Fe(" " + (/* @__PURE__ */ new Date()).getFullYear()), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["justify"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Vc = /* @__PURE__ */ fn(Qu, [["__scopeId", "data-v-c55fb2eb"]]), Ju = N()({
  name: "VCardActions",
  props: X(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return it({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), q(() => {
      var l;
      return u("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    }), {};
  }
}), Zu = E({
  opacity: [Number, String],
  ...X(),
  ...ie()
}, "VCardSubtitle"), ec = N()({
  name: "VCardSubtitle",
  props: Zu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return q(() => u(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), tc = jn("v-card-title"), nc = E({
  appendAvatar: String,
  appendIcon: ne,
  prependAvatar: String,
  prependIcon: ne,
  subtitle: [String, Number],
  title: [String, Number],
  ...X(),
  ...Oe()
}, "VCardItem"), lc = N()({
  name: "VCardItem",
  props: nc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return q(() => {
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
      }, t.prepend) : u(se, null, [e.prependAvatar && u(lt, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && u(le, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), u("div", {
        class: "v-card-item__content"
      }, [s && u(tc, {
        key: "title"
      }, {
        default: () => {
          var m;
          return [((m = t.title) == null ? void 0 : m.call(t)) ?? e.title];
        }
      }), r && u(ec, {
        key: "subtitle"
      }, {
        default: () => {
          var m;
          return [((m = t.subtitle) == null ? void 0 : m.call(t)) ?? e.subtitle];
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
      }, t.append) : u(se, null, [e.appendIcon && u(le, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && u(lt, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), ac = E({
  opacity: [Number, String],
  ...X(),
  ...ie()
}, "VCardText"), ic = N()({
  name: "VCardText",
  props: ac(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return q(() => u(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), oc = E({
  appendAvatar: String,
  appendIcon: ne,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: ne,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...Ye(),
  ...X(),
  ...Oe(),
  ...qe(),
  ...Qe(),
  ...Zn(),
  ...Qn(),
  ...Na(),
  ...Ve(),
  ...un(),
  ...ie(),
  ...de(),
  ...Ze({
    variant: "elevated"
  })
}, "VCard"), sc = N()({
  name: "VCard",
  directives: {
    Ripple: Nt
  },
  props: oc(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const {
      themeClasses: a
    } = ge(e), {
      borderClasses: i
    } = Xe(e), {
      colorClasses: o,
      colorStyles: s,
      variantClasses: r
    } = Ft(e), {
      densityClasses: c
    } = je(e), {
      dimensionStyles: m
    } = Ke(e), {
      elevationClasses: g
    } = Je(e), {
      loaderClasses: v
    } = el(e), {
      locationStyles: d
    } = Jn(e), {
      positionClasses: h
    } = Da(e), {
      roundedClasses: f
    } = Ie(e), b = rn(e, t), S = y(() => e.link !== !1 && b.isLink.value), _ = y(() => !e.disabled && e.link !== !1 && (e.link || b.isClickable.value));
    return q(() => {
      const w = S.value ? "a" : e.tag, x = !!(l.title || e.title != null), L = !!(l.subtitle || e.subtitle != null), V = x || L, C = !!(l.append || e.appendAvatar || e.appendIcon), $ = !!(l.prepend || e.prependAvatar || e.prependIcon), H = !!(l.image || e.image), R = V || $ || C, O = !!(l.text || e.text != null);
      return we(u(w, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": _.value
        }, a.value, i.value, o.value, c.value, g.value, v.value, h.value, f.value, r.value, e.class],
        style: [s.value, m.value, d.value, e.style],
        href: b.href.value,
        onClick: _.value && b.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var p;
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
          }, l.image) : u(qn, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(Ma, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: l.loader
          }), R && u(lc, {
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
          }), O && u(ic, {
            key: "text"
          }, {
            default: () => {
              var A;
              return [((A = l.text) == null ? void 0 : A.call(l)) ?? e.text];
            }
          }), (p = l.default) == null ? void 0 : p.call(l), l.actions && u(Ju, null, {
            default: l.actions
          }), $t(_.value, "v-card")];
        }
      }), [[at("ripple"), _.value && e.ripple]]);
    }), {};
  }
}), Mi = (e) => (an("data-v-617a78f9"), e = e(), on(), e), rc = /* @__PURE__ */ Mi(() => /* @__PURE__ */ W("div", { class: "list-line" }, null, -1)), uc = { class: "list-wrapper" }, cc = /* @__PURE__ */ Mi(() => /* @__PURE__ */ W("p", { class: "list-title" }, "CCAF:", -1)), dc = { class: "list" }, fc = { class: "list__link" }, vc = ["href"], mc = { class: "list__link" }, gc = ["href"], yc = { class: "list__link" }, hc = ["href"], bc = { class: "chips" }, Sc = /* @__PURE__ */ Tt({
  __name: "mobile-menu",
  props: {
    env: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    topic: {
      type: String,
      default: ""
    },
    activeProject: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const n = e, t = y(() => {
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
    return (l, a) => (Ae(), wt(sc, { style: { "padding-top": "24px" } }, {
      default: ae(() => [
        ut(l.$slots, "switcher", {}, void 0, !0),
        ut(l.$slots, "default", {}, void 0, !0),
        rc,
        W("div", uc, [
          cc,
          W("ul", dc, [
            W("li", fc, [
              W("a", {
                href: `https://${n.env === "demo" || n.env === "develop" ? "demo." : ""}ccaf.io/`
              }, "Home ", 8, vc)
            ]),
            W("li", mc, [
              W("a", {
                href: `https://${n.env === "demo" || n.env === "develop" ? "demo." : ""}ccaf.io/about_ccaf`
              }, "About ", 8, gc)
            ]),
            W("li", yc, [
              W("a", {
                href: `https://${n.env === "demo" || n.env === "develop" ? "demo." : ""}ccaf.io/contact${e.topic ? `?topic=${e.topic}` : ""}`
              }, "Contact ", 8, hc)
            ])
          ])
        ]),
        W("div", bc, [
          (Ae(!0), st(se, null, Zi(t.value, (i, o) => (Ae(), wt(On, {
            class: pt(["chips__item", { "chips__item-active": !o }]),
            key: i.id,
            href: o ? `https://${n.env === "demo" || n.env === "develop" ? "demo." : ""}ccaf.io/${i.link}` : void 0
          }, {
            default: ae(() => [
              ft(Fe(i.tag || i.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href"]))), 128)),
          u(On, { class: "chips__item" }, {
            default: ae(() => [
              ft(" Atlas ")
            ]),
            _: 1
          })
        ])
      ]),
      _: 3
    }));
  }
}), Ic = /* @__PURE__ */ fn(Sc, [["__scopeId", "data-v-617a78f9"]]), Ni = (e) => (an("data-v-1b275338"), e = e(), on(), e), Cc = { class: "app-loader__title" }, kc = /* @__PURE__ */ Ni(() => /* @__PURE__ */ W("div", { class: "lds-ring" }, [
  /* @__PURE__ */ W("div"),
  /* @__PURE__ */ W("div"),
  /* @__PURE__ */ W("div"),
  /* @__PURE__ */ W("div")
], -1)), wc = /* @__PURE__ */ Ni(() => /* @__PURE__ */ W("p", { class: "app-loader__state" }, "LOADING", -1)), pc = /* @__PURE__ */ Tt({
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
    return (n, t) => (Ae(), st("div", {
      class: pt(["app-loader", { "app-loader--visible": e.visible }])
    }, [
      u(ei, null, {
        default: ae(() => [
          u(tn, {
            align: "center",
            justify: "center",
            class: "flex-column"
          }, {
            default: ae(() => [
              u(ct, { cols: "12" }, {
                default: ae(() => [
                  W("h1", Cc, Fe(e.title), 1)
                ]),
                _: 1
              }),
              u(ct, {
                cols: "12",
                class: "d-flex justify-center"
              }, {
                default: ae(() => [
                  kc
                ]),
                _: 1
              }),
              u(ct, { cols: "12" }, {
                default: ae(() => [
                  wc
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
}), Ac = /* @__PURE__ */ fn(pc, [["__scopeId", "data-v-1b275338"]]);
export {
  Vc as LayoutFooter,
  xc as LayoutHeader,
  Ac as Loader,
  Ic as MobileMenu
};
