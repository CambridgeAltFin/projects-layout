import F from "vue";
let J = !1;
try {
  if (typeof window < "u") {
    const s = Object.defineProperty({}, "passive", {
      get: () => {
        J = !0;
      }
    });
    window.addEventListener("testListener", s, s), window.removeEventListener("testListener", s, s);
  }
} catch (s) {
  console.warn(s);
}
function P(s, e, t) {
  const n = e.length - 1;
  if (n < 0)
    return s === void 0 ? t : s;
  for (let i = 0; i < n; i++) {
    if (s == null)
      return t;
    s = s[e[i]];
  }
  return s == null || s[e[n]] === void 0 ? t : s[e[n]];
}
function ee(s, e, t) {
  return s == null || !e || typeof e != "string" ? t : s[e] !== void 0 ? s[e] : (e = e.replace(/\[(\w+)\]/g, ".$1"), e = e.replace(/^\./, ""), P(s, e.split("."), t));
}
function E(s) {
  return s !== null && typeof s == "object";
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
function te(s) {
  return Object.keys(s);
}
function se(s, e = 0, t = 1) {
  return Math.max(e, Math.min(t, s));
}
function v(s = {}, e = {}) {
  for (const t in e) {
    const n = s[t], i = e[t];
    if (E(n) && E(i)) {
      s[t] = v(n, i);
      continue;
    }
    s[t] = i;
  }
  return s;
}
function V(s, e = {}) {
  if (V.installed)
    return;
  V.installed = !0, F !== s && K(`Multiple instances of Vue detected
See https://github.com/vuetifyjs/vuetify/issues/4068

If you're seeing "$attrs is readonly", it's caused by this`);
  const t = e.components || {}, n = e.directives || {};
  for (const i in n) {
    const a = n[i];
    s.directive(i, a);
  }
  (function i(a) {
    if (a) {
      for (const o in a) {
        const c = a[o];
        c && !i(c.$_vuetify_subcomponents) && s.component(o, c);
      }
      return !0;
    }
    return !1;
  })(t), !s.$_vuetify_installed && (s.$_vuetify_installed = !0, s.mixin({
    beforeCreate() {
      const i = this.$options;
      i.vuetify ? (i.vuetify.init(this, this.$ssrContext), this.$vuetify = s.observable(i.vuetify.framework)) : this.$vuetify = i.parent && i.parent.$vuetify || this;
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
  init(e, t) {
  }
}
class I extends m {
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
  register(e, t, n) {
    this.application[t][e] = n, this.update(t);
  }
  unregister(e, t) {
    this.application[t][e] != null && (delete this.application[t][e], this.update(t));
  }
  update(e) {
    this[e] = Object.values(this.application[e]).reduce((t, n) => t + n, 0);
  }
}
I.property = "application";
class k extends m {
  constructor(e) {
    super(), this.xs = !1, this.sm = !1, this.md = !1, this.lg = !1, this.xl = !1, this.xsOnly = !1, this.smOnly = !1, this.smAndDown = !1, this.smAndUp = !1, this.mdOnly = !1, this.mdAndDown = !1, this.mdAndUp = !1, this.lgOnly = !1, this.lgAndDown = !1, this.lgAndUp = !1, this.xlOnly = !1, this.name = "xs", this.height = 0, this.width = 0, this.mobile = !0, this.resizeTimeout = 0;
    const {
      mobileBreakpoint: t,
      scrollBarWidth: n,
      thresholds: i
    } = e[k.property];
    this.mobileBreakpoint = t, this.scrollBarWidth = n, this.thresholds = i;
  }
  init() {
    this.update(), !(typeof window > "u") && window.addEventListener("resize", this.onResize.bind(this), {
      passive: !0
    });
  }
  update(e = !1) {
    const t = e ? 0 : this.getClientHeight(), n = e ? 0 : this.getClientWidth(), i = n < this.thresholds.xs, a = n < this.thresholds.sm && !i, o = n < this.thresholds.md - this.scrollBarWidth && !(a || i), c = n < this.thresholds.lg - this.scrollBarWidth && !(o || a || i), r = n >= this.thresholds.lg - this.scrollBarWidth;
    switch (this.height = t, this.width = n, this.xs = i, this.sm = a, this.md = o, this.lg = c, this.xl = r, this.xsOnly = i, this.smOnly = a, this.smAndDown = (i || a) && !(o || c || r), this.smAndUp = !i && (a || o || c || r), this.mdOnly = o, this.mdAndDown = (i || a || o) && !(c || r), this.mdAndUp = !(i || a) && (o || c || r), this.lgOnly = c, this.lgAndDown = (i || a || o || c) && !r, this.lgAndUp = !(i || a || o) && (c || r), this.xlOnly = r, !0) {
      case i:
        this.name = "xs";
        break;
      case a:
        this.name = "sm";
        break;
      case o:
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
      this.mobile = n < parseInt(this.mobileBreakpoint, 10);
      return;
    }
    const l = {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    }, d = l[this.name], u = l[this.mobileBreakpoint];
    this.mobile = d <= u;
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
const ne = (s) => s, ie = (s) => s ** 2, ae = (s) => s * (2 - s), re = (s) => s < 0.5 ? 2 * s ** 2 : -1 + (4 - 2 * s) * s, oe = (s) => s ** 3, ce = (s) => --s ** 3 + 1, le = (s) => s < 0.5 ? 4 * s ** 3 : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1, fe = (s) => s ** 4, de = (s) => 1 - --s ** 4, ue = (s) => s < 0.5 ? 8 * s * s * s * s : 1 - 8 * --s * s * s * s, he = (s) => s ** 5, pe = (s) => 1 + --s ** 5, me = (s) => s < 0.5 ? 16 * s ** 5 : 1 + 16 * --s ** 5, ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  linear: ne,
  easeInQuad: ie,
  easeOutQuad: ae,
  easeInOutQuad: re,
  easeInCubic: oe,
  easeOutCubic: ce,
  easeInOutCubic: le,
  easeInQuart: fe,
  easeOutQuart: de,
  easeInOutQuart: ue,
  easeInQuint: he,
  easeOutQuint: pe,
  easeInOutQuint: me
}, Symbol.toStringTag, { value: "Module" }));
function H(s) {
  if (typeof s == "number")
    return s;
  let e = Z(s);
  if (!e)
    throw typeof s == "string" ? new Error(`Target element "${s}" not found.`) : new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${N(s)} instead.`);
  let t = 0;
  for (; e; )
    t += e.offsetTop, e = e.offsetParent;
  return t;
}
function ve(s) {
  const e = Z(s);
  if (e)
    return e;
  throw typeof s == "string" ? new Error(`Container element "${s}" not found.`) : new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${N(s)} instead.`);
}
function N(s) {
  return s == null ? s : s.constructor.name;
}
function Z(s) {
  return typeof s == "string" ? document.querySelector(s) : s && s._isVue ? s.$el : s instanceof HTMLElement ? s : null;
}
function _(s, e = {}) {
  const t = {
    container: document.scrollingElement || document.body || document.documentElement,
    duration: 500,
    offset: 0,
    easing: "easeInOutCubic",
    appOffset: !0,
    ...e
  }, n = ve(t.container);
  if (t.appOffset && _.framework.application) {
    const r = n.classList.contains("v-navigation-drawer"), l = n.classList.contains("v-navigation-drawer--clipped"), {
      bar: d,
      top: u
    } = _.framework.application;
    t.offset += d, (!r || l) && (t.offset += u);
  }
  const i = performance.now();
  let a;
  typeof s == "number" ? a = H(s) - t.offset : a = H(s) - H(n) - t.offset;
  const o = n.scrollTop;
  if (a === o)
    return Promise.resolve(a);
  const c = typeof t.easing == "function" ? t.easing : ge[t.easing];
  if (!c)
    throw new TypeError(`Easing function "${t.easing}" not found.`);
  return new Promise((r) => requestAnimationFrame(function l(d) {
    const u = d - i, f = Math.abs(t.duration ? Math.min(u / t.duration, 1) : 1);
    n.scrollTop = Math.floor(o + (a - o) * c(f));
    const p = (n === document.body ? document.documentElement.clientHeight : n.clientHeight) + n.scrollTop >= n.scrollHeight;
    if (f === 1 || a > n.scrollTop && p)
      return r(a);
    requestAnimationFrame(l);
  }));
}
_.framework = {};
_.init = () => {
};
class D extends m {
  constructor() {
    return super(), _;
  }
}
D.property = "goTo";
const be = {
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
}, ye = be, _e = {
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
}, Le = _e, Ce = {
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
}, we = Ce, ke = {
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
}, R = ke, xe = {
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
}, $e = xe;
function Me(s, e) {
  const t = {};
  for (const n in e)
    t[n] = {
      component: s,
      props: {
        icon: e[n].split(" fa-")
      }
    };
  return t;
}
const Te = Me("font-awesome-icon", R), He = Object.freeze({
  mdiSvg: ye,
  md: Le,
  mdi: we,
  fa: R,
  fa4: $e,
  faSvg: Te
});
class x extends m {
  constructor(e) {
    super();
    const {
      iconfont: t,
      values: n,
      component: i
    } = e[x.property];
    this.component = i, this.iconfont = t, this.values = v(He[t], n);
  }
}
x.property = "icons";
const j = "$vuetify.", B = Symbol("Lang fallback");
function W(s, e, t = !1, n) {
  const i = e.replace(j, "");
  let a = ee(s, i, B);
  return a === B && (t ? (K(`Translation key "${i}" not found in fallback`), a = e) : (y(`Translation key "${i}" not found, falling back to default`), a = W(n, e, !0, n))), a;
}
class $ extends m {
  constructor(e) {
    super(), this.defaultLocale = "en";
    const {
      current: t,
      locales: n,
      t: i
    } = e[$.property];
    this.current = t, this.locales = n, this.translator = i || this.defaultTranslator;
  }
  currentLocale(e) {
    const t = this.locales[this.current], n = this.locales[this.defaultLocale];
    return W(t, e, !1, n);
  }
  t(e, ...t) {
    return e.startsWith(j) ? this.translator(e, ...t) : this.replace(e, t);
  }
  defaultTranslator(e, ...t) {
    return this.replace(this.currentLocale(e), t);
  }
  replace(e, t) {
    return e.replace(/\{(\d+)\}/g, (n, i) => String(t[+i]));
  }
}
$.property = "lang";
const Ae = {
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
      en: Ae
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
class z extends m {
  constructor(e, t) {
    super();
    const n = v({}, Oe), {
      userPreset: i
    } = t, {
      preset: a = {},
      ...o
    } = i;
    a.preset != null && y("Global presets do not support the **preset** option, it can be safely omitted"), t.preset = v(v(n, a), o);
  }
}
z.property = "presets";
const Ve = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], Se = (s) => s <= 31308e-7 ? s * 12.92 : 1.055 * s ** (1 / 2.4) - 0.055, Fe = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Ee = (s) => s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
function U(s) {
  const e = Array(3), t = Se, n = Ve;
  for (let i = 0; i < 3; ++i)
    e[i] = Math.round(se(t(n[i][0] * s[0] + n[i][1] * s[1] + n[i][2] * s[2])) * 255);
  return (e[0] << 16) + (e[1] << 8) + (e[2] << 0);
}
function q(s) {
  const e = [0, 0, 0], t = Ee, n = Fe, i = t((s >> 16 & 255) / 255), a = t((s >> 8 & 255) / 255), o = t((s >> 0 & 255) / 255);
  for (let c = 0; c < 3; ++c)
    e[c] = n[c][0] * i + n[c][1] * a + n[c][2] * o;
  return e;
}
function S(s) {
  let e;
  if (typeof s == "number")
    e = s;
  else if (typeof s == "string") {
    let t = s[0] === "#" ? s.substring(1) : s;
    t.length === 3 && (t = t.split("").map((n) => n + n).join("")), t.length !== 6 && y(`'${s}' is not a valid rgb color`), e = parseInt(t, 16);
  } else
    throw new TypeError(`Colors can only be numbers or strings, recieved ${s == null ? s : s.constructor.name} instead`);
  return e < 0 ? (y(`Colors cannot be negative: '${s}'`), e = 0) : (e > 16777215 || isNaN(e)) && (y(`'${s}' is not a valid rgb color`), e = 16777215), e;
}
function b(s) {
  let e = s.toString(16);
  return e.length < 6 && (e = "0".repeat(6 - e.length) + e), "#" + e;
}
function Be(s) {
  return b(S(s));
}
const w = 0.20689655172413793, Pe = (s) => s > w ** 3 ? Math.cbrt(s) : s / (3 * w ** 2) + 4 / 29, Ie = (s) => s > w ? s ** 3 : 3 * w ** 2 * (s - 4 / 29);
function Q(s) {
  const e = Pe, t = e(s[1]);
  return [116 * t - 16, 500 * (e(s[0] / 0.95047) - t), 200 * (t - e(s[2] / 1.08883))];
}
function Y(s) {
  const e = Ie, t = (s[0] + 16) / 116;
  return [e(t + s[1] / 500) * 0.95047, e(t), e(t - s[2] / 200) * 1.08883];
}
function X(s, e = !1, t = !0) {
  const {
    anchor: n,
    ...i
  } = s, a = Object.keys(i), o = {};
  for (let c = 0; c < a.length; ++c) {
    const r = a[c], l = s[r];
    l != null && (t ? e ? (r === "base" || r.startsWith("lighten") || r.startsWith("darken")) && (o[r] = Be(l)) : typeof l == "object" ? o[r] = X(l, !0, t) : o[r] = Re(r, S(l)) : o[r] = {
      base: b(S(l))
    });
  }
  return e || (o.anchor = n || o.base || o.primary.base), o;
}
const Ne = (s, e) => `
.v-application .${s} {
  background-color: ${e} !important;
  border-color: ${e} !important;
}
.v-application .${s}--text {
  color: ${e} !important;
  caret-color: ${e} !important;
}`, Ze = (s, e, t) => {
  const [n, i] = e.split(/(\d)/, 2);
  return `
.v-application .${s}.${n}-${i} {
  background-color: ${t} !important;
  border-color: ${t} !important;
}
.v-application .${s}--text.text--${n}-${i} {
  color: ${t} !important;
  caret-color: ${t} !important;
}`;
}, C = (s, e = "base") => `--v-${s}-${e}`, A = (s, e = "base") => `var(${C(s, e)})`;
function De(s, e = !1) {
  const {
    anchor: t,
    ...n
  } = s, i = Object.keys(n);
  if (!i.length)
    return "";
  let a = "", o = "";
  const c = e ? A("anchor") : t;
  o += `.v-application a { color: ${c}; }`, e && (a += `  ${C("anchor")}: ${t};
`);
  for (let r = 0; r < i.length; ++r) {
    const l = i[r], d = s[l];
    o += Ne(l, e ? A(l) : d.base), e && (a += `  ${C(l)}: ${d.base};
`);
    const u = te(d);
    for (let f = 0; f < u.length; ++f) {
      const h = u[f], p = d[h];
      h !== "base" && (o += Ze(l, h, e ? A(l, h) : p), e && (a += `  ${C(l, h)}: ${p};
`));
    }
  }
  return e && (a = `:root {
${a}}

`), a + o;
}
function Re(s, e) {
  const t = {
    base: b(e)
  };
  for (let n = 5; n > 0; --n)
    t[`lighten${n}`] = b(je(e, n));
  for (let n = 1; n <= 4; ++n)
    t[`darken${n}`] = b(We(e, n));
  return t;
}
function je(s, e) {
  const t = Q(q(s));
  return t[0] = t[0] + e * 10, U(Y(t));
}
function We(s, e) {
  const t = Q(q(s));
  return t[0] = t[0] - e * 10, U(Y(t));
}
class M extends m {
  constructor(e) {
    super(), this.disabled = !1, this.isDark = null, this.unwatch = null, this.vueMeta = null;
    const {
      dark: t,
      disable: n,
      options: i,
      themes: a
    } = e[M.property];
    if (this.dark = Boolean(t), this.defaults = this.themes = a, this.options = i, n) {
      this.disabled = !0;
      return;
    }
    this.themes = {
      dark: this.fillVariant(a.dark, !0),
      light: this.fillVariant(a.light, !1)
    };
  }
  set css(e) {
    if (this.vueMeta) {
      this.isVueMeta23 && this.applyVueMeta23();
      return;
    }
    this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = e);
  }
  set dark(e) {
    const t = this.isDark;
    this.isDark = e, t != null && this.applyTheme();
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
  init(e, t) {
    this.disabled || (e.$meta ? this.initVueMeta(e) : t && this.initSSR(t), this.initTheme(e));
  }
  setTheme(e, t) {
    this.themes[e] = Object.assign(this.themes[e], t), this.applyTheme();
  }
  resetThemes() {
    this.themes.light = Object.assign({}, this.defaults.light), this.themes.dark = Object.assign({}, this.defaults.dark), this.applyTheme();
  }
  checkOrCreateStyleElement() {
    return this.styleEl = document.getElementById("vuetify-theme-stylesheet"), this.styleEl ? !0 : (this.genStyleElement(), Boolean(this.styleEl));
  }
  fillVariant(e = {}, t) {
    const n = this.themes[t ? "dark" : "light"];
    return Object.assign({}, n, e);
  }
  genStyleElement() {
    typeof document > "u" || (this.styleEl = document.createElement("style"), this.styleEl.type = "text/css", this.styleEl.id = "vuetify-theme-stylesheet", this.options.cspNonce && this.styleEl.setAttribute("nonce", this.options.cspNonce), document.head.appendChild(this.styleEl));
  }
  initVueMeta(e) {
    if (this.vueMeta = e.$meta(), this.isVueMeta23) {
      e.$nextTick(() => {
        this.applyVueMeta23();
      });
      return;
    }
    const t = typeof this.vueMeta.getOptions == "function" ? this.vueMeta.getOptions().keyName : "metaInfo", n = e.$options[t] || {};
    e.$options[t] = () => {
      n.style = n.style || [];
      const i = n.style.find((a) => a.id === "vuetify-theme-stylesheet");
      return i ? i.cssText = this.generatedStyles : n.style.push({
        cssText: this.generatedStyles,
        type: "text/css",
        id: "vuetify-theme-stylesheet",
        nonce: (this.options || {}).cspNonce
      }), n;
    };
  }
  applyVueMeta23() {
    const {
      set: e
    } = this.vueMeta.addApp("vuetify");
    e({
      style: [{
        cssText: this.generatedStyles,
        type: "text/css",
        id: "vuetify-theme-stylesheet",
        nonce: this.options.cspNonce
      }]
    });
  }
  initSSR(e) {
    const t = this.options.cspNonce ? ` nonce="${this.options.cspNonce}"` : "";
    e.head = e.head || "", e.head += `<style type="text/css" id="vuetify-theme-stylesheet"${t}>${this.generatedStyles}</style>`;
  }
  initTheme(e) {
    typeof document > "u" || (this.unwatch && (this.unwatch(), this.unwatch = null), e.$once("hook:created", () => {
      const t = F.observable({
        themes: this.themes
      });
      this.unwatch = e.$watch(() => t.themes, () => this.applyTheme(), {
        deep: !0
      });
    }), this.applyTheme());
  }
  get currentTheme() {
    const e = this.dark ? "dark" : "light";
    return this.themes[e];
  }
  get generatedStyles() {
    const e = this.parsedTheme, t = this.options || {};
    let n;
    return t.themeCache != null && (n = t.themeCache.get(e), n != null) || (n = De(e, t.customProperties), t.minifyTheme != null && (n = t.minifyTheme(n)), t.themeCache != null && t.themeCache.set(e, n)), n;
  }
  get parsedTheme() {
    return X(this.currentTheme || {}, void 0, P(this.options, ["variations"], !0));
  }
  get isVueMeta23() {
    return typeof this.vueMeta.addApp == "function";
  }
}
M.property = "theme";
class g {
  constructor(e = {}) {
    this.framework = {
      isHydrating: !1
    }, this.installed = [], this.preset = {}, this.userPreset = {}, this.userPreset = e, this.use(z), this.use(I), this.use(k), this.use(D), this.use(x), this.use($), this.use(M);
  }
  init(e, t) {
    this.installed.forEach((n) => {
      const i = this.framework[n];
      i.framework = this.framework, i.init(e, t);
    }), this.framework.rtl = Boolean(this.preset.rtl);
  }
  use(e) {
    const t = e.property;
    this.installed.includes(t) || (this.framework[t] = new e(this.preset, this), this.installed.push(t));
  }
}
g.install = V;
g.installed = !1;
g.version = "2.7.2";
g.config = {
  silent: !1
};
function G(s, e, t) {
  if (!g.config.silent) {
    if (t && (e = {
      _isVue: !0,
      $parent: t,
      $options: e
    }), e) {
      if (e.$_alreadyWarned = e.$_alreadyWarned || [], e.$_alreadyWarned.includes(s))
        return;
      e.$_alreadyWarned.push(s);
    }
    return `[Vuetify] ${s}` + (e ? qe(e) : "");
  }
}
function y(s, e, t) {
  const n = G(s, e, t);
  n != null && console.warn(n);
}
function K(s, e, t) {
  const n = G(s, e, t);
  n != null && console.error(n);
}
const ze = /(?:^|[-_])(\w)/g, Ue = (s) => s.replace(ze, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function O(s, e) {
  if (s.$root === s)
    return "<Root>";
  const t = typeof s == "function" && s.cid != null ? s.options : s._isVue ? s.$options || s.constructor.options : s || {};
  let n = t.name || t._componentTag;
  const i = t.__file;
  if (!n && i) {
    const a = i.match(/([^/\\]+)\.vue$/);
    n = a && a[1];
  }
  return (n ? `<${Ue(n)}>` : "<Anonymous>") + (i && e !== !1 ? ` at ${i}` : "");
}
function qe(s) {
  if (s._isVue && s.$parent) {
    const e = [];
    let t = 0;
    for (; s; ) {
      if (e.length > 0) {
        const n = e[e.length - 1];
        if (n.constructor === s.constructor) {
          t++, s = s.$parent;
          continue;
        } else
          t > 0 && (e[e.length - 1] = [n, t], t = 0);
      }
      e.push(s), s = s.$parent;
    }
    return `

found in

` + e.map((n, i) => `${i === 0 ? "---> " : " ".repeat(5 + i * 2)}${Array.isArray(n) ? `${O(n[0])}... (${n[1]} recursive calls)` : O(n)}`).join(`
`);
  } else
    return `

(found in ${O(s)})`;
}
F.use(g);
const Qe = {}, ht = new g(Qe);
function T(s, e, t, n, i, a, o, c) {
  var r = typeof s == "function" ? s.options : s;
  e && (r.render = e, r.staticRenderFns = t, r._compiled = !0), n && (r.functional = !0), a && (r._scopeId = "data-v-" + a);
  var l;
  if (o ? (l = function(f) {
    f = f || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !f && typeof __VUE_SSR_CONTEXT__ < "u" && (f = __VUE_SSR_CONTEXT__), i && i.call(this, f), f && f._registeredComponents && f._registeredComponents.add(o);
  }, r._ssrRegister = l) : i && (l = c ? function() {
    i.call(
      this,
      (r.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), l)
    if (r.functional) {
      r._injectStyles = l;
      var d = r.render;
      r.render = function(h, p) {
        return l.call(p), d(h, p);
      };
    } else {
      var u = r.beforeCreate;
      r.beforeCreate = u ? [].concat(u, l) : [l];
    }
  return {
    exports: s,
    options: r
  };
}
const Ye = {
  name: "MobileMenu",
  props: {
    env: {
      type: String,
      default: ""
    }
  }
};
var Xe = function() {
  var e = this, t = e._self._c;
  return t("v-card", [t("v-list-item", { attrs: { href: `https://${e.env}ccaf.io/` } }, [t("v-list-item-title", { staticClass: "list__title" }, [e._v(" CCAF Home ")])], 1), t("v-divider"), t("v-list-item", { attrs: { href: `https://${e.env}ccaf.io/about_ccaf` } }, [t("v-list-item-title", { staticClass: "list__title" }, [e._v(" CCAF About ")])], 1), t("v-divider"), t("v-list-item", { attrs: { href: `https://${e.env}ccaf.io/contact?topic=cbeci` } }, [t("v-list-item-title", { staticClass: "list__title" }, [e._v(" CCAF Contact ")])], 1), t("v-divider"), t("v-list-item", [t("v-list-item-title", { staticClass: "list__title" }, [e._v(" CCAF Digital Tools: ")])], 1), t("div", { staticClass: "chips" }, [t("v-chip", { staticClass: "chips__item chips__item-active" }, [e._v(" CBECI ")]), t("v-chip", { staticClass: "chips__item", attrs: { href: `https://${e.env}ccaf.io/atlas` } }, [e._v(" Atlas ")]), t("v-chip", { staticClass: "chips__item", attrs: { href: `https://${e.env}ccaf.io/cafb` } }, [e._v(" Benchmarks ")])], 1)], 1);
}, Ge = [], Ke = /* @__PURE__ */ T(
  Ye,
  Xe,
  Ge,
  !1,
  null,
  "5f5d415c",
  null,
  null
);
const L = Ke.exports;
const Je = {
  name: "Footer",
  data() {
    return {
      env: "",
      scrollUp: !1
    };
  },
  computed: {},
  mounted() {
    typeof window < "u" && (this.env = process.env.ENV === "demo" ? "demo." : "", window.onscroll = () => {
      this.scrollUp = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
      const e = document.getElementById("sidebar"), t = document.getElementById("sidebar__menu"), n = document.getElementById("footer");
      if (t && e && n) {
        const i = window.innerHeight < t.getBoundingClientRect().height + 72 ? window.innerHeight - 72 : t.getBoundingClientRect().height, a = n.getBoundingClientRect().top, o = t.getBoundingClientRect().top, c = document.body.scrollTop;
        let r = Math.max(72, o - c);
        c + i + 72 > a && (r = Math.min(r, a - c - i)), e.style.top = r + "px";
      }
    });
  }
};
var et = function() {
  var e = this, t = e._self._c;
  return t("v-footer", { staticClass: "footer pa-0", attrs: { id: "footer", color: "white", width: "100vw" } }, [e.scrollUp ? t("div", { staticClass: "goup", on: { click: function(n) {
    return e.$vuetify.goTo(0, {
      duration: 300,
      offset: 0,
      easing: "easeInOutCubic"
    });
  } } }, [t("icons-arrow-top")], 1) : e._e(), t("v-container", { staticClass: "pa-4", attrs: { fluid: "" } }, [t("v-row", { staticClass: "footer__pre-footer", attrs: { align: "start", justify: "start", "no-gutters": "" } }, [t("v-col", { staticClass: "mb-4 pa-4", attrs: { cols: "auto" } }, [t("div", { staticClass: "mb-2 link-icon" }, [t("v-icon", { staticClass: "mr-2", attrs: { size: "16", color: "#0e1436" } }, [e._v(" language ")]), t("a", { attrs: { href: "https://www.jbs.cam.ac.uk/ccaf", target: "_blank" } }, [e._v(" https://www.jbs.cam.ac.uk/ccaf ")])], 1), t("div", { staticClass: "mb-2 link-icon" }, [t("v-icon", { staticClass: "mr-2", attrs: { size: "16", color: "#0e1436" } }, [e._v(" email ")]), t("a", { attrs: { href: "mailto:ccaf@jbs.cam.ac.uk" } }, [e._v(" ccaf@jbs.cam.ac.uk ")])], 1), t("div", { staticClass: "link-icon" }, [t("v-icon", { staticClass: "mr-2", attrs: { size: "16", color: "#0e1436" } }, [e._v(" place ")]), e._v(" 10 Trumpington Street "), t("div", { staticClass: "ml-7" }, [e._v(" Cambridge ")]), t("div", { staticClass: "ml-7 mb-2" }, [e._v(" CB2 1QA, UK ")])], 1), t("div", { staticClass: "ml-7" }, [t("v-row", [t("v-col", [t("a", { attrs: { href: "https://www.linkedin.com/company/cambridge-centre-for-alternative-finance", target: "_blank" } }, [t("icons-socialLinkedin", { staticClass: "mr-2 hover hover-linkedin", staticStyle: { width: "24px", height: "24px" } })], 1), t("a", { attrs: { href: "https://twitter.com/CambridgeAltFin", target: "_blank" } }, [t("icons-socialTwitter", { staticClass: "hover hover-twitter", staticStyle: { width: "24px", height: "24px" } })], 1)])], 1)], 1)]), t("v-col", { staticClass: "mb-4 pa-4", attrs: { cols: "auto" } }, [t("a", { attrs: { rel: "license", href: "http://creativecommons.org/licenses/by-nc-sa/4.0/", target: "_blank" } }, [t("img", { staticStyle: { "border-width": "0" }, attrs: { alt: "Creative Commons License", src: "https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg" } })]), t("br"), t("p", { staticStyle: { "font-size": "12px", "max-width": "280px" } }, [e._v(" This work is licensed under a "), t("a", { attrs: { rel: "license", href: "http://creativecommons.org/licenses/by-nc-sa/4.0/", target: "_blank" } }, [e._v(" Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License ")])])]), t("v-spacer", { staticClass: "hidden-sm-and-down" }), t("v-col", { staticClass: "pa-4", attrs: { cols: "auto" } }, [t("div", { staticClass: "mb-2", staticStyle: { "font-size": "16px", height: "20px" } }, [t("strong", [e._v(" Supported by: ")])]), t("a", { attrs: { href: "https://www.gov.uk/government/organisations/foreign-commonwealth-development-office", target: "_blank" } }, [t("img", { attrs: { src: "https://firebasestorage.googleapis.com/v0/b/ccaf-afea-test.appspot.com/o/sponsors%2FAID.webp?alt=media&token=520c95b9-b895-4d3b-8060-6d4b09de3c02", width: "92", height: "101", alt: "UK AID" } })])])], 1), t("v-row", { staticClass: "footer__main-footer", attrs: { align: "center", justify: e.$vuetify.breakpoint.smAndDown ? "center" : "space-between", "no-gutters": "" } }, [t("v-col", { attrs: { cols: "auto" } }, [t("a", { attrs: { href: `https://${e.env}ccaf.io/privacy_policy` } }, [e._v(" Privacy Policy ")])]), t("v-col", { attrs: { cols: "auto" } }, [t("span", [e._v("Cambridge Centre for Alternative Finance \xA9\xA0" + e._s(" " + new Date().getFullYear()))])])], 1)], 1)], 1);
}, tt = [], st = /* @__PURE__ */ T(
  Je,
  et,
  tt,
  !1,
  null,
  "8a2fabb3",
  null,
  null
);
const pt = st.exports;
const nt = {
  name: "Header",
  data() {
    return {
      dialog: !1,
      env: "",
      projects: [
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
          link: "suptechlab/vendor_database"
        },
        {
          title: "SupTech Solutions Tracker",
          id: "ssr",
          link: "suptechlab/solutions_tracker"
        }
      ],
      project: {
        title: "Cambridge Blockchain Network Sustainability Index",
        id: "cbnsi",
        tag: "CBNSI",
        link: "cbnsi"
      }
    };
  },
  computed: {
    topic() {
      return this.$route.path.includes("ethereum") ? "cbnsi_eth" : this.$route.path.includes("cbeci") ? "cbnsi_btc" : "cbnsi";
    },
    title() {
      return this.$route.path.includes("ethereum") ? "Cambridge Blockchain Network Sustainability Index" : "Cambridge Bitcoin Electricity Consumption Index";
    }
  },
  mounted() {
    this.env = process.env.ENV === "demo" ? "demo." : "";
  },
  methods: {
    setDialog(s) {
      this.dialog = s;
    },
    linkTo(s) {
      let e = "";
      switch (s) {
        case "CBECI":
          e = "cbeci/cbeci";
          break;
        case "Benchmarks":
          e = "cafb";
          break;
        case "Atlas":
          e = "atlas";
      }
      window.location.href = `https://${this.env}ccaf.io/${e}`;
    }
  }
};
var it = function() {
  var e = this, t = e._self._c;
  return t("v-app-bar", { staticClass: "header noselect", attrs: { id: "header", color: "#FFB71A", height: "72", "clipped-right": "", "clipped-left": "", flat: "", app: "" } }, [t("v-row", { staticClass: "header__logo", attrs: { align: "center", justify: "start" } }, [t("a", { attrs: { title: "CCAF.io", href: `https://${e.env}ccaf.io/` } }, [t("img", { attrs: { src: "https://firebasestorage.googleapis.com/v0/b/ccaf-afea-test.appspot.com/o/logo.webp?alt=media&token=f4da887e-96cf-4325-b67b-5afd938250bf", width: "179", height: "52", alt: "Cambridge Centre for Alternative Finance (CCAF.io)" } })]), t("h4", { staticClass: "ma-0 ml-8 d-none d-sm-flex", staticStyle: { "font-family": "MyriadProSemiBold !important" } }, [e._v(" " + e._s(e.title) + " ")]), t("v-spacer"), t("div", { staticClass: "project-selector" }, [e.$vuetify.breakpoint.mdAndUp ? t("v-select", { attrs: { value: "cbnsi", items: e.projects, "item-value": "id", "item-text": "tag", "menu-props": {
    offsetY: !0,
    offsetX: !0,
    nudgeBottom: "10px",
    nudgeLeft: "355px",
    maxHeight: 500,
    contentClass: "my-custom-select"
  }, "background-color": "rgba(255, 183, 26, 0.32);", color: "#333333", height: "40", "append-icon": "mdi-chevron-down", "hide-details": "", solo: "", flat: "" }, on: { change: e.linkTo }, scopedSlots: e._u([{ key: "selection", fn: function() {
    return [t("strong", { staticStyle: { "font-size": "14px", "font-weight": "600" } }, [e._v("CBNSI")])];
  }, proxy: !0 }, { key: "item", fn: function({ item: n }) {
    return [e._v(" " + e._s(n.title) + " "), t("v-spacer"), n.tag ? t("div", { staticClass: "ml-4 chips" }, [e._v(" " + e._s(n.tag) + " ")]) : e._e()];
  } }], null, !1, 1306900918) }) : e._e()], 1)], 1), t("v-dialog", { attrs: { fullscreen: "" }, scopedSlots: e._u([{ key: "activator", fn: function({ on: n }) {
    return [t("div", e._g({ staticClass: "header__nav-icon hidden-lg-and-up" }, n), [t("v-icon", { attrs: { color: "#000" } }, [e._v(" " + e._s(e.dialog ? "mdi-close" : "mdi-menu") + " ")])], 1)];
  } }]), model: { value: e.dialog, callback: function(n) {
    e.dialog = n;
  }, expression: "dialog" } }, [e._t("default")], 2)], 1);
}, at = [], rt = /* @__PURE__ */ T(
  nt,
  it,
  at,
  !1,
  null,
  "58f0b239",
  null,
  null
);
const mt = rt.exports;
const ot = {
  name: "Loader",
  props: {
    visible: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    title() {
      return "";
    }
  }
};
var ct = function() {
  var e = this, t = e._self._c;
  return t("div", { staticClass: "app-loader", class: { "app-loader--visible": e.visible } }, [t("v-container", [t("v-row", { staticClass: "flex-column", attrs: { align: "center", justify: "center" } }, [t("v-col", { attrs: { cols: "12" } }, [t("h1", { staticClass: "app-loader__title" }, [e._v(" " + e._s(e.title) + " ")])]), t("v-col", { staticClass: "d-flex justify-center", attrs: { cols: "12" } }, [t("div", { staticClass: "lds-ring" }, [t("div"), t("div"), t("div"), t("div")])]), t("v-col", { attrs: { cols: "12" } }, [t("p", { staticClass: "app-loader__state" }, [e._v(" LOADING ")])])], 1)], 1)], 1);
}, lt = [], ft = /* @__PURE__ */ T(
  ot,
  ct,
  lt,
  !1,
  null,
  "86f41919",
  null,
  null
);
const gt = ft.exports, dt = (s) => {
  s.component("MobileMenu", L), s.component("LayoutFooter", L), s.component("LayoutHeader", L), s.component("Loader", L);
}, vt = { install: dt };
export {
  pt as LayoutFooter,
  mt as LayoutHeader,
  gt as Loader,
  L as MobileMenu,
  ht as Vuetify,
  vt as default
};
