import { watch as q, onScopeDispose as he, effectScope as Bn, Fragment as ie, reactive as Jt, computed as h, watchEffect as We, toRefs as Xl, capitalize as Bt, isVNode as Ni, Comment as Di, shallowRef as H, unref as ge, warn as Zt, getCurrentInstance as zi, ref as z, provide as xe, inject as ve, defineComponent as Tt, camelize as Ql, h as st, toRaw as ke, createVNode as u, mergeProps as Q, onBeforeUnmount as Ae, readonly as Tn, onDeactivated as Hi, onActivated as ji, nextTick as ye, TransitionGroup as Ln, Transition as Xe, isRef as ot, toRef as D, onBeforeMount as Jl, withDirectives as Ve, resolveDirective as Je, vShow as ut, onMounted as Ze, onUpdated as Wi, Text as Gi, resolveDynamicComponent as Ui, Teleport as qi, cloneVNode as Ki, createTextVNode as $e, openBlock as Ce, createBlock as rt, withCtx as J, createElementVNode as Z, toDisplayString as Pe, createCommentVNode as St, renderSlot as bn, pushScopeId as On, popScopeId as $n, createElementBlock as qe, renderList as Zl, normalizeClass as Fn } from "vue";
function Ge(e, n) {
  let t;
  function l() {
    t = Bn(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), l();
    }) : n());
  }
  q(e, (a) => {
    a && !t ? l() : a || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), he(() => {
    t == null || t.stop();
  });
}
const fe = typeof window < "u", Rn = fe && "IntersectionObserver" in window;
function ea(e, n, t) {
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
function ct(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((l) => ct(e[l], n[l]));
}
function Yi(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), ea(e, n.split("."), t));
}
function Re(e, n, t) {
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
    return Yi(e, n, t);
  if (Array.isArray(n))
    return ea(e, n, t);
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
function Sn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ta(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const sl = Object.freeze({
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
function sn(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function na(e, n) {
  const t = {}, l = new Set(Object.keys(e));
  for (const a of n)
    l.has(a) && (t[a] = e[a]);
  return t;
}
function ul(e, n, t) {
  const l = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((o) => o instanceof RegExp ? o.test(i) : o === i) && !(t != null && t.some((o) => o === i)) ? l[i] = e[i] : a[i] = e[i];
  return [l, a];
}
function dt(e, n) {
  const t = {
    ...e
  };
  return n.forEach((l) => delete t[l]), t;
}
function Xi(e, n) {
  const t = {};
  return n.forEach((l) => t[l] = e[l]), t;
}
const la = /^on[^a-z]/, Mn = (e) => la.test(e), Qi = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function aa(e) {
  const [n, t] = ul(e, [la]), l = dt(n, Qi), [a, i] = ul(t, ["class", "style", "id", /^data-/]);
  return Object.assign(a, n), Object.assign(i, l), [a, i];
}
function Ie(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ji(e, n) {
  let t = 0;
  const l = function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    clearTimeout(t), t = setTimeout(() => e(...i), ge(n));
  };
  return l.clear = () => {
    clearTimeout(t);
  }, l.immediate = e, l;
}
function De(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function cl(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function Zi(e) {
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
    if (Sn(i) && Sn(o)) {
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
function ia(e) {
  return e.map((n) => n.type === ie ? ia(n.children) : n).flat();
}
function Ke() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Ke.cache.has(e))
    return Ke.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Ke.cache.set(e, n), n;
}
Ke.cache = /* @__PURE__ */ new Map();
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
function Nn(e) {
  const n = Jt({}), t = h(e);
  return We(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, {
    flush: "sync"
  }), Xl(n);
}
function jt(e, n) {
  return e.includes(n);
}
function oa(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const we = () => [Function, Array];
function dl(e, n) {
  return n = "on" + Bt(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function eo(e) {
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
function ra(e, n, t) {
  let l, a = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    a += i, l = e[a];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? !0)) && a < e.length && a >= 0);
  return l;
}
function Wt(e, n) {
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
    const r = ra(t, n);
    r ? r.focus() : Wt(e, n === "next" ? "first" : "last");
  }
}
function Gt(e, n) {
  if (!(fe && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`)))
    return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function sa(e) {
  return e.some((n) => Ni(n) ? n.type === Di ? !1 : n.type !== ie || sa(n.children) : !0) ? e : null;
}
function to(e, n) {
  if (!fe || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function no(e, n) {
  const t = e.clientX, l = e.clientY, a = n.getBoundingClientRect(), i = a.left, o = a.top, r = a.right, s = a.bottom;
  return t >= i && t <= r && l >= o && l <= s;
}
function Cn() {
  const e = H(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => ta(e.value)
  }), n;
}
const ua = ["top", "bottom"], lo = ["start", "end", "left", "right"];
function pn(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = jt(ua, t) ? "start" : jt(lo, t) ? "top" : "center"), {
    side: fl(t, n),
    align: fl(l, n)
  };
}
function fl(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function un(e) {
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
function cn(e) {
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
function vl(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function ml(e) {
  return jt(ua, e.side) ? "y" : "x";
}
class Ye {
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
function gl(e, n) {
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
function ca(e) {
  return Array.isArray(e) ? new Ye({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function Dn(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), l = t.transform;
  if (l) {
    let a, i, o, r, s;
    if (l.startsWith("matrix3d("))
      a = l.slice(9, -1).split(/, /), i = +a[0], o = +a[5], r = +a[12], s = +a[13];
    else if (l.startsWith("matrix("))
      a = l.slice(7, -1).split(/, /), i = +a[0], o = +a[3], r = +a[4], s = +a[5];
    else
      return new Ye(n);
    const c = t.transformOrigin, f = n.x - r - (1 - i) * parseFloat(c), m = n.y - s - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), v = i ? n.width / i : e.offsetWidth + 1, d = o ? n.height / o : e.offsetHeight + 1;
    return new Ye({
      x: f,
      y: m,
      width: v,
      height: d
    });
  } else
    return new Ye(n);
}
function it(e, n, t) {
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
const Nt = /* @__PURE__ */ new WeakMap();
function ao(e, n) {
  Object.keys(n).forEach((t) => {
    if (Mn(t)) {
      const l = oa(t), a = Nt.get(e);
      if (n[t] == null)
        a == null || a.forEach((i) => {
          const [o, r] = i;
          o === l && (e.removeEventListener(l, r), a.delete(i));
        });
      else if (!a || ![...a].some((i) => i[0] === l && i[1] === n[t])) {
        e.addEventListener(l, n[t]);
        const i = a || /* @__PURE__ */ new Set();
        i.add([l, n[t]]), Nt.has(e) || Nt.set(e, i);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function io(e, n) {
  Object.keys(n).forEach((t) => {
    if (Mn(t)) {
      const l = oa(t), a = Nt.get(e);
      a == null || a.forEach((i) => {
        const [o, r] = i;
        o === l && (e.removeEventListener(l, r), a.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const at = 2.4, yl = 0.2126729, hl = 0.7151522, bl = 0.072175, oo = 0.55, ro = 0.58, so = 0.57, uo = 0.62, Ft = 0.03, Sl = 1.45, co = 5e-4, fo = 1.25, vo = 1.25, Cl = 0.078, pl = 12.82051282051282, Rt = 0.06, wl = 1e-3;
function kl(e, n) {
  const t = (e.r / 255) ** at, l = (e.g / 255) ** at, a = (e.b / 255) ** at, i = (n.r / 255) ** at, o = (n.g / 255) ** at, r = (n.b / 255) ** at;
  let s = t * yl + l * hl + a * bl, c = i * yl + o * hl + r * bl;
  if (s <= Ft && (s += (Ft - s) ** Sl), c <= Ft && (c += (Ft - c) ** Sl), Math.abs(c - s) < co)
    return 0;
  let f;
  if (c > s) {
    const m = (c ** oo - s ** ro) * fo;
    f = m < wl ? 0 : m < Cl ? m - m * pl * Rt : m - Rt;
  } else {
    const m = (c ** uo - s ** so) * vo;
    f = m > -wl ? 0 : m > -Cl ? m - m * pl * Rt : m + Rt;
  }
  return f * 100;
}
function je(e) {
  Zt(`Vuetify: ${e}`);
}
function mo(e) {
  Zt(`Vuetify error: ${e}`);
}
function go(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, Zt(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
function wn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function yo(e) {
  return wn(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const xl = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, ho = {
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
  hsl: (e, n, t, l) => _l({
    h: e,
    s: n,
    l: t,
    a: l
  }),
  hsla: (e, n, t, l) => _l({
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
function pt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && je(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && xl.test(e)) {
    const {
      groups: n
    } = e.match(xl), {
      fn: t,
      values: l
    } = n, a = l.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return ho[t](...a);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((l) => l + l).join("") : [6, 8].includes(n.length) || je(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && je(`'${e}' is not a valid hex(a) color`), bo(n);
  } else if (typeof e == "object") {
    if (sn(e, ["r", "g", "b"]))
      return e;
    if (sn(e, ["h", "s", "l"]))
      return _t(da(e));
    if (sn(e, ["h", "s", "v"]))
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
  } = e, i = (r) => {
    const s = (r + n / 60) % 6;
    return l - l * t * Math.max(Math.min(s, 4 - s, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a
  };
}
function _l(e) {
  return _t(da(e));
}
function da(e) {
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
function bo(e) {
  e = So(e);
  let [n, t, l, a] = Zi(e, 2).map((i) => parseInt(i, 16));
  return a = a === void 0 ? a : a / 255, {
    r: n,
    g: t,
    b: l,
    a
  };
}
function So(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = cl(cl(e, 6), 8, "F")), e;
}
function Co(e) {
  const n = Math.abs(kl(pt(0), pt(e)));
  return Math.abs(kl(pt(16777215), pt(e))) > Math.min(n, 50) ? "#fff" : "#000";
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
function ue(e, n) {
  const t = zi();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function Be() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = ue(e).type;
  return Ke((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let fa = 0, Dt = /* @__PURE__ */ new WeakMap();
function Te() {
  const e = ue("getUid");
  if (Dt.has(e))
    return Dt.get(e);
  {
    const n = fa++;
    return Dt.set(e, n), n;
  }
}
Te.reset = () => {
  fa = 0, Dt = /* @__PURE__ */ new WeakMap();
};
function po(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ue("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const Ut = Symbol.for("vuetify:defaults");
function zn() {
  const e = ve(Ut);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function ft(e, n) {
  const t = zn(), l = z(e), a = h(() => {
    if (ge(n == null ? void 0 : n.disabled))
      return t.value;
    const o = ge(n == null ? void 0 : n.scoped), r = ge(n == null ? void 0 : n.reset), s = ge(n == null ? void 0 : n.root);
    if (l.value == null && !(o || r || s))
      return t.value;
    let c = Me(l.value, {
      prev: t.value
    });
    if (o)
      return c;
    if (r || s) {
      const f = Number(r || 1 / 0);
      for (let m = 0; m <= f && !(!c || !("prev" in c)); m++)
        c = c.prev;
      return c && typeof s == "string" && s in c && (c = Me(Me(c, {
        prev: c
      }), c[s])), c;
    }
    return c.prev ? Me(c.prev, c) : c;
  });
  return xe(Ut, a), a;
}
function wo(e, n) {
  var t, l;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((l = e.props) == null ? void 0 : l[Ke(n)]) < "u";
}
function ko() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : zn();
  const l = ue("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const a = h(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }), i = new Proxy(e, {
    get(s, c) {
      var m, v, d, y, g, b, C;
      const f = Reflect.get(s, c);
      return c === "class" || c === "style" ? [(m = a.value) == null ? void 0 : m[c], f].filter((x) => x != null) : typeof c == "string" && !wo(l.vnode, c) ? ((v = a.value) == null ? void 0 : v[c]) !== void 0 ? (d = a.value) == null ? void 0 : d[c] : ((g = (y = t.value) == null ? void 0 : y.global) == null ? void 0 : g[c]) !== void 0 ? (C = (b = t.value) == null ? void 0 : b.global) == null ? void 0 : C[c] : f : f;
    }
  }), o = H();
  We(() => {
    if (a.value) {
      const s = Object.entries(a.value).filter((c) => {
        let [f] = c;
        return f.startsWith(f[0].toUpperCase());
      });
      o.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      o.value = void 0;
  });
  function r() {
    const s = po(Ut, l);
    xe(Ut, h(() => o.value ? Me((s == null ? void 0 : s.value) ?? {}, o.value) : s == null ? void 0 : s.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
function Lt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return je("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = E(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(l) {
      return na(l, n);
    }, e.props._as = String, e.setup = function(l, a) {
      const i = zn();
      if (!i.value)
        return e._setup(l, a);
      const {
        props: o,
        provideSubDefaults: r
      } = ko(l, l._as ?? e.name, i), s = e._setup(o, a);
      return r(), s;
    };
  }
  return e;
}
function N() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? Lt : Tt)(n);
}
function Hn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return N()({
    name: t ?? Bt(Ql(e.replace(/__/g, "-"))),
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
        return st(l.tag, {
          class: [e, l.class],
          style: l.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function va(e) {
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
const qt = "cubic-bezier(0.4, 0, 0.2, 1)", xo = "cubic-bezier(0.0, 0, 0.2, 1)", _o = "cubic-bezier(0.4, 0, 1, 1)";
function ma(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? Vo(e) : jn(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Kt(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (jn(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function jn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Vo(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function Io(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function K(e) {
  const n = ue("useRender");
  n.render = e;
}
function se(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (m) => m, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (m) => m;
  const i = ue("useProxiedModel"), o = z(e[n] !== void 0 ? e[n] : t), r = Ke(n), c = r !== n ? h(() => {
    var m, v, d, y;
    return e[n], !!(((m = i.vnode.props) != null && m.hasOwnProperty(n) || (v = i.vnode.props) != null && v.hasOwnProperty(r)) && ((d = i.vnode.props) != null && d.hasOwnProperty(`onUpdate:${n}`) || (y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${r}`)));
  }) : h(() => {
    var m, v;
    return e[n], !!((m = i.vnode.props) != null && m.hasOwnProperty(n) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${n}`)));
  });
  Ge(() => !c.value, () => {
    q(() => e[n], (m) => {
      o.value = m;
    });
  });
  const f = h({
    get() {
      const m = e[n];
      return l(c.value ? m : o.value);
    },
    set(m) {
      const v = a(m), d = ke(c.value ? e[n] : o.value);
      d === v || l(d) === m || (o.value = v, i == null || i.emit(`update:${n}`, v));
    }
  });
  return Object.defineProperty(f, "externalValue", {
    get: () => c.value ? e[n] : o.value
  }), f;
}
const ga = Symbol.for("vuetify:locale");
function Wn() {
  const e = ve(ga);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function ze() {
  const e = ve(ga);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const en = ["sm", "md", "lg", "xl", "xxl"], Ao = Symbol.for("vuetify:display"), Po = E({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function Ot() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be();
  const t = ve(Ao);
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
const Eo = Symbol.for("vuetify:goto");
function Bo() {
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
function To(e) {
  return Gn(e) ?? (document.scrollingElement || document.body);
}
function Gn(e) {
  return typeof e == "string" ? document.querySelector(e) : ta(e);
}
function dn(e, n, t) {
  if (typeof e == "number")
    return n && t ? -e : e;
  let l = Gn(e), a = 0;
  for (; l; )
    a += n ? l.offsetLeft : l.offsetTop, l = l.offsetParent;
  return a;
}
async function Vl(e, n, t, l) {
  const a = t ? "scrollLeft" : "scrollTop", i = Me((l == null ? void 0 : l.options) ?? Bo(), n), o = l == null ? void 0 : l.rtl.value, r = (typeof e == "number" ? e : Gn(e)) ?? 0, s = i.container === "parent" && r instanceof HTMLElement ? r.parentElement : To(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c)
    throw new TypeError(`Easing function "${i.easing}" not found.`);
  let f;
  if (typeof r == "number")
    f = dn(r, t, o);
  else if (f = dn(r, t, o) - dn(s, t, o), i.layout) {
    const y = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    y && (f -= parseInt(y, 10));
  }
  f += i.offset, f = Lo(s, f, !!o, !!t);
  const m = s[a] ?? 0;
  if (f === m)
    return Promise.resolve(f);
  const v = performance.now();
  return new Promise((d) => requestAnimationFrame(function y(g) {
    const C = (g - v) / i.duration, x = Math.floor(m + (f - m) * c(De(C, 0, 1)));
    if (s[a] = x, C >= 1 && Math.abs(x - s[a]) < 10)
      return d(f);
    if (C > 2)
      return je("Scroll target is not reachable"), d(s[a]);
    requestAnimationFrame(y);
  }));
}
function ya() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = ve(Eo), {
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
    return Vl(i, Me(e, o), !1, l);
  }
  return a.horizontal = async (i, o) => Vl(i, Me(e, o), !0, l), a;
}
function Lo(e, n, t, l) {
  const {
    scrollWidth: a,
    scrollHeight: i
  } = e, [o, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let s, c;
  return l ? t ? (s = -(a - o), c = 0) : (s = 0, c = a - o) : (s = 0, c = i + -r), Math.max(Math.min(n, c), s);
}
const le = [String, Function, Object, Array], Oo = Symbol.for("vuetify:icons"), tn = E({
  icon: {
    type: le
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Il = N()({
  name: "VComponentIcon",
  props: tn(),
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
}), $o = Lt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: tn(),
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
  props: tn(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
Lt({
  name: "VClassIcon",
  props: tn(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
});
const Fo = (e) => {
  const n = ve(Oo);
  if (!n)
    throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: h(() => {
      var s;
      const l = ge(e);
      if (!l)
        return {
          component: Il
        };
      let a = l;
      if (typeof a == "string" && (a = a.trim(), a.startsWith("$") && (a = (s = n.aliases) == null ? void 0 : s[a.slice(1)])), a || je(`Could not find aliased icon "${l}"`), Array.isArray(a))
        return {
          component: $o,
          icon: a
        };
      if (typeof a != "string")
        return {
          component: Il,
          icon: a
        };
      const i = Object.keys(n.sets).find((c) => typeof a == "string" && a.startsWith(`${c}:`)), o = i ? a.slice(i.length + 1) : a;
      return {
        component: n.sets[i ?? n.defaultSet].component,
        icon: o
      };
    })
  };
}, Al = Symbol.for("vuetify:theme"), me = E({
  theme: String
}, "theme");
function be(e) {
  ue("provideTheme");
  const n = ve(Al, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = h(() => e.theme ?? n.name.value), l = h(() => n.themes.value[t.value]), a = h(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = {
    ...n,
    name: t,
    current: l,
    themeClasses: a
  };
  return xe(Al, i), i;
}
function Vt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = Cn(), l = z();
  if (fe) {
    const a = new ResizeObserver((i) => {
      e == null || e(i, a), i.length && (n === "content" ? l.value = i[0].contentRect : l.value = i[0].target.getBoundingClientRect());
    });
    Ae(() => {
      a.disconnect();
    }), q(() => t.el, (i, o) => {
      o && (a.unobserve(o), l.value = void 0), i && a.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: Tn(l)
  };
}
const Ro = Symbol.for("vuetify:layout"), Mo = Symbol.for("vuetify:layout-item"), ha = E({
  name: {
    type: String
  },
  order: {
    type: [Number, String],
    default: 0
  },
  absolute: Boolean
}, "layout-item");
function ba(e) {
  const n = ve(Ro);
  if (!n)
    throw new Error("[Vuetify] Could not find injected layout");
  const t = e.id ?? `layout-item-${Te()}`, l = ue("useLayoutItem");
  xe(Mo, {
    id: t
  });
  const a = H(!1);
  Hi(() => a.value = !0), ji(() => a.value = !1);
  const i = ye(), {
    layoutItemStyles: o,
    layoutItemScrimStyles: r
  } = n.register(l, {
    ...e,
    active: h(() => a.value ? !1 : e.active.value),
    id: t
  });
  return Ae(() => n.unregister(t)), {
    layoutItemStyles: o,
    layoutRect: n.layoutRect,
    layoutItemScrimStyles: r,
    layoutIsReady: i
  };
}
const re = E({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), No = E({
  text: String,
  ...X(),
  ...re()
}, "VToolbarTitle"), Do = N()({
  name: "VToolbarTitle",
  props: No(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return K(() => {
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
}), zo = E({
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
    props: zo({
      mode: t,
      origin: n
    }),
    setup(l, a) {
      let {
        slots: i
      } = a;
      const o = {
        onBeforeEnter(r) {
          l.origin && (r.style.transformOrigin = l.origin);
        },
        onLeave(r) {
          if (l.leaveAbsolute) {
            const {
              offsetTop: s,
              offsetLeft: c,
              offsetWidth: f,
              offsetHeight: m
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${s}px`, r.style.left = `${c}px`, r.style.width = `${f}px`, r.style.height = `${m}px`;
          }
          l.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (l.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: s,
              top: c,
              left: f,
              width: m,
              height: v
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = s || "", r.style.top = c || "", r.style.left = f || "", r.style.width = m || "", r.style.height = v || "";
          }
        }
      };
      return () => {
        const r = l.group ? Ln : Xe;
        return st(r, {
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
      const o = l.group ? Ln : Xe;
      return () => st(o, {
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
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", l = Ql(`offset-${t}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [t]: o.style[t]
      };
    },
    onEnter(o) {
      const r = o._initialStyle;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const s = `${o[l]}px`;
      o.style[t] = "0", o.offsetHeight, o.style.transition = r.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[t] = s;
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
    const r = o._initialStyle[t];
    o.style.overflow = o._initialStyle.overflow, r != null && (o.style[t] = r), delete o._initialStyle;
  }
}
const Ho = E({
  target: [Object, Array]
}, "v-dialog-transition"), Un = N()({
  name: "VDialogTransition",
  props: Ho(),
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
          y: r,
          sx: s,
          sy: c,
          speed: f
        } = El(e.target, a), m = it(a, [{
          transform: `translate(${o}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * f,
          easing: xo
        });
        (v = Pl(a)) == null || v.forEach((d) => {
          it(d, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * f,
            easing: qt
          });
        }), m.finished.then(() => i());
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
          y: r,
          sx: s,
          sy: c,
          speed: f
        } = El(e.target, a);
        it(a, [{}, {
          transform: `translate(${o}px, ${r}px) scale(${s}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * f,
          easing: _o
        }).finished.then(() => i()), (v = Pl(a)) == null || v.forEach((d) => {
          it(d, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * f,
            easing: qt
          });
        });
      },
      onAfterLeave(a) {
        a.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? u(Xe, Q({
      name: "dialog-transition"
    }, l, {
      css: !1
    }), t) : u(Xe, {
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
  const t = ca(e), l = Dn(n), [a, i] = getComputedStyle(n).transformOrigin.split(" ").map((C) => parseFloat(C)), [o, r] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = t.left + t.width / 2;
  o === "left" || r === "left" ? s -= t.width / 2 : (o === "right" || r === "right") && (s += t.width / 2);
  let c = t.top + t.height / 2;
  o === "top" || r === "top" ? c -= t.height / 2 : (o === "bottom" || r === "bottom") && (c += t.height / 2);
  const f = t.width / l.width, m = t.height / l.height, v = Math.max(1, f, m), d = f / v || 0, y = m / v || 0, g = l.width * l.height / (window.innerWidth * window.innerHeight), b = g > 0.12 ? Math.min(1.5, (g - 0.12) * 10 + 1) : 1;
  return {
    x: s - (a + l.left),
    y: c - (i + l.top),
    sx: d,
    sy: y,
    speed: b
  };
}
_e("fab-transition", "center center", "out-in");
_e("dialog-bottom-transition");
_e("dialog-top-transition");
const Bl = _e("fade-transition");
_e("scale-transition");
_e("scroll-x-transition");
_e("scroll-x-reverse-transition");
_e("scroll-y-transition");
_e("scroll-y-reverse-transition");
_e("slide-x-transition");
_e("slide-x-reverse-transition");
const pa = _e("slide-y-transition");
_e("slide-y-reverse-transition");
const wa = Sa("expand-transition", Ca()), ka = Sa("expand-x-transition", Ca("", !0)), jo = E({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), de = N(!1)({
  name: "VDefaultsProvider",
  props: jo(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      defaults: l,
      disabled: a,
      reset: i,
      root: o,
      scoped: r
    } = Xl(e);
    return ft(l, {
      reset: i,
      root: o,
      scoped: r,
      disabled: a
    }), () => {
      var s;
      return (s = t.default) == null ? void 0 : s.call(t);
    };
  }
}), et = E({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function tt(e) {
  return {
    dimensionStyles: h(() => {
      const t = {}, l = G(e.height), a = G(e.maxHeight), i = G(e.maxWidth), o = G(e.minHeight), r = G(e.minWidth), s = G(e.width);
      return l != null && (t.height = l), a != null && (t.maxHeight = a), i != null && (t.maxWidth = i), o != null && (t.minHeight = o), r != null && (t.minWidth = r), s != null && (t.width = s), t;
    })
  };
}
function Wo(e) {
  return {
    aspectStyles: h(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const xa = E({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...X(),
  ...et()
}, "VResponsive"), Tl = N()({
  name: "VResponsive",
  props: xa(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: l
    } = Wo(e), {
      dimensionStyles: a
    } = tt(e);
    return K(() => {
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
function qn(e) {
  return Nn(() => {
    const n = [], t = {};
    if (e.value.background)
      if (wn(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && yo(e.value.background)) {
          const l = pt(e.value.background);
          if (l.a == null || l.a === 1) {
            const a = Co(l);
            t.color = a, t.caretColor = a;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    return e.value.text && (wn(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), {
      colorClasses: n,
      colorStyles: t
    };
  });
}
function nt(e, n) {
  const t = h(() => ({
    text: ot(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = qn(t);
  return {
    textColorClasses: l,
    textColorStyles: a
  };
}
function Ee(e, n) {
  const t = h(() => ({
    background: ot(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: l,
    colorStyles: a
  } = qn(t);
  return {
    backgroundColorClasses: l,
    backgroundColorStyles: a
  };
}
const Le = E({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Oe(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be();
  return {
    roundedClasses: h(() => {
      const l = ot(e) ? e.value : e.rounded, a = ot(e) ? e.value : e.tile, i = [];
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
}, "transition"), He = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: l,
    disabled: a,
    group: i,
    ...o
  } = e, {
    component: r = i ? Ln : Xe,
    ...s
  } = typeof l == "object" ? l : {};
  return st(r, Q(typeof l == "string" ? {
    name: a ? "" : l
  } : s, typeof l == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: a,
    group: i
  }).filter((c) => {
    let [f, m] = c;
    return m !== void 0;
  })), o), t);
};
function Go(e, n) {
  if (!Rn)
    return;
  const t = n.modifiers || {}, l = n.value, {
    handler: a,
    options: i
  } = typeof l == "object" ? l : {
    handler: l,
    options: {}
  }, o = new IntersectionObserver(function() {
    var m;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const c = (m = e._observe) == null ? void 0 : m[n.instance.$.uid];
    if (!c)
      return;
    const f = r.some((v) => v.isIntersecting);
    a && (!t.quiet || c.init) && (!t.once || f || c.init) && a(f, r, s), f && t.once ? _a(e, n) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function _a(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const Va = {
  mounted: Go,
  unmounted: _a
}, Uo = E({
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
  ...xa(),
  ...X(),
  ...Le(),
  ...$t()
}, "VImg"), Kn = N()({
  name: "VImg",
  directives: {
    intersect: Va
  },
  props: Uo(),
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
    } = Ee(D(e, "color")), {
      roundedClasses: o
    } = Oe(e), r = ue("VImg"), s = H(""), c = z(), f = H(e.eager ? "loading" : "idle"), m = H(), v = H(), d = h(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), y = h(() => d.value.aspect || m.value / v.value || 0);
    q(() => e.src, () => {
      g(f.value !== "idle");
    }), q(y, (k, A) => {
      !k && A && c.value && _(c.value);
    }), Jl(() => g());
    function g(k) {
      if (!(e.eager && k) && !(Rn && !k && !e.eager)) {
        if (f.value = "loading", d.value.lazySrc) {
          const A = new Image();
          A.src = d.value.lazySrc, _(A, null);
        }
        d.value.src && ye(() => {
          var A;
          t("loadstart", ((A = c.value) == null ? void 0 : A.currentSrc) || d.value.src), setTimeout(() => {
            var T;
            if (!r.isUnmounted)
              if ((T = c.value) != null && T.complete) {
                if (c.value.naturalWidth || C(), f.value === "error")
                  return;
                y.value || _(c.value, null), f.value === "loading" && b();
              } else
                y.value || _(c.value), x();
          });
        });
      }
    }
    function b() {
      var k;
      r.isUnmounted || (x(), _(c.value), f.value = "loaded", t("load", ((k = c.value) == null ? void 0 : k.currentSrc) || d.value.src));
    }
    function C() {
      var k;
      r.isUnmounted || (f.value = "error", t("error", ((k = c.value) == null ? void 0 : k.currentSrc) || d.value.src));
    }
    function x() {
      const k = c.value;
      k && (s.value = k.currentSrc || k.src);
    }
    let w = -1;
    Ae(() => {
      clearTimeout(w);
    });
    function _(k) {
      let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const T = () => {
        if (clearTimeout(w), r.isUnmounted)
          return;
        const {
          naturalHeight: M,
          naturalWidth: Y
        } = k;
        M || Y ? (m.value = Y, v.value = M) : !k.complete && f.value === "loading" && A != null ? w = window.setTimeout(T, A) : (k.currentSrc.endsWith(".svg") || k.currentSrc.startsWith("data:image/svg+xml")) && (m.value = 1, v.value = 1);
      };
      T();
    }
    const L = h(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), B = () => {
      var T;
      if (!d.value.src || f.value === "idle")
        return null;
      const k = u("img", {
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
        onError: C
      }, null), A = (T = l.sources) == null ? void 0 : T.call(l);
      return u(He, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Ve(A ? u("picture", {
          class: "v-img__picture"
        }, [A, k]) : k, [[ut, f.value === "loaded"]])]
      });
    }, S = () => u(He, {
      transition: e.transition
    }, {
      default: () => [d.value.lazySrc && f.value !== "loaded" && u("img", {
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
    }), F = () => l.placeholder ? u(He, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(f.value === "loading" || f.value === "error" && !l.error) && u("div", {
        class: "v-img__placeholder"
      }, [l.placeholder()])]
    }) : null, j = () => l.error ? u(He, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [f.value === "error" && u("div", {
        class: "v-img__error"
      }, [l.error()])]
    }) : null, W = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, O = H(!1);
    {
      const k = q(y, (A) => {
        A && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            O.value = !0;
          });
        }), k());
      });
    }
    return K(() => {
      const k = Tl.filterProps(e);
      return Ve(u(Tl, Q({
        class: ["v-img", {
          "v-img--booting": !O.value
        }, a.value, o.value, e.class],
        style: [{
          width: G(e.width === "auto" ? m.value : e.width)
        }, i.value, e.style]
      }, k, {
        aspectRatio: y.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(ie, null, [u(B, null, null), u(S, null, null), u(W, null, null), u(F, null, null), u(j, null, null)]),
        default: l.default
      }), [[Je("intersect"), {
        handler: g,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: s,
      image: c,
      state: f,
      naturalWidth: m,
      naturalHeight: v
    };
  }
}), vt = E({
  border: [Boolean, Number, String]
}, "border");
function mt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be();
  return {
    borderClasses: h(() => {
      const l = ot(e) ? e.value : e.border, a = [];
      if (l === !0 || l === "")
        a.push(`${n}--border`);
      else if (typeof l == "string" || l === 0)
        for (const i of String(l).split(" "))
          a.push(`border-${i}`);
      return a;
    })
  };
}
const gt = E({
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
function yt(e) {
  return {
    elevationClasses: h(() => {
      const t = ot(e) ? e.value : e.elevation, l = [];
      return t == null || l.push(`elevation-${t}`), l;
    })
  };
}
const qo = [null, "prominent", "default", "comfortable", "compact"], Ia = E({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (e) => qo.includes(e)
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
  ...vt(),
  ...X(),
  ...gt(),
  ...Le(),
  ...re({
    tag: "header"
  }),
  ...me()
}, "VToolbar"), Ll = N()({
  name: "VToolbar",
  props: Ia(),
  setup(e, n) {
    var d;
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: a
    } = Ee(D(e, "color")), {
      borderClasses: i
    } = mt(e), {
      elevationClasses: o
    } = yt(e), {
      roundedClasses: r
    } = Oe(e), {
      themeClasses: s
    } = be(e), {
      rtlClasses: c
    } = ze(), f = H(!!(e.extended || (d = t.extension) != null && d.call(t))), m = h(() => parseInt(Number(e.height) + (e.density === "prominent" ? Number(e.height) : 0) - (e.density === "comfortable" ? 8 : 0) - (e.density === "compact" ? 16 : 0), 10)), v = h(() => f.value ? parseInt(Number(e.extensionHeight) + (e.density === "prominent" ? Number(e.extensionHeight) : 0) - (e.density === "comfortable" ? 4 : 0) - (e.density === "compact" ? 8 : 0), 10) : 0);
    return ft({
      VBtn: {
        variant: "text"
      }
    }), K(() => {
      var C;
      const y = !!(e.title || t.title), g = !!(t.image || e.image), b = (C = t.extension) == null ? void 0 : C.call(t);
      return f.value = !!(e.extended || b), u(e.tag, {
        class: ["v-toolbar", {
          "v-toolbar--absolute": e.absolute,
          "v-toolbar--collapse": e.collapse,
          "v-toolbar--flat": e.flat,
          "v-toolbar--floating": e.floating,
          [`v-toolbar--density-${e.density}`]: !0
        }, l.value, i.value, o.value, r.value, s.value, c.value, e.class],
        style: [a.value, e.style]
      }, {
        default: () => [g && u("div", {
          key: "image",
          class: "v-toolbar__image"
        }, [t.image ? u(de, {
          key: "image-defaults",
          disabled: !e.image,
          defaults: {
            VImg: {
              cover: !0,
              src: e.image
            }
          }
        }, t.image) : u(Kn, {
          key: "image-img",
          cover: !0,
          src: e.image
        }, null)]), u(de, {
          defaults: {
            VTabs: {
              height: G(m.value)
            }
          }
        }, {
          default: () => {
            var x, w, _;
            return [u("div", {
              class: "v-toolbar__content",
              style: {
                height: G(m.value)
              }
            }, [t.prepend && u("div", {
              class: "v-toolbar__prepend"
            }, [(x = t.prepend) == null ? void 0 : x.call(t)]), y && u(Do, {
              key: "title",
              text: e.title
            }, {
              text: t.title
            }), (w = t.default) == null ? void 0 : w.call(t), t.append && u("div", {
              class: "v-toolbar__append"
            }, [(_ = t.append) == null ? void 0 : _.call(t)])])];
          }
        }), u(de, {
          defaults: {
            VTabs: {
              height: G(v.value)
            }
          }
        }, {
          default: () => [u(wa, null, {
            default: () => [f.value && u("div", {
              class: "v-toolbar__extension",
              style: {
                height: G(v.value)
              }
            }, [b])]
          })]
        })]
      });
    }), {
      contentHeight: m,
      extensionHeight: v
    };
  }
}), Ko = E({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function Yo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll: t
  } = n;
  let l = 0;
  const a = z(null), i = H(0), o = H(0), r = H(0), s = H(!1), c = H(!1), f = h(() => Number(e.scrollThreshold)), m = h(() => De((f.value - i.value) / f.value || 0)), v = () => {
    const d = a.value;
    !d || t && !t.value || (l = i.value, i.value = "window" in d ? d.pageYOffset : d.scrollTop, c.value = i.value < l, r.value = Math.abs(i.value - f.value));
  };
  return q(c, () => {
    o.value = o.value || i.value;
  }), q(s, () => {
    o.value = 0;
  }), Ze(() => {
    q(() => e.scrollTarget, (d) => {
      var g;
      const y = d ? document.querySelector(d) : window;
      if (!y) {
        je(`Unable to locate element with identifier ${d}`);
        return;
      }
      y !== a.value && ((g = a.value) == null || g.removeEventListener("scroll", v), a.value = y, a.value.addEventListener("scroll", v, {
        passive: !0
      }));
    }, {
      immediate: !0
    });
  }), Ae(() => {
    var d;
    (d = a.value) == null || d.removeEventListener("scroll", v);
  }), t && q(t, v, {
    immediate: !0
  }), {
    scrollThreshold: f,
    currentScroll: i,
    currentThreshold: r,
    isScrollActive: s,
    scrollRatio: m,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp: c,
    savedScroll: o
  };
}
function Aa() {
  const e = H(!1);
  return Ze(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: h(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: Tn(e)
  };
}
const Xo = E({
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
  ...Ia(),
  ...ha(),
  ...Ko(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar"), Qo = N()({
  name: "VAppBar",
  props: Xo(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = z(), a = se(e, "modelValue"), i = h(() => {
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
    }), o = h(() => {
      const w = i.value;
      return w.hide || w.fullyHide || w.inverted || w.collapse || w.elevate || w.fadeImage || // behavior.shrink ||
      !a.value;
    }), {
      currentScroll: r,
      scrollThreshold: s,
      isScrollingUp: c,
      scrollRatio: f
    } = Yo(e, {
      canScroll: o
    }), m = h(() => i.value.hide || i.value.fullyHide), v = h(() => e.collapse || i.value.collapse && (i.value.inverted ? f.value > 0 : f.value === 0)), d = h(() => e.flat || i.value.fullyHide && !a.value || i.value.elevate && (i.value.inverted ? r.value > 0 : r.value === 0)), y = h(() => i.value.fadeImage ? i.value.inverted ? 1 - f.value : f.value : void 0), g = h(() => {
      var L, B;
      const w = Number(((L = l.value) == null ? void 0 : L.contentHeight) ?? e.height), _ = Number(((B = l.value) == null ? void 0 : B.extensionHeight) ?? 0);
      return m.value ? r.value < s.value || i.value.fullyHide ? w + _ : w : w + _;
    });
    Ge(h(() => !!e.scrollBehavior), () => {
      We(() => {
        m.value ? i.value.inverted ? a.value = r.value > s.value : a.value = c.value || r.value < s.value : a.value = !0;
      });
    });
    const {
      ssrBootStyles: b
    } = Aa(), {
      layoutItemStyles: C,
      layoutIsReady: x
    } = ba({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: D(e, "location"),
      layoutSize: g,
      elementSize: H(void 0),
      active: a,
      absolute: D(e, "absolute")
    });
    return K(() => {
      const w = Ll.filterProps(e);
      return u(Ll, Q({
        ref: l,
        class: ["v-app-bar", {
          "v-app-bar--bottom": e.location === "bottom"
        }, e.class],
        style: [{
          ...C.value,
          "--v-toolbar-image-opacity": y.value,
          height: void 0,
          ...b.value
        }, e.style]
      }, w, {
        collapse: v.value,
        flat: d.value
      }), t);
    }), x;
  }
}), Jo = [null, "default", "comfortable", "compact"], Ue = E({
  density: {
    type: String,
    default: "default",
    validator: (e) => Jo.includes(e)
  }
}, "density");
function lt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be();
  return {
    densityClasses: h(() => `${n}--density-${e.density}`)
  };
}
const Zo = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function nn(e, n) {
  return u(ie, null, [e && u("span", {
    key: "overlay",
    class: `${n}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${n}__underlay`
  }, null)]);
}
const ht = E({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Zo.includes(e)
  }
}, "variant");
function ln(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be();
  const t = h(() => {
    const {
      variant: i
    } = ge(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: l,
    colorStyles: a
  } = qn(h(() => {
    const {
      variant: i,
      color: o
    } = ge(e);
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
const Pa = E({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), er = E({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function tr(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const l = ue("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = Te();
  xe(Symbol.for(`${n.description}:id`), a);
  const i = ve(n, null);
  if (!i) {
    if (!t)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const o = D(e, "value"), r = h(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: a,
    value: o,
    disabled: r
  }, l), Ae(() => {
    i.unregister(a);
  });
  const s = h(() => i.isSelected(a)), c = h(() => i.items.value[0].id === a), f = h(() => i.items.value[i.items.value.length - 1].id === a), m = h(() => s.value && [i.selectedClass.value, e.selectedClass]);
  return q(s, (v) => {
    l.emit("group:selected", {
      value: v
    });
  }, {
    flush: "sync"
  }), {
    id: a,
    isSelected: s,
    isFirst: c,
    isLast: f,
    toggle: () => i.select(a, !s.value),
    select: (v) => i.select(a, v),
    selectedClass: m,
    value: o,
    disabled: r,
    group: i
  };
}
function Ea(e, n) {
  let t = !1;
  const l = Jt([]), a = se(e, "modelValue", [], (v) => v == null ? [] : Ba(l, Ie(v)), (v) => {
    const d = lr(l, v);
    return e.multiple ? d : d[0];
  }), i = ue("useGroup");
  function o(v, d) {
    const y = v, g = Symbol.for(`${n.description}:id`), C = Ct(g, i == null ? void 0 : i.vnode).indexOf(d);
    ge(y.value) == null && (y.value = C, y.useIndexAsValue = !0), C > -1 ? l.splice(C, 0, y) : l.push(y);
  }
  function r(v) {
    if (t)
      return;
    s();
    const d = l.findIndex((y) => y.id === v);
    l.splice(d, 1);
  }
  function s() {
    const v = l.find((d) => !d.disabled);
    v && e.mandatory === "force" && !a.value.length && (a.value = [v.id]);
  }
  Ze(() => {
    s();
  }), Ae(() => {
    t = !0;
  }), Wi(() => {
    for (let v = 0; v < l.length; v++)
      l[v].useIndexAsValue && (l[v].value = v);
  });
  function c(v, d) {
    const y = l.find((g) => g.id === v);
    if (!(d && (y != null && y.disabled)))
      if (e.multiple) {
        const g = a.value.slice(), b = g.findIndex((x) => x === v), C = ~b;
        if (d = d ?? !C, C && e.mandatory && g.length <= 1 || !C && e.max != null && g.length + 1 > e.max)
          return;
        b < 0 && d ? g.push(v) : b >= 0 && !d && g.splice(b, 1), a.value = g;
      } else {
        const g = a.value.includes(v);
        if (e.mandatory && g)
          return;
        a.value = d ?? !g ? [v] : [];
      }
  }
  function f(v) {
    if (e.multiple && je('This method is not supported when using "multiple" prop'), a.value.length) {
      const d = a.value[0], y = l.findIndex((C) => C.id === d);
      let g = (y + v) % l.length, b = l[g];
      for (; b.disabled && g !== y; )
        g = (g + v) % l.length, b = l[g];
      if (b.disabled)
        return;
      a.value = [l[g].id];
    } else {
      const d = l.find((y) => !y.disabled);
      d && (a.value = [d.id]);
    }
  }
  const m = {
    register: o,
    unregister: r,
    selected: a,
    select: c,
    disabled: D(e, "disabled"),
    prev: () => f(l.length - 1),
    next: () => f(1),
    isSelected: (v) => a.value.includes(v),
    selectedClass: h(() => e.selectedClass),
    items: h(() => l),
    getItemIndex: (v) => nr(l, v)
  };
  return xe(n, m), m;
}
function nr(e, n) {
  const t = Ba(e, [n]);
  return t.length ? e.findIndex((l) => l.id === t[0]) : -1;
}
function Ba(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.find((o) => ct(l, o.value)), i = e[l];
    (a == null ? void 0 : a.value) != null ? t.push(a.id) : i != null && t.push(i.id);
  }), t;
}
function lr(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.findIndex((i) => i.id === l);
    if (~a) {
      const i = e[a];
      t.push(i.value != null ? i.value : a);
    }
  }), t;
}
const ar = ["x-small", "small", "default", "large", "x-large"], Yn = E({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Xn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be();
  return Nn(() => {
    let t, l;
    return jt(ar, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = {
      width: G(e.size),
      height: G(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: l
    };
  });
}
const ir = E({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: le,
  ...X(),
  ...Yn(),
  ...re({
    tag: "i"
  }),
  ...me()
}, "VIcon"), ae = N()({
  name: "VIcon",
  props: ir(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const a = z(), {
      themeClasses: i
    } = be(e), {
      iconData: o
    } = Fo(h(() => a.value || e.icon)), {
      sizeClasses: r
    } = Xn(e), {
      textColorClasses: s,
      textColorStyles: c
    } = nt(D(e, "color"));
    return K(() => {
      var v, d;
      const f = (v = l.default) == null ? void 0 : v.call(l);
      f && (a.value = (d = ia(f).filter((y) => y.type === Gi && y.children && typeof y.children == "string")[0]) == null ? void 0 : d.children);
      const m = !!(t.onClick || t.onClickOnce);
      return u(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", i.value, r.value, s.value, {
          "v-icon--clickable": m,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [r.value ? void 0 : {
          fontSize: G(e.size),
          height: G(e.size),
          width: G(e.size)
        }, c.value, e.style],
        role: m ? "button" : void 0,
        "aria-hidden": !m,
        tabindex: m ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [f]
      });
    }), {};
  }
});
function or(e, n) {
  const t = z(), l = H(!1);
  if (Rn) {
    const a = new IntersectionObserver((i) => {
      l.value = !!i.find((o) => o.isIntersecting);
    }, n);
    Ae(() => {
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
const Ol = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ta = E({
  location: String
}, "location");
function La(e) {
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
      } = pn(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
      function r(c) {
        return t ? t(c) : 0;
      }
      const s = {};
      return i !== "center" && (n ? s[Ol[i]] = `calc(100% - ${r(i)}px)` : s[i] = 0), o !== "center" ? n ? s[Ol[o]] = `calc(100% - ${r(o)}px)` : s[o] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", s.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), s;
    })
  };
}
const rr = E({
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
  ...Ta({
    location: "top"
  }),
  ...Le(),
  ...re(),
  ...me()
}, "VProgressLinear"), sr = N()({
  name: "VProgressLinear",
  props: rr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = se(e, "modelValue"), {
      isRtl: a,
      rtlClasses: i
    } = ze(), {
      themeClasses: o
    } = be(e), {
      locationStyles: r
    } = La(e), {
      textColorClasses: s,
      textColorStyles: c
    } = nt(e, "color"), {
      backgroundColorClasses: f,
      backgroundColorStyles: m
    } = Ee(h(() => e.bgColor || e.color)), {
      backgroundColorClasses: v,
      backgroundColorStyles: d
    } = Ee(h(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: y,
      backgroundColorStyles: g
    } = Ee(e, "color"), {
      roundedClasses: b
    } = Oe(e), {
      intersectionRef: C,
      isIntersecting: x
    } = or(), w = h(() => parseFloat(e.max)), _ = h(() => parseFloat(e.height)), L = h(() => De(parseFloat(e.bufferValue) / w.value * 100, 0, 100)), B = h(() => De(parseFloat(l.value) / w.value * 100, 0, 100)), S = h(() => a.value !== e.reverse), F = h(() => e.indeterminate ? "fade-transition" : "slide-x-transition");
    function j(W) {
      if (!C.value)
        return;
      const {
        left: O,
        right: k,
        width: A
      } = C.value.getBoundingClientRect(), T = S.value ? A - W.clientX + (k - A) : W.clientX - O;
      l.value = Math.round(T / A * w.value);
    }
    return K(() => u(e.tag, {
      ref: C,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && x.value,
        "v-progress-linear--reverse": S.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, b.value, o.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? G(_.value) : 0,
        "--v-progress-linear-height": G(_.value),
        ...e.absolute ? r.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : B.value,
      onClick: e.clickable && j
    }, {
      default: () => [e.stream && u("div", {
        key: "stream",
        class: ["v-progress-linear__stream", s.value],
        style: {
          ...c.value,
          [S.value ? "left" : "right"]: G(-_.value),
          borderTop: `${G(_.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${G(_.value / 4)})`,
          width: G(100 - L.value, "%"),
          "--v-progress-linear-stream-to": G(_.value * (S.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", f.value],
        style: [m.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), u("div", {
        class: ["v-progress-linear__buffer", v.value],
        style: [d.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: G(L.value, "%")
        }]
      }, null), u(Xe, {
        name: F.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((W) => u("div", {
          key: W,
          class: ["v-progress-linear__indeterminate", W, y.value],
          style: g.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", y.value],
          style: [g.value, {
            width: G(B.value, "%")
          }]
        }, null)]
      }), t.default && u("div", {
        class: "v-progress-linear__content"
      }, [t.default({
        value: B.value,
        buffer: L.value
      })])]
    })), {};
  }
}), Oa = E({
  loading: [Boolean, String]
}, "loader");
function $a(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be();
  return {
    loaderClasses: h(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function Fa(e, n) {
  var l;
  let {
    slots: t
  } = n;
  return u("div", {
    class: `${e.name}__loader`
  }, [((l = t.default) == null ? void 0 : l.call(t, {
    color: e.color,
    isActive: e.active
  })) || u(sr, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const ur = ["static", "relative", "fixed", "absolute", "sticky"], cr = E({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => ur.includes(e)
    )
  }
}, "position");
function dr(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be();
  return {
    positionClasses: h(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
function fr() {
  const e = ue("useRoute");
  return h(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function vr() {
  var e, n;
  return (n = (e = ue("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function Qn(e, n) {
  var c, f;
  const t = Ui("RouterLink"), l = h(() => !!(e.href || e.to)), a = h(() => (l == null ? void 0 : l.value) || dl(n, "click") || dl(e, "click"));
  if (typeof t == "string" || !("useLink" in t))
    return {
      isLink: l,
      isClickable: a,
      href: D(e, "href")
    };
  const i = h(() => ({
    ...e,
    to: D(() => e.to || "")
  })), o = t.useLink(i.value), r = h(() => e.to ? o : void 0), s = fr();
  return {
    isLink: l,
    isClickable: a,
    route: (c = r.value) == null ? void 0 : c.route,
    navigate: (f = r.value) == null ? void 0 : f.navigate,
    isActive: h(() => {
      var m, v, d;
      return r.value ? e.exact ? s.value ? ((d = r.value.isExactActive) == null ? void 0 : d.value) && ct(r.value.route.value.query, s.value.query) : ((v = r.value.isExactActive) == null ? void 0 : v.value) ?? !1 : ((m = r.value.isActive) == null ? void 0 : m.value) ?? !1 : !1;
    }),
    href: h(() => {
      var m;
      return e.to ? (m = r.value) == null ? void 0 : m.route.value.href : e.href;
    })
  };
}
const Jn = E({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let fn = !1;
function mr(e, n) {
  let t = !1, l, a;
  fe && (ye(() => {
    window.addEventListener("popstate", i), l = e == null ? void 0 : e.beforeEach((o, r, s) => {
      fn ? t ? n(s) : s() : setTimeout(() => t ? n(s) : s()), fn = !0;
    }), a = e == null ? void 0 : e.afterEach(() => {
      fn = !1;
    });
  }), he(() => {
    window.removeEventListener("popstate", i), l == null || l(), a == null || a();
  }));
  function i(o) {
    var r;
    (r = o.state) != null && r.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
const kn = Symbol("rippleStop"), gr = 80;
function $l(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function xn(e) {
  return e.constructor.name === "TouchEvent";
}
function Ra(e) {
  return e.constructor.name === "KeyboardEvent";
}
const yr = function(e, n) {
  var m;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = 0, a = 0;
  if (!Ra(e)) {
    const v = n.getBoundingClientRect(), d = xn(e) ? e.touches[e.touches.length - 1] : e;
    l = d.clientX - v.left, a = d.clientY - v.top;
  }
  let i = 0, o = 0.3;
  (m = n._ripple) != null && m.circle ? (o = 0.15, i = n.clientWidth / 2, i = t.center ? i : i + Math.sqrt((l - i) ** 2 + (a - i) ** 2) / 4) : i = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2;
  const r = `${(n.clientWidth - i * 2) / 2}px`, s = `${(n.clientHeight - i * 2) / 2}px`, c = t.center ? r : `${l - i}px`, f = t.center ? s : `${a - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: f,
    centerX: r,
    centerY: s
  };
}, Yt = {
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
      x: r,
      y: s,
      centerX: c,
      centerY: f
    } = yr(e, n, t), m = `${i * 2}px`;
    a.className = "v-ripple__animation", a.style.width = m, a.style.height = m, n.appendChild(l);
    const v = window.getComputedStyle(n);
    v && v.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), $l(a, `translate(${r}, ${s}) scale3d(${o},${o},${o})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
      a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), $l(a, `translate(${c}, ${f}) scale3d(1,1,1)`);
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
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = t.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(t.parentNode);
      }, 300);
    }, a);
  }
};
function Ma(e) {
  return typeof e > "u" || !!e;
}
function It(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[kn])) {
    if (e[kn] = !0, xn(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || Ra(e), t._ripple.class && (n.class = t._ripple.class), xn(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        Yt.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, gr);
    } else
      Yt.show(e, t, n);
  }
}
function Fl(e) {
  e[kn] = !0;
}
function pe(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        pe(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), Yt.hide(n);
  }
}
function Na(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let At = !1;
function Da(e) {
  !At && (e.keyCode === sl.enter || e.keyCode === sl.space) && (At = !0, It(e));
}
function za(e) {
  At = !1, pe(e);
}
function Ha(e) {
  At && (At = !1, pe(e));
}
function ja(e, n, t) {
  const {
    value: l,
    modifiers: a
  } = n, i = Ma(l);
  if (i || Yt.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, Sn(l) && l.class && (e._ripple.class = l.class), i && !t) {
    if (a.stop) {
      e.addEventListener("touchstart", Fl, {
        passive: !0
      }), e.addEventListener("mousedown", Fl);
      return;
    }
    e.addEventListener("touchstart", It, {
      passive: !0
    }), e.addEventListener("touchend", pe, {
      passive: !0
    }), e.addEventListener("touchmove", Na, {
      passive: !0
    }), e.addEventListener("touchcancel", pe), e.addEventListener("mousedown", It), e.addEventListener("mouseup", pe), e.addEventListener("mouseleave", pe), e.addEventListener("keydown", Da), e.addEventListener("keyup", za), e.addEventListener("blur", Ha), e.addEventListener("dragstart", pe, {
      passive: !0
    });
  } else
    !i && t && Wa(e);
}
function Wa(e) {
  e.removeEventListener("mousedown", It), e.removeEventListener("touchstart", It), e.removeEventListener("touchend", pe), e.removeEventListener("touchmove", Na), e.removeEventListener("touchcancel", pe), e.removeEventListener("mouseup", pe), e.removeEventListener("mouseleave", pe), e.removeEventListener("keydown", Da), e.removeEventListener("keyup", za), e.removeEventListener("dragstart", pe), e.removeEventListener("blur", Ha);
}
function hr(e, n) {
  ja(e, n, !1);
}
function br(e) {
  delete e._ripple, Wa(e);
}
function Sr(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = Ma(n.oldValue);
  ja(e, n, t);
}
const an = {
  mounted: hr,
  unmounted: br,
  updated: Sr
};
function vn(e, n) {
  return {
    x: e.x + n.x,
    y: e.y + n.y
  };
}
function Cr(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function Rl(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: t,
      align: l
    } = e, a = l === "left" ? 0 : l === "center" ? n.width / 2 : l === "right" ? n.width : l, i = t === "top" ? 0 : t === "bottom" ? n.height : t;
    return vn({
      x: a,
      y: i
    }, n);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: t,
      align: l
    } = e, a = t === "left" ? 0 : t === "right" ? n.width : t, i = l === "top" ? 0 : l === "center" ? n.height / 2 : l === "bottom" ? n.height : l;
    return vn({
      x: a,
      y: i
    }, n);
  }
  return vn({
    x: n.width / 2,
    y: n.height / 2
  }, n);
}
const Ga = {
  static: kr,
  // specific viewport position, usually centered
  connected: _r
  // connected to a certain element
}, pr = E({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Ga
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
function wr(e, n) {
  const t = z({}), l = z();
  fe && Ge(() => !!(n.isActive.value && e.locationStrategy), (i) => {
    var o, r;
    q(() => e.locationStrategy, i), he(() => {
      window.removeEventListener("resize", a), l.value = void 0;
    }), window.addEventListener("resize", a, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? l.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation : l.value = (r = Ga[e.locationStrategy](n, e, t)) == null ? void 0 : r.updateLocation;
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
function kr() {
}
function xr(e, n) {
  n ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const t = Dn(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function _r(e, n, t) {
  (Array.isArray(e.target.value) || Io(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: a,
    preferredOrigin: i
  } = Nn(() => {
    const y = pn(n.location, e.isRtl.value), g = n.origin === "overlap" ? y : n.origin === "auto" ? un(y) : pn(n.origin, e.isRtl.value);
    return y.side === g.side && y.align === cn(g).align ? {
      preferredAnchor: vl(y),
      preferredOrigin: vl(g)
    } : {
      preferredAnchor: y,
      preferredOrigin: g
    };
  }), [o, r, s, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((y) => h(() => {
    const g = parseFloat(n[y]);
    return isNaN(g) ? 1 / 0 : g;
  })), f = h(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const y = n.offset.split(" ").map(parseFloat);
      return y.length < 2 && y.push(0), y;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let m = !1;
  const v = new ResizeObserver(() => {
    m && d();
  });
  q([e.target, e.contentEl], (y, g) => {
    let [b, C] = y, [x, w] = g;
    x && !Array.isArray(x) && v.unobserve(x), b && !Array.isArray(b) && v.observe(b), w && v.unobserve(w), C && v.observe(C);
  }, {
    immediate: !0
  }), he(() => {
    v.disconnect();
  });
  function d() {
    if (m = !1, requestAnimationFrame(() => m = !0), !e.target.value || !e.contentEl.value)
      return;
    const y = ca(e.target.value), g = xr(e.contentEl.value, e.isRtl.value), b = Kt(e.contentEl.value), C = 12;
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (g.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), g.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const x = b.reduce((O, k) => {
      const A = k.getBoundingClientRect(), T = new Ye({
        x: k === document.documentElement ? 0 : A.x,
        y: k === document.documentElement ? 0 : A.y,
        width: k.clientWidth,
        height: k.clientHeight
      });
      return O ? new Ye({
        x: Math.max(O.left, T.left),
        y: Math.max(O.top, T.top),
        width: Math.min(O.right, T.right) - Math.max(O.left, T.left),
        height: Math.min(O.bottom, T.bottom) - Math.max(O.top, T.top)
      }) : T;
    }, void 0);
    x.x += C, x.y += C, x.width -= C * 2, x.height -= C * 2;
    let w = {
      anchor: a.value,
      origin: i.value
    };
    function _(O) {
      const k = new Ye(g), A = Rl(O.anchor, y), T = Rl(O.origin, k);
      let {
        x: M,
        y: Y
      } = Cr(A, T);
      switch (O.anchor.side) {
        case "top":
          Y -= f.value[0];
          break;
        case "bottom":
          Y += f.value[0];
          break;
        case "left":
          M -= f.value[0];
          break;
        case "right":
          M += f.value[0];
          break;
      }
      switch (O.anchor.align) {
        case "top":
          Y -= f.value[1];
          break;
        case "bottom":
          Y += f.value[1];
          break;
        case "left":
          M -= f.value[1];
          break;
        case "right":
          M += f.value[1];
          break;
      }
      return k.x += M, k.y += Y, k.width = Math.min(k.width, s.value), k.height = Math.min(k.height, c.value), {
        overflows: gl(k, x),
        x: M,
        y: Y
      };
    }
    let L = 0, B = 0;
    const S = {
      x: 0,
      y: 0
    }, F = {
      x: !1,
      y: !1
    };
    let j = -1;
    for (; ; ) {
      if (j++ > 10) {
        mo("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: O,
        y: k,
        overflows: A
      } = _(w);
      L += O, B += k, g.x += O, g.y += k;
      {
        const T = ml(w.anchor), M = A.x.before || A.x.after, Y = A.y.before || A.y.after;
        let ee = !1;
        if (["x", "y"].forEach((V) => {
          if (V === "x" && M && !F.x || V === "y" && Y && !F.y) {
            const I = {
              anchor: {
                ...w.anchor
              },
              origin: {
                ...w.origin
              }
            }, p = V === "x" ? T === "y" ? cn : un : T === "y" ? un : cn;
            I.anchor = p(I.anchor), I.origin = p(I.origin);
            const {
              overflows: P
            } = _(I);
            (P[V].before <= A[V].before && P[V].after <= A[V].after || P[V].before + P[V].after < (A[V].before + A[V].after) / 2) && (w = I, ee = F[V] = !0);
          }
        }), ee)
          continue;
      }
      A.x.before && (L += A.x.before, g.x += A.x.before), A.x.after && (L -= A.x.after, g.x -= A.x.after), A.y.before && (B += A.y.before, g.y += A.y.before), A.y.after && (B -= A.y.after, g.y -= A.y.after);
      {
        const T = gl(g, x);
        S.x = x.width - T.x.before - T.x.after, S.y = x.height - T.y.before - T.y.after, L += T.x.before, g.x += T.x.before, B += T.y.before, g.y += T.y.before;
      }
      break;
    }
    const W = ml(w.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`,
      transformOrigin: `${w.origin.side} ${w.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: G(mn(B)),
      left: e.isRtl.value ? void 0 : G(mn(L)),
      right: e.isRtl.value ? G(mn(-L)) : void 0,
      minWidth: G(W === "y" ? Math.min(o.value, y.width) : o.value),
      maxWidth: G(Ml(De(S.x, o.value === 1 / 0 ? 0 : o.value, s.value))),
      maxHeight: G(Ml(De(S.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: S,
      contentBox: g
    };
  }
  return q(() => [a.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => d()), ye(() => {
    const y = d();
    if (!y)
      return;
    const {
      available: g,
      contentBox: b
    } = y;
    b.height > g.y && requestAnimationFrame(() => {
      d(), requestAnimationFrame(() => {
        d();
      });
    });
  }), {
    updateLocation: d
  };
}
function mn(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Ml(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let _n = !0;
const Xt = [];
function Vr(e) {
  !_n || Xt.length ? (Xt.push(e), Vn()) : (_n = !1, e(), Vn());
}
let Nl = -1;
function Vn() {
  cancelAnimationFrame(Nl), Nl = requestAnimationFrame(() => {
    const e = Xt.shift();
    e && e(), Xt.length ? Vn() : _n = !0;
  });
}
const zt = {
  none: null,
  close: Pr,
  block: Er,
  reposition: Br
}, Ir = E({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in zt
  }
}, "VOverlay-scroll-strategies");
function Ar(e, n) {
  if (!fe)
    return;
  let t;
  We(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = Bn(), await new Promise((l) => setTimeout(l)), t.active && t.run(() => {
      var l;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (l = zt[e.scrollStrategy]) == null || l.call(zt, n, e, t);
    }));
  }), he(() => {
    t == null || t.stop();
  });
}
function Pr(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  Ua(e.targetEl.value ?? e.contentEl.value, n);
}
function Er(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, l = [.../* @__PURE__ */ new Set([...Kt(e.targetEl.value, n.contained ? t : void 0), ...Kt(e.contentEl.value, n.contained ? t : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => jn(r) && r)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((r, s) => {
    r.style.setProperty("--v-body-scroll-x", G(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", G(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", G(a)), r.classList.add("v-overlay-scroll-blocked");
  }), he(() => {
    l.forEach((r, s) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), f = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), m = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -f, r.style.scrollBehavior = m;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Br(e, n, t) {
  let l = !1, a = -1, i = -1;
  function o(r) {
    Vr(() => {
      var f, m;
      const s = performance.now();
      (m = (f = e.updateLocation).value) == null || m.call(f, r), l = (performance.now() - s) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    t.run(() => {
      Ua(e.targetEl.value ?? e.contentEl.value, (r) => {
        l ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            o(r);
          });
        })) : o(r);
      });
    });
  }), he(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
}
function Ua(e, n) {
  const t = [document, ...Kt(e)];
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
const In = Symbol.for("vuetify:v-menu"), Tr = E({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function Lr(e, n) {
  let t = () => {
  };
  function l(o) {
    t == null || t();
    const r = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((s) => {
      t = to(r, () => {
        n == null || n(o), s(o);
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
const Or = E({
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
  ...Tr()
}, "VOverlay-activator");
function $r(e, n) {
  let {
    isActive: t,
    isTop: l
  } = n;
  const a = ue("useActivator"), i = z();
  let o = !1, r = !1, s = !0;
  const c = h(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = h(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: m,
    runCloseDelay: v
  } = Lr(e, (S) => {
    S === (e.openOnHover && o || c.value && r) && !(e.openOnHover && t.value && !l.value) && (t.value !== S && (s = !0), t.value = S);
  }), d = z(), y = {
    onClick: (S) => {
      S.stopPropagation(), i.value = S.currentTarget || S.target, t.value || (d.value = [S.clientX, S.clientY]), t.value = !t.value;
    },
    onMouseenter: (S) => {
      var F;
      (F = S.sourceCapabilities) != null && F.firesTouchEvents || (o = !0, i.value = S.currentTarget || S.target, m());
    },
    onMouseleave: (S) => {
      o = !1, v();
    },
    onFocus: (S) => {
      Gt(S.target, ":focus-visible") !== !1 && (r = !0, S.stopPropagation(), i.value = S.currentTarget || S.target, m());
    },
    onBlur: (S) => {
      r = !1, S.stopPropagation(), v();
    }
  }, g = h(() => {
    const S = {};
    return f.value && (S.onClick = y.onClick), e.openOnHover && (S.onMouseenter = y.onMouseenter, S.onMouseleave = y.onMouseleave), c.value && (S.onFocus = y.onFocus, S.onBlur = y.onBlur), S;
  }), b = h(() => {
    const S = {};
    if (e.openOnHover && (S.onMouseenter = () => {
      o = !0, m();
    }, S.onMouseleave = () => {
      o = !1, v();
    }), c.value && (S.onFocusin = () => {
      r = !0, m();
    }, S.onFocusout = () => {
      r = !1, v();
    }), e.closeOnContentClick) {
      const F = ve(In, null);
      S.onClick = () => {
        t.value = !1, F == null || F.closeParents();
      };
    }
    return S;
  }), C = h(() => {
    const S = {};
    return e.openOnHover && (S.onMouseenter = () => {
      s && (o = !0, s = !1, m());
    }, S.onMouseleave = () => {
      o = !1, v();
    }), S;
  });
  q(l, (S) => {
    S && (e.openOnHover && !o && (!c.value || !r) || c.value && !r && (!e.openOnHover || !o)) && (t.value = !1);
  }), q(t, (S) => {
    S || setTimeout(() => {
      d.value = void 0;
    });
  }, {
    flush: "post"
  });
  const x = Cn();
  We(() => {
    x.value && ye(() => {
      i.value = x.el;
    });
  });
  const w = Cn(), _ = h(() => e.target === "cursor" && d.value ? d.value : w.value ? w.el : qa(e.target, a) || i.value), L = h(() => Array.isArray(_.value) ? void 0 : _.value);
  let B;
  return q(() => !!e.activator, (S) => {
    S && fe ? (B = Bn(), B.run(() => {
      Fr(e, a, {
        activatorEl: i,
        activatorEvents: g
      });
    })) : B && B.stop();
  }, {
    flush: "post",
    immediate: !0
  }), he(() => {
    B == null || B.stop();
  }), {
    activatorEl: i,
    activatorRef: x,
    target: _,
    targetEl: L,
    targetRef: w,
    activatorEvents: g,
    contentEvents: b,
    scrimEvents: C
  };
}
function Fr(e, n, t) {
  let {
    activatorEl: l,
    activatorEvents: a
  } = t;
  q(() => e.activator, (s, c) => {
    if (c && s !== c) {
      const f = r(c);
      f && o(f);
    }
    s && ye(() => i());
  }, {
    immediate: !0
  }), q(() => e.activatorProps, () => {
    i();
  }), he(() => {
    o();
  });
  function i() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && ao(s, Q(a.value, c));
  }
  function o() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    s && io(s, Q(a.value, c));
  }
  function r() {
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = qa(s, n);
    return l.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, l.value;
  }
}
function qa(e, n) {
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
function Rr() {
  if (!fe)
    return H(!1);
  const {
    ssr: e
  } = Ot();
  if (e) {
    const n = H(!1);
    return Ze(() => {
      n.value = !0;
    }), n;
  } else
    return H(!0);
}
const Mr = E({
  eager: Boolean
}, "lazy");
function Nr(e, n) {
  const t = H(!1), l = h(() => t.value || e.eager || n.value);
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
function Zn() {
  const n = ue("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const Dl = Symbol.for("vuetify:stack"), bt = Jt([]);
function Dr(e, n, t) {
  const l = ue("useStack"), a = !t, i = ve(Dl, void 0), o = Jt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  xe(Dl, o);
  const r = H(+n.value);
  Ge(e, () => {
    var m;
    const f = (m = bt.at(-1)) == null ? void 0 : m[1];
    r.value = f ? f + 10 : +n.value, a && bt.push([l.uid, r.value]), i == null || i.activeChildren.add(l.uid), he(() => {
      if (a) {
        const v = ke(bt).findIndex((d) => d[0] === l.uid);
        bt.splice(v, 1);
      }
      i == null || i.activeChildren.delete(l.uid);
    });
  });
  const s = H(!0);
  a && We(() => {
    var m;
    const f = ((m = bt.at(-1)) == null ? void 0 : m[0]) === l.uid;
    setTimeout(() => s.value = f);
  });
  const c = h(() => !o.activeChildren.size);
  return {
    globalTop: Tn(s),
    localTop: c,
    stackStyles: h(() => ({
      zIndex: r.value
    }))
  };
}
function zr(e) {
  return {
    teleportTarget: h(() => {
      const t = e.value;
      if (t === !0 || !fe)
        return;
      const l = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (l == null) {
        Zt(`Unable to locate target ${t}`);
        return;
      }
      let a = l.querySelector(":scope > .v-overlay-container");
      return a || (a = document.createElement("div"), a.className = "v-overlay-container", l.appendChild(a)), a;
    })
  };
}
function Hr() {
  return !0;
}
function Ka(e, n, t) {
  if (!e || Ya(e, t) === !1)
    return !1;
  const l = va(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const a = (typeof t.value == "object" && t.value.include || (() => []))();
  return a.push(n), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Ya(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Hr)(e);
}
function jr(e, n, t) {
  const l = typeof t.value == "function" ? t.value : t.value.handler;
  n._clickOutside.lastMousedownWasOutside && Ka(e, n, t) && setTimeout(() => {
    Ya(e, t) && l && l(e);
  }, 0);
}
function zl(e, n) {
  const t = va(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Wr = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (a) => jr(a, e, n), l = (a) => {
      e._clickOutside.lastMousedownWasOutside = Ka(a, e, n);
    };
    zl(e, (a) => {
      a.addEventListener("click", t, !0), a.addEventListener("mousedown", l, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: l
    };
  },
  unmounted(e, n) {
    e._clickOutside && (zl(e, (t) => {
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
function Gr(e) {
  const {
    modelValue: n,
    color: t,
    ...l
  } = e;
  return u(Xe, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", Q({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, l), null)]
  });
}
const el = E({
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
  ...Or(),
  ...X(),
  ...et(),
  ...Mr(),
  ...pr(),
  ...Ir(),
  ...me(),
  ...$t()
}, "VOverlay"), Qt = N()({
  name: "VOverlay",
  directives: {
    ClickOutside: Wr
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...el()
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
    const i = se(e, "modelValue"), o = h({
      get: () => i.value,
      set: (R) => {
        R && e.disabled || (i.value = R);
      }
    }), {
      teleportTarget: r
    } = zr(h(() => e.attach || e.contained)), {
      themeClasses: s
    } = be(e), {
      rtlClasses: c,
      isRtl: f
    } = ze(), {
      hasContent: m,
      onAfterLeave: v
    } = Nr(e, o), d = Ee(h(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: y,
      localTop: g,
      stackStyles: b
    } = Dr(o, D(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: C,
      activatorRef: x,
      target: w,
      targetEl: _,
      targetRef: L,
      activatorEvents: B,
      contentEvents: S,
      scrimEvents: F
    } = $r(e, {
      isActive: o,
      isTop: g
    }), {
      dimensionStyles: j
    } = tt(e), W = Rr(), {
      scopeId: O
    } = Zn();
    q(() => e.disabled, (R) => {
      R && (o.value = !1);
    });
    const k = z(), A = z(), T = z(), {
      contentStyles: M,
      updateLocation: Y
    } = wr(e, {
      isRtl: f,
      contentEl: T,
      target: w,
      isActive: o
    });
    Ar(e, {
      root: k,
      contentEl: T,
      targetEl: _,
      isActive: o,
      updateLocation: Y
    });
    function ee(R) {
      a("click:outside", R), e.persistent ? $() : o.value = !1;
    }
    function V(R) {
      return o.value && y.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || R.target === A.value);
    }
    fe && q(o, (R) => {
      R ? window.addEventListener("keydown", I) : window.removeEventListener("keydown", I);
    }, {
      immediate: !0
    }), Ae(() => {
      fe && window.removeEventListener("keydown", I);
    });
    function I(R) {
      var ne, oe;
      R.key === "Escape" && y.value && (e.persistent ? $() : (o.value = !1, (ne = T.value) != null && ne.contains(document.activeElement) && ((oe = C.value) == null || oe.focus())));
    }
    const p = vr();
    Ge(() => e.closeOnBack, () => {
      mr(p, (R) => {
        y.value && o.value ? (R(!1), e.persistent ? $() : o.value = !1) : R();
      });
    });
    const P = z();
    q(() => o.value && (e.absolute || e.contained) && r.value == null, (R) => {
      if (R) {
        const ne = ma(k.value);
        ne && ne !== document.scrollingElement && (P.value = ne.scrollTop);
      }
    });
    function $() {
      e.noClickAnimation || T.value && it(T.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: qt
      });
    }
    function U() {
      a("afterEnter");
    }
    function te() {
      v(), a("afterLeave");
    }
    return K(() => {
      var R;
      return u(ie, null, [(R = t.activator) == null ? void 0 : R.call(t, {
        isActive: o.value,
        targetRef: L,
        props: Q({
          ref: x
        }, B.value, e.activatorProps)
      }), W.value && m.value && u(qi, {
        disabled: !r.value,
        to: r.value
      }, {
        default: () => [u("div", Q({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": o.value,
            "v-overlay--contained": e.contained
          }, s.value, c.value, e.class],
          style: [b.value, {
            "--v-overlay-opacity": e.opacity,
            top: G(P.value)
          }, e.style],
          ref: k
        }, O, l), [u(Gr, Q({
          color: d,
          modelValue: o.value && !!e.scrim,
          ref: A
        }, F.value), null), u(He, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: w.value,
          onAfterEnter: U,
          onAfterLeave: te
        }, {
          default: () => {
            var ne;
            return [Ve(u("div", Q({
              ref: T,
              class: ["v-overlay__content", e.contentClass],
              style: [j.value, M.value]
            }, S.value, e.contentProps), [(ne = t.default) == null ? void 0 : ne.call(t, {
              isActive: o
            })]), [[ut, o.value], [Je("click-outside"), {
              handler: ee,
              closeConditional: V,
              include: () => [C.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: C,
      scrimEl: A,
      target: w,
      animateClick: $,
      contentEl: T,
      globalTop: y,
      localTop: g,
      updateLocation: Y
    };
  }
}), gn = Symbol("Forwarded refs");
function yn(e, n) {
  let t = e;
  for (; t; ) {
    const l = Reflect.getOwnPropertyDescriptor(t, n);
    if (l)
      return l;
    t = Object.getPrototypeOf(t);
  }
}
function on(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  return e[gn] = t, new Proxy(e, {
    get(a, i) {
      if (Reflect.has(a, i))
        return Reflect.get(a, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of t)
          if (o.value && Reflect.has(o.value, i)) {
            const r = Reflect.get(o.value, i);
            return typeof r == "function" ? r.bind(o.value) : r;
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
      for (const r of t)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(a, i) {
      var r;
      const o = Reflect.getOwnPropertyDescriptor(a, i);
      if (o)
        return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of t) {
          if (!s.value)
            continue;
          const c = yn(s.value, i) ?? ("_" in s.value ? yn((r = s.value._) == null ? void 0 : r.setupState, i) : void 0);
          if (c)
            return c;
        }
        for (const s of t) {
          const c = s.value && s.value[gn];
          if (!c)
            continue;
          const f = c.slice();
          for (; f.length; ) {
            const m = f.shift(), v = yn(m.value, i);
            if (v)
              return v;
            const d = m.value && m.value[gn];
            d && f.push(...d);
          }
        }
      }
    }
  });
}
const Ur = E({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...el({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: Un
    },
    zIndex: 2400
  })
}, "VDialog"), qr = N()({
  name: "VDialog",
  props: Ur(),
  emits: {
    "update:modelValue": (e) => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: l
    } = n;
    const a = se(e, "modelValue"), {
      scopeId: i
    } = Zn(), o = z();
    function r(f) {
      var d, y;
      const m = f.relatedTarget, v = f.target;
      if (m !== v && ((d = o.value) != null && d.contentEl) && // We're the topmost dialog
      ((y = o.value) != null && y.globalTop) && // It isn't the document or the dialog body
      ![document, o.value.contentEl].includes(v) && // It isn't inside the dialog body
      !o.value.contentEl.contains(v)) {
        const g = xt(o.value.contentEl);
        if (!g.length)
          return;
        const b = g[0], C = g[g.length - 1];
        m === b ? C.focus() : b.focus();
      }
    }
    fe && q(() => a.value && e.retainFocus, (f) => {
      f ? document.addEventListener("focusin", r) : document.removeEventListener("focusin", r);
    }, {
      immediate: !0
    });
    function s() {
      var f;
      (f = o.value) != null && f.contentEl && !o.value.contentEl.contains(document.activeElement) && o.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function c() {
      t("afterLeave");
    }
    return q(a, async (f) => {
      var m;
      f || (await ye(), (m = o.value.activatorEl) == null || m.focus({
        preventScroll: !0
      }));
    }), K(() => {
      const f = Qt.filterProps(e), m = Q({
        "aria-haspopup": "dialog",
        "aria-expanded": String(a.value)
      }, e.activatorProps), v = Q({
        tabindex: -1
      }, e.contentProps);
      return u(Qt, Q({
        ref: o,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, f, {
        modelValue: a.value,
        "onUpdate:modelValue": (d) => a.value = d,
        "aria-modal": "true",
        activatorProps: m,
        contentProps: v,
        role: "dialog",
        onAfterEnter: s,
        onAfterLeave: c
      }, i), {
        activator: l.activator,
        default: function() {
          for (var d = arguments.length, y = new Array(d), g = 0; g < d; g++)
            y[g] = arguments[g];
          return u(de, {
            root: "VDialog"
          }, {
            default: () => {
              var b;
              return [(b = l.default) == null ? void 0 : b.call(l, ...y)];
            }
          });
        }
      });
    }), on({}, o);
  }
}), Kr = E({
  fluid: {
    type: Boolean,
    default: !1
  },
  ...X(),
  ...re()
}, "VContainer"), Xa = N()({
  name: "VContainer",
  props: Kr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      rtlClasses: l
    } = ze();
    return K(() => u(e.tag, {
      class: ["v-container", {
        "v-container--fluid": e.fluid
      }, l.value, e.class],
      style: e.style
    }, t)), {};
  }
}), Qa = en.reduce((e, n) => (e[n] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}), Ja = en.reduce((e, n) => {
  const t = "offset" + Bt(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Za = en.reduce((e, n) => {
  const t = "order" + Bt(n);
  return e[t] = {
    type: [String, Number],
    default: null
  }, e;
}, {}), Hl = {
  col: Object.keys(Qa),
  offset: Object.keys(Ja),
  order: Object.keys(Za)
};
function Yr(e, n, t) {
  let l = e;
  if (!(t == null || t === !1)) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return e === "col" && (l = "v-" + l), e === "col" && (t === "" || t === !0) || (l += `-${t}`), l.toLowerCase();
  }
}
const Xr = ["auto", "start", "end", "center", "baseline", "stretch"], Qr = E({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...Qa,
  offset: {
    type: [String, Number],
    default: null
  },
  ...Ja,
  order: {
    type: [String, Number],
    default: null
  },
  ...Za,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => Xr.includes(e)
  },
  ...X(),
  ...re()
}, "VCol"), Fe = N()({
  name: "VCol",
  props: Qr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => {
      const a = [];
      let i;
      for (i in Hl)
        Hl[i].forEach((r) => {
          const s = e[r], c = Yr(i, r, s);
          c && a.push(c);
        });
      const o = a.some((r) => r.startsWith("v-col-"));
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
      return st(e.tag, {
        class: [l.value, e.class],
        style: e.style
      }, (a = t.default) == null ? void 0 : a.call(t));
    };
  }
}), tl = ["start", "end", "center"], ei = ["space-between", "space-around", "space-evenly"];
function nl(e, n) {
  return en.reduce((t, l) => {
    const a = e + Bt(l);
    return t[a] = n(), t;
  }, {});
}
const Jr = [...tl, "baseline", "stretch"], ti = (e) => Jr.includes(e), ni = nl("align", () => ({
  type: String,
  default: null,
  validator: ti
})), Zr = [...tl, ...ei], li = (e) => Zr.includes(e), ai = nl("justify", () => ({
  type: String,
  default: null,
  validator: li
})), es = [...tl, ...ei, "stretch"], ii = (e) => es.includes(e), oi = nl("alignContent", () => ({
  type: String,
  default: null,
  validator: ii
})), jl = {
  align: Object.keys(ni),
  justify: Object.keys(ai),
  alignContent: Object.keys(oi)
}, ts = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function ns(e, n, t) {
  let l = ts[e];
  if (t != null) {
    if (n) {
      const a = n.replace(e, "");
      l += `-${a}`;
    }
    return l += `-${t}`, l.toLowerCase();
  }
}
const ls = E({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: ti
  },
  ...ni,
  justify: {
    type: String,
    default: null,
    validator: li
  },
  ...ai,
  alignContent: {
    type: String,
    default: null,
    validator: ii
  },
  ...oi,
  ...X(),
  ...re()
}, "VRow"), kt = N()({
  name: "VRow",
  props: ls(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => {
      const a = [];
      let i;
      for (i in jl)
        jl[i].forEach((o) => {
          const r = e[o], s = ns(i, o, r);
          s && a.push(s);
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
      return st(e.tag, {
        class: ["v-row", l.value, e.class],
        style: e.style
      }, (a = t.default) == null ? void 0 : a.call(t));
    };
  }
}), ri = Hn("v-spacer", "div", "VSpacer"), An = Symbol.for("vuetify:list");
function si() {
  const e = ve(An, {
    hasPrepend: H(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: H(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return xe(An, n), e;
}
function ui() {
  return ve(An, null);
}
const ll = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: l,
        value: a,
        activated: i
      } = t;
      return l = ke(l), e && !a && i.size === 1 && i.has(l) || (a ? i.add(l) : i.delete(l)), i;
    },
    in: (t, l, a) => {
      let i = /* @__PURE__ */ new Set();
      if (t != null)
        for (const o of Ie(t))
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
}, ci = (e) => {
  const n = ll(e);
  return {
    activate: (l) => {
      let {
        activated: a,
        id: i,
        ...o
      } = l;
      i = ke(i);
      const r = a.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return n.activate({
        ...o,
        id: i,
        activated: r
      });
    },
    in: (l, a, i) => {
      let o = /* @__PURE__ */ new Set();
      if (l != null) {
        const r = Ie(l);
        r.length && (o = n.in(r.slice(0, 1), a, i));
      }
      return o;
    },
    out: (l, a, i) => n.out(l, a, i)
  };
}, as = (e) => {
  const n = ll(e);
  return {
    activate: (l) => {
      let {
        id: a,
        activated: i,
        children: o,
        ...r
      } = l;
      return a = ke(a), o.has(a) ? i : n.activate({
        id: a,
        activated: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, is = (e) => {
  const n = ci(e);
  return {
    activate: (l) => {
      let {
        id: a,
        activated: i,
        children: o,
        ...r
      } = l;
      return a = ke(a), o.has(a) ? i : n.activate({
        id: a,
        activated: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, os = {
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
}, di = {
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
}, rs = {
  open: di.open,
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
}, al = (e) => {
  const n = {
    select: (t) => {
      let {
        id: l,
        value: a,
        selected: i
      } = t;
      if (l = ke(l), e && !a) {
        const o = Array.from(i.entries()).reduce((r, s) => {
          let [c, f] = s;
          return f === "on" && r.push(c), r;
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
}, fi = (e) => {
  const n = al(e);
  return {
    select: (l) => {
      let {
        selected: a,
        id: i,
        ...o
      } = l;
      i = ke(i);
      const r = a.has(i) ? /* @__PURE__ */ new Map([[i, a.get(i)]]) : /* @__PURE__ */ new Map();
      return n.select({
        ...o,
        id: i,
        selected: r
      });
    },
    in: (l, a, i) => {
      let o = /* @__PURE__ */ new Map();
      return l != null && l.length && (o = n.in(l.slice(0, 1), a, i)), o;
    },
    out: (l, a, i) => n.out(l, a, i)
  };
}, ss = (e) => {
  const n = al(e);
  return {
    select: (l) => {
      let {
        id: a,
        selected: i,
        children: o,
        ...r
      } = l;
      return a = ke(a), o.has(a) ? i : n.select({
        id: a,
        selected: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, us = (e) => {
  const n = fi(e);
  return {
    select: (l) => {
      let {
        id: a,
        selected: i,
        children: o,
        ...r
      } = l;
      return a = ke(a), o.has(a) ? i : n.select({
        id: a,
        selected: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, cs = (e) => {
  const n = {
    select: (t) => {
      let {
        id: l,
        value: a,
        selected: i,
        children: o,
        parents: r
      } = t;
      l = ke(l);
      const s = new Map(i), c = [l];
      for (; c.length; ) {
        const m = c.shift();
        i.set(m, a ? "on" : "off"), o.has(m) && c.push(...o.get(m));
      }
      let f = r.get(l);
      for (; f; ) {
        const m = o.get(f), v = m.every((y) => i.get(y) === "on"), d = m.every((y) => !i.has(y) || i.get(y) === "off");
        i.set(f, v ? "on" : d ? "off" : "indeterminate"), f = r.get(f);
      }
      return e && !a && Array.from(i.entries()).reduce((v, d) => {
        let [y, g] = d;
        return g === "on" && v.push(y), v;
      }, []).length === 0 ? s : i;
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
}, Pt = Symbol.for("vuetify:nested"), vi = {
  id: H(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: z(/* @__PURE__ */ new Map()),
    children: z(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: z(!1),
    selectable: z(!1),
    opened: z(/* @__PURE__ */ new Set()),
    activated: z(/* @__PURE__ */ new Set()),
    selected: z(/* @__PURE__ */ new Map()),
    selectedValues: z([])
  }
}, ds = E({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), fs = (e) => {
  let n = !1;
  const t = z(/* @__PURE__ */ new Map()), l = z(/* @__PURE__ */ new Map()), a = se(e, "opened", e.opened, (d) => new Set(d), (d) => [...d.values()]), i = h(() => {
    if (typeof e.activeStrategy == "object")
      return e.activeStrategy;
    if (typeof e.activeStrategy == "function")
      return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return as(e.mandatory);
      case "single-leaf":
        return is(e.mandatory);
      case "independent":
        return ll(e.mandatory);
      case "single-independent":
      default:
        return ci(e.mandatory);
    }
  }), o = h(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    if (typeof e.selectStrategy == "function")
      return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return us(e.mandatory);
      case "leaf":
        return ss(e.mandatory);
      case "independent":
        return al(e.mandatory);
      case "single-independent":
        return fi(e.mandatory);
      case "classic":
      default:
        return cs(e.mandatory);
    }
  }), r = h(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return rs;
      case "single":
        return os;
      case "multiple":
      default:
        return di;
    }
  }), s = se(e, "activated", e.activated, (d) => i.value.in(d, t.value, l.value), (d) => i.value.out(d, t.value, l.value)), c = se(e, "selected", e.selected, (d) => o.value.in(d, t.value, l.value), (d) => o.value.out(d, t.value, l.value));
  Ae(() => {
    n = !0;
  });
  function f(d) {
    const y = [];
    let g = d;
    for (; g != null; )
      y.unshift(g), g = l.value.get(g);
    return y;
  }
  const m = ue("nested"), v = {
    id: H(),
    root: {
      opened: a,
      activatable: D(e, "activatable"),
      selectable: D(e, "selectable"),
      activated: s,
      selected: c,
      selectedValues: h(() => {
        const d = [];
        for (const [y, g] of c.value.entries())
          g === "on" && d.push(y);
        return d;
      }),
      register: (d, y, g) => {
        y && d !== y && l.value.set(d, y), g && t.value.set(d, []), y != null && t.value.set(y, [...t.value.get(y) || [], d]);
      },
      unregister: (d) => {
        if (n)
          return;
        t.value.delete(d);
        const y = l.value.get(d);
        if (y) {
          const g = t.value.get(y) ?? [];
          t.value.set(y, g.filter((b) => b !== d));
        }
        l.value.delete(d), a.value.delete(d);
      },
      open: (d, y, g) => {
        m.emit("click:open", {
          id: d,
          value: y,
          path: f(d),
          event: g
        });
        const b = r.value.open({
          id: d,
          value: y,
          opened: new Set(a.value),
          children: t.value,
          parents: l.value,
          event: g
        });
        b && (a.value = b);
      },
      openOnSelect: (d, y, g) => {
        const b = r.value.select({
          id: d,
          value: y,
          selected: new Map(c.value),
          opened: new Set(a.value),
          children: t.value,
          parents: l.value,
          event: g
        });
        b && (a.value = b);
      },
      select: (d, y, g) => {
        m.emit("click:select", {
          id: d,
          value: y,
          path: f(d),
          event: g
        });
        const b = o.value.select({
          id: d,
          value: y,
          selected: new Map(c.value),
          children: t.value,
          parents: l.value,
          event: g
        });
        b && (c.value = b), v.root.openOnSelect(d, y, g);
      },
      activate: (d, y, g) => {
        if (!e.activatable)
          return v.root.select(d, !0, g);
        m.emit("click:activate", {
          id: d,
          value: y,
          path: f(d),
          event: g
        });
        const b = i.value.activate({
          id: d,
          value: y,
          activated: new Set(s.value),
          children: t.value,
          parents: l.value,
          event: g
        });
        b && (s.value = b);
      },
      children: t,
      parents: l
    }
  };
  return xe(Pt, v), v.root;
}, mi = (e, n) => {
  const t = ve(Pt, vi), l = Symbol(Te()), a = h(() => e.value !== void 0 ? e.value : l), i = {
    ...t,
    id: a,
    open: (o, r) => t.root.open(a.value, o, r),
    openOnSelect: (o, r) => t.root.openOnSelect(a.value, o, r),
    isOpen: h(() => t.root.opened.value.has(a.value)),
    parent: h(() => t.root.parents.value.get(a.value)),
    activate: (o, r) => t.root.activate(a.value, o, r),
    isActivated: h(() => t.root.activated.value.has(ke(a.value))),
    select: (o, r) => t.root.select(a.value, o, r),
    isSelected: h(() => t.root.selected.value.get(ke(a.value)) === "on"),
    isIndeterminate: h(() => t.root.selected.value.get(a.value) === "indeterminate"),
    isLeaf: h(() => !t.root.children.value.get(a.value)),
    isGroupActivator: t.isGroupActivator
  };
  return !t.isGroupActivator && t.root.register(a.value, t.id.value, n), Ae(() => {
    !t.isGroupActivator && t.root.unregister(a.value);
  }), n && xe(Pt, i), i;
}, vs = () => {
  const e = ve(Pt, vi);
  xe(Pt, {
    ...e,
    isGroupActivator: !0
  });
}, ms = Lt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return vs(), () => {
      var l;
      return (l = t.default) == null ? void 0 : l.call(t);
    };
  }
}), gs = E({
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
  ...X(),
  ...re()
}, "VListGroup"), Wl = N()({
  name: "VListGroup",
  props: gs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: l,
      open: a,
      id: i
    } = mi(D(e, "value"), !0), o = h(() => `v-list-group--id-${String(i.value)}`), r = ui(), {
      isBooted: s
    } = Aa();
    function c(d) {
      d.stopPropagation(), a(!l.value, d);
    }
    const f = h(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), m = h(() => l.value ? e.collapseIcon : e.expandIcon), v = h(() => ({
      VListItem: {
        active: l.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && m.value,
        appendIcon: e.appendIcon || !e.subgroup && m.value,
        title: e.title,
        value: e.value
      }
    }));
    return K(() => u(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": l.value
      }, e.class],
      style: e.style
    }, {
      default: () => [t.activator && u(de, {
        defaults: v.value
      }, {
        default: () => [u(ms, null, {
          default: () => [t.activator({
            props: f.value,
            isOpen: l.value
          })]
        })]
      }), u(He, {
        transition: {
          component: wa
        },
        disabled: !s.value
      }, {
        default: () => {
          var d;
          return [Ve(u("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(d = t.default) == null ? void 0 : d.call(t)]), [[ut, l.value]])];
        }
      })]
    })), {
      isOpen: l
    };
  }
}), ys = E({
  opacity: [Number, String],
  ...X(),
  ...re()
}, "VListItemSubtitle"), hs = N()({
  name: "VListItemSubtitle",
  props: ys(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return K(() => u(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), wt = Hn("v-list-item-title"), bs = E({
  start: Boolean,
  end: Boolean,
  icon: le,
  image: String,
  text: String,
  ...X(),
  ...Ue(),
  ...Le(),
  ...Yn(),
  ...re(),
  ...me(),
  ...ht({
    variant: "flat"
  })
}, "VAvatar"), Qe = N()({
  name: "VAvatar",
  props: bs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = be(e), {
      colorClasses: a,
      colorStyles: i,
      variantClasses: o
    } = ln(e), {
      densityClasses: r
    } = lt(e), {
      roundedClasses: s
    } = Oe(e), {
      sizeClasses: c,
      sizeStyles: f
    } = Xn(e);
    return K(() => u(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, l.value, a.value, r.value, s.value, c.value, o.value, e.class],
      style: [i.value, f.value, e.style]
    }, {
      default: () => [t.default ? u(de, {
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
      }) : e.image ? u(Kn, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? u(ae, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, nn(!1, "v-avatar")]
    })), {};
  }
}), Ss = E({
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
  ...vt(),
  ...X(),
  ...Ue(),
  ...et(),
  ...gt(),
  ...Le(),
  ...Jn(),
  ...re(),
  ...me(),
  ...ht({
    variant: "text"
  })
}, "VListItem"), Ne = N()({
  name: "VListItem",
  directives: {
    Ripple: an
  },
  props: Ss(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: l,
      emit: a
    } = n;
    const i = Qn(e, t), o = h(() => e.value === void 0 ? i.href.value : e.value), {
      activate: r,
      isActivated: s,
      select: c,
      isSelected: f,
      isIndeterminate: m,
      isGroupActivator: v,
      root: d,
      parent: y,
      openOnSelect: g
    } = mi(o, !1), b = ui(), C = h(() => {
      var p;
      return e.active !== !1 && (e.active || ((p = i.isActive) == null ? void 0 : p.value) || (d.activatable.value ? s.value : f.value));
    }), x = h(() => e.link !== !1 && i.isLink.value), w = h(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || !!b && (d.selectable.value || d.activatable.value || e.value != null))), _ = h(() => e.rounded || e.nav), L = h(() => e.color ?? e.activeColor), B = h(() => ({
      color: C.value ? L.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    q(() => {
      var p;
      return (p = i.isActive) == null ? void 0 : p.value;
    }, (p) => {
      p && y.value != null && d.open(y.value, !0), p && g(p);
    }, {
      immediate: !0
    });
    const {
      themeClasses: S
    } = be(e), {
      borderClasses: F
    } = mt(e), {
      colorClasses: j,
      colorStyles: W,
      variantClasses: O
    } = ln(B), {
      densityClasses: k
    } = lt(e), {
      dimensionStyles: A
    } = tt(e), {
      elevationClasses: T
    } = yt(e), {
      roundedClasses: M
    } = Oe(_), Y = h(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), ee = h(() => ({
      isActive: C.value,
      select: c,
      isSelected: f.value,
      isIndeterminate: m.value
    }));
    function V(p) {
      var P;
      a("click", p), w.value && ((P = i.navigate) == null || P.call(i, p), !v && (d.activatable.value ? r(!s.value, p) : (d.selectable.value || e.value != null) && c(!f.value, p)));
    }
    function I(p) {
      (p.key === "Enter" || p.key === " ") && (p.preventDefault(), V(p));
    }
    return K(() => {
      const p = x.value ? "a" : e.tag, P = l.title || e.title != null, $ = l.subtitle || e.subtitle != null, U = !!(e.appendAvatar || e.appendIcon), te = !!(U || l.append), R = !!(e.prependAvatar || e.prependIcon), ne = !!(R || l.prepend);
      return b == null || b.updateHasPrepend(ne), e.activeColor && go("active-color", ["color", "base-color"]), Ve(u(p, {
        class: ["v-list-item", {
          "v-list-item--active": C.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": w.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !ne && (b == null ? void 0 : b.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && C.value
        }, S.value, F.value, j.value, k.value, T.value, Y.value, M.value, O.value, e.class],
        style: [W.value, A.value, e.style],
        href: i.href.value,
        tabindex: w.value ? b ? -2 : 0 : void 0,
        onClick: V,
        onKeydown: w.value && !x.value && I
      }, {
        default: () => {
          var oe;
          return [nn(w.value || C.value, "v-list-item"), ne && u("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [l.prepend ? u(de, {
            key: "prepend-defaults",
            disabled: !R,
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
              var ce;
              return [(ce = l.prepend) == null ? void 0 : ce.call(l, ee.value)];
            }
          }) : u(ie, null, [e.prependAvatar && u(Qe, {
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
          }, [P && u(wt, {
            key: "title"
          }, {
            default: () => {
              var ce;
              return [((ce = l.title) == null ? void 0 : ce.call(l, {
                title: e.title
              })) ?? e.title];
            }
          }), $ && u(hs, {
            key: "subtitle"
          }, {
            default: () => {
              var ce;
              return [((ce = l.subtitle) == null ? void 0 : ce.call(l, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (oe = l.default) == null ? void 0 : oe.call(l, ee.value)]), te && u("div", {
            key: "append",
            class: "v-list-item__append"
          }, [l.append ? u(de, {
            key: "append-defaults",
            disabled: !U,
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
              var ce;
              return [(ce = l.append) == null ? void 0 : ce.call(l, ee.value)];
            }
          }) : u(ie, null, [e.appendIcon && u(ae, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(Qe, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[Je("ripple"), w.value && e.ripple]]);
    }), {
      activate: r,
      isActivated: s,
      isGroupActivator: v,
      isSelected: f,
      list: b,
      select: c
    };
  }
}), Cs = E({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...X(),
  ...re()
}, "VListSubheader"), ps = N()({
  name: "VListSubheader",
  props: Cs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: l,
      textColorStyles: a
    } = nt(D(e, "color"));
    return K(() => {
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
}), ws = E({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...X(),
  ...me()
}, "VDivider"), Ht = N()({
  name: "VDivider",
  props: ws(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const {
      themeClasses: a
    } = be(e), {
      textColorClasses: i,
      textColorStyles: o
    } = nt(D(e, "color")), r = h(() => {
      const s = {};
      return e.length && (s[e.vertical ? "height" : "width"] = G(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = G(e.thickness)), s;
    });
    return K(() => {
      const s = u("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, a.value, i.value, e.class],
        style: [r.value, o.value, {
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
      }, [s, u("div", {
        class: "v-divider__content"
      }, [l.default()]), s]) : s;
    }), {};
  }
}), ks = E({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), gi = N()({
  name: "VListChildren",
  props: ks(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return si(), () => {
      var l, a;
      return ((l = t.default) == null ? void 0 : l.call(t)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
        var v, d;
        let {
          children: o,
          props: r,
          type: s,
          raw: c
        } = i;
        if (s === "divider")
          return ((v = t.divider) == null ? void 0 : v.call(t, {
            props: r
          })) ?? u(Ht, r, null);
        if (s === "subheader")
          return ((d = t.subheader) == null ? void 0 : d.call(t, {
            props: r
          })) ?? u(ps, r, null);
        const f = {
          subtitle: t.subtitle ? (y) => {
            var g;
            return (g = t.subtitle) == null ? void 0 : g.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          prepend: t.prepend ? (y) => {
            var g;
            return (g = t.prepend) == null ? void 0 : g.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          append: t.append ? (y) => {
            var g;
            return (g = t.append) == null ? void 0 : g.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          title: t.title ? (y) => {
            var g;
            return (g = t.title) == null ? void 0 : g.call(t, {
              ...y,
              item: c
            });
          } : void 0
        }, m = Wl.filterProps(r);
        return o ? u(Wl, Q({
          value: r == null ? void 0 : r.value
        }, m), {
          activator: (y) => {
            let {
              props: g
            } = y;
            const b = {
              ...r,
              ...g,
              value: e.returnObject ? c : r.value
            };
            return t.header ? t.header({
              props: b
            }) : u(Ne, b, f);
          },
          default: () => u(gi, {
            items: o,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: r
        }) : u(Ne, Q(r, {
          value: e.returnObject ? c : r.value
        }), f);
      }));
    };
  }
}), yi = E({
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
    default: ct
  }
}, "list-items");
function Pn(e, n) {
  const t = Re(n, e.itemTitle, n), l = Re(n, e.itemValue, t), a = Re(n, e.itemChildren), i = e.itemProps === !0 ? typeof n == "object" && n != null && !Array.isArray(n) ? "children" in n ? dt(n, ["children"]) : n : void 0 : Re(n, e.itemProps), o = {
    title: t,
    value: l,
    ...i
  };
  return {
    title: String(o.title ?? ""),
    value: o.value,
    props: o,
    children: Array.isArray(a) ? hi(e, a) : void 0,
    raw: n
  };
}
function hi(e, n) {
  const t = [];
  for (const l of n)
    t.push(Pn(e, l));
  return t;
}
function xs(e) {
  const n = h(() => hi(e, e.items)), t = h(() => n.value.some((i) => i.value === null));
  function l(i) {
    return t.value || (i = i.filter((o) => o !== null)), i.map((o) => e.returnObject && typeof o == "string" ? Pn(e, o) : n.value.find((r) => e.valueComparator(o, r.value)) || Pn(e, o));
  }
  function a(i) {
    return e.returnObject ? i.map((o) => {
      let {
        raw: r
      } = o;
      return r;
    }) : i.map((o) => {
      let {
        value: r
      } = o;
      return r;
    });
  }
  return {
    items: n,
    transformIn: l,
    transformOut: a
  };
}
function _s(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Vs(e, n) {
  const t = Re(n, e.itemType, "item"), l = _s(n) ? n : Re(n, e.itemTitle), a = Re(n, e.itemValue, void 0), i = Re(n, e.itemChildren), o = e.itemProps === !0 ? dt(n, ["children"]) : Re(n, e.itemProps), r = {
    title: l,
    value: a,
    ...o
  };
  return {
    type: t,
    title: r.title,
    value: r.value,
    props: r,
    children: t === "item" && i ? bi(e, i) : void 0,
    raw: n
  };
}
function bi(e, n) {
  const t = [];
  for (const l of n)
    t.push(Vs(e, l));
  return t;
}
function Is(e) {
  return {
    items: h(() => bi(e, e.items))
  };
}
const As = E({
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
  ...ds({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...vt(),
  ...X(),
  ...Ue(),
  ...et(),
  ...gt(),
  itemType: {
    type: String,
    default: "type"
  },
  ...yi(),
  ...Le(),
  ...re(),
  ...me(),
  ...ht({
    variant: "text"
  })
}, "VList"), Ps = N()({
  name: "VList",
  props: As(),
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
    } = Is(e), {
      themeClasses: a
    } = be(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = Ee(D(e, "bgColor")), {
      borderClasses: r
    } = mt(e), {
      densityClasses: s
    } = lt(e), {
      dimensionStyles: c
    } = tt(e), {
      elevationClasses: f
    } = yt(e), {
      roundedClasses: m
    } = Oe(e), {
      children: v,
      open: d,
      parents: y,
      select: g
    } = fs(e), b = h(() => e.lines ? `v-list--${e.lines}-line` : void 0), C = D(e, "activeColor"), x = D(e, "baseColor"), w = D(e, "color");
    si(), ft({
      VListGroup: {
        activeColor: C,
        baseColor: x,
        color: w,
        expandIcon: D(e, "expandIcon"),
        collapseIcon: D(e, "collapseIcon")
      },
      VListItem: {
        activeClass: D(e, "activeClass"),
        activeColor: C,
        baseColor: x,
        color: w,
        density: D(e, "density"),
        disabled: D(e, "disabled"),
        lines: D(e, "lines"),
        nav: D(e, "nav"),
        slim: D(e, "slim"),
        variant: D(e, "variant")
      }
    });
    const _ = H(!1), L = z();
    function B(k) {
      _.value = !0;
    }
    function S(k) {
      _.value = !1;
    }
    function F(k) {
      var A;
      !_.value && !(k.relatedTarget && ((A = L.value) != null && A.contains(k.relatedTarget))) && O();
    }
    function j(k) {
      const A = k.target;
      if (!(!L.value || ["INPUT", "TEXTAREA"].includes(A.tagName))) {
        if (k.key === "ArrowDown")
          O("next");
        else if (k.key === "ArrowUp")
          O("prev");
        else if (k.key === "Home")
          O("first");
        else if (k.key === "End")
          O("last");
        else
          return;
        k.preventDefault();
      }
    }
    function W(k) {
      _.value = !0;
    }
    function O(k) {
      if (L.value)
        return Wt(L.value, k);
    }
    return K(() => u(e.tag, {
      ref: L,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, a.value, i.value, r.value, s.value, f.value, b.value, m.value, e.class],
      style: [o.value, c.value, e.style],
      tabindex: e.disabled || _.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: B,
      onFocusout: S,
      onFocus: F,
      onKeydown: j,
      onMousedown: W
    }, {
      default: () => [u(gi, {
        items: l.value,
        returnObject: e.returnObject
      }, t)]
    })), {
      open: d,
      select: g,
      focus: O,
      children: v,
      parents: y
    };
  }
}), Es = E({
  text: String,
  onClick: we(),
  ...X(),
  ...me()
}, "VLabel"), Si = N()({
  name: "VLabel",
  props: Es(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return K(() => {
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
}), Ci = Symbol.for("vuetify:selection-control-group"), pi = E({
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
    default: ct
  },
  ...X(),
  ...Ue(),
  ...me()
}, "SelectionControlGroup"), Bs = E({
  ...pi({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
N()({
  name: "VSelectionControlGroup",
  props: Bs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = se(e, "modelValue"), a = Te(), i = h(() => e.id || `v-selection-control-group-${a}`), o = h(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return xe(Ci, {
      modelValue: l,
      forceUpdate: () => {
        r.forEach((s) => s());
      },
      onForceUpdate: (s) => {
        r.add(s), he(() => {
          r.delete(s);
        });
      }
    }), ft({
      [e.defaultsTarget]: {
        color: D(e, "color"),
        disabled: D(e, "disabled"),
        density: D(e, "density"),
        error: D(e, "error"),
        inline: D(e, "inline"),
        modelValue: l,
        multiple: h(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)),
        name: o,
        falseIcon: D(e, "falseIcon"),
        trueIcon: D(e, "trueIcon"),
        readonly: D(e, "readonly"),
        ripple: D(e, "ripple"),
        type: D(e, "type"),
        valueComparator: D(e, "valueComparator")
      }
    }), K(() => {
      var s;
      return u("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(s = t.default) == null ? void 0 : s.call(t)]);
    }), {};
  }
});
const wi = E({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...X(),
  ...pi()
}, "VSelectionControl");
function Ts(e) {
  const n = ve(Ci, void 0), {
    densityClasses: t
  } = lt(e), l = se(e, "modelValue"), a = h(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = h(() => e.falseValue !== void 0 ? e.falseValue : !1), o = h(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), r = h({
    get() {
      const d = n ? n.modelValue.value : l.value;
      return o.value ? Ie(d).some((y) => e.valueComparator(y, a.value)) : e.valueComparator(d, a.value);
    },
    set(d) {
      if (e.readonly)
        return;
      const y = d ? a.value : i.value;
      let g = y;
      o.value && (g = d ? [...Ie(l.value), y] : Ie(l.value).filter((b) => !e.valueComparator(b, a.value))), n ? n.modelValue.value = g : l.value = g;
    }
  }), {
    textColorClasses: s,
    textColorStyles: c
  } = nt(h(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: f,
    backgroundColorStyles: m
  } = Ee(h(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor)), v = h(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: n,
    densityClasses: t,
    trueValue: a,
    falseValue: i,
    model: r,
    textColorClasses: s,
    textColorStyles: c,
    backgroundColorClasses: f,
    backgroundColorStyles: m,
    icon: v
  };
}
const Gl = N()({
  name: "VSelectionControl",
  directives: {
    Ripple: an
  },
  inheritAttrs: !1,
  props: wi(),
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
      model: r,
      textColorClasses: s,
      textColorStyles: c,
      backgroundColorClasses: f,
      backgroundColorStyles: m,
      trueValue: v
    } = Ts(e), d = Te(), y = H(!1), g = H(!1), b = z(), C = h(() => e.id || `input-${d}`), x = h(() => !e.disabled && !e.readonly);
    a == null || a.onForceUpdate(() => {
      b.value && (b.value.checked = r.value);
    });
    function w(S) {
      x.value && (y.value = !0, Gt(S.target, ":focus-visible") !== !1 && (g.value = !0));
    }
    function _() {
      y.value = !1, g.value = !1;
    }
    function L(S) {
      S.stopPropagation();
    }
    function B(S) {
      if (!x.value) {
        b.value && (b.value.checked = r.value);
        return;
      }
      e.readonly && a && ye(() => a.forceUpdate()), r.value = S.target.checked;
    }
    return K(() => {
      var O, k;
      const S = l.label ? l.label({
        label: e.label,
        props: {
          for: C.value
        }
      }) : e.label, [F, j] = aa(t), W = u("input", Q({
        ref: b,
        checked: r.value,
        disabled: !!e.disabled,
        id: C.value,
        onBlur: _,
        onFocus: w,
        onInput: B,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: v.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, j), null);
      return u("div", Q({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": y.value,
          "v-selection-control--focus-visible": g.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, F, {
        style: e.style
      }), [u("div", {
        class: ["v-selection-control__wrapper", s.value],
        style: c.value
      }, [(O = l.default) == null ? void 0 : O.call(l, {
        backgroundColorClasses: f,
        backgroundColorStyles: m
      }), Ve(u("div", {
        class: ["v-selection-control__input"]
      }, [((k = l.input) == null ? void 0 : k.call(l, {
        model: r,
        textColorClasses: s,
        textColorStyles: c,
        backgroundColorClasses: f,
        backgroundColorStyles: m,
        inputNode: W,
        icon: o.value,
        props: {
          onFocus: w,
          onBlur: _,
          id: C.value
        }
      })) ?? u(ie, null, [o.value && u(ae, {
        key: "icon",
        icon: o.value
      }, null), W])]), [[Je("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), S && u(Si, {
        for: C.value,
        onClick: L
      }, {
        default: () => [S]
      })]);
    }), {
      isFocused: y,
      input: b
    };
  }
}), Ls = E({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: le,
    default: "$checkboxIndeterminate"
  },
  ...wi({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Os = N()({
  name: "VCheckboxBtn",
  props: Ls(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = se(e, "indeterminate"), a = se(e, "modelValue");
    function i(s) {
      l.value && (l.value = !1);
    }
    const o = h(() => l.value ? e.indeterminateIcon : e.falseIcon), r = h(() => l.value ? e.indeterminateIcon : e.trueIcon);
    return K(() => {
      const s = dt(Gl.filterProps(e), ["modelValue"]);
      return u(Gl, Q(s, {
        modelValue: a.value,
        "onUpdate:modelValue": [(c) => a.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: r.value,
        "aria-checked": l.value ? "mixed" : void 0
      }), t);
    }), {};
  }
});
function ki(e) {
  const {
    t: n
  } = Wn();
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
    }[a], o = e[`onClick:${a}`], r = o && i ? n(`$vuetify.input.${i}`, e.label ?? "") : void 0;
    return u(ae, {
      icon: e[`${a}Icon`],
      "aria-label": r,
      onClick: o
    }, null);
  }
  return {
    InputIcon: t
  };
}
const $s = E({
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
}, "VMessages"), Fs = N()({
  name: "VMessages",
  props: $s(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => Ie(e.messages)), {
      textColorClasses: a,
      textColorStyles: i
    } = nt(h(() => e.color));
    return K(() => u(He, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", a.value, e.class],
      style: [i.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && l.value.map((o, r) => u("div", {
        class: "v-messages__message",
        key: `${r}-${l.value}`
      }, [t.message ? t.message({
        message: o
      }) : o]))]
    })), {};
  }
}), xi = E({
  focused: Boolean,
  "onUpdate:focused": we()
}, "focus");
function _i(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be();
  const t = se(e, "focused"), l = h(() => ({
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
const Rs = Symbol.for("vuetify:form");
function Vi() {
  return ve(Rs, null);
}
const Ms = E({
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
  ...xi()
}, "validation");
function Ns(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Be(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Te();
  const l = se(e, "modelValue"), a = h(() => e.validationValue === void 0 ? l.value : e.validationValue), i = Vi(), o = z([]), r = H(!0), s = h(() => !!(Ie(l.value === "" ? null : l.value).length || Ie(a.value === "" ? null : a.value).length)), c = h(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), f = h(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), m = h(() => {
    var L;
    return (L = e.errorMessages) != null && L.length ? Ie(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), v = h(() => {
    let L = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || "input";
    L === "lazy" && (L = "input lazy");
    const B = new Set((L == null ? void 0 : L.split(" ")) ?? []);
    return {
      blur: B.has("blur") || B.has("input"),
      input: B.has("input"),
      submit: B.has("submit"),
      lazy: B.has("lazy")
    };
  }), d = h(() => {
    var L;
    return e.error || (L = e.errorMessages) != null && L.length ? !1 : e.rules.length ? r.value ? o.value.length || v.value.lazy ? null : !0 : !o.value.length : !0;
  }), y = H(!1), g = h(() => ({
    [`${n}--error`]: d.value === !1,
    [`${n}--dirty`]: s.value,
    [`${n}--disabled`]: c.value,
    [`${n}--readonly`]: f.value
  })), b = ue("validation"), C = h(() => e.name ?? ge(t));
  Jl(() => {
    i == null || i.register({
      id: C.value,
      vm: b,
      validate: _,
      reset: x,
      resetValidation: w
    });
  }), Ae(() => {
    i == null || i.unregister(C.value);
  }), Ze(async () => {
    v.value.lazy || await _(!0), i == null || i.update(C.value, d.value, m.value);
  }), Ge(() => v.value.input, () => {
    q(a, () => {
      if (a.value != null)
        _();
      else if (e.focused) {
        const L = q(() => e.focused, (B) => {
          B || _(), L();
        });
      }
    });
  }), Ge(() => v.value.blur, () => {
    q(() => e.focused, (L) => {
      L || _();
    });
  }), q([d, m], () => {
    i == null || i.update(C.value, d.value, m.value);
  });
  async function x() {
    l.value = null, await ye(), await w();
  }
  async function w() {
    r.value = !0, v.value.lazy ? o.value = [] : await _(!0);
  }
  async function _() {
    let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const B = [];
    y.value = !0;
    for (const S of e.rules) {
      if (B.length >= +(e.maxErrors ?? 1))
        break;
      const j = await (typeof S == "function" ? S : () => S)(a.value);
      if (j !== !0) {
        if (j !== !1 && typeof j != "string") {
          console.warn(`${j} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        B.push(j || "");
      }
    }
    return o.value = B, y.value = !1, r.value = L, o.value;
  }
  return {
    errorMessages: m,
    isDirty: s,
    isDisabled: c,
    isReadonly: f,
    isPristine: r,
    isValid: d,
    isValidating: y,
    reset: x,
    resetValidation: w,
    validate: _,
    validationClasses: g
  };
}
const Ii = E({
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
  ...X(),
  ...Ue(),
  ...Xi(et(), ["maxWidth", "minWidth", "width"]),
  ...me(),
  ...Ms()
}, "VInput"), Ul = N()({
  name: "VInput",
  props: {
    ...Ii()
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
    } = lt(e), {
      dimensionStyles: o
    } = tt(e), {
      themeClasses: r
    } = be(e), {
      rtlClasses: s
    } = ze(), {
      InputIcon: c
    } = ki(e), f = Te(), m = h(() => e.id || `input-${f}`), v = h(() => `${m.value}-messages`), {
      errorMessages: d,
      isDirty: y,
      isDisabled: g,
      isReadonly: b,
      isPristine: C,
      isValid: x,
      isValidating: w,
      reset: _,
      resetValidation: L,
      validate: B,
      validationClasses: S
    } = Ns(e, "v-input", m), F = h(() => ({
      id: m,
      messagesId: v,
      isDirty: y,
      isDisabled: g,
      isReadonly: b,
      isPristine: C,
      isValid: x,
      isValidating: w,
      reset: _,
      resetValidation: L,
      validate: B
    })), j = h(() => {
      var W;
      return (W = e.errorMessages) != null && W.length || !C.value && d.value.length ? d.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return K(() => {
      var T, M, Y, ee;
      const W = !!(l.prepend || e.prependIcon), O = !!(l.append || e.appendIcon), k = j.value.length > 0, A = !e.hideDetails || e.hideDetails === "auto" && (k || !!l.details);
      return u("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, s.value, S.value, e.class],
        style: [o.value, e.style]
      }, [W && u("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(T = l.prepend) == null ? void 0 : T.call(l, F.value), e.prependIcon && u(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), l.default && u("div", {
        class: "v-input__control"
      }, [(M = l.default) == null ? void 0 : M.call(l, F.value)]), O && u("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && u(c, {
        key: "append-icon",
        name: "append"
      }, null), (Y = l.append) == null ? void 0 : Y.call(l, F.value)]), A && u("div", {
        class: "v-input__details"
      }, [u(Fs, {
        id: v.value,
        active: k,
        messages: j.value
      }, {
        message: l.message
      }), (ee = l.details) == null ? void 0 : ee.call(l, F.value)])]);
    }), {
      reset: _,
      resetValidation: L,
      validate: B,
      isValid: x,
      errorMessages: d
    };
  }
});
function Ds(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: l,
    isHorizontal: a
  } = e;
  const i = Et(a, t), o = Ai(a, l, t), r = Et(a, n), s = Pi(a, n), c = r * 0.4;
  return o > s ? s - c : o + i < s + r ? s - i + r + c : o;
}
function zs(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: l
  } = e;
  const a = Et(l, t), i = Pi(l, n), o = Et(l, n);
  return i - a / 2 + o / 2;
}
function ql(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Hs(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Ai(e, n, t) {
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
function Pi(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const js = Symbol.for("vuetify:v-slide-group"), Ei = E({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: js
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
  ...X(),
  ...Po({
    mobile: null
  }),
  ...re(),
  ...Pa({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), Kl = N()({
  name: "VSlideGroup",
  props: Ei(),
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
    } = Ot(e), o = Ea(e, e.symbol), r = H(!1), s = H(0), c = H(0), f = H(0), m = h(() => e.direction === "horizontal"), {
      resizeRef: v,
      contentRect: d
    } = Vt(), {
      resizeRef: y,
      contentRect: g
    } = Vt(), b = ya(), C = h(() => ({
      container: v.el,
      duration: 200,
      easing: "easeOutQuart"
    })), x = h(() => o.selected.value.length ? o.items.value.findIndex((p) => p.id === o.selected.value[0]) : -1), w = h(() => o.selected.value.length ? o.items.value.findIndex((p) => p.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (fe) {
      let p = -1;
      q(() => [o.selected.value, d.value, g.value, m.value], () => {
        cancelAnimationFrame(p), p = requestAnimationFrame(() => {
          if (d.value && g.value) {
            const P = m.value ? "width" : "height";
            c.value = d.value[P], f.value = g.value[P], r.value = c.value + 1 < f.value;
          }
          if (x.value >= 0 && y.el) {
            const P = y.el.children[w.value];
            L(P, e.centerActive);
          }
        });
      });
    }
    const _ = H(!1);
    function L(p, P) {
      let $ = 0;
      P ? $ = zs({
        containerElement: v.el,
        isHorizontal: m.value,
        selectedElement: p
      }) : $ = Ds({
        containerElement: v.el,
        isHorizontal: m.value,
        isRtl: l.value,
        selectedElement: p
      }), B($);
    }
    function B(p) {
      if (!fe || !v.el)
        return;
      const P = Et(m.value, v.el), $ = Ai(m.value, l.value, v.el);
      if (!(ql(m.value, v.el) <= P || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(p - $) < 16)) {
        if (m.value && l.value && v.el) {
          const {
            scrollWidth: te,
            offsetWidth: R
          } = v.el;
          p = te - R - p;
        }
        m.value ? b.horizontal(p, C.value) : b(p, C.value);
      }
    }
    function S(p) {
      const {
        scrollTop: P,
        scrollLeft: $
      } = p.target;
      s.value = m.value ? $ : P;
    }
    function F(p) {
      if (_.value = !0, !(!r.value || !y.el)) {
        for (const P of p.composedPath())
          for (const $ of y.el.children)
            if ($ === P) {
              L($);
              return;
            }
      }
    }
    function j(p) {
      _.value = !1;
    }
    let W = !1;
    function O(p) {
      var P;
      !W && !_.value && !(p.relatedTarget && ((P = y.el) != null && P.contains(p.relatedTarget))) && T(), W = !1;
    }
    function k() {
      W = !0;
    }
    function A(p) {
      if (!y.el)
        return;
      function P($) {
        p.preventDefault(), T($);
      }
      m.value ? p.key === "ArrowRight" ? P(l.value ? "prev" : "next") : p.key === "ArrowLeft" && P(l.value ? "next" : "prev") : p.key === "ArrowDown" ? P("next") : p.key === "ArrowUp" && P("prev"), p.key === "Home" ? P("first") : p.key === "End" && P("last");
    }
    function T(p) {
      var $, U;
      if (!y.el)
        return;
      let P;
      if (!p)
        P = xt(y.el)[0];
      else if (p === "next") {
        if (P = ($ = y.el.querySelector(":focus")) == null ? void 0 : $.nextElementSibling, !P)
          return T("first");
      } else if (p === "prev") {
        if (P = (U = y.el.querySelector(":focus")) == null ? void 0 : U.previousElementSibling, !P)
          return T("last");
      } else
        p === "first" ? P = y.el.firstElementChild : p === "last" && (P = y.el.lastElementChild);
      P && P.focus({
        preventScroll: !0
      });
    }
    function M(p) {
      const P = m.value && l.value ? -1 : 1, $ = (p === "prev" ? -P : P) * c.value;
      let U = s.value + $;
      if (m.value && l.value && v.el) {
        const {
          scrollWidth: te,
          offsetWidth: R
        } = v.el;
        U += te - R;
      }
      B(U);
    }
    const Y = h(() => ({
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
          return r.value || Math.abs(s.value) > 0;
        case "mobile":
          return i.value || r.value || Math.abs(s.value) > 0;
        default:
          return !i.value && (r.value || Math.abs(s.value) > 0);
      }
    }), V = h(() => Math.abs(s.value) > 1), I = h(() => {
      if (!v.value)
        return !1;
      const p = ql(m.value, v.el), P = Hs(m.value, v.el);
      return p - P - Math.abs(s.value) > 1;
    });
    return K(() => u(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !m.value,
        "v-slide-group--has-affixes": ee.value,
        "v-slide-group--is-overflowing": r.value
      }, a.value, e.class],
      style: e.style,
      tabindex: _.value || o.selected.value.length ? -1 : 0,
      onFocus: O
    }, {
      default: () => {
        var p, P, $;
        return [ee.value && u("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !V.value
          }],
          onMousedown: k,
          onClick: () => V.value && M("prev")
        }, [((p = t.prev) == null ? void 0 : p.call(t, Y.value)) ?? u(Bl, null, {
          default: () => [u(ae, {
            icon: l.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), u("div", {
          key: "container",
          ref: v,
          class: "v-slide-group__container",
          onScroll: S
        }, [u("div", {
          ref: y,
          class: "v-slide-group__content",
          onFocusin: F,
          onFocusout: j,
          onKeydown: A
        }, [(P = t.default) == null ? void 0 : P.call(t, Y.value)])]), ee.value && u("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !I.value
          }],
          onMousedown: k,
          onClick: () => I.value && M("next")
        }, [(($ = t.next) == null ? void 0 : $.call(t, Y.value)) ?? u(Bl, null, {
          default: () => [u(ae, {
            icon: l.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: M,
      scrollOffset: s,
      focus: T
    };
  }
}), Bi = Symbol.for("vuetify:v-chip-group"), Ws = E({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: ct
  },
  ...Ei(),
  ...X(),
  ...Pa({
    selectedClass: "v-chip--selected"
  }),
  ...re(),
  ...me(),
  ...ht({
    variant: "tonal"
  })
}, "VChipGroup");
N()({
  name: "VChipGroup",
  props: Ws(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = be(e), {
      isSelected: a,
      select: i,
      next: o,
      prev: r,
      selected: s
    } = Ea(e, Bi);
    return ft({
      VChip: {
        color: D(e, "color"),
        disabled: D(e, "disabled"),
        filter: D(e, "filter"),
        variant: D(e, "variant")
      }
    }), K(() => {
      const c = Kl.filterProps(e);
      return u(Kl, Q(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, l.value, e.class],
        style: e.style
      }), {
        default: () => {
          var f;
          return [(f = t.default) == null ? void 0 : f.call(t, {
            isSelected: a,
            select: i,
            next: o,
            prev: r,
            selected: s.value
          })];
        }
      });
    }), {};
  }
});
const Gs = E({
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
  ...vt(),
  ...X(),
  ...Ue(),
  ...gt(),
  ...er(),
  ...Le(),
  ...Jn(),
  ...Yn(),
  ...re({
    tag: "span"
  }),
  ...me(),
  ...ht({
    variant: "tonal"
  })
}, "VChip"), En = N()({
  name: "VChip",
  directives: {
    Ripple: an
  },
  props: Gs(),
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
    } = Wn(), {
      borderClasses: o
    } = mt(e), {
      colorClasses: r,
      colorStyles: s,
      variantClasses: c
    } = ln(e), {
      densityClasses: f
    } = lt(e), {
      elevationClasses: m
    } = yt(e), {
      roundedClasses: v
    } = Oe(e), {
      sizeClasses: d
    } = Xn(e), {
      themeClasses: y
    } = be(e), g = se(e, "modelValue"), b = tr(e, Bi, !1), C = Qn(e, t), x = h(() => e.link !== !1 && C.isLink.value), w = h(() => !e.disabled && e.link !== !1 && (!!b || e.link || C.isClickable.value)), _ = h(() => ({
      "aria-label": i(e.closeLabel),
      onClick(S) {
        S.preventDefault(), S.stopPropagation(), g.value = !1, l("click:close", S);
      }
    }));
    function L(S) {
      var F;
      l("click", S), w.value && ((F = C.navigate) == null || F.call(C, S), b == null || b.toggle());
    }
    function B(S) {
      (S.key === "Enter" || S.key === " ") && (S.preventDefault(), L(S));
    }
    return () => {
      const S = C.isLink.value ? "a" : e.tag, F = !!(e.appendIcon || e.appendAvatar), j = !!(F || a.append), W = !!(a.close || e.closable), O = !!(a.filter || e.filter) && b, k = !!(e.prependIcon || e.prependAvatar), A = !!(k || a.prepend), T = !b || b.isSelected.value;
      return g.value && Ve(u(S, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": w.value,
          "v-chip--filter": O,
          "v-chip--pill": e.pill
        }, y.value, o.value, T ? r.value : void 0, f.value, m.value, v.value, d.value, c.value, b == null ? void 0 : b.selectedClass.value, e.class],
        style: [T ? s.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: C.href.value,
        tabindex: w.value ? 0 : void 0,
        onClick: L,
        onKeydown: w.value && !x.value && B
      }, {
        default: () => {
          var M;
          return [nn(w.value, "v-chip"), O && u(ka, {
            key: "filter"
          }, {
            default: () => [Ve(u("div", {
              class: "v-chip__filter"
            }, [a.filter ? u(de, {
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
            }, null)]), [[ut, b.isSelected.value]])]
          }), A && u("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [a.prepend ? u(de, {
            key: "prepend-defaults",
            disabled: !k,
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
          }, null), e.prependAvatar && u(Qe, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), u("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((M = a.default) == null ? void 0 : M.call(a, {
            isSelected: b == null ? void 0 : b.isSelected.value,
            selectedClass: b == null ? void 0 : b.selectedClass.value,
            select: b == null ? void 0 : b.select,
            toggle: b == null ? void 0 : b.toggle,
            value: b == null ? void 0 : b.value.value,
            disabled: e.disabled
          })) ?? e.text]), j && u("div", {
            key: "append",
            class: "v-chip__append"
          }, [a.append ? u(de, {
            key: "append-defaults",
            disabled: !F,
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
          }, null), e.appendAvatar && u(Qe, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), W && u("button", Q({
            key: "close",
            class: "v-chip__close",
            type: "button"
          }, _.value), [a.close ? u(de, {
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
      }), [[Je("ripple"), w.value && e.ripple, null]]);
    };
  }
}), Us = E({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...dt(el({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Un
    }
  }), ["absolute"])
}, "VMenu"), qs = N()({
  name: "VMenu",
  props: Us(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = se(e, "modelValue"), {
      scopeId: a
    } = Zn(), i = Te(), o = h(() => e.id || `v-menu-${i}`), r = z(), s = ve(In, null), c = H(0);
    xe(In, {
      register() {
        ++c.value;
      },
      unregister() {
        --c.value;
      },
      closeParents(g) {
        setTimeout(() => {
          !c.value && !e.persistent && (g == null || g && !no(g, r.value.contentEl)) && (l.value = !1, s == null || s.closeParents());
        }, 40);
      }
    });
    async function f(g) {
      var x, w, _;
      const b = g.relatedTarget, C = g.target;
      await ye(), l.value && b !== C && ((x = r.value) != null && x.contentEl) && // We're the topmost menu
      ((w = r.value) != null && w.globalTop) && // It isn't the document or the menu body
      ![document, r.value.contentEl].includes(C) && // It isn't inside the menu body
      !r.value.contentEl.contains(C) && ((_ = xt(r.value.contentEl)[0]) == null || _.focus());
    }
    q(l, (g) => {
      g ? (s == null || s.register(), document.addEventListener("focusin", f, {
        once: !0
      })) : (s == null || s.unregister(), document.removeEventListener("focusin", f));
    });
    function m(g) {
      s == null || s.closeParents(g);
    }
    function v(g) {
      var b, C, x;
      if (!e.disabled)
        if (g.key === "Tab" || g.key === "Enter" && !e.closeOnContentClick) {
          if (g.key === "Enter" && g.target instanceof HTMLTextAreaElement)
            return;
          g.key === "Enter" && g.preventDefault(), ra(xt((b = r.value) == null ? void 0 : b.contentEl, !1), g.shiftKey ? "prev" : "next", (_) => _.tabIndex >= 0) || (l.value = !1, (x = (C = r.value) == null ? void 0 : C.activatorEl) == null || x.focus());
        } else
          ["Enter", " "].includes(g.key) && e.closeOnContentClick && (l.value = !1, s == null || s.closeParents());
    }
    function d(g) {
      var C;
      if (e.disabled)
        return;
      const b = (C = r.value) == null ? void 0 : C.contentEl;
      b && l.value ? g.key === "ArrowDown" ? (g.preventDefault(), Wt(b, "next")) : g.key === "ArrowUp" && (g.preventDefault(), Wt(b, "prev")) : ["ArrowDown", "ArrowUp"].includes(g.key) && (l.value = !0, g.preventDefault(), setTimeout(() => setTimeout(() => d(g))));
    }
    const y = h(() => Q({
      "aria-haspopup": "menu",
      "aria-expanded": String(l.value),
      "aria-owns": o.value,
      onKeydown: d
    }, e.activatorProps));
    return K(() => {
      const g = Qt.filterProps(e);
      return u(Qt, Q({
        ref: r,
        id: o.value,
        class: ["v-menu", e.class],
        style: e.style
      }, g, {
        modelValue: l.value,
        "onUpdate:modelValue": (b) => l.value = b,
        absolute: !0,
        activatorProps: y.value,
        "onClick:outside": m,
        onKeydown: v
      }, a), {
        activator: t.activator,
        default: function() {
          for (var b = arguments.length, C = new Array(b), x = 0; x < b; x++)
            C[x] = arguments[x];
          return u(de, {
            root: "VMenu"
          }, {
            default: () => {
              var w;
              return [(w = t.default) == null ? void 0 : w.call(t, ...C)];
            }
          });
        }
      });
    }), on({
      id: o,
      ΨopenChildren: c
    }, r);
  }
}), Ks = E({
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
}, "VCounter"), Ys = N()({
  name: "VCounter",
  functional: !0,
  props: Ks(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = h(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return K(() => u(He, {
      transition: e.transition
    }, {
      default: () => [Ve(u("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [t.default ? t.default({
        counter: l.value,
        max: e.max,
        value: e.value
      }) : l.value]), [[ut, e.active]])]
    })), {};
  }
}), Xs = E({
  floating: Boolean,
  ...X()
}, "VFieldLabel"), Mt = N()({
  name: "VFieldLabel",
  props: Xs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return K(() => u(Si, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
}), Qs = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Ti = E({
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
    validator: (e) => Qs.includes(e)
  },
  "onClick:clear": we(),
  "onClick:appendInner": we(),
  "onClick:prependInner": we(),
  ...X(),
  ...Oa(),
  ...Le(),
  ...me()
}, "VField"), Li = N()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...xi(),
    ...Ti()
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
    } = be(e), {
      loaderClasses: o
    } = $a(e), {
      focusClasses: r,
      isFocused: s,
      focus: c,
      blur: f
    } = _i(e), {
      InputIcon: m
    } = ki(e), {
      roundedClasses: v
    } = Oe(e), {
      rtlClasses: d
    } = ze(), y = h(() => e.dirty || e.active), g = h(() => !e.singleLine && !!(e.label || a.label)), b = Te(), C = h(() => e.id || `input-${b}`), x = h(() => `${C.value}-messages`), w = z(), _ = z(), L = z(), B = h(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: S,
      backgroundColorStyles: F
    } = Ee(D(e, "bgColor")), {
      textColorClasses: j,
      textColorStyles: W
    } = nt(h(() => e.error || e.disabled ? void 0 : y.value && s.value ? e.color : e.baseColor));
    q(y, (T) => {
      if (g.value) {
        const M = w.value.$el, Y = _.value.$el;
        requestAnimationFrame(() => {
          const ee = Dn(M), V = Y.getBoundingClientRect(), I = V.x - ee.x, p = V.y - ee.y - (ee.height / 2 - V.height / 2), P = V.width / 0.75, $ = Math.abs(P - ee.width) > 1 ? {
            maxWidth: G(P)
          } : void 0, U = getComputedStyle(M), te = getComputedStyle(Y), R = parseFloat(U.transitionDuration) * 1e3 || 150, ne = parseFloat(te.getPropertyValue("--v-field-label-scale")), oe = te.getPropertyValue("color");
          M.style.visibility = "visible", Y.style.visibility = "hidden", it(M, {
            transform: `translate(${I}px, ${p}px) scale(${ne})`,
            color: oe,
            ...$
          }, {
            duration: R,
            easing: qt,
            direction: T ? "normal" : "reverse"
          }).finished.then(() => {
            M.style.removeProperty("visibility"), Y.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const O = h(() => ({
      isActive: y,
      isFocused: s,
      controlRef: L,
      blur: f,
      focus: c
    }));
    function k(T) {
      T.target !== document.activeElement && T.preventDefault();
    }
    function A(T) {
      var M;
      T.key !== "Enter" && T.key !== " " || (T.preventDefault(), T.stopPropagation(), (M = e["onClick:clear"]) == null || M.call(e, new MouseEvent("click")));
    }
    return K(() => {
      var I, p, P;
      const T = e.variant === "outlined", M = !!(a["prepend-inner"] || e.prependInnerIcon), Y = !!(e.clearable || a.clear), ee = !!(a["append-inner"] || e.appendInnerIcon || Y), V = () => a.label ? a.label({
        ...O.value,
        label: e.label,
        props: {
          for: C.value
        }
      }) : e.label;
      return u("div", Q({
        class: ["v-field", {
          "v-field--active": y.value,
          "v-field--appended": ee,
          "v-field--center-affix": e.centerAffix ?? !B.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": M,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !V(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, S.value, r.value, o.value, v.value, d.value, e.class],
        style: [F.value, e.style],
        onClick: k
      }, t), [u("div", {
        class: "v-field__overlay"
      }, null), u(Fa, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: a.loader
      }), M && u("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && u(m, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (I = a["prepend-inner"]) == null ? void 0 : I.call(a, O.value)]), u("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && g.value && u(Mt, {
        key: "floating-label",
        ref: _,
        class: [j.value],
        floating: !0,
        for: C.value,
        style: W.value
      }, {
        default: () => [V()]
      }), u(Mt, {
        ref: w,
        for: C.value
      }, {
        default: () => [V()]
      }), (p = a.default) == null ? void 0 : p.call(a, {
        ...O.value,
        props: {
          id: C.value,
          class: "v-field__input",
          "aria-describedby": x.value
        },
        focus: c,
        blur: f
      })]), Y && u(ka, {
        key: "clear"
      }, {
        default: () => [Ve(u("div", {
          class: "v-field__clearable",
          onMousedown: ($) => {
            $.preventDefault(), $.stopPropagation();
          }
        }, [u(de, {
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
              onBlur: f,
              onClick: e["onClick:clear"]
            }
          }) : u(m, {
            name: "clear",
            onKeydown: A,
            onFocus: c,
            onBlur: f
          }, null)]
        })]), [[ut, e.dirty]])]
      }), ee && u("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(P = a["append-inner"]) == null ? void 0 : P.call(a, O.value), e.appendInnerIcon && u(m, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), u("div", {
        class: ["v-field__outline", j.value],
        style: W.value
      }, [T && u(ie, null, [u("div", {
        class: "v-field__outline__start"
      }, null), g.value && u("div", {
        class: "v-field__outline__notch"
      }, [u(Mt, {
        ref: _,
        floating: !0,
        for: C.value
      }, {
        default: () => [V()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), B.value && g.value && u(Mt, {
        ref: _,
        floating: !0,
        for: C.value
      }, {
        default: () => [V()]
      })])]);
    }), {
      controlRef: L
    };
  }
});
function Js(e) {
  const n = Object.keys(Li.props).filter((t) => !Mn(t) && t !== "class" && t !== "style");
  return na(e, n);
}
const Zs = ["color", "file", "time", "date", "datetime-local", "week", "month"], Oi = E({
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
  ...Ii(),
  ...Ti()
}, "VTextField"), Yl = N()({
  name: "VTextField",
  directives: {
    Intersect: Va
  },
  inheritAttrs: !1,
  props: Oi(),
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
    const i = se(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: s
    } = _i(e), c = h(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), f = h(() => {
      if (t.maxlength)
        return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), m = h(() => ["plain", "underlined"].includes(e.variant));
    function v(B, S) {
      var F, j;
      !e.autofocus || !B || (j = (F = S[0].target) == null ? void 0 : F.focus) == null || j.call(F);
    }
    const d = z(), y = z(), g = z(), b = h(() => Zs.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function C() {
      var B;
      g.value !== document.activeElement && ((B = g.value) == null || B.focus()), o.value || r();
    }
    function x(B) {
      l("mousedown:control", B), B.target !== g.value && (C(), B.preventDefault());
    }
    function w(B) {
      C(), l("click:control", B);
    }
    function _(B) {
      B.stopPropagation(), C(), ye(() => {
        i.value = null, eo(e["onClick:clear"], B);
      });
    }
    function L(B) {
      var F;
      const S = B.target;
      if (i.value = S.value, (F = e.modelModifiers) != null && F.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const j = [S.selectionStart, S.selectionEnd];
        ye(() => {
          S.selectionStart = j[0], S.selectionEnd = j[1];
        });
      }
    }
    return K(() => {
      const B = !!(a.counter || e.counter !== !1 && e.counter != null), S = !!(B || a.details), [F, j] = aa(t), {
        modelValue: W,
        ...O
      } = Ul.filterProps(e), k = Js(e);
      return u(Ul, Q({
        ref: d,
        modelValue: i.value,
        "onUpdate:modelValue": (A) => i.value = A,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": m.value
        }, e.class],
        style: e.style
      }, F, O, {
        centerAffix: !m.value,
        focused: o.value
      }), {
        ...a,
        default: (A) => {
          let {
            id: T,
            isDisabled: M,
            isDirty: Y,
            isReadonly: ee,
            isValid: V
          } = A;
          return u(Li, Q({
            ref: y,
            onMousedown: x,
            onClick: w,
            "onClick:clear": _,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, k, {
            id: T.value,
            active: b.value || Y.value,
            dirty: Y.value || e.dirty,
            disabled: M.value,
            focused: o.value,
            error: V.value === !1
          }), {
            ...a,
            default: (I) => {
              let {
                props: {
                  class: p,
                  ...P
                }
              } = I;
              const $ = Ve(u("input", Q({
                ref: g,
                value: i.value,
                onInput: L,
                autofocus: e.autofocus,
                readonly: ee.value,
                disabled: M.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: C,
                onBlur: s
              }, P, j), null), [[Je("intersect"), {
                handler: v
              }, null, {
                once: !0
              }]]);
              return u(ie, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [u("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), a.default ? u("div", {
                class: p,
                "data-no-activator": ""
              }, [a.default(), $]) : Ki($, {
                class: p
              }), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [u("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: S ? (A) => {
          var T;
          return u(ie, null, [(T = a.details) == null ? void 0 : T.call(a, A), B && u(ie, null, [u("span", null, null), u(Ys, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: f.value,
            disabled: e.disabled
          }, a.counter)])]);
        } : void 0
      });
    }), on({}, d, y, g);
  }
}), eu = E({
  renderless: Boolean,
  ...X()
}, "VVirtualScrollItem"), tu = N()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: eu(),
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
    } = Vt(void 0, "border");
    q(() => {
      var r;
      return (r = o.value) == null ? void 0 : r.height;
    }, (r) => {
      r != null && l("update:height", r);
    }), K(() => {
      var r, s;
      return e.renderless ? u(ie, null, [(r = a.default) == null ? void 0 : r.call(a, {
        itemRef: i
      })]) : u("div", Q({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, t), [(s = a.default) == null ? void 0 : s.call(a)]);
    });
  }
}), nu = -1, lu = 1, hn = 100, au = E({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function iu(e, n) {
  const t = Ot(), l = H(0);
  We(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = H(0), i = H(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (l.value || 16)
  ) || 1), o = H(0), r = H(0), s = z(), c = z();
  let f = 0;
  const {
    resizeRef: m,
    contentRect: v
  } = Vt();
  We(() => {
    m.value = s.value;
  });
  const d = h(() => {
    var I;
    return s.value === document.documentElement ? t.height.value : ((I = v.value) == null ? void 0 : I.height) || parseInt(e.height) || 0;
  }), y = h(() => !!(s.value && c.value && d.value && l.value));
  let g = Array.from({
    length: n.value.length
  }), b = Array.from({
    length: n.value.length
  });
  const C = H(0);
  let x = -1;
  function w(I) {
    return g[I] || l.value;
  }
  const _ = Ji(() => {
    const I = performance.now();
    b[0] = 0;
    const p = n.value.length;
    for (let P = 1; P <= p - 1; P++)
      b[P] = (b[P - 1] || 0) + w(P - 1);
    C.value = Math.max(C.value, performance.now() - I);
  }, C), L = q(y, (I) => {
    I && (L(), f = c.value.offsetTop, _.immediate(), M(), ~x && ye(() => {
      fe && window.requestAnimationFrame(() => {
        ee(x), x = -1;
      });
    }));
  });
  he(() => {
    _.clear();
  });
  function B(I, p) {
    const P = g[I], $ = l.value;
    l.value = $ ? Math.min(l.value, p) : p, (P !== p || $ !== l.value) && (g[I] = p, _());
  }
  function S(I) {
    return I = De(I, 0, n.value.length - 1), b[I] || 0;
  }
  function F(I) {
    return ou(b, I);
  }
  let j = 0, W = 0, O = 0;
  q(d, (I, p) => {
    p && (M(), I < p && requestAnimationFrame(() => {
      W = 0, M();
    }));
  });
  function k() {
    if (!s.value || !c.value)
      return;
    const I = s.value.scrollTop, p = performance.now();
    p - O > 500 ? (W = Math.sign(I - j), f = c.value.offsetTop) : W = I - j, j = I, O = p, M();
  }
  function A() {
    !s.value || !c.value || (W = 0, O = 0, M());
  }
  let T = -1;
  function M() {
    cancelAnimationFrame(T), T = requestAnimationFrame(Y);
  }
  function Y() {
    if (!s.value || !d.value)
      return;
    const I = j - f, p = Math.sign(W), P = Math.max(0, I - hn), $ = De(F(P), 0, n.value.length), U = I + d.value + hn, te = De(F(U) + 1, $ + 1, n.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (p !== nu || $ < a.value) && (p !== lu || te > i.value)
    ) {
      const R = S(a.value) - S($), ne = S(te) - S(i.value);
      Math.max(R, ne) > hn ? (a.value = $, i.value = te) : ($ <= 0 && (a.value = $), te >= n.value.length && (i.value = te));
    }
    o.value = S(a.value), r.value = S(n.value.length) - S(i.value);
  }
  function ee(I) {
    const p = S(I);
    !s.value || I && !p ? x = I : s.value.scrollTop = p;
  }
  const V = h(() => n.value.slice(a.value, i.value).map((I, p) => ({
    raw: I,
    index: p + a.value
  })));
  return q(n, () => {
    g = Array.from({
      length: n.value.length
    }), b = Array.from({
      length: n.value.length
    }), _.immediate(), M();
  }, {
    deep: !0
  }), {
    containerRef: s,
    markerRef: c,
    computedItems: V,
    paddingTop: o,
    paddingBottom: r,
    scrollToIndex: ee,
    handleScroll: k,
    handleScrollend: A,
    handleItemResize: B
  };
}
function ou(e, n) {
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
const ru = E({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...au(),
  ...X(),
  ...et()
}, "VVirtualScroll"), su = N()({
  name: "VVirtualScroll",
  props: ru(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const l = ue("VVirtualScroll"), {
      dimensionStyles: a
    } = tt(e), {
      containerRef: i,
      markerRef: o,
      handleScroll: r,
      handleScrollend: s,
      handleItemResize: c,
      scrollToIndex: f,
      paddingTop: m,
      paddingBottom: v,
      computedItems: d
    } = iu(e, D(e, "items"));
    return Ge(() => e.renderless, () => {
      function y() {
        var C, x;
        const b = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        i.value === document.documentElement ? (document[b]("scroll", r, {
          passive: !0
        }), document[b]("scrollend", s)) : ((C = i.value) == null || C[b]("scroll", r, {
          passive: !0
        }), (x = i.value) == null || x[b]("scrollend", s));
      }
      Ze(() => {
        i.value = ma(l.vnode.el, !0), y(!0);
      }), he(y);
    }), K(() => {
      const y = d.value.map((g) => u(tu, {
        key: g.index,
        renderless: e.renderless,
        "onUpdate:height": (b) => c(g.index, b)
      }, {
        default: (b) => {
          var C;
          return (C = t.default) == null ? void 0 : C.call(t, {
            item: g.raw,
            index: g.index,
            ...b
          });
        }
      }));
      return e.renderless ? u(ie, null, [u("div", {
        ref: o,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: G(m.value)
        }
      }, null), y, u("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: G(v.value)
        }
      }, null)]) : u("div", {
        ref: i,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: r,
        onScrollend: s,
        style: [a.value, e.style]
      }, [u("div", {
        ref: o,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: G(m.value),
          paddingBottom: G(v.value)
        }
      }, [y])]);
    }), {
      scrollToIndex: f
    };
  }
});
function uu(e, n) {
  const t = H(!1);
  let l;
  function a(r) {
    cancelAnimationFrame(l), t.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (t.value) {
        const s = q(t, () => {
          s(), r();
        });
      } else
        r();
    });
  }
  async function o(r) {
    var f, m;
    if (r.key === "Tab" && ((f = n.value) == null || f.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key))
      return;
    const s = (m = e.value) == null ? void 0 : m.$el;
    if (!s)
      return;
    (r.key === "Home" || r.key === "End") && s.scrollTo({
      top: r.key === "Home" ? 0 : s.scrollHeight,
      behavior: "smooth"
    }), await i();
    const c = s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const v = s.getBoundingClientRect().top;
      for (const d of c)
        if (d.getBoundingClientRect().top >= v) {
          d.focus();
          break;
        }
    } else {
      const v = s.getBoundingClientRect().bottom;
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
const cu = E({
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
  ...yi({
    itemChildren: !1
  })
}, "Select"), du = E({
  ...cu(),
  ...dt(Oi({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...$t({
    transition: {
      component: Un
    }
  })
}, "VSelect"), fu = N()({
  name: "VSelect",
  props: du(),
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
    } = Wn(), a = z(), i = z(), o = z(), r = se(e, "menu"), s = h({
      get: () => r.value,
      set: (V) => {
        var I;
        r.value && !V && ((I = i.value) != null && I.ΨopenChildren) || (r.value = V);
      }
    }), {
      items: c,
      transformIn: f,
      transformOut: m
    } = xs(e), v = se(e, "modelValue", [], (V) => f(V === null ? [null] : Ie(V)), (V) => {
      const I = m(V);
      return e.multiple ? I : I[0] ?? null;
    }), d = h(() => typeof e.counterValue == "function" ? e.counterValue(v.value) : typeof e.counterValue == "number" ? e.counterValue : v.value.length), y = Vi(), g = h(() => v.value.map((V) => V.value)), b = H(!1), C = h(() => s.value ? e.closeText : e.openText);
    let x = "", w;
    const _ = h(() => e.hideSelected ? c.value.filter((V) => !v.value.some((I) => e.valueComparator(I, V))) : c.value), L = h(() => e.hideNoData && !_.value.length || e.readonly || (y == null ? void 0 : y.isReadonly.value)), B = h(() => {
      var V;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((V = e.menuProps) == null ? void 0 : V.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), S = z(), {
      onListScroll: F,
      onListKeydown: j
    } = uu(S, a);
    function W(V) {
      e.openOnClear && (s.value = !0);
    }
    function O() {
      L.value || (s.value = !s.value);
    }
    function k(V) {
      var U, te;
      if (!V.key || e.readonly || y != null && y.isReadonly.value)
        return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(V.key) && V.preventDefault(), ["Enter", "ArrowDown", " "].includes(V.key) && (s.value = !0), ["Escape", "Tab"].includes(V.key) && (s.value = !1), V.key === "Home" ? (U = S.value) == null || U.focus("first") : V.key === "End" && ((te = S.value) == null || te.focus("last"));
      const I = 1e3;
      function p(R) {
        const ne = R.key.length === 1, oe = !R.ctrlKey && !R.metaKey && !R.altKey;
        return ne && oe;
      }
      if (e.multiple || !p(V))
        return;
      const P = performance.now();
      P - w > I && (x = ""), x += V.key.toLowerCase(), w = P;
      const $ = c.value.find((R) => R.title.toLowerCase().startsWith(x));
      if ($ !== void 0) {
        v.value = [$];
        const R = _.value.indexOf($);
        fe && window.requestAnimationFrame(() => {
          var ne;
          R >= 0 && ((ne = o.value) == null || ne.scrollToIndex(R));
        });
      }
    }
    function A(V) {
      let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!V.props.disabled)
        if (e.multiple) {
          const p = v.value.findIndex(($) => e.valueComparator($.value, V.value)), P = I ?? !~p;
          if (~p) {
            const $ = P ? [...v.value, V] : [...v.value];
            $.splice(p, 1), v.value = $;
          } else
            P && (v.value = [...v.value, V]);
        } else {
          const p = I !== !1;
          v.value = p ? [V] : [], ye(() => {
            s.value = !1;
          });
        }
    }
    function T(V) {
      var I;
      (I = S.value) != null && I.$el.contains(V.relatedTarget) || (s.value = !1);
    }
    function M() {
      var V;
      b.value && ((V = a.value) == null || V.focus());
    }
    function Y(V) {
      b.value = !0;
    }
    function ee(V) {
      if (V == null)
        v.value = [];
      else if (Gt(a.value, ":autofill") || Gt(a.value, ":-webkit-autofill")) {
        const I = c.value.find((p) => p.title === V);
        I && A(I);
      } else
        a.value && (a.value.value = "");
    }
    return q(s, () => {
      if (!e.hideSelected && s.value && v.value.length) {
        const V = _.value.findIndex((I) => v.value.some((p) => e.valueComparator(p.value, I.value)));
        fe && window.requestAnimationFrame(() => {
          var I;
          V >= 0 && ((I = o.value) == null || I.scrollToIndex(V));
        });
      }
    }), q(() => e.items, (V, I) => {
      s.value || b.value && !I.length && V.length && (s.value = !0);
    }), K(() => {
      const V = !!(e.chips || t.chip), I = !!(!e.hideNoData || _.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), p = v.value.length > 0, P = Yl.filterProps(e), $ = p || !b.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return u(Yl, Q({
        ref: a
      }, P, {
        modelValue: v.value.map((U) => U.props.value).join(", "),
        "onUpdate:modelValue": ee,
        focused: b.value,
        "onUpdate:focused": (U) => b.value = U,
        validationValue: v.externalValue,
        counterValue: d.value,
        dirty: p,
        class: ["v-select", {
          "v-select--active-menu": s.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": v.value.length,
          "v-select--selection-slot": !!t.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: $,
        "onClick:clear": W,
        "onMousedown:control": O,
        onBlur: T,
        onKeydown: k,
        "aria-label": l(C.value),
        title: l(C.value)
      }), {
        ...t,
        default: () => u(ie, null, [u(qs, Q({
          ref: i,
          modelValue: s.value,
          "onUpdate:modelValue": (U) => s.value = U,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: L.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: M
        }, B.value), {
          default: () => [I && u(Ps, Q({
            ref: S,
            selected: g.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (U) => U.preventDefault(),
            onKeydown: j,
            onFocusin: Y,
            onScrollPassive: F,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var U, te, R;
              return [(U = t["prepend-item"]) == null ? void 0 : U.call(t), !_.value.length && !e.hideNoData && (((te = t["no-data"]) == null ? void 0 : te.call(t)) ?? u(Ne, {
                title: l(e.noDataText)
              }, null)), u(su, {
                ref: o,
                renderless: !0,
                items: _.value
              }, {
                default: (ne) => {
                  var rl;
                  let {
                    item: oe,
                    index: ce,
                    itemRef: Se
                  } = ne;
                  const ol = Q(oe.props, {
                    ref: Se,
                    key: ce,
                    onClick: () => A(oe, null)
                  });
                  return ((rl = t.item) == null ? void 0 : rl.call(t, {
                    item: oe,
                    index: ce,
                    props: ol
                  })) ?? u(Ne, Q(ol, {
                    role: "option"
                  }), {
                    prepend: (Ri) => {
                      let {
                        isSelected: Mi
                      } = Ri;
                      return u(ie, null, [e.multiple && !e.hideSelected ? u(Os, {
                        key: oe.value,
                        modelValue: Mi,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, oe.props.prependAvatar && u(Qe, {
                        image: oe.props.prependAvatar
                      }, null), oe.props.prependIcon && u(ae, {
                        icon: oe.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (R = t["append-item"]) == null ? void 0 : R.call(t)];
            }
          })]
        }), v.value.map((U, te) => {
          function R(Se) {
            Se.stopPropagation(), Se.preventDefault(), A(U, !1);
          }
          const ne = {
            "onClick:close": R,
            onKeydown(Se) {
              Se.key !== "Enter" && Se.key !== " " || (Se.preventDefault(), Se.stopPropagation(), R(Se));
            },
            onMousedown(Se) {
              Se.preventDefault(), Se.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, oe = V ? !!t.chip : !!t.selection, ce = oe ? sa(V ? t.chip({
            item: U,
            index: te,
            props: ne
          }) : t.selection({
            item: U,
            index: te
          })) : void 0;
          if (!(oe && !ce))
            return u("div", {
              key: U.value,
              class: "v-select__selection"
            }, [V ? t.chip ? u(de, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: U.title
                }
              }
            }, {
              default: () => [ce]
            }) : u(En, Q({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: U.title,
              disabled: U.props.disabled
            }, ne), null) : ce ?? u("span", {
              class: "v-select__selection-text"
            }, [U.title, e.multiple && te < v.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [$e(",")])])]);
        })]),
        "append-inner": function() {
          var ne;
          for (var U = arguments.length, te = new Array(U), R = 0; R < U; R++)
            te[R] = arguments[R];
          return u(ie, null, [(ne = t["append-inner"]) == null ? void 0 : ne.call(t, ...te), e.menuIcon ? u(ae, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), on({
      isFocused: b,
      menu: s,
      select: A
    }, a);
  }
}), $i = (e) => (On("data-v-2e38d913"), e = e(), $n(), e), vu = ["href"], mu = /* @__PURE__ */ $i(() => /* @__PURE__ */ Z("img", {
  src: "https://firebasestorage.googleapis.com/v0/b/ccaf-afea-test.appspot.com/o/logo.webp?alt=media&token=f4da887e-96cf-4325-b67b-5afd938250bf",
  width: "179",
  height: "52",
  alt: "Cambridge Centre for Alternative Finance (CCAF.io)"
}, null, -1)), gu = [
  mu
], yu = {
  class: "ma-0 ml-8 d-none d-sm-flex header__title",
  style: { "font-family": "MyriadProSemiBold !important" }
}, hu = { class: "project-selector" }, bu = /* @__PURE__ */ $i(() => /* @__PURE__ */ Z("strong", { style: { "font-size": "14px", "font-weight": "600" } }, "CBNSI", -1)), Su = { class: "header__nav-icon hidden-lg-and-up" }, Cu = /* @__PURE__ */ Tt({
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
    const { mdAndUp: n } = Ot(), t = e, l = z(!1), a = z([
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
    ]), i = z(a.value[1]), o = (r) => {
      const s = a.value.find(
        (c) => {
          if (typeof r == "string")
            return c.title === r;
        }
      );
      s && (window.location.href = `https://${t.env}ccaf.io/${s.link}`);
    };
    return (r, s) => (Ce(), rt(Qo, {
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
        u(kt, {
          align: "center",
          justify: "start",
          class: "header__logo"
        }, {
          default: J(() => [
            Z("a", {
              title: "CCAF.io",
              href: `https://${e.env}ccaf.io/`
            }, gu, 8, vu),
            Z("h4", yu, Pe(e.title), 1),
            u(ri),
            Z("div", hu, [
              ge(n) ? (Ce(), rt(fu, {
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
                  bu
                ]),
                item: J(({ item: c, props: f }) => [
                  u(Ne, Q(f, {
                    title: c.value,
                    subtitle: c.title || void 0
                  }), null, 16, ["title", "subtitle"])
                ]),
                _: 1
              }, 8, ["model-value", "items"])) : St("", !0)
            ])
          ]),
          _: 1
        }),
        u(qr, {
          modelValue: l.value,
          "onUpdate:modelValue": s[0] || (s[0] = (c) => l.value = c),
          fullscreen: ""
        }, {
          activator: J(() => [
            Z("div", Su, [
              u(ae, { color: "#000" }, {
                default: J(() => [
                  $e(Pe(l.value ? "mdi-close" : "mdi-menu"), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: J(() => [
            bn(r.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["modelValue"])
      ]),
      _: 3
    }));
  }
}), rn = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, a] of n)
    t[l] = a;
  return t;
}, nc = /* @__PURE__ */ rn(Cu, [["__scopeId", "data-v-2e38d913"]]), pu = E({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...vt(),
  ...X(),
  ...gt(),
  ...ha(),
  ...Le(),
  ...re({
    tag: "footer"
  }),
  ...me()
}, "VFooter"), wu = N()({
  name: "VFooter",
  props: pu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: l
    } = be(e), {
      backgroundColorClasses: a,
      backgroundColorStyles: i
    } = Ee(D(e, "color")), {
      borderClasses: o
    } = mt(e), {
      elevationClasses: r
    } = yt(e), {
      roundedClasses: s
    } = Oe(e), c = H(32), {
      resizeRef: f
    } = Vt((y) => {
      y.length && (c.value = y[0].target.clientHeight);
    }), m = h(() => e.height === "auto" ? c.value : parseInt(e.height, 10)), {
      layoutItemStyles: v,
      layoutIsReady: d
    } = ba({
      id: e.name,
      order: h(() => parseInt(e.order, 10)),
      position: h(() => "bottom"),
      layoutSize: m,
      elementSize: h(() => e.height === "auto" ? void 0 : m.value),
      active: h(() => e.app),
      absolute: D(e, "absolute")
    });
    return K(() => u(e.tag, {
      ref: f,
      class: ["v-footer", l.value, a.value, o.value, r.value, s.value, e.class],
      style: [i.value, e.app ? v.value : {
        height: G(e.height)
      }, e.style]
    }, t)), e.app ? d : {};
  }
}), il = (e) => (On("data-v-1218adb2"), e = e(), $n(), e), ku = ["href"], xu = ["href"], _u = ["href"], Vu = { class: "ml-7" }, Iu = ["href"], Au = ["href"], Pu = {
  key: 2,
  class: "link-icon",
  href: "facebookLink",
  target: "_blank"
}, Eu = /* @__PURE__ */ il(() => /* @__PURE__ */ Z("a", {
  rel: "license",
  href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
  target: "_blank"
}, [
  /* @__PURE__ */ Z("img", {
    alt: "Creative Commons License",
    style: { "border-width": "0" },
    src: "https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg"
  })
], -1)), Bu = /* @__PURE__ */ il(() => /* @__PURE__ */ Z("br", null, null, -1)), Tu = /* @__PURE__ */ il(() => /* @__PURE__ */ Z("p", { style: { "font-size": "12px", "max-width": "280px" } }, [
  /* @__PURE__ */ $e(" This work is licensed under a "),
  /* @__PURE__ */ Z("a", {
    rel: "license",
    href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
    target: "_blank",
    style: { color: "#262b4a" }
  }, " Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ")
], -1)), Lu = {
  class: "mb-2",
  style: { "font-size": "16px", height: "20px" }
}, Ou = ["href"], $u = ["src", "width", "height", "alt"], Fu = ["href"], Ru = /* @__PURE__ */ Tt({
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
    const n = ya(), { smAndDown: t } = Ot(), l = z(!1);
    return Ze(() => {
      typeof window < "u" && (window.onscroll = () => {
        l.value = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
        const i = document.getElementById("sidebar"), o = document.getElementById("sidebar__menu"), r = document.getElementById("footer");
        if (o && i && r) {
          const s = window.innerHeight < o.getBoundingClientRect().height + 72 ? window.innerHeight - 72 : o.getBoundingClientRect().height, c = r.getBoundingClientRect().top, f = o.getBoundingClientRect().top, m = document.body.scrollTop;
          let v = Math.max(72, f - m);
          m + s + 72 > c && (v = Math.min(
            v,
            c - m - s
          )), i.style.top = v + "px";
        }
      });
    }), (a, i) => (Ce(), rt(wu, {
      id: "footer",
      color: "white",
      width: "100vw",
      class: "footer pa-0"
    }, {
      default: J(() => [
        l.value ? (Ce(), qe("div", {
          key: 0,
          class: "goup",
          onClick: i[0] || (i[0] = (o) => ge(n)(0, {
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
        ])) : St("", !0),
        u(Xa, { fluid: "" }, {
          default: J(() => [
            u(kt, {
              class: "footer__pre-footer",
              align: "start",
              justify: "start",
              "no-gutters": ""
            }, {
              default: J(() => [
                u(Fe, {
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
                      Z("p", null, Pe(e.webLink), 1)
                    ], 8, ku),
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
                      Z("p", null, Pe(e.email), 1)
                    ], 8, xu),
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
                      Z("p", null, Pe(e.location), 1)
                    ], 8, _u),
                    Z("div", Vu, [
                      u(kt, null, {
                        default: J(() => [
                          u(Fe, null, {
                            default: J(() => [
                              e.linkedinLink ? (Ce(), qe("a", {
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
                              ], 8, Iu)) : St("", !0),
                              e.twitterLink ? (Ce(), qe("a", {
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
                              ], 8, Au)) : St("", !0),
                              e.facebookLink ? (Ce(), qe("a", Pu, [
                                u(ae, {
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
                  _: 1
                }),
                u(Fe, {
                  cols: "auto",
                  class: "mb-4 pa-4"
                }, {
                  default: J(() => [
                    Eu,
                    Bu,
                    Tu
                  ]),
                  _: 1
                }),
                u(ri, { class: "hidden-sm-and-down" }),
                (Ce(!0), qe(ie, null, Zl(e.supportedBy, (o) => (Ce(), rt(Fe, {
                  key: o.id,
                  cols: "auto",
                  class: "pa-4"
                }, {
                  default: J(() => [
                    Z("div", Lu, [
                      Z("strong", null, Pe(o.description), 1)
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
                      }, null, 8, $u)
                    ], 8, Ou)
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }),
            u(kt, {
              class: "footer__main-footer",
              align: "center",
              justify: ge(t) ? "center" : "space-between",
              "no-gutters": ""
            }, {
              default: J(() => [
                u(Fe, {
                  class: Fn({ "footer-privacy": ge(t) }),
                  cols: "auto"
                }, {
                  default: J(() => [
                    Z("a", {
                      href: `https://${e.env}ccaf.io/privacy_policy`
                    }, " Privacy Policy ", 8, Fu)
                  ]),
                  _: 1
                }, 8, ["class"]),
                u(Fe, { cols: "auto" }, {
                  default: J(() => [
                    Z("span", null, "Cambridge Centre for Alternative Finance © " + Pe(" " + (/* @__PURE__ */ new Date()).getFullYear()), 1)
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
}), lc = /* @__PURE__ */ rn(Ru, [["__scopeId", "data-v-1218adb2"]]), Mu = N()({
  name: "VCardActions",
  props: X(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return ft({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), K(() => {
      var l;
      return u("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(l = t.default) == null ? void 0 : l.call(t)]);
    }), {};
  }
}), Nu = E({
  opacity: [Number, String],
  ...X(),
  ...re()
}, "VCardSubtitle"), Du = N()({
  name: "VCardSubtitle",
  props: Nu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return K(() => u(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), zu = Hn("v-card-title"), Hu = E({
  appendAvatar: String,
  appendIcon: le,
  prependAvatar: String,
  prependIcon: le,
  subtitle: [String, Number],
  title: [String, Number],
  ...X(),
  ...Ue()
}, "VCardItem"), ju = N()({
  name: "VCardItem",
  props: Hu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return K(() => {
      var c;
      const l = !!(e.prependAvatar || e.prependIcon), a = !!(l || t.prepend), i = !!(e.appendAvatar || e.appendIcon), o = !!(i || t.append), r = !!(e.title != null || t.title), s = !!(e.subtitle != null || t.subtitle);
      return u("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [a && u("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [t.prepend ? u(de, {
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
      }, t.prepend) : u(ie, null, [e.prependAvatar && u(Qe, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && u(ae, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), u("div", {
        class: "v-card-item__content"
      }, [r && u(zu, {
        key: "title"
      }, {
        default: () => {
          var f;
          return [((f = t.title) == null ? void 0 : f.call(t)) ?? e.title];
        }
      }), s && u(Du, {
        key: "subtitle"
      }, {
        default: () => {
          var f;
          return [((f = t.subtitle) == null ? void 0 : f.call(t)) ?? e.subtitle];
        }
      }), (c = t.default) == null ? void 0 : c.call(t)]), o && u("div", {
        key: "append",
        class: "v-card-item__append"
      }, [t.append ? u(de, {
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
      }, null), e.appendAvatar && u(Qe, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Wu = E({
  opacity: [Number, String],
  ...X(),
  ...re()
}, "VCardText"), Gu = N()({
  name: "VCardText",
  props: Wu(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return K(() => u(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), Uu = E({
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
  ...vt(),
  ...X(),
  ...Ue(),
  ...et(),
  ...gt(),
  ...Oa(),
  ...Ta(),
  ...cr(),
  ...Le(),
  ...Jn(),
  ...re(),
  ...me(),
  ...ht({
    variant: "elevated"
  })
}, "VCard"), qu = N()({
  name: "VCard",
  directives: {
    Ripple: an
  },
  props: Uu(),
  setup(e, n) {
    let {
      attrs: t,
      slots: l
    } = n;
    const {
      themeClasses: a
    } = be(e), {
      borderClasses: i
    } = mt(e), {
      colorClasses: o,
      colorStyles: r,
      variantClasses: s
    } = ln(e), {
      densityClasses: c
    } = lt(e), {
      dimensionStyles: f
    } = tt(e), {
      elevationClasses: m
    } = yt(e), {
      loaderClasses: v
    } = $a(e), {
      locationStyles: d
    } = La(e), {
      positionClasses: y
    } = dr(e), {
      roundedClasses: g
    } = Oe(e), b = Qn(e, t), C = h(() => e.link !== !1 && b.isLink.value), x = h(() => !e.disabled && e.link !== !1 && (e.link || b.isClickable.value));
    return K(() => {
      const w = C.value ? "a" : e.tag, _ = !!(l.title || e.title != null), L = !!(l.subtitle || e.subtitle != null), B = _ || L, S = !!(l.append || e.appendAvatar || e.appendIcon), F = !!(l.prepend || e.prependAvatar || e.prependIcon), j = !!(l.image || e.image), W = B || F || S, O = !!(l.text || e.text != null);
      return Ve(u(w, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": x.value
        }, a.value, i.value, o.value, c.value, m.value, v.value, y.value, g.value, s.value, e.class],
        style: [r.value, f.value, d.value, e.style],
        href: b.href.value,
        onClick: x.value && b.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var k;
          return [j && u("div", {
            key: "image",
            class: "v-card__image"
          }, [l.image ? u(de, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, l.image) : u(Kn, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(Fa, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: l.loader
          }), W && u(ju, {
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
          }), O && u(Gu, {
            key: "text"
          }, {
            default: () => {
              var A;
              return [((A = l.text) == null ? void 0 : A.call(l)) ?? e.text];
            }
          }), (k = l.default) == null ? void 0 : k.call(l), l.actions && u(Mu, null, {
            default: l.actions
          }), nn(x.value, "v-card")];
        }
      }), [[Je("ripple"), x.value && e.ripple]]);
    }), {};
  }
}), Ku = { class: "pa-4" }, Yu = { class: "chips" }, Xu = /* @__PURE__ */ Tt({
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
    return (l, a) => (Ce(), rt(qu, null, {
      default: J(() => [
        Z("h4", Ku, Pe(e.title), 1),
        bn(l.$slots, "switcher", {}, void 0, !0),
        bn(l.$slots, "default", {}, void 0, !0),
        u(Ne, {
          href: `https://${e.env}ccaf.io/`
        }, {
          default: J(() => [
            u(wt, { class: "list__title" }, {
              default: J(() => [
                $e(" CCAF Home ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["href"]),
        u(Ht),
        u(Ne, {
          href: `https://${e.env}ccaf.io/about_ccaf`
        }, {
          default: J(() => [
            u(wt, { class: "list__title" }, {
              default: J(() => [
                $e(" CCAF About ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["href"]),
        u(Ht),
        u(Ne, {
          href: `https://${e.env}ccaf.io/contact?topic=cbeci`
        }, {
          default: J(() => [
            u(wt, { class: "list__title" }, {
              default: J(() => [
                $e(" CCAF Contact ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["href"]),
        u(Ht),
        u(Ne, null, {
          default: J(() => [
            u(wt, { class: "list__title" }, {
              default: J(() => [
                $e(" CCAF Digital Tools: ")
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Z("div", Yu, [
          (Ce(!0), qe(ie, null, Zl(t.value, (i, o) => (Ce(), rt(En, {
            class: Fn(["chips__item", { "chips__item-active": !o }]),
            key: i.id,
            href: o ? `https://${e.env}ccaf.io/${i.link}` : void 0
          }, {
            default: J(() => [
              $e(Pe(i.tag || i.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "href"]))), 128)),
          u(En, { class: "chips__item" }, {
            default: J(() => [
              $e(" Atlas ")
            ]),
            _: 1
          })
        ])
      ]),
      _: 3
    }));
  }
}), ac = /* @__PURE__ */ rn(Xu, [["__scopeId", "data-v-0cbbe524"]]), Fi = (e) => (On("data-v-057ac096"), e = e(), $n(), e), Qu = { class: "app-loader__title" }, Ju = /* @__PURE__ */ Fi(() => /* @__PURE__ */ Z("div", { class: "lds-ring" }, [
  /* @__PURE__ */ Z("div"),
  /* @__PURE__ */ Z("div"),
  /* @__PURE__ */ Z("div"),
  /* @__PURE__ */ Z("div")
], -1)), Zu = /* @__PURE__ */ Fi(() => /* @__PURE__ */ Z("p", { class: "app-loader__state" }, "LOADING", -1)), ec = /* @__PURE__ */ Tt({
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
    return (n, t) => (Ce(), qe("div", {
      class: Fn(["app-loader", { "app-loader--visible": e.visible }])
    }, [
      u(Xa, null, {
        default: J(() => [
          u(kt, {
            align: "center",
            justify: "center",
            class: "flex-column"
          }, {
            default: J(() => [
              u(Fe, { cols: "12" }, {
                default: J(() => [
                  Z("h1", Qu, Pe(e.title), 1)
                ]),
                _: 1
              }),
              u(Fe, {
                cols: "12",
                class: "d-flex justify-center"
              }, {
                default: J(() => [
                  Ju
                ]),
                _: 1
              }),
              u(Fe, { cols: "12" }, {
                default: J(() => [
                  Zu
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
}), ic = /* @__PURE__ */ rn(ec, [["__scopeId", "data-v-057ac096"]]);
export {
  lc as LayoutFooter,
  nc as LayoutHeader,
  ic as Loader,
  ac as MobileMenu
};
