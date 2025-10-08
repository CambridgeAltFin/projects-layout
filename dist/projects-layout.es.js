import { ref as j, onMounted as je, onUnmounted as Wi, computed as y, Fragment as se, reactive as ln, watchEffect as ze, toRefs as la, capitalize as Et, isVNode as Gi, Comment as Ui, shallowRef as W, unref as he, warn as an, getCurrentInstance as qi, provide as pe, inject as me, defineComponent as Bt, camelize as aa, h as yt, createVNode as u, TransitionGroup as $n, Transition as at, mergeProps as J, isRef as mt, toRef as M, watch as q, onBeforeMount as ia, nextTick as ye, onBeforeUnmount as Ee, withDirectives as we, resolveDirective as ot, vShow as ht, onScopeDispose as be, effectScope as Fn, toRaw as xe, readonly as Rn, onDeactivated as Ki, onActivated as Yi, onUpdated as Xi, Text as Qi, resolveDynamicComponent as Ji, Teleport as Zi, cloneVNode as eo, createTextVNode as $e, openBlock as Ve, createBlock as ft, withCtx as ee, createElementVNode as X, toDisplayString as Re, normalizeClass as on, createCommentVNode as ut, renderSlot as Ut, pushScopeId as Mn, popScopeId as Nn, createElementBlock as ct, renderList as to } from "vue";
function oa() {
  const e = j(0), n = () => {
    e.value = window.innerWidth;
  };
  je(() => {
    e.value = window.innerWidth, window.addEventListener("resize", n);
  }), Wi(() => {
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
const Y = E({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), ve = typeof window < "u", Dn = ve && "IntersectionObserver" in window;
function sa(e, n, t) {
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
function no(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), sa(e, n.split("."), t));
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
    return no(e, n, t);
  if (Array.isArray(n))
    return sa(e, n, t);
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
function ra(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const ml = Object.freeze({
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
function ua(e, n) {
  const t = {}, l = new Set(Object.keys(e));
  for (const a of n)
    l.has(a) && (t[a] = e[a]);
  return t;
}
function gl(e, n, t) {
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
function lo(e, n) {
  const t = {};
  return n.forEach((l) => t[l] = e[l]), t;
}
const ca = /^on[^a-z]/, zn = (e) => ca.test(e), ao = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function da(e) {
  const [n, t] = gl(e, [ca]), l = St(n, ao), [a, i] = gl(t, ["class", "style", "id", /^data-/]);
  return Object.assign(a, n), Object.assign(i, l), [a, i];
}
function Pe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function io(e, n) {
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
function De(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function yl(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function oo(e) {
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
    if (xn(i) && xn(o)) {
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
function fa(e) {
  return e.map((n) => n.type === se ? fa(n.children) : n).flat();
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
function Hn(e) {
  const n = ln({}), t = y(e);
  return ze(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, {
    flush: "sync"
  }), la(n);
}
function qt(e, n) {
  return e.includes(n);
}
function va(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const ke = () => [Function, Array];
function hl(e, n) {
  return n = "on" + Et(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function so(e) {
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
function ma(e, n, t) {
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
    const s = ma(t, n);
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
function ga(e) {
  return e.some((n) => Gi(n) ? n.type === Ui ? !1 : n.type !== se || ga(n.children) : !0) ? e : null;
}
function ro(e, n) {
  if (!ve || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function uo(e, n) {
  const t = e.clientX, l = e.clientY, a = n.getBoundingClientRect(), i = a.left, o = a.top, s = a.right, r = a.bottom;
  return t >= i && t <= s && l >= o && l <= r;
}
function pn() {
  const e = W(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => ra(e.value)
  }), n;
}
const ya = ["top", "bottom"], co = ["start", "end", "left", "right"];
function _n(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = qt(ya, t) ? "start" : qt(co, t) ? "top" : "center"), {
    side: bl(t, n),
    align: bl(l, n)
  };
}
function bl(e, n) {
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
function Sl(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Cl(e) {
  return qt(ya, e.side) ? "y" : "x";
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
function kl(e, n) {
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
function ha(e) {
  return Array.isArray(e) ? new lt({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function jn(e) {
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
const Ht = /* @__PURE__ */ new WeakMap();
function fo(e, n) {
  Object.keys(n).forEach((t) => {
    if (zn(t)) {
      const l = va(t), a = Ht.get(e);
      if (n[t] == null)
        a == null || a.forEach((i) => {
          const [o, s] = i;
          o === l && (e.removeEventListener(l, s), a.delete(i));
        });
      else if (!a || ![...a].some((i) => i[0] === l && i[1] === n[t])) {
        e.addEventListener(l, n[t]);
        const i = a || /* @__PURE__ */ new Set();
        i.add([l, n[t]]), Ht.has(e) || Ht.set(e, i);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function vo(e, n) {
  Object.keys(n).forEach((t) => {
    if (zn(t)) {
      const l = va(t), a = Ht.get(e);
      a == null || a.forEach((i) => {
        const [o, s] = i;
        o === l && (e.removeEventListener(l, s), a.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const rt = 2.4, wl = 0.2126729, xl = 0.7151522, pl = 0.072175, mo = 0.55, go = 0.58, yo = 0.57, ho = 0.62, Nt = 0.03, _l = 1.45, bo = 5e-4, So = 1.25, Co = 1.25, Vl = 0.078, Il = 12.82051282051282, Dt = 0.06, Al = 1e-3;
function Pl(e, n) {
  const t = (e.r / 255) ** rt, l = (e.g / 255) ** rt, a = (e.b / 255) ** rt, i = (n.r / 255) ** rt, o = (n.g / 255) ** rt, s = (n.b / 255) ** rt;
  let r = t * wl + l * xl + a * pl, c = i * wl + o * xl + s * pl;
  if (r <= Nt && (r += (Nt - r) ** _l), c <= Nt && (c += (Nt - c) ** _l), Math.abs(c - r) < bo)
    return 0;
  let m;
  if (c > r) {
    const g = (c ** mo - r ** go) * So;
    m = g < Al ? 0 : g < Vl ? g - g * Il * Dt : g - Dt;
  } else {
    const g = (c ** ho - r ** yo) * Co;
    m = g > -Al ? 0 : g > -Vl ? g - g * Il * Dt : g + Dt;
  }
  return m * 100;
}
function qe(e) {
  an(`Vuetify: ${e}`);
}
function ko(e) {
  an(`Vuetify error: ${e}`);
}
function wo(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, an(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
function Vn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function xo(e) {
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
  hsl: (e, n, t, l) => Bl({
    h: e,
    s: n,
    l: t,
    a: l
  }),
  hsla: (e, n, t, l) => Bl({
    h: e,
    s: n,
    l: t,
    a: l
  }),
  hsv: (e, n, t, l) => _t({
    h: e,
    s: n,
    v: t,
    a: l
  }),
  hsva: (e, n, t, l) => _t({
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
    return (isNaN(t) || t < 0 || t > 4294967295) && qe(`'${e}' is not a valid hex(a) color`), _o(n);
  } else if (typeof e == "object") {
    if (vn(e, ["r", "g", "b"]))
      return e;
    if (vn(e, ["h", "s", "l"]))
      return _t(ba(e));
    if (vn(e, ["h", "s", "v"]))
      return _t(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function _t(e) {
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
function Bl(e) {
  return _t(ba(e));
}
function ba(e) {
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
function _o(e) {
  e = Vo(e);
  let [n, t, l, a] = oo(e, 2).map((i) => parseInt(i, 16));
  return a = a === void 0 ? a : a / 255, {
    r: n,
    g: t,
    b: l,
    a
  };
}
function Vo(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = yl(yl(e, 6), 8, "F")), e;
}
function Io(e) {
  const n = Math.abs(Pl(wt(0), wt(e)));
  return Math.abs(Pl(wt(16777215), wt(e))) > Math.min(n, 50) ? "#fff" : "#000";
}
function ce(e, n) {
  const t = qi();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function Te() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = ce(e).type;
  return nt((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let Sa = 0, jt = /* @__PURE__ */ new WeakMap();
function Le() {
  const e = ce("getUid");
  if (jt.has(e))
    return jt.get(e);
  {
    const n = Sa++;
    return jt.set(e, n), n;
  }
}
Le.reset = () => {
  Sa = 0, jt = /* @__PURE__ */ new WeakMap();
};
function Ao(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const Xt = Symbol.for("vuetify:defaults");
function Wn() {
  const e = me(Xt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function st(e, n) {
  const t = Wn(), l = j(e), a = y(() => {
    if (he(n == null ? void 0 : n.disabled))
      return t.value;
    const o = he(n == null ? void 0 : n.scoped), s = he(n == null ? void 0 : n.reset), r = he(n == null ? void 0 : n.root);
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
  return pe(Xt, a), a;
}
function Po(e, n) {
  var t, l;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((l = e.props) == null ? void 0 : l[nt(n)]) < "u";
}
function Eo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wn();
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
      return c === "class" || c === "style" ? [(g = a.value) == null ? void 0 : g[c], m].filter((p) => p != null) : typeof c == "string" && !Po(l.vnode, c) ? ((v = a.value) == null ? void 0 : v[c]) !== void 0 ? (d = a.value) == null ? void 0 : d[c] : ((f = (h = t.value) == null ? void 0 : h.global) == null ? void 0 : f[c]) !== void 0 ? (S = (b = t.value) == null ? void 0 : b.global) == null ? void 0 : S[c] : m : m;
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
    const r = Ao(Xt, l);
    pe(Xt, y(() => o.value ? Me((r == null ? void 0 : r.value) ?? {}, o.value) : r == null ? void 0 : r.value));
  }
  return {
    props: i,
    provideSubDefaults: s
  };
}
function Tt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return qe("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = E(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(l) {
      return ua(l, n);
    }, e.props._as = String, e.setup = function(l, a) {
      const i = Wn();
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
  return (n) => (e ? Tt : Bt)(n);
}
function Gn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return N()({
    name: t ?? Et(aa(e.replace(/__/g, "-"))),
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
function Ca(e) {
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
const Qt = "cubic-bezier(0.4, 0, 0.2, 1)", Bo = "cubic-bezier(0.0, 0, 0.2, 1)", To = "cubic-bezier(0.4, 0, 1, 1)";
function ka(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? Lo(e) : Un(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Jt(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (Un(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function Un(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Lo(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function Oo(e) {
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
const ie = E({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), $o = E({
  text: String,
  ...Y(),
  ...ie()
}, "VToolbarTitle"), Fo = N()({
  name: "VToolbarTitle",
  props: $o(),
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
}), Ro = E({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function _e(e, n, t) {
  return N()({
    name: e,
    props: Ro({
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
        const s = l.group ? $n : at;
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
      const o = l.group ? $n : at;
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
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", l = aa(`offset-${t}`);
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
const Mo = E({
  target: [Object, Array]
}, "v-dialog-transition"), qn = N()({
  name: "VDialogTransition",
  props: Mo(),
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
        } = Ll(e.target, a), g = dt(a, [{
          transform: `translate(${o}px, ${s}px) scale(${r}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * m,
          easing: Bo
        });
        (v = Tl(a)) == null || v.forEach((d) => {
          dt(d, [{
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
        dt(a, [{}, {
          transform: `translate(${o}px, ${s}px) scale(${r}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * m,
          easing: To
        }).finished.then(() => i()), (v = Tl(a)) == null || v.forEach((d) => {
          dt(d, [{}, {
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
    return () => e.target ? u(at, J({
      name: "dialog-transition"
    }, l, {
      css: !1
    }), t) : u(at, {
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
  const t = ha(e), l = jn(n), [a, i] = getComputedStyle(n).transformOrigin.split(" ").map((S) => parseFloat(S)), [o, s] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
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
_e("fab-transition", "center center", "out-in");
_e("dialog-bottom-transition");
_e("dialog-top-transition");
const Ol = _e("fade-transition");
_e("scale-transition");
_e("scroll-x-transition");
_e("scroll-x-reverse-transition");
_e("scroll-y-transition");
_e("scroll-y-reverse-transition");
_e("slide-x-transition");
_e("slide-x-reverse-transition");
const pa = _e("slide-y-transition");
_e("slide-y-reverse-transition");
const _a = wa("expand-transition", xa()), Va = wa("expand-x-transition", xa("", !0)), No = E({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), re = N(!1)({
  name: "VDefaultsProvider",
  props: No(),
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
    } = la(e);
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
    dimensionStyles: y(() => {
      const t = {}, l = G(e.height), a = G(e.maxHeight), i = G(e.maxWidth), o = G(e.minHeight), s = G(e.minWidth), r = G(e.width);
      return l != null && (t.height = l), a != null && (t.maxHeight = a), i != null && (t.maxWidth = i), o != null && (t.minHeight = o), s != null && (t.minWidth = s), r != null && (t.width = r), t;
    })
  };
}
function Do(e) {
  return {
    aspectStyles: y(() => {
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
  ...Y(),
  ...Ye()
}, "VResponsive"), $l = N()({
  name: "VResponsive",
  props: Ia(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: l
    } = Do(e), {
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
function Kn(e) {
  return Hn(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Vn(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && xo(e.value.background)) {
          const l = wt(e.value.background);
          if (l.a == null || l.a === 1) {
            const a = Io(l);
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
function He(e, n) {
  const t = y(() => ({
    text: mt(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = Kn(t);
  return {
    textColorClasses: l,
    textColorStyles: a
  };
}
function Be(e, n) {
  const t = y(() => ({
    background: mt(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = Kn(t);
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
    roundedClasses: y(() => {
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
const Lt = E({
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
    component: s = i ? $n : at,
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
function zo(e, n) {
  if (!Dn)
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
  mounted: zo,
  unmounted: Aa
}, Ho = E({
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
  ...Y(),
  ...Ie(),
  ...Lt()
}, "VImg"), Yn = N()({
  name: "VImg",
  directives: {
    intersect: Pa
  },
  props: Ho(),
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
    } = Ae(e), s = ce("VImg"), r = W(""), c = j(), m = W(e.eager ? "loading" : "idle"), g = W(), v = W(), d = y(() => e.src && typeof e.src == "object" ? {
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
    q(() => e.src, () => {
      f(m.value !== "idle");
    }), q(h, (x, A) => {
      !x && A && c.value && _(c.value);
    }), ia(() => f());
    function f(x) {
      if (!(e.eager && x) && !(Dn && !x && !e.eager)) {
        if (m.value = "loading", d.value.lazySrc) {
          const A = new Image();
          A.src = d.value.lazySrc, _(A, null);
        }
        d.value.src && ye(() => {
          var A;
          t("loadstart", ((A = c.value) == null ? void 0 : A.currentSrc) || d.value.src), setTimeout(() => {
            var T;
            if (!s.isUnmounted)
              if ((T = c.value) != null && T.complete) {
                if (c.value.naturalWidth || S(), m.value === "error")
                  return;
                h.value || _(c.value, null), m.value === "loading" && b();
              } else
                h.value || _(c.value), p();
          });
        });
      }
    }
    function b() {
      var x;
      s.isUnmounted || (p(), _(c.value), m.value = "loaded", t("load", ((x = c.value) == null ? void 0 : x.currentSrc) || d.value.src));
    }
    function S() {
      var x;
      s.isUnmounted || (m.value = "error", t("error", ((x = c.value) == null ? void 0 : x.currentSrc) || d.value.src));
    }
    function p() {
      const x = c.value;
      x && (r.value = x.currentSrc || x.src);
    }
    let w = -1;
    Ee(() => {
      clearTimeout(w);
    });
    function _(x) {
      let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const T = () => {
        if (clearTimeout(w), s.isUnmounted)
          return;
        const {
          naturalHeight: D,
          naturalWidth: Q
        } = x;
        D || Q ? (g.value = Q, v.value = D) : !x.complete && m.value === "loading" && A != null ? w = window.setTimeout(T, A) : (x.currentSrc.endsWith(".svg") || x.currentSrc.startsWith("data:image/svg+xml")) && (g.value = 1, v.value = 1);
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
        default: () => [we(A ? u("picture", {
          class: "v-img__picture"
        }, [A, x]) : x, [[ht, m.value === "loaded"]])]
      });
    }, C = () => u(Ue, {
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
    }), $ = () => l.placeholder ? u(Ue, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(m.value === "loading" || m.value === "error" && !l.error) && u("div", {
        class: "v-img__placeholder"
      }, [l.placeholder()])]
    }) : null, H = () => l.error ? u(Ue, {
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
      const x = q(h, (A) => {
        A && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            O.value = !0;
          });
        }), x());
      });
    }
    return U(() => {
      const x = $l.filterProps(e);
      return we(u($l, J({
        class: ["v-img", {
          "v-img--booting": !O.value
        }, a.value, o.value, e.class],
        style: [{
          width: G(e.width === "auto" ? g.value : e.width)
        }, i.value, e.style]
      }, x, {
        aspectRatio: h.value,
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
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    borderClasses: y(() => {
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
    elevationClasses: y(() => {
      const t = mt(e) ? e.value : e.elevation, l = [];
      return t == null || l.push(`elevation-${t}`), l;
    })
  };
}
function Ke(e, n) {
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
function ue(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (g) => g, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (g) => g;
  const i = ce("useProxiedModel"), o = j(e[n] !== void 0 ? e[n] : t), s = nt(n), c = s !== n ? y(() => {
    var g, v, d, h;
    return e[n], !!(((g = i.vnode.props) != null && g.hasOwnProperty(n) || (v = i.vnode.props) != null && v.hasOwnProperty(s)) && ((d = i.vnode.props) != null && d.hasOwnProperty(`onUpdate:${n}`) || (h = i.vnode.props) != null && h.hasOwnProperty(`onUpdate:${s}`)));
  }) : y(() => {
    var g, v;
    return e[n], !!((g = i.vnode.props) != null && g.hasOwnProperty(n) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${n}`)));
  });
  Ke(() => !c.value, () => {
    q(() => e[n], (g) => {
      o.value = g;
    });
  });
  const m = y({
    get() {
      const g = e[n];
      return l(c.value ? g : o.value);
    },
    set(g) {
      const v = a(g), d = xe(c.value ? e[n] : o.value);
      d === v || l(d) === g || (o.value = v, i == null || i.emit(`update:${n}`, v));
    }
  });
  return Object.defineProperty(m, "externalValue", {
    get: () => c.value ? e[n] : o.value
  }), m;
}
const Ea = Symbol.for("vuetify:locale");
function Xn() {
  const e = me(Ea);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function We() {
  const e = me(Ea);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Fl = Symbol.for("vuetify:theme"), de = E({
  theme: String
}, "theme");
function ge(e) {
  ce("provideTheme");
  const n = me(Fl, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = y(() => e.theme ?? n.name.value), l = y(() => n.themes.value[t.value]), a = y(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = {
    ...n,
    name: t,
    current: l,
    themeClasses: a
  };
  return pe(Fl, i), i;
}
const jo = [null, "prominent", "default", "comfortable", "compact"], Ba = E({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => jo.includes(e)
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
}, "VToolbar"), Rl = N()({
  name: "VToolbar",
  props: Ba(),
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
    } = Je(e), {
      elevationClasses: o
    } = et(e), {
      roundedClasses: s
    } = Ae(e), {
      themeClasses: r
    } = ge(e), {
      rtlClasses: c
    } = We(), m = W(!!(e.extended || (d = t.extension) != null && d.call(t))), g = y(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = y(() => m.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return st({
      VBtn: {
        variant: "text"
      }
    }), U(() => {
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
        }, t.image) : u(Yn, {
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
            var p, w, _;
            return [u("div", {
              class: "v-toolbar__content",
              style: {
                height: G(g.value)
              }
            }, [t.prepend && u("div", {
              class: "v-toolbar__prepend"
            }, [(p = t.prepend) == null ? void 0 : p.call(t)]), h && u(Fo, {
              key: "title",
              text: e.title
            }, {
              text: t.title
            }), (w = t.default) == null ? void 0 : w.call(t), t.append && u("div", {
              class: "v-toolbar__append"
            }, [(_ = t.append) == null ? void 0 : _.call(t)])])];
          }
        }), u(re, {
          defaults: {
            VTabs: {
              height: G(v.value)
            }
          }
        }, {
          default: () => [u(_a, null, {
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
});
function gt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = pn(), l = j();
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
const Wo = Symbol.for("vuetify:layout"), Go = Symbol.for("vuetify:layout-item"), Ta = E({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function La(e) {
  const n = me(Wo);
  if (!n)
    throw new Error("[Vuetify] Could not find injected layout");
  const t = e.id ?? `layout-item-${Le()}`, l = ce("useLayoutItem");
  pe(Go, {
    id: t
  });
  const a = W(!1);
  Ki(() => a.value = !0), Yi(() => a.value = !1);
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
const Uo = E({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function qo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let l = 0;
  const a = j(null), i = W(0), o = W(0), s = W(0), r = W(!1), c = W(!1), m = y(() => Number(e.scrollThreshold)), g = y(() => De((m.value - i.value) / m.value || 0)), v = () => {
    const d = a.value;
    !d || t && !t.value || (l = i.value, i.value = "window" in d ? d.pageYOffset : d.scrollTop, c.value = i.value < l, s.value = Math.abs(i.value - m.value));
  };
  return q(c, () => {
    o.value = o.value || i.value;
  }), q(r, () => {
    o.value = 0;
  }), je(() => {
    q(() => e.scrollTarget, (d) => {
      var f;
      const h = d ? document.querySelector(d) : window;
      if (!h) {
        qe(`Unable to locate element with identifier ${d}`);
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
function Oa() {
  const e = W(!1);
  return je(() => {
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
const Ko = E({
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
  ...Ba(),
  ...Ta(),
  ...Uo(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), Yo = N()({
  name: "VAppBar",
  props: Ko(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = j(), a = ue(e, "modelValue"), i = y(() => {
      var _;
      const w = new Set(((_ = e.scrollBehavior) == null ? void 0 : _.split(" ")) ?? []);
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
    } = qo(e, {
      canScroll: o
    }), g = y(() => i.value.hide || i.value.fullyHide), v = y(() => e.collapse || i.value.collapse && (i.value.inverted ? m.value > 0 : m.value === 0)), d = y(() => e.flat || i.value.fullyHide && !a.value || i.value.elevate && (i.value.inverted ? s.value > 0 : s.value === 0)), h = y(() => i.value.fadeImage ? i.value.inverted ? 1 - m.value : m.value : void 0), f = y(() => {
      var L, V;
      const w = Number(((L = l.value) == null ? void 0 : L.contentHeight) ?? e.height), _ = Number(((V = l.value) == null ? void 0 : V.extensionHeight) ?? 0);
      return g.value ? s.value < r.value || i.value.fullyHide ? w + _ : w : w + _;
    });
    Ke(y(() => !!e.scrollBehavior), () => {
      ze(() => {
        g.value ? i.value.inverted ? a.value = s.value > r.value : a.value = c.value || s.value < r.value : a.value = !0;
      });
    });
    const {
      ssrBootStyles: b
    } = Oa(), {
      layoutItemStyles: S,
      layoutIsReady: p
    } = La({
      id: e.name,
      order: y(() => parseInt(e.order, 10)),
      position: M(e, "location"),
      layoutSize: f,
      elementSize: W(void 0),
      active: a,
      absolute: M(e, "absolute")
    });
    return U(() => {
      const w = Rl.filterProps(e);
      return u(Rl, J({
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
    }), p;
  }
}), Xo = [null, "default", "comfortable", "compact"], Oe = E({
  density: {
    type: String,
    default: "default",
    validator: (e) => Xo.includes(e)
  }
}, "density");
function Ge(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    densityClasses: y(() => `${n}--density-${e.density}`)
  };
}
const Qo = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ot(e, n) {
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
    validator: (e) => Qo.includes(e)
  }
}, "variant");
function $t(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  const t = y(() => {
    const {
      variant: i
    } = he(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: l,
    colorStyles: a
  } = Kn(y(() => {
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
const $a = E({
  baseColor: String,
  divided: Boolean,
  ...Qe(),
  ...Y(),
  ...Oe(),
  ...Ze(),
  ...Ie(),
  ...ie(),
  ...de(),
  ...tt()
}, "VBtnGroup"), Ml = N()({
  name: "VBtnGroup",
  props: $a(),
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
}, "group"), Fa = E({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Ra(e, n) {
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
  const o = M(e, "value"), s = y(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: a,
    value: o,
    disabled: s
  }, l), Ee(() => {
    i.unregister(a);
  });
  const r = y(() => i.isSelected(a)), c = y(() => i.items.value[0].id === a), m = y(() => i.items.value[i.items.value.length - 1].id === a), g = y(() => r.value && [i.selectedClass.value, e.selectedClass]);
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
function Jn(e, n) {
  let t = !1;
  const l = ln([]), a = ue(e, "modelValue", [], (v) => v == null ? [] : Ma(l, Pe(v)), (v) => {
    const d = Zo(l, v);
    return e.multiple ? d : d[0];
  }), i = ce("useGroup");
  function o(v, d) {
    const h = v, f = Symbol.for(`${n.description}:id`), S = kt(f, i == null ? void 0 : i.vnode).indexOf(d);
    he(h.value) == null && (h.value = S, h.useIndexAsValue = !0), S > -1 ? l.splice(S, 0, h) : l.push(h);
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
  je(() => {
    r();
  }), Ee(() => {
    t = !0;
  }), Xi(() => {
    for (let v = 0; v < l.length; v++)
      l[v].useIndexAsValue && (l[v].value = v);
  });
  function c(v, d) {
    const h = l.find((f) => f.id === v);
    if (!(d && (h != null && h.disabled)))
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
    if (e.multiple && qe('This method is not supported when using "multiple" prop'), a.value.length) {
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
    getItemIndex: (v) => Jo(l, v)
  };
  return pe(n, g), g;
}
function Jo(e, n) {
  const t = Ma(e, [n]);
  return t.length ? e.findIndex((l) => l.id === t[0]) : -1;
}
function Ma(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.find((o) => bt(l, o.value)), i = e[l];
    (a == null ? void 0 : a.value) != null ? t.push(a.id) : i != null && t.push(i.id);
  }), t;
}
function Zo(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.findIndex((i) => i.id === l);
    if (~a) {
      const i = e[a];
      t.push(i.value != null ? i.value : a);
    }
  }), t;
}
const Na = Symbol.for("vuetify:v-btn-toggle"), es = E({
  ...$a(),
  ...Qn()
}, "VBtnToggle");
N()({
  name: "VBtnToggle",
  props: es(),
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
    } = Jn(e, Na);
    return U(() => {
      const r = Ml.filterProps(e);
      return u(Ml, J({
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
const le = [String, Function, Object, Array], ts = Symbol.for("vuetify:icons"), sn = E({
  icon: {
    type: le
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Nl = N()({
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
}), ns = Tt({
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
Tt({
  name: "VLigatureIcon",
  props: sn(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
Tt({
  name: "VClassIcon",
  props: sn(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
});
const ls = (e) => {
  const n = me(ts);
  if (!n)
    throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: y(() => {
      var r;
      const l = he(e);
      if (!l)
        return {
          component: Nl
        };
      let a = l;
      if (typeof a == "string" && (a = a.trim(), a.startsWith("$") && (a = (r = n.aliases) == null ? void 0 : r[a.slice(1)])), a || qe(`Could not find aliased icon "${l}"`), Array.isArray(a))
        return {
          component: ns,
          icon: a
        };
      if (typeof a != "string")
        return {
          component: Nl,
          icon: a
        };
      const i = Object.keys(n.sets).find((c) => typeof a == "string" && a.startsWith(`${c}:`)), o = i ? a.slice(i.length + 1) : a;
      return {
        component: n.sets[i ?? n.defaultSet].component,
        icon: o
      };
    })
  };
}, as = ["x-small", "small", "default", "large", "x-large"], Ft = E({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Rt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return Hn(() => {
    let t, l;
    return qt(as, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = {
      width: G(e.size),
      height: G(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: l
    };
  });
}
const is = E({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: le,
  ...Y(),
  ...Ft(),
  ...ie({
    tag: "i"
  }),
  ...de()
}, "VIcon"), ae = N()({
  name: "VIcon",
  props: is(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const a = j(), {
      themeClasses: i
    } = ge(e), {
      iconData: o
    } = ls(y(() => a.value || e.icon)), {
      sizeClasses: s
    } = Rt(e), {
      textColorClasses: r,
      textColorStyles: c
    } = He(M(e, "color"));
    return U(() => {
      var v, d;
      const m = (v = l.default) == null ? void 0 : v.call(l);
      m && (a.value = (d = fa(m).filter((h) => h.type === Qi && h.children && typeof h.children == "string")[0]) == null ? void 0 : d.children);
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
function Da(e, n) {
  const t = j(), l = W(!1);
  if (Dn) {
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
const os = E({
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
  ...Ft(),
  ...ie({
    tag: "div"
  }),
  ...de()
}, "VProgressCircular"), ss = N()({
  name: "VProgressCircular",
  props: os(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = 20, a = 2 * Math.PI * l, i = j(), {
      themeClasses: o
    } = ge(e), {
      sizeClasses: s,
      sizeStyles: r
    } = Rt(e), {
      textColorClasses: c,
      textColorStyles: m
    } = He(M(e, "color")), {
      textColorClasses: g,
      textColorStyles: v
    } = He(M(e, "bgColor")), {
      intersectionRef: d,
      isIntersecting: h
    } = Da(), {
      resizeRef: f,
      contentRect: b
    } = gt(), S = y(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), p = y(() => Number(e.width)), w = y(() => r.value ? Number(e.size) : b.value ? b.value.width : Math.max(p.value, 32)), _ = y(() => l / (1 - p.value / w.value) * 2), L = y(() => p.value / w.value * _.value), V = y(() => G((100 - S.value) / 100 * a));
    return ze(() => {
      d.value = i.value, f.value = i.value;
    }), U(() => u(e.tag, {
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
        viewBox: `0 0 ${_.value} ${_.value}`
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
}, Zn = E({
  location: String
}, "location");
function el(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: l
  } = We();
  return {
    locationStyles: y(() => {
      if (!e.location)
        return {};
      const {
        side: i,
        align: o
      } = _n(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
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
const rs = E({
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
  ...Zn({
    location: "top"
  }),
  ...Ie(),
  ...ie(),
  ...de()
}, "VProgressLinear"), us = N()({
  name: "VProgressLinear",
  props: rs(),
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
    } = el(e), {
      textColorClasses: r,
      textColorStyles: c
    } = He(e, "color"), {
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
    } = Ae(e), {
      intersectionRef: S,
      isIntersecting: p
    } = Da(), w = y(() => parseFloat(e.max)), _ = y(() => parseFloat(e.height)), L = y(() => De(parseFloat(e.bufferValue) / w.value * 100, 0, 100)), V = y(() => De(parseFloat(l.value) / w.value * 100, 0, 100)), C = y(() => a.value !== e.reverse), $ = y(() => e.indeterminate ? "fade-transition" : "slide-x-transition");
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
        "v-progress-linear--active": e.active && p.value,
        "v-progress-linear--reverse": C.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, b.value, o.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? G(_.value) : 0,
        "--v-progress-linear-height": G(_.value),
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
          [C.value ? "left" : "right"]: G(-_.value),
          borderTop: `${G(_.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${G(_.value / 4)})`,
          width: G(100 - L.value, "%"),
          "--v-progress-linear-stream-to": G(_.value * (C.value ? 1 : -1))
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
          class: ["v-progress-linear__indeterminate", R, h.value],
          style: f.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", h.value],
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
}), tl = E({
  loading: [Boolean, String]
}, "loader");
function nl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    loaderClasses: y(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function za(e, n) {
  var l;
  let {
    slots: t
  } = n;
  return u("div", {
    class: `${e.name}__loader`
  }, [((l = t.default) == null ? void 0 : l.call(t, {
    color: e.color,
    isActive: e.active
  })) || u(us, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const cs = ["static", "relative", "fixed", "absolute", "sticky"], Ha = E({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => cs.includes(e)
    )
  }
}, "position");
function ja(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  return {
    positionClasses: y(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function ds() {
  const e = ce("useRoute");
  return y(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function fs() {
  var e, n;
  return (n = (e = ce("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function rn(e, n) {
  var c, m;
  const t = Ji("RouterLink"), l = y(() => !!(e.href || e.to)), a = y(() => (l == null ? void 0 : l.value) || hl(n, "click") || hl(e, "click"));
  if (typeof t == "string" || !("useLink" in t))
    return {
      isLink: l,
      isClickable: a,
      href: M(e, "href")
    };
  const i = y(() => ({
    ...e,
    to: M(() => e.to || "")
  })), o = t.useLink(i.value), s = y(() => e.to ? o : void 0), r = ds();
  return {
    isLink: l,
    isClickable: a,
    route: (c = s.value) == null ? void 0 : c.route,
    navigate: (m = s.value) == null ? void 0 : m.navigate,
    isActive: y(() => {
      var g, v, d;
      return s.value ? e.exact ? r.value ? ((d = s.value.isExactActive) == null ? void 0 : d.value) && bt(s.value.route.value.query, r.value.query) : ((v = s.value.isExactActive) == null ? void 0 : v.value) ?? !1 : ((g = s.value.isActive) == null ? void 0 : g.value) ?? !1 : !1;
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
function vs(e, n) {
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
function ms(e, n) {
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
const In = Symbol("rippleStop"), gs = 80;
function zl(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function An(e) {
  return e.constructor.name === "TouchEvent";
}
function Wa(e) {
  return e.constructor.name === "KeyboardEvent";
}
const ys = function(e, n) {
  var g;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = 0, a = 0;
  if (!Wa(e)) {
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
    } = ys(e, n, t), g = `${i * 2}px`;
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
function Ga(e) {
  return typeof e > "u" || !!e;
}
function Vt(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[In])) {
    if (e[In] = !0, An(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || Wa(e), t._ripple.class && (n.class = t._ripple.class), An(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        Zt.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, gs);
    } else
      Zt.show(e, t, n);
  }
}
function Hl(e) {
  e[In] = !0;
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
function Ua(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let It = !1;
function qa(e) {
  !It && (e.keyCode === ml.enter || e.keyCode === ml.space) && (It = !0, Vt(e));
}
function Ka(e) {
  It = !1, Ce(e);
}
function Ya(e) {
  It && (It = !1, Ce(e));
}
function Xa(e, n, t) {
  const {
    value: l,
    modifiers: a
  } = n, i = Ga(l);
  if (i || Zt.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, xn(l) && l.class && (e._ripple.class = l.class), i && !t) {
    if (a.stop) {
      e.addEventListener("touchstart", Hl, {
        passive: !0
      }), e.addEventListener("mousedown", Hl);
      return;
    }
    e.addEventListener("touchstart", Vt, {
      passive: !0
    }), e.addEventListener("touchend", Ce, {
      passive: !0
    }), e.addEventListener("touchmove", Ua, {
      passive: !0
    }), e.addEventListener("touchcancel", Ce), e.addEventListener("mousedown", Vt), e.addEventListener("mouseup", Ce), e.addEventListener("mouseleave", Ce), e.addEventListener("keydown", qa), e.addEventListener("keyup", Ka), e.addEventListener("blur", Ya), e.addEventListener("dragstart", Ce, {
      passive: !0
    });
  } else
    !i && t && Qa(e);
}
function Qa(e) {
  e.removeEventListener("mousedown", Vt), e.removeEventListener("touchstart", Vt), e.removeEventListener("touchend", Ce), e.removeEventListener("touchmove", Ua), e.removeEventListener("touchcancel", Ce), e.removeEventListener("mouseup", Ce), e.removeEventListener("mouseleave", Ce), e.removeEventListener("keydown", qa), e.removeEventListener("keyup", Ka), e.removeEventListener("dragstart", Ce), e.removeEventListener("blur", Ya);
}
function hs(e, n) {
  Xa(e, n, !1);
}
function bs(e) {
  delete e._ripple, Qa(e);
}
function Ss(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = Ga(n.oldValue);
  Xa(e, n, t);
}
const Mt = {
  mounted: hs,
  unmounted: bs,
  updated: Ss
}, Cs = E({
  active: {
    type: Boolean,
    default: void 0
  },
  baseColor: String,
  symbol: {
    type: null,
    default: Na
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
  ...Oe(),
  ...Ye(),
  ...Ze(),
  ...Fa(),
  ...tl(),
  ...Zn(),
  ...Ha(),
  ...Ie(),
  ...un(),
  ...Ft(),
  ...ie({
    tag: "button"
  }),
  ...de(),
  ...tt({
    variant: "elevated"
  })
}, "VBtn"), ks = N()({
  name: "VBtn",
  props: Cs(),
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
    } = nl(e), {
      locationStyles: m
    } = el(e), {
      positionClasses: g
    } = ja(e), {
      roundedClasses: v
    } = Ae(e), {
      sizeClasses: d,
      sizeStyles: h
    } = Rt(e), f = Ra(e, e.symbol, !1), b = rn(e, t), S = y(() => {
      var R;
      return e.active !== void 0 ? e.active : b.isLink.value ? (R = b.isActive) == null ? void 0 : R.value : f == null ? void 0 : f.isSelected.value;
    }), p = y(() => {
      var O, x;
      return {
        color: (f == null ? void 0 : f.isSelected.value) && (!b.isLink.value || ((O = b.isActive) == null ? void 0 : O.value)) || !f || ((x = b.isActive) == null ? void 0 : x.value) ? e.color ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: w,
      colorStyles: _,
      variantClasses: L
    } = $t(p), V = y(() => (f == null ? void 0 : f.disabled.value) || e.disabled), C = y(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), $ = y(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function H(R) {
      var O;
      V.value || b.isLink.value && (R.metaKey || R.ctrlKey || R.shiftKey || R.button !== 0 || t.target === "_blank") || ((O = b.navigate) == null || O.call(b, R), f == null || f.toggle());
    }
    return ms(b, f == null ? void 0 : f.select), U(() => {
      const R = b.isLink.value ? "a" : e.tag, O = !!(e.prependIcon || l.prepend), x = !!(e.appendIcon || l.append), A = !!(e.icon && e.icon !== !0);
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
        style: [_.value, s.value, m.value, h.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: V.value || void 0,
        href: b.href.value,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: H,
        value: $.value
      }, {
        default: () => {
          var T;
          return [Ot(!0, "v-btn"), !e.icon && O && u("span", {
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
          }, [((T = l.loader) == null ? void 0 : T.call(l)) ?? u(ss, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[Mt, !V.value && !!e.ripple, "", {
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
function ws(e, n) {
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
const Ja = {
  static: _s,
  // specific viewport position, usually centered
  connected: Is
  // connected to a certain element
}, xs = E({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Ja
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
function ps(e, n) {
  const t = j({}), l = j();
  ve && Ke(() => !!(n.isActive.value && e.locationStrategy), (i) => {
    var o, s;
    q(() => e.locationStrategy, i), be(() => {
      window.removeEventListener("resize", a), l.value = void 0;
    }), window.addEventListener("resize", a, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? l.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation : l.value = (s = Ja[e.locationStrategy](n, e, t)) == null ? void 0 : s.updateLocation;
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
function _s() {
}
function Vs(e, n) {
  n ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const t = jn(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function Is(e, n, t) {
  (Array.isArray(e.target.value) || Oo(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: a,
    preferredOrigin: i
  } = Hn(() => {
    const h = _n(n.location, e.isRtl.value), f = n.origin === "overlap" ? h : n.origin === "auto" ? mn(h) : _n(n.origin, e.isRtl.value);
    return h.side === f.side && h.align === gn(f).align ? {
      preferredAnchor: Sl(h),
      preferredOrigin: Sl(f)
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
  q([e.target, e.contentEl], (h, f) => {
    let [b, S] = h, [p, w] = f;
    p && !Array.isArray(p) && v.unobserve(p), b && !Array.isArray(b) && v.observe(b), w && v.unobserve(w), S && v.observe(S);
  }, {
    immediate: !0
  }), be(() => {
    v.disconnect();
  });
  function d() {
    if (g = !1, requestAnimationFrame(() => g = !0), !e.target.value || !e.contentEl.value)
      return;
    const h = ha(e.target.value), f = Vs(e.contentEl.value, e.isRtl.value), b = Jt(e.contentEl.value), S = 12;
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (f.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), f.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const p = b.reduce((O, x) => {
      const A = x.getBoundingClientRect(), T = new lt({
        x: x === document.documentElement ? 0 : A.x,
        y: x === document.documentElement ? 0 : A.y,
        width: x.clientWidth,
        height: x.clientHeight
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
    function _(O) {
      const x = new lt(f), A = jl(O.anchor, h), T = jl(O.origin, x);
      let {
        x: D,
        y: Q
      } = ws(A, T);
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
      return x.x += D, x.y += Q, x.width = Math.min(x.width, r.value), x.height = Math.min(x.height, c.value), {
        overflows: kl(x, p),
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
        ko("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: O,
        y: x,
        overflows: A
      } = _(w);
      L += O, V += x, f.x += O, f.y += x;
      {
        const T = Cl(w.anchor), D = A.x.before || A.x.after, Q = A.y.before || A.y.after;
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
            } = _(P);
            (B[I].before <= A[I].before && B[I].after <= A[I].after || B[I].before + B[I].after < (A[I].before + A[I].after) / 2) && (w = P, Z = $[I] = !0);
          }
        }), Z)
          continue;
      }
      A.x.before && (L += A.x.before, f.x += A.x.before), A.x.after && (L -= A.x.after, f.x -= A.x.after), A.y.before && (V += A.y.before, f.y += A.y.before), A.y.after && (V -= A.y.after, f.y -= A.y.after);
      {
        const T = kl(f, p);
        C.x = p.width - T.x.before - T.x.after, C.y = p.height - T.y.before - T.y.after, L += T.x.before, f.x += T.x.before, V += T.y.before, f.y += T.y.before;
      }
      break;
    }
    const R = Cl(w.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`,
      transformOrigin: `${w.origin.side} ${w.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: G(bn(V)),
      left: e.isRtl.value ? void 0 : G(bn(L)),
      right: e.isRtl.value ? G(bn(-L)) : void 0,
      minWidth: G(R === "y" ? Math.min(o.value, h.width) : o.value),
      maxWidth: G(Wl(De(C.x, o.value === 1 / 0 ? 0 : o.value, r.value))),
      maxHeight: G(Wl(De(C.y, s.value === 1 / 0 ? 0 : s.value, c.value)))
    }), {
      available: C,
      contentBox: f
    };
  }
  return q(() => [a.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => d()), ye(() => {
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
function Wl(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Pn = !0;
const en = [];
function As(e) {
  !Pn || en.length ? (en.push(e), En()) : (Pn = !1, e(), En());
}
let Gl = -1;
function En() {
  cancelAnimationFrame(Gl), Gl = requestAnimationFrame(() => {
    const e = en.shift();
    e && e(), en.length ? En() : Pn = !0;
  });
}
const Wt = {
  none: null,
  close: Bs,
  block: Ts,
  reposition: Ls
}, Ps = E({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Wt
  }
}, "VOverlay-scroll-strategies");
function Es(e, n) {
  if (!ve)
    return;
  let t;
  ze(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = Fn(), await new Promise((l) => setTimeout(l)), t.active && t.run(() => {
      var l;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (l = Wt[e.scrollStrategy]) == null || l.call(Wt, n, e, t);
    }));
  }), be(() => {
    t == null || t.stop();
  });
}
function Bs(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  Za(e.targetEl.value ?? e.contentEl.value, n);
}
function Ts(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, l = [.../* @__PURE__ */ new Set([...Jt(e.targetEl.value, n.contained ? t : void 0), ...Jt(e.contentEl.value, n.contained ? t : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = ((s) => Un(s) && s)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, r) => {
    s.style.setProperty("--v-body-scroll-x", G(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", G(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", G(a)), s.classList.add("v-overlay-scroll-blocked");
  }), be(() => {
    l.forEach((s, r) => {
      const c = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), m = parseFloat(s.style.getPropertyValue("--v-body-scroll-y")), g = s.style.scrollBehavior;
      s.style.scrollBehavior = "auto", s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -c, s.scrollTop = -m, s.style.scrollBehavior = g;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Ls(e, n, t) {
  let l = !1, a = -1, i = -1;
  function o(s) {
    As(() => {
      var m, g;
      const r = performance.now();
      (g = (m = e.updateLocation).value) == null || g.call(m, s), l = (performance.now() - r) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      Za(e.targetEl.value ?? e.contentEl.value, (s) => {
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
function Za(e, n) {
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
const Bn = Symbol.for("vuetify:v-menu"), Os = E({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function $s(e, n) {
  let t = () => {
  };
  function l(o) {
    t == null || t();
    const s = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((r) => {
      t = ro(s, () => {
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
const Fs = E({
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
  ...Os()
}, "VOverlay-activator");
function Rs(e, n) {
  let {
    isActive: t,
    isTop: l
  } = n;
  const a = ce("useActivator"), i = j();
  let o = !1, s = !1, r = !0;
  const c = y(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), m = y(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: g,
    runCloseDelay: v
  } = $s(e, (C) => {
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
      Yt(C.target, ":focus-visible") !== !1 && (s = !0, C.stopPropagation(), i.value = C.currentTarget || C.target, g());
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
  q(l, (C) => {
    C && (e.openOnHover && !o && (!c.value || !s) || c.value && !s && (!e.openOnHover || !o)) && (t.value = !1);
  }), q(t, (C) => {
    C || setTimeout(() => {
      d.value = void 0;
    });
  }, {
    flush: "post"
  });
  const p = pn();
  ze(() => {
    p.value && ye(() => {
      i.value = p.el;
    });
  });
  const w = pn(), _ = y(() => e.target === "cursor" && d.value ? d.value : w.value ? w.el : ei(e.target, a) || i.value), L = y(() => Array.isArray(_.value) ? void 0 : _.value);
  let V;
  return q(() => !!e.activator, (C) => {
    C && ve ? (V = Fn(), V.run(() => {
      Ms(e, a, {
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
    target: _,
    targetEl: L,
    targetRef: w,
    activatorEvents: f,
    contentEvents: b,
    scrimEvents: S
  };
}
function Ms(e, n, t) {
  let {
    activatorEl: l,
    activatorEvents: a
  } = t;
  q(() => e.activator, (r, c) => {
    if (c && r !== c) {
      const m = s(c);
      m && o(m);
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
    r && fo(r, J(a.value, c));
  }
  function o() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    r && vo(r, J(a.value, c));
  }
  function s() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = ei(r, n);
    return l.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, l.value;
  }
}
function ei(e, n) {
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
const cn = ["sm", "md", "lg", "xl", "xxl"], Ns = Symbol.for("vuetify:display"), Ds = E({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function ll() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te();
  const t = me(Ns);
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
function zs() {
  if (!ve)
    return W(!1);
  const {
    ssr: e
  } = ll();
  if (e) {
    const n = W(!1);
    return je(() => {
      n.value = !0;
    }), n;
  } else
    return W(!0);
}
const Hs = E({
  eager: Boolean
}, "lazy");
function js(e, n) {
  const t = W(!1), l = y(() => t.value || e.eager || n.value);
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
function al() {
  const n = ce("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const Ul = Symbol.for("vuetify:stack"), Ct = ln([]);
function Ws(e, n, t) {
  const l = ce("useStack"), a = !t, i = me(Ul, void 0), o = ln({
    activeChildren: /* @__PURE__ */ new Set()
  });
  pe(Ul, o);
  const s = W(+n.value);
  Ke(e, () => {
    var g;
    const m = (g = Ct.at(-1)) == null ? void 0 : g[1];
    s.value = m ? m + 10 : +n.value, a && Ct.push([l.uid, s.value]), i == null || i.activeChildren.add(l.uid), be(() => {
      if (a) {
        const v = xe(Ct).findIndex((d) => d[0] === l.uid);
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
  const c = y(() => !o.activeChildren.size);
  return {
    globalTop: Rn(r),
    localTop: c,
    stackStyles: y(() => ({
      zIndex: s.value
    }))
  };
}
function Gs(e) {
  return {
    teleportTarget: y(() => {
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
function Us() {
  return !0;
}
function ti(e, n, t) {
  if (!e || ni(e, t) === !1)
    return !1;
  const l = Ca(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const a = (typeof t.value == "object" && t.value.include || (() => []))();
  return a.push(n), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function ni(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Us)(e);
}
function qs(e, n, t) {
  const l = typeof t.value == "function" ? t.value : t.value.handler;
  n._clickOutside.lastMousedownWasOutside && ti(e, n, t) && setTimeout(() => {
    ni(e, t) && l && l(e);
  }, 0);
}
function ql(e, n) {
  const t = Ca(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Ks = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (a) => qs(a, e, n), l = (a) => {
      e._clickOutside.lastMousedownWasOutside = ti(a, e, n);
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
function Ys(e) {
  const {
    modelValue: n,
    color: t,
    ...l
  } = e;
  return u(at, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", J({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, l), null)]
  });
}
const il = E({
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
  ...Fs(),
  ...Y(),
  ...Ye(),
  ...Hs(),
  ...xs(),
  ...Ps(),
  ...de(),
  ...Lt()
}, "VOverlay"), tn = N()({
  name: "VOverlay",
  directives: {
    ClickOutside: Ks
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...il()
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
    } = Gs(y(() => e.attach || e.contained)), {
      themeClasses: r
    } = ge(e), {
      rtlClasses: c,
      isRtl: m
    } = We(), {
      hasContent: g,
      onAfterLeave: v
    } = js(e, o), d = Be(y(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: h,
      localTop: f,
      stackStyles: b
    } = Ws(o, M(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: S,
      activatorRef: p,
      target: w,
      targetEl: _,
      targetRef: L,
      activatorEvents: V,
      contentEvents: C,
      scrimEvents: $
    } = Rs(e, {
      isActive: o,
      isTop: f
    }), {
      dimensionStyles: H
    } = Xe(e), R = zs(), {
      scopeId: O
    } = al();
    q(() => e.disabled, (z) => {
      z && (o.value = !1);
    });
    const x = j(), A = j(), T = j(), {
      contentStyles: D,
      updateLocation: Q
    } = ps(e, {
      isRtl: m,
      contentEl: T,
      target: w,
      isActive: o
    });
    Es(e, {
      root: x,
      contentEl: T,
      targetEl: _,
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
    ve && q(o, (z) => {
      z ? window.addEventListener("keydown", P) : window.removeEventListener("keydown", P);
    }, {
      immediate: !0
    }), Ee(() => {
      ve && window.removeEventListener("keydown", P);
    });
    function P(z) {
      var ne, oe;
      z.key === "Escape" && h.value && (e.persistent ? F() : (o.value = !1, (ne = T.value) != null && ne.contains(document.activeElement) && ((oe = S.value) == null || oe.focus())));
    }
    const k = fs();
    Ke(() => e.closeOnBack, () => {
      vs(k, (z) => {
        h.value && o.value ? (z(!1), e.persistent ? F() : o.value = !1) : z();
      });
    });
    const B = j();
    q(() => o.value && (e.absolute || e.contained) && s.value == null, (z) => {
      if (z) {
        const ne = ka(x.value);
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
        easing: Qt
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
        props: J({
          ref: p
        }, V.value, e.activatorProps)
      }), R.value && g.value && u(Zi, {
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
            top: G(B.value)
          }, e.style],
          ref: x
        }, O, l), [u(Ys, J({
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
            return [we(u("div", J({
              ref: T,
              class: ["v-overlay__content", e.contentClass],
              style: [H.value, D.value]
            }, C.value, e.contentProps), [(ne = t.default) == null ? void 0 : ne.call(t, {
              isActive: o
            })]), [[ht, o.value], [ot("click-outside"), {
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
const Xs = E({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...il({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: qn
    },
    zIndex: 2400
  })
}, "VDialog"), Qs = N()({
  name: "VDialog",
  props: Xs(),
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
    } = al(), o = j();
    function s(m) {
      var d, h;
      const g = m.relatedTarget, v = m.target;
      if (g !== v && ((d = o.value) != null && d.contentEl) && // We're the topmost dialog
      ((h = o.value) != null && h.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(v) && // It isn't inside the dialog body
      !o.value.contentEl.contains(v)) {
        const f = pt(o.value.contentEl);
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
      m || (await ye(), (g = o.value.activatorEl) == null || g.focus({
        preventScroll: !0
      }));
    }), U(() => {
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
}), Js = E({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...Y(),
  ...ie()
}, "VContainer"), li = N()({
  name: "VContainer",
  props: Js(),
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
}), ai = cn.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), ii = cn.reduce((e, n) => {
  const t = "offset" + Et(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), oi = cn.reduce((e, n) => {
  const t = "order" + Et(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Kl = {
  col: Object.keys(ai),
  offset: Object.keys(ii),
  order: Object.keys(oi)
};
function Zs(e, n, t) {
  let l = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return e === "col" && (l = "v-" + l), e === "col" && (t === "" || t === !0) || (l += `-${t}`), l.toLowerCase();
  }
}
const er = ["auto", "start", "end", "center", "baseline", "stretch"], tr = E({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...ai,
  offset: {
    type: [String, Number],
    default: null
  },
  ...ii,
  order: {
    type: [String, Number],
    default: null
  },
  ...oi,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => er.includes(e)
  },
  ...Y(),
  ...ie()
}, "VCol"), vt = N()({
  name: "VCol",
  props: tr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = y(() => {
      const a = [];
      let i;
      for (i in Kl)
        Kl[i].forEach((s) => {
          const r = e[s], c = Zs(i, s, r);
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
}), ol = ["start", "end", "center"], si = ["space-between", "space-around", "space-evenly"];
function sl(e, n) {
  return cn.reduce((t, l) => {
    const a = e + Et(l);
    return t[a] = n(), t;
  }, {});
}
const nr = [...ol, "baseline", "stretch"], ri = (e) => nr.includes(e), ui = sl("align", () => ({
  type: String,
  default: null,
  validator: ri
})), lr = [...ol, ...si], ci = (e) => lr.includes(e), di = sl("justify", () => ({
  type: String,
  default: null,
  validator: ci
})), ar = [...ol, ...si, "stretch"], fi = (e) => ar.includes(e), vi = sl("alignContent", () => ({
  type: String,
  default: null,
  validator: fi
})), Yl = {
  align: Object.keys(ui),
  justify: Object.keys(di),
  alignContent: Object.keys(vi)
}, ir = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function or(e, n, t) {
  let l = ir[e];
  if (t != null) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return l += `-${t}`, l.toLowerCase();
  }
}
const sr = E({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: ri
  },
  ...ui,
  justify: {
    type: String,
    default: null,
    validator: ci
  },
  ...di,
  alignContent: {
    type: String,
    default: null,
    validator: fi
  },
  ...vi,
  ...Y(),
  ...ie()
}, "VRow"), nn = N()({
  name: "VRow",
  props: sr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = y(() => {
      const a = [];
      let i;
      for (i in Yl)
        Yl[i].forEach((o) => {
          const s = e[o], r = or(i, o, s);
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
}), rr = Gn("v-spacer", "div", "VSpacer"), Tn = Symbol.for("vuetify:list");
function mi() {
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
function gi() {
  return me(Tn, null);
}
const rl = (e) => {
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
}, yi = (e) => {
  const n = rl(e);
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
}, ur = (e) => {
  const n = rl(e);
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
}, cr = (e) => {
  const n = yi(e);
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
}, dr = {
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
}, hi = {
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
}, fr = {
  open: hi.open,
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
}, ul = (e) => {
  const n = {
    select: (t) => {
      let {
        id: l,
        value: a,
        selected: i
      } = t;
      if (l = xe(l), e && !a) {
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
}, bi = (e) => {
  const n = ul(e);
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
}, vr = (e) => {
  const n = ul(e);
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
}, mr = (e) => {
  const n = bi(e);
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
}, gr = (e) => {
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
}, At = Symbol.for("vuetify:nested"), Si = {
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
}, yr = E({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), hr = (e) => {
  let n = !1;
  const t = j(/* @__PURE__ */ new Map()), l = j(/* @__PURE__ */ new Map()), a = ue(e, "opened", e.opened, (d) => new Set(d), (d) => [...d.values()]), i = y(() => {
    if (typeof e.activeStrategy == "object")
      return e.activeStrategy;
    if (typeof e.activeStrategy == "function")
      return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return ur(e.mandatory);
      case "single-leaf":
        return cr(e.mandatory);
      case "independent":
        return rl(e.mandatory);
      case "single-independent":
      default:
        return yi(e.mandatory);
    }
  }), o = y(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    if (typeof e.selectStrategy == "function")
      return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return mr(e.mandatory);
      case "leaf":
        return vr(e.mandatory);
      case "independent":
        return ul(e.mandatory);
      case "single-independent":
        return bi(e.mandatory);
      case "classic":
      default:
        return gr(e.mandatory);
    }
  }), s = y(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return fr;
      case "single":
        return dr;
      case "multiple":
      default:
        return hi;
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
    id: W(),
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
  return pe(At, v), v.root;
}, Ci = (e, n) => {
  const t = me(At, Si), l = Symbol(Le()), a = y(() => e.value !== void 0 ? e.value : l), i = {
    ...t,
    id: a,
    open: (o, s) => t.root.open(a.value, o, s),
    openOnSelect: (o, s) => t.root.openOnSelect(a.value, o, s),
    isOpen: y(() => t.root.opened.value.has(a.value)),
    parent: y(() => t.root.parents.value.get(a.value)),
    activate: (o, s) => t.root.activate(a.value, o, s),
    isActivated: y(() => t.root.activated.value.has(xe(a.value))),
    select: (o, s) => t.root.select(a.value, o, s),
    isSelected: y(() => t.root.selected.value.get(xe(a.value)) === "on"),
    isIndeterminate: y(() => t.root.selected.value.get(a.value) === "indeterminate"),
    isLeaf: y(() => !t.root.children.value.get(a.value)),
    isGroupActivator: t.isGroupActivator
  };
  return !t.isGroupActivator && t.root.register(a.value, t.id.value, n), Ee(() => {
    !t.isGroupActivator && t.root.unregister(a.value);
  }), n && pe(At, i), i;
}, br = () => {
  const e = me(At, Si);
  pe(At, {
    ...e,
    isGroupActivator: !0
  });
}, Sr = Tt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return br(), () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), Cr = E({
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
  props: Cr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: l,
      open: a,
      id: i
    } = Ci(M(e, "value"), !0), o = y(() => `v-list-group--id-${String(i.value)}`), s = gi(), {
      isBooted: r
    } = Oa();
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
        default: () => [u(Sr, null, {
          default: () => [t.activator({
            props: m.value,
            isOpen: l.value
          })]
        })]
      }), u(Ue, {
        transition: {
          component: _a
        },
        disabled: !r.value
      }, {
        default: () => {
          var d;
          return [we(u("div", {
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
}), kr = E({
  opacity: [Number, String],
  ...Y(),
  ...ie()
}, "VListItemSubtitle"), wr = N()({
  name: "VListItemSubtitle",
  props: kr(),
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
}), xt = Gn("v-list-item-title"), xr = E({
  start: Boolean,
  end: Boolean,
  icon: le,
  image: String,
  text: String,
  ...Y(),
  ...Oe(),
  ...Ie(),
  ...Ft(),
  ...ie(),
  ...de(),
  ...tt({
    variant: "flat"
  })
}, "VAvatar"), it = N()({
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
    } = $t(e), {
      densityClasses: s
    } = Ge(e), {
      roundedClasses: r
    } = Ae(e), {
      sizeClasses: c,
      sizeStyles: m
    } = Rt(e);
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
      }) : e.image ? u(Yn, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? u(ae, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Ot(!1, "v-avatar")]
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
  ...Oe(),
  ...Ye(),
  ...Ze(),
  ...Ie(),
  ...un(),
  ...ie(),
  ...de(),
  ...tt({
    variant: "text"
  })
}, "VListItem"), Ne = N()({
  name: "VListItem",
  directives: {
    Ripple: Mt
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
    } = Ci(o, !1), b = gi(), S = y(() => {
      var k;
      return e.active !== !1 && (e.active || ((k = i.isActive) == null ? void 0 : k.value) || (d.activatable.value ? r.value : m.value));
    }), p = y(() => e.link !== !1 && i.isLink.value), w = y(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || !!b && (d.selectable.value || d.activatable.value || e.value != null))), _ = y(() => e.rounded || e.nav), L = y(() => e.color ?? e.activeColor), V = y(() => ({
      color: S.value ? L.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    q(() => {
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
    } = Je(e), {
      colorClasses: H,
      colorStyles: R,
      variantClasses: O
    } = $t(V), {
      densityClasses: x
    } = Ge(e), {
      dimensionStyles: A
    } = Xe(e), {
      elevationClasses: T
    } = et(e), {
      roundedClasses: D
    } = Ae(_), Q = y(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), Z = y(() => ({
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
      return b == null || b.updateHasPrepend(ne), e.activeColor && wo("active-color", ["color", "base-color"]), we(u(k, {
        class: ["v-list-item", {
          "v-list-item--active": S.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": w.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !ne && (b == null ? void 0 : b.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && S.value
        }, C.value, $.value, H.value, x.value, T.value, Q.value, D.value, O.value, e.class],
        style: [R.value, A.value, e.style],
        href: i.href.value,
        tabindex: w.value ? b ? -2 : 0 : void 0,
        onClick: I,
        onKeydown: w.value && !p.value && P
      }, {
        default: () => {
          var oe;
          return [Ot(w.value || S.value, "v-list-item"), ne && u("div", {
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
          }, [B && u(xt, {
            key: "title"
          }, {
            default: () => {
              var fe;
              return [((fe = l.title) == null ? void 0 : fe.call(l, {
                title: e.title
              })) ?? e.title];
            }
          }), F && u(wr, {
            key: "subtitle"
          }, {
            default: () => {
              var fe;
              return [((fe = l.subtitle) == null ? void 0 : fe.call(l, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (oe = l.default) == null ? void 0 : oe.call(l, Z.value)]), te && u("div", {
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
              return [(fe = l.append) == null ? void 0 : fe.call(l, Z.value)];
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
}), _r = E({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...Y(),
  ...ie()
}, "VListSubheader"), Vr = N()({
  name: "VListSubheader",
  props: _r(),
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
}), Ir = E({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...Y(),
  ...de()
}, "VDivider"), Gt = N()({
  name: "VDivider",
  props: Ir(),
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
    } = He(M(e, "color")), s = y(() => {
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
}), Ar = E({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), ki = N()({
  name: "VListChildren",
  props: Ar(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return mi(), () => {
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
          })) ?? u(Gt, s, null);
        if (r === "subheader")
          return ((d = t.subheader) == null ? void 0 : d.call(t, {
            props: s
          })) ?? u(Vr, s, null);
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
        }, g = Xl.filterProps(s);
        return o ? u(Xl, J({
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
            }) : u(Ne, b, m);
          },
          default: () => u(ki, {
            items: o,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: s
        }) : u(Ne, J(s, {
          value: e.returnObject ? c : s.value
        }), m);
      }));
    };
  }
}), wi = E({
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
function Ln(e, n) {
  const t = Fe(n, e.itemTitle, n), l = Fe(n, e.itemValue, t), a = Fe(n, e.itemChildren), i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? St(n, ["children"]) : n : void 0 : Fe(n, e.itemProps), o = {
    title: t,
    value: l,
    ...i
  };
  return {
    title: String(o.title ?? ""),
    value: o.value,
    props: o,
    children: Array.isArray(a) ? xi(e, a) : void 0,
    raw: n
  };
}
function xi(e, n) {
  const t = [];
  for (const l of n)
    t.push(Ln(e, l));
  return t;
}
function Pr(e) {
  const n = y(() => xi(e, e.items)), t = y(() => n.value.some((i) => i.value === null));
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
  const t = Fe(n, e.itemType, "item"), l = Er(n) ? n : Fe(n, e.itemTitle), a = Fe(n, e.itemValue, void 0), i = Fe(n, e.itemChildren), o = e.itemProps === !0 ? St(n, ["children"]) : Fe(n, e.itemProps), s = {
    title: l,
    value: a,
    ...o
  };
  return {
    type: t,
    title: s.title,
    value: s.value,
    props: s,
    children: t === "item" && i ? pi(e, i) : void 0,
    raw: n
  };
}
function pi(e, n) {
  const t = [];
  for (const l of n)
    t.push(Br(e, l));
  return t;
}
function Tr(e) {
  return {
    items: y(() => pi(e, e.items))
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
  ...yr({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...Qe(),
  ...Y(),
  ...Oe(),
  ...Ye(),
  ...Ze(),
  itemType: {
    type: String,
    default: "type"
  },
  ...wi(),
  ...Ie(),
  ...ie(),
  ...de(),
  ...tt({
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
    } = Je(e), {
      densityClasses: r
    } = Ge(e), {
      dimensionStyles: c
    } = Xe(e), {
      elevationClasses: m
    } = et(e), {
      roundedClasses: g
    } = Ae(e), {
      children: v,
      open: d,
      parents: h,
      select: f
    } = hr(e), b = y(() => e.lines ? `v-list--${e.lines}-line` : void 0), S = M(e, "activeColor"), p = M(e, "baseColor"), w = M(e, "color");
    mi(), st({
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
    const _ = W(!1), L = j();
    function V(x) {
      _.value = !0;
    }
    function C(x) {
      _.value = !1;
    }
    function $(x) {
      var A;
      !_.value && !(x.relatedTarget && ((A = L.value) != null && A.contains(x.relatedTarget))) && O();
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
      _.value = !0;
    }
    function O(x) {
      if (L.value)
        return Kt(L.value, x);
    }
    return U(() => u(e.tag, {
      ref: L,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, a.value, i.value, s.value, r.value, m.value, b.value, g.value, e.class],
      style: [o.value, c.value, e.style],
      tabindex: e.disabled || _.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: V,
      onFocusout: C,
      onFocus: $,
      onKeydown: H,
      onMousedown: R
    }, {
      default: () => [u(ki, {
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
  ...Y(),
  ...de()
}, "VLabel"), _i = N()({
  name: "VLabel",
  props: $r(),
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
}), Vi = Symbol.for("vuetify:selection-control-group"), Ii = E({
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
  ...Oe(),
  ...de()
}, "SelectionControlGroup"), Fr = E({
  ...Ii({
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
    return pe(Vi, {
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
        multiple: y(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)),
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
const Ai = E({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...Y(),
  ...Ii()
}, "VSelectionControl");
function Rr(e) {
  const n = me(Vi, void 0), {
    densityClasses: t
  } = Ge(e), l = ue(e, "modelValue"), a = y(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = y(() => e.falseValue !== void 0 ? e.falseValue : !1), o = y(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), s = y({
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
  } = He(y(() => {
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
const Ql = N()({
  name: "VSelectionControl",
  directives: {
    Ripple: Mt
  },
  inheritAttrs: !1,
  props: Ai(),
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
    } = Rr(e), d = Le(), h = W(!1), f = W(!1), b = j(), S = y(() => e.id || `input-${d}`), p = y(() => !e.disabled && !e.readonly);
    a == null || a.onForceUpdate(() => {
      b.value && (b.value.checked = s.value);
    });
    function w(C) {
      p.value && (h.value = !0, Yt(C.target, ":focus-visible") !== !1 && (f.value = !0));
    }
    function _() {
      h.value = !1, f.value = !1;
    }
    function L(C) {
      C.stopPropagation();
    }
    function V(C) {
      if (!p.value) {
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
      }) : e.label, [$, H] = da(t), R = u("input", J({
        ref: b,
        checked: s.value,
        disabled: !!e.disabled,
        id: S.value,
        onBlur: _,
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
      }, [((x = l.input) == null ? void 0 : x.call(l, {
        model: s,
        textColorClasses: r,
        textColorStyles: c,
        backgroundColorClasses: m,
        backgroundColorStyles: g,
        inputNode: R,
        icon: o.value,
        props: {
          onFocus: w,
          onBlur: _,
          id: S.value
        }
      })) ?? u(se, null, [o.value && u(ae, {
        key: "icon",
        icon: o.value
      }, null), R])]), [[ot("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), C && u(_i, {
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
    type: le,
    default: "$checkboxIndeterminate"
  },
  ...Ai({
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
    return U(() => {
      const r = St(Ql.filterProps(e), ["modelValue"]);
      return u(Ql, J(r, {
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
function Pi(e) {
  const {
    t: n
  } = Xn();
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
const Dr = E({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...Y(),
  ...Lt({
    transition: {
      component: pa,
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
    } = He(y(() => e.color));
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
}), Ei = E({
  focused: Boolean,
  "onUpdate:focused": ke()
}, "focus");
function Bi(e) {
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
function Ti() {
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
  ...Ei()
}, "validation");
function Wr(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Te(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Le();
  const l = ue(e, "modelValue"), a = y(() => e.validationValue === void 0 ? l.value : e.validationValue), i = Ti(), o = j([]), s = W(!0), r = y(() => !!(Pe(l.value === "" ? null : l.value).length || Pe(a.value === "" ? null : a.value).length)), c = y(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), m = y(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), g = y(() => {
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
  }), h = W(!1), f = y(() => ({
    [`${n}--error`]: d.value === !1,
    [`${n}--dirty`]: r.value,
    [`${n}--disabled`]: c.value,
    [`${n}--readonly`]: m.value
  })), b = ce("validation"), S = y(() => e.name ?? he(t));
  ia(() => {
    i == null || i.register({
      id: S.value,
      vm: b,
      validate: _,
      reset: p,
      resetValidation: w
    });
  }), Ee(() => {
    i == null || i.unregister(S.value);
  }), je(async () => {
    v.value.lazy || await _(!0), i == null || i.update(S.value, d.value, g.value);
  }), Ke(() => v.value.input, () => {
    q(a, () => {
      if (a.value != null)
        _();
      else if (e.focused) {
        const L = q(() => e.focused, (V) => {
          V || _(), L();
        });
      }
    });
  }), Ke(() => v.value.blur, () => {
    q(() => e.focused, (L) => {
      L || _();
    });
  }), q([d, g], () => {
    i == null || i.update(S.value, d.value, g.value);
  });
  async function p() {
    l.value = null, await ye(), await w();
  }
  async function w() {
    s.value = !0, v.value.lazy ? o.value = [] : await _(!0);
  }
  async function _() {
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
    reset: p,
    resetValidation: w,
    validate: _,
    validationClasses: f
  };
}
const Li = E({
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
  ...Oe(),
  ...lo(Ye(), ["maxWidth", "minWidth", "width"]),
  ...de(),
  ...jr()
}, "VInput"), Jl = N()({
  name: "VInput",
  props: {
    ...Li()
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
    } = Pi(e), m = Le(), g = y(() => e.id || `input-${m}`), v = y(() => `${g.value}-messages`), {
      errorMessages: d,
      isDirty: h,
      isDisabled: f,
      isReadonly: b,
      isPristine: S,
      isValid: p,
      isValidating: w,
      reset: _,
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
      isValid: p,
      isValidating: w,
      reset: _,
      resetValidation: L,
      validate: V
    })), H = y(() => {
      var R;
      return (R = e.errorMessages) != null && R.length || !S.value && d.value.length ? d.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return U(() => {
      var T, D, Q, Z;
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
      }, null), (Q = l.append) == null ? void 0 : Q.call(l, $.value)]), A && u("div", {
        class: "v-input__details"
      }, [u(zr, {
        id: v.value,
        active: x,
        messages: H.value
      }, {
        message: l.message
      }), (Z = l.details) == null ? void 0 : Z.call(l, $.value)])]);
    }), {
      reset: _,
      resetValidation: L,
      validate: V,
      isValid: p,
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
  return cl(e) ?? (document.scrollingElement || document.body);
}
function cl(e) {
  return typeof e == "string" ? document.querySelector(e) : ra(e);
}
function kn(e, n, t) {
  if (typeof e == "number")
    return n && t ? -e : e;
  let l = cl(e), a = 0;
  for (; l; )
    a += n ? l.offsetLeft : l.offsetTop, l = l.offsetParent;
  return a;
}
async function Zl(e, n, t, l) {
  const a = t ? "scrollLeft" : "scrollTop", i = Me((l == null ? void 0 : l.options) ?? Ur(), n), o = l == null ? void 0 : l.rtl.value, s = (typeof e == "number" ? e : cl(e)) ?? 0, r = i.container === "parent" && s instanceof HTMLElement ? s.parentElement : qr(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
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
    const S = (f - v) / i.duration, p = Math.floor(g + (m - g) * c(De(S, 0, 1)));
    if (r[a] = p, S >= 1 && Math.abs(p - r[a]) < 10)
      return d(m);
    if (S > 2)
      return qe("Scroll target is not reachable"), d(r[a]);
    requestAnimationFrame(h);
  }));
}
function Kr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = me(Gr), {
    isRtl: t
  } = We();
  if (!n)
    throw new Error("[Vuetify] Could not find injected goto instance");
  const l = {
    ...n,
    // can be set via VLocaleProvider
    rtl: y(() => n.rtl.value || t.value)
  };
  async function a(i, o) {
    return Zl(i, Me(e, o), !1, l);
  }
  return a.horizontal = async (i, o) => Zl(i, Me(e, o), !0, l), a;
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
  const i = Pt(a, t), o = Oi(a, l, t), s = Pt(a, n), r = $i(a, n), c = s * 0.4;
  return o > r ? r - c : o + i < r + s ? r - i + s + c : o;
}
function Qr(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: l
  } = e;
  const a = Pt(l, t), i = $i(l, n), o = Pt(l, n);
  return i - a / 2 + o / 2;
}
function ea(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Jr(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Oi(e, n, t) {
  if (!t)
    return 0;
  const {
    scrollLeft: l,
    offsetWidth: a,
    scrollWidth: i
  } = t;
  return e ? n ? i - a + l : l : t.scrollTop;
}
function Pt(e, n) {
  const t = e ? "offsetWidth" : "offsetHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function $i(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const Zr = Symbol.for("vuetify:v-slide-group"), Fi = E({
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
  ...Ds({
    mobile: null
  }),
  ...ie(),
  ...Qn({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), ta = N()({
  name: "VSlideGroup",
  props: Fi(),
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
    } = ll(e), o = Jn(e, e.symbol), s = W(!1), r = W(0), c = W(0), m = W(0), g = y(() => e.direction === "horizontal"), {
      resizeRef: v,
      contentRect: d
    } = gt(), {
      resizeRef: h,
      contentRect: f
    } = gt(), b = Kr(), S = y(() => ({
      container: v.el,
      duration: 200,
      easing: "easeOutQuart"
    })), p = y(() => o.selected.value.length ? o.items.value.findIndex((k) => k.id === o.selected.value[0]) : -1), w = y(() => o.selected.value.length ? o.items.value.findIndex((k) => k.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (ve) {
      let k = -1;
      q(() => [o.selected.value, d.value, f.value, g.value], () => {
        cancelAnimationFrame(k), k = requestAnimationFrame(() => {
          if (d.value && f.value) {
            const B = g.value ? "width" : "height";
            c.value = d.value[B], m.value = f.value[B], s.value = c.value + 1 < m.value;
          }
          if (p.value >= 0 && h.el) {
            const B = h.el.children[w.value];
            L(B, e.centerActive);
          }
        });
      });
    }
    const _ = W(!1);
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
      const B = Pt(g.value, v.el), F = Oi(g.value, l.value, v.el);
      if (!(ea(g.value, v.el) <= B || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
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
      if (_.value = !0, !(!s.value || !h.el)) {
        for (const B of k.composedPath())
          for (const F of h.el.children)
            if (F === B) {
              L(F);
              return;
            }
      }
    }
    function H(k) {
      _.value = !1;
    }
    let R = !1;
    function O(k) {
      var B;
      !R && !_.value && !(k.relatedTarget && ((B = h.el) != null && B.contains(k.relatedTarget))) && T(), R = !1;
    }
    function x() {
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
      var F, K;
      if (!h.el)
        return;
      let B;
      if (!k)
        B = pt(h.el)[0];
      else if (k === "next") {
        if (B = (F = h.el.querySelector(":focus")) == null ? void 0 : F.nextElementSibling, !B)
          return T("first");
      } else if (k === "prev") {
        if (B = (K = h.el.querySelector(":focus")) == null ? void 0 : K.previousElementSibling, !B)
          return T("last");
      } else
        k === "first" ? B = h.el.firstElementChild : k === "last" && (B = h.el.lastElementChild);
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
      const k = ea(g.value, v.el), B = Jr(g.value, v.el);
      return k - B - Math.abs(r.value) > 1;
    });
    return U(() => u(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !g.value,
        "v-slide-group--has-affixes": Z.value,
        "v-slide-group--is-overflowing": s.value
      }, a.value, e.class],
      style: e.style,
      tabindex: _.value || o.selected.value.length ? -1 : 0,
      onFocus: O
    }, {
      default: () => {
        var k, B, F;
        return [Z.value && u("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !I.value
          }],
          onMousedown: x,
          onClick: () => I.value && D("prev")
        }, [((k = t.prev) == null ? void 0 : k.call(t, Q.value)) ?? u(Ol, null, {
          default: () => [u(ae, {
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
          onMousedown: x,
          onClick: () => P.value && D("next")
        }, [((F = t.next) == null ? void 0 : F.call(t, Q.value)) ?? u(Ol, null, {
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
}), Ri = Symbol.for("vuetify:v-chip-group"), eu = E({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: bt
  },
  ...Fi(),
  ...Y(),
  ...Qn({
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
    } = Jn(e, Ri);
    return st({
      VChip: {
        color: M(e, "color"),
        disabled: M(e, "disabled"),
        filter: M(e, "filter"),
        variant: M(e, "variant")
      }
    }), U(() => {
      const c = ta.filterProps(e);
      return u(ta, J(c, {
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
  ...Oe(),
  ...Ze(),
  ...Fa(),
  ...Ie(),
  ...un(),
  ...Ft(),
  ...ie({
    tag: "span"
  }),
  ...de(),
  ...tt({
    variant: "tonal"
  })
}, "VChip"), On = N()({
  name: "VChip",
  directives: {
    Ripple: Mt
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
    } = Xn(), {
      borderClasses: o
    } = Je(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: c
    } = $t(e), {
      densityClasses: m
    } = Ge(e), {
      elevationClasses: g
    } = et(e), {
      roundedClasses: v
    } = Ae(e), {
      sizeClasses: d
    } = Rt(e), {
      themeClasses: h
    } = ge(e), f = ue(e, "modelValue"), b = Ra(e, Ri, !1), S = rn(e, t), p = y(() => e.link !== !1 && S.isLink.value), w = y(() => !e.disabled && e.link !== !1 && (!!b || e.link || S.isClickable.value)), _ = y(() => ({
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
        onKeydown: w.value && !p.value && V
      }, {
        default: () => {
          var D;
          return [Ot(w.value, "v-chip"), O && u(Va, {
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
            }, a.filter) : u(ae, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[ht, b.isSelected.value]])]
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
          }, null)])]), R && u("button", J({
            key: "close",
            class: "v-chip__close",
            type: "button"
          }, _.value), [a.close ? u(re, {
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
}), nu = E({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...St(il({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: qn
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
    } = al(), i = Le(), o = y(() => e.id || `v-menu-${i}`), s = j(), r = me(Bn, null), c = W(0);
    pe(Bn, {
      register() {
        ++c.value;
      },
      unregister() {
        --c.value;
      },
      closeParents(f) {
        setTimeout(() => {
          !c.value && !e.persistent && (f == null || f && !uo(f, s.value.contentEl)) && (l.value = !1, r == null || r.closeParents());
        }, 40);
      }
    });
    async function m(f) {
      var p, w, _;
      const b = f.relatedTarget, S = f.target;
      await ye(), l.value && b !== S && ((p = s.value) != null && p.contentEl) && // We're the topmost menu
      ((w = s.value) != null && w.globalTop) && // It isn't the document or the menu body
      ![document, s.value.contentEl].includes(S) && // It isn't inside the menu body
      !s.value.contentEl.contains(S) && ((_ = pt(s.value.contentEl)[0]) == null || _.focus());
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
          f.key === "Enter" && f.preventDefault(), ma(pt((b = s.value) == null ? void 0 : b.contentEl, !1), f.shiftKey ? "prev" : "next", (_) => _.tabIndex >= 0) || (l.value = !1, (p = (S = s.value) == null ? void 0 : S.activatorEl) == null || p.focus());
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
    const h = y(() => J({
      "aria-haspopup": "menu",
      "aria-expanded": String(l.value),
      "aria-owns": o.value,
      onKeydown: d
    }, e.activatorProps));
    return U(() => {
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
        activatorProps: h.value,
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
  ...Y(),
  ...Lt({
    transition: {
      component: pa
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
    return U(() => u(Ue, {
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
      }) : l.value]), [[ht, e.active]])]
    })), {};
  }
}), ou = E({
  floating: Boolean,
  ...Y()
}, "VFieldLabel"), zt = N()({
  name: "VFieldLabel",
  props: ou(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return U(() => u(_i, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
}), su = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Mi = E({
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
    validator: (e) => su.includes(e)
  },
  "onClick:clear": ke(),
  "onClick:appendInner": ke(),
  "onClick:prependInner": ke(),
  ...Y(),
  ...tl(),
  ...Ie(),
  ...de()
}, "VField"), Ni = N()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Ei(),
    ...Mi()
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
    } = Bi(e), {
      InputIcon: g
    } = Pi(e), {
      roundedClasses: v
    } = Ae(e), {
      rtlClasses: d
    } = We(), h = y(() => e.dirty || e.active), f = y(() => !e.singleLine && !!(e.label || a.label)), b = Le(), S = y(() => e.id || `input-${b}`), p = y(() => `${S.value}-messages`), w = j(), _ = j(), L = j(), V = y(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: C,
      backgroundColorStyles: $
    } = Be(M(e, "bgColor")), {
      textColorClasses: H,
      textColorStyles: R
    } = He(y(() => e.error || e.disabled ? void 0 : h.value && r.value ? e.color : e.baseColor));
    q(h, (T) => {
      if (f.value) {
        const D = w.value.$el, Q = _.value.$el;
        requestAnimationFrame(() => {
          const Z = jn(D), I = Q.getBoundingClientRect(), P = I.x - Z.x, k = I.y - Z.y - (Z.height / 2 - I.height / 2), B = I.width / 0.75, F = Math.abs(B - Z.width) > 1 ? {
            maxWidth: G(B)
          } : void 0, K = getComputedStyle(D), te = getComputedStyle(Q), z = parseFloat(K.transitionDuration) * 1e3 || 150, ne = parseFloat(te.getPropertyValue("--v-field-label-scale")), oe = te.getPropertyValue("color");
          D.style.visibility = "visible", Q.style.visibility = "hidden", dt(D, {
            transform: `translate(${P}px, ${k}px) scale(${ne})`,
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
    const O = y(() => ({
      isActive: h,
      isFocused: r,
      controlRef: L,
      blur: m,
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
        onClick: x
      }, t), [u("div", {
        class: "v-field__overlay"
      }, null), u(za, {
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
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && f.value && u(zt, {
        key: "floating-label",
        ref: _,
        class: [H.value],
        floating: !0,
        for: S.value,
        style: R.value
      }, {
        default: () => [I()]
      }), u(zt, {
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
      }, [u(zt, {
        ref: _,
        floating: !0,
        for: S.value
      }, {
        default: () => [I()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), V.value && f.value && u(zt, {
        ref: _,
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
  const n = Object.keys(Ni.props).filter((t) => !zn(t) && t !== "class" && t !== "style");
  return ua(e, n);
}
const uu = ["color", "file", "time", "date", "datetime-local", "week", "month"], Di = E({
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
  ...Li(),
  ...Mi()
}, "VTextField"), na = N()({
  name: "VTextField",
  directives: {
    Intersect: Pa
  },
  inheritAttrs: !1,
  props: Di(),
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
    } = Bi(e), c = y(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), m = y(() => {
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
    function p(V) {
      l("mousedown:control", V), V.target !== f.value && (S(), V.preventDefault());
    }
    function w(V) {
      S(), l("click:control", V);
    }
    function _(V) {
      V.stopPropagation(), S(), ye(() => {
        i.value = null, so(e["onClick:clear"], V);
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
      const V = !!(a.counter || e.counter !== !1 && e.counter != null), C = !!(V || a.details), [$, H] = da(t), {
        modelValue: R,
        ...O
      } = Jl.filterProps(e), x = ru(e);
      return u(Jl, J({
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
          return u(Ni, J({
            ref: h,
            onMousedown: p,
            onClick: w,
            "onClick:clear": _,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, x, {
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
              }, [a.default(), F]) : eo(F, {
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
  ...Y()
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
  const t = ll(), l = W(0);
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
  const d = y(() => {
    var P;
    return r.value === document.documentElement ? t.height.value : ((P = v.value) == null ? void 0 : P.height) || parseInt(e.height) || 0;
  }), h = y(() => !!(r.value && c.value && d.value && l.value));
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
  const _ = io(() => {
    const P = performance.now();
    b[0] = 0;
    const k = n.value.length;
    for (let B = 1; B <= k - 1; B++)
      b[B] = (b[B - 1] || 0) + w(B - 1);
    S.value = Math.max(S.value, performance.now() - P);
  }, S), L = q(h, (P) => {
    P && (L(), m = c.value.offsetTop, _.immediate(), D(), ~p && ye(() => {
      ve && window.requestAnimationFrame(() => {
        Z(p), p = -1;
      });
    }));
  });
  be(() => {
    _.clear();
  });
  function V(P, k) {
    const B = f[P], F = l.value;
    l.value = F ? Math.min(l.value, k) : k, (B !== k || F !== l.value) && (f[P] = k, _());
  }
  function C(P) {
    return P = De(P, 0, n.value.length - 1), b[P] || 0;
  }
  function $(P) {
    return yu(b, P);
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
    const P = H - m, k = Math.sign(R), B = Math.max(0, P - wn), F = De($(B), 0, n.value.length), K = P + d.value + wn, te = De($(K) + 1, F + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (k !== fu || F < a.value) && (k !== vu || te > i.value)
    ) {
      const z = C(a.value) - C(F), ne = C(te) - C(i.value);
      Math.max(z, ne) > wn ? (a.value = F, i.value = te) : (F <= 0 && (a.value = F), te >= n.value.length && (i.value = te));
    }
    o.value = C(a.value), s.value = C(n.value.length) - C(i.value);
  }
  function Z(P) {
    const k = C(P);
    !r.value || P && !k ? p = P : r.value.scrollTop = k;
  }
  const I = y(() => n.value.slice(a.value, i.value).map((P, k) => ({
    raw: P,
    index: k + a.value
  })));
  return q(n, () => {
    f = Array.from({
      length: n.value.length
    }), b = Array.from({
      length: n.value.length
    }), _.immediate(), D();
  }, {
    deep: !0
  }), {
    containerRef: r,
    markerRef: c,
    computedItems: I,
    paddingTop: o,
    paddingBottom: s,
    scrollToIndex: Z,
    handleScroll: x,
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
  ...Y(),
  ...Ye()
}, "VVirtualScroll"), bu = N()({
  name: "VVirtualScroll",
  props: hu(),
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
    } = gu(e, M(e, "items"));
    return Ke(() => e.renderless, () => {
      function h() {
        var S, p;
        const b = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        i.value === document.documentElement ? (document[b]("scroll", s, {
          passive: !0
        }), document[b]("scrollend", r)) : ((S = i.value) == null || S[b]("scroll", s, {
          passive: !0
        }), (p = i.value) == null || p[b]("scrollend", r));
      }
      je(() => {
        i.value = ka(l.vnode.el, !0), h(!0);
      }), be(h);
    }), U(() => {
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
          paddingTop: G(g.value)
        }
      }, null), h, u("div", {
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
      }, [h])]);
    }), {
      scrollToIndex: m
    };
  }
});
function Su(e, n) {
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
  ...wi({
    itemChildren: !1
  })
}, "Select"), ku = E({
  ...Cu(),
  ...St(Di({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...Lt({
    transition: {
      component: qn
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
    } = Xn(), a = j(), i = j(), o = j(), s = ue(e, "menu"), r = y({
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
    }), d = y(() => typeof e.counterValue == "function" ? e.counterValue(v.value) : typeof e.counterValue == "number" ? e.counterValue : v.value.length), h = Ti(), f = y(() => v.value.map((I) => I.value)), b = W(!1), S = y(() => r.value ? e.closeText : e.openText);
    let p = "", w;
    const _ = y(() => e.hideSelected ? c.value.filter((I) => !v.value.some((P) => e.valueComparator(P, I))) : c.value), L = y(() => e.hideNoData && !_.value.length || e.readonly || (h == null ? void 0 : h.isReadonly.value)), V = y(() => {
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
    function x(I) {
      var K, te;
      if (!I.key || e.readonly || h != null && h.isReadonly.value)
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
        const z = _.value.indexOf(F);
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
      else if (Yt(a.value, ":autofill") || Yt(a.value, ":-webkit-autofill")) {
        const P = c.value.find((k) => k.title === I);
        P && A(P);
      } else
        a.value && (a.value.value = "");
    }
    return q(r, () => {
      if (!e.hideSelected && r.value && v.value.length) {
        const I = _.value.findIndex((P) => v.value.some((k) => e.valueComparator(k.value, P.value)));
        ve && window.requestAnimationFrame(() => {
          var P;
          I >= 0 && ((P = o.value) == null || P.scrollToIndex(I));
        });
      }
    }), q(() => e.items, (I, P) => {
      r.value || b.value && !P.length && I.length && (r.value = !0);
    }), U(() => {
      const I = !!(e.chips || t.chip), P = !!(!e.hideNoData || _.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), k = v.value.length > 0, B = na.filterProps(e), F = k || !b.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return u(na, J({
        ref: a
      }, B, {
        modelValue: v.value.map((K) => K.props.value).join(", "),
        "onUpdate:modelValue": Z,
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
        onKeydown: x,
        "aria-label": l(S.value),
        title: l(S.value)
      }), {
        ...t,
        default: () => u(se, null, [u(lu, J({
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
          default: () => [P && u(Or, J({
            ref: C,
            selected: f.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (K) => K.preventDefault(),
            onKeydown: H,
            onFocusin: Q,
            onScrollPassive: $,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var K, te, z;
              return [(K = t["prepend-item"]) == null ? void 0 : K.call(t), !_.value.length && !e.hideNoData && (((te = t["no-data"]) == null ? void 0 : te.call(t)) ?? u(Ne, {
                title: l(e.noDataText)
              }, null)), u(bu, {
                ref: o,
                renderless: !0,
                items: _.value
              }, {
                default: (ne) => {
                  var vl;
                  let {
                    item: oe,
                    index: fe,
                    itemRef: Se
                  } = ne;
                  const fl = J(oe.props, {
                    ref: Se,
                    key: fe,
                    onClick: () => A(oe, null)
                  });
                  return ((vl = t.item) == null ? void 0 : vl.call(t, {
                    item: oe,
                    index: fe,
                    props: fl
                  })) ?? u(Ne, J(fl, {
                    role: "option"
                  }), {
                    prepend: (Hi) => {
                      let {
                        isSelected: ji
                      } = Hi;
                      return u(se, null, [e.multiple && !e.hideSelected ? u(Nr, {
                        key: oe.value,
                        modelValue: ji,
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
          }, oe = I ? !!t.chip : !!t.selection, fe = oe ? ga(I ? t.chip({
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
            }) : u(On, J({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: K.title,
              disabled: K.props.disabled
            }, ne), null) : fe ?? u("span", {
              class: "v-select__selection-text"
            }, [K.title, e.multiple && te < v.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [$e(",")])])]);
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
    }), dn({
      isFocused: b,
      menu: r,
      select: A
    }, a);
  }
}), dl = (e) => (Mn("data-v-9e328102"), e = e(), Nn(), e), xu = ["href"], pu = /* @__PURE__ */ dl(() => /* @__PURE__ */ X("img", {
  src: "https://firebasestorage.googleapis.com/v0/b/ccaf-afea-test.appspot.com/o/logo.webp?alt=media&token=f4da887e-96cf-4325-b67b-5afd938250bf",
  width: "179",
  height: "52",
  alt: "Cambridge Centre for Alternative Finance (CCAF.io)"
}, null, -1)), _u = [
  pu
], Vu = {
  class: "ma-0 ml-6 d-none d-sm-flex header__title",
  style: { "font-family": "MyriadPro" }
}, Iu = /* @__PURE__ */ dl(() => /* @__PURE__ */ X("ul", { class: "header-links" }, [
  /* @__PURE__ */ X("li", { class: "header-links__element" }, [
    /* @__PURE__ */ X("a", {
      class: "header-links__element-link",
      title: "Home",
      href: "https://ccaf.io/"
    }, "Home ")
  ]),
  /* @__PURE__ */ X("li", { class: "header-links__element" }, [
    /* @__PURE__ */ X("a", {
      class: "header-links__element-link",
      title: "Home",
      href: "https://ccaf.io/about_ccaf"
    }, "About CCAF ")
  ]),
  /* @__PURE__ */ X("li", { class: "header-links__element" }, [
    /* @__PURE__ */ X("a", {
      class: "header-links__element-link",
      title: "Home",
      href: "https://ccaf.io/contact?topic=dmd"
    }, "Contact ")
  ])
], -1)), Au = { class: "project-selector" }, Pu = { style: { "font-size": "14px", "font-weight": "600" } }, Eu = /* @__PURE__ */ dl(() => /* @__PURE__ */ X("div", { class: "hidden-lg-and-up" }, null, -1)), Bu = /* @__PURE__ */ Bt({
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
    }
  },
  emits: ["changeDialog"],
  setup(e) {
    const { mdAndUp: n } = oa(), t = e, l = j([]), a = j(), i = (o) => {
      const s = l.value.find(
        (r) => {
          if (typeof o == "string")
            return r.title === o;
        }
      );
      s && (window.location.href = `https://${t.env === "demo" || t.env === "develop" ? "demo." : ""}ccaf.io/${s.link}`);
    };
    return je(async () => {
      const { data: o } = await fetch(
        "https://demo-api.ccaf.io/v1/projects"
      ).then((s) => s.json());
      l.value = o, a.value = l.value.find(
        (s) => s.title === t.activeSelect || !!s.tag && s.tag === t.activeSelect
      ) || l.value[0];
    }), (o, s) => (Ve(), ft(Yo, {
      id: "header",
      class: "header noselect",
      color: "#FFB71A",
      height: "72",
      "clipped-right": "",
      "clipped-left": "",
      flat: "",
      app: ""
    }, {
      default: ee(() => [
        u(nn, {
          align: "center",
          justify: "start",
          class: "header__logo"
        }, {
          default: ee(() => [
            X("a", {
              title: "CCAF.io",
              href: `https://${e.env}ccaf.io/`
            }, _u, 8, xu),
            X("h4", Vu, Re(e.title), 1),
            u(rr),
            Iu,
            X("div", Au, [
              he(n) ? (Ve(), ft(wu, {
                key: 0,
                variant: "solo",
                class: on(["project-selector__select", { "is-long": !!a.value && !a.value.tag }]),
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
                selection: ee(({ item: r }) => [
                  X("strong", Pu, Re(r.title || r.value), 1)
                ]),
                item: ee(({ item: r, props: c }) => [
                  u(Ne, J(c, {
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
        u(Qs, {
          class: "header-overlay",
          scrim: !1,
          "model-value": e.dialog,
          "onUpdate:modelValue": s[0] || (s[0] = (r) => o.$emit("changeDialog", r)),
          fullscreen: ""
        }, {
          activator: ee(({ props: r }) => [
            he(n) ? ut("", !0) : (Ve(), ft(ks, J({ key: 0 }, r, {
              flat: "",
              ripple: !1,
              class: "dialog-button"
            }), {
              default: ee(() => [
                u(ae, {
                  color: "#000",
                  size: "24"
                }, {
                  default: ee(() => [
                    $e(Re(e.dialog ? "mdi-close" : "mdi-menu"), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1040)),
            Eu
          ]),
          default: ee(({ isActive: r }) => [
            Ut(o.$slots, "default", {
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
}, dc = /* @__PURE__ */ fn(Bu, [["__scopeId", "data-v-9e328102"]]), Tu = E({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...Qe(),
  ...Y(),
  ...Ze(),
  ...Ta(),
  ...Ie(),
  ...ie({
    tag: "footer"
  }),
  ...de()
}, "VFooter"), Lu = N()({
  name: "VFooter",
  props: Tu(),
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
    } = Je(e), {
      elevationClasses: s
    } = et(e), {
      roundedClasses: r
    } = Ae(e), c = W(32), {
      resizeRef: m
    } = gt((h) => {
      h.length && (c.value = h[0].target.clientHeight);
    }), g = y(() => e.height === "auto" ? c.value : parseInt(e.height, 10)), {
      layoutItemStyles: v,
      layoutIsReady: d
    } = La({
      id: e.name,
      order: y(() => parseInt(e.order, 10)),
      position: y(() => "bottom"),
      layoutSize: g,
      elementSize: y(() => e.height === "auto" ? void 0 : g.value),
      active: y(() => e.app),
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
}), Ou = (e) => (Mn("data-v-45808552"), e = e(), Nn(), e), $u = {
  class: "footer__pre-footer",
  align: "start",
  justify: "start",
  "no-gutters": ""
}, Fu = { class: "footer__info" }, Ru = {
  class: "footer__pre-links mb-4 pa-4",
  cols: "auto"
}, Mu = ["href"], Nu = ["href"], Du = ["href"], zu = { class: "ml-7" }, Hu = ["href"], ju = ["href"], Wu = {
  key: 2,
  class: "link-icon",
  href: "facebookLink",
  target: "_blank"
}, Gu = /* @__PURE__ */ Ou(() => /* @__PURE__ */ X("div", {
  class: "footer__pre-commons mb-4 pa-4",
  cols: "auto"
}, [
  /* @__PURE__ */ X("a", {
    rel: "license",
    href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
    target: "_blank"
  }, [
    /* @__PURE__ */ X("img", {
      alt: "Creative Commons License",
      style: { "border-width": "0" },
      src: "https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg"
    })
  ]),
  /* @__PURE__ */ X("br"),
  /* @__PURE__ */ X("p", { style: { "font-size": "12px", "max-width": "280px" } }, [
    /* @__PURE__ */ $e(" This work is licensed under a "),
    /* @__PURE__ */ X("a", {
      rel: "license",
      href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
      target: "_blank",
      style: { color: "#262b4a" }
    }, " Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ")
  ])
], -1)), Uu = ["href"], qu = /* @__PURE__ */ Bt({
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
    const n = () => window.scrollTo({ top: 0, behavior: "smooth" }), { smAndDown: t } = oa(), l = j(!1);
    return je(() => {
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
    }), (a, i) => (Ve(), ft(Lu, {
      id: "footer",
      color: "white",
      width: "100vw",
      class: "footer pa-0"
    }, {
      default: ee(() => [
        l.value ? (Ve(), ct("div", {
          key: 0,
          class: "goup",
          onClick: i[0] || (i[0] = (o) => n())
        }, [
          u(ae, {
            size: "18",
            color: "#FFB71A",
            icon: "mdi-arrow-up"
          })
        ])) : ut("", !0),
        u(li, { fluid: "" }, {
          default: ee(() => [
            X("div", $u, [
              X("div", Fu, [
                X("div", Ru, [
                  X("a", {
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
                    X("p", null, Re(e.webLink), 1)
                  ], 8, Mu),
                  X("a", {
                    class: "footer__link mb-2 link-icon",
                    href: `mailto:${e.email}`
                  }, [
                    u(ae, {
                      size: "16",
                      color: "#0e1436",
                      class: "mr-2",
                      icon: "mdi-email"
                    }),
                    X("p", null, Re(e.email), 1)
                  ], 8, Nu),
                  X("a", {
                    href: e.locationLink,
                    class: "footer__link footer__link--location mb-2 link-icon"
                  }, [
                    u(ae, {
                      size: "16",
                      color: "#0e1436",
                      class: "mr-2",
                      icon: "mdi-map-marker"
                    }),
                    X("p", null, Re(e.location), 1)
                  ], 8, Du),
                  X("div", zu, [
                    u(nn, null, {
                      default: ee(() => [
                        u(vt, null, {
                          default: ee(() => [
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
                            ], 8, Hu)) : ut("", !0),
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
                            ], 8, ju)) : ut("", !0),
                            e.facebookLink ? (Ve(), ct("a", Wu, [
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
                Gu
              ]),
              Ut(a.$slots, "supported", {}, void 0, !0)
            ]),
            u(nn, {
              class: "footer__main-footer",
              align: "center",
              justify: he(t) ? "center" : "space-between",
              "no-gutters": ""
            }, {
              default: ee(() => [
                u(vt, {
                  class: on({ "footer-privacy": he(t) }),
                  cols: "auto"
                }, {
                  default: ee(() => [
                    X("a", {
                      href: `https://${e.env}ccaf.io/privacy_policy`
                    }, " Privacy Policy ", 8, Uu)
                  ]),
                  _: 1
                }, 8, ["class"]),
                u(vt, { cols: "auto" }, {
                  default: ee(() => [
                    X("span", null, "Cambridge Centre for Alternative Finance © " + Re(" " + (/* @__PURE__ */ new Date()).getFullYear()), 1)
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
}), fc = /* @__PURE__ */ fn(qu, [["__scopeId", "data-v-45808552"]]), Ku = N()({
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
}), Yu = E({
  opacity: [Number, String],
  ...Y(),
  ...ie()
}, "VCardSubtitle"), Xu = N()({
  name: "VCardSubtitle",
  props: Yu(),
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
}), Qu = Gn("v-card-title"), Ju = E({
  appendAvatar: String,
  appendIcon: le,
  prependAvatar: String,
  prependIcon: le,
  subtitle: [String, Number],
  title: [String, Number],
  ...Y(),
  ...Oe()
}, "VCardItem"), Zu = N()({
  name: "VCardItem",
  props: Ju(),
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
      }, [s && u(Qu, {
        key: "title"
      }, {
        default: () => {
          var m;
          return [((m = t.title) == null ? void 0 : m.call(t)) ?? e.title];
        }
      }), r && u(Xu, {
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
}), ec = E({
  opacity: [Number, String],
  ...Y(),
  ...ie()
}, "VCardText"), tc = N()({
  name: "VCardText",
  props: ec(),
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
}), nc = E({
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
  ...Oe(),
  ...Ye(),
  ...Ze(),
  ...tl(),
  ...Zn(),
  ...Ha(),
  ...Ie(),
  ...un(),
  ...ie(),
  ...de(),
  ...tt({
    variant: "elevated"
  })
}, "VCard"), lc = N()({
  name: "VCard",
  directives: {
    Ripple: Mt
  },
  props: nc(),
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
    } = $t(e), {
      densityClasses: c
    } = Ge(e), {
      dimensionStyles: m
    } = Xe(e), {
      elevationClasses: g
    } = et(e), {
      loaderClasses: v
    } = nl(e), {
      locationStyles: d
    } = el(e), {
      positionClasses: h
    } = ja(e), {
      roundedClasses: f
    } = Ae(e), b = rn(e, t), S = y(() => e.link !== !1 && b.isLink.value), p = y(() => !e.disabled && e.link !== !1 && (e.link || b.isClickable.value));
    return U(() => {
      const w = S.value ? "a" : e.tag, _ = !!(l.title || e.title != null), L = !!(l.subtitle || e.subtitle != null), V = _ || L, C = !!(l.append || e.appendAvatar || e.appendIcon), $ = !!(l.prepend || e.prependAvatar || e.prependIcon), H = !!(l.image || e.image), R = V || $ || C, O = !!(l.text || e.text != null);
      return we(u(w, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": p.value
        }, a.value, i.value, o.value, c.value, g.value, v.value, h.value, f.value, r.value, e.class],
        style: [s.value, m.value, d.value, e.style],
        href: b.href.value,
        onClick: p.value && b.navigate,
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
          }, l.image) : u(Yn, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(za, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: l.loader
          }), R && u(Zu, {
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
          }), O && u(tc, {
            key: "text"
          }, {
            default: () => {
              var A;
              return [((A = l.text) == null ? void 0 : A.call(l)) ?? e.text];
            }
          }), (x = l.default) == null ? void 0 : x.call(l), l.actions && u(Ku, null, {
            default: l.actions
          }), Ot(p.value, "v-card")];
        }
      }), [[ot("ripple"), p.value && e.ripple]]);
    }), {};
  }
}), ac = { class: "chips" }, ic = /* @__PURE__ */ Bt({
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
    return (l, a) => (Ve(), ft(lc, null, {
      default: ee(() => [
        Ut(l.$slots, "switcher", {}, void 0, !0),
        Ut(l.$slots, "default", {}, void 0, !0),
        u(Ne, {
          href: `https://${e.env}ccaf.io/`
        }, {
          default: ee(() => [
            u(xt, { class: "list__title" }, {
              default: ee(() => [
                $e(" CCAF Home ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["href"]),
        u(Gt),
        u(Ne, {
          href: `https://${e.env}ccaf.io/about_ccaf`
        }, {
          default: ee(() => [
            u(xt, { class: "list__title" }, {
              default: ee(() => [
                $e(" CCAF About ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["href"]),
        u(Gt),
        u(Ne, {
          href: `https://${e.env}ccaf.io/contact?topic=cbeci`
        }, {
          default: ee(() => [
            u(xt, { class: "list__title" }, {
              default: ee(() => [
                $e(" CCAF Contact ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["href"]),
        u(Gt),
        u(Ne, null, {
          default: ee(() => [
            u(xt, { class: "list__title" }, {
              default: ee(() => [
                $e(" CCAF Digital Tools: ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        X("div", ac, [
          (Ve(!0), ct(se, null, to(t.value, (i, o) => (Ve(), ft(On, {
            class: on(["chips__item", { "chips__item-active": !o }]),
            key: i.id,
            href: o ? `https://${e.env}ccaf.io/${i.link}` : void 0
          }, {
            default: ee(() => [
              $e(Re(i.tag || i.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href"]))), 128)),
          u(On, { class: "chips__item" }, {
            default: ee(() => [
              $e(" Atlas ")
            ]),
            _: 1
          })
        ])
      ]),
      _: 3
    }));
  }
}), vc = /* @__PURE__ */ fn(ic, [["__scopeId", "data-v-e792fd34"]]), zi = (e) => (Mn("data-v-b93dadf5"), e = e(), Nn(), e), oc = { class: "app-loader__title" }, sc = /* @__PURE__ */ zi(() => /* @__PURE__ */ X("div", { class: "lds-ring" }, [
  /* @__PURE__ */ X("div"),
  /* @__PURE__ */ X("div"),
  /* @__PURE__ */ X("div"),
  /* @__PURE__ */ X("div")
], -1)), rc = /* @__PURE__ */ zi(() => /* @__PURE__ */ X("p", { class: "app-loader__state" }, "LOADING", -1)), uc = /* @__PURE__ */ Bt({
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
    return (n, t) => (Ve(), ct("div", {
      class: on(["app-loader", { "app-loader--visible": e.visible }])
    }, [
      u(li, null, {
        default: ee(() => [
          u(nn, {
            align: "center",
            justify: "center",
            class: "flex-column"
          }, {
            default: ee(() => [
              u(vt, { cols: "12" }, {
                default: ee(() => [
                  X("h1", oc, Re(e.title), 1)
                ]),
                _: 1
              }),
              u(vt, {
                cols: "12",
                class: "d-flex justify-center"
              }, {
                default: ee(() => [
                  sc
                ]),
                _: 1
              }),
              u(vt, { cols: "12" }, {
                default: ee(() => [
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
}), mc = /* @__PURE__ */ fn(uc, [["__scopeId", "data-v-b93dadf5"]]);
export {
  fc as LayoutFooter,
  dc as LayoutHeader,
  mc as Loader,
  vc as MobileMenu
};
