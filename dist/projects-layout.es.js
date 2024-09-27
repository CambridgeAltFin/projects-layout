import { watch as q, onScopeDispose as be, effectScope as Fn, Fragment as se, reactive as on, computed as h, watchEffect as ze, toRefs as na, capitalize as Bt, isVNode as ji, Comment as Wi, shallowRef as W, unref as ye, warn as sn, getCurrentInstance as Gi, ref as j, provide as pe, inject as me, defineComponent as Tt, camelize as la, h as yt, toRaw as we, createVNode as u, mergeProps as Q, onBeforeUnmount as Ee, readonly as Rn, onDeactivated as Ui, onActivated as qi, nextTick as he, TransitionGroup as Mn, Transition as at, isRef as mt, toRef as M, onBeforeMount as aa, withDirectives as _e, resolveDirective as ot, vShow as ht, onMounted as Ke, onUpdated as Ki, Text as Yi, resolveDynamicComponent as Xi, Teleport as Qi, cloneVNode as Ji, createTextVNode as Be, openBlock as Ve, createBlock as ft, withCtx as Z, createElementVNode as J, toDisplayString as Re, normalizeClass as pt, createCommentVNode as ut, renderSlot as Kt, pushScopeId as Nn, popScopeId as Dn, createElementBlock as ct, renderList as Zi, resolveComponent as eo } from "vue";
function qe(e, n) {
  let t;
  function l() {
    t = Fn(), t.run(() => n.length ? n(() => {
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
function ia(e, n, t) {
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
function to(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), ia(e, n.split("."), t));
}
function Fe(e, n, t) {
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
    return to(e, n, t);
  if (Array.isArray(n))
    return ia(e, n, t);
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
function pn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function oa(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const vl = Object.freeze({
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
function sa(e, n) {
  const t = {}, l = new Set(Object.keys(e));
  for (const a of n)
    l.has(a) && (t[a] = e[a]);
  return t;
}
function ml(e, n, t) {
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
function no(e, n) {
  const t = {};
  return n.forEach((l) => t[l] = e[l]), t;
}
const ra = /^on[^a-z]/, Hn = (e) => ra.test(e), lo = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function ua(e) {
  const [n, t] = ml(e, [ra]), l = St(n, lo), [a, i] = ml(t, ["class", "style", "id", /^data-/]);
  return Object.assign(a, n), Object.assign(i, l), [a, i];
}
function Pe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ao(e, n) {
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
function De(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function gl(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function io(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let l = 0;
  for (; l < e.length; )
    t.push(e.substr(l, n)), l += n;
  return t;
}
function Me() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const a in e)
    l[a] = e[a];
  for (const a in n) {
    const i = e[a], o = n[a];
    if (pn(i) && pn(o)) {
      l[a] = Me(i, o, t);
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
function ca(e) {
  return e.map((n) => n.type === se ? ca(n.children) : n).flat();
}
function nt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (nt.cache.has(e))
    return nt.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return nt.cache.set(e, n), n;
}
nt.cache = /* @__PURE__ */ new Map();
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
  const n = on({}), t = h(e);
  return ze(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, {
    flush: "sync"
  }), na(n);
}
function Yt(e, n) {
  return e.includes(n);
}
function da(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const ke = () => [Function, Array];
function yl(e, n) {
  return n = "on" + Bt(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function oo(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  if (Array.isArray(e))
    for (const a of e)
      a(...t);
  else
    typeof e == "function" && e(...t);
}
function xt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function fa(e, n, t) {
  let l, a = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    a += i, l = e[a];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? !0)) && a < e.length && a >= 0);
  return l;
}
function Xt(e, n) {
  var l, a, i, o;
  const t = xt(e);
  if (!n)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((l = t[0]) == null || l.focus());
  else if (n === "first")
    (a = t[0]) == null || a.focus();
  else if (n === "last")
    (i = t.at(-1)) == null || i.focus();
  else if (typeof n == "number")
    (o = t[n]) == null || o.focus();
  else {
    const s = fa(t, n);
    s ? s.focus() : Xt(e, n === "next" ? "first" : "last");
  }
}
function Qt(e, n) {
  if (!(ve && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`)))
    return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function va(e) {
  return e.some((n) => ji(n) ? n.type === Wi ? !1 : n.type !== se || va(n.children) : !0) ? e : null;
}
function so(e, n) {
  if (!ve || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function ro(e, n) {
  const t = e.clientX, l = e.clientY, a = n.getBoundingClientRect(), i = a.left, o = a.top, s = a.right, r = a.bottom;
  return t >= i && t <= s && l >= o && l <= r;
}
function xn() {
  const e = W(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => oa(e.value)
  }), n;
}
const ma = ["top", "bottom"], uo = ["start", "end", "left", "right"];
function Vn(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = Yt(ma, t) ? "start" : Yt(uo, t) ? "top" : "center"), {
    side: hl(t, n),
    align: hl(l, n)
  };
}
function hl(e, n) {
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
function bl(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Sl(e) {
  return Yt(ma, e.side) ? "y" : "x";
}
class lt {
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
function Cl(e, n) {
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
function ga(e) {
  return Array.isArray(e) ? new lt({
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
      return new lt(n);
    const c = t.transformOrigin, m = n.x - s - (1 - i) * parseFloat(c), g = n.y - r - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), v = i ? n.width / i : e.offsetWidth + 1, d = o ? n.height / o : e.offsetHeight + 1;
    return new lt({
      x: m,
      y: g,
      width: v,
      height: d
    });
  } else
    return new lt(n);
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
function co(e, n) {
  Object.keys(n).forEach((t) => {
    if (Hn(t)) {
      const l = da(t), a = Wt.get(e);
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
function fo(e, n) {
  Object.keys(n).forEach((t) => {
    if (Hn(t)) {
      const l = da(t), a = Wt.get(e);
      a == null || a.forEach((i) => {
        const [o, s] = i;
        o === l && (e.removeEventListener(l, s), a.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const rt = 2.4, kl = 0.2126729, wl = 0.7151522, _l = 0.072175, vo = 0.55, mo = 0.58, go = 0.57, yo = 0.62, zt = 0.03, pl = 1.45, ho = 5e-4, bo = 1.25, So = 1.25, xl = 0.078, Vl = 12.82051282051282, Ht = 0.06, Il = 1e-3;
function Al(e, n) {
  const t = (e.r / 255) ** rt, l = (e.g / 255) ** rt, a = (e.b / 255) ** rt, i = (n.r / 255) ** rt, o = (n.g / 255) ** rt, s = (n.b / 255) ** rt;
  let r = t * kl + l * wl + a * _l, c = i * kl + o * wl + s * _l;
  if (r <= zt && (r += (zt - r) ** pl), c <= zt && (c += (zt - c) ** pl), Math.abs(c - r) < ho)
    return 0;
  let m;
  if (c > r) {
    const g = (c ** vo - r ** mo) * bo;
    m = g < Il ? 0 : g < xl ? g - g * Vl * Ht : g - Ht;
  } else {
    const g = (c ** yo - r ** go) * So;
    m = g > -Il ? 0 : g > -xl ? g - g * Vl * Ht : g + Ht;
  }
  return m * 100;
}
function Ue(e) {
  sn(`Vuetify: ${e}`);
}
function Co(e) {
  sn(`Vuetify error: ${e}`);
}
function ko(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, sn(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
function In(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function wo(e) {
  return In(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Pl = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, _o = {
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
  hsl: (e, n, t, l) => El({
    h: e,
    s: n,
    l: t,
    a: l
  }),
  hsla: (e, n, t, l) => El({
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
    return (isNaN(e) || e < 0 || e > 16777215) && Ue(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Pl.test(e)) {
    const {
      groups: n
    } = e.match(Pl), {
      fn: t,
      values: l
    } = n, a = l.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return _o[t](...a);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((l) => l + l).join("") : [6, 8].includes(n.length) || Ue(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && Ue(`'${e}' is not a valid hex(a) color`), po(n);
  } else if (typeof e == "object") {
    if (mn(e, ["r", "g", "b"]))
      return e;
    if (mn(e, ["h", "s", "l"]))
      return Vt(ya(e));
    if (mn(e, ["h", "s", "v"]))
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
function El(e) {
  return Vt(ya(e));
}
function ya(e) {
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
  e = xo(e);
  let [n, t, l, a] = io(e, 2).map((i) => parseInt(i, 16));
  return a = a === void 0 ? a : a / 255, {
    r: n,
    g: t,
    b: l,
    a
  };
}
function xo(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = gl(gl(e, 6), 8, "F")), e;
}
function Vo(e) {
  const n = Math.abs(Al(wt(0), wt(e)));
  return Math.abs(Al(wt(16777215), wt(e))) > Math.min(n, 50) ? "#fff" : "#000";
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
const Y = E({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function ce(e, n) {
  const t = Gi();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function Le() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = ce(e).type;
  return nt((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let ha = 0, Gt = /* @__PURE__ */ new WeakMap();
function Oe() {
  const e = ce("getUid");
  if (Gt.has(e))
    return Gt.get(e);
  {
    const n = ha++;
    return Gt.set(e, n), n;
  }
}
Oe.reset = () => {
  ha = 0, Gt = /* @__PURE__ */ new WeakMap();
};
function Io(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const Jt = Symbol.for("vuetify:defaults");
function Gn() {
  const e = me(Jt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function st(e, n) {
  const t = Gn(), l = j(e), a = h(() => {
    if (ye(n == null ? void 0 : n.disabled))
      return t.value;
    const o = ye(n == null ? void 0 : n.scoped), s = ye(n == null ? void 0 : n.reset), r = ye(n == null ? void 0 : n.root);
    if (l.value == null && !(o || s || r))
      return t.value;
    let c = Me(l.value, {
      prev: t.value
    });
    if (o)
      return c;
    if (s || r) {
      const m = Number(s || 1 / 0);
      for (let g = 0; g <= m && !(!c || !("prev" in c)); g++)
        c = c.prev;
      return c && typeof r == "string" && r in c && (c = Me(Me(c, {
        prev: c
      }), c[r])), c;
    }
    return c.prev ? Me(c.prev, c) : c;
  });
  return pe(Jt, a), a;
}
function Ao(e, n) {
  var t, l;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((l = e.props) == null ? void 0 : l[nt(n)]) < "u";
}
function Po() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gn();
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
      return c === "class" || c === "style" ? [(g = a.value) == null ? void 0 : g[c], m].filter((p) => p != null) : typeof c == "string" && !Ao(l.vnode, c) ? ((v = a.value) == null ? void 0 : v[c]) !== void 0 ? (d = a.value) == null ? void 0 : d[c] : ((f = (y = t.value) == null ? void 0 : y.global) == null ? void 0 : f[c]) !== void 0 ? (S = (b = t.value) == null ? void 0 : b.global) == null ? void 0 : S[c] : m : m;
    }
  }), o = W();
  ze(() => {
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
    const r = Io(Jt, l);
    pe(Jt, h(() => o.value ? Me((r == null ? void 0 : r.value) ?? {}, o.value) : r == null ? void 0 : r.value));
  }
  return {
    props: i,
    provideSubDefaults: s
  };
}
function Lt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Ue("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = E(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(l) {
      return sa(l, n);
    }, e.props._as = String, e.setup = function(l, a) {
      const i = Gn();
      if (!i.value)
        return e._setup(l, a);
      const {
        props: o,
        provideSubDefaults: s
      } = Po(l, l._as ?? e.name, i), r = e._setup(o, a);
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
    name: t ?? Bt(la(e.replace(/__/g, "-"))),
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
        return yt(l.tag, {
          class: [e, l.class],
          style: l.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function ba(e) {
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
const Zt = "cubic-bezier(0.4, 0, 0.2, 1)", Eo = "cubic-bezier(0.0, 0, 0.2, 1)", Bo = "cubic-bezier(0.4, 0, 1, 1)";
function Sa(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? To(e) : qn(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function en(e, n) {
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
function To(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function Lo(e) {
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
  const i = ce("useProxiedModel"), o = j(e[n] !== void 0 ? e[n] : t), s = nt(n), c = s !== n ? h(() => {
    var g, v, d, y;
    return e[n], !!(((g = i.vnode.props) != null && g.hasOwnProperty(n) || (v = i.vnode.props) != null && v.hasOwnProperty(s)) && ((d = i.vnode.props) != null && d.hasOwnProperty(`onUpdate:${n}`) || (y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${s}`)));
  }) : h(() => {
    var g, v;
    return e[n], !!((g = i.vnode.props) != null && g.hasOwnProperty(n) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${n}`)));
  });
  qe(() => !c.value, () => {
    q(() => e[n], (g) => {
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
const Ca = Symbol.for("vuetify:locale");
function Kn() {
  const e = me(Ca);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function je() {
  const e = me(Ca);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const rn = ["sm", "md", "lg", "xl", "xxl"], Oo = Symbol.for("vuetify:display"), $o = E({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function Ot() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  const t = me(Oo);
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
const Fo = Symbol.for("vuetify:goto");
function Ro() {
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
function Mo(e) {
  return Yn(e) ?? (document.scrollingElement || document.body);
}
function Yn(e) {
  return typeof e == "string" ? document.querySelector(e) : oa(e);
}
function hn(e, n, t) {
  if (typeof e == "number")
    return n && t ? -e : e;
  let l = Yn(e), a = 0;
  for (; l; )
    a += n ? l.offsetLeft : l.offsetTop, l = l.offsetParent;
  return a;
}
async function Bl(e, n, t, l) {
  const a = t ? "scrollLeft" : "scrollTop", i = Me((l == null ? void 0 : l.options) ?? Ro(), n), o = l == null ? void 0 : l.rtl.value, s = (typeof e == "number" ? e : Yn(e)) ?? 0, r = i.container === "parent" && s instanceof HTMLElement ? s.parentElement : Mo(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c)
    throw new TypeError(`Easing function "${i.easing}" not found.`);
  let m;
  if (typeof s == "number")
    m = hn(s, t, o);
  else if (m = hn(s, t, o) - hn(r, t, o), i.layout) {
    const y = window.getComputedStyle(s).getPropertyValue("--v-layout-top");
    y && (m -= parseInt(y, 10));
  }
  m += i.offset, m = No(r, m, !!o, !!t);
  const g = r[a] ?? 0;
  if (m === g)
    return Promise.resolve(m);
  const v = performance.now();
  return new Promise((d) => requestAnimationFrame(function y(f) {
    const S = (f - v) / i.duration, p = Math.floor(g + (m - g) * c(De(S, 0, 1)));
    if (r[a] = p, S >= 1 && Math.abs(p - r[a]) < 10)
      return d(m);
    if (S > 2)
      return Ue("Scroll target is not reachable"), d(r[a]);
    requestAnimationFrame(y);
  }));
}
function ka() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = me(Fo), {
    isRtl: t
  } = je();
  if (!n)
    throw new Error("[Vuetify] Could not find injected goto instance");
  const l = {
    ...n,
    // can be set via VLocaleProvider
    rtl: h(() => n.rtl.value || t.value)
  };
  async function a(i, o) {
    return Bl(i, Me(e, o), !1, l);
  }
  return a.horizontal = async (i, o) => Bl(i, Me(e, o), !0, l), a;
}
function No(e, n, t, l) {
  const {
    scrollWidth: a,
    scrollHeight: i
  } = e, [o, s] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let r, c;
  return l ? t ? (r = -(a - o), c = 0) : (r = 0, c = a - o) : (r = 0, c = i + -s), Math.max(Math.min(n, c), r);
}
const le = [String, Function, Object, Array], Do = Symbol.for("vuetify:icons"), un = E({
  icon: {
    type: le
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Tl = N()({
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
}), zo = Lt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: un(),
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
const Ho = (e) => {
  const n = me(Do);
  if (!n)
    throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: h(() => {
      var r;
      const l = ye(e);
      if (!l)
        return {
          component: Tl
        };
      let a = l;
      if (typeof a == "string" && (a = a.trim(), a.startsWith("$") && (a = (r = n.aliases) == null ? void 0 : r[a.slice(1)])), a || Ue(`Could not find aliased icon "${l}"`), Array.isArray(a))
        return {
          component: zo,
          icon: a
        };
      if (typeof a != "string")
        return {
          component: Tl,
          icon: a
        };
      const i = Object.keys(n.sets).find((c) => typeof a == "string" && a.startsWith(`${c}:`)), o = i ? a.slice(i.length + 1) : a;
      return {
        component: n.sets[i ?? n.defaultSet].component,
        icon: o
      };
    })
  };
}, Ll = Symbol.for("vuetify:theme"), de = E({
  theme: String
}, "theme");
function ge(e) {
  ce("provideTheme");
  const n = me(Ll, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = h(() => e.theme ?? n.name.value), l = h(() => n.themes.value[t.value]), a = h(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = {
    ...n,
    name: t,
    current: l,
    themeClasses: a
  };
  return pe(Ll, i), i;
}
function gt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = xn(), l = j();
  if (ve) {
    const a = new ResizeObserver((i) => {
      e == null || e(i, a), i.length && (n === "content" ? l.value = i[0].contentRect : l.value = i[0].target.getBoundingClientRect());
    });
    Ee(() => {
      a.disconnect();
    }), q(() => t.el, (i, o) => {
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
const jo = Symbol.for("vuetify:layout"), Wo = Symbol.for("vuetify:layout-item"), wa = E({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function _a(e) {
  const n = me(jo);
  if (!n)
    throw new Error("[Vuetify] Could not find injected layout");
  const t = e.id ?? `layout-item-${Oe()}`, l = ce("useLayoutItem");
  pe(Wo, {
    id: t
  });
  const a = W(!1);
  Ui(() => a.value = !0), qi(() => a.value = !1);
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
}, "tag"), Go = E({
  text: String,
  ...Y(),
  ...ie()
}, "VToolbarTitle"), Uo = N()({
  name: "VToolbarTitle",
  props: Go(),
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
}), qo = E({
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
    props: qo({
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
        const s = l.group ? Mn : at;
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
function pa(e, n) {
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
      const o = l.group ? Mn : at;
      return () => yt(o, {
        name: l.disabled ? "" : e,
        css: !l.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...l.disabled ? {} : n
      }, i.default);
    }
  });
}
function xa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", l = la(`offset-${t}`);
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
const Ko = E({
  target: [Object, Array]
}, "v-dialog-transition"), Xn = N()({
  name: "VDialogTransition",
  props: Ko(),
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
        } = $l(e.target, a), g = dt(a, [{
          transform: `translate(${o}px, ${s}px) scale(${r}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * m,
          easing: Eo
        });
        (v = Ol(a)) == null || v.forEach((d) => {
          dt(d, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * m,
            easing: Zt
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
        } = $l(e.target, a);
        dt(a, [{}, {
          transform: `translate(${o}px, ${s}px) scale(${r}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * m,
          easing: Bo
        }).finished.then(() => i()), (v = Ol(a)) == null || v.forEach((d) => {
          dt(d, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * m,
            easing: Zt
          });
        });
      },
      onAfterLeave(a) {
        a.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? u(at, Q({
      name: "dialog-transition"
    }, l, {
      css: !1
    }), t) : u(at, {
      name: "dialog-transition"
    }, t);
  }
});
function Ol(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function $l(e, n) {
  const t = ga(e), l = Wn(n), [a, i] = getComputedStyle(n).transformOrigin.split(" ").map((S) => parseFloat(S)), [o, s] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
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
const Fl = xe("fade-transition");
xe("scale-transition");
xe("scroll-x-transition");
xe("scroll-x-reverse-transition");
xe("scroll-y-transition");
xe("scroll-y-reverse-transition");
xe("slide-x-transition");
xe("slide-x-reverse-transition");
const Va = xe("slide-y-transition");
xe("slide-y-reverse-transition");
const Ia = pa("expand-transition", xa()), Aa = pa("expand-x-transition", xa("", !0)), Yo = E({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), re = N(!1)({
  name: "VDefaultsProvider",
  props: Yo(),
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
    } = na(e);
    return st(l, {
      reset: i,
      root: o,
      scoped: s,
      disabled: a
    }), () => {
      var r;
      return (r = t.default) == null ? void 0 : r.call(t);
    };
  }
}), Ye = E({
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
function Xo(e) {
  return {
    aspectStyles: h(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const Pa = E({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...Y(),
  ...Ye()
}, "VResponsive"), Rl = N()({
  name: "VResponsive",
  props: Pa(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: l
    } = Xo(e), {
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
      if (In(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && wo(e.value.background)) {
          const l = wt(e.value.background);
          if (l.a == null || l.a === 1) {
            const a = Vo(l);
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
function He(e, n) {
  const t = h(() => ({
    text: mt(e) ? e.value : n ? e[n] : null
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
    background: mt(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = Qn(t);
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
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    roundedClasses: h(() => {
      const l = mt(e) ? e.value : e.rounded, a = mt(e) ? e.value : e.tile, i = [];
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
}, "transition"), Ge = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: l,
    disabled: a,
    group: i,
    ...o
  } = e, {
    component: s = i ? Mn : at,
    ...r
  } = typeof l == "object" ? l : {};
  return yt(s, Q(typeof l == "string" ? {
    name: a ? "" : l
  } : r, typeof l == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: a,
    group: i
  }).filter((c) => {
    let [m, g] = c;
    return g !== void 0;
  })), o), t);
};
function Qo(e, n) {
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
    const m = s.some((v) => v.isIntersecting);
    a && (!t.quiet || c.init) && (!t.once || m || c.init) && a(m, s, r), m && t.once ? Ea(e, n) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function Ea(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const Ba = {
  mounted: Qo,
  unmounted: Ea
}, Jo = E({
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
  ...Pa(),
  ...Y(),
  ...Ie(),
  ...$t()
}, "VImg"), Jn = N()({
  name: "VImg",
  directives: {
    intersect: Ba
  },
  props: Jo(),
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
    } = Ae(e), s = ce("VImg"), r = W(""), c = j(), m = W(e.eager ? "loading" : "idle"), g = W(), v = W(), d = h(() => e.src && typeof e.src == "object" ? {
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
    q(() => e.src, () => {
      f(m.value !== "idle");
    }), q(y, (_, A) => {
      !_ && A && c.value && x(c.value);
    }), aa(() => f());
    function f(_) {
      if (!(e.eager && _) && !(zn && !_ && !e.eager)) {
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
          naturalWidth: X
        } = _;
        D || X ? (g.value = X, v.value = D) : !_.complete && m.value === "loading" && A != null ? w = window.setTimeout(T, A) : (_.currentSrc.endsWith(".svg") || _.currentSrc.startsWith("data:image/svg+xml")) && (g.value = 1, v.value = 1);
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
      return u(Ge, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [_e(A ? u("picture", {
          class: "v-img__picture"
        }, [A, _]) : _, [[ht, m.value === "loaded"]])]
      });
    }, C = () => u(Ge, {
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
    }), $ = () => l.placeholder ? u(Ge, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(m.value === "loading" || m.value === "error" && !l.error) && u("div", {
        class: "v-img__placeholder"
      }, [l.placeholder()])]
    }) : null, H = () => l.error ? u(Ge, {
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
    }, null) : null, O = W(!1);
    {
      const _ = q(y, (A) => {
        A && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            O.value = !0;
          });
        }), _());
      });
    }
    return U(() => {
      const _ = Rl.filterProps(e);
      return _e(u(Rl, Q({
        class: ["v-img", {
          "v-img--booting": !O.value
        }, a.value, o.value, e.class],
        style: [{
          width: G(e.width === "auto" ? g.value : e.width)
        }, i.value, e.style]
      }, _, {
        aspectRatio: y.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(se, null, [u(V, null, null), u(C, null, null), u(R, null, null), u($, null, null), u(H, null, null)]),
        default: l.default
      }), [[ot("intersect"), {
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
}), Qe = E({
  border: [Boolean, Number, String]
}, "border");
function Je(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    borderClasses: h(() => {
      const l = mt(e) ? e.value : e.border, a = [];
      if (l === !0 || l === "")
        a.push(`${n}--border`);
      else if (typeof l == "string" || l === 0)
        for (const i of String(l).split(" "))
          a.push(`border-${i}`);
      return a;
    })
  };
}
const Ze = E({
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
      const t = mt(e) ? e.value : e.elevation, l = [];
      return t == null || l.push(`elevation-${t}`), l;
    })
  };
}
const Zo = [null, "prominent", "default", "comfortable", "compact"], Ta = E({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => Zo.includes(e)
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
  ...ie({
    tag: "header"
  }),
  ...de()
}, "VToolbar"), Ml = N()({
  name: "VToolbar",
  props: Ta(),
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
    } = je(), m = W(!!(e.extended || (d = t.extension) != null && d.call(t))), g = h(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = h(() => m.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return st({
      VBtn: {
        variant: "text"
      }
    }), U(() => {
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
            var p, w, x;
            return [u("div", {
              class: "v-toolbar__content",
              style: {
                height: G(g.value)
              }
            }, [t.prepend && u("div", {
              class: "v-toolbar__prepend"
            }, [(p = t.prepend) == null ? void 0 : p.call(t)]), y && u(Uo, {
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
              height: G(v.value)
            }
          }
        }, {
          default: () => [u(Ia, null, {
            default: () => [m.value && u("div", {
              class: "v-toolbar__extension",
              style: {
                height: G(v.value)
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
}), es = E({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function ts(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let l = 0;
  const a = j(null), i = W(0), o = W(0), s = W(0), r = W(!1), c = W(!1), m = h(() => Number(e.scrollThreshold)), g = h(() => De((m.value - i.value) / m.value || 0)), v = () => {
    const d = a.value;
    !d || t && !t.value || (l = i.value, i.value = "window" in d ? d.pageYOffset : d.scrollTop, c.value = i.value < l, s.value = Math.abs(i.value - m.value));
  };
  return q(c, () => {
    o.value = o.value || i.value;
  }), q(r, () => {
    o.value = 0;
  }), Ke(() => {
    q(() => e.scrollTarget, (d) => {
      var f;
      const y = d ? document.querySelector(d) : window;
      if (!y) {
        Ue(`Unable to locate element with identifier ${d}`);
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
  }), t && q(t, v, {
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
function La() {
  const e = W(!1);
  return Ke(() => {
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
const ns = E({
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
  ...Ta(),
  ...wa(),
  ...es(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), ls = N()({
  name: "VAppBar",
  props: ns(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = j(), a = ue(e, "modelValue"), i = h(() => {
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
    } = ts(e, {
      canScroll: o
    }), g = h(() => i.value.hide || i.value.fullyHide), v = h(() => e.collapse || i.value.collapse && (i.value.inverted ? m.value > 0 : m.value === 0)), d = h(() => e.flat || i.value.fullyHide && !a.value || i.value.elevate && (i.value.inverted ? s.value > 0 : s.value === 0)), y = h(() => i.value.fadeImage ? i.value.inverted ? 1 - m.value : m.value : void 0), f = h(() => {
      var L, V;
      const w = Number(((L = l.value) == null ? void 0 : L.contentHeight) ?? e.height), x = Number(((V = l.value) == null ? void 0 : V.extensionHeight) ?? 0);
      return g.value ? s.value < r.value || i.value.fullyHide ? w + x : w : w + x;
    });
    qe(h(() => !!e.scrollBehavior), () => {
      ze(() => {
        g.value ? i.value.inverted ? a.value = s.value > r.value : a.value = c.value || s.value < r.value : a.value = !0;
      });
    });
    const {
      ssrBootStyles: b
    } = La(), {
      layoutItemStyles: S,
      layoutIsReady: p
    } = _a({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: M(e, "location"),
      layoutSize: f,
      elementSize: W(void 0),
      active: a,
      absolute: M(e, "absolute")
    });
    return U(() => {
      const w = Ml.filterProps(e);
      return u(Ml, Q({
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
}), as = [null, "default", "comfortable", "compact"], $e = E({
  density: {
    type: String,
    default: "default",
    validator: (e) => as.includes(e)
  }
}, "density");
function We(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    densityClasses: h(() => `${n}--density-${e.density}`)
  };
}
const is = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ft(e, n) {
  return u(se, null, [e && u("span", {
    key: "overlay",
    class: `${n}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${n}__underlay`
  }, null)]);
}
const tt = E({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => is.includes(e)
  }
}, "variant");
function Rt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  const t = h(() => {
    const {
      variant: i
    } = ye(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: l,
    colorStyles: a
  } = Qn(h(() => {
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
const Oa = E({
  baseColor: String,
  divided: Boolean,
  ...Qe(),
  ...Y(),
  ...$e(),
  ...Ze(),
  ...Ie(),
  ...ie(),
  ...de(),
  ...tt()
}, "VBtnGroup"), Nl = N()({
  name: "VBtnGroup",
  props: Oa(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = ge(e), {
      densityClasses: a
    } = We(e), {
      borderClasses: i
    } = Je(e), {
      elevationClasses: o
    } = et(e), {
      roundedClasses: s
    } = Ae(e);
    st({
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
}), Zn = E({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), $a = E({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Fa(e, n) {
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
  }, l), Ee(() => {
    i.unregister(a);
  });
  const r = h(() => i.isSelected(a)), c = h(() => i.items.value[0].id === a), m = h(() => i.items.value[i.items.value.length - 1].id === a), g = h(() => r.value && [i.selectedClass.value, e.selectedClass]);
  return q(r, (v) => {
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
function el(e, n) {
  let t = !1;
  const l = on([]), a = ue(e, "modelValue", [], (v) => v == null ? [] : Ra(l, Pe(v)), (v) => {
    const d = ss(l, v);
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
  Ke(() => {
    r();
  }), Ee(() => {
    t = !0;
  }), Ki(() => {
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
    if (e.multiple && Ue('This method is not supported when using "multiple" prop'), a.value.length) {
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
    getItemIndex: (v) => os(l, v)
  };
  return pe(n, g), g;
}
function os(e, n) {
  const t = Ra(e, [n]);
  return t.length ? e.findIndex((l) => l.id === t[0]) : -1;
}
function Ra(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.find((o) => bt(l, o.value)), i = e[l];
    (a == null ? void 0 : a.value) != null ? t.push(a.id) : i != null && t.push(i.id);
  }), t;
}
function ss(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.findIndex((i) => i.id === l);
    if (~a) {
      const i = e[a];
      t.push(i.value != null ? i.value : a);
    }
  }), t;
}
const Ma = Symbol.for("vuetify:v-btn-toggle"), rs = E({
  ...Oa(),
  ...Zn()
}, "VBtnToggle");
N()({
  name: "VBtnToggle",
  props: rs(),
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
    } = el(e, Ma);
    return U(() => {
      const r = Nl.filterProps(e);
      return u(Nl, Q({
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
const us = ["x-small", "small", "default", "large", "x-large"], Mt = E({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Nt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return jn(() => {
    let t, l;
    return Yt(us, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = {
      width: G(e.size),
      height: G(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: l
    };
  });
}
const cs = E({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: le,
  ...Y(),
  ...Mt(),
  ...ie({
    tag: "i"
  }),
  ...de()
}, "VIcon"), ae = N()({
  name: "VIcon",
  props: cs(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const a = j(), {
      themeClasses: i
    } = ge(e), {
      iconData: o
    } = Ho(h(() => a.value || e.icon)), {
      sizeClasses: s
    } = Nt(e), {
      textColorClasses: r,
      textColorStyles: c
    } = He(M(e, "color"));
    return U(() => {
      var v, d;
      const m = (v = l.default) == null ? void 0 : v.call(l);
      m && (a.value = (d = ca(m).filter((y) => y.type === Yi && y.children && typeof y.children == "string")[0]) == null ? void 0 : d.children);
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
        default: () => [m]
      });
    }), {};
  }
});
function Na(e, n) {
  const t = j(), l = W(!1);
  if (zn) {
    const a = new IntersectionObserver((i) => {
      l.value = !!i.find((o) => o.isIntersecting);
    }, n);
    Ee(() => {
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
const ds = E({
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
  ...ie({
    tag: "div"
  }),
  ...de()
}, "VProgressCircular"), fs = N()({
  name: "VProgressCircular",
  props: ds(),
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
      textColorStyles: m
    } = He(M(e, "color")), {
      textColorClasses: g,
      textColorStyles: v
    } = He(M(e, "bgColor")), {
      intersectionRef: d,
      isIntersecting: y
    } = Na(), {
      resizeRef: f,
      contentRect: b
    } = gt(), S = h(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), p = h(() => Number(e.width)), w = h(() => r.value ? Number(e.size) : b.value ? b.value.width : Math.max(p.value, 32)), x = h(() => l / (1 - p.value / w.value) * 2), L = h(() => p.value / w.value * x.value), V = h(() => G((100 - S.value) / 100 * a));
    return ze(() => {
      d.value = i.value, f.value = i.value;
    }), U(() => u(e.tag, {
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
}), Dl = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, tl = E({
  location: String
}, "location");
function nl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: l
  } = je();
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
      return i !== "center" && (n ? r[Dl[i]] = `calc(100% - ${s(i)}px)` : r[i] = 0), o !== "center" ? n ? r[Dl[o]] = `calc(100% - ${s(o)}px)` : r[o] = 0 : (i === "center" ? r.top = r.left = "50%" : r[{
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
const vs = E({
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
  ...ie(),
  ...de()
}, "VProgressLinear"), ms = N()({
  name: "VProgressLinear",
  props: vs(),
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
    } = je(), {
      themeClasses: o
    } = ge(e), {
      locationStyles: s
    } = nl(e), {
      textColorClasses: r,
      textColorStyles: c
    } = He(e, "color"), {
      backgroundColorClasses: m,
      backgroundColorStyles: g
    } = Te(h(() => e.bgColor || e.color)), {
      backgroundColorClasses: v,
      backgroundColorStyles: d
    } = Te(h(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: y,
      backgroundColorStyles: f
    } = Te(e, "color"), {
      roundedClasses: b
    } = Ae(e), {
      intersectionRef: S,
      isIntersecting: p
    } = Na(), w = h(() => parseFloat(e.max)), x = h(() => parseFloat(e.height)), L = h(() => De(parseFloat(e.bufferValue) / w.value * 100, 0, 100)), V = h(() => De(parseFloat(l.value) / w.value * 100, 0, 100)), C = h(() => a.value !== e.reverse), $ = h(() => e.indeterminate ? "fade-transition" : "slide-x-transition");
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
    return U(() => u(e.tag, {
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
        height: e.active ? G(x.value) : 0,
        "--v-progress-linear-height": G(x.value),
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
          [C.value ? "left" : "right"]: G(-x.value),
          borderTop: `${G(x.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${G(x.value / 4)})`,
          width: G(100 - L.value, "%"),
          "--v-progress-linear-stream-to": G(x.value * (C.value ? 1 : -1))
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
          width: G(L.value, "%")
        }]
      }, null), u(at, {
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
}), ll = E({
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
function Da(e, n) {
  var l;
  let {
    slots: t
  } = n;
  return u("div", {
    class: `${e.name}__loader`
  }, [((l = t.default) == null ? void 0 : l.call(t, {
    color: e.color,
    isActive: e.active
  })) || u(ms, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const gs = ["static", "relative", "fixed", "absolute", "sticky"], za = E({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => gs.includes(e)
    )
  }
}, "position");
function Ha(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    positionClasses: h(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function ys() {
  const e = ce("useRoute");
  return h(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function hs() {
  var e, n;
  return (n = (e = ce("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function cn(e, n) {
  var c, m;
  const t = Xi("RouterLink"), l = h(() => !!(e.href || e.to)), a = h(() => (l == null ? void 0 : l.value) || yl(n, "click") || yl(e, "click"));
  if (typeof t == "string" || !("useLink" in t))
    return {
      isLink: l,
      isClickable: a,
      href: M(e, "href")
    };
  const i = h(() => ({
    ...e,
    to: M(() => e.to || "")
  })), o = t.useLink(i.value), s = h(() => e.to ? o : void 0), r = ys();
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
function bs(e, n) {
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
function Ss(e, n) {
  q(() => {
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
const An = Symbol("rippleStop"), Cs = 80;
function zl(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Pn(e) {
  return e.constructor.name === "TouchEvent";
}
function ja(e) {
  return e.constructor.name === "KeyboardEvent";
}
const ks = function(e, n) {
  var g;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = 0, a = 0;
  if (!ja(e)) {
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
}, tn = {
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
    } = ks(e, n, t), g = `${i * 2}px`;
    a.className = "v-ripple__animation", a.style.width = g, a.style.height = g, n.appendChild(l);
    const v = window.getComputedStyle(n);
    v && v.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), zl(a, `translate(${s}, ${r}) scale3d(${o},${o},${o})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
      a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), zl(a, `translate(${c}, ${m}) scale3d(1,1,1)`);
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
function Wa(e) {
  return typeof e > "u" || !!e;
}
function It(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[An])) {
    if (e[An] = !0, Pn(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || ja(e), t._ripple.class && (n.class = t._ripple.class), Pn(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        tn.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, Cs);
    } else
      tn.show(e, t, n);
  }
}
function Hl(e) {
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
    }), tn.hide(n);
  }
}
function Ga(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let At = !1;
function Ua(e) {
  !At && (e.keyCode === vl.enter || e.keyCode === vl.space) && (At = !0, It(e));
}
function qa(e) {
  At = !1, Ce(e);
}
function Ka(e) {
  At && (At = !1, Ce(e));
}
function Ya(e, n, t) {
  const {
    value: l,
    modifiers: a
  } = n, i = Wa(l);
  if (i || tn.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, pn(l) && l.class && (e._ripple.class = l.class), i && !t) {
    if (a.stop) {
      e.addEventListener("touchstart", Hl, {
        passive: !0
      }), e.addEventListener("mousedown", Hl);
      return;
    }
    e.addEventListener("touchstart", It, {
      passive: !0
    }), e.addEventListener("touchend", Ce, {
      passive: !0
    }), e.addEventListener("touchmove", Ga, {
      passive: !0
    }), e.addEventListener("touchcancel", Ce), e.addEventListener("mousedown", It), e.addEventListener("mouseup", Ce), e.addEventListener("mouseleave", Ce), e.addEventListener("keydown", Ua), e.addEventListener("keyup", qa), e.addEventListener("blur", Ka), e.addEventListener("dragstart", Ce, {
      passive: !0
    });
  } else
    !i && t && Xa(e);
}
function Xa(e) {
  e.removeEventListener("mousedown", It), e.removeEventListener("touchstart", It), e.removeEventListener("touchend", Ce), e.removeEventListener("touchmove", Ga), e.removeEventListener("touchcancel", Ce), e.removeEventListener("mouseup", Ce), e.removeEventListener("mouseleave", Ce), e.removeEventListener("keydown", Ua), e.removeEventListener("keyup", qa), e.removeEventListener("dragstart", Ce), e.removeEventListener("blur", Ka);
}
function ws(e, n) {
  Ya(e, n, !1);
}
function _s(e) {
  delete e._ripple, Xa(e);
}
function ps(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = Wa(n.oldValue);
  Ya(e, n, t);
}
const Dt = {
  mounted: ws,
  unmounted: _s,
  updated: ps
}, xs = E({
  active: {
    type: Boolean,
    default: void 0
  },
  baseColor: String,
  symbol: {
    type: null,
    default: Ma
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
  ...$a(),
  ...ll(),
  ...tl(),
  ...za(),
  ...Ie(),
  ...dn(),
  ...Mt(),
  ...ie({
    tag: "button"
  }),
  ...de(),
  ...tt({
    variant: "elevated"
  })
}, "VBtn"), Vs = N()({
  name: "VBtn",
  props: xs(),
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
    } = We(e), {
      dimensionStyles: s
    } = Xe(e), {
      elevationClasses: r
    } = et(e), {
      loaderClasses: c
    } = al(e), {
      locationStyles: m
    } = nl(e), {
      positionClasses: g
    } = Ha(e), {
      roundedClasses: v
    } = Ae(e), {
      sizeClasses: d,
      sizeStyles: y
    } = Nt(e), f = Fa(e, e.symbol, !1), b = cn(e, t), S = h(() => {
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
    return Ss(b, f == null ? void 0 : f.select), U(() => {
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
          }, l.append) : u(ae, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && u("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((T = l.loader) == null ? void 0 : T.call(l)) ?? u(fs, {
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
function Is(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function jl(e, n) {
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
const Qa = {
  static: Es,
  // specific viewport position, usually centered
  connected: Ts
  // connected to a certain element
}, As = E({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Qa
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
function Ps(e, n) {
  const t = j({}), l = j();
  ve && qe(() => !!(n.isActive.value && e.locationStrategy), (i) => {
    var o, s;
    q(() => e.locationStrategy, i), be(() => {
      window.removeEventListener("resize", a), l.value = void 0;
    }), window.addEventListener("resize", a, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? l.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation : l.value = (s = Qa[e.locationStrategy](n, e, t)) == null ? void 0 : s.updateLocation;
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
function Es() {
}
function Bs(e, n) {
  n ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const t = Wn(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function Ts(e, n, t) {
  (Array.isArray(e.target.value) || Lo(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: a,
    preferredOrigin: i
  } = jn(() => {
    const y = Vn(n.location, e.isRtl.value), f = n.origin === "overlap" ? y : n.origin === "auto" ? gn(y) : Vn(n.origin, e.isRtl.value);
    return y.side === f.side && y.align === yn(f).align ? {
      preferredAnchor: bl(y),
      preferredOrigin: bl(f)
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
  q([e.target, e.contentEl], (y, f) => {
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
    const y = ga(e.target.value), f = Bs(e.contentEl.value, e.isRtl.value), b = en(e.contentEl.value), S = 12;
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (f.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), f.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const p = b.reduce((O, _) => {
      const A = _.getBoundingClientRect(), T = new lt({
        x: _ === document.documentElement ? 0 : A.x,
        y: _ === document.documentElement ? 0 : A.y,
        width: _.clientWidth,
        height: _.clientHeight
      });
      return O ? new lt({
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
      const _ = new lt(f), A = jl(O.anchor, y), T = jl(O.origin, _);
      let {
        x: D,
        y: X
      } = Is(A, T);
      switch (O.anchor.side) {
        case "top":
          X -= m.value[0];
          break;
        case "bottom":
          X += m.value[0];
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
          X -= m.value[1];
          break;
        case "bottom":
          X += m.value[1];
          break;
        case "left":
          D -= m.value[1];
          break;
        case "right":
          D += m.value[1];
          break;
      }
      return _.x += D, _.y += X, _.width = Math.min(_.width, r.value), _.height = Math.min(_.height, c.value), {
        overflows: Cl(_, p),
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
        Co("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: O,
        y: _,
        overflows: A
      } = x(w);
      L += O, V += _, f.x += O, f.y += _;
      {
        const T = Sl(w.anchor), D = A.x.before || A.x.after, X = A.y.before || A.y.after;
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
            }, k = I === "x" ? T === "y" ? yn : gn : T === "y" ? gn : yn;
            P.anchor = k(P.anchor), P.origin = k(P.origin);
            const {
              overflows: B
            } = x(P);
            (B[I].before <= A[I].before && B[I].after <= A[I].after || B[I].before + B[I].after < (A[I].before + A[I].after) / 2) && (w = P, ee = $[I] = !0);
          }
        }), ee)
          continue;
      }
      A.x.before && (L += A.x.before, f.x += A.x.before), A.x.after && (L -= A.x.after, f.x -= A.x.after), A.y.before && (V += A.y.before, f.y += A.y.before), A.y.after && (V -= A.y.after, f.y -= A.y.after);
      {
        const T = Cl(f, p);
        C.x = p.width - T.x.before - T.x.after, C.y = p.height - T.y.before - T.y.after, L += T.x.before, f.x += T.x.before, V += T.y.before, f.y += T.y.before;
      }
      break;
    }
    const R = Sl(w.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`,
      transformOrigin: `${w.origin.side} ${w.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: G(Cn(V)),
      left: e.isRtl.value ? void 0 : G(Cn(L)),
      right: e.isRtl.value ? G(Cn(-L)) : void 0,
      minWidth: G(R === "y" ? Math.min(o.value, y.width) : o.value),
      maxWidth: G(Wl(De(C.x, o.value === 1 / 0 ? 0 : o.value, r.value))),
      maxHeight: G(Wl(De(C.y, s.value === 1 / 0 ? 0 : s.value, c.value)))
    }), {
      available: C,
      contentBox: f
    };
  }
  return q(() => [a.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => d()), he(() => {
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
function Wl(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let En = !0;
const nn = [];
function Ls(e) {
  !En || nn.length ? (nn.push(e), Bn()) : (En = !1, e(), Bn());
}
let Gl = -1;
function Bn() {
  cancelAnimationFrame(Gl), Gl = requestAnimationFrame(() => {
    const e = nn.shift();
    e && e(), nn.length ? Bn() : En = !0;
  });
}
const Ut = {
  none: null,
  close: Fs,
  block: Rs,
  reposition: Ms
}, Os = E({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Ut
  }
}, "VOverlay-scroll-strategies");
function $s(e, n) {
  if (!ve)
    return;
  let t;
  ze(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = Fn(), await new Promise((l) => setTimeout(l)), t.active && t.run(() => {
      var l;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (l = Ut[e.scrollStrategy]) == null || l.call(Ut, n, e, t);
    }));
  }), be(() => {
    t == null || t.stop();
  });
}
function Fs(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  Ja(e.targetEl.value ?? e.contentEl.value, n);
}
function Rs(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, l = [.../* @__PURE__ */ new Set([...en(e.targetEl.value, n.contained ? t : void 0), ...en(e.contentEl.value, n.contained ? t : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = ((s) => qn(s) && s)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, r) => {
    s.style.setProperty("--v-body-scroll-x", G(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", G(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", G(a)), s.classList.add("v-overlay-scroll-blocked");
  }), be(() => {
    l.forEach((s, r) => {
      const c = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), m = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), g = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -c, s.scrollTop = -m, s.style.scrollBehavior = g;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Ms(e, n, t) {
  let l = !1, a = -1, i = -1;
  function o(s) {
    Ls(() => {
      var m, g;
      const r = performance.now();
      (g = (m = e.updateLocation).value) == null || g.call(m, s), l = (performance.now() - r) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      Ja(e.targetEl.value ?? e.contentEl.value, (s) => {
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
function Ja(e, n) {
  const t = [document, ...en(e)];
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
const Tn = Symbol.for("vuetify:v-menu"), Ns = E({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Ds(e, n) {
  let t = () => {
  };
  function l(o) {
    t == null || t();
    const s = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((r) => {
      t = so(s, () => {
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
const zs = E({
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
  ...Ns()
}, "VOverlay-activator");
function Hs(e, n) {
  let {
    isActive: t,
    isTop: l
  } = n;
  const a = ce("useActivator"), i = j();
  let o = !1, s = !1, r = !0;
  const c = h(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), m = h(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: g,
    runCloseDelay: v
  } = Ds(e, (C) => {
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
      o = !1, v();
    },
    onFocus: (C) => {
      Qt(C.target, ":focus-visible") !== !1 && (s = !0, C.stopPropagation(), i.value = C.currentTarget || C.target, g());
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
  q(l, (C) => {
    C && (e.openOnHover && !o && (!c.value || !s) || c.value && !s && (!e.openOnHover || !o)) && (t.value = !1);
  }), q(t, (C) => {
    C || setTimeout(() => {
      d.value = void 0;
    });
  }, {
    flush: "post"
  });
  const p = xn();
  ze(() => {
    p.value && he(() => {
      i.value = p.el;
    });
  });
  const w = xn(), x = h(() => e.target === "cursor" && d.value ? d.value : w.value ? w.el : Za(e.target, a) || i.value), L = h(() => Array.isArray(x.value) ? void 0 : x.value);
  let V;
  return q(() => !!e.activator, (C) => {
    C && ve ? (V = Fn(), V.run(() => {
      js(e, a, {
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
function js(e, n, t) {
  let {
    activatorEl: l,
    activatorEvents: a
  } = t;
  q(() => e.activator, (r, c) => {
    if (c && r !== c) {
      const m = s(c);
      m && o(m);
    }
    r && he(() => i());
  }, {
    immediate: !0
  }), q(() => e.activatorProps, () => {
    i();
  }), be(() => {
    o();
  });
  function i() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    r && co(r, Q(a.value, c));
  }
  function o() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    r && fo(r, Q(a.value, c));
  }
  function s() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = Za(r, n);
    return l.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, l.value;
  }
}
function Za(e, n) {
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
function Ws() {
  if (!ve)
    return W(!1);
  const {
    ssr: e
  } = Ot();
  if (e) {
    const n = W(!1);
    return Ke(() => {
      n.value = !0;
    }), n;
  } else
    return W(!0);
}
const Gs = E({
  eager: Boolean
}, "lazy");
function Us(e, n) {
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
const Ul = Symbol.for("vuetify:stack"), Ct = on([]);
function qs(e, n, t) {
  const l = ce("useStack"), a = !t, i = me(Ul, void 0), o = on({
    activeChildren: /* @__PURE__ */ new Set()
  });
  pe(Ul, o);
  const s = W(+n.value);
  qe(e, () => {
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
  const r = W(!0);
  a && ze(() => {
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
function Ks(e) {
  return {
    teleportTarget: h(() => {
      const t = e.value;
      if (t === !0 || !ve)
        return;
      const l = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (l == null) {
        sn(`Unable to locate target ${t}`);
        return;
      }
      let a = l.querySelector(":scope > .v-overlay-container");
      return a || (a = document.createElement("div"), a.className = "v-overlay-container", l.appendChild(a)), a;
    })
  };
}
function Ys() {
  return !0;
}
function ei(e, n, t) {
  if (!e || ti(e, t) === !1)
    return !1;
  const l = ba(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const a = (typeof t.value == "object" && t.value.include || (() => []))();
  return a.push(n), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function ti(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Ys)(e);
}
function Xs(e, n, t) {
  const l = typeof t.value == "function" ? t.value : t.value.handler;
  n._clickOutside.lastMousedownWasOutside && ei(e, n, t) && setTimeout(() => {
    ti(e, t) && l && l(e);
  }, 0);
}
function ql(e, n) {
  const t = ba(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Qs = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (a) => Xs(a, e, n), l = (a) => {
      e._clickOutside.lastMousedownWasOutside = ei(a, e, n);
    };
    ql(e, (a) => {
      a.addEventListener("click", t, !0), a.addEventListener("mousedown", l, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: l
    };
  },
  unmounted(e, n) {
    e._clickOutside && (ql(e, (t) => {
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
function Js(e) {
  const {
    modelValue: n,
    color: t,
    ...l
  } = e;
  return u(at, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", Q({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, l), null)]
  });
}
const ol = E({
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
  ...zs(),
  ...Y(),
  ...Ye(),
  ...Gs(),
  ...As(),
  ...Os(),
  ...de(),
  ...$t()
}, "VOverlay"), ln = N()({
  name: "VOverlay",
  directives: {
    ClickOutside: Qs
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
    } = Ks(h(() => e.attach || e.contained)), {
      themeClasses: r
    } = ge(e), {
      rtlClasses: c,
      isRtl: m
    } = je(), {
      hasContent: g,
      onAfterLeave: v
    } = Us(e, o), d = Te(h(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: y,
      localTop: f,
      stackStyles: b
    } = qs(o, M(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: S,
      activatorRef: p,
      target: w,
      targetEl: x,
      targetRef: L,
      activatorEvents: V,
      contentEvents: C,
      scrimEvents: $
    } = Hs(e, {
      isActive: o,
      isTop: f
    }), {
      dimensionStyles: H
    } = Xe(e), R = Ws(), {
      scopeId: O
    } = il();
    q(() => e.disabled, (z) => {
      z && (o.value = !1);
    });
    const _ = j(), A = j(), T = j(), {
      contentStyles: D,
      updateLocation: X
    } = Ps(e, {
      isRtl: m,
      contentEl: T,
      target: w,
      isActive: o
    });
    $s(e, {
      root: _,
      contentEl: T,
      targetEl: x,
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
    }), Ee(() => {
      ve && window.removeEventListener("keydown", P);
    });
    function P(z) {
      var ne, oe;
      z.key === "Escape" && y.value && (e.persistent ? F() : (o.value = !1, (ne = T.value) != null && ne.contains(document.activeElement) && ((oe = S.value) == null || oe.focus())));
    }
    const k = hs();
    qe(() => e.closeOnBack, () => {
      bs(k, (z) => {
        y.value && o.value ? (z(!1), e.persistent ? F() : o.value = !1) : z();
      });
    });
    const B = j();
    q(() => o.value && (e.absolute || e.contained) && s.value == null, (z) => {
      if (z) {
        const ne = Sa(_.value);
        ne && ne !== document.scrollingElement && (B.value = ne.scrollTop);
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
        easing: Zt
      });
    }
    function K() {
      a("afterEnter");
    }
    function te() {
      v(), a("afterLeave");
    }
    return U(() => {
      var z;
      return u(se, null, [(z = t.activator) == null ? void 0 : z.call(t, {
        isActive: o.value,
        targetRef: L,
        props: Q({
          ref: p
        }, V.value, e.activatorProps)
      }), R.value && g.value && u(Qi, {
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
            top: G(B.value)
          }, e.style],
          ref: _
        }, O, l), [u(Js, Q({
          color: d,
          modelValue: o.value && !!e.scrim,
          ref: A
        }, $.value), null), u(Ge, {
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
            })]), [[ht, o.value], [ot("click-outside"), {
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
const Zs = E({
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
}, "VDialog"), er = N()({
  name: "VDialog",
  props: Zs(),
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
    function s(m) {
      var d, y;
      const g = m.relatedTarget, v = m.target;
      if (g !== v && ((d = o.value) != null && d.contentEl) && // We're the topmost dialog
      ((y = o.value) != null && y.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(v) && // It isn't inside the dialog body
      !o.value.contentEl.contains(v)) {
        const f = xt(o.value.contentEl);
        if (!f.length)
          return;
        const b = f[0], S = f[f.length - 1];
        g === b ? S.focus() : b.focus();
      }
    }
    ve && q(() => a.value && e.retainFocus, (m) => {
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
    return q(a, async (m) => {
      var g;
      m || (await he(), (g = o.value.activatorEl) == null || g.focus({
        preventScroll: !0
      }));
    }), U(() => {
      const m = ln.filterProps(e), g = Q({
        "aria-haspopup": "dialog",
        "aria-expanded": String(a.value)
      }, e.activatorProps), v = Q({
        tabindex: -1
      }, e.contentProps);
      return u(ln, Q({
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
}), tr = E({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...Y(),
  ...ie()
}, "VContainer"), ni = N()({
  name: "VContainer",
  props: tr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: l
    } = je();
    return U(() => u(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, l.value, e.class],
      style: e.style
    }, t)), {};
  }
}), li = rn.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), ai = rn.reduce((e, n) => {
  const t = "offset" + Bt(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), ii = rn.reduce((e, n) => {
  const t = "order" + Bt(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Kl = {
  col: Object.keys(li),
  offset: Object.keys(ai),
  order: Object.keys(ii)
};
function nr(e, n, t) {
  let l = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return e === "col" && (l = "v-" + l), e === "col" && (t === "" || t === !0) || (l += `-${t}`), l.toLowerCase();
  }
}
const lr = ["auto", "start", "end", "center", "baseline", "stretch"], ar = E({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...li,
  offset: {
    type: [String, Number],
    default: null
  },
  ...ai,
  order: {
    type: [String, Number],
    default: null
  },
  ...ii,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => lr.includes(e)
  },
  ...Y(),
  ...ie()
}, "VCol"), vt = N()({
  name: "VCol",
  props: ar(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => {
      const a = [];
      let i;
      for (i in Kl)
        Kl[i].forEach((s) => {
          const r = e[s], c = nr(i, s, r);
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
}), sl = ["start", "end", "center"], oi = ["space-between", "space-around", "space-evenly"];
function rl(e, n) {
  return rn.reduce((t, l) => {
    const a = e + Bt(l);
    return t[a] = n(), t;
  }, {});
}
const ir = [...sl, "baseline", "stretch"], si = (e) => ir.includes(e), ri = rl("align", () => ({
  type: String,
  default: null,
  validator: si
})), or = [...sl, ...oi], ui = (e) => or.includes(e), ci = rl("justify", () => ({
  type: String,
  default: null,
  validator: ui
})), sr = [...sl, ...oi, "stretch"], di = (e) => sr.includes(e), fi = rl("alignContent", () => ({
  type: String,
  default: null,
  validator: di
})), Yl = {
  align: Object.keys(ri),
  justify: Object.keys(ci),
  alignContent: Object.keys(fi)
}, rr = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function ur(e, n, t) {
  let l = rr[e];
  if (t != null) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return l += `-${t}`, l.toLowerCase();
  }
}
const cr = E({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: si
  },
  ...ri,
  justify: {
    type: String,
    default: null,
    validator: ui
  },
  ...ci,
  alignContent: {
    type: String,
    default: null,
    validator: di
  },
  ...fi,
  ...Y(),
  ...ie()
}, "VRow"), an = N()({
  name: "VRow",
  props: cr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => {
      const a = [];
      let i;
      for (i in Yl)
        Yl[i].forEach((o) => {
          const s = e[o], r = ur(i, o, s);
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
}), dr = Un("v-spacer", "div", "VSpacer"), Ln = Symbol.for("vuetify:list");
function vi() {
  const e = me(Ln, {
    hasPrepend: W(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: W(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return pe(Ln, n), e;
}
function mi() {
  return me(Ln, null);
}
const ul = (e) => {
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
}, gi = (e) => {
  const n = ul(e);
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
}, fr = (e) => {
  const n = ul(e);
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
}, vr = (e) => {
  const n = gi(e);
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
}, mr = {
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
}, yi = {
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
}, gr = {
  open: yi.open,
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
}, hi = (e) => {
  const n = cl(e);
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
}, yr = (e) => {
  const n = cl(e);
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
}, hr = (e) => {
  const n = hi(e);
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
}, br = (e) => {
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
}, Pt = Symbol.for("vuetify:nested"), bi = {
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
}, Sr = E({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), Cr = (e) => {
  let n = !1;
  const t = j(/* @__PURE__ */ new Map()), l = j(/* @__PURE__ */ new Map()), a = ue(e, "opened", e.opened, (d) => new Set(d), (d) => [...d.values()]), i = h(() => {
    if (typeof e.activeStrategy == "object")
      return e.activeStrategy;
    if (typeof e.activeStrategy == "function")
      return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return fr(e.mandatory);
      case "single-leaf":
        return vr(e.mandatory);
      case "independent":
        return ul(e.mandatory);
      case "single-independent":
      default:
        return gi(e.mandatory);
    }
  }), o = h(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    if (typeof e.selectStrategy == "function")
      return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return hr(e.mandatory);
      case "leaf":
        return yr(e.mandatory);
      case "independent":
        return cl(e.mandatory);
      case "single-independent":
        return hi(e.mandatory);
      case "classic":
      default:
        return br(e.mandatory);
    }
  }), s = h(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return gr;
      case "single":
        return mr;
      case "multiple":
      default:
        return yi;
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
  return pe(Pt, v), v.root;
}, Si = (e, n) => {
  const t = me(Pt, bi), l = Symbol(Oe()), a = h(() => e.value !== void 0 ? e.value : l), i = {
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
  }), n && pe(Pt, i), i;
}, kr = () => {
  const e = me(Pt, bi);
  pe(Pt, {
    ...e,
    isGroupActivator: !0
  });
}, wr = Lt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return kr(), () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), _r = E({
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
  ...ie()
}, "VListGroup"), Xl = N()({
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
    } = Si(M(e, "value"), !0), o = h(() => `v-list-group--id-${String(i.value)}`), s = mi(), {
      isBooted: r
    } = La();
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
        defaults: v.value
      }, {
        default: () => [u(wr, null, {
          default: () => [t.activator({
            props: m.value,
            isOpen: l.value
          })]
        })]
      }), u(Ge, {
        transition: {
          component: Ia
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
}), pr = E({
  opacity: [Number, String],
  ...Y(),
  ...ie()
}, "VListItemSubtitle"), xr = N()({
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
}), _t = Un("v-list-item-title"), Vr = E({
  start: Boolean,
  end: Boolean,
  icon: le,
  image: String,
  text: String,
  ...Y(),
  ...$e(),
  ...Ie(),
  ...Mt(),
  ...ie(),
  ...de(),
  ...tt({
    variant: "flat"
  })
}, "VAvatar"), it = N()({
  name: "VAvatar",
  props: Vr(),
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
    } = We(e), {
      roundedClasses: r
    } = Ae(e), {
      sizeClasses: c,
      sizeStyles: m
    } = Nt(e);
    return U(() => u(e.tag, {
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
}), Ir = E({
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
  onClick: ke(),
  onClickOnce: ke(),
  ...Qe(),
  ...Y(),
  ...$e(),
  ...Ye(),
  ...Ze(),
  ...Ie(),
  ...dn(),
  ...ie(),
  ...de(),
  ...tt({
    variant: "text"
  })
}, "VListItem"), Ne = N()({
  name: "VListItem",
  directives: {
    Ripple: Dt
  },
  props: Ir(),
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
    } = Si(o, !1), b = mi(), S = h(() => {
      var k;
      return e.active !== !1 && (e.active || ((k = i.isActive) == null ? void 0 : k.value) || (d.activatable.value ? r.value : m.value));
    }), p = h(() => e.link !== !1 && i.isLink.value), w = h(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || !!b && (d.selectable.value || d.activatable.value || e.value != null))), x = h(() => e.rounded || e.nav), L = h(() => e.color ?? e.activeColor), V = h(() => ({
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
      densityClasses: _
    } = We(e), {
      dimensionStyles: A
    } = Xe(e), {
      elevationClasses: T
    } = et(e), {
      roundedClasses: D
    } = Ae(x), X = h(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), ee = h(() => ({
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
    return U(() => {
      const k = p.value ? "a" : e.tag, B = l.title || e.title != null, F = l.subtitle || e.subtitle != null, K = !!(e.appendAvatar || e.appendIcon), te = !!(K || l.append), z = !!(e.prependAvatar || e.prependIcon), ne = !!(z || l.prepend);
      return b == null || b.updateHasPrepend(ne), e.activeColor && ko("active-color", ["color", "base-color"]), _e(u(k, {
        class: ["v-list-item", {
          "v-list-item--active": S.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": w.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !ne && (b == null ? void 0 : b.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && S.value
        }, C.value, $.value, H.value, _.value, T.value, X.value, D.value, O.value, e.class],
        style: [R.value, A.value, e.style],
        href: i.href.value,
        tabindex: w.value ? b ? -2 : 0 : void 0,
        onClick: I,
        onKeydown: w.value && !p.value && P
      }, {
        default: () => {
          var oe;
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
          }) : u(se, null, [e.prependAvatar && u(it, {
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
          }, [B && u(_t, {
            key: "title"
          }, {
            default: () => {
              var fe;
              return [((fe = l.title) == null ? void 0 : fe.call(l, {
                title: e.title
              })) ?? e.title];
            }
          }), F && u(xr, {
            key: "subtitle"
          }, {
            default: () => {
              var fe;
              return [((fe = l.subtitle) == null ? void 0 : fe.call(l, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (oe = l.default) == null ? void 0 : oe.call(l, ee.value)]), te && u("div", {
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
          }) : u(se, null, [e.appendIcon && u(ae, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(it, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[ot("ripple"), w.value && e.ripple]]);
    }), {
      activate: s,
      isActivated: r,
      isGroupActivator: v,
      isSelected: m,
      list: b,
      select: c
    };
  }
}), Ar = E({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...Y(),
  ...ie()
}, "VListSubheader"), Pr = N()({
  name: "VListSubheader",
  props: Ar(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: l,
      textColorStyles: a
    } = He(M(e, "color"));
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
}), Er = E({
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
    } = He(M(e, "color")), s = h(() => {
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
}), Br = E({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Ci = N()({
  name: "VListChildren",
  props: Br(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return vi(), () => {
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
          })) ?? u(qt, s, null);
        if (r === "subheader")
          return ((d = t.subheader) == null ? void 0 : d.call(t, {
            props: s
          })) ?? u(Pr, s, null);
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
        }, g = Xl.filterProps(s);
        return o ? u(Xl, Q({
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
            }) : u(Ne, b, m);
          },
          default: () => u(Ci, {
            items: o,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: s
        }) : u(Ne, Q(s, {
          value: e.returnObject ? c : s.value
        }), m);
      }));
    };
  }
}), ki = E({
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
  const t = Fe(n, e.itemTitle, n), l = Fe(n, e.itemValue, t), a = Fe(n, e.itemChildren), i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? St(n, ["children"]) : n : void 0 : Fe(n, e.itemProps), o = {
    title: t,
    value: l,
    ...i
  };
  return {
    title: String(o.title ?? ""),
    value: o.value,
    props: o,
    children: Array.isArray(a) ? wi(e, a) : void 0,
    raw: n
  };
}
function wi(e, n) {
  const t = [];
  for (const l of n)
    t.push(On(e, l));
  return t;
}
function Tr(e) {
  const n = h(() => wi(e, e.items)), t = h(() => n.value.some((i) => i.value === null));
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
  const t = Fe(n, e.itemType, "item"), l = Lr(n) ? n : Fe(n, e.itemTitle), a = Fe(n, e.itemValue, void 0), i = Fe(n, e.itemChildren), o = e.itemProps === !0 ? St(n, ["children"]) : Fe(n, e.itemProps), s = {
    title: l,
    value: a,
    ...o
  };
  return {
    type: t,
    title: s.title,
    value: s.value,
    props: s,
    children: t === "item" && i ? _i(e, i) : void 0,
    raw: n
  };
}
function _i(e, n) {
  const t = [];
  for (const l of n)
    t.push(Or(e, l));
  return t;
}
function $r(e) {
  return {
    items: h(() => _i(e, e.items))
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
  ...Sr({
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
  ...ki(),
  ...Ie(),
  ...ie(),
  ...de(),
  ...tt({
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
    } = Te(M(e, "bgColor")), {
      borderClasses: s
    } = Je(e), {
      densityClasses: r
    } = We(e), {
      dimensionStyles: c
    } = Xe(e), {
      elevationClasses: m
    } = et(e), {
      roundedClasses: g
    } = Ae(e), {
      children: v,
      open: d,
      parents: y,
      select: f
    } = Cr(e), b = h(() => e.lines ? `v-list--${e.lines}-line` : void 0), S = M(e, "activeColor"), p = M(e, "baseColor"), w = M(e, "color");
    vi(), st({
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
    const x = W(!1), L = j();
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
        return Xt(L.value, _);
    }
    return U(() => u(e.tag, {
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
      default: () => [u(Ci, {
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
  ...Y(),
  ...de()
}, "VLabel"), pi = N()({
  name: "VLabel",
  props: Mr(),
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
}), xi = Symbol.for("vuetify:selection-control-group"), Vi = E({
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
    default: bt
  },
  ...Y(),
  ...$e(),
  ...de()
}, "SelectionControlGroup"), Nr = E({
  ...Vi({
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
    const l = ue(e, "modelValue"), a = Oe(), i = h(() => e.id || `v-selection-control-group-${a}`), o = h(() => e.name || i.value), s = /* @__PURE__ */ new Set();
    return pe(xi, {
      modelValue: l,
      forceUpdate: () => {
        s.forEach((r) => r());
      },
      onForceUpdate: (r) => {
        s.add(r), be(() => {
          s.delete(r);
        });
      }
    }), st({
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
const Ii = E({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...Y(),
  ...Vi()
}, "VSelectionControl");
function Dr(e) {
  const n = me(xi, void 0), {
    densityClasses: t
  } = We(e), l = ue(e, "modelValue"), a = h(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = h(() => e.falseValue !== void 0 ? e.falseValue : !1), o = h(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), s = h({
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
  } = He(h(() => {
    if (!(e.error || e.disabled))
      return s.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: m,
    backgroundColorStyles: g
  } = Te(h(() => s.value && !e.error && !e.disabled ? e.color : e.baseColor)), v = h(() => s.value ? e.trueIcon : e.falseIcon);
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
const Ql = N()({
  name: "VSelectionControl",
  directives: {
    Ripple: Dt
  },
  inheritAttrs: !1,
  props: Ii(),
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
    } = Dr(e), d = Oe(), y = W(!1), f = W(!1), b = j(), S = h(() => e.id || `input-${d}`), p = h(() => !e.disabled && !e.readonly);
    a == null || a.onForceUpdate(() => {
      b.value && (b.value.checked = s.value);
    });
    function w(C) {
      p.value && (y.value = !0, Qt(C.target, ":focus-visible") !== !1 && (f.value = !0));
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
    return U(() => {
      var O, _;
      const C = l.label ? l.label({
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label, [$, H] = ua(t), R = u("input", Q({
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
      })) ?? u(se, null, [o.value && u(ae, {
        key: "icon",
        icon: o.value
      }, null), R])]), [[ot("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), C && u(pi, {
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
    type: le,
    default: "$checkboxIndeterminate"
  },
  ...Ii({
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
    return U(() => {
      const r = St(Ql.filterProps(e), ["modelValue"]);
      return u(Ql, Q(r, {
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
function Ai(e) {
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
const jr = E({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...Y(),
  ...$t({
    transition: {
      component: Va,
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
    } = He(h(() => e.color));
    return U(() => u(Ge, {
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
}), Pi = E({
  focused: Boolean,
  "onUpdate:focused": ke()
}, "focus");
function Ei(e) {
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
const Gr = Symbol.for("vuetify:form");
function Bi() {
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
  ...Pi()
}, "validation");
function qr(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Oe();
  const l = ue(e, "modelValue"), a = h(() => e.validationValue === void 0 ? l.value : e.validationValue), i = Bi(), o = j([]), s = W(!0), r = h(() => !!(Pe(l.value === "" ? null : l.value).length || Pe(a.value === "" ? null : a.value).length)), c = h(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), m = h(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), g = h(() => {
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
  }), y = W(!1), f = h(() => ({
    [`${n}--error`]: d.value === !1,
    [`${n}--dirty`]: r.value,
    [`${n}--disabled`]: c.value,
    [`${n}--readonly`]: m.value
  })), b = ce("validation"), S = h(() => e.name ?? ye(t));
  aa(() => {
    i == null || i.register({
      id: S.value,
      vm: b,
      validate: x,
      reset: p,
      resetValidation: w
    });
  }), Ee(() => {
    i == null || i.unregister(S.value);
  }), Ke(async () => {
    v.value.lazy || await x(!0), i == null || i.update(S.value, d.value, g.value);
  }), qe(() => v.value.input, () => {
    q(a, () => {
      if (a.value != null)
        x();
      else if (e.focused) {
        const L = q(() => e.focused, (V) => {
          V || x(), L();
        });
      }
    });
  }), qe(() => v.value.blur, () => {
    q(() => e.focused, (L) => {
      L || x();
    });
  }), q([d, g], () => {
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
const Ti = E({
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
  "onClick:prepend": ke(),
  "onClick:append": ke(),
  ...Y(),
  ...$e(),
  ...no(Ye(), ["maxWidth", "minWidth", "width"]),
  ...de(),
  ...Ur()
}, "VInput"), Jl = N()({
  name: "VInput",
  props: {
    ...Ti()
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
    } = We(e), {
      dimensionStyles: o
    } = Xe(e), {
      themeClasses: s
    } = ge(e), {
      rtlClasses: r
    } = je(), {
      InputIcon: c
    } = Ai(e), m = Oe(), g = h(() => e.id || `input-${m}`), v = h(() => `${g.value}-messages`), {
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
    return U(() => {
      var T, D, X, ee;
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
      }, null), (X = l.append) == null ? void 0 : X.call(l, $.value)]), A && u("div", {
        class: "v-input__details"
      }, [u(Wr, {
        id: v.value,
        active: _,
        messages: H.value
      }, {
        message: l.message
      }), (ee = l.details) == null ? void 0 : ee.call(l, $.value)])]);
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
  const i = Et(a, t), o = Li(a, l, t), s = Et(a, n), r = Oi(a, n), c = s * 0.4;
  return o > r ? r - c : o + i < r + s ? r - i + s + c : o;
}
function Yr(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: l
  } = e;
  const a = Et(l, t), i = Oi(l, n), o = Et(l, n);
  return i - a / 2 + o / 2;
}
function Zl(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Xr(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Li(e, n, t) {
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
function Oi(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const Qr = Symbol.for("vuetify:v-slide-group"), $i = E({
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
  ...$o({
    mobile: null
  }),
  ...ie(),
  ...Zn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), ea = N()({
  name: "VSlideGroup",
  props: $i(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isRtl: l
    } = je(), {
      displayClasses: a,
      mobile: i
    } = Ot(e), o = el(e, e.symbol), s = W(!1), r = W(0), c = W(0), m = W(0), g = h(() => e.direction === "horizontal"), {
      resizeRef: v,
      contentRect: d
    } = gt(), {
      resizeRef: y,
      contentRect: f
    } = gt(), b = ka(), S = h(() => ({
      container: v.el,
      duration: 200,
      easing: "easeOutQuart"
    })), p = h(() => o.selected.value.length ? o.items.value.findIndex((k) => k.id === o.selected.value[0]) : -1), w = h(() => o.selected.value.length ? o.items.value.findIndex((k) => k.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (ve) {
      let k = -1;
      q(() => [o.selected.value, d.value, f.value, g.value], () => {
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
    const x = W(!1);
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
      const B = Et(g.value, v.el), F = Li(g.value, l.value, v.el);
      if (!(Zl(g.value, v.el) <= B || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(k - F) < 16)) {
        if (g.value && l.value && v.el) {
          const {
            scrollWidth: te,
            offsetWidth: z
          } = v.el;
          k = te - z - k;
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
      var F, K;
      if (!y.el)
        return;
      let B;
      if (!k)
        B = xt(y.el)[0];
      else if (k === "next") {
        if (B = (F = y.el.querySelector(":focus")) == null ? void 0 : F.nextElementSibling, !B)
          return T("first");
      } else if (k === "prev") {
        if (B = (K = y.el.querySelector(":focus")) == null ? void 0 : K.previousElementSibling, !B)
          return T("last");
      } else
        k === "first" ? B = y.el.firstElementChild : k === "last" && (B = y.el.lastElementChild);
      B && B.focus({
        preventScroll: !0
      });
    }
    function D(k) {
      const B = g.value && l.value ? -1 : 1, F = (k === "prev" ? -B : B) * c.value;
      let K = r.value + F;
      if (g.value && l.value && v.el) {
        const {
          scrollWidth: te,
          offsetWidth: z
        } = v.el;
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
      if (!v.value)
        return !1;
      const k = Zl(g.value, v.el), B = Xr(g.value, v.el);
      return k - B - Math.abs(r.value) > 1;
    });
    return U(() => u(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !g.value,
        "v-slide-group--has-affixes": ee.value,
        "v-slide-group--is-overflowing": s.value
      }, a.value, e.class],
      style: e.style,
      tabindex: x.value || o.selected.value.length ? -1 : 0,
      onFocus: O
    }, {
      default: () => {
        var k, B, F;
        return [ee.value && u("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !I.value
          }],
          onMousedown: _,
          onClick: () => I.value && D("prev")
        }, [((k = t.prev) == null ? void 0 : k.call(t, X.value)) ?? u(Fl, null, {
          default: () => [u(ae, {
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
        }, [(B = t.default) == null ? void 0 : B.call(t, X.value)])]), ee.value && u("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !P.value
          }],
          onMousedown: _,
          onClick: () => P.value && D("next")
        }, [((F = t.next) == null ? void 0 : F.call(t, X.value)) ?? u(Fl, null, {
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
}), Fi = Symbol.for("vuetify:v-chip-group"), Jr = E({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: bt
  },
  ...$i(),
  ...Y(),
  ...Zn({
    selectedClass: "v-chip--selected"
  }),
  ...ie(),
  ...de(),
  ...tt({
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
    } = el(e, Fi);
    return st({
      VChip: {
        color: M(e, "color"),
        disabled: M(e, "disabled"),
        filter: M(e, "filter"),
        variant: M(e, "variant")
      }
    }), U(() => {
      const c = ea.filterProps(e);
      return u(ea, Q(c, {
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
  onClick: ke(),
  onClickOnce: ke(),
  ...Qe(),
  ...Y(),
  ...$e(),
  ...Ze(),
  ...$a(),
  ...Ie(),
  ...dn(),
  ...Mt(),
  ...ie({
    tag: "span"
  }),
  ...de(),
  ...tt({
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
    } = Kn(), {
      borderClasses: o
    } = Je(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: c
    } = Rt(e), {
      densityClasses: m
    } = We(e), {
      elevationClasses: g
    } = et(e), {
      roundedClasses: v
    } = Ae(e), {
      sizeClasses: d
    } = Nt(e), {
      themeClasses: y
    } = ge(e), f = ue(e, "modelValue"), b = Fa(e, Fi, !1), S = cn(e, t), p = h(() => e.link !== !1 && S.isLink.value), w = h(() => !e.disabled && e.link !== !1 && (!!b || e.link || S.isClickable.value)), x = h(() => ({
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
          return [Ft(w.value, "v-chip"), O && u(Aa, {
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
          }, a.prepend) : u(se, null, [e.prependIcon && u(ae, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && u(it, {
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
          }, a.append) : u(se, null, [e.appendIcon && u(ae, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(it, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), R && u("button", Q({
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
          }, a.close) : u(ae, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[ot("ripple"), w.value && e.ripple, null]]);
    };
  }
}), eu = E({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...St(ol({
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
    } = il(), i = Oe(), o = h(() => e.id || `v-menu-${i}`), s = j(), r = me(Tn, null), c = W(0);
    pe(Tn, {
      register() {
        ++c.value;
      },
      unregister() {
        --c.value;
      },
      closeParents(f) {
        setTimeout(() => {
          !c.value && !e.persistent && (f == null || f && !ro(f, s.value.contentEl)) && (l.value = !1, r == null || r.closeParents());
        }, 40);
      }
    });
    async function m(f) {
      var p, w, x;
      const b = f.relatedTarget, S = f.target;
      await he(), l.value && b !== S && ((p = s.value) != null && p.contentEl) && // We're the topmost menu
      ((w = s.value) != null && w.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(S) && // It isn't inside the menu body
      !s.value.contentEl.contains(S) && ((x = xt(s.value.contentEl)[0]) == null || x.focus());
    }
    q(l, (f) => {
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
          f.key === "Enter" && f.preventDefault(), fa(xt((b = s.value) == null ? void 0 : b.contentEl, !1), f.shiftKey ? "prev" : "next", (x) => x.tabIndex >= 0) || (l.value = !1, (p = (S = s.value) == null ? void 0 : S.activatorEl) == null || p.focus());
        } else
          ["Enter", " "].includes(f.key) && e.closeOnContentClick && (l.value = !1, r == null || r.closeParents());
    }
    function d(f) {
      var S;
      if (e.disabled)
        return;
      const b = (S = s.value) == null ? void 0 : S.contentEl;
      b && l.value ? f.key === "ArrowDown" ? (f.preventDefault(), Xt(b, "next")) : f.key === "ArrowUp" && (f.preventDefault(), Xt(b, "prev")) : ["ArrowDown", "ArrowUp"].includes(f.key) && (l.value = !0, f.preventDefault(), setTimeout(() => setTimeout(() => d(f))));
    }
    const y = h(() => Q({
      "aria-haspopup": "menu",
      "aria-expanded": String(l.value),
      "aria-owns": o.value,
      onKeydown: d
    }, e.activatorProps));
    return U(() => {
      const f = ln.filterProps(e);
      return u(ln, Q({
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
  ...Y(),
  ...$t({
    transition: {
      component: Va
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
    return U(() => u(Ge, {
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
  ...Y()
}, "VFieldLabel"), jt = N()({
  name: "VFieldLabel",
  props: au(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return U(() => u(pi, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
}), iu = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ri = E({
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
    validator: (e) => iu.includes(e)
  },
  "onClick:clear": ke(),
  "onClick:appendInner": ke(),
  "onClick:prependInner": ke(),
  ...Y(),
  ...ll(),
  ...Ie(),
  ...de()
}, "VField"), Mi = N()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Pi(),
    ...Ri()
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
      blur: m
    } = Ei(e), {
      InputIcon: g
    } = Ai(e), {
      roundedClasses: v
    } = Ae(e), {
      rtlClasses: d
    } = je(), y = h(() => e.dirty || e.active), f = h(() => !e.singleLine && !!(e.label || a.label)), b = Oe(), S = h(() => e.id || `input-${b}`), p = h(() => `${S.value}-messages`), w = j(), x = j(), L = j(), V = h(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: C,
      backgroundColorStyles: $
    } = Te(M(e, "bgColor")), {
      textColorClasses: H,
      textColorStyles: R
    } = He(h(() => e.error || e.disabled ? void 0 : y.value && r.value ? e.color : e.baseColor));
    q(y, (T) => {
      if (f.value) {
        const D = w.value.$el, X = x.value.$el;
        requestAnimationFrame(() => {
          const ee = Wn(D), I = X.getBoundingClientRect(), P = I.x - ee.x, k = I.y - ee.y - (ee.height / 2 - I.height / 2), B = I.width / 0.75, F = Math.abs(B - ee.width) > 1 ? {
            maxWidth: G(B)
          } : void 0, K = getComputedStyle(D), te = getComputedStyle(X), z = parseFloat(K.transitionDuration) * 1e3 || 150, ne = parseFloat(te.getPropertyValue("--v-field-label-scale")), oe = te.getPropertyValue("color");
          D.style.visibility = "visible", X.style.visibility = "hidden", dt(D, {
            transform: `translate(${P}px, ${k}px) scale(${ne})`,
            color: oe,
            ...F
          }, {
            duration: z,
            easing: Zt,
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
    return U(() => {
      var P, k, B;
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
        }, i.value, C.value, s.value, o.value, v.value, d.value, e.class],
        style: [$.value, e.style],
        onClick: _
      }, t), [u("div", {
        class: "v-field__overlay"
      }, null), u(Da, {
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
      })]), X && u(Aa, {
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
      }), ee && u("div", {
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
  const n = Object.keys(Mi.props).filter((t) => !Hn(t) && t !== "class" && t !== "style");
  return sa(e, n);
}
const su = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ni = E({
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
  ...Ti(),
  ...Ri()
}, "VTextField"), ta = N()({
  name: "VTextField",
  directives: {
    Intersect: Ba
  },
  inheritAttrs: !1,
  props: Ni(),
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
    } = Ei(e), c = h(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), m = h(() => {
      if (t.maxlength)
        return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), g = h(() => ["plain", "underlined"].includes(e.variant));
    function v(V, C) {
      var $, H;
      !e.autofocus || !V || (H = ($ = C[0].target) == null ? void 0 : $.focus) == null || H.call($);
    }
    const d = j(), y = j(), f = j(), b = h(() => su.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
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
        i.value = null, oo(e["onClick:clear"], V);
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
    return U(() => {
      const V = !!(a.counter || e.counter !== !1 && e.counter != null), C = !!(V || a.details), [$, H] = ua(t), {
        modelValue: R,
        ...O
      } = Jl.filterProps(e), _ = ou(e);
      return u(Jl, Q({
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
          return u(Mi, Q({
            ref: y,
            onMousedown: p,
            onClick: w,
            "onClick:clear": x,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, _, {
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
                  ...B
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
              }, B, H), null), [[ot("intersect"), {
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
  ...Y()
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
    q(() => {
      var s;
      return (s = o.value) == null ? void 0 : s.height;
    }, (s) => {
      s != null && l("update:height", s);
    }), U(() => {
      var s, r;
      return e.renderless ? u(se, null, [(s = a.default) == null ? void 0 : s.call(a, {
        itemRef: i
      })]) : u("div", Q({
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
  const t = Ot(), l = W(0);
  ze(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = W(0), i = W(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (l.value || 16)
  ) || 1), o = W(0), s = W(0), r = j(), c = j();
  let m = 0;
  const {
    resizeRef: g,
    contentRect: v
  } = gt();
  ze(() => {
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
  const S = W(0);
  let p = -1;
  function w(P) {
    return f[P] || l.value;
  }
  const x = ao(() => {
    const P = performance.now();
    b[0] = 0;
    const k = n.value.length;
    for (let B = 1; B <= k - 1; B++)
      b[B] = (b[B - 1] || 0) + w(B - 1);
    S.value = Math.max(S.value, performance.now() - P);
  }, S), L = q(y, (P) => {
    P && (L(), m = c.value.offsetTop, x.immediate(), D(), ~p && he(() => {
      ve && window.requestAnimationFrame(() => {
        ee(p), p = -1;
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
    return P = De(P, 0, n.value.length - 1), b[P] || 0;
  }
  function $(P) {
    return mu(b, P);
  }
  let H = 0, R = 0, O = 0;
  q(d, (P, k) => {
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
    cancelAnimationFrame(T), T = requestAnimationFrame(X);
  }
  function X() {
    if (!r.value || !d.value)
      return;
    const P = H - m, k = Math.sign(R), B = Math.max(0, P - _n), F = De($(B), 0, n.value.length), K = P + d.value + _n, te = De($(K) + 1, F + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (k !== cu || F < a.value) && (k !== du || te > i.value)
    ) {
      const z = C(a.value) - C(F), ne = C(te) - C(i.value);
      Math.max(z, ne) > _n ? (a.value = F, i.value = te) : (F <= 0 && (a.value = F), te >= n.value.length && (i.value = te));
    }
    o.value = C(a.value), s.value = C(n.value.length) - C(i.value);
  }
  function ee(P) {
    const k = C(P);
    !r.value || P && !k ? p = P : r.value.scrollTop = k;
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
    }), x.immediate(), D();
  }, {
    deep: !0
  }), {
    containerRef: r,
    markerRef: c,
    computedItems: I,
    paddingTop: o,
    paddingBottom: s,
    scrollToIndex: ee,
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
  ...Y(),
  ...Ye()
}, "VVirtualScroll"), yu = N()({
  name: "VVirtualScroll",
  props: gu(),
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
      scrollToIndex: m,
      paddingTop: g,
      paddingBottom: v,
      computedItems: d
    } = vu(e, M(e, "items"));
    return qe(() => e.renderless, () => {
      function y() {
        var S, p;
        const b = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        i.value === document.documentElement ? (document[b]("scroll", s, {
          passive: !0
        }), document[b]("scrollend", r)) : ((S = i.value) == null || S[b]("scroll", s, {
          passive: !0
        }), (p = i.value) == null || p[b]("scrollend", r));
      }
      Ke(() => {
        i.value = Sa(l.vnode.el, !0), y(!0);
      }), be(y);
    }), U(() => {
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
          paddingTop: G(g.value)
        }
      }, null), y, u("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: G(v.value)
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
          paddingBottom: G(v.value)
        }
      }, [y])]);
    }), {
      scrollToIndex: m
    };
  }
});
function hu(e, n) {
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
  ...ki({
    itemChildren: !1
  })
}, "Select"), Su = E({
  ...bu(),
  ...St(Ni({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...$t({
    transition: {
      component: Xn
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
    } = Kn(), a = j(), i = j(), o = j(), s = ue(e, "menu"), r = h({
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
    }), d = h(() => typeof e.counterValue == "function" ? e.counterValue(v.value) : typeof e.counterValue == "number" ? e.counterValue : v.value.length), y = Bi(), f = h(() => v.value.map((I) => I.value)), b = W(!1), S = h(() => r.value ? e.closeText : e.openText);
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
    }), C = j(), {
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
      var K, te;
      if (!I.key || e.readonly || y != null && y.isReadonly.value)
        return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(I.key) && I.preventDefault(), ["Enter", "ArrowDown", " "].includes(I.key) && (r.value = !0), ["Escape", "Tab"].includes(I.key) && (r.value = !1), I.key === "Home" ? (K = C.value) == null || K.focus("first") : I.key === "End" && ((te = C.value) == null || te.focus("last"));
      const P = 1e3;
      function k(z) {
        const ne = z.key.length === 1, oe = !z.ctrlKey && !z.metaKey && !z.altKey;
        return ne && oe;
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
          var ne;
          z >= 0 && ((ne = o.value) == null || ne.scrollToIndex(z));
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
    function X(I) {
      b.value = !0;
    }
    function ee(I) {
      if (I == null)
        v.value = [];
      else if (Qt(a.value, ":autofill") || Qt(a.value, ":-webkit-autofill")) {
        const P = c.value.find((k) => k.title === I);
        P && A(P);
      } else
        a.value && (a.value.value = "");
    }
    return q(r, () => {
      if (!e.hideSelected && r.value && v.value.length) {
        const I = x.value.findIndex((P) => v.value.some((k) => e.valueComparator(k.value, P.value)));
        ve && window.requestAnimationFrame(() => {
          var P;
          I >= 0 && ((P = o.value) == null || P.scrollToIndex(I));
        });
      }
    }), q(() => e.items, (I, P) => {
      r.value || b.value && !P.length && I.length && (r.value = !0);
    }), U(() => {
      const I = !!(e.chips || t.chip), P = !!(!e.hideNoData || x.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), k = v.value.length > 0, B = ta.filterProps(e), F = k || !b.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return u(ta, Q({
        ref: a
      }, B, {
        modelValue: v.value.map((K) => K.props.value).join(", "),
        "onUpdate:modelValue": ee,
        focused: b.value,
        "onUpdate:focused": (K) => b.value = K,
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
        default: () => u(se, null, [u(tu, Q({
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
          default: () => [P && u(Rr, Q({
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
              return [(K = t["prepend-item"]) == null ? void 0 : K.call(t), !x.value.length && !e.hideNoData && (((te = t["no-data"]) == null ? void 0 : te.call(t)) ?? u(Ne, {
                title: l(e.noDataText)
              }, null)), u(yu, {
                ref: o,
                renderless: !0,
                items: x.value
              }, {
                default: (ne) => {
                  var fl;
                  let {
                    item: oe,
                    index: fe,
                    itemRef: Se
                  } = ne;
                  const dl = Q(oe.props, {
                    ref: Se,
                    key: fe,
                    onClick: () => A(oe, null)
                  });
                  return ((fl = t.item) == null ? void 0 : fl.call(t, {
                    item: oe,
                    index: fe,
                    props: dl
                  })) ?? u(Ne, Q(dl, {
                    role: "option"
                  }), {
                    prepend: (zi) => {
                      let {
                        isSelected: Hi
                      } = zi;
                      return u(se, null, [e.multiple && !e.hideSelected ? u(Hr, {
                        key: oe.value,
                        modelValue: Hi,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, oe.props.prependAvatar && u(it, {
                        image: oe.props.prependAvatar
                      }, null), oe.props.prependIcon && u(ae, {
                        icon: oe.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (z = t["append-item"]) == null ? void 0 : z.call(t)];
            }
          })]
        }), v.value.map((K, te) => {
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
          }, oe = I ? !!t.chip : !!t.selection, fe = oe ? va(I ? t.chip({
            item: K,
            index: te,
            props: ne
          }) : t.selection({
            item: K,
            index: te
          })) : void 0;
          if (!(oe && !fe))
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
            }) : u($n, Q({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: K.title,
              disabled: K.props.disabled
            }, ne), null) : fe ?? u("span", {
              class: "v-select__selection-text"
            }, [K.title, e.multiple && te < v.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [Be(",")])])]);
        })]),
        "append-inner": function() {
          var ne;
          for (var K = arguments.length, te = new Array(K), z = 0; z < K; z++)
            te[z] = arguments[z];
          return u(se, null, [(ne = t["append-inner"]) == null ? void 0 : ne.call(t, ...te), e.menuIcon ? u(ae, {
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
}), ku = (e) => (Nn("data-v-09b4e981"), e = e(), Dn(), e), wu = ["href"], _u = /* @__PURE__ */ ku(() => /* @__PURE__ */ J("img", {
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
    const { mdAndUp: n } = Ot(), t = e, l = j([]), a = j(), i = (o) => {
      const s = l.value.find(
        (r) => {
          if (typeof o == "string")
            return r.title === o;
        }
      );
      s && (window.location.href = `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/${s.link}`);
    };
    return Ke(async () => {
      const { data: o } = await fetch(`${t.url}/projects`).then(
        (s) => s.json()
      );
      l.value = o, a.value = l.value.find(
        (s) => s.title === t.activeSelect || !!s.tag && s.tag === t.activeSelect
      ) || l.value[0];
    }), (o, s) => (Ve(), ft(ls, {
      id: "header",
      class: "header noselect",
      color: "#FFB71A",
      height: "72",
      "clipped-right": "",
      "clipped-left": "",
      flat: "",
      app: ""
    }, {
      default: Z(() => [
        u(an, {
          align: "center",
          justify: "start",
          class: "header__logo"
        }, {
          default: Z(() => [
            J("a", {
              title: "CCAF.io",
              href: `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/`
            }, pu, 8, wu),
            J("h4", xu, Re(e.title), 1),
            u(dr),
            J("ul", {
              class: pt(["header-links", { "is-long-title": !!a.value && !a.value.tag }])
            }, [
              J("li", Vu, [
                J("a", {
                  class: "header-links__element-link",
                  title: "Home",
                  href: `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/`
                }, "Home ", 8, Iu)
              ]),
              J("li", Au, [
                J("a", {
                  class: "header-links__element-link",
                  title: "Home",
                  href: `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/about_ccaf`
                }, "About CCAF ", 8, Pu)
              ]),
              J("li", Eu, [
                J("a", {
                  class: "header-links__element-link",
                  title: "Home",
                  href: `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/contact?topic=dmd`
                }, "Contact ", 8, Bu)
              ])
            ], 2),
            J("div", Tu, [
              ye(n) ? (Ve(), ft(Cu, {
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
                selection: Z(({ item: r }) => [
                  Be(Re(r.title || r.value), 1)
                ]),
                item: Z(({ item: r, props: c }) => [
                  u(Ne, Q(c, {
                    title: r.value,
                    subtitle: r.title || void 0
                  }), null, 16, ["title", "subtitle"])
                ]),
                _: 1
              }, 8, ["class", "model-value", "items", "loading"])) : ut("", !0)
            ])
          ]),
          _: 1
        }),
        u(er, {
          class: "header-overlay",
          scrim: !1,
          "model-value": e.dialog,
          "onUpdate:modelValue": s[0] || (s[0] = (r) => o.$emit("changeDialog", r)),
          fullscreen: ""
        }, {
          activator: Z(({ props: r }) => [
            ye(n) ? ut("", !0) : (Ve(), ft(Vs, Q({ key: 0 }, r, {
              flat: "",
              ripple: !1,
              class: "dialog-button"
            }), {
              default: Z(() => [
                u(ae, {
                  color: "#000",
                  size: "24"
                }, {
                  default: Z(() => [
                    Be(Re(e.dialog ? "mdi-close" : "mdi-menu"), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1040))
          ]),
          default: Z(({ isActive: r }) => [
            Kt(o.$slots, "default", {
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
}, vc = /* @__PURE__ */ vn(Lu, [["__scopeId", "data-v-09b4e981"]]), Ou = E({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Qe(),
  ...Y(),
  ...Ze(),
  ...wa(),
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
    } = Te(M(e, "color")), {
      borderClasses: o
    } = Je(e), {
      elevationClasses: s
    } = et(e), {
      roundedClasses: r
    } = Ae(e), c = W(32), {
      resizeRef: m
    } = gt((y) => {
      y.length && (c.value = y[0].target.clientHeight);
    }), g = h(() => e.height === "auto" ? c.value : parseInt(e.height, 10)), {
      layoutItemStyles: v,
      layoutIsReady: d
    } = _a({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: h(() => "bottom"),
      layoutSize: g,
      elementSize: h(() => e.height === "auto" ? void 0 : g.value),
      active: h(() => e.app),
      absolute: M(e, "absolute")
    });
    return U(() => u(e.tag, {
      ref: m,
      class: ["v-footer", l.value, a.value, o.value, s.value, r.value, e.class],
      style: [i.value, e.app ? v.value : {
        height: G(e.height)
      }, e.style]
    }, t)), e.app ? d : {};
  }
}), Fu = (e) => (Nn("data-v-cd195cbd"), e = e(), Dn(), e), Ru = {
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
}, qu = /* @__PURE__ */ Fu(() => /* @__PURE__ */ J("div", {
  class: "footer__pre-commons mb-4 pa-4",
  cols: "auto"
}, [
  /* @__PURE__ */ J("a", {
    rel: "license",
    href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
    target: "_blank"
  }, [
    /* @__PURE__ */ J("img", {
      alt: "Creative Commons License",
      style: { "border-width": "0" },
      src: "https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg"
    })
  ]),
  /* @__PURE__ */ J("br"),
  /* @__PURE__ */ J("p", { style: { "font-size": "12px", "max-width": "280px" } }, [
    /* @__PURE__ */ Be(" This work is licensed under a "),
    /* @__PURE__ */ J("a", {
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
    const n = ka(), { smAndDown: t } = Ot(), l = j(!1);
    return Ke(() => {
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
    }), (a, i) => (Ve(), ft($u, {
      id: "footer",
      color: "white",
      width: "100vw",
      class: "footer pa-0"
    }, {
      default: Z(() => [
        l.value ? (Ve(), ct("div", {
          key: 0,
          class: "goup",
          onClick: i[0] || (i[0] = (o) => ye(n)(0, {
            duration: 300,
            offset: 0,
            easing: "easeInOutCubic"
          }))
        }, [
          u(ae, {
            size: "18",
            color: "#FFB71A",
            icon: "mdi-arrow-up"
          })
        ])) : ut("", !0),
        u(ni, {
          fluid: "",
          style: { height: "100%" }
        }, {
          default: Z(() => [
            J("div", Ru, [
              J("div", Mu, [
                J("div", Nu, [
                  J("a", {
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
                    J("p", null, Re(e.webLink), 1)
                  ], 8, Du),
                  J("a", {
                    class: "footer__link mb-2 link-icon",
                    href: `mailto:${e.email}`
                  }, [
                    u(ae, {
                      size: "16",
                      color: "#0e1436",
                      class: "mr-2",
                      icon: "mdi-email"
                    }),
                    J("p", null, Re(e.email), 1)
                  ], 8, zu),
                  J("a", {
                    href: e.locationLink,
                    class: "footer__link footer__link--location mb-2 link-icon"
                  }, [
                    u(ae, {
                      size: "16",
                      color: "#0e1436",
                      class: "mr-2",
                      icon: "mdi-map-marker"
                    }),
                    J("p", null, Re(e.location), 1)
                  ], 8, Hu),
                  J("div", ju, [
                    u(an, null, {
                      default: Z(() => [
                        u(vt, null, {
                          default: Z(() => [
                            e.linkedinLink ? (Ve(), ct("a", {
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
                            ], 8, Wu)) : ut("", !0),
                            e.twitterLink ? (Ve(), ct("a", {
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
                            ], 8, Gu)) : ut("", !0),
                            e.facebookLink ? (Ve(), ct("a", Uu, [
                              u(ae, {
                                size: "24",
                                color: "#0e1436",
                                class: "mr-2",
                                icon: "mdi-facebook"
                              })
                            ])) : ut("", !0)
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
              Kt(a.$slots, "supported", {}, void 0, !0)
            ]),
            u(an, {
              class: "footer__main-footer",
              align: "center",
              justify: ye(t) ? "center" : "space-between",
              "no-gutters": ""
            }, {
              default: Z(() => [
                u(vt, {
                  class: pt({ "footer-privacy": ye(t) }),
                  cols: "auto"
                }, {
                  default: Z(() => [
                    J("a", {
                      href: `https://${e.env}ccaf.io/privacy_policy`
                    }, " Privacy Policy ", 8, Ku)
                  ]),
                  _: 1
                }, 8, ["class"]),
                u(vt, { cols: "auto" }, {
                  default: Z(() => [
                    J("span", null, "Cambridge Centre for Alternative Finance © " + Re(" " + (/* @__PURE__ */ new Date()).getFullYear()), 1)
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
}), mc = /* @__PURE__ */ vn(Yu, [["__scopeId", "data-v-cd195cbd"]]), Xu = N()({
  name: "VCardActions",
  props: Y(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return st({
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
}), Qu = E({
  opacity: [Number, String],
  ...Y(),
  ...ie()
}, "VCardSubtitle"), Ju = N()({
  name: "VCardSubtitle",
  props: Qu(),
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
}), Zu = Un("v-card-title"), ec = E({
  appendAvatar: String,
  appendIcon: le,
  prependAvatar: String,
  prependIcon: le,
  subtitle: [String, Number],
  title: [String, Number],
  ...Y(),
  ...$e()
}, "VCardItem"), tc = N()({
  name: "VCardItem",
  props: ec(),
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
      }, t.prepend) : u(se, null, [e.prependAvatar && u(it, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && u(ae, {
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
      }, t.append) : u(se, null, [e.appendIcon && u(ae, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && u(it, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), nc = E({
  opacity: [Number, String],
  ...Y(),
  ...ie()
}, "VCardText"), lc = N()({
  name: "VCardText",
  props: nc(),
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
}), ac = E({
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
  ...za(),
  ...Ie(),
  ...dn(),
  ...ie(),
  ...de(),
  ...tt({
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
    } = Je(e), {
      colorClasses: o,
      colorStyles: s,
      variantClasses: r
    } = Rt(e), {
      densityClasses: c
    } = We(e), {
      dimensionStyles: m
    } = Xe(e), {
      elevationClasses: g
    } = et(e), {
      loaderClasses: v
    } = al(e), {
      locationStyles: d
    } = nl(e), {
      positionClasses: y
    } = Ha(e), {
      roundedClasses: f
    } = Ae(e), b = cn(e, t), S = h(() => e.link !== !1 && b.isLink.value), p = h(() => !e.disabled && e.link !== !1 && (e.link || b.isClickable.value));
    return U(() => {
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
          }, l.image) : u(Jn, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(Da, {
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
      }), [[ot("ripple"), p.value && e.ripple]]);
    }), {};
  }
}), oc = { class: "chips" }, sc = /* @__PURE__ */ Tt({
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
    return (l, a) => (Ve(), ft(ic, null, {
      default: Z(() => [
        Kt(l.$slots, "switcher", {}, void 0, !0),
        Kt(l.$slots, "default", {}, void 0, !0),
        u(Ne, {
          href: `https://${n.env === "demo" || n.env === "develop" ? "demo." : ""}ccaf.io/`
        }, {
          default: Z(() => [
            u(_t, { class: "list__title" }, {
              default: Z(() => [
                Be(" CCAF Home ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["href"]),
        u(qt),
        u(Ne, {
          href: `https://${n.env === "demo" || n.env === "develop" ? "demo." : ""}ccaf.io/about_ccaf`
        }, {
          default: Z(() => [
            u(_t, { class: "list__title" }, {
              default: Z(() => [
                Be(" CCAF About ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["href"]),
        u(qt),
        u(Ne, {
          href: `https://${n.env === "demo" || n.env === "develop" ? "demo." : ""}ccaf.io/contact?topic=cbeci`
        }, {
          default: Z(() => [
            u(_t, { class: "list__title" }, {
              default: Z(() => [
                Be(" CCAF Contact ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["href"]),
        u(qt),
        u(Ne, null, {
          default: Z(() => [
            u(_t, { class: "list__title" }, {
              default: Z(() => [
                Be(" CCAF Digital Tools: ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        J("div", oc, [
          (Ve(!0), ct(se, null, Zi(t.value, (i, o) => (Ve(), ft($n, {
            class: pt(["chips__item", { "chips__item-active": !o }]),
            key: i.id,
            href: o ? `https://${n.env === "demo" || n.env === "develop" ? "demo." : ""}ccaf.io/${i.link}` : void 0
          }, {
            default: Z(() => [
              Be(Re(i.tag || i.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href"]))), 128)),
          u($n, { class: "chips__item" }, {
            default: Z(() => [
              Be(" Atlas ")
            ]),
            _: 1
          })
        ])
      ]),
      _: 3
    }));
  }
}), gc = /* @__PURE__ */ vn(sc, [["__scopeId", "data-v-3cd5e177"]]), Di = (e) => (Nn("data-v-d9109ea5"), e = e(), Dn(), e), rc = { class: "app-loader__title" }, uc = /* @__PURE__ */ Di(() => /* @__PURE__ */ J("div", { class: "lds-ring" }, [
  /* @__PURE__ */ J("div"),
  /* @__PURE__ */ J("div"),
  /* @__PURE__ */ J("div"),
  /* @__PURE__ */ J("div")
], -1)), cc = /* @__PURE__ */ Di(() => /* @__PURE__ */ J("p", { class: "app-loader__state" }, "LOADING", -1)), dc = /* @__PURE__ */ Tt({
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
    return (n, t) => {
      const l = eo("client-only");
      return Ve(), ct("div", {
        class: pt(["app-loader", { "app-loader--visible": e.visible }])
      }, [
        u(ni, null, {
          default: Z(() => [
            u(an, {
              align: "center",
              justify: "center",
              class: "flex-column"
            }, {
              default: Z(() => [
                u(vt, { cols: "12" }, {
                  default: Z(() => [
                    u(l, null, {
                      default: Z(() => [
                        J("h1", rc, Re(e.title), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                u(vt, {
                  cols: "12",
                  class: "d-flex justify-center"
                }, {
                  default: Z(() => [
                    uc
                  ]),
                  _: 1
                }),
                u(vt, { cols: "12" }, {
                  default: Z(() => [
                    cc
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 2);
    };
  }
}), yc = /* @__PURE__ */ vn(dc, [["__scopeId", "data-v-d9109ea5"]]);
export {
  mc as LayoutFooter,
  vc as LayoutHeader,
  yc as Loader,
  gc as MobileMenu
};
