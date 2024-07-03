import V from "vue";
let K = !1;
try {
  if (typeof window < "u") {
    const s = Object.defineProperty({}, "passive", {
      get: () => {
        K = !0;
      }
    });
    window.addEventListener("testListener", s, s), window.removeEventListener("testListener", s, s);
  }
} catch (s) {
  console.warn(s);
}
function E(s, t, e) {
  const i = t.length - 1;
  if (i < 0) return s === void 0 ? e : s;
  for (let n = 0; n < i; n++) {
    if (s == null)
      return e;
    s = s[t[n]];
  }
  return s == null || s[t[i]] === void 0 ? e : s[t[i]];
}
function J(s, t, e) {
  return s == null || !t || typeof t != "string" ? e : s[t] !== void 0 ? s[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), E(s, t.split("."), e));
}
function F(s) {
  return s !== null && typeof s == "object";
}
function tt(s) {
  return Object.keys(s);
}
function et(s, t = 0, e = 1) {
  return Math.max(t, Math.min(e, s));
}
function g(s = {}, t = {}) {
  for (const e in t) {
    const i = s[e], n = t[e];
    if (F(i) && F(n)) {
      s[e] = g(i, n);
      continue;
    }
    s[e] = n;
  }
  return s;
}
function S(s, t = {}) {
  if (S.installed) return;
  S.installed = !0, V !== s && G(`Multiple instances of Vue detected
See https://github.com/vuetifyjs/vuetify/issues/4068

If you're seeing "$attrs is readonly", it's caused by this`);
  const e = t.components || {}, i = t.directives || {};
  for (const n in i) {
    const a = i[n];
    s.directive(n, a);
  }
  (function n(a) {
    if (a) {
      for (const r in a) {
        const c = a[r];
        c && !n(c.$_vuetify_subcomponents) && s.component(r, c);
      }
      return !0;
    }
    return !1;
  })(e), !s.$_vuetify_installed && (s.$_vuetify_installed = !0, s.mixin({
    beforeCreate() {
      const n = this.$options;
      n.vuetify ? (n.vuetify.init(this, this.$ssrContext), this.$vuetify = s.observable(n.vuetify.framework)) : this.$vuetify = n.parent && n.parent.$vuetify || this;
    },
    beforeMount() {
      this.$options.vuetify && this.$el && this.$el.hasAttribute("data-server-rendered") && (this.$vuetify.isHydrating = !0, this.$vuetify.breakpoint.update(!0));
    },
    mounted() {
      this.$options.vuetify && this.$vuetify.isHydrating && (this.$vuetify.isHydrating = !1, this.$vuetify.breakpoint.update());
    }
  }));
}
class u {
  constructor() {
    this.framework = {};
  }
  init(t, e) {
  }
}
class j extends u {
  constructor() {
    super(...arguments), this.bar = 0, this.top = 0, this.left = 0, this.insetFooter = 0, this.right = 0, this.bottom = 0, this.footer = 0, this.application = {
      bar: {},
      top: {},
      left: {},
      insetFooter: {},
      right: {},
      bottom: {},
      footer: {}
    };
  }
  register(t, e, i) {
    this.application[e][t] = i, this.update(e);
  }
  unregister(t, e) {
    this.application[e][t] != null && (delete this.application[e][t], this.update(e));
  }
  update(t) {
    this[t] = Object.values(this.application[t]).reduce((e, i) => e + i, 0);
  }
}
j.property = "application";
class w extends u {
  constructor(t) {
    super(), this.xs = !1, this.sm = !1, this.md = !1, this.lg = !1, this.xl = !1, this.xsOnly = !1, this.smOnly = !1, this.smAndDown = !1, this.smAndUp = !1, this.mdOnly = !1, this.mdAndDown = !1, this.mdAndUp = !1, this.lgOnly = !1, this.lgAndDown = !1, this.lgAndUp = !1, this.xlOnly = !1, this.name = "xs", this.height = 0, this.width = 0, this.mobile = !0, this.resizeTimeout = 0;
    const {
      mobileBreakpoint: e,
      scrollBarWidth: i,
      thresholds: n
    } = t[w.property];
    this.mobileBreakpoint = e, this.scrollBarWidth = i, this.thresholds = n;
  }
  init() {
    this.update(), !(typeof window > "u") && window.addEventListener("resize", this.onResize.bind(this), {
      passive: !0
    });
  }
  /* eslint-disable-next-line max-statements */
  update(t = !1) {
    const e = t ? 0 : this.getClientHeight(), i = t ? 0 : this.getClientWidth(), n = i < this.thresholds.xs, a = i < this.thresholds.sm && !n, r = i < this.thresholds.md - this.scrollBarWidth && !(a || n), c = i < this.thresholds.lg - this.scrollBarWidth && !(r || a || n), o = i >= this.thresholds.lg - this.scrollBarWidth;
    switch (this.height = e, this.width = i, this.xs = n, this.sm = a, this.md = r, this.lg = c, this.xl = o, this.xsOnly = n, this.smOnly = a, this.smAndDown = (n || a) && !(r || c || o), this.smAndUp = !n && (a || r || c || o), this.mdOnly = r, this.mdAndDown = (n || a || r) && !(c || o), this.mdAndUp = !(n || a) && (r || c || o), this.lgOnly = c, this.lgAndDown = (n || a || r || c) && !o, this.lgAndUp = !(n || a || r) && (c || o), this.xlOnly = o, !0) {
      case n:
        this.name = "xs";
        break;
      case a:
        this.name = "sm";
        break;
      case r:
        this.name = "md";
        break;
      case c:
        this.name = "lg";
        break;
      default:
        this.name = "xl";
        break;
    }
    if (typeof this.mobileBreakpoint == "number") {
      this.mobile = i < parseInt(this.mobileBreakpoint, 10);
      return;
    }
    const l = {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    }, f = l[this.name], d = l[this.mobileBreakpoint];
    this.mobile = f <= d;
  }
  onResize() {
    clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(this.update.bind(this), 200);
  }
  // Cross-browser support as described in:
  // https://stackoverflow.com/questions/1248081
  getClientWidth() {
    return typeof document > "u" ? 0 : Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  getClientHeight() {
    return typeof document > "u" ? 0 : Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
}
w.property = "breakpoint";
const st = (s) => s, it = (s) => s ** 2, nt = (s) => s * (2 - s), at = (s) => s < 0.5 ? 2 * s ** 2 : -1 + (4 - 2 * s) * s, rt = (s) => s ** 3, ot = (s) => --s ** 3 + 1, ct = (s) => s < 0.5 ? 4 * s ** 3 : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1, lt = (s) => s ** 4, ft = (s) => 1 - --s ** 4, dt = (s) => s < 0.5 ? 8 * s * s * s * s : 1 - 8 * --s * s * s * s, ut = (s) => s ** 5, ht = (s) => 1 + --s ** 5, pt = (s) => s < 0.5 ? 16 * s ** 5 : 1 + 16 * --s ** 5, mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  easeInCubic: rt,
  easeInOutCubic: ct,
  easeInOutQuad: at,
  easeInOutQuart: dt,
  easeInOutQuint: pt,
  easeInQuad: it,
  easeInQuart: lt,
  easeInQuint: ut,
  easeOutCubic: ot,
  easeOutQuad: nt,
  easeOutQuart: ft,
  easeOutQuint: ht,
  linear: st
}, Symbol.toStringTag, { value: "Module" }));
function T(s) {
  if (typeof s == "number")
    return s;
  let t = Z(s);
  if (!t)
    throw typeof s == "string" ? new Error(`Target element "${s}" not found.`) : new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${B(s)} instead.`);
  let e = 0;
  for (; t; )
    e += t.offsetTop, t = t.offsetParent;
  return e;
}
function gt(s) {
  const t = Z(s);
  if (t) return t;
  throw typeof s == "string" ? new Error(`Container element "${s}" not found.`) : new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${B(s)} instead.`);
}
function B(s) {
  return s == null ? s : s.constructor.name;
}
function Z(s) {
  return typeof s == "string" ? document.querySelector(s) : s && s._isVue ? s.$el : s instanceof HTMLElement ? s : null;
}
function L(s, t = {}) {
  const e = {
    container: document.scrollingElement || document.body || document.documentElement,
    duration: 500,
    offset: 0,
    easing: "easeInOutCubic",
    appOffset: !0,
    ...t
  }, i = gt(e.container);
  if (e.appOffset && L.framework.application) {
    const o = i.classList.contains("v-navigation-drawer"), l = i.classList.contains("v-navigation-drawer--clipped"), {
      bar: f,
      top: d
    } = L.framework.application;
    e.offset += f, (!o || l) && (e.offset += d);
  }
  const n = performance.now();
  let a;
  typeof s == "number" ? a = T(s) - e.offset : a = T(s) - T(i) - e.offset;
  const r = i.scrollTop;
  if (a === r) return Promise.resolve(a);
  const c = typeof e.easing == "function" ? e.easing : mt[e.easing];
  if (!c) throw new TypeError(`Easing function "${e.easing}" not found.`);
  return new Promise((o) => requestAnimationFrame(function l(f) {
    const d = f - n, p = Math.abs(e.duration ? Math.min(d / e.duration, 1) : 1);
    i.scrollTop = Math.floor(r + (a - r) * c(p));
    const _ = (i === document.body ? document.documentElement.clientHeight : i.clientHeight) + i.scrollTop >= i.scrollHeight;
    if (p === 1 || // Need to go lower but reach bottom
    a > i.scrollTop && _)
      return o(a);
    requestAnimationFrame(l);
  }));
}
L.framework = {};
L.init = () => {
};
class I extends u {
  constructor() {
    return super(), L;
  }
}
I.property = "goTo";
const vt = {
  complete: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
  cancel: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  close: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
  delete: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  clear: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  success: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",
  info: "M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  warning: "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
  error: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
  prev: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
  next: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
  checkboxOn: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  checkboxOff: "M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",
  checkboxIndeterminate: "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
  delimiter: "M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  sort: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
  expand: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
  menu: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
  subgroup: "M7,10L12,15L17,10H7Z",
  dropdown: "M7,10L12,15L17,10H7Z",
  radioOn: "M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",
  radioOff: "M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
  edit: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",
  ratingEmpty: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  ratingFull: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
  ratingHalf: "M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
  loading: "M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",
  first: "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",
  last: "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",
  unfold: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
  file: "M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",
  plus: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
  minus: "M19,13H5V11H19V13Z"
}, yt = {
  complete: "check",
  cancel: "cancel",
  close: "close",
  delete: "cancel",
  clear: "clear",
  success: "check_circle",
  info: "info",
  warning: "priority_high",
  error: "warning",
  prev: "chevron_left",
  next: "chevron_right",
  checkboxOn: "check_box",
  checkboxOff: "check_box_outline_blank",
  checkboxIndeterminate: "indeterminate_check_box",
  delimiter: "fiber_manual_record",
  sort: "arrow_upward",
  expand: "keyboard_arrow_down",
  menu: "menu",
  subgroup: "arrow_drop_down",
  dropdown: "arrow_drop_down",
  radioOn: "radio_button_checked",
  radioOff: "radio_button_unchecked",
  edit: "edit",
  ratingEmpty: "star_border",
  ratingFull: "star",
  ratingHalf: "star_half",
  loading: "cached",
  first: "first_page",
  last: "last_page",
  unfold: "unfold_more",
  file: "attach_file",
  plus: "add",
  minus: "remove"
}, Lt = {
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  clear: "mdi-close",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-exclamation",
  error: "mdi-alert",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  sort: "mdi-arrow-up",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus"
}, N = {
  complete: "fas fa-check",
  cancel: "fas fa-times-circle",
  close: "fas fa-times",
  delete: "fas fa-times-circle",
  clear: "fas fa-times-circle",
  success: "fas fa-check-circle",
  info: "fas fa-info-circle",
  warning: "fas fa-exclamation-circle",
  error: "fas fa-exclamation-triangle",
  prev: "fas fa-chevron-left",
  next: "fas fa-chevron-right",
  checkboxOn: "fas fa-check-square",
  checkboxOff: "far fa-square",
  checkboxIndeterminate: "fas fa-minus-square",
  delimiter: "fas fa-circle",
  sort: "fas fa-sort-up",
  expand: "fas fa-chevron-down",
  menu: "fas fa-bars",
  subgroup: "fas fa-caret-down",
  dropdown: "fas fa-caret-down",
  radioOn: "far fa-dot-circle",
  radioOff: "far fa-circle",
  edit: "fas fa-edit",
  ratingEmpty: "far fa-star",
  ratingFull: "fas fa-star",
  ratingHalf: "fas fa-star-half",
  loading: "fas fa-sync",
  first: "fas fa-step-backward",
  last: "fas fa-step-forward",
  unfold: "fas fa-arrows-alt-v",
  file: "fas fa-paperclip",
  plus: "fas fa-plus",
  minus: "fas fa-minus"
}, _t = {
  complete: "fa fa-check",
  cancel: "fa fa-times-circle",
  close: "fa fa-times",
  delete: "fa fa-times-circle",
  clear: "fa fa-times-circle",
  success: "fa fa-check-circle",
  info: "fa fa-info-circle",
  warning: "fa fa-exclamation",
  error: "fa fa-exclamation-triangle",
  prev: "fa fa-chevron-left",
  next: "fa fa-chevron-right",
  checkboxOn: "fa fa-check-square",
  checkboxOff: "fa fa-square-o",
  checkboxIndeterminate: "fa fa-minus-square",
  delimiter: "fa fa-circle",
  sort: "fa fa-sort-up",
  expand: "fa fa-chevron-down",
  menu: "fa fa-bars",
  subgroup: "fa fa-caret-down",
  dropdown: "fa fa-caret-down",
  radioOn: "fa fa-dot-circle-o",
  radioOff: "fa fa-circle-o",
  edit: "fa fa-pencil",
  ratingEmpty: "fa fa-star-o",
  ratingFull: "fa fa-star",
  ratingHalf: "fa fa-star-half-o",
  loading: "fa fa-refresh",
  first: "fa fa-step-backward",
  last: "fa fa-step-forward",
  unfold: "fa fa-angle-double-down",
  file: "fa fa-paperclip",
  plus: "fa fa-plus",
  minus: "fa fa-minus"
};
function bt(s, t) {
  const e = {};
  for (const i in t)
    e[i] = {
      component: s,
      props: {
        icon: t[i].split(" fa-")
      }
    };
  return e;
}
const Ct = bt("font-awesome-icon", N), kt = Object.freeze({
  mdiSvg: vt,
  md: yt,
  mdi: Lt,
  fa: N,
  fa4: _t,
  faSvg: Ct
});
class x extends u {
  constructor(t) {
    super();
    const {
      iconfont: e,
      values: i,
      component: n
    } = t[x.property];
    this.component = n, this.iconfont = e, this.values = g(kt[e], i);
  }
}
x.property = "icons";
const D = "$vuetify.", P = Symbol("Lang fallback");
function R(s, t, e = !1, i) {
  const n = t.replace(D, "");
  let a = J(s, n, P);
  return a === P && (e ? (G(`Translation key "${n}" not found in fallback`), a = t) : (y(`Translation key "${n}" not found, falling back to default`), a = R(i, t, !0, i))), a;
}
class M extends u {
  constructor(t) {
    super(), this.defaultLocale = "en";
    const {
      current: e,
      locales: i,
      t: n
    } = t[M.property];
    this.current = e, this.locales = i, this.translator = n || this.defaultTranslator;
  }
  currentLocale(t) {
    const e = this.locales[this.current], i = this.locales[this.defaultLocale];
    return R(e, t, !1, i);
  }
  t(t, ...e) {
    return t.startsWith(D) ? this.translator(t, ...e) : this.replace(t, e);
  }
  defaultTranslator(t, ...e) {
    return this.replace(this.currentLocale(t), e);
  }
  replace(t, e) {
    return t.replace(/\{(\d+)\}/g, (i, n) => String(e[+n]));
  }
}
M.property = "lang";
const wt = {
  badge: "Badge",
  close: "Close",
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    nextMonthAriaLabel: "Next month",
    nextYearAriaLabel: "Next year",
    prevMonthAriaLabel: "Previous month",
    prevYearAriaLabel: "Previous year"
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  timePicker: {
    am: "AM",
    pm: "PM"
  },
  pagination: {
    ariaLabel: {
      wrapper: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Goto Page {0}",
      currentPage: "Current Page, Page {0}"
    }
  },
  rating: {
    ariaLabel: {
      icon: "Rating {0} of {1}"
    }
  },
  loading: "Loading..."
}, xt = {
  breakpoint: {
    // TODO: update to MD2 spec in v3 - 1280
    mobileBreakpoint: 1264,
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920
    }
  },
  icons: {
    // TODO: remove v3
    iconfont: "mdi",
    values: {}
  },
  lang: {
    current: "en",
    locales: {
      en: wt
    },
    // Default translator exists in lang service
    t: void 0
  },
  rtl: !1,
  theme: {
    dark: !1,
    default: "light",
    disable: !1,
    options: {
      cspNonce: void 0,
      customProperties: void 0,
      minifyTheme: void 0,
      themeCache: void 0,
      variations: !0
    },
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00"
      },
      dark: {
        primary: "#2196F3",
        secondary: "#424242",
        accent: "#FF4081",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00"
      }
    }
  }
};
class z extends u {
  constructor(t, e) {
    super();
    const i = g({}, xt), {
      userPreset: n
    } = e, {
      preset: a = {},
      ...r
    } = n;
    a.preset != null && y("Global presets do not support the **preset** option, it can be safely omitted"), e.preset = g(g(i, a), r);
  }
}
z.property = "presets";
const Mt = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], $t = (s) => s <= 31308e-7 ? s * 12.92 : 1.055 * s ** (1 / 2.4) - 0.055, Ht = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Tt = (s) => s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
function W(s) {
  const t = Array(3), e = $t, i = Mt;
  for (let n = 0; n < 3; ++n)
    t[n] = Math.round(et(e(i[n][0] * s[0] + i[n][1] * s[1] + i[n][2] * s[2])) * 255);
  return (t[0] << 16) + (t[1] << 8) + (t[2] << 0);
}
function U(s) {
  const t = [0, 0, 0], e = Tt, i = Ht, n = e((s >> 16 & 255) / 255), a = e((s >> 8 & 255) / 255), r = e((s >> 0 & 255) / 255);
  for (let c = 0; c < 3; ++c)
    t[c] = i[c][0] * n + i[c][1] * a + i[c][2] * r;
  return t;
}
function O(s) {
  let t;
  if (typeof s == "number")
    t = s;
  else if (typeof s == "string") {
    let e = s[0] === "#" ? s.substring(1) : s;
    e.length === 3 && (e = e.split("").map((i) => i + i).join("")), e.length !== 6 && y(`'${s}' is not a valid rgb color`), t = parseInt(e, 16);
  } else
    throw new TypeError(`Colors can only be numbers or strings, recieved ${s == null ? s : s.constructor.name} instead`);
  return t < 0 ? (y(`Colors cannot be negative: '${s}'`), t = 0) : (t > 16777215 || isNaN(t)) && (y(`'${s}' is not a valid rgb color`), t = 16777215), t;
}
function v(s) {
  let t = s.toString(16);
  return t.length < 6 && (t = "0".repeat(6 - t.length) + t), "#" + t;
}
function At(s) {
  return v(O(s));
}
const k = 0.20689655172413793, St = (s) => s > k ** 3 ? Math.cbrt(s) : s / (3 * k ** 2) + 4 / 29, Ot = (s) => s > k ? s ** 3 : 3 * k ** 2 * (s - 4 / 29);
function q(s) {
  const t = St, e = t(s[1]);
  return [116 * e - 16, 500 * (t(s[0] / 0.95047) - e), 200 * (e - t(s[2] / 1.08883))];
}
function Q(s) {
  const t = Ot, e = (s[0] + 16) / 116;
  return [t(e + s[1] / 500) * 0.95047, t(e), t(e - s[2] / 200) * 1.08883];
}
function Y(s, t = !1, e = !0) {
  const {
    anchor: i,
    ...n
  } = s, a = Object.keys(n), r = {};
  for (let c = 0; c < a.length; ++c) {
    const o = a[c], l = s[o];
    l != null && (e ? t ? (o === "base" || o.startsWith("lighten") || o.startsWith("darken")) && (r[o] = At(l)) : typeof l == "object" ? r[o] = Y(l, !0, e) : r[o] = Et(o, O(l)) : r[o] = {
      base: v(O(l))
    });
  }
  return t || (r.anchor = i || r.base || r.primary.base), r;
}
const Vt = (s, t) => `
.v-application .${s} {
  background-color: ${t} !important;
  border-color: ${t} !important;
}
.v-application .${s}--text {
  color: ${t} !important;
  caret-color: ${t} !important;
}`, Ft = (s, t, e) => {
  const [i, n] = t.split(/(\d)/, 2);
  return `
.v-application .${s}.${i}-${n} {
  background-color: ${e} !important;
  border-color: ${e} !important;
}
.v-application .${s}--text.text--${i}-${n} {
  color: ${e} !important;
  caret-color: ${e} !important;
}`;
}, C = (s, t = "base") => `--v-${s}-${t}`, A = (s, t = "base") => `var(${C(s, t)})`;
function Pt(s, t = !1) {
  const {
    anchor: e,
    ...i
  } = s, n = Object.keys(i);
  if (!n.length) return "";
  let a = "", r = "";
  const c = t ? A("anchor") : e;
  r += `.v-application a { color: ${c}; }`, t && (a += `  ${C("anchor")}: ${e};
`);
  for (let o = 0; o < n.length; ++o) {
    const l = n[o], f = s[l];
    r += Vt(l, t ? A(l) : f.base), t && (a += `  ${C(l)}: ${f.base};
`);
    const d = tt(f);
    for (let p = 0; p < d.length; ++p) {
      const m = d[p], _ = f[m];
      m !== "base" && (r += Ft(l, m, t ? A(l, m) : _), t && (a += `  ${C(l, m)}: ${_};
`));
    }
  }
  return t && (a = `:root {
${a}}

`), a + r;
}
function Et(s, t) {
  const e = {
    base: v(t)
  };
  for (let i = 5; i > 0; --i)
    e[`lighten${i}`] = v(jt(t, i));
  for (let i = 1; i <= 4; ++i)
    e[`darken${i}`] = v(Bt(t, i));
  return e;
}
function jt(s, t) {
  const e = q(U(s));
  return e[0] = e[0] + t * 10, W(Q(e));
}
function Bt(s, t) {
  const e = q(U(s));
  return e[0] = e[0] - t * 10, W(Q(e));
}
class $ extends u {
  constructor(t) {
    super(), this.disabled = !1, this.isDark = null, this.unwatch = null, this.vueMeta = null;
    const {
      dark: e,
      disable: i,
      options: n,
      themes: a
    } = t[$.property];
    if (this.dark = !!e, this.defaults = this.themes = a, this.options = n, i) {
      this.disabled = !0;
      return;
    }
    this.themes = {
      dark: this.fillVariant(a.dark, !0),
      light: this.fillVariant(a.light, !1)
    };
  }
  // When setting css, check for element and apply new values
  /* eslint-disable-next-line accessor-pairs */
  set css(t) {
    if (this.vueMeta) {
      this.isVueMeta23 && this.applyVueMeta23();
      return;
    }
    this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = t);
  }
  set dark(t) {
    const e = this.isDark;
    this.isDark = t, e != null && this.applyTheme();
  }
  get dark() {
    return !!this.isDark;
  }
  // Apply current theme default
  // only called on client side
  applyTheme() {
    if (this.disabled) return this.clearCss();
    this.css = this.generatedStyles;
  }
  clearCss() {
    this.css = "";
  }
  // Initialize theme for SSR and SPA
  // Attach to ssrContext head or
  // apply new theme to document
  init(t, e) {
    this.disabled || (t.$meta ? this.initVueMeta(t) : e && this.initSSR(e), this.initTheme(t));
  }
  // Allows for you to set target theme
  setTheme(t, e) {
    this.themes[t] = Object.assign(this.themes[t], e), this.applyTheme();
  }
  // Reset theme defaults
  resetThemes() {
    this.themes.light = Object.assign({}, this.defaults.light), this.themes.dark = Object.assign({}, this.defaults.dark), this.applyTheme();
  }
  // Check for existence of style element
  checkOrCreateStyleElement() {
    return this.styleEl = document.getElementById("vuetify-theme-stylesheet"), this.styleEl ? !0 : (this.genStyleElement(), !!this.styleEl);
  }
  fillVariant(t = {}, e) {
    const i = this.themes[e ? "dark" : "light"];
    return Object.assign({}, i, t);
  }
  // Generate the style element
  // if applicable
  genStyleElement() {
    typeof document > "u" || (this.styleEl = document.createElement("style"), this.styleEl.type = "text/css", this.styleEl.id = "vuetify-theme-stylesheet", this.options.cspNonce && this.styleEl.setAttribute("nonce", this.options.cspNonce), document.head.appendChild(this.styleEl));
  }
  initVueMeta(t) {
    if (this.vueMeta = t.$meta(), this.isVueMeta23) {
      t.$nextTick(() => {
        this.applyVueMeta23();
      });
      return;
    }
    const e = typeof this.vueMeta.getOptions == "function" ? this.vueMeta.getOptions().keyName : "metaInfo", i = t.$options[e] || {};
    t.$options[e] = () => {
      i.style = i.style || [];
      const n = i.style.find((a) => a.id === "vuetify-theme-stylesheet");
      return n ? n.cssText = this.generatedStyles : i.style.push({
        cssText: this.generatedStyles,
        type: "text/css",
        id: "vuetify-theme-stylesheet",
        nonce: (this.options || {}).cspNonce
      }), i;
    };
  }
  applyVueMeta23() {
    const {
      set: t
    } = this.vueMeta.addApp("vuetify");
    t({
      style: [{
        cssText: this.generatedStyles,
        type: "text/css",
        id: "vuetify-theme-stylesheet",
        nonce: this.options.cspNonce
      }]
    });
  }
  initSSR(t) {
    const e = this.options.cspNonce ? ` nonce="${this.options.cspNonce}"` : "";
    t.head = t.head || "", t.head += `<style type="text/css" id="vuetify-theme-stylesheet"${e}>${this.generatedStyles}</style>`;
  }
  initTheme(t) {
    typeof document > "u" || (this.unwatch && (this.unwatch(), this.unwatch = null), t.$once("hook:created", () => {
      const e = V.observable({
        themes: this.themes
      });
      this.unwatch = t.$watch(() => e.themes, () => this.applyTheme(), {
        deep: !0
      });
    }), this.applyTheme());
  }
  get currentTheme() {
    const t = this.dark ? "dark" : "light";
    return this.themes[t];
  }
  get generatedStyles() {
    const t = this.parsedTheme, e = this.options || {};
    let i;
    return e.themeCache != null && (i = e.themeCache.get(t), i != null) || (i = Pt(t, e.customProperties), e.minifyTheme != null && (i = e.minifyTheme(i)), e.themeCache != null && e.themeCache.set(t, i)), i;
  }
  get parsedTheme() {
    return Y(this.currentTheme || {}, void 0, E(this.options, ["variations"], !0));
  }
  // Is using v2.3 of vue-meta
  // https://github.com/nuxt/vue-meta/releases/tag/v2.3.0
  get isVueMeta23() {
    return typeof this.vueMeta.addApp == "function";
  }
}
$.property = "theme";
class h {
  constructor(t = {}) {
    this.framework = {
      isHydrating: !1
    }, this.installed = [], this.preset = {}, this.userPreset = {}, this.userPreset = t, this.use(z), this.use(j), this.use(w), this.use(I), this.use(x), this.use(M), this.use($);
  }
  // Called on the new vuetify instance
  // bootstrap in install beforeCreate
  // Exposes ssrContext if available
  init(t, e) {
    this.installed.forEach((i) => {
      const n = this.framework[i];
      n.framework = this.framework, n.init(t, e);
    }), this.framework.rtl = !!this.preset.rtl;
  }
  // Instantiate a VuetifyService
  use(t) {
    const e = t.property;
    this.installed.includes(e) || (this.framework[e] = new t(this.preset, this), this.installed.push(e));
  }
}
h.install = S;
h.installed = !1;
h.version = "2.7.2";
h.config = {
  silent: !1
};
function X(s, t, e) {
  if (!h.config.silent)
    return `[Vuetify] ${s}`;
}
function y(s, t, e) {
  const i = X(s);
  i != null && console.warn(i);
}
function G(s, t, e) {
  const i = X(s);
  i != null && console.error(i);
}
V.use(h);
const Zt = {
  ssr: !1,
  components,
  directives,
  theme: {
    themes: {
      dark: !1,
      light: {
        primary: "#0E1436",
        accent: "#FFB71A",
        secondary: "#828597"
      }
    }
  }
}, ne = new h(Zt);
function H(s, t, e, i, n, a, r, c) {
  var o = typeof s == "function" ? s.options : s;
  return t && (o.render = t, o.staticRenderFns = e, o._compiled = !0), a && (o._scopeId = "data-v-" + a), {
    exports: s,
    options: o
  };
}
const It = {
  name: "MobileMenu",
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
    },
    url: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    projects: []
  }),
  computed: {
    projectLoc() {
      return this.projects.find((t) => t.title === this.activeProject || !!t.tag && t.tag === this.activeProject);
    }
  },
  async beforeMount() {
    const { data: s } = await fetch(`${url}/projects`).then(
      (t) => t.json()
    );
    this.projects = s;
  }
};
var Nt = function() {
  var t = this, e = t._self._c;
  return e("v-card", [t._t("switcher"), t._t("default"), e("v-list-item", { attrs: { href: `https://${t.env}ccaf.io/` } }, [e("v-list-item-title", { staticClass: "list__title" }, [t._v(" CCAF Home ")])], 1), e("v-divider"), e("v-list-item", { attrs: { href: `https://${t.env}ccaf.io/about_ccaf` } }, [e("v-list-item-title", { staticClass: "list__title" }, [t._v(" CCAF About ")])], 1), e("v-divider"), e("v-list-item", { attrs: { href: `https://${t.env}ccaf.io/contact?topic=cbeci` } }, [e("v-list-item-title", { staticClass: "list__title" }, [t._v(" CCAF Contact ")])], 1), e("v-divider"), e("v-list-item", [e("v-list-item-title", { staticClass: "list__title" }, [t._v(" CCAF Digital Tools: ")])], 1), e("div", { staticClass: "chips" }, t._l(t.projects, function(i, n) {
    return e("v-chip", { key: i.id, staticClass: "chips__item", class: {
      "chips__item-active": t.projectLoc && i.title === t.projectLoc.title
    }, attrs: { href: n ? `https://${t.env === "demo" ? "demo." : ""}ccaf.io/${i.link}` : void 0 } }, [t._v(" " + t._s(i.tag || i.title) + " ")]);
  }), 1)], 2);
}, Dt = [], Rt = /* @__PURE__ */ H(
  It,
  Nt,
  Dt,
  !1,
  null,
  "af97d061"
);
const b = Rt.exports, zt = {
  name: "LayoutFooter",
  data() {
    return {
      env_project: "",
      scrollUp: !1
    };
  },
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
  computed: {},
  mounted() {
    typeof window < "u" && (this.env_project = this.env === "demo" ? "demo." : "", window.onscroll = () => {
      this.scrollUp = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
      const t = document.getElementById("sidebar"), e = document.getElementById("sidebar__menu"), i = document.getElementById("footer");
      if (e && t && i) {
        const n = window.innerHeight < e.getBoundingClientRect().height + 72 ? window.innerHeight - 72 : e.getBoundingClientRect().height, a = i.getBoundingClientRect().top, r = e.getBoundingClientRect().top, c = document.body.scrollTop;
        let o = Math.max(72, r - c);
        c + n + 72 > a && (o = Math.min(
          o,
          a - c - n
        )), t.style.top = o + "px";
      }
    });
  }
};
var Wt = function() {
  var t = this, e = t._self._c;
  return e("v-footer", { staticClass: "footer pa-0", attrs: { id: "footer", color: "white", width: "100vw" } }, [t.scrollUp ? e("div", { staticClass: "goup", on: { click: function(i) {
    return t.goTo(0, {
      duration: 300,
      offset: 0,
      easing: "easeInOutCubic"
    });
  } } }, [e("v-icon", { attrs: { size: "18", color: "#FFB71A" } }, [t._v(" mdi-arrow-up ")])], 1) : t._e(), e("v-container", { staticStyle: { height: "100%" }, attrs: { fluid: "" } }, [e("div", { staticClass: "footer__pre-footer", attrs: { align: "start", justify: "start", "no-gutters": "" } }, [e("div", { staticClass: "footer__info" }, [e("div", { staticClass: "footer__pre-links mb-4 pa-4", attrs: { cols: "auto" } }, [e("a", { staticClass: "footer__link mb-2 link-icon", attrs: { href: t.webLink, target: "_blank" } }, [e("v-icon", { staticClass: "mr-2", attrs: { size: "16", color: "#0e1436" } }, [t._v(" mdi-web ")]), e("p", [t._v(t._s(t.webLink))])], 1), e("a", { staticClass: "footer__link mb-2 link-icon", attrs: { href: `mailto:${t.email}` } }, [e("v-icon", { staticClass: "mr-2", attrs: { size: "16", color: "#0e1436" } }, [t._v(" mdi-email ")]), e("p", [t._v(t._s(t.email))])], 1), e("a", { staticClass: "footer__link footer__link--location mb-2 link-icon", attrs: { href: t.locationLink } }, [e("v-icon", { staticClass: "mr-2", attrs: { size: "16", color: "#0e1436" } }, [t._v(" mdi-map-marker ")]), e("p", [t._v(t._s(t.location))])], 1), e("div", { staticClass: "ml-7" }, [e("v-row", [e("v-col", [t.linkedinLink ? e("a", { staticClass: "link-icon", attrs: { href: t.linkedinLink, target: "_blank" } }, [e("v-icon", { staticClass: "mr-2", attrs: { size: "24", color: "#0e1436" } }, [t._v(" mdi-linkedin ")])], 1) : t._e(), t.twitterLink ? e("a", { staticClass: "link-icon", attrs: { href: t.twitterLink, target: "_blank" } }, [e("v-icon", { staticClass: "mr-2", attrs: { size: "24", color: "#0e1436" } }, [t._v(" mdi-twitter ")])], 1) : t._e(), t.facebookLink ? e("a", { staticClass: "link-icon", attrs: { href: t.facebookLink, target: "_blank" } }, [e("v-icon", { staticClass: "mr-2", attrs: { size: "24", color: "#0e1436" } }, [t._v(" mdi-facebook ")])], 1) : t._e()])], 1)], 1)]), e("div", { staticClass: "footer__pre-commons mb-4 pa-4", attrs: { cols: "auto" } }, [e("a", { attrs: { rel: "license", href: "http://creativecommons.org/licenses/by-nc-sa/4.0/", target: "_blank" } }, [e("img", { staticStyle: { "border-width": "0" }, attrs: { alt: "Creative Commons License", src: "https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg" } })]), e("br"), e("p", { staticStyle: { "font-size": "12px", "max-width": "280px" } }, [t._v(" This work is licensed under a "), e("a", { staticStyle: { color: "#262b4a" }, attrs: { rel: "license", href: "http://creativecommons.org/licenses/by-nc-sa/4.0/", target: "_blank" } }, [t._v(" Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ")])])])]), t._t("supported")], 2), e("v-row", { staticClass: "footer__main-footer", attrs: { align: "center", justify: t.$vuetify.breakpoint.smAndDown ? "center" : "space-between", "no-gutters": "" } }, [e("v-col", { class: { "footer-privacy": t.$vuetify.breakpoint.smAndDown }, attrs: { cols: "auto" } }, [e("a", { attrs: { href: `https://${t.env_project}ccaf.io/privacy_policy` } }, [t._v(" Privacy Policy ")])]), e("v-col", { attrs: { cols: "auto" } }, [e("span", [t._v("Cambridge Centre for Alternative Finance © " + t._s(" " + (/* @__PURE__ */ new Date()).getFullYear()))])])], 1)], 1)], 1);
}, Ut = [], qt = /* @__PURE__ */ H(
  zt,
  Wt,
  Ut,
  !1,
  null,
  "bca5b23e"
);
const ae = qt.exports, Qt = {
  name: "layout-header",
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
  data() {
    return {
      env_project: "",
      projects: [],
      project: null
    };
  },
  async beforeMount() {
    const { data: s } = await fetch(`${url}/projects`).then(
      (t) => t.json()
    );
    this.projects = s, console.log(s), this.project = this.projects.find(
      (t) => t.title === this.activeSelect || !!t.tag && t.tag === this.activeSelect
    ) || this.projects[0];
  },
  mounted() {
    this.env_project = this.env === "demo" ? "demo." : "";
  },
  methods: {
    linkTo(s) {
      const t = this.projects.find(
        (e) => e.title === s.title
      );
      t && (window.location.href = `https://${this.env_project}ccaf.io/${t.link}`);
    }
  }
};
var Yt = function() {
  var t = this, e = t._self._c;
  return e("v-app-bar", { staticClass: "header noselect", attrs: { id: "header", color: "#FFB71A", height: "72", "clipped-right": "", "clipped-left": "", flat: "", app: "" } }, [e("v-row", { staticClass: "header__logo", attrs: { align: "center", justify: "start" } }, [e("a", { attrs: { title: "CCAF.io", href: `https://${t.env_project}ccaf.io/` } }, [e("img", { attrs: { src: "https://firebasestorage.googleapis.com/v0/b/ccaf-afea-test.appspot.com/o/logo.webp?alt=media&token=f4da887e-96cf-4325-b67b-5afd938250bf", width: "179", height: "52", alt: "Cambridge Centre for Alternative Finance (CCAF.io)" } })]), e("h4", { staticClass: "d-none d-sm-flex header__title", staticStyle: { "font-family": "MyriadProSemiBold !important" } }, [t._v(" " + t._s(t.title) + " ")]), e("v-spacer"), e("ul", { staticClass: "header-links", class: { "is-long-title": !!t.project && !t.project.tag } }, [e("li", { staticClass: "header-links__element" }, [e("a", { staticClass: "header-links__element-link", attrs: { title: "Home", href: "https://ccaf.io/" } }, [t._v("Home ")])]), e("li", { staticClass: "header-links__element" }, [e("a", { staticClass: "header-links__element-link", attrs: { title: "Home", href: "https://ccaf.io/about_ccaf" } }, [t._v("About CCAF ")])]), e("li", { staticClass: "header-links__element" }, [e("a", { staticClass: "header-links__element-link", attrs: { title: "Home", href: `https://ccaf.io/contact?topic=${t.topic}` } }, [t._v("Contact ")])])]), e("div", { staticClass: "project-selector", class: { "is-title": !!t.project && !t.project.tag } }, [t.$vuetify.breakpoint.mdAndUp ? e("v-select", { attrs: { value: t.project, items: t.projects, "item-value": "title", "item-text": "tag", "menu-props": {
    offsetY: !0,
    offsetX: !0,
    nudgeBottom: "10px",
    nudgeLeft: "355px",
    maxHeight: 500,
    contentClass: "my-custom-select"
  }, "background-color": "rgba(255, 183, 26, 0.32);", color: "#333333", height: "40", "append-icon": "mdi-chevron-down", "hide-details": "", solo: "", flat: "" }, on: { change: t.linkTo }, scopedSlots: t._u([{ key: "selection", fn: function({ item: i }) {
    return [e("strong", { staticClass: "project-selector__active-element" }, [t._v(t._s(i.tag || i.title))])];
  } }, { key: "item", fn: function({ item: i }) {
    return [t._v(" " + t._s(i.title) + " "), e("v-spacer"), i.tag ? e("div", { staticClass: "ml-4 chips" }, [t._v(" " + t._s(i.tag) + " ")]) : t._e()];
  } }], null, !1, 2944779132) }) : t._e()], 1)], 1), t.$vuetify.breakpoint.mdAndUp ? t._e() : e("v-dialog", { attrs: { value: t.dialog, fullscreen: "" }, on: { input: (i) => t.$emit("changeDialog", i) }, scopedSlots: t._u([{ key: "activator", fn: function({ on: i, value: n }) {
    return [e("div", t._g({ staticClass: "header__nav-icon" }, i), [e("v-icon", { attrs: { color: "#000" } }, [t._v(" " + t._s(n ? "mdi-close" : "mdi-menu") + " ")])], 1)];
  } }], null, !1, 485362672) }, [t._t("default", null, { close: () => t.isActive.value = !1 })], 2)], 1);
}, Xt = [], Gt = /* @__PURE__ */ H(
  Qt,
  Yt,
  Xt,
  !1,
  null,
  "a237708b"
);
const re = Gt.exports, Kt = {
  name: "Loader",
  props: {
    visible: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: ""
    }
  }
};
var Jt = function() {
  var t = this, e = t._self._c;
  return e("div", { staticClass: "app-loader", class: { "app-loader--visible": t.visible } }, [e("v-container", [e("v-row", { staticClass: "flex-column", attrs: { align: "center", justify: "center" } }, [t.title ? e("v-col", { attrs: { cols: "12" } }, [e("h1", { staticClass: "app-loader__title" }, [t._v(" " + t._s(t.title) + " ")])]) : t._e(), e("v-col", { staticClass: "d-flex justify-center", attrs: { cols: "12" } }, [e("div", { staticClass: "lds-ring" }, [e("div"), e("div"), e("div"), e("div")])]), e("v-col", { attrs: { cols: "12" } }, [e("p", { staticClass: "app-loader__state" }, [t._v("LOADING")])])], 1)], 1)], 1);
}, te = [], ee = /* @__PURE__ */ H(
  Kt,
  Jt,
  te,
  !1,
  null,
  "c10ef48b"
);
const oe = ee.exports, se = (s) => {
  s.component("MobileMenu", b), s.component("LayoutFooter", b), s.component("LayoutHeader", b), s.component("Loader", b);
}, ce = { install: se };
export {
  ae as LayoutFooter,
  re as LayoutHeader,
  oe as Loader,
  b as MobileMenu,
  ne as Vuetify,
  ce as default
};
