import A, { defineComponent as G } from "vue";
let K = !1;
try {
  if (typeof window < "u") {
    const e = Object.defineProperty({}, "passive", {
      get: () => {
        K = !0;
      }
    });
    window.addEventListener("testListener", e, e), window.removeEventListener("testListener", e, e);
  }
} catch (e) {
  console.warn(e);
}
function S(e, t, n) {
  const s = t.length - 1;
  if (s < 0)
    return e === void 0 ? n : e;
  for (let i = 0; i < s; i++) {
    if (e == null)
      return n;
    e = e[t[i]];
  }
  return e == null || e[t[s]] === void 0 ? n : e[t[s]];
}
function J(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), S(e, t.split("."), n));
}
function E(e) {
  return e !== null && typeof e == "object";
}
Object.freeze({
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
function ee(e) {
  return Object.keys(e);
}
function te(e, t = 0, n = 1) {
  return Math.max(t, Math.min(n, e));
}
function L(e = {}, t = {}) {
  for (const n in t) {
    const s = e[n], i = t[n];
    if (E(s) && E(i)) {
      e[n] = L(s, i);
      continue;
    }
    e[n] = i;
  }
  return e;
}
function O(e, t = {}) {
  if (O.installed)
    return;
  O.installed = !0, A !== e && Y(`Multiple instances of Vue detected
See https://github.com/vuetifyjs/vuetify/issues/4068

If you're seeing "$attrs is readonly", it's caused by this`);
  const n = t.components || {}, s = t.directives || {};
  for (const i in s) {
    const r = s[i];
    e.directive(i, r);
  }
  (function i(r) {
    if (r) {
      for (const a in r) {
        const c = r[a];
        c && !i(c.$_vuetify_subcomponents) && e.component(a, c);
      }
      return !0;
    }
    return !1;
  })(n), !e.$_vuetify_installed && (e.$_vuetify_installed = !0, e.mixin({
    beforeCreate() {
      const i = this.$options;
      i.vuetify ? (i.vuetify.init(this, this.$ssrContext), this.$vuetify = e.observable(i.vuetify.framework)) : this.$vuetify = i.parent && i.parent.$vuetify || this;
    },
    beforeMount() {
      this.$options.vuetify && this.$el && this.$el.hasAttribute("data-server-rendered") && (this.$vuetify.isHydrating = !0, this.$vuetify.breakpoint.update(!0));
    },
    mounted() {
      this.$options.vuetify && this.$vuetify.isHydrating && (this.$vuetify.isHydrating = !1, this.$vuetify.breakpoint.update());
    }
  }));
}
class m {
  constructor() {
    this.framework = {};
  }
  init(t, n) {
  }
}
class Z extends m {
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
  register(t, n, s) {
    this.application[n][t] = s, this.update(n);
  }
  unregister(t, n) {
    this.application[n][t] != null && (delete this.application[n][t], this.update(n));
  }
  update(t) {
    this[t] = Object.values(this.application[t]).reduce((n, s) => n + s, 0);
  }
}
Z.property = "application";
class k extends m {
  constructor(t) {
    super(), this.xs = !1, this.sm = !1, this.md = !1, this.lg = !1, this.xl = !1, this.xsOnly = !1, this.smOnly = !1, this.smAndDown = !1, this.smAndUp = !1, this.mdOnly = !1, this.mdAndDown = !1, this.mdAndUp = !1, this.lgOnly = !1, this.lgAndDown = !1, this.lgAndUp = !1, this.xlOnly = !1, this.name = "xs", this.height = 0, this.width = 0, this.mobile = !0, this.resizeTimeout = 0;
    const {
      mobileBreakpoint: n,
      scrollBarWidth: s,
      thresholds: i
    } = t[k.property];
    this.mobileBreakpoint = n, this.scrollBarWidth = s, this.thresholds = i;
  }
  init() {
    this.update(), !(typeof window > "u") && window.addEventListener("resize", this.onResize.bind(this), {
      passive: !0
    });
  }
  update(t = !1) {
    const n = t ? 0 : this.getClientHeight(), s = t ? 0 : this.getClientWidth(), i = s < this.thresholds.xs, r = s < this.thresholds.sm && !i, a = s < this.thresholds.md - this.scrollBarWidth && !(r || i), c = s < this.thresholds.lg - this.scrollBarWidth && !(a || r || i), o = s >= this.thresholds.lg - this.scrollBarWidth;
    switch (this.height = n, this.width = s, this.xs = i, this.sm = r, this.md = a, this.lg = c, this.xl = o, this.xsOnly = i, this.smOnly = r, this.smAndDown = (i || r) && !(a || c || o), this.smAndUp = !i && (r || a || c || o), this.mdOnly = a, this.mdAndDown = (i || r || a) && !(c || o), this.mdAndUp = !(i || r) && (a || c || o), this.lgOnly = c, this.lgAndDown = (i || r || a || c) && !o, this.lgAndUp = !(i || r || a) && (c || o), this.xlOnly = o, !0) {
      case i:
        this.name = "xs";
        break;
      case r:
        this.name = "sm";
        break;
      case a:
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
      this.mobile = s < parseInt(this.mobileBreakpoint, 10);
      return;
    }
    const l = {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    }, u = l[this.name], d = l[this.mobileBreakpoint];
    this.mobile = u <= d;
  }
  onResize() {
    clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(this.update.bind(this), 200);
  }
  getClientWidth() {
    return typeof document > "u" ? 0 : Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  getClientHeight() {
    return typeof document > "u" ? 0 : Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
}
k.property = "breakpoint";
const ne = (e) => e, se = (e) => e ** 2, ie = (e) => e * (2 - e), re = (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e, oe = (e) => e ** 3, ae = (e) => --e ** 3 + 1, ce = (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, le = (e) => e ** 4, fe = (e) => 1 - --e ** 4, ue = (e) => e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e, de = (e) => e ** 5, he = (e) => 1 + --e ** 5, pe = (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5, me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  linear: ne,
  easeInQuad: se,
  easeOutQuad: ie,
  easeInOutQuad: re,
  easeInCubic: oe,
  easeOutCubic: ae,
  easeInOutCubic: ce,
  easeInQuart: le,
  easeOutQuart: fe,
  easeInOutQuart: ue,
  easeInQuint: de,
  easeOutQuint: he,
  easeInOutQuint: pe
}, Symbol.toStringTag, { value: "Module" }));
function _(e) {
  if (typeof e == "number")
    return e;
  let t = N(e);
  if (!t)
    throw typeof e == "string" ? new Error(`Target element "${e}" not found.`) : new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${F(e)} instead.`);
  let n = 0;
  for (; t; )
    n += t.offsetTop, t = t.offsetParent;
  return n;
}
function ge(e) {
  const t = N(e);
  if (t)
    return t;
  throw typeof e == "string" ? new Error(`Container element "${e}" not found.`) : new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${F(e)} instead.`);
}
function F(e) {
  return e == null ? e : e.constructor.name;
}
function N(e) {
  return typeof e == "string" ? document.querySelector(e) : e && e._isVue ? e.$el : e instanceof HTMLElement ? e : null;
}
function C(e, t = {}) {
  const n = {
    container: document.scrollingElement || document.body || document.documentElement,
    duration: 500,
    offset: 0,
    easing: "easeInOutCubic",
    appOffset: !0,
    ...t
  }, s = ge(n.container);
  if (n.appOffset && C.framework.application) {
    const o = s.classList.contains("v-navigation-drawer"), l = s.classList.contains("v-navigation-drawer--clipped"), {
      bar: u,
      top: d
    } = C.framework.application;
    n.offset += u, (!o || l) && (n.offset += d);
  }
  const i = performance.now();
  let r;
  typeof e == "number" ? r = _(e) - n.offset : r = _(e) - _(s) - n.offset;
  const a = s.scrollTop;
  if (r === a)
    return Promise.resolve(r);
  const c = typeof n.easing == "function" ? n.easing : me[n.easing];
  if (!c)
    throw new TypeError(`Easing function "${n.easing}" not found.`);
  return new Promise((o) => requestAnimationFrame(function l(u) {
    const d = u - i, f = Math.abs(n.duration ? Math.min(d / n.duration, 1) : 1);
    s.scrollTop = Math.floor(a + (r - a) * c(f));
    const p = (s === document.body ? document.documentElement.clientHeight : s.clientHeight) + s.scrollTop >= s.scrollHeight;
    if (f === 1 || r > s.scrollTop && p)
      return o(r);
    requestAnimationFrame(l);
  }));
}
C.framework = {};
C.init = () => {
};
class B extends m {
  constructor() {
    return super(), C;
  }
}
B.property = "goTo";
const Le = {
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
}, ye = Le, be = {
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
}, Ce = be, ve = {
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
}, we = ve, ke = {
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
}, I = ke, Me = {
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
}, $e = Me;
function xe(e, t) {
  const n = {};
  for (const s in t)
    n[s] = {
      component: e,
      props: {
        icon: t[s].split(" fa-")
      }
    };
  return n;
}
const _e = xe("font-awesome-icon", I), He = Object.freeze({
  mdiSvg: ye,
  md: Ce,
  mdi: we,
  fa: I,
  fa4: $e,
  faSvg: _e
});
class M extends m {
  constructor(t) {
    super();
    const {
      iconfont: n,
      values: s,
      component: i
    } = t[M.property];
    this.component = i, this.iconfont = n, this.values = L(He[n], s);
  }
}
M.property = "icons";
const R = "$vuetify.", P = Symbol("Lang fallback");
function W(e, t, n = !1, s) {
  const i = t.replace(R, "");
  let r = J(e, i, P);
  return r === P && (n ? (Y(`Translation key "${i}" not found in fallback`), r = t) : (b(`Translation key "${i}" not found, falling back to default`), r = W(s, t, !0, s))), r;
}
class $ extends m {
  constructor(t) {
    super(), this.defaultLocale = "en";
    const {
      current: n,
      locales: s,
      t: i
    } = t[$.property];
    this.current = n, this.locales = s, this.translator = i || this.defaultTranslator;
  }
  currentLocale(t) {
    const n = this.locales[this.current], s = this.locales[this.defaultLocale];
    return W(n, t, !1, s);
  }
  t(t, ...n) {
    return t.startsWith(R) ? this.translator(t, ...n) : this.replace(t, n);
  }
  defaultTranslator(t, ...n) {
    return this.replace(this.currentLocale(t), n);
  }
  replace(t, n) {
    return t.replace(/\{(\d+)\}/g, (s, i) => String(n[+i]));
  }
}
$.property = "lang";
const Te = {
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
}, Oe = {
  breakpoint: {
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
    iconfont: "mdi",
    values: {}
  },
  lang: {
    current: "en",
    locales: {
      en: Te
    },
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
class D extends m {
  constructor(t, n) {
    super();
    const s = L({}, Oe), {
      userPreset: i
    } = n, {
      preset: r = {},
      ...a
    } = i;
    r.preset != null && b("Global presets do not support the **preset** option, it can be safely omitted"), n.preset = L(L(s, r), a);
  }
}
D.property = "presets";
const Ve = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Ae = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, Ee = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Pe = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function q(e) {
  const t = Array(3), n = Ae, s = Ve;
  for (let i = 0; i < 3; ++i)
    t[i] = Math.round(te(n(s[i][0] * e[0] + s[i][1] * e[1] + s[i][2] * e[2])) * 255);
  return (t[0] << 16) + (t[1] << 8) + (t[2] << 0);
}
function z(e) {
  const t = [0, 0, 0], n = Pe, s = Ee, i = n((e >> 16 & 255) / 255), r = n((e >> 8 & 255) / 255), a = n((e >> 0 & 255) / 255);
  for (let c = 0; c < 3; ++c)
    t[c] = s[c][0] * i + s[c][1] * r + s[c][2] * a;
  return t;
}
function V(e) {
  let t;
  if (typeof e == "number")
    t = e;
  else if (typeof e == "string") {
    let n = e[0] === "#" ? e.substring(1) : e;
    n.length === 3 && (n = n.split("").map((s) => s + s).join("")), n.length !== 6 && b(`'${e}' is not a valid rgb color`), t = parseInt(n, 16);
  } else
    throw new TypeError(`Colors can only be numbers or strings, recieved ${e == null ? e : e.constructor.name} instead`);
  return t < 0 ? (b(`Colors cannot be negative: '${e}'`), t = 0) : (t > 16777215 || isNaN(t)) && (b(`'${e}' is not a valid rgb color`), t = 16777215), t;
}
function y(e) {
  let t = e.toString(16);
  return t.length < 6 && (t = "0".repeat(6 - t.length) + t), "#" + t;
}
function Se(e) {
  return y(V(e));
}
const w = 0.20689655172413793, Ze = (e) => e > w ** 3 ? Math.cbrt(e) : e / (3 * w ** 2) + 4 / 29, Fe = (e) => e > w ? e ** 3 : 3 * w ** 2 * (e - 4 / 29);
function Q(e) {
  const t = Ze, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function U(e) {
  const t = Fe, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
function j(e, t = !1, n = !0) {
  const {
    anchor: s,
    ...i
  } = e, r = Object.keys(i), a = {};
  for (let c = 0; c < r.length; ++c) {
    const o = r[c], l = e[o];
    l != null && (n ? t ? (o === "base" || o.startsWith("lighten") || o.startsWith("darken")) && (a[o] = Se(l)) : typeof l == "object" ? a[o] = j(l, !0, n) : a[o] = Re(o, V(l)) : a[o] = {
      base: y(V(l))
    });
  }
  return t || (a.anchor = s || a.base || a.primary.base), a;
}
const Ne = (e, t) => `
.v-application .${e} {
  background-color: ${t} !important;
  border-color: ${t} !important;
}
.v-application .${e}--text {
  color: ${t} !important;
  caret-color: ${t} !important;
}`, Be = (e, t, n) => {
  const [s, i] = t.split(/(\d)/, 2);
  return `
.v-application .${e}.${s}-${i} {
  background-color: ${n} !important;
  border-color: ${n} !important;
}
.v-application .${e}--text.text--${s}-${i} {
  color: ${n} !important;
  caret-color: ${n} !important;
}`;
}, v = (e, t = "base") => `--v-${e}-${t}`, H = (e, t = "base") => `var(${v(e, t)})`;
function Ie(e, t = !1) {
  const {
    anchor: n,
    ...s
  } = e, i = Object.keys(s);
  if (!i.length)
    return "";
  let r = "", a = "";
  const c = t ? H("anchor") : n;
  a += `.v-application a { color: ${c}; }`, t && (r += `  ${v("anchor")}: ${n};
`);
  for (let o = 0; o < i.length; ++o) {
    const l = i[o], u = e[l];
    a += Ne(l, t ? H(l) : u.base), t && (r += `  ${v(l)}: ${u.base};
`);
    const d = ee(u);
    for (let f = 0; f < d.length; ++f) {
      const h = d[f], p = u[h];
      h !== "base" && (a += Be(l, h, t ? H(l, h) : p), t && (r += `  ${v(l, h)}: ${p};
`));
    }
  }
  return t && (r = `:root {
${r}}

`), r + a;
}
function Re(e, t) {
  const n = {
    base: y(t)
  };
  for (let s = 5; s > 0; --s)
    n[`lighten${s}`] = y(We(t, s));
  for (let s = 1; s <= 4; ++s)
    n[`darken${s}`] = y(De(t, s));
  return n;
}
function We(e, t) {
  const n = Q(z(e));
  return n[0] = n[0] + t * 10, q(U(n));
}
function De(e, t) {
  const n = Q(z(e));
  return n[0] = n[0] - t * 10, q(U(n));
}
class x extends m {
  constructor(t) {
    super(), this.disabled = !1, this.isDark = null, this.unwatch = null, this.vueMeta = null;
    const {
      dark: n,
      disable: s,
      options: i,
      themes: r
    } = t[x.property];
    if (this.dark = Boolean(n), this.defaults = this.themes = r, this.options = i, s) {
      this.disabled = !0;
      return;
    }
    this.themes = {
      dark: this.fillVariant(r.dark, !0),
      light: this.fillVariant(r.light, !1)
    };
  }
  set css(t) {
    if (this.vueMeta) {
      this.isVueMeta23 && this.applyVueMeta23();
      return;
    }
    this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = t);
  }
  set dark(t) {
    const n = this.isDark;
    this.isDark = t, n != null && this.applyTheme();
  }
  get dark() {
    return Boolean(this.isDark);
  }
  applyTheme() {
    if (this.disabled)
      return this.clearCss();
    this.css = this.generatedStyles;
  }
  clearCss() {
    this.css = "";
  }
  init(t, n) {
    this.disabled || (t.$meta ? this.initVueMeta(t) : n && this.initSSR(n), this.initTheme(t));
  }
  setTheme(t, n) {
    this.themes[t] = Object.assign(this.themes[t], n), this.applyTheme();
  }
  resetThemes() {
    this.themes.light = Object.assign({}, this.defaults.light), this.themes.dark = Object.assign({}, this.defaults.dark), this.applyTheme();
  }
  checkOrCreateStyleElement() {
    return this.styleEl = document.getElementById("vuetify-theme-stylesheet"), this.styleEl ? !0 : (this.genStyleElement(), Boolean(this.styleEl));
  }
  fillVariant(t = {}, n) {
    const s = this.themes[n ? "dark" : "light"];
    return Object.assign({}, s, t);
  }
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
    const n = typeof this.vueMeta.getOptions == "function" ? this.vueMeta.getOptions().keyName : "metaInfo", s = t.$options[n] || {};
    t.$options[n] = () => {
      s.style = s.style || [];
      const i = s.style.find((r) => r.id === "vuetify-theme-stylesheet");
      return i ? i.cssText = this.generatedStyles : s.style.push({
        cssText: this.generatedStyles,
        type: "text/css",
        id: "vuetify-theme-stylesheet",
        nonce: (this.options || {}).cspNonce
      }), s;
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
    const n = this.options.cspNonce ? ` nonce="${this.options.cspNonce}"` : "";
    t.head = t.head || "", t.head += `<style type="text/css" id="vuetify-theme-stylesheet"${n}>${this.generatedStyles}</style>`;
  }
  initTheme(t) {
    typeof document > "u" || (this.unwatch && (this.unwatch(), this.unwatch = null), t.$once("hook:created", () => {
      const n = A.observable({
        themes: this.themes
      });
      this.unwatch = t.$watch(() => n.themes, () => this.applyTheme(), {
        deep: !0
      });
    }), this.applyTheme());
  }
  get currentTheme() {
    const t = this.dark ? "dark" : "light";
    return this.themes[t];
  }
  get generatedStyles() {
    const t = this.parsedTheme, n = this.options || {};
    let s;
    return n.themeCache != null && (s = n.themeCache.get(t), s != null) || (s = Ie(t, n.customProperties), n.minifyTheme != null && (s = n.minifyTheme(s)), n.themeCache != null && n.themeCache.set(t, s)), s;
  }
  get parsedTheme() {
    return j(this.currentTheme || {}, void 0, S(this.options, ["variations"], !0));
  }
  get isVueMeta23() {
    return typeof this.vueMeta.addApp == "function";
  }
}
x.property = "theme";
class g {
  constructor(t = {}) {
    this.framework = {
      isHydrating: !1
    }, this.installed = [], this.preset = {}, this.userPreset = {}, this.userPreset = t, this.use(D), this.use(Z), this.use(k), this.use(B), this.use(M), this.use($), this.use(x);
  }
  init(t, n) {
    this.installed.forEach((s) => {
      const i = this.framework[s];
      i.framework = this.framework, i.init(t, n);
    }), this.framework.rtl = Boolean(this.preset.rtl);
  }
  use(t) {
    const n = t.property;
    this.installed.includes(n) || (this.framework[n] = new t(this.preset, this), this.installed.push(n));
  }
}
g.install = O;
g.installed = !1;
g.version = "2.7.2";
g.config = {
  silent: !1
};
function X(e, t, n) {
  if (!g.config.silent) {
    if (n && (t = {
      _isVue: !0,
      $parent: n,
      $options: t
    }), t) {
      if (t.$_alreadyWarned = t.$_alreadyWarned || [], t.$_alreadyWarned.includes(e))
        return;
      t.$_alreadyWarned.push(e);
    }
    return `[Vuetify] ${e}` + (t ? Qe(t) : "");
  }
}
function b(e, t, n) {
  const s = X(e, t, n);
  s != null && console.warn(s);
}
function Y(e, t, n) {
  const s = X(e, t, n);
  s != null && console.error(s);
}
const qe = /(?:^|[-_])(\w)/g, ze = (e) => e.replace(qe, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function T(e, t) {
  if (e.$root === e)
    return "<Root>";
  const n = typeof e == "function" && e.cid != null ? e.options : e._isVue ? e.$options || e.constructor.options : e || {};
  let s = n.name || n._componentTag;
  const i = n.__file;
  if (!s && i) {
    const r = i.match(/([^/\\]+)\.vue$/);
    s = r && r[1];
  }
  return (s ? `<${ze(s)}>` : "<Anonymous>") + (i && t !== !1 ? ` at ${i}` : "");
}
function Qe(e) {
  if (e._isVue && e.$parent) {
    const t = [];
    let n = 0;
    for (; e; ) {
      if (t.length > 0) {
        const s = t[t.length - 1];
        if (s.constructor === e.constructor) {
          n++, e = e.$parent;
          continue;
        } else
          n > 0 && (t[t.length - 1] = [s, n], n = 0);
      }
      t.push(e), e = e.$parent;
    }
    return `

found in

` + t.map((s, i) => `${i === 0 ? "---> " : " ".repeat(5 + i * 2)}${Array.isArray(s) ? `${T(s[0])}... (${s[1]} recursive calls)` : T(s)}`).join(`
`);
  } else
    return `

(found in ${T(e)})`;
}
A.use(g);
const Ue = {}, nt = new g(Ue), je = G({
  name: "MyComponent",
  props: {
    text: {
      type: String,
      required: !0
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
});
function Xe(e, t, n, s, i, r, a, c) {
  var o = typeof e == "function" ? e.options : e;
  t && (o.render = t, o.staticRenderFns = n, o._compiled = !0), s && (o.functional = !0), r && (o._scopeId = "data-v-" + r);
  var l;
  if (a ? (l = function(f) {
    f = f || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !f && typeof __VUE_SSR_CONTEXT__ < "u" && (f = __VUE_SSR_CONTEXT__), i && i.call(this, f), f && f._registeredComponents && f._registeredComponents.add(a);
  }, o._ssrRegister = l) : i && (l = c ? function() {
    i.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), l)
    if (o.functional) {
      o._injectStyles = l;
      var u = o.render;
      o.render = function(h, p) {
        return l.call(p), u(h, p);
      };
    } else {
      var d = o.beforeCreate;
      o.beforeCreate = d ? [].concat(d, l) : [l];
    }
  return {
    exports: e,
    options: o
  };
}
var Ye = function() {
  var t = this, n = t._self._c;
  return t._self._setupProxy, n("v-btn", { on: { click: t.onClick } }, [t._v(t._s(t.text))]);
}, Ge = [], Ke = /* @__PURE__ */ Xe(
  je,
  Ye,
  Ge,
  !1,
  null,
  null,
  null,
  null
);
const Je = Ke.exports, et = (e) => {
  e.component("MyComponent", Je);
}, st = { install: et };
export {
  Je as MyComponent,
  nt as Vuetify,
  st as default
};
