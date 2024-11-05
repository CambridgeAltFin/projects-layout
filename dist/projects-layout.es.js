import { watch as K, onScopeDispose as be, effectScope as Fn, Fragment as se, reactive as ln, computed as h, watchEffect as Ne, toRefs as ea, capitalize as Bt, isVNode as Hi, Comment as ji, shallowRef as G, unref as ye, warn as an, getCurrentInstance as Wi, ref as W, provide as pe, inject as me, defineComponent as Tt, camelize as ta, h as yt, toRaw as we, createVNode as u, mergeProps as J, onBeforeUnmount as Ee, readonly as Rn, onDeactivated as Gi, onActivated as Ui, nextTick as he, TransitionGroup as Mn, Transition as nt, isRef as vt, toRef as M, onBeforeMount as na, withDirectives as _e, resolveDirective as at, vShow as ht, onMounted as Ue, onUpdated as qi, Text as Ki, resolveDynamicComponent as Yi, Teleport as Xi, cloneVNode as Qi, createTextVNode as mt, openBlock as Ve, createBlock as ct, withCtx as ae, createElementVNode as j, renderSlot as dt, toDisplayString as Fe, normalizeClass as _t, createCommentVNode as st, pushScopeId as on, popScopeId as sn, createElementBlock as rt, renderList as Ji } from "vue";
function Ge(e, n) {
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
  }), be(() => {
    t == null || t.stop();
  });
}
const ve = typeof window < "u", Nn = ve && "IntersectionObserver" in window;
function la(e, n, t) {
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
function bt(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((l) => bt(e[l], n[l]));
}
function Zi(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), la(e, n.split("."), t));
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
    return Zi(e, n, t);
  if (Array.isArray(n))
    return la(e, n, t);
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
function aa(e) {
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
function mn(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function ia(e, n) {
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
function St(e, n) {
  const t = {
    ...e
  };
  return n.forEach((l) => delete t[l]), t;
}
function eo(e, n) {
  const t = {};
  return n.forEach((l) => t[l] = e[l]), t;
}
const oa = /^on[^a-z]/, Dn = (e) => oa.test(e), to = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function sa(e) {
  const [n, t] = fl(e, [oa]), l = St(n, to), [a, i] = fl(t, ["class", "style", "id", /^data-/]);
  return Object.assign(a, n), Object.assign(i, l), [a, i];
}
function Pe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function no(e, n) {
  let t = 0;
  const l = function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    clearTimeout(t), t = setTimeout(() => e(...i), ye(n));
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
function lo(e) {
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
function ra(e) {
  return e.map((n) => n.type === se ? ra(n.children) : n).flat();
}
function et() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (et.cache.has(e))
    return et.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return et.cache.set(e, n), n;
}
et.cache = /* @__PURE__ */ new Map();
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
function zn(e) {
  const n = ln({}), t = h(e);
  return Ne(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, {
    flush: "sync"
  }), ea(n);
}
function qt(e, n) {
  return e.includes(n);
}
function ua(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const ke = () => [Function, Array];
function ml(e, n) {
  return n = "on" + Bt(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function ao(e) {
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
function ca(e, n, t) {
  let l, a = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    a += i, l = e[a];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? !0)) && a < e.length && a >= 0);
  return l;
}
function Kt(e, n) {
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
    const s = ca(t, n);
    s ? s.focus() : Kt(e, n === "next" ? "first" : "last");
  }
}
function Yt(e, n) {
  if (!(ve && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`)))
    return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function da(e) {
  return e.some((n) => Hi(n) ? n.type === ji ? !1 : n.type !== se || da(n.children) : !0) ? e : null;
}
function io(e, n) {
  if (!ve || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function oo(e, n) {
  const t = e.clientX, l = e.clientY, a = n.getBoundingClientRect(), i = a.left, o = a.top, s = a.right, r = a.bottom;
  return t >= i && t <= s && l >= o && l <= r;
}
function xn() {
  const e = G(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => aa(e.value)
  }), n;
}
const fa = ["top", "bottom"], so = ["start", "end", "left", "right"];
function Vn(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = qt(fa, t) ? "start" : qt(so, t) ? "top" : "center"), {
    side: gl(t, n),
    align: gl(l, n)
  };
}
function gl(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function gn(e) {
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
function yn(e) {
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
  return qt(fa, e.side) ? "y" : "x";
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
function va(e) {
  return Array.isArray(e) ? new tt({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function Hn(e) {
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
function ut(e, n, t) {
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
function ro(e, n) {
  Object.keys(n).forEach((t) => {
    if (Dn(t)) {
      const l = ua(t), a = Wt.get(e);
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
function uo(e, n) {
  Object.keys(n).forEach((t) => {
    if (Dn(t)) {
      const l = ua(t), a = Wt.get(e);
      a == null || a.forEach((i) => {
        const [o, s] = i;
        o === l && (e.removeEventListener(l, s), a.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const ot = 2.4, Sl = 0.2126729, Cl = 0.7151522, kl = 0.072175, co = 0.55, fo = 0.58, vo = 0.57, mo = 0.62, zt = 0.03, wl = 1.45, go = 5e-4, yo = 1.25, ho = 1.25, _l = 0.078, pl = 12.82051282051282, Ht = 0.06, xl = 1e-3;
function Vl(e, n) {
  const t = (e.r / 255) ** ot, l = (e.g / 255) ** ot, a = (e.b / 255) ** ot, i = (n.r / 255) ** ot, o = (n.g / 255) ** ot, s = (n.b / 255) ** ot;
  let r = t * Sl + l * Cl + a * kl, c = i * Sl + o * Cl + s * kl;
  if (r <= zt && (r += (zt - r) ** wl), c <= zt && (c += (zt - c) ** wl), Math.abs(c - r) < go)
    return 0;
  let m;
  if (c > r) {
    const g = (c ** co - r ** fo) * yo;
    m = g < xl ? 0 : g < _l ? g - g * pl * Ht : g - Ht;
  } else {
    const g = (c ** mo - r ** vo) * ho;
    m = g > -xl ? 0 : g > -_l ? g - g * pl * Ht : g + Ht;
  }
  return m * 100;
}
function We(e) {
  an(`Vuetify: ${e}`);
}
function bo(e) {
  an(`Vuetify error: ${e}`);
}
function So(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, an(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
function In(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Co(e) {
  return In(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Il = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, ko = {
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
function wt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && We(`'${e}' is not a valid hex color`), {
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
    return ko[t](...a);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((l) => l + l).join("") : [6, 8].includes(n.length) || We(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && We(`'${e}' is not a valid hex(a) color`), wo(n);
  } else if (typeof e == "object") {
    if (mn(e, ["r", "g", "b"]))
      return e;
    if (mn(e, ["h", "s", "l"]))
      return xt(ma(e));
    if (mn(e, ["h", "s", "v"]))
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
  return xt(ma(e));
}
function ma(e) {
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
function wo(e) {
  e = _o(e);
  let [n, t, l, a] = lo(e, 2).map((i) => parseInt(i, 16));
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
function po(e) {
  const n = Math.abs(Vl(wt(0), wt(e)));
  return Math.abs(Vl(wt(16777215), wt(e))) > Math.min(n, 50) ? "#fff" : "#000";
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
}, "component");
function ce(e, n) {
  const t = Wi();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function Te() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = ce(e).type;
  return et((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let ga = 0, Gt = /* @__PURE__ */ new WeakMap();
function Le() {
  const e = ce("getUid");
  if (Gt.has(e))
    return Gt.get(e);
  {
    const n = ga++;
    return Gt.set(e, n), n;
  }
}
Le.reset = () => {
  ga = 0, Gt = /* @__PURE__ */ new WeakMap();
};
function xo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const Xt = Symbol.for("vuetify:defaults");
function jn() {
  const e = me(Xt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function it(e, n) {
  const t = jn(), l = W(e), a = h(() => {
    if (ye(n == null ? void 0 : n.disabled))
      return t.value;
    const o = ye(n == null ? void 0 : n.scoped), s = ye(n == null ? void 0 : n.reset), r = ye(n == null ? void 0 : n.root);
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
  return pe(Xt, a), a;
}
function Vo(e, n) {
  var t, l;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((l = e.props) == null ? void 0 : l[et(n)]) < "u";
}
function Io() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : jn();
  const l = ce("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const a = h(() => {
    var r;
    return (r = t.value) == null ? void 0 : r[e._as ?? n];
  }), i = new Proxy(e, {
    get(r, c) {
      var g, v, d, y, f, b, S;
      const m = Reflect.get(r, c);
      return c === "class" || c === "style" ? [(g = a.value) == null ? void 0 : g[c], m].filter((p) => p != null) : typeof c == "string" && !Vo(l.vnode, c) ? ((v = a.value) == null ? void 0 : v[c]) !== void 0 ? (d = a.value) == null ? void 0 : d[c] : ((f = (y = t.value) == null ? void 0 : y.global) == null ? void 0 : f[c]) !== void 0 ? (S = (b = t.value) == null ? void 0 : b.global) == null ? void 0 : S[c] : m : m;
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
    const r = xo(Xt, l);
    pe(Xt, h(() => o.value ? Re((r == null ? void 0 : r.value) ?? {}, o.value) : r == null ? void 0 : r.value));
  }
  return {
    props: i,
    provideSubDefaults: s
  };
}
function Lt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return We("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = E(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(l) {
      return ia(l, n);
    }, e.props._as = String, e.setup = function(l, a) {
      const i = jn();
      if (!i.value)
        return e._setup(l, a);
      const {
        props: o,
        provideSubDefaults: s
      } = Io(l, l._as ?? e.name, i), r = e._setup(o, a);
      return s(), r;
    };
  }
  return e;
}
function N() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? Lt : Tt)(n);
}
function Wn(e) {
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
        return yt(l.tag, {
          class: [e, l.class],
          style: l.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function ya(e) {
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
const Qt = "cubic-bezier(0.4, 0, 0.2, 1)", Ao = "cubic-bezier(0.0, 0, 0.2, 1)", Po = "cubic-bezier(0.4, 0, 1, 1)";
function ha(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? Eo(e) : Gn(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Jt(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (Gn(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function Gn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Eo(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function Bo(e) {
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
function ue(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (g) => g, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (g) => g;
  const i = ce("useProxiedModel"), o = W(e[n] !== void 0 ? e[n] : t), s = et(n), c = s !== n ? h(() => {
    var g, v, d, y;
    return e[n], !!(((g = i.vnode.props) != null && g.hasOwnProperty(n) || (v = i.vnode.props) != null && v.hasOwnProperty(s)) && ((d = i.vnode.props) != null && d.hasOwnProperty(`onUpdate:${n}`) || (y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${s}`)));
  }) : h(() => {
    var g, v;
    return e[n], !!((g = i.vnode.props) != null && g.hasOwnProperty(n) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${n}`)));
  });
  Ge(() => !c.value, () => {
    K(() => e[n], (g) => {
      o.value = g;
    });
  });
  const m = h({
    get() {
      const g = e[n];
      return l(c.value ? g : o.value);
    },
    set(g) {
      const v = a(g), d = we(c.value ? e[n] : o.value);
      d === v || l(d) === g || (o.value = v, i == null || i.emit(`update:${n}`, v));
    }
  });
  return Object.defineProperty(m, "externalValue", {
    get: () => c.value ? e[n] : o.value
  }), m;
}
const ba = Symbol.for("vuetify:locale");
function Un() {
  const e = me(ba);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function ze() {
  const e = me(ba);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const rn = ["sm", "md", "lg", "xl", "xxl"], To = Symbol.for("vuetify:display"), Lo = E({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function Ot() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  const t = me(To);
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
const Oo = Symbol.for("vuetify:goto");
function $o() {
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
function Fo(e) {
  return qn(e) ?? (document.scrollingElement || document.body);
}
function qn(e) {
  return typeof e == "string" ? document.querySelector(e) : aa(e);
}
function hn(e, n, t) {
  if (typeof e == "number")
    return n && t ? -e : e;
  let l = qn(e), a = 0;
  for (; l; )
    a += n ? l.offsetLeft : l.offsetTop, l = l.offsetParent;
  return a;
}
async function Pl(e, n, t, l) {
  const a = t ? "scrollLeft" : "scrollTop", i = Re((l == null ? void 0 : l.options) ?? $o(), n), o = l == null ? void 0 : l.rtl.value, s = (typeof e == "number" ? e : qn(e)) ?? 0, r = i.container === "parent" && s instanceof HTMLElement ? s.parentElement : Fo(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c)
    throw new TypeError(`Easing function "${i.easing}" not found.`);
  let m;
  if (typeof s == "number")
    m = hn(s, t, o);
  else if (m = hn(s, t, o) - hn(r, t, o), i.layout) {
    const y = window.getComputedStyle(s).getPropertyValue("--v-layout-top");
    y && (m -= parseInt(y, 10));
  }
  m += i.offset, m = Ro(r, m, !!o, !!t);
  const g = r[a] ?? 0;
  if (m === g)
    return Promise.resolve(m);
  const v = performance.now();
  return new Promise((d) => requestAnimationFrame(function y(f) {
    const S = (f - v) / i.duration, p = Math.floor(g + (m - g) * c(Me(S, 0, 1)));
    if (r[a] = p, S >= 1 && Math.abs(p - r[a]) < 10)
      return d(m);
    if (S > 2)
      return We("Scroll target is not reachable"), d(r[a]);
    requestAnimationFrame(y);
  }));
}
function Sa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = me(Oo), {
    isRtl: t
  } = ze();
  if (!n)
    throw new Error("[Vuetify] Could not find injected goto instance");
  const l = {
    ...n,
    // can be set via VLocaleProvider
    rtl: h(() => n.rtl.value || t.value)
  };
  async function a(i, o) {
    return Pl(i, Re(e, o), !1, l);
  }
  return a.horizontal = async (i, o) => Pl(i, Re(e, o), !0, l), a;
}
function Ro(e, n, t, l) {
  const {
    scrollWidth: a,
    scrollHeight: i
  } = e, [o, s] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let r, c;
  return l ? t ? (r = -(a - o), c = 0) : (r = 0, c = a - o) : (r = 0, c = i + -s), Math.max(Math.min(n, c), r);
}
const ne = [String, Function, Object, Array], Mo = Symbol.for("vuetify:icons"), un = E({
  icon: {
    type: ne
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), El = N()({
  name: "VComponentIcon",
  props: un(),
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
}), No = Lt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: un(),
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
  props: un(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
Lt({
  name: "VClassIcon",
  props: un(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
});
const Do = (e) => {
  const n = me(Mo);
  if (!n)
    throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: h(() => {
      var r;
      const l = ye(e);
      if (!l)
        return {
          component: El
        };
      let a = l;
      if (typeof a == "string" && (a = a.trim(), a.startsWith("$") && (a = (r = n.aliases) == null ? void 0 : r[a.slice(1)])), a || We(`Could not find aliased icon "${l}"`), Array.isArray(a))
        return {
          component: No,
          icon: a
        };
      if (typeof a != "string")
        return {
          component: El,
          icon: a
        };
      const i = Object.keys(n.sets).find((c) => typeof a == "string" && a.startsWith(`${c}:`)), o = i ? a.slice(i.length + 1) : a;
      return {
        component: n.sets[i ?? n.defaultSet].component,
        icon: o
      };
    })
  };
}, Bl = Symbol.for("vuetify:theme"), de = E({
  theme: String
}, "theme");
function ge(e) {
  ce("provideTheme");
  const n = me(Bl, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = h(() => e.theme ?? n.name.value), l = h(() => n.themes.value[t.value]), a = h(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = {
    ...n,
    name: t,
    current: l,
    themeClasses: a
  };
  return pe(Bl, i), i;
}
function gt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = xn(), l = W();
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
const zo = Symbol.for("vuetify:layout"), Ho = Symbol.for("vuetify:layout-item"), Ca = E({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function ka(e) {
  const n = me(zo);
  if (!n)
    throw new Error("[Vuetify] Could not find injected layout");
  const t = e.id ?? `layout-item-${Le()}`, l = ce("useLayoutItem");
  pe(Ho, {
    id: t
  });
  const a = G(!1);
  Gi(() => a.value = !0), Ui(() => a.value = !1);
  const i = he(), {
    layoutItemStyles: o,
    layoutItemScrimStyles: s
  } = n.register(l, {
    ...e,
    active: h(() => a.value ? !1 : e.active.value),
    id: t
  });
  return Ee(() => n.unregister(t)), {
    layoutItemStyles: o,
    layoutRect: n.layoutRect,
    layoutItemScrimStyles: s,
    layoutIsReady: i
  };
}
const ie = E({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), jo = E({
  text: String,
  ...X(),
  ...ie()
}, "VToolbarTitle"), Wo = N()({
  name: "VToolbarTitle",
  props: jo(),
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
}), Go = E({
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
    props: Go({
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
        const s = l.group ? Mn : nt;
        return yt(s, {
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
function wa(e, n) {
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
      const o = l.group ? Mn : nt;
      return () => yt(o, {
        name: l.disabled ? "" : e,
        css: !l.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...l.disabled ? {} : n
      }, i.default);
    }
  });
}
function _a() {
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
const Uo = E({
  target: [Object, Array]
}, "v-dialog-transition"), Kn = N()({
  name: "VDialogTransition",
  props: Uo(),
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
        } = Ll(e.target, a), g = ut(a, [{
          transform: `translate(${o}px, ${s}px) scale(${r}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * m,
          easing: Ao
        });
        (v = Tl(a)) == null || v.forEach((d) => {
          ut(d, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * m,
            easing: Qt
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
        } = Ll(e.target, a);
        ut(a, [{}, {
          transform: `translate(${o}px, ${s}px) scale(${r}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * m,
          easing: Po
        }).finished.then(() => i()), (v = Tl(a)) == null || v.forEach((d) => {
          ut(d, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * m,
            easing: Qt
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
function Tl(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function Ll(e, n) {
  const t = va(e), l = Hn(n), [a, i] = getComputedStyle(n).transformOrigin.split(" ").map((S) => parseFloat(S)), [o, s] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let r = t.left + t.width / 2;
  o === "left" || s === "left" ? r -= t.width / 2 : (o === "right" || s === "right") && (r += t.width / 2);
  let c = t.top + t.height / 2;
  o === "top" || s === "top" ? c -= t.height / 2 : (o === "bottom" || s === "bottom") && (c += t.height / 2);
  const m = t.width / l.width, g = t.height / l.height, v = Math.max(1, m, g), d = m / v || 0, y = g / v || 0, f = l.width * l.height / (window.innerWidth * window.innerHeight), b = f > 0.12 ? Math.min(1.5, (f - 0.12) * 10 + 1) : 1;
  return {
    x: r - (a + l.left),
    y: c - (i + l.top),
    sx: d,
    sy: y,
    speed: b
  };
}
xe("fab-transition", "center center", "out-in");
xe("dialog-bottom-transition");
xe("dialog-top-transition");
const Ol = xe("fade-transition");
xe("scale-transition");
xe("scroll-x-transition");
xe("scroll-x-reverse-transition");
xe("scroll-y-transition");
xe("scroll-y-reverse-transition");
xe("slide-x-transition");
xe("slide-x-reverse-transition");
const pa = xe("slide-y-transition");
xe("slide-y-reverse-transition");
const xa = wa("expand-transition", _a()), Va = wa("expand-x-transition", _a("", !0)), qo = E({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), re = N(!1)({
  name: "VDefaultsProvider",
  props: qo(),
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
    dimensionStyles: h(() => {
      const t = {}, l = U(e.height), a = U(e.maxHeight), i = U(e.maxWidth), o = U(e.minHeight), s = U(e.minWidth), r = U(e.width);
      return l != null && (t.height = l), a != null && (t.maxHeight = a), i != null && (t.maxWidth = i), o != null && (t.minHeight = o), s != null && (t.minWidth = s), r != null && (t.width = r), t;
    })
  };
}
function Ko(e) {
  return {
    aspectStyles: h(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const Ia = E({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...X(),
  ...qe()
}, "VResponsive"), $l = N()({
  name: "VResponsive",
  props: Ia(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: l
    } = Ko(e), {
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
function Yn(e) {
  return zn(() => {
    const n = [], t = {};
    if (e.value.background)
      if (In(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && Co(e.value.background)) {
          const l = wt(e.value.background);
          if (l.a == null || l.a === 1) {
            const a = po(l);
            t.color = a, t.caretColor = a;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    return e.value.text && (In(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), {
      colorClasses: n,
      colorStyles: t
    };
  });
}
function De(e, n) {
  const t = h(() => ({
    text: vt(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = Yn(t);
  return {
    textColorClasses: l,
    textColorStyles: a
  };
}
function Be(e, n) {
  const t = h(() => ({
    background: vt(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = Yn(t);
  return {
    backgroundColorClasses: l,
    backgroundColorStyles: a
  };
}
const Ie = E({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Ae(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    roundedClasses: h(() => {
      const l = vt(e) ? e.value : e.rounded, a = vt(e) ? e.value : e.tile, i = [];
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
const $t = E({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), je = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: l,
    disabled: a,
    group: i,
    ...o
  } = e, {
    component: s = i ? Mn : nt,
    ...r
  } = typeof l == "object" ? l : {};
  return yt(s, J(typeof l == "string" ? {
    name: a ? "" : l
  } : r, typeof l == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: a,
    group: i
  }).filter((c) => {
    let [m, g] = c;
    return g !== void 0;
  })), o), t);
};
function Yo(e, n) {
  if (!Nn)
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
    a && (!t.quiet || c.init) && (!t.once || m || c.init) && a(m, s, r), m && t.once ? Aa(e, n) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function Aa(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const Pa = {
  mounted: Yo,
  unmounted: Aa
}, Xo = E({
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
  ...Ia(),
  ...X(),
  ...Ie(),
  ...$t()
}, "VImg"), Xn = N()({
  name: "VImg",
  directives: {
    intersect: Pa
  },
  props: Xo(),
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
    } = Ae(e), s = ce("VImg"), r = G(""), c = W(), m = G(e.eager ? "loading" : "idle"), g = G(), v = G(), d = h(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), y = h(() => d.value.aspect || g.value / v.value || 0);
    K(() => e.src, () => {
      f(m.value !== "idle");
    }), K(y, (_, A) => {
      !_ && A && c.value && x(c.value);
    }), na(() => f());
    function f(_) {
      if (!(e.eager && _) && !(Nn && !_ && !e.eager)) {
        if (m.value = "loading", d.value.lazySrc) {
          const A = new Image();
          A.src = d.value.lazySrc, x(A, null);
        }
        d.value.src && he(() => {
          var A;
          t("loadstart", ((A = c.value) == null ? void 0 : A.currentSrc) || d.value.src), setTimeout(() => {
            var T;
            if (!s.isUnmounted)
              if ((T = c.value) != null && T.complete) {
                if (c.value.naturalWidth || S(), m.value === "error")
                  return;
                y.value || x(c.value, null), m.value === "loading" && b();
              } else
                y.value || x(c.value), p();
          });
        });
      }
    }
    function b() {
      var _;
      s.isUnmounted || (p(), x(c.value), m.value = "loaded", t("load", ((_ = c.value) == null ? void 0 : _.currentSrc) || d.value.src));
    }
    function S() {
      var _;
      s.isUnmounted || (m.value = "error", t("error", ((_ = c.value) == null ? void 0 : _.currentSrc) || d.value.src));
    }
    function p() {
      const _ = c.value;
      _ && (r.value = _.currentSrc || _.src);
    }
    let w = -1;
    Ee(() => {
      clearTimeout(w);
    });
    function x(_) {
      let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const T = () => {
        if (clearTimeout(w), s.isUnmounted)
          return;
        const {
          naturalHeight: D,
          naturalWidth: Q
        } = _;
        D || Q ? (g.value = Q, v.value = D) : !_.complete && m.value === "loading" && A != null ? w = window.setTimeout(T, A) : (_.currentSrc.endsWith(".svg") || _.currentSrc.startsWith("data:image/svg+xml")) && (g.value = 1, v.value = 1);
      };
      T();
    }
    const L = h(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), V = () => {
      var T;
      if (!d.value.src || m.value === "idle")
        return null;
      const _ = u("img", {
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
      return u(je, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [_e(A ? u("picture", {
          class: "v-img__picture"
        }, [A, _]) : _, [[ht, m.value === "loaded"]])]
      });
    }, C = () => u(je, {
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
    }), $ = () => l.placeholder ? u(je, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(m.value === "loading" || m.value === "error" && !l.error) && u("div", {
        class: "v-img__placeholder"
      }, [l.placeholder()])]
    }) : null, H = () => l.error ? u(je, {
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
      const _ = K(y, (A) => {
        A && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            O.value = !0;
          });
        }), _());
      });
    }
    return q(() => {
      const _ = $l.filterProps(e);
      return _e(u($l, J({
        class: ["v-img", {
          "v-img--booting": !O.value
        }, a.value, o.value, e.class],
        style: [{
          width: U(e.width === "auto" ? g.value : e.width)
        }, i.value, e.style]
      }, _, {
        aspectRatio: y.value,
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
    borderClasses: h(() => {
      const l = vt(e) ? e.value : e.border, a = [];
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
    elevationClasses: h(() => {
      const t = vt(e) ? e.value : e.elevation, l = [];
      return t == null || l.push(`elevation-${t}`), l;
    })
  };
}
const Qo = [null, "prominent", "default", "comfortable", "compact"], Ea = E({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => Qo.includes(e)
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
  ...Ie(),
  ...ie({
    tag: "header"
  }),
  ...de()
}, "VToolbar"), Fl = N()({
  name: "VToolbar",
  props: Ea(),
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
    } = Ae(e), {
      themeClasses: r
    } = ge(e), {
      rtlClasses: c
    } = ze(), m = G(!!(e.extended || (d = t.extension) != null && d.call(t))), g = h(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = h(() => m.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return it({
      VBtn: {
        variant: "text"
      }
    }), q(() => {
      var S;
      const y = !!(e.title || t.title), f = !!(t.image || e.image), b = (S = t.extension) == null ? void 0 : S.call(t);
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
        }, t.image) : u(Xn, {
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
            var p, w, x;
            return [u("div", {
              class: "v-toolbar__content",
              style: {
                height: U(g.value)
              }
            }, [t.prepend && u("div", {
              class: "v-toolbar__prepend"
            }, [(p = t.prepend) == null ? void 0 : p.call(t)]), y && u(Wo, {
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
          default: () => [u(xa, null, {
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
}), Jo = E({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function Zo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let l = 0;
  const a = W(null), i = G(0), o = G(0), s = G(0), r = G(!1), c = G(!1), m = h(() => Number(e.scrollThreshold)), g = h(() => Me((m.value - i.value) / m.value || 0)), v = () => {
    const d = a.value;
    !d || t && !t.value || (l = i.value, i.value = "window" in d ? d.pageYOffset : d.scrollTop, c.value = i.value < l, s.value = Math.abs(i.value - m.value));
  };
  return K(c, () => {
    o.value = o.value || i.value;
  }), K(r, () => {
    o.value = 0;
  }), Ue(() => {
    K(() => e.scrollTarget, (d) => {
      var f;
      const y = d ? document.querySelector(d) : window;
      if (!y) {
        We(`Unable to locate element with identifier ${d}`);
        return;
      }
      y !== a.value && ((f = a.value) == null || f.removeEventListener("scroll", v), a.value = y, a.value.addEventListener("scroll", v, {
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
  return Ue(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: h(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: Rn(e)
  };
}
const es = E({
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
  ...Ea(),
  ...Ca(),
  ...Jo(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), ts = N()({
  name: "VAppBar",
  props: es(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = W(), a = ue(e, "modelValue"), i = h(() => {
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
    }), o = h(() => {
      const w = i.value;
      return w.hide || w.fullyHide || w.inverted || w.collapse || w.elevate || w.fadeImage || // behavior.shrink ||
      !a.value;
    }), {
      currentScroll: s,
      scrollThreshold: r,
      isScrollingUp: c,
      scrollRatio: m
    } = Zo(e, {
      canScroll: o
    }), g = h(() => i.value.hide || i.value.fullyHide), v = h(() => e.collapse || i.value.collapse && (i.value.inverted ? m.value > 0 : m.value === 0)), d = h(() => e.flat || i.value.fullyHide && !a.value || i.value.elevate && (i.value.inverted ? s.value > 0 : s.value === 0)), y = h(() => i.value.fadeImage ? i.value.inverted ? 1 - m.value : m.value : void 0), f = h(() => {
      var L, V;
      const w = Number(((L = l.value) == null ? void 0 : L.contentHeight) ?? e.height), x = Number(((V = l.value) == null ? void 0 : V.extensionHeight) ?? 0);
      return g.value ? s.value < r.value || i.value.fullyHide ? w + x : w : w + x;
    });
    Ge(h(() => !!e.scrollBehavior), () => {
      Ne(() => {
        g.value ? i.value.inverted ? a.value = s.value > r.value : a.value = c.value || s.value < r.value : a.value = !0;
      });
    });
    const {
      ssrBootStyles: b
    } = Ba(), {
      layoutItemStyles: S,
      layoutIsReady: p
    } = ka({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: M(e, "location"),
      layoutSize: f,
      elementSize: G(void 0),
      active: a,
      absolute: M(e, "absolute")
    });
    return q(() => {
      const w = Fl.filterProps(e);
      return u(Fl, J({
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
        collapse: v.value,
        flat: d.value
      }), t);
    }), p;
  }
}), ns = [null, "default", "comfortable", "compact"], Oe = E({
  density: {
    type: String,
    default: "default",
    validator: (e) => ns.includes(e)
  }
}, "density");
function He(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    densityClasses: h(() => `${n}--density-${e.density}`)
  };
}
const ls = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ft(e, n) {
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
    validator: (e) => ls.includes(e)
  }
}, "variant");
function Rt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  const t = h(() => {
    const {
      variant: i
    } = ye(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: l,
    colorStyles: a
  } = Yn(h(() => {
    const {
      variant: i,
      color: o
    } = ye(e);
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
  ...Ie(),
  ...ie(),
  ...de(),
  ...Ze()
}, "VBtnGroup"), Rl = N()({
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
    } = He(e), {
      borderClasses: i
    } = Xe(e), {
      elevationClasses: o
    } = Je(e), {
      roundedClasses: s
    } = Ae(e);
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
}), Qn = E({
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
  }, l), Ee(() => {
    i.unregister(a);
  });
  const r = h(() => i.isSelected(a)), c = h(() => i.items.value[0].id === a), m = h(() => i.items.value[i.items.value.length - 1].id === a), g = h(() => r.value && [i.selectedClass.value, e.selectedClass]);
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
function Jn(e, n) {
  let t = !1;
  const l = ln([]), a = ue(e, "modelValue", [], (v) => v == null ? [] : $a(l, Pe(v)), (v) => {
    const d = is(l, v);
    return e.multiple ? d : d[0];
  }), i = ce("useGroup");
  function o(v, d) {
    const y = v, f = Symbol.for(`${n.description}:id`), S = kt(f, i == null ? void 0 : i.vnode).indexOf(d);
    ye(y.value) == null && (y.value = S, y.useIndexAsValue = !0), S > -1 ? l.splice(S, 0, y) : l.push(y);
  }
  function s(v) {
    if (t)
      return;
    r();
    const d = l.findIndex((y) => y.id === v);
    l.splice(d, 1);
  }
  function r() {
    const v = l.find((d) => !d.disabled);
    v && e.mandatory === "force" && !a.value.length && (a.value = [v.id]);
  }
  Ue(() => {
    r();
  }), Ee(() => {
    t = !0;
  }), qi(() => {
    for (let v = 0; v < l.length; v++)
      l[v].useIndexAsValue && (l[v].value = v);
  });
  function c(v, d) {
    const y = l.find((f) => f.id === v);
    if (!(d && (y != null && y.disabled)))
      if (e.multiple) {
        const f = a.value.slice(), b = f.findIndex((p) => p === v), S = ~b;
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
    if (e.multiple && We('This method is not supported when using "multiple" prop'), a.value.length) {
      const d = a.value[0], y = l.findIndex((S) => S.id === d);
      let f = (y + v) % l.length, b = l[f];
      for (; b.disabled && f !== y; )
        f = (f + v) % l.length, b = l[f];
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
    prev: () => m(l.length - 1),
    next: () => m(1),
    isSelected: (v) => a.value.includes(v),
    selectedClass: h(() => e.selectedClass),
    items: h(() => l),
    getItemIndex: (v) => as(l, v)
  };
  return pe(n, g), g;
}
function as(e, n) {
  const t = $a(e, [n]);
  return t.length ? e.findIndex((l) => l.id === t[0]) : -1;
}
function $a(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.find((o) => bt(l, o.value)), i = e[l];
    (a == null ? void 0 : a.value) != null ? t.push(a.id) : i != null && t.push(i.id);
  }), t;
}
function is(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.findIndex((i) => i.id === l);
    if (~a) {
      const i = e[a];
      t.push(i.value != null ? i.value : a);
    }
  }), t;
}
const Fa = Symbol.for("vuetify:v-btn-toggle"), os = E({
  ...Ta(),
  ...Qn()
}, "VBtnToggle");
N()({
  name: "VBtnToggle",
  props: os(),
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
    } = Jn(e, Fa);
    return q(() => {
      const r = Rl.filterProps(e);
      return u(Rl, J({
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
const ss = ["x-small", "small", "default", "large", "x-large"], Mt = E({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Nt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return zn(() => {
    let t, l;
    return qt(ss, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = {
      width: U(e.size),
      height: U(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: l
    };
  });
}
const rs = E({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: ne,
  ...X(),
  ...Mt(),
  ...ie({
    tag: "i"
  }),
  ...de()
}, "VIcon"), le = N()({
  name: "VIcon",
  props: rs(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const a = W(), {
      themeClasses: i
    } = ge(e), {
      iconData: o
    } = Do(h(() => a.value || e.icon)), {
      sizeClasses: s
    } = Nt(e), {
      textColorClasses: r,
      textColorStyles: c
    } = De(M(e, "color"));
    return q(() => {
      var v, d;
      const m = (v = l.default) == null ? void 0 : v.call(l);
      m && (a.value = (d = ra(m).filter((y) => y.type === Ki && y.children && typeof y.children == "string")[0]) == null ? void 0 : d.children);
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
  const t = W(), l = G(!1);
  if (Nn) {
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
const us = E({
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
  ...Mt(),
  ...ie({
    tag: "div"
  }),
  ...de()
}, "VProgressCircular"), cs = N()({
  name: "VProgressCircular",
  props: us(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = 20, a = 2 * Math.PI * l, i = W(), {
      themeClasses: o
    } = ge(e), {
      sizeClasses: s,
      sizeStyles: r
    } = Nt(e), {
      textColorClasses: c,
      textColorStyles: m
    } = De(M(e, "color")), {
      textColorClasses: g,
      textColorStyles: v
    } = De(M(e, "bgColor")), {
      intersectionRef: d,
      isIntersecting: y
    } = Ra(), {
      resizeRef: f,
      contentRect: b
    } = gt(), S = h(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), p = h(() => Number(e.width)), w = h(() => r.value ? Number(e.size) : b.value ? b.value.width : Math.max(p.value, 32)), x = h(() => l / (1 - p.value / w.value) * 2), L = h(() => p.value / w.value * x.value), V = h(() => U((100 - S.value) / 100 * a));
    return Ne(() => {
      d.value = i.value, f.value = i.value;
    }), q(() => u(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": y.value,
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
}), Ml = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Zn = E({
  location: String
}, "location");
function el(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: l
  } = ze();
  return {
    locationStyles: h(() => {
      if (!e.location)
        return {};
      const {
        side: i,
        align: o
      } = Vn(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
      function s(c) {
        return t ? t(c) : 0;
      }
      const r = {};
      return i !== "center" && (n ? r[Ml[i]] = `calc(100% - ${s(i)}px)` : r[i] = 0), o !== "center" ? n ? r[Ml[o]] = `calc(100% - ${s(o)}px)` : r[o] = 0 : (i === "center" ? r.top = r.left = "50%" : r[{
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
const ds = E({
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
  ...Zn({
    location: "top"
  }),
  ...Ie(),
  ...ie(),
  ...de()
}, "VProgressLinear"), fs = N()({
  name: "VProgressLinear",
  props: ds(),
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
    } = ze(), {
      themeClasses: o
    } = ge(e), {
      locationStyles: s
    } = el(e), {
      textColorClasses: r,
      textColorStyles: c
    } = De(e, "color"), {
      backgroundColorClasses: m,
      backgroundColorStyles: g
    } = Be(h(() => e.bgColor || e.color)), {
      backgroundColorClasses: v,
      backgroundColorStyles: d
    } = Be(h(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: y,
      backgroundColorStyles: f
    } = Be(e, "color"), {
      roundedClasses: b
    } = Ae(e), {
      intersectionRef: S,
      isIntersecting: p
    } = Ra(), w = h(() => parseFloat(e.max)), x = h(() => parseFloat(e.height)), L = h(() => Me(parseFloat(e.bufferValue) / w.value * 100, 0, 100)), V = h(() => Me(parseFloat(l.value) / w.value * 100, 0, 100)), C = h(() => a.value !== e.reverse), $ = h(() => e.indeterminate ? "fade-transition" : "slide-x-transition");
    function H(R) {
      if (!S.value)
        return;
      const {
        left: O,
        right: _,
        width: A
      } = S.value.getBoundingClientRect(), T = C.value ? A - R.clientX + (_ - A) : R.clientX - O;
      l.value = Math.round(T / A * w.value);
    }
    return q(() => u(e.tag, {
      ref: S,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && p.value,
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
          class: ["v-progress-linear__indeterminate", R, y.value],
          style: f.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", y.value],
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
}), tl = E({
  loading: [Boolean, String]
}, "loader");
function nl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    loaderClasses: h(() => ({
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
  })) || u(fs, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const vs = ["static", "relative", "fixed", "absolute", "sticky"], Na = E({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => vs.includes(e)
    )
  }
}, "position");
function Da(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    positionClasses: h(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function ms() {
  const e = ce("useRoute");
  return h(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function gs() {
  var e, n;
  return (n = (e = ce("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function cn(e, n) {
  var c, m;
  const t = Yi("RouterLink"), l = h(() => !!(e.href || e.to)), a = h(() => (l == null ? void 0 : l.value) || ml(n, "click") || ml(e, "click"));
  if (typeof t == "string" || !("useLink" in t))
    return {
      isLink: l,
      isClickable: a,
      href: M(e, "href")
    };
  const i = h(() => ({
    ...e,
    to: M(() => e.to || "")
  })), o = t.useLink(i.value), s = h(() => e.to ? o : void 0), r = ms();
  return {
    isLink: l,
    isClickable: a,
    route: (c = s.value) == null ? void 0 : c.route,
    navigate: (m = s.value) == null ? void 0 : m.navigate,
    isActive: h(() => {
      var g, v, d;
      return s.value ? e.exact ? r.value ? ((d = s.value.isExactActive) == null ? void 0 : d.value) && bt(s.value.route.value.query, r.value.query) : ((v = s.value.isExactActive) == null ? void 0 : v.value) ?? !1 : ((g = s.value.isActive) == null ? void 0 : g.value) ?? !1 : !1;
    }),
    href: h(() => {
      var g;
      return e.to ? (g = s.value) == null ? void 0 : g.route.value.href : e.href;
    })
  };
}
const dn = E({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let bn = !1;
function ys(e, n) {
  let t = !1, l, a;
  ve && (he(() => {
    window.addEventListener("popstate", i), l = e == null ? void 0 : e.beforeEach((o, s, r) => {
      bn ? t ? n(r) : r() : setTimeout(() => t ? n(r) : r()), bn = !0;
    }), a = e == null ? void 0 : e.afterEach(() => {
      bn = !1;
    });
  }), be(() => {
    window.removeEventListener("popstate", i), l == null || l(), a == null || a();
  }));
  function i(o) {
    var s;
    (s = o.state) != null && s.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
function hs(e, n) {
  K(() => {
    var t;
    return (t = e.isActive) == null ? void 0 : t.value;
  }, (t) => {
    e.isLink.value && t && n && he(() => {
      n(!0);
    });
  }, {
    immediate: !0
  });
}
const An = Symbol("rippleStop"), bs = 80;
function Nl(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Pn(e) {
  return e.constructor.name === "TouchEvent";
}
function za(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Ss = function(e, n) {
  var g;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = 0, a = 0;
  if (!za(e)) {
    const v = n.getBoundingClientRect(), d = Pn(e) ? e.touches[e.touches.length - 1] : e;
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
}, Zt = {
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
    } = Ss(e, n, t), g = `${i * 2}px`;
    a.className = "v-ripple__animation", a.style.width = g, a.style.height = g, n.appendChild(l);
    const v = window.getComputedStyle(n);
    v && v.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), Nl(a, `translate(${s}, ${r}) scale3d(${o},${o},${o})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
      a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), Nl(a, `translate(${c}, ${m}) scale3d(1,1,1)`);
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
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[An])) {
    if (e[An] = !0, Pn(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || za(e), t._ripple.class && (n.class = t._ripple.class), Pn(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        Zt.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, bs);
    } else
      Zt.show(e, t, n);
  }
}
function Dl(e) {
  e[An] = !0;
}
function Ce(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        Ce(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), Zt.hide(n);
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
  It = !1, Ce(e);
}
function Ua(e) {
  It && (It = !1, Ce(e));
}
function qa(e, n, t) {
  const {
    value: l,
    modifiers: a
  } = n, i = Ha(l);
  if (i || Zt.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, pn(l) && l.class && (e._ripple.class = l.class), i && !t) {
    if (a.stop) {
      e.addEventListener("touchstart", Dl, {
        passive: !0
      }), e.addEventListener("mousedown", Dl);
      return;
    }
    e.addEventListener("touchstart", Vt, {
      passive: !0
    }), e.addEventListener("touchend", Ce, {
      passive: !0
    }), e.addEventListener("touchmove", ja, {
      passive: !0
    }), e.addEventListener("touchcancel", Ce), e.addEventListener("mousedown", Vt), e.addEventListener("mouseup", Ce), e.addEventListener("mouseleave", Ce), e.addEventListener("keydown", Wa), e.addEventListener("keyup", Ga), e.addEventListener("blur", Ua), e.addEventListener("dragstart", Ce, {
      passive: !0
    });
  } else
    !i && t && Ka(e);
}
function Ka(e) {
  e.removeEventListener("mousedown", Vt), e.removeEventListener("touchstart", Vt), e.removeEventListener("touchend", Ce), e.removeEventListener("touchmove", ja), e.removeEventListener("touchcancel", Ce), e.removeEventListener("mouseup", Ce), e.removeEventListener("mouseleave", Ce), e.removeEventListener("keydown", Wa), e.removeEventListener("keyup", Ga), e.removeEventListener("dragstart", Ce), e.removeEventListener("blur", Ua);
}
function Cs(e, n) {
  qa(e, n, !1);
}
function ks(e) {
  delete e._ripple, Ka(e);
}
function ws(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = Ha(n.oldValue);
  qa(e, n, t);
}
const Dt = {
  mounted: Cs,
  unmounted: ks,
  updated: ws
}, _s = E({
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
  ...tl(),
  ...Zn(),
  ...Na(),
  ...Ie(),
  ...dn(),
  ...Mt(),
  ...ie({
    tag: "button"
  }),
  ...de(),
  ...Ze({
    variant: "elevated"
  })
}, "VBtn"), ps = N()({
  name: "VBtn",
  props: _s(),
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
    } = He(e), {
      dimensionStyles: s
    } = Ke(e), {
      elevationClasses: r
    } = Je(e), {
      loaderClasses: c
    } = nl(e), {
      locationStyles: m
    } = el(e), {
      positionClasses: g
    } = Da(e), {
      roundedClasses: v
    } = Ae(e), {
      sizeClasses: d,
      sizeStyles: y
    } = Nt(e), f = Oa(e, e.symbol, !1), b = cn(e, t), S = h(() => {
      var R;
      return e.active !== void 0 ? e.active : b.isLink.value ? (R = b.isActive) == null ? void 0 : R.value : f == null ? void 0 : f.isSelected.value;
    }), p = h(() => {
      var O, _;
      return {
        color: (f == null ? void 0 : f.isSelected.value) && (!b.isLink.value || ((O = b.isActive) == null ? void 0 : O.value)) || !f || ((_ = b.isActive) == null ? void 0 : _.value) ? e.color ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: w,
      colorStyles: x,
      variantClasses: L
    } = Rt(p), V = h(() => (f == null ? void 0 : f.disabled.value) || e.disabled), C = h(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), $ = h(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function H(R) {
      var O;
      V.value || b.isLink.value && (R.metaKey || R.ctrlKey || R.shiftKey || R.button !== 0 || t.target === "_blank") || ((O = b.navigate) == null || O.call(b, R), f == null || f.toggle());
    }
    return hs(b, f == null ? void 0 : f.select), q(() => {
      const R = b.isLink.value ? "a" : e.tag, O = !!(e.prependIcon || l.prepend), _ = !!(e.appendIcon || l.append), A = !!(e.icon && e.icon !== !0);
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
        }, a.value, i.value, w.value, o.value, r.value, c.value, g.value, v.value, d.value, L.value, e.class],
        style: [x.value, s.value, m.value, y.value, e.style],
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
          })]), !e.icon && _ && u("span", {
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
          }, [((T = l.loader) == null ? void 0 : T.call(l)) ?? u(cs, {
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
function Sn(e, n) {
  return {
    x: e.x + n.x,
    y: e.y + n.y
  };
}
function xs(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function zl(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: t,
      align: l
    } = e, a = l === "left" ? 0 : l === "center" ? n.width / 2 : l === "right" ? n.width : l, i = t === "top" ? 0 : t === "bottom" ? n.height : t;
    return Sn({
      x: a,
      y: i
    }, n);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: t,
      align: l
    } = e, a = t === "left" ? 0 : t === "right" ? n.width : t, i = l === "top" ? 0 : l === "center" ? n.height / 2 : l === "bottom" ? n.height : l;
    return Sn({
      x: a,
      y: i
    }, n);
  }
  return Sn({
    x: n.width / 2,
    y: n.height / 2
  }, n);
}
const Ya = {
  static: As,
  // specific viewport position, usually centered
  connected: Es
  // connected to a certain element
}, Vs = E({
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
function Is(e, n) {
  const t = W({}), l = W();
  ve && Ge(() => !!(n.isActive.value && e.locationStrategy), (i) => {
    var o, s;
    K(() => e.locationStrategy, i), be(() => {
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
function As() {
}
function Ps(e, n) {
  n ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const t = Hn(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function Es(e, n, t) {
  (Array.isArray(e.target.value) || Bo(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: a,
    preferredOrigin: i
  } = zn(() => {
    const y = Vn(n.location, e.isRtl.value), f = n.origin === "overlap" ? y : n.origin === "auto" ? gn(y) : Vn(n.origin, e.isRtl.value);
    return y.side === f.side && y.align === yn(f).align ? {
      preferredAnchor: yl(y),
      preferredOrigin: yl(f)
    } : {
      preferredAnchor: y,
      preferredOrigin: f
    };
  }), [o, s, r, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((y) => h(() => {
    const f = parseFloat(n[y]);
    return isNaN(f) ? 1 / 0 : f;
  })), m = h(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const y = n.offset.split(" ").map(parseFloat);
      return y.length < 2 && y.push(0), y;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let g = !1;
  const v = new ResizeObserver(() => {
    g && d();
  });
  K([e.target, e.contentEl], (y, f) => {
    let [b, S] = y, [p, w] = f;
    p && !Array.isArray(p) && v.unobserve(p), b && !Array.isArray(b) && v.observe(b), w && v.unobserve(w), S && v.observe(S);
  }, {
    immediate: !0
  }), be(() => {
    v.disconnect();
  });
  function d() {
    if (g = !1, requestAnimationFrame(() => g = !0), !e.target.value || !e.contentEl.value)
      return;
    const y = va(e.target.value), f = Ps(e.contentEl.value, e.isRtl.value), b = Jt(e.contentEl.value), S = 12;
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (f.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), f.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const p = b.reduce((O, _) => {
      const A = _.getBoundingClientRect(), T = new tt({
        x: _ === document.documentElement ? 0 : A.x,
        y: _ === document.documentElement ? 0 : A.y,
        width: _.clientWidth,
        height: _.clientHeight
      });
      return O ? new tt({
        x: Math.max(O.left, T.left),
        y: Math.max(O.top, T.top),
        width: Math.min(O.right, T.right) - Math.max(O.left, T.left),
        height: Math.min(O.bottom, T.bottom) - Math.max(O.top, T.top)
      }) : T;
    }, void 0);
    p.x += S, p.y += S, p.width -= S * 2, p.height -= S * 2;
    let w = {
      anchor: a.value,
      origin: i.value
    };
    function x(O) {
      const _ = new tt(f), A = zl(O.anchor, y), T = zl(O.origin, _);
      let {
        x: D,
        y: Q
      } = xs(A, T);
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
      return _.x += D, _.y += Q, _.width = Math.min(_.width, r.value), _.height = Math.min(_.height, c.value), {
        overflows: bl(_, p),
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
        bo("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: O,
        y: _,
        overflows: A
      } = x(w);
      L += O, V += _, f.x += O, f.y += _;
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
            }, k = I === "x" ? T === "y" ? yn : gn : T === "y" ? gn : yn;
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
        const T = bl(f, p);
        C.x = p.width - T.x.before - T.x.after, C.y = p.height - T.y.before - T.y.after, L += T.x.before, f.x += T.x.before, V += T.y.before, f.y += T.y.before;
      }
      break;
    }
    const R = hl(w.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`,
      transformOrigin: `${w.origin.side} ${w.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: U(Cn(V)),
      left: e.isRtl.value ? void 0 : U(Cn(L)),
      right: e.isRtl.value ? U(Cn(-L)) : void 0,
      minWidth: U(R === "y" ? Math.min(o.value, y.width) : o.value),
      maxWidth: U(Hl(Me(C.x, o.value === 1 / 0 ? 0 : o.value, r.value))),
      maxHeight: U(Hl(Me(C.y, s.value === 1 / 0 ? 0 : s.value, c.value)))
    }), {
      available: C,
      contentBox: f
    };
  }
  return K(() => [a.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => d()), he(() => {
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
function Cn(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Hl(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let En = !0;
const en = [];
function Bs(e) {
  !En || en.length ? (en.push(e), Bn()) : (En = !1, e(), Bn());
}
let jl = -1;
function Bn() {
  cancelAnimationFrame(jl), jl = requestAnimationFrame(() => {
    const e = en.shift();
    e && e(), en.length ? Bn() : En = !0;
  });
}
const Ut = {
  none: null,
  close: Os,
  block: $s,
  reposition: Fs
}, Ts = E({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Ut
  }
}, "VOverlay-scroll-strategies");
function Ls(e, n) {
  if (!ve)
    return;
  let t;
  Ne(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = Fn(), await new Promise((l) => setTimeout(l)), t.active && t.run(() => {
      var l;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (l = Ut[e.scrollStrategy]) == null || l.call(Ut, n, e, t);
    }));
  }), be(() => {
    t == null || t.stop();
  });
}
function Os(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  Xa(e.targetEl.value ?? e.contentEl.value, n);
}
function $s(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, l = [.../* @__PURE__ */ new Set([...Jt(e.targetEl.value, n.contained ? t : void 0), ...Jt(e.contentEl.value, n.contained ? t : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = ((s) => Gn(s) && s)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, r) => {
    s.style.setProperty("--v-body-scroll-x", U(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", U(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", U(a)), s.classList.add("v-overlay-scroll-blocked");
  }), be(() => {
    l.forEach((s, r) => {
      const c = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), m = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), g = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -c, s.scrollTop = -m, s.style.scrollBehavior = g;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Fs(e, n, t) {
  let l = !1, a = -1, i = -1;
  function o(s) {
    Bs(() => {
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
  }), be(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
}
function Xa(e, n) {
  const t = [document, ...Jt(e)];
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
const Tn = Symbol.for("vuetify:v-menu"), Rs = E({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Ms(e, n) {
  let t = () => {
  };
  function l(o) {
    t == null || t();
    const s = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((r) => {
      t = io(s, () => {
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
const Ns = E({
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
  ...Rs()
}, "VOverlay-activator");
function Ds(e, n) {
  let {
    isActive: t,
    isTop: l
  } = n;
  const a = ce("useActivator"), i = W();
  let o = !1, s = !1, r = !0;
  const c = h(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), m = h(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: g,
    runCloseDelay: v
  } = Ms(e, (C) => {
    C === (e.openOnHover && o || c.value && s) && !(e.openOnHover && t.value && !l.value) && (t.value !== C && (r = !0), t.value = C);
  }), d = W(), y = {
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
      Yt(C.target, ":focus-visible") !== !1 && (s = !0, C.stopPropagation(), i.value = C.currentTarget || C.target, g());
    },
    onBlur: (C) => {
      s = !1, C.stopPropagation(), v();
    }
  }, f = h(() => {
    const C = {};
    return m.value && (C.onClick = y.onClick), e.openOnHover && (C.onMouseenter = y.onMouseenter, C.onMouseleave = y.onMouseleave), c.value && (C.onFocus = y.onFocus, C.onBlur = y.onBlur), C;
  }), b = h(() => {
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
      const $ = me(Tn, null);
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
  const p = xn();
  Ne(() => {
    p.value && he(() => {
      i.value = p.el;
    });
  });
  const w = xn(), x = h(() => e.target === "cursor" && d.value ? d.value : w.value ? w.el : Qa(e.target, a) || i.value), L = h(() => Array.isArray(x.value) ? void 0 : x.value);
  let V;
  return K(() => !!e.activator, (C) => {
    C && ve ? (V = Fn(), V.run(() => {
      zs(e, a, {
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
    activatorRef: p,
    target: x,
    targetEl: L,
    targetRef: w,
    activatorEvents: f,
    contentEvents: b,
    scrimEvents: S
  };
}
function zs(e, n, t) {
  let {
    activatorEl: l,
    activatorEvents: a
  } = t;
  K(() => e.activator, (r, c) => {
    if (c && r !== c) {
      const m = s(c);
      m && o(m);
    }
    r && he(() => i());
  }, {
    immediate: !0
  }), K(() => e.activatorProps, () => {
    i();
  }), be(() => {
    o();
  });
  function i() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    r && ro(r, J(a.value, c));
  }
  function o() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    r && uo(r, J(a.value, c));
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
function Hs() {
  if (!ve)
    return G(!1);
  const {
    ssr: e
  } = Ot();
  if (e) {
    const n = G(!1);
    return Ue(() => {
      n.value = !0;
    }), n;
  } else
    return G(!0);
}
const js = E({
  eager: Boolean
}, "lazy");
function Ws(e, n) {
  const t = G(!1), l = h(() => t.value || e.eager || n.value);
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
function ll() {
  const n = ce("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const Wl = Symbol.for("vuetify:stack"), Ct = ln([]);
function Gs(e, n, t) {
  const l = ce("useStack"), a = !t, i = me(Wl, void 0), o = ln({
    activeChildren: /* @__PURE__ */ new Set()
  });
  pe(Wl, o);
  const s = G(+n.value);
  Ge(e, () => {
    var g;
    const m = (g = Ct.at(-1)) == null ? void 0 : g[1];
    s.value = m ? m + 10 : +n.value, a && Ct.push([l.uid, s.value]), i == null || i.activeChildren.add(l.uid), be(() => {
      if (a) {
        const v = we(Ct).findIndex((d) => d[0] === l.uid);
        Ct.splice(v, 1);
      }
      i == null || i.activeChildren.delete(l.uid);
    });
  });
  const r = G(!0);
  a && Ne(() => {
    var g;
    const m = ((g = Ct.at(-1)) == null ? void 0 : g[0]) === l.uid;
    setTimeout(() => r.value = m);
  });
  const c = h(() => !o.activeChildren.size);
  return {
    globalTop: Rn(r),
    localTop: c,
    stackStyles: h(() => ({
      zIndex: s.value
    }))
  };
}
function Us(e) {
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
function qs() {
  return !0;
}
function Ja(e, n, t) {
  if (!e || Za(e, t) === !1)
    return !1;
  const l = ya(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const a = (typeof t.value == "object" && t.value.include || (() => []))();
  return a.push(n), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Za(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || qs)(e);
}
function Ks(e, n, t) {
  const l = typeof t.value == "function" ? t.value : t.value.handler;
  n._clickOutside.lastMousedownWasOutside && Ja(e, n, t) && setTimeout(() => {
    Za(e, t) && l && l(e);
  }, 0);
}
function Gl(e, n) {
  const t = ya(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Ys = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (a) => Ks(a, e, n), l = (a) => {
      e._clickOutside.lastMousedownWasOutside = Ja(a, e, n);
    };
    Gl(e, (a) => {
      a.addEventListener("click", t, !0), a.addEventListener("mousedown", l, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: l
    };
  },
  unmounted(e, n) {
    e._clickOutside && (Gl(e, (t) => {
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
function Xs(e) {
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
const al = E({
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
  ...Ns(),
  ...X(),
  ...qe(),
  ...js(),
  ...Vs(),
  ...Ts(),
  ...de(),
  ...$t()
}, "VOverlay"), tn = N()({
  name: "VOverlay",
  directives: {
    ClickOutside: Ys
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...al()
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
    } = Us(h(() => e.attach || e.contained)), {
      themeClasses: r
    } = ge(e), {
      rtlClasses: c,
      isRtl: m
    } = ze(), {
      hasContent: g,
      onAfterLeave: v
    } = Ws(e, o), d = Be(h(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: y,
      localTop: f,
      stackStyles: b
    } = Gs(o, M(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: S,
      activatorRef: p,
      target: w,
      targetEl: x,
      targetRef: L,
      activatorEvents: V,
      contentEvents: C,
      scrimEvents: $
    } = Ds(e, {
      isActive: o,
      isTop: f
    }), {
      dimensionStyles: H
    } = Ke(e), R = Hs(), {
      scopeId: O
    } = ll();
    K(() => e.disabled, (z) => {
      z && (o.value = !1);
    });
    const _ = W(), A = W(), T = W(), {
      contentStyles: D,
      updateLocation: Q
    } = Is(e, {
      isRtl: m,
      contentEl: T,
      target: w,
      isActive: o
    });
    Ls(e, {
      root: _,
      contentEl: T,
      targetEl: x,
      isActive: o,
      updateLocation: Q
    });
    function Z(z) {
      a("click:outside", z), e.persistent ? F() : o.value = !1;
    }
    function I(z) {
      return o.value && y.value && // If using scrim, only close if clicking on it rather than anything opened on top
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
      z.key === "Escape" && y.value && (e.persistent ? F() : (o.value = !1, (te = T.value) != null && te.contains(document.activeElement) && ((oe = S.value) == null || oe.focus())));
    }
    const k = gs();
    Ge(() => e.closeOnBack, () => {
      ys(k, (z) => {
        y.value && o.value ? (z(!1), e.persistent ? F() : o.value = !1) : z();
      });
    });
    const B = W();
    K(() => o.value && (e.absolute || e.contained) && s.value == null, (z) => {
      if (z) {
        const te = ha(_.value);
        te && te !== document.scrollingElement && (B.value = te.scrollTop);
      }
    });
    function F() {
      e.noClickAnimation || T.value && ut(T.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Qt
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
          ref: p
        }, V.value, e.activatorProps)
      }), R.value && g.value && u(Xi, {
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
          ref: _
        }, O, l), [u(Xs, J({
          color: d,
          modelValue: o.value && !!e.scrim,
          ref: A
        }, $.value), null), u(je, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: w.value,
          onAfterEnter: Y,
          onAfterLeave: ee
        }, {
          default: () => {
            var te;
            return [_e(u("div", J({
              ref: T,
              class: ["v-overlay__content", e.contentClass],
              style: [H.value, D.value]
            }, C.value, e.contentProps), [(te = t.default) == null ? void 0 : te.call(t, {
              isActive: o
            })]), [[ht, o.value], [at("click-outside"), {
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
      globalTop: y,
      localTop: f,
      updateLocation: Q
    };
  }
}), kn = Symbol("Forwarded refs");
function wn(e, n) {
  let t = e;
  for (; t; ) {
    const l = Reflect.getOwnPropertyDescriptor(t, n);
    if (l)
      return l;
    t = Object.getPrototypeOf(t);
  }
}
function fn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  return e[kn] = t, new Proxy(e, {
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
          const c = wn(r.value, i) ?? ("_" in r.value ? wn((s = r.value._) == null ? void 0 : s.setupState, i) : void 0);
          if (c)
            return c;
        }
        for (const r of t) {
          const c = r.value && r.value[kn];
          if (!c)
            continue;
          const m = c.slice();
          for (; m.length; ) {
            const g = m.shift(), v = wn(g.value, i);
            if (v)
              return v;
            const d = g.value && g.value[kn];
            d && m.push(...d);
          }
        }
      }
    }
  });
}
const Qs = E({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...al({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: Kn
    },
    zIndex: 2400
  })
}, "VDialog"), Js = N()({
  name: "VDialog",
  props: Qs(),
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
    } = ll(), o = W();
    function s(m) {
      var d, y;
      const g = m.relatedTarget, v = m.target;
      if (g !== v && ((d = o.value) != null && d.contentEl) && // We're the topmost dialog
      ((y = o.value) != null && y.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(v) && // It isn't inside the dialog body
      !o.value.contentEl.contains(v)) {
        const f = pt(o.value.contentEl);
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
      m || (await he(), (g = o.value.activatorEl) == null || g.focus({
        preventScroll: !0
      }));
    }), q(() => {
      const m = tn.filterProps(e), g = J({
        "aria-haspopup": "dialog",
        "aria-expanded": String(a.value)
      }, e.activatorProps), v = J({
        tabindex: -1
      }, e.contentProps);
      return u(tn, J({
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
    }), fn({}, o);
  }
}), Zs = E({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...X(),
  ...ie()
}, "VContainer"), ei = N()({
  name: "VContainer",
  props: Zs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: l
    } = ze();
    return q(() => u(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, l.value, e.class],
      style: e.style
    }, t)), {};
  }
}), ti = rn.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), ni = rn.reduce((e, n) => {
  const t = "offset" + Bt(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), li = rn.reduce((e, n) => {
  const t = "order" + Bt(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Ul = {
  col: Object.keys(ti),
  offset: Object.keys(ni),
  order: Object.keys(li)
};
function er(e, n, t) {
  let l = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return e === "col" && (l = "v-" + l), e === "col" && (t === "" || t === !0) || (l += `-${t}`), l.toLowerCase();
  }
}
const tr = ["auto", "start", "end", "center", "baseline", "stretch"], nr = E({
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
    validator: (e) => tr.includes(e)
  },
  ...X(),
  ...ie()
}, "VCol"), ft = N()({
  name: "VCol",
  props: nr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => {
      const a = [];
      let i;
      for (i in Ul)
        Ul[i].forEach((s) => {
          const r = e[s], c = er(i, s, r);
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
      return yt(e.tag, {
        class: [l.value, e.class],
        style: e.style
      }, (a = t.default) == null ? void 0 : a.call(t));
    };
  }
}), il = ["start", "end", "center"], ai = ["space-between", "space-around", "space-evenly"];
function ol(e, n) {
  return rn.reduce((t, l) => {
    const a = e + Bt(l);
    return t[a] = n(), t;
  }, {});
}
const lr = [...il, "baseline", "stretch"], ii = (e) => lr.includes(e), oi = ol("align", () => ({
  type: String,
  default: null,
  validator: ii
})), ar = [...il, ...ai], si = (e) => ar.includes(e), ri = ol("justify", () => ({
  type: String,
  default: null,
  validator: si
})), ir = [...il, ...ai, "stretch"], ui = (e) => ir.includes(e), ci = ol("alignContent", () => ({
  type: String,
  default: null,
  validator: ui
})), ql = {
  align: Object.keys(oi),
  justify: Object.keys(ri),
  alignContent: Object.keys(ci)
}, or = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function sr(e, n, t) {
  let l = or[e];
  if (t != null) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return l += `-${t}`, l.toLowerCase();
  }
}
const rr = E({
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
}, "VRow"), nn = N()({
  name: "VRow",
  props: rr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => {
      const a = [];
      let i;
      for (i in ql)
        ql[i].forEach((o) => {
          const s = e[o], r = sr(i, o, s);
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
      return yt(e.tag, {
        class: ["v-row", l.value, e.class],
        style: e.style
      }, (a = t.default) == null ? void 0 : a.call(t));
    };
  }
}), ur = Wn("v-spacer", "div", "VSpacer"), Ln = Symbol.for("vuetify:list");
function di() {
  const e = me(Ln, {
    hasPrepend: G(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: G(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return pe(Ln, n), e;
}
function fi() {
  return me(Ln, null);
}
const sl = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: l,
        value: a,
        activated: i
      } = t;
      return l = we(l), e && !a && i.size === 1 && i.has(l) || (a ? i.add(l) : i.delete(l)), i;
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
  const n = sl(e);
  return {
    activate: (l) => {
      let {
        activated: a,
        id: i,
        ...o
      } = l;
      i = we(i);
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
}, cr = (e) => {
  const n = sl(e);
  return {
    activate: (l) => {
      let {
        id: a,
        activated: i,
        children: o,
        ...s
      } = l;
      return a = we(a), o.has(a) ? i : n.activate({
        id: a,
        activated: i,
        children: o,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, dr = (e) => {
  const n = vi(e);
  return {
    activate: (l) => {
      let {
        id: a,
        activated: i,
        children: o,
        ...s
      } = l;
      return a = we(a), o.has(a) ? i : n.activate({
        id: a,
        activated: i,
        children: o,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, fr = {
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
}, vr = {
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
}, rl = (e) => {
  const n = {
    select: (t) => {
      let {
        id: l,
        value: a,
        selected: i
      } = t;
      if (l = we(l), e && !a) {
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
  const n = rl(e);
  return {
    select: (l) => {
      let {
        selected: a,
        id: i,
        ...o
      } = l;
      i = we(i);
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
}, mr = (e) => {
  const n = rl(e);
  return {
    select: (l) => {
      let {
        id: a,
        selected: i,
        children: o,
        ...s
      } = l;
      return a = we(a), o.has(a) ? i : n.select({
        id: a,
        selected: i,
        children: o,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, gr = (e) => {
  const n = gi(e);
  return {
    select: (l) => {
      let {
        id: a,
        selected: i,
        children: o,
        ...s
      } = l;
      return a = we(a), o.has(a) ? i : n.select({
        id: a,
        selected: i,
        children: o,
        ...s
      });
    },
    in: n.in,
    out: n.out
  };
}, yr = (e) => {
  const n = {
    select: (t) => {
      let {
        id: l,
        value: a,
        selected: i,
        children: o,
        parents: s
      } = t;
      l = we(l);
      const r = new Map(i), c = [l];
      for (; c.length; ) {
        const g = c.shift();
        i.set(g, a ? "on" : "off"), o.has(g) && c.push(...o.get(g));
      }
      let m = s.get(l);
      for (; m; ) {
        const g = o.get(m), v = g.every((y) => i.get(y) === "on"), d = g.every((y) => !i.has(y) || i.get(y) === "off");
        i.set(m, v ? "on" : d ? "off" : "indeterminate"), m = s.get(m);
      }
      return e && !a && Array.from(i.entries()).reduce((v, d) => {
        let [y, f] = d;
        return f === "on" && v.push(y), v;
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
    parents: W(/* @__PURE__ */ new Map()),
    children: W(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: W(!1),
    selectable: W(!1),
    opened: W(/* @__PURE__ */ new Set()),
    activated: W(/* @__PURE__ */ new Set()),
    selected: W(/* @__PURE__ */ new Map()),
    selectedValues: W([])
  }
}, hr = E({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), br = (e) => {
  let n = !1;
  const t = W(/* @__PURE__ */ new Map()), l = W(/* @__PURE__ */ new Map()), a = ue(e, "opened", e.opened, (d) => new Set(d), (d) => [...d.values()]), i = h(() => {
    if (typeof e.activeStrategy == "object")
      return e.activeStrategy;
    if (typeof e.activeStrategy == "function")
      return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return cr(e.mandatory);
      case "single-leaf":
        return dr(e.mandatory);
      case "independent":
        return sl(e.mandatory);
      case "single-independent":
      default:
        return vi(e.mandatory);
    }
  }), o = h(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    if (typeof e.selectStrategy == "function")
      return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return gr(e.mandatory);
      case "leaf":
        return mr(e.mandatory);
      case "independent":
        return rl(e.mandatory);
      case "single-independent":
        return gi(e.mandatory);
      case "classic":
      default:
        return yr(e.mandatory);
    }
  }), s = h(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return vr;
      case "single":
        return fr;
      case "multiple":
      default:
        return mi;
    }
  }), r = ue(e, "activated", e.activated, (d) => i.value.in(d, t.value, l.value), (d) => i.value.out(d, t.value, l.value)), c = ue(e, "selected", e.selected, (d) => o.value.in(d, t.value, l.value), (d) => o.value.out(d, t.value, l.value));
  Ee(() => {
    n = !0;
  });
  function m(d) {
    const y = [];
    let f = d;
    for (; f != null; )
      y.unshift(f), f = l.value.get(f);
    return y;
  }
  const g = ce("nested"), v = {
    id: G(),
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
          path: m(d),
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
          path: m(d),
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
        b && (c.value = b), v.root.openOnSelect(d, y, f);
      },
      activate: (d, y, f) => {
        if (!e.activatable)
          return v.root.select(d, !0, f);
        g.emit("click:activate", {
          id: d,
          value: y,
          path: m(d),
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
  return pe(At, v), v.root;
}, hi = (e, n) => {
  const t = me(At, yi), l = Symbol(Le()), a = h(() => e.value !== void 0 ? e.value : l), i = {
    ...t,
    id: a,
    open: (o, s) => t.root.open(a.value, o, s),
    openOnSelect: (o, s) => t.root.openOnSelect(a.value, o, s),
    isOpen: h(() => t.root.opened.value.has(a.value)),
    parent: h(() => t.root.parents.value.get(a.value)),
    activate: (o, s) => t.root.activate(a.value, o, s),
    isActivated: h(() => t.root.activated.value.has(we(a.value))),
    select: (o, s) => t.root.select(a.value, o, s),
    isSelected: h(() => t.root.selected.value.get(we(a.value)) === "on"),
    isIndeterminate: h(() => t.root.selected.value.get(a.value) === "indeterminate"),
    isLeaf: h(() => !t.root.children.value.get(a.value)),
    isGroupActivator: t.isGroupActivator
  };
  return !t.isGroupActivator && t.root.register(a.value, t.id.value, n), Ee(() => {
    !t.isGroupActivator && t.root.unregister(a.value);
  }), n && pe(At, i), i;
}, Sr = () => {
  const e = me(At, yi);
  pe(At, {
    ...e,
    isGroupActivator: !0
  });
}, Cr = Lt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return Sr(), () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), kr = E({
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
}, "VListGroup"), Kl = N()({
  name: "VListGroup",
  props: kr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: l,
      open: a,
      id: i
    } = hi(M(e, "value"), !0), o = h(() => `v-list-group--id-${String(i.value)}`), s = fi(), {
      isBooted: r
    } = Ba();
    function c(d) {
      d.stopPropagation(), a(!l.value, d);
    }
    const m = h(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), g = h(() => l.value ? e.collapseIcon : e.expandIcon), v = h(() => ({
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
        default: () => [u(Cr, null, {
          default: () => [t.activator({
            props: m.value,
            isOpen: l.value
          })]
        })]
      }), u(je, {
        transition: {
          component: xa
        },
        disabled: !r.value
      }, {
        default: () => {
          var d;
          return [_e(u("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(d = t.default) == null ? void 0 : d.call(t)]), [[ht, l.value]])];
        }
      })]
    })), {
      isOpen: l
    };
  }
}), wr = E({
  opacity: [Number, String],
  ...X(),
  ...ie()
}, "VListItemSubtitle"), _r = N()({
  name: "VListItemSubtitle",
  props: wr(),
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
}), pr = Wn("v-list-item-title"), xr = E({
  start: Boolean,
  end: Boolean,
  icon: ne,
  image: String,
  text: String,
  ...X(),
  ...Oe(),
  ...Ie(),
  ...Mt(),
  ...ie(),
  ...de(),
  ...Ze({
    variant: "flat"
  })
}, "VAvatar"), lt = N()({
  name: "VAvatar",
  props: xr(),
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
    } = He(e), {
      roundedClasses: r
    } = Ae(e), {
      sizeClasses: c,
      sizeStyles: m
    } = Nt(e);
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
      }) : e.image ? u(Xn, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? u(le, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Ft(!1, "v-avatar")]
    })), {};
  }
}), Vr = E({
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
  ...Ie(),
  ...dn(),
  ...ie(),
  ...de(),
  ...Ze({
    variant: "text"
  })
}, "VListItem"), Pt = N()({
  name: "VListItem",
  directives: {
    Ripple: Dt
  },
  props: Vr(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: l,
      emit: a
    } = n;
    const i = cn(e, t), o = h(() => e.value === void 0 ? i.href.value : e.value), {
      activate: s,
      isActivated: r,
      select: c,
      isSelected: m,
      isIndeterminate: g,
      isGroupActivator: v,
      root: d,
      parent: y,
      openOnSelect: f
    } = hi(o, !1), b = fi(), S = h(() => {
      var k;
      return e.active !== !1 && (e.active || ((k = i.isActive) == null ? void 0 : k.value) || (d.activatable.value ? r.value : m.value));
    }), p = h(() => e.link !== !1 && i.isLink.value), w = h(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || !!b && (d.selectable.value || d.activatable.value || e.value != null))), x = h(() => e.rounded || e.nav), L = h(() => e.color ?? e.activeColor), V = h(() => ({
      color: S.value ? L.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    K(() => {
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
    } = Xe(e), {
      colorClasses: H,
      colorStyles: R,
      variantClasses: O
    } = Rt(V), {
      densityClasses: _
    } = He(e), {
      dimensionStyles: A
    } = Ke(e), {
      elevationClasses: T
    } = Je(e), {
      roundedClasses: D
    } = Ae(x), Q = h(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), Z = h(() => ({
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
      const k = p.value ? "a" : e.tag, B = l.title || e.title != null, F = l.subtitle || e.subtitle != null, Y = !!(e.appendAvatar || e.appendIcon), ee = !!(Y || l.append), z = !!(e.prependAvatar || e.prependIcon), te = !!(z || l.prepend);
      return b == null || b.updateHasPrepend(te), e.activeColor && So("active-color", ["color", "base-color"]), _e(u(k, {
        class: ["v-list-item", {
          "v-list-item--active": S.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": w.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !te && (b == null ? void 0 : b.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && S.value
        }, C.value, $.value, H.value, _.value, T.value, Q.value, D.value, O.value, e.class],
        style: [R.value, A.value, e.style],
        href: i.href.value,
        tabindex: w.value ? b ? -2 : 0 : void 0,
        onClick: I,
        onKeydown: w.value && !p.value && P
      }, {
        default: () => {
          var oe;
          return [Ft(w.value || S.value, "v-list-item"), te && u("div", {
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
          }, [B && u(pr, {
            key: "title"
          }, {
            default: () => {
              var fe;
              return [((fe = l.title) == null ? void 0 : fe.call(l, {
                title: e.title
              })) ?? e.title];
            }
          }), F && u(_r, {
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
}), Ir = E({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...X(),
  ...ie()
}, "VListSubheader"), Ar = N()({
  name: "VListSubheader",
  props: Ir(),
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
}), Pr = E({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...X(),
  ...de()
}, "VDivider"), Er = N()({
  name: "VDivider",
  props: Pr(),
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
    } = De(M(e, "color")), s = h(() => {
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
}), Br = E({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), bi = N()({
  name: "VListChildren",
  props: Br(),
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
          })) ?? u(Er, s, null);
        if (r === "subheader")
          return ((d = t.subheader) == null ? void 0 : d.call(t, {
            props: s
          })) ?? u(Ar, s, null);
        const m = {
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
        }, g = Kl.filterProps(s);
        return o ? u(Kl, J({
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
    default: bt
  }
}, "list-items");
function On(e, n) {
  const t = $e(n, e.itemTitle, n), l = $e(n, e.itemValue, t), a = $e(n, e.itemChildren), i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? St(n, ["children"]) : n : void 0 : $e(n, e.itemProps), o = {
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
    t.push(On(e, l));
  return t;
}
function Tr(e) {
  const n = h(() => Ci(e, e.items)), t = h(() => n.value.some((i) => i.value === null));
  function l(i) {
    return t.value || (i = i.filter((o) => o !== null)), i.map((o) => e.returnObject && typeof o == "string" ? On(e, o) : n.value.find((s) => e.valueComparator(o, s.value)) || On(e, o));
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
function Lr(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Or(e, n) {
  const t = $e(n, e.itemType, "item"), l = Lr(n) ? n : $e(n, e.itemTitle), a = $e(n, e.itemValue, void 0), i = $e(n, e.itemChildren), o = e.itemProps === !0 ? St(n, ["children"]) : $e(n, e.itemProps), s = {
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
    t.push(Or(e, l));
  return t;
}
function $r(e) {
  return {
    items: h(() => ki(e, e.items))
  };
}
const Fr = E({
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
  ...hr({
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
  ...Ie(),
  ...ie(),
  ...de(),
  ...Ze({
    variant: "text"
  })
}, "VList"), Rr = N()({
  name: "VList",
  props: Fr(),
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
    } = $r(e), {
      themeClasses: a
    } = ge(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Be(M(e, "bgColor")), {
      borderClasses: s
    } = Xe(e), {
      densityClasses: r
    } = He(e), {
      dimensionStyles: c
    } = Ke(e), {
      elevationClasses: m
    } = Je(e), {
      roundedClasses: g
    } = Ae(e), {
      children: v,
      open: d,
      parents: y,
      select: f
    } = br(e), b = h(() => e.lines ? `v-list--${e.lines}-line` : void 0), S = M(e, "activeColor"), p = M(e, "baseColor"), w = M(e, "color");
    di(), it({
      VListGroup: {
        activeColor: S,
        baseColor: p,
        color: w,
        expandIcon: M(e, "expandIcon"),
        collapseIcon: M(e, "collapseIcon")
      },
      VListItem: {
        activeClass: M(e, "activeClass"),
        activeColor: S,
        baseColor: p,
        color: w,
        density: M(e, "density"),
        disabled: M(e, "disabled"),
        lines: M(e, "lines"),
        nav: M(e, "nav"),
        slim: M(e, "slim"),
        variant: M(e, "variant")
      }
    });
    const x = G(!1), L = W();
    function V(_) {
      x.value = !0;
    }
    function C(_) {
      x.value = !1;
    }
    function $(_) {
      var A;
      !x.value && !(_.relatedTarget && ((A = L.value) != null && A.contains(_.relatedTarget))) && O();
    }
    function H(_) {
      const A = _.target;
      if (!(!L.value || ["INPUT", "TEXTAREA"].includes(A.tagName))) {
        if (_.key === "ArrowDown")
          O("next");
        else if (_.key === "ArrowUp")
          O("prev");
        else if (_.key === "Home")
          O("first");
        else if (_.key === "End")
          O("last");
        else
          return;
        _.preventDefault();
      }
    }
    function R(_) {
      x.value = !0;
    }
    function O(_) {
      if (L.value)
        return Kt(L.value, _);
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
      parents: y
    };
  }
}), Mr = E({
  text: String,
  onClick: ke(),
  ...X(),
  ...de()
}, "VLabel"), wi = N()({
  name: "VLabel",
  props: Mr(),
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
}), _i = Symbol.for("vuetify:selection-control-group"), pi = E({
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
    default: bt
  },
  ...X(),
  ...Oe(),
  ...de()
}, "SelectionControlGroup"), Nr = E({
  ...pi({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
N()({
  name: "VSelectionControlGroup",
  props: Nr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ue(e, "modelValue"), a = Le(), i = h(() => e.id || `v-selection-control-group-${a}`), o = h(() => e.name || i.value), s = /* @__PURE__ */ new Set();
    return pe(_i, {
      modelValue: l,
      forceUpdate: () => {
        s.forEach((r) => r());
      },
      onForceUpdate: (r) => {
        s.add(r), be(() => {
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
        multiple: h(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)),
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
  ...pi()
}, "VSelectionControl");
function Dr(e) {
  const n = me(_i, void 0), {
    densityClasses: t
  } = He(e), l = ue(e, "modelValue"), a = h(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = h(() => e.falseValue !== void 0 ? e.falseValue : !1), o = h(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), s = h({
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
  } = De(h(() => {
    if (!(e.error || e.disabled))
      return s.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: m,
    backgroundColorStyles: g
  } = Be(h(() => s.value && !e.error && !e.disabled ? e.color : e.baseColor)), v = h(() => s.value ? e.trueIcon : e.falseIcon);
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
const Yl = N()({
  name: "VSelectionControl",
  directives: {
    Ripple: Dt
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
    } = Dr(e), d = Le(), y = G(!1), f = G(!1), b = W(), S = h(() => e.id || `input-${d}`), p = h(() => !e.disabled && !e.readonly);
    a == null || a.onForceUpdate(() => {
      b.value && (b.value.checked = s.value);
    });
    function w(C) {
      p.value && (y.value = !0, Yt(C.target, ":focus-visible") !== !1 && (f.value = !0));
    }
    function x() {
      y.value = !1, f.value = !1;
    }
    function L(C) {
      C.stopPropagation();
    }
    function V(C) {
      if (!p.value) {
        b.value && (b.value.checked = s.value);
        return;
      }
      e.readonly && a && he(() => a.forceUpdate()), s.value = C.target.checked;
    }
    return q(() => {
      var O, _;
      const C = l.label ? l.label({
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label, [$, H] = sa(t), R = u("input", J({
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
        backgroundColorClasses: m,
        backgroundColorStyles: g
      }), _e(u("div", {
        class: ["v-selection-control__input"]
      }, [((_ = l.input) == null ? void 0 : _.call(l, {
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
      isFocused: y,
      input: b
    };
  }
}), zr = E({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: ne,
    default: "$checkboxIndeterminate"
  },
  ...xi({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Hr = N()({
  name: "VCheckboxBtn",
  props: zr(),
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
    return q(() => {
      const r = St(Yl.filterProps(e), ["modelValue"]);
      return u(Yl, J(r, {
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
  } = Un();
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
const jr = E({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...X(),
  ...$t({
    transition: {
      component: pa,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Wr = N()({
  name: "VMessages",
  props: jr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => Pe(e.messages)), {
      textColorClasses: a,
      textColorStyles: i
    } = De(h(() => e.color));
    return q(() => u(je, {
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
const Gr = Symbol.for("vuetify:form");
function Pi() {
  return me(Gr, null);
}
const Ur = E({
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
function qr(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Le();
  const l = ue(e, "modelValue"), a = h(() => e.validationValue === void 0 ? l.value : e.validationValue), i = Pi(), o = W([]), s = G(!0), r = h(() => !!(Pe(l.value === "" ? null : l.value).length || Pe(a.value === "" ? null : a.value).length)), c = h(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), m = h(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), g = h(() => {
    var L;
    return (L = e.errorMessages) != null && L.length ? Pe(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), v = h(() => {
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
    return e.error || (L = e.errorMessages) != null && L.length ? !1 : e.rules.length ? s.value ? o.value.length || v.value.lazy ? null : !0 : !o.value.length : !0;
  }), y = G(!1), f = h(() => ({
    [`${n}--error`]: d.value === !1,
    [`${n}--dirty`]: r.value,
    [`${n}--disabled`]: c.value,
    [`${n}--readonly`]: m.value
  })), b = ce("validation"), S = h(() => e.name ?? ye(t));
  na(() => {
    i == null || i.register({
      id: S.value,
      vm: b,
      validate: x,
      reset: p,
      resetValidation: w
    });
  }), Ee(() => {
    i == null || i.unregister(S.value);
  }), Ue(async () => {
    v.value.lazy || await x(!0), i == null || i.update(S.value, d.value, g.value);
  }), Ge(() => v.value.input, () => {
    K(a, () => {
      if (a.value != null)
        x();
      else if (e.focused) {
        const L = K(() => e.focused, (V) => {
          V || x(), L();
        });
      }
    });
  }), Ge(() => v.value.blur, () => {
    K(() => e.focused, (L) => {
      L || x();
    });
  }), K([d, g], () => {
    i == null || i.update(S.value, d.value, g.value);
  });
  async function p() {
    l.value = null, await he(), await w();
  }
  async function w() {
    s.value = !0, v.value.lazy ? o.value = [] : await x(!0);
  }
  async function x() {
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
    isReadonly: m,
    isPristine: s,
    isValid: d,
    isValidating: y,
    reset: p,
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
  ...eo(qe(), ["maxWidth", "minWidth", "width"]),
  ...de(),
  ...Ur()
}, "VInput"), Xl = N()({
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
    } = He(e), {
      dimensionStyles: o
    } = Ke(e), {
      themeClasses: s
    } = ge(e), {
      rtlClasses: r
    } = ze(), {
      InputIcon: c
    } = Vi(e), m = Le(), g = h(() => e.id || `input-${m}`), v = h(() => `${g.value}-messages`), {
      errorMessages: d,
      isDirty: y,
      isDisabled: f,
      isReadonly: b,
      isPristine: S,
      isValid: p,
      isValidating: w,
      reset: x,
      resetValidation: L,
      validate: V,
      validationClasses: C
    } = qr(e, "v-input", g), $ = h(() => ({
      id: g,
      messagesId: v,
      isDirty: y,
      isDisabled: f,
      isReadonly: b,
      isPristine: S,
      isValid: p,
      isValidating: w,
      reset: x,
      resetValidation: L,
      validate: V
    })), H = h(() => {
      var R;
      return (R = e.errorMessages) != null && R.length || !S.value && d.value.length ? d.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return q(() => {
      var T, D, Q, Z;
      const R = !!(l.prepend || e.prependIcon), O = !!(l.append || e.appendIcon), _ = H.value.length > 0, A = !e.hideDetails || e.hideDetails === "auto" && (_ || !!l.details);
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
      }, [u(Wr, {
        id: v.value,
        active: _,
        messages: H.value
      }, {
        message: l.message
      }), (Z = l.details) == null ? void 0 : Z.call(l, $.value)])]);
    }), {
      reset: x,
      resetValidation: L,
      validate: V,
      isValid: p,
      errorMessages: d
    };
  }
});
function Kr(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: l,
    isHorizontal: a
  } = e;
  const i = Et(a, t), o = Bi(a, l, t), s = Et(a, n), r = Ti(a, n), c = s * 0.4;
  return o > r ? r - c : o + i < r + s ? r - i + s + c : o;
}
function Yr(e) {
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
function Xr(e, n) {
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
const Qr = Symbol.for("vuetify:v-slide-group"), Li = E({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: Qr
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
  ...Lo({
    mobile: null
  }),
  ...ie(),
  ...Qn({
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
    } = ze(), {
      displayClasses: a,
      mobile: i
    } = Ot(e), o = Jn(e, e.symbol), s = G(!1), r = G(0), c = G(0), m = G(0), g = h(() => e.direction === "horizontal"), {
      resizeRef: v,
      contentRect: d
    } = gt(), {
      resizeRef: y,
      contentRect: f
    } = gt(), b = Sa(), S = h(() => ({
      container: v.el,
      duration: 200,
      easing: "easeOutQuart"
    })), p = h(() => o.selected.value.length ? o.items.value.findIndex((k) => k.id === o.selected.value[0]) : -1), w = h(() => o.selected.value.length ? o.items.value.findIndex((k) => k.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (ve) {
      let k = -1;
      K(() => [o.selected.value, d.value, f.value, g.value], () => {
        cancelAnimationFrame(k), k = requestAnimationFrame(() => {
          if (d.value && f.value) {
            const B = g.value ? "width" : "height";
            c.value = d.value[B], m.value = f.value[B], s.value = c.value + 1 < m.value;
          }
          if (p.value >= 0 && y.el) {
            const B = y.el.children[w.value];
            L(B, e.centerActive);
          }
        });
      });
    }
    const x = G(!1);
    function L(k, B) {
      let F = 0;
      B ? F = Yr({
        containerElement: v.el,
        isHorizontal: g.value,
        selectedElement: k
      }) : F = Kr({
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
      if (x.value = !0, !(!s.value || !y.el)) {
        for (const B of k.composedPath())
          for (const F of y.el.children)
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
      !R && !x.value && !(k.relatedTarget && ((B = y.el) != null && B.contains(k.relatedTarget))) && T(), R = !1;
    }
    function _() {
      R = !0;
    }
    function A(k) {
      if (!y.el)
        return;
      function B(F) {
        k.preventDefault(), T(F);
      }
      g.value ? k.key === "ArrowRight" ? B(l.value ? "prev" : "next") : k.key === "ArrowLeft" && B(l.value ? "next" : "prev") : k.key === "ArrowDown" ? B("next") : k.key === "ArrowUp" && B("prev"), k.key === "Home" ? B("first") : k.key === "End" && B("last");
    }
    function T(k) {
      var F, Y;
      if (!y.el)
        return;
      let B;
      if (!k)
        B = pt(y.el)[0];
      else if (k === "next") {
        if (B = (F = y.el.querySelector(":focus")) == null ? void 0 : F.nextElementSibling, !B)
          return T("first");
      } else if (k === "prev") {
        if (B = (Y = y.el.querySelector(":focus")) == null ? void 0 : Y.previousElementSibling, !B)
          return T("last");
      } else
        k === "first" ? B = y.el.firstElementChild : k === "last" && (B = y.el.lastElementChild);
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
    const Q = h(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), Z = h(() => {
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
      if (!v.value)
        return !1;
      const k = Ql(g.value, v.el), B = Xr(g.value, v.el);
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
          onMousedown: _,
          onClick: () => I.value && D("prev")
        }, [((k = t.prev) == null ? void 0 : k.call(t, Q.value)) ?? u(Ol, null, {
          default: () => [u(le, {
            icon: l.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), u("div", {
          key: "container",
          ref: v,
          class: "v-slide-group__container",
          onScroll: C
        }, [u("div", {
          ref: y,
          class: "v-slide-group__content",
          onFocusin: $,
          onFocusout: H,
          onKeydown: A
        }, [(B = t.default) == null ? void 0 : B.call(t, Q.value)])]), Z.value && u("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !P.value
          }],
          onMousedown: _,
          onClick: () => P.value && D("next")
        }, [((F = t.next) == null ? void 0 : F.call(t, Q.value)) ?? u(Ol, null, {
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
}), Oi = Symbol.for("vuetify:v-chip-group"), Jr = E({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: bt
  },
  ...Li(),
  ...X(),
  ...Qn({
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
  props: Jr(),
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
    } = Jn(e, Oi);
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
const Zr = E({
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
  ...Ie(),
  ...dn(),
  ...Mt(),
  ...ie({
    tag: "span"
  }),
  ...de(),
  ...Ze({
    variant: "tonal"
  })
}, "VChip"), $n = N()({
  name: "VChip",
  directives: {
    Ripple: Dt
  },
  props: Zr(),
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
    } = Un(), {
      borderClasses: o
    } = Xe(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: c
    } = Rt(e), {
      densityClasses: m
    } = He(e), {
      elevationClasses: g
    } = Je(e), {
      roundedClasses: v
    } = Ae(e), {
      sizeClasses: d
    } = Nt(e), {
      themeClasses: y
    } = ge(e), f = ue(e, "modelValue"), b = Oa(e, Oi, !1), S = cn(e, t), p = h(() => e.link !== !1 && S.isLink.value), w = h(() => !e.disabled && e.link !== !1 && (!!b || e.link || S.isClickable.value)), x = h(() => ({
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
      const C = S.isLink.value ? "a" : e.tag, $ = !!(e.appendIcon || e.appendAvatar), H = !!($ || a.append), R = !!(a.close || e.closable), O = !!(a.filter || e.filter) && b, _ = !!(e.prependIcon || e.prependAvatar), A = !!(_ || a.prepend), T = !b || b.isSelected.value;
      return f.value && _e(u(C, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": w.value,
          "v-chip--filter": O,
          "v-chip--pill": e.pill
        }, y.value, o.value, T ? s.value : void 0, m.value, g.value, v.value, d.value, c.value, b == null ? void 0 : b.selectedClass.value, e.class],
        style: [T ? r.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: S.href.value,
        tabindex: w.value ? 0 : void 0,
        onClick: L,
        onKeydown: w.value && !p.value && V
      }, {
        default: () => {
          var D;
          return [Ft(w.value, "v-chip"), O && u(Va, {
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
            }, a.filter) : u(le, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[ht, b.isSelected.value]])]
          }), A && u("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [a.prepend ? u(re, {
            key: "prepend-defaults",
            disabled: !_,
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
}), eu = E({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...St(al({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Kn
    }
  }), ["absolute"])
}, "VMenu"), tu = N()({
  name: "VMenu",
  props: eu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ue(e, "modelValue"), {
      scopeId: a
    } = ll(), i = Le(), o = h(() => e.id || `v-menu-${i}`), s = W(), r = me(Tn, null), c = G(0);
    pe(Tn, {
      register() {
        ++c.value;
      },
      unregister() {
        --c.value;
      },
      closeParents(f) {
        setTimeout(() => {
          !c.value && !e.persistent && (f == null || f && !oo(f, s.value.contentEl)) && (l.value = !1, r == null || r.closeParents());
        }, 40);
      }
    });
    async function m(f) {
      var p, w, x;
      const b = f.relatedTarget, S = f.target;
      await he(), l.value && b !== S && ((p = s.value) != null && p.contentEl) && // We're the topmost menu
      ((w = s.value) != null && w.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(S) && // It isn't inside the menu body
      !s.value.contentEl.contains(S) && ((x = pt(s.value.contentEl)[0]) == null || x.focus());
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
      var b, S, p;
      if (!e.disabled)
        if (f.key === "Tab" || f.key === "Enter" && !e.closeOnContentClick) {
          if (f.key === "Enter" && f.target instanceof HTMLTextAreaElement)
            return;
          f.key === "Enter" && f.preventDefault(), ca(pt((b = s.value) == null ? void 0 : b.contentEl, !1), f.shiftKey ? "prev" : "next", (x) => x.tabIndex >= 0) || (l.value = !1, (p = (S = s.value) == null ? void 0 : S.activatorEl) == null || p.focus());
        } else
          ["Enter", " "].includes(f.key) && e.closeOnContentClick && (l.value = !1, r == null || r.closeParents());
    }
    function d(f) {
      var S;
      if (e.disabled)
        return;
      const b = (S = s.value) == null ? void 0 : S.contentEl;
      b && l.value ? f.key === "ArrowDown" ? (f.preventDefault(), Kt(b, "next")) : f.key === "ArrowUp" && (f.preventDefault(), Kt(b, "prev")) : ["ArrowDown", "ArrowUp"].includes(f.key) && (l.value = !0, f.preventDefault(), setTimeout(() => setTimeout(() => d(f))));
    }
    const y = h(() => J({
      "aria-haspopup": "menu",
      "aria-expanded": String(l.value),
      "aria-owns": o.value,
      onKeydown: d
    }, e.activatorProps));
    return q(() => {
      const f = tn.filterProps(e);
      return u(tn, J({
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
        onKeydown: v
      }, a), {
        activator: t.activator,
        default: function() {
          for (var b = arguments.length, S = new Array(b), p = 0; p < b; p++)
            S[p] = arguments[p];
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
    }), fn({
      id: o,
      ΨopenChildren: c
    }, s);
  }
}), nu = E({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...X(),
  ...$t({
    transition: {
      component: pa
    }
  })
}, "VCounter"), lu = N()({
  name: "VCounter",
  functional: !0,
  props: nu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return q(() => u(je, {
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
      }) : l.value]), [[ht, e.active]])]
    })), {};
  }
}), au = E({
  floating: Boolean,
  ...X()
}, "VFieldLabel"), jt = N()({
  name: "VFieldLabel",
  props: au(),
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
}), iu = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], $i = E({
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
    validator: (e) => iu.includes(e)
  },
  "onClick:clear": ke(),
  "onClick:appendInner": ke(),
  "onClick:prependInner": ke(),
  ...X(),
  ...tl(),
  ...Ie(),
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
    } = nl(e), {
      focusClasses: s,
      isFocused: r,
      focus: c,
      blur: m
    } = Ai(e), {
      InputIcon: g
    } = Vi(e), {
      roundedClasses: v
    } = Ae(e), {
      rtlClasses: d
    } = ze(), y = h(() => e.dirty || e.active), f = h(() => !e.singleLine && !!(e.label || a.label)), b = Le(), S = h(() => e.id || `input-${b}`), p = h(() => `${S.value}-messages`), w = W(), x = W(), L = W(), V = h(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: C,
      backgroundColorStyles: $
    } = Be(M(e, "bgColor")), {
      textColorClasses: H,
      textColorStyles: R
    } = De(h(() => e.error || e.disabled ? void 0 : y.value && r.value ? e.color : e.baseColor));
    K(y, (T) => {
      if (f.value) {
        const D = w.value.$el, Q = x.value.$el;
        requestAnimationFrame(() => {
          const Z = Hn(D), I = Q.getBoundingClientRect(), P = I.x - Z.x, k = I.y - Z.y - (Z.height / 2 - I.height / 2), B = I.width / 0.75, F = Math.abs(B - Z.width) > 1 ? {
            maxWidth: U(B)
          } : void 0, Y = getComputedStyle(D), ee = getComputedStyle(Q), z = parseFloat(Y.transitionDuration) * 1e3 || 150, te = parseFloat(ee.getPropertyValue("--v-field-label-scale")), oe = ee.getPropertyValue("color");
          D.style.visibility = "visible", Q.style.visibility = "hidden", ut(D, {
            transform: `translate(${P}px, ${k}px) scale(${te})`,
            color: oe,
            ...F
          }, {
            duration: z,
            easing: Qt,
            direction: T ? "normal" : "reverse"
          }).finished.then(() => {
            D.style.removeProperty("visibility"), Q.style.removeProperty("visibility");
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
      blur: m,
      focus: c
    }));
    function _(T) {
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
          "v-field--active": y.value,
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
        onClick: _
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
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && f.value && u(jt, {
        key: "floating-label",
        ref: x,
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
          "aria-describedby": p.value
        },
        focus: c,
        blur: m
      })]), Q && u(Va, {
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
              onBlur: m,
              onClick: e["onClick:clear"]
            }
          }) : u(g, {
            name: "clear",
            onKeydown: A,
            onFocus: c,
            onBlur: m
          }, null)]
        })]), [[ht, e.dirty]])]
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
      }, [u(jt, {
        ref: x,
        floating: !0,
        for: S.value
      }, {
        default: () => [I()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), V.value && f.value && u(jt, {
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
function ou(e) {
  const n = Object.keys(Fi.props).filter((t) => !Dn(t) && t !== "class" && t !== "style");
  return ia(e, n);
}
const su = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ri = E({
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
    Intersect: Pa
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
    } = Ai(e), c = h(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), m = h(() => {
      if (t.maxlength)
        return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), g = h(() => ["plain", "underlined"].includes(e.variant));
    function v(V, C) {
      var $, H;
      !e.autofocus || !V || (H = ($ = C[0].target) == null ? void 0 : $.focus) == null || H.call($);
    }
    const d = W(), y = W(), f = W(), b = h(() => su.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function S() {
      var V;
      f.value !== document.activeElement && ((V = f.value) == null || V.focus()), o.value || s();
    }
    function p(V) {
      l("mousedown:control", V), V.target !== f.value && (S(), V.preventDefault());
    }
    function w(V) {
      S(), l("click:control", V);
    }
    function x(V) {
      V.stopPropagation(), S(), he(() => {
        i.value = null, ao(e["onClick:clear"], V);
      });
    }
    function L(V) {
      var $;
      const C = V.target;
      if (i.value = C.value, ($ = e.modelModifiers) != null && $.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const H = [C.selectionStart, C.selectionEnd];
        he(() => {
          C.selectionStart = H[0], C.selectionEnd = H[1];
        });
      }
    }
    return q(() => {
      const V = !!(a.counter || e.counter !== !1 && e.counter != null), C = !!(V || a.details), [$, H] = sa(t), {
        modelValue: R,
        ...O
      } = Xl.filterProps(e), _ = ou(e);
      return u(Xl, J({
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
            ref: y,
            onMousedown: p,
            onClick: w,
            "onClick:clear": x,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, _, {
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
              const F = _e(u("input", J({
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
              }, [a.default(), F]) : Qi(F, {
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
          return u(se, null, [(T = a.details) == null ? void 0 : T.call(a, A), V && u(se, null, [u("span", null, null), u(lu, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: m.value,
            disabled: e.disabled
          }, a.counter)])]);
        } : void 0
      });
    }), fn({}, d, y, f);
  }
}), ru = E({
  renderless: Boolean,
  ...X()
}, "VVirtualScrollItem"), uu = N()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: ru(),
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
    } = gt(void 0, "border");
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
}), cu = -1, du = 1, _n = 100, fu = E({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function vu(e, n) {
  const t = Ot(), l = G(0);
  Ne(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = G(0), i = G(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (l.value || 16)
  ) || 1), o = G(0), s = G(0), r = W(), c = W();
  let m = 0;
  const {
    resizeRef: g,
    contentRect: v
  } = gt();
  Ne(() => {
    g.value = r.value;
  });
  const d = h(() => {
    var P;
    return r.value === document.documentElement ? t.height.value : ((P = v.value) == null ? void 0 : P.height) || parseInt(e.height) || 0;
  }), y = h(() => !!(r.value && c.value && d.value && l.value));
  let f = Array.from({
    length: n.value.length
  }), b = Array.from({
    length: n.value.length
  });
  const S = G(0);
  let p = -1;
  function w(P) {
    return f[P] || l.value;
  }
  const x = no(() => {
    const P = performance.now();
    b[0] = 0;
    const k = n.value.length;
    for (let B = 1; B <= k - 1; B++)
      b[B] = (b[B - 1] || 0) + w(B - 1);
    S.value = Math.max(S.value, performance.now() - P);
  }, S), L = K(y, (P) => {
    P && (L(), m = c.value.offsetTop, x.immediate(), D(), ~p && he(() => {
      ve && window.requestAnimationFrame(() => {
        Z(p), p = -1;
      });
    }));
  });
  be(() => {
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
    return mu(b, P);
  }
  let H = 0, R = 0, O = 0;
  K(d, (P, k) => {
    k && (D(), P < k && requestAnimationFrame(() => {
      R = 0, D();
    }));
  });
  function _() {
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
    const P = H - m, k = Math.sign(R), B = Math.max(0, P - _n), F = Me($(B), 0, n.value.length), Y = P + d.value + _n, ee = Me($(Y) + 1, F + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (k !== cu || F < a.value) && (k !== du || ee > i.value)
    ) {
      const z = C(a.value) - C(F), te = C(ee) - C(i.value);
      Math.max(z, te) > _n ? (a.value = F, i.value = ee) : (F <= 0 && (a.value = F), ee >= n.value.length && (i.value = ee));
    }
    o.value = C(a.value), s.value = C(n.value.length) - C(i.value);
  }
  function Z(P) {
    const k = C(P);
    !r.value || P && !k ? p = P : r.value.scrollTop = k;
  }
  const I = h(() => n.value.slice(a.value, i.value).map((P, k) => ({
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
    handleScroll: _,
    handleScrollend: A,
    handleItemResize: V
  };
}
function mu(e, n) {
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
const gu = E({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...fu(),
  ...X(),
  ...qe()
}, "VVirtualScroll"), yu = N()({
  name: "VVirtualScroll",
  props: gu(),
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
    } = vu(e, M(e, "items"));
    return Ge(() => e.renderless, () => {
      function y() {
        var S, p;
        const b = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        i.value === document.documentElement ? (document[b]("scroll", s, {
          passive: !0
        }), document[b]("scrollend", r)) : ((S = i.value) == null || S[b]("scroll", s, {
          passive: !0
        }), (p = i.value) == null || p[b]("scrollend", r));
      }
      Ue(() => {
        i.value = ha(l.vnode.el, !0), y(!0);
      }), be(y);
    }), q(() => {
      const y = d.value.map((f) => u(uu, {
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
      }, null), y, u("div", {
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
      }, [y])]);
    }), {
      scrollToIndex: m
    };
  }
});
function hu(e, n) {
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
const bu = E({
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
}, "Select"), Su = E({
  ...bu(),
  ...St(Ri({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...$t({
    transition: {
      component: Kn
    }
  })
}, "VSelect"), Cu = N()({
  name: "VSelect",
  props: Su(),
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
    } = Un(), a = W(), i = W(), o = W(), s = ue(e, "menu"), r = h({
      get: () => s.value,
      set: (I) => {
        var P;
        s.value && !I && ((P = i.value) != null && P.ΨopenChildren) || (s.value = I);
      }
    }), {
      items: c,
      transformIn: m,
      transformOut: g
    } = Tr(e), v = ue(e, "modelValue", [], (I) => m(I === null ? [null] : Pe(I)), (I) => {
      const P = g(I);
      return e.multiple ? P : P[0] ?? null;
    }), d = h(() => typeof e.counterValue == "function" ? e.counterValue(v.value) : typeof e.counterValue == "number" ? e.counterValue : v.value.length), y = Pi(), f = h(() => v.value.map((I) => I.value)), b = G(!1), S = h(() => r.value ? e.closeText : e.openText);
    let p = "", w;
    const x = h(() => e.hideSelected ? c.value.filter((I) => !v.value.some((P) => e.valueComparator(P, I))) : c.value), L = h(() => e.hideNoData && !x.value.length || e.readonly || (y == null ? void 0 : y.isReadonly.value)), V = h(() => {
      var I;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((I = e.menuProps) == null ? void 0 : I.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), C = W(), {
      onListScroll: $,
      onListKeydown: H
    } = hu(C, a);
    function R(I) {
      e.openOnClear && (r.value = !0);
    }
    function O() {
      L.value || (r.value = !r.value);
    }
    function _(I) {
      var Y, ee;
      if (!I.key || e.readonly || y != null && y.isReadonly.value)
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
      B - w > P && (p = ""), p += I.key.toLowerCase(), w = B;
      const F = c.value.find((z) => z.title.toLowerCase().startsWith(p));
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
          v.value = k ? [I] : [], he(() => {
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
      else if (Yt(a.value, ":autofill") || Yt(a.value, ":-webkit-autofill")) {
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
        onKeydown: _,
        "aria-label": l(S.value),
        title: l(S.value)
      }), {
        ...t,
        default: () => u(se, null, [u(tu, J({
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
          default: () => [P && u(Rr, J({
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
              }, null)), u(yu, {
                ref: o,
                renderless: !0,
                items: x.value
              }, {
                default: (te) => {
                  var cl;
                  let {
                    item: oe,
                    index: fe,
                    itemRef: Se
                  } = te;
                  const ul = J(oe.props, {
                    ref: Se,
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
                      return u(se, null, [e.multiple && !e.hideSelected ? u(Hr, {
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
          function z(Se) {
            Se.stopPropagation(), Se.preventDefault(), A(Y, !1);
          }
          const te = {
            "onClick:close": z,
            onKeydown(Se) {
              Se.key !== "Enter" && Se.key !== " " || (Se.preventDefault(), Se.stopPropagation(), z(Se));
            },
            onMousedown(Se) {
              Se.preventDefault(), Se.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, oe = I ? !!t.chip : !!t.selection, fe = oe ? da(I ? t.chip({
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
            }) : u($n, J({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: Y.title,
              disabled: Y.props.disabled
            }, te), null) : fe ?? u("span", {
              class: "v-select__selection-text"
            }, [Y.title, e.multiple && ee < v.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [mt(",")])])]);
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
    }), fn({
      isFocused: b,
      menu: r,
      select: A
    }, a);
  }
}), ku = (e) => (on("data-v-4179ffbf"), e = e(), sn(), e), wu = ["href"], _u = /* @__PURE__ */ ku(() => /* @__PURE__ */ j("img", {
  src: "https://firebasestorage.googleapis.com/v0/b/ccaf-afea-test.appspot.com/o/logo.webp?alt=media&token=f4da887e-96cf-4325-b67b-5afd938250bf",
  width: "179",
  height: "52",
  alt: "Cambridge Centre for Alternative Finance (CCAF.io)"
}, null, -1)), pu = [
  _u
], xu = {
  class: "header__title",
  style: { "font-family": "MyriadPro" }
}, Vu = { class: "header-links__element" }, Iu = ["href"], Au = { class: "header-links__element" }, Pu = ["href"], Eu = { class: "header-links__element" }, Bu = ["href"], Tu = { class: "project-selector" }, Lu = /* @__PURE__ */ Tt({
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
    const { mdAndUp: n } = Ot(), t = e, l = W([]), a = W(), i = (o) => {
      const s = l.value.find(
        (r) => {
          if (typeof o == "string")
            return r.title === o;
        }
      );
      s && (window.location.href = `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/${s.link}`);
    };
    return Ue(async () => {
      const { data: o } = await fetch(`${t.url}/projects`).then(
        (s) => s.json()
      );
      l.value = o, a.value = l.value.find(
        (s) => s.title === t.activeSelect || !!s.tag && s.tag === t.activeSelect
      ) || l.value[0];
    }), (o, s) => (Ve(), ct(ts, {
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
        u(nn, {
          align: "center",
          justify: "start",
          class: "header__logo"
        }, {
          default: ae(() => [
            j("a", {
              title: "CCAF.io",
              href: `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/`
            }, pu, 8, wu),
            dt(o.$slots, "title", {}, () => [
              j("h4", xu, Fe(e.title), 1)
            ], !0),
            u(ur),
            dt(o.$slots, "links", {}, void 0, !0),
            j("ul", {
              class: _t(["header-links", { "is-long-title": !!a.value && !a.value.tag }])
            }, [
              j("li", Vu, [
                j("a", {
                  class: "header-links__element-link",
                  title: "Home",
                  href: `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/`
                }, "Home ", 8, Iu)
              ]),
              j("li", Au, [
                j("a", {
                  class: "header-links__element-link",
                  title: "Home",
                  href: `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/about_ccaf`
                }, "About CCAF ", 8, Pu)
              ]),
              j("li", Eu, [
                j("a", {
                  class: "header-links__element-link",
                  title: "Home",
                  href: `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/contact?topic=dmd`
                }, "Contact ", 8, Bu)
              ])
            ], 2),
            j("div", Tu, [
              ye(n) ? (Ve(), ct(Cu, {
                key: 0,
                variant: "solo",
                class: _t(["project-selector__select", { "is-title": !!a.value && !a.value.tag }]),
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
                  mt(Fe(r.title || r.value), 1)
                ]),
                item: ae(({ item: r, props: c }) => [
                  u(Pt, J(c, {
                    title: r.value,
                    subtitle: r.title || void 0
                  }), null, 16, ["title", "subtitle"])
                ]),
                _: 1
              }, 8, ["class", "model-value", "items", "loading"])) : st("", !0)
            ])
          ]),
          _: 3
        }),
        u(Js, {
          class: "header-overlay",
          scrim: !1,
          "model-value": e.dialog,
          "onUpdate:modelValue": s[0] || (s[0] = (r) => o.$emit("changeDialog", r)),
          fullscreen: ""
        }, {
          activator: ae(({ props: r }) => [
            ye(n) ? st("", !0) : (Ve(), ct(ps, J({ key: 0 }, r, {
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
                    mt(Fe(e.dialog ? "mdi-close" : "mdi-menu"), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1040))
          ]),
          default: ae(({ isActive: r }) => [
            dt(o.$slots, "default", {
              close: () => r.value = !1
            }, void 0, !0)
          ]),
          _: 3
        }, 8, ["model-value"])
      ]),
      _: 3
    }));
  }
}), vn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, a] of n)
    t[l] = a;
  return t;
}, _c = /* @__PURE__ */ vn(Lu, [["__scopeId", "data-v-4179ffbf"]]), Ou = E({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Ye(),
  ...X(),
  ...Qe(),
  ...Ca(),
  ...Ie(),
  ...ie({
    tag: "footer"
  }),
  ...de()
}, "VFooter"), $u = N()({
  name: "VFooter",
  props: Ou(),
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
    } = Ae(e), c = G(32), {
      resizeRef: m
    } = gt((y) => {
      y.length && (c.value = y[0].target.clientHeight);
    }), g = h(() => e.height === "auto" ? c.value : parseInt(e.height, 10)), {
      layoutItemStyles: v,
      layoutIsReady: d
    } = ka({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: h(() => "bottom"),
      layoutSize: g,
      elementSize: h(() => e.height === "auto" ? void 0 : g.value),
      active: h(() => e.app),
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
}), Fu = (e) => (on("data-v-cd195cbd"), e = e(), sn(), e), Ru = {
  class: "footer__pre-footer",
  align: "start",
  justify: "start",
  "no-gutters": ""
}, Mu = { class: "footer__info" }, Nu = {
  class: "footer__pre-links mb-4 pa-4",
  cols: "auto"
}, Du = ["href"], zu = ["href"], Hu = ["href"], ju = { class: "ml-7" }, Wu = ["href"], Gu = ["href"], Uu = {
  key: 2,
  class: "link-icon",
  href: "facebookLink",
  target: "_blank"
}, qu = /* @__PURE__ */ Fu(() => /* @__PURE__ */ j("div", {
  class: "footer__pre-commons mb-4 pa-4",
  cols: "auto"
}, [
  /* @__PURE__ */ j("a", {
    rel: "license",
    href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
    target: "_blank"
  }, [
    /* @__PURE__ */ j("img", {
      alt: "Creative Commons License",
      style: { "border-width": "0" },
      src: "https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg"
    })
  ]),
  /* @__PURE__ */ j("br"),
  /* @__PURE__ */ j("p", { style: { "font-size": "12px", "max-width": "280px" } }, [
    /* @__PURE__ */ mt(" This work is licensed under a "),
    /* @__PURE__ */ j("a", {
      rel: "license",
      href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
      target: "_blank",
      style: { color: "#262b4a" }
    }, " Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ")
  ])
], -1)), Ku = ["href"], Yu = /* @__PURE__ */ Tt({
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
    const n = Sa(), { smAndDown: t } = Ot(), l = W(!1);
    return Ue(() => {
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
    }), (a, i) => (Ve(), ct($u, {
      id: "footer",
      color: "white",
      width: "100vw",
      class: "footer pa-0"
    }, {
      default: ae(() => [
        l.value ? (Ve(), rt("div", {
          key: 0,
          class: "goup",
          onClick: i[0] || (i[0] = (o) => ye(n)(0, {
            duration: 300,
            offset: 0,
            easing: "easeInOutCubic"
          }))
        }, [
          u(le, {
            size: "18",
            color: "#FFB71A",
            icon: "mdi-arrow-up"
          })
        ])) : st("", !0),
        u(ei, {
          fluid: "",
          style: { height: "100%" }
        }, {
          default: ae(() => [
            j("div", Ru, [
              j("div", Mu, [
                j("div", Nu, [
                  j("a", {
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
                    j("p", null, Fe(e.webLink), 1)
                  ], 8, Du),
                  j("a", {
                    class: "footer__link mb-2 link-icon",
                    href: `mailto:${e.email}`
                  }, [
                    u(le, {
                      size: "16",
                      color: "#0e1436",
                      class: "mr-2",
                      icon: "mdi-email"
                    }),
                    j("p", null, Fe(e.email), 1)
                  ], 8, zu),
                  j("a", {
                    href: e.locationLink,
                    class: "footer__link footer__link--location mb-2 link-icon"
                  }, [
                    u(le, {
                      size: "16",
                      color: "#0e1436",
                      class: "mr-2",
                      icon: "mdi-map-marker"
                    }),
                    j("p", null, Fe(e.location), 1)
                  ], 8, Hu),
                  j("div", ju, [
                    u(nn, null, {
                      default: ae(() => [
                        u(ft, null, {
                          default: ae(() => [
                            e.linkedinLink ? (Ve(), rt("a", {
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
                            ], 8, Wu)) : st("", !0),
                            e.twitterLink ? (Ve(), rt("a", {
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
                            ], 8, Gu)) : st("", !0),
                            e.facebookLink ? (Ve(), rt("a", Uu, [
                              u(le, {
                                size: "24",
                                color: "#0e1436",
                                class: "mr-2",
                                icon: "mdi-facebook"
                              })
                            ])) : st("", !0)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                qu
              ]),
              dt(a.$slots, "supported", {}, void 0, !0)
            ]),
            u(nn, {
              class: "footer__main-footer",
              align: "center",
              justify: ye(t) ? "center" : "space-between",
              "no-gutters": ""
            }, {
              default: ae(() => [
                u(ft, {
                  class: _t({ "footer-privacy": ye(t) }),
                  cols: "auto"
                }, {
                  default: ae(() => [
                    j("a", {
                      href: `https://${e.env}ccaf.io/privacy_policy`
                    }, " Privacy Policy ", 8, Ku)
                  ]),
                  _: 1
                }, 8, ["class"]),
                u(ft, { cols: "auto" }, {
                  default: ae(() => [
                    j("span", null, "Cambridge Centre for Alternative Finance © " + Fe(" " + (/* @__PURE__ */ new Date()).getFullYear()), 1)
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
}), pc = /* @__PURE__ */ vn(Yu, [["__scopeId", "data-v-cd195cbd"]]), Xu = N()({
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
}), Qu = E({
  opacity: [Number, String],
  ...X(),
  ...ie()
}, "VCardSubtitle"), Ju = N()({
  name: "VCardSubtitle",
  props: Qu(),
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
}), Zu = Wn("v-card-title"), ec = E({
  appendAvatar: String,
  appendIcon: ne,
  prependAvatar: String,
  prependIcon: ne,
  subtitle: [String, Number],
  title: [String, Number],
  ...X(),
  ...Oe()
}, "VCardItem"), tc = N()({
  name: "VCardItem",
  props: ec(),
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
      }, [s && u(Zu, {
        key: "title"
      }, {
        default: () => {
          var m;
          return [((m = t.title) == null ? void 0 : m.call(t)) ?? e.title];
        }
      }), r && u(Ju, {
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
}), nc = E({
  opacity: [Number, String],
  ...X(),
  ...ie()
}, "VCardText"), lc = N()({
  name: "VCardText",
  props: nc(),
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
}), ac = E({
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
  ...tl(),
  ...Zn(),
  ...Na(),
  ...Ie(),
  ...dn(),
  ...ie(),
  ...de(),
  ...Ze({
    variant: "elevated"
  })
}, "VCard"), ic = N()({
  name: "VCard",
  directives: {
    Ripple: Dt
  },
  props: ac(),
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
    } = Rt(e), {
      densityClasses: c
    } = He(e), {
      dimensionStyles: m
    } = Ke(e), {
      elevationClasses: g
    } = Je(e), {
      loaderClasses: v
    } = nl(e), {
      locationStyles: d
    } = el(e), {
      positionClasses: y
    } = Da(e), {
      roundedClasses: f
    } = Ae(e), b = cn(e, t), S = h(() => e.link !== !1 && b.isLink.value), p = h(() => !e.disabled && e.link !== !1 && (e.link || b.isClickable.value));
    return q(() => {
      const w = S.value ? "a" : e.tag, x = !!(l.title || e.title != null), L = !!(l.subtitle || e.subtitle != null), V = x || L, C = !!(l.append || e.appendAvatar || e.appendIcon), $ = !!(l.prepend || e.prependAvatar || e.prependIcon), H = !!(l.image || e.image), R = V || $ || C, O = !!(l.text || e.text != null);
      return _e(u(w, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": p.value
        }, a.value, i.value, o.value, c.value, g.value, v.value, y.value, f.value, r.value, e.class],
        style: [s.value, m.value, d.value, e.style],
        href: b.href.value,
        onClick: p.value && b.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var _;
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
          }, l.image) : u(Xn, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(Ma, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: l.loader
          }), R && u(tc, {
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
          }), O && u(lc, {
            key: "text"
          }, {
            default: () => {
              var A;
              return [((A = l.text) == null ? void 0 : A.call(l)) ?? e.text];
            }
          }), (_ = l.default) == null ? void 0 : _.call(l), l.actions && u(Xu, null, {
            default: l.actions
          }), Ft(p.value, "v-card")];
        }
      }), [[at("ripple"), p.value && e.ripple]]);
    }), {};
  }
}), Mi = (e) => (on("data-v-c94c2e2a"), e = e(), sn(), e), oc = /* @__PURE__ */ Mi(() => /* @__PURE__ */ j("div", { class: "list-line" }, null, -1)), sc = { class: "list-wrapper" }, rc = /* @__PURE__ */ Mi(() => /* @__PURE__ */ j("p", { class: "list-title" }, "CCAF:", -1)), uc = { class: "list" }, cc = { class: "list__link" }, dc = ["href"], fc = { class: "list__link" }, vc = ["href"], mc = { class: "list__link" }, gc = ["href"], yc = { class: "chips" }, hc = /* @__PURE__ */ Tt({
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
    return (l, a) => (Ve(), ct(ic, null, {
      default: ae(() => [
        dt(l.$slots, "switcher", {}, void 0, !0),
        dt(l.$slots, "default", {}, void 0, !0),
        oc,
        j("div", sc, [
          rc,
          j("ul", uc, [
            j("li", cc, [
              j("a", {
                href: `https://${n.env === "demo" || n.env === "develop" ? "demo." : ""}ccaf.io/`
              }, "Home ", 8, dc)
            ]),
            j("li", fc, [
              j("a", {
                href: `https://${n.env === "demo" || n.env === "develop" ? "demo." : ""}ccaf.io/about_ccaf`
              }, "About ", 8, vc)
            ]),
            j("li", mc, [
              j("a", {
                href: `https://${n.env === "demo" || n.env === "develop" ? "demo." : ""}ccaf.io/contact${e.topic ? `?topic=${e.topic}` : ""}`
              }, "Contact ", 8, gc)
            ])
          ])
        ]),
        j("div", yc, [
          (Ve(!0), rt(se, null, Ji(t.value, (i, o) => (Ve(), ct($n, {
            class: _t(["chips__item", { "chips__item-active": !o }]),
            key: i.id,
            href: o ? `https://${n.env === "demo" || n.env === "develop" ? "demo." : ""}ccaf.io/${i.link}` : void 0
          }, {
            default: ae(() => [
              mt(Fe(i.tag || i.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href"]))), 128)),
          u($n, { class: "chips__item" }, {
            default: ae(() => [
              mt(" Atlas ")
            ]),
            _: 1
          })
        ])
      ]),
      _: 3
    }));
  }
}), xc = /* @__PURE__ */ vn(hc, [["__scopeId", "data-v-c94c2e2a"]]), Ni = (e) => (on("data-v-1b275338"), e = e(), sn(), e), bc = { class: "app-loader__title" }, Sc = /* @__PURE__ */ Ni(() => /* @__PURE__ */ j("div", { class: "lds-ring" }, [
  /* @__PURE__ */ j("div"),
  /* @__PURE__ */ j("div"),
  /* @__PURE__ */ j("div"),
  /* @__PURE__ */ j("div")
], -1)), Cc = /* @__PURE__ */ Ni(() => /* @__PURE__ */ j("p", { class: "app-loader__state" }, "LOADING", -1)), kc = /* @__PURE__ */ Tt({
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
    return (n, t) => (Ve(), rt("div", {
      class: _t(["app-loader", { "app-loader--visible": e.visible }])
    }, [
      u(ei, null, {
        default: ae(() => [
          u(nn, {
            align: "center",
            justify: "center",
            class: "flex-column"
          }, {
            default: ae(() => [
              u(ft, { cols: "12" }, {
                default: ae(() => [
                  j("h1", bc, Fe(e.title), 1)
                ]),
                _: 1
              }),
              u(ft, {
                cols: "12",
                class: "d-flex justify-center"
              }, {
                default: ae(() => [
                  Sc
                ]),
                _: 1
              }),
              u(ft, { cols: "12" }, {
                default: ae(() => [
                  Cc
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
}), Vc = /* @__PURE__ */ vn(kc, [["__scopeId", "data-v-1b275338"]]);
export {
  pc as LayoutFooter,
  _c as LayoutHeader,
  Vc as Loader,
  xc as MobileMenu
};
