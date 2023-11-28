import {
  require_react_dom
} from "./chunk-UWZXFKA6.js";
import {
  __toESM,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react19 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t17, e5, n7) => e5 in t17 ? i(t17, e5, { enumerable: true, configurable: true, writable: true, value: n7 }) : t17[e5] = n7;
var r = (t17, e5, n7) => (d(t17, typeof e5 != "symbol" ? e5 + "" : e5, n7), n7);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e5) {
    this.current !== e5 && (this.handoffState = "pending", this.currentId = 0, this.current = e5);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e5, f14) => {
  s.isServer ? (0, import_react.useEffect)(e5, f14) : (0, import_react.useLayoutEffect)(e5, f14);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e5) {
  let r9 = (0, import_react2.useRef)(e5);
  return l(() => {
    r9.current = e5;
  }, [e5]), r9;
}

// node_modules/@headlessui/react/dist/hooks/use-computed.js
function i2(e5, o12) {
  let [u10, t17] = (0, import_react3.useState)(e5), r9 = s2(e5);
  return l(() => t17(r9.current), [r9, t17, ...o12]), u10;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e5) {
  typeof queueMicrotask == "function" ? queueMicrotask(e5) : Promise.resolve().then(e5).catch((o12) => setTimeout(() => {
    throw o12;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n7 = [], r9 = { addEventListener(e5, t17, s17, a13) {
    return e5.addEventListener(t17, s17, a13), r9.add(() => e5.removeEventListener(t17, s17, a13));
  }, requestAnimationFrame(...e5) {
    let t17 = requestAnimationFrame(...e5);
    return r9.add(() => cancelAnimationFrame(t17));
  }, nextFrame(...e5) {
    return r9.requestAnimationFrame(() => r9.requestAnimationFrame(...e5));
  }, setTimeout(...e5) {
    let t17 = setTimeout(...e5);
    return r9.add(() => clearTimeout(t17));
  }, microTask(...e5) {
    let t17 = { current: true };
    return t3(() => {
      t17.current && e5[0]();
    }), r9.add(() => {
      t17.current = false;
    });
  }, style(e5, t17, s17) {
    let a13 = e5.style.getPropertyValue(t17);
    return Object.assign(e5.style, { [t17]: s17 }), this.add(() => {
      Object.assign(e5.style, { [t17]: a13 });
    });
  }, group(e5) {
    let t17 = o2();
    return e5(t17), this.add(() => t17.dispose());
  }, add(e5) {
    return n7.push(e5), () => {
      let t17 = n7.indexOf(e5);
      if (t17 >= 0)
        for (let s17 of n7.splice(t17, 1))
          s17();
    };
  }, dispose() {
    for (let e5 of n7.splice(0))
      e5();
  } };
  return r9;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e5] = (0, import_react4.useState)(o2);
  return (0, import_react4.useEffect)(() => () => e5.dispose(), [e5]), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react5 = __toESM(require_react(), 1);
var o4 = function(t17) {
  let e5 = s2(t17);
  return import_react5.default.useCallback((...r9) => e5.current(...r9), [e5]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t4 = __toESM(require_react(), 1);
function s5() {
  let r9 = typeof document == "undefined";
  return "useSyncExternalStore" in t4 ? ((o12) => o12.useSyncExternalStore)(t4)(() => () => {
  }, () => false, () => !r9) : false;
}
function l2() {
  let r9 = s5(), [e5, n7] = t4.useState(s.isHandoffComplete);
  return e5 && s.isHandoffComplete === false && n7(false), t4.useEffect(() => {
    e5 !== true && n7(true);
  }, [e5]), t4.useEffect(() => s.handoff(), []), r9 ? false : e5;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o5;
var I = (o5 = import_react6.default.useId) != null ? o5 : function() {
  let n7 = l2(), [e5, u10] = import_react6.default.useState(n7 ? () => s.nextId() : null);
  return l(() => {
    e5 === null && u10(s.nextId());
  }, [e5]), e5 != null ? "" + e5 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r9, n7, ...a13) {
  if (r9 in n7) {
    let e5 = n7[r9];
    return typeof e5 == "function" ? e5(...a13) : e5;
  }
  let t17 = new Error(`Tried to handle "${r9}" but there is no handler defined. Only defined handlers are: ${Object.keys(n7).map((e5) => `"${e5}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t17, u), t17;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r9) {
  return s.isServer ? null : r9 instanceof Node ? r9.ownerDocument : r9 != null && r9.hasOwnProperty("current") && r9.current instanceof Node ? r9.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var M = ((n7) => (n7[n7.First = 1] = "First", n7[n7.Previous = 2] = "Previous", n7[n7.Next = 4] = "Next", n7[n7.Last = 8] = "Last", n7[n7.WrapAround = 16] = "WrapAround", n7[n7.NoScroll = 32] = "NoScroll", n7))(M || {});
var N = ((o12) => (o12[o12.Error = 0] = "Error", o12[o12.Overflow = 1] = "Overflow", o12[o12.Success = 2] = "Success", o12[o12.Underflow = 3] = "Underflow", o12))(N || {});
var F = ((t17) => (t17[t17.Previous = -1] = "Previous", t17[t17.Next = 1] = "Next", t17))(F || {});
function f(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(c2)).sort((r9, t17) => Math.sign((r9.tabIndex || Number.MAX_SAFE_INTEGER) - (t17.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t17) => (t17[t17.Strict = 0] = "Strict", t17[t17.Loose = 1] = "Loose", t17))(T || {});
function h(e5, r9 = 0) {
  var t17;
  return e5 === ((t17 = e(e5)) == null ? void 0 : t17.body) ? false : u(r9, { [0]() {
    return e5.matches(c2);
  }, [1]() {
    let l11 = e5;
    for (; l11 !== null; ) {
      if (l11.matches(c2))
        return true;
      l11 = l11.parentElement;
    }
    return false;
  } });
}
function D(e5) {
  let r9 = e(e5);
  o2().nextFrame(() => {
    r9 && !h(r9.activeElement, 0) && y(e5);
  });
}
var w = ((t17) => (t17[t17.Keyboard = 0] = "Keyboard", t17[t17.Mouse = 1] = "Mouse", t17))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e5) => {
  e5.metaKey || e5.altKey || e5.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e5) => {
  e5.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e5.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y(e5) {
  e5 == null || e5.focus({ preventScroll: true });
}
var S = ["textarea", "input"].join(",");
function H(e5) {
  var r9, t17;
  return (t17 = (r9 = e5 == null ? void 0 : e5.matches) == null ? void 0 : r9.call(e5, S)) != null ? t17 : false;
}
function I2(e5, r9 = (t17) => t17) {
  return e5.slice().sort((t17, l11) => {
    let o12 = r9(t17), i9 = r9(l11);
    if (o12 === null || i9 === null)
      return 0;
    let n7 = o12.compareDocumentPosition(i9);
    return n7 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n7 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e5, r9) {
  return O(f(), r9, { relativeTo: e5 });
}
function O(e5, r9, { sorted: t17 = true, relativeTo: l11 = null, skipElements: o12 = [] } = {}) {
  let i9 = Array.isArray(e5) ? e5.length > 0 ? e5[0].ownerDocument : document : e5.ownerDocument, n7 = Array.isArray(e5) ? t17 ? I2(e5) : e5 : f(e5);
  o12.length > 0 && n7.length > 1 && (n7 = n7.filter((s17) => !o12.includes(s17))), l11 = l11 != null ? l11 : i9.activeElement;
  let E9 = (() => {
    if (r9 & 5)
      return 1;
    if (r9 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x6 = (() => {
    if (r9 & 1)
      return 0;
    if (r9 & 2)
      return Math.max(0, n7.indexOf(l11)) - 1;
    if (r9 & 4)
      return Math.max(0, n7.indexOf(l11)) + 1;
    if (r9 & 8)
      return n7.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p7 = r9 & 32 ? { preventScroll: true } : {}, d13 = 0, a13 = n7.length, u10;
  do {
    if (d13 >= a13 || d13 + a13 <= 0)
      return 0;
    let s17 = x6 + d13;
    if (r9 & 16)
      s17 = (s17 + a13) % a13;
    else {
      if (s17 < 0)
        return 3;
      if (s17 >= a13)
        return 1;
    }
    u10 = n7[s17], u10 == null || u10.focus(p7), d13 += E9;
  } while (u10 !== i9.activeElement);
  return r9 & 6 && H(u10) && u10.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react7 = __toESM(require_react(), 1);
function d2(e5, r9, n7) {
  let o12 = s2(r9);
  (0, import_react7.useEffect)(() => {
    function t17(u10) {
      o12.current(u10);
    }
    return document.addEventListener(e5, t17, n7), () => document.removeEventListener(e5, t17, n7);
  }, [e5, n7]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react8 = __toESM(require_react(), 1);
function s6(e5, r9, n7) {
  let o12 = s2(r9);
  (0, import_react8.useEffect)(() => {
    function t17(i9) {
      o12.current(i9);
    }
    return window.addEventListener(e5, t17, n7), () => window.removeEventListener(e5, t17, n7);
  }, [e5, n7]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function h2(s17, m11, a13 = true) {
  let i9 = (0, import_react9.useRef)(false);
  (0, import_react9.useEffect)(() => {
    requestAnimationFrame(() => {
      i9.current = a13;
    });
  }, [a13]);
  function c14(e5, r9) {
    if (!i9.current || e5.defaultPrevented)
      return;
    let t17 = r9(e5);
    if (t17 === null || !t17.getRootNode().contains(t17) || !t17.isConnected)
      return;
    let E9 = function u10(n7) {
      return typeof n7 == "function" ? u10(n7()) : Array.isArray(n7) || n7 instanceof Set ? n7 : [n7];
    }(s17);
    for (let u10 of E9) {
      if (u10 === null)
        continue;
      let n7 = u10 instanceof HTMLElement ? u10 : u10.current;
      if (n7 != null && n7.contains(t17) || e5.composed && e5.composedPath().includes(n7))
        return;
    }
    return !h(t17, T.Loose) && t17.tabIndex !== -1 && e5.preventDefault(), m11(e5, t17);
  }
  let o12 = (0, import_react9.useRef)(null);
  d2("pointerdown", (e5) => {
    var r9, t17;
    i9.current && (o12.current = ((t17 = (r9 = e5.composedPath) == null ? void 0 : r9.call(e5)) == null ? void 0 : t17[0]) || e5.target);
  }, true), d2("mousedown", (e5) => {
    var r9, t17;
    i9.current && (o12.current = ((t17 = (r9 = e5.composedPath) == null ? void 0 : r9.call(e5)) == null ? void 0 : t17[0]) || e5.target);
  }, true), d2("click", (e5) => {
    o12.current && (c14(e5, () => o12.current), o12.current = null);
  }, true), d2("touchend", (e5) => c14(e5, () => e5.target instanceof HTMLElement ? e5.target : null), true), s6("blur", (e5) => c14(e5, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react10 = __toESM(require_react(), 1);
function i3(t17) {
  var n7;
  if (t17.type)
    return t17.type;
  let e5 = (n7 = t17.as) != null ? n7 : "button";
  if (typeof e5 == "string" && e5.toLowerCase() === "button")
    return "button";
}
function s7(t17, e5) {
  let [n7, u10] = (0, import_react10.useState)(() => i3(t17));
  return l(() => {
    u10(i3(t17));
  }, [t17.type, t17.as]), l(() => {
    n7 || e5.current && e5.current instanceof HTMLButtonElement && !e5.current.hasAttribute("type") && u10("button");
  }, [n7, e5]), n7;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react11 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t17, n7 = true) {
  return Object.assign(t17, { [u2]: n7 });
}
function y2(...t17) {
  let n7 = (0, import_react11.useRef)(t17);
  (0, import_react11.useEffect)(() => {
    n7.current = t17;
  }, [t17]);
  let c14 = o4((e5) => {
    for (let o12 of n7.current)
      o12 != null && (typeof o12 == "function" ? o12(e5) : o12.current = e5);
  });
  return t17.every((e5) => e5 == null || (e5 == null ? void 0 : e5[u2])) ? void 0 : c14;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react12 = __toESM(require_react(), 1);
function F2({ container: e5, accept: t17, walk: r9, enabled: c14 = true }) {
  let o12 = (0, import_react12.useRef)(t17), l11 = (0, import_react12.useRef)(r9);
  (0, import_react12.useEffect)(() => {
    o12.current = t17, l11.current = r9;
  }, [t17, r9]), l(() => {
    if (!e5 || !c14)
      return;
    let n7 = e(e5);
    if (!n7)
      return;
    let f14 = o12.current, p7 = l11.current, d13 = Object.assign((i9) => f14(i9), { acceptNode: f14 }), u10 = n7.createTreeWalker(e5, NodeFilter.SHOW_ELEMENT, d13, false);
    for (; u10.nextNode(); )
      p7(u10.currentNode);
  }, [e5, c14, o12, l11]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f3(r9) {
  throw new Error("Unexpected object: " + r9);
}
var a2 = ((e5) => (e5[e5.First = 0] = "First", e5[e5.Previous = 1] = "Previous", e5[e5.Next = 2] = "Next", e5[e5.Last = 3] = "Last", e5[e5.Specific = 4] = "Specific", e5[e5.Nothing = 5] = "Nothing", e5))(a2 || {});
function x(r9, n7) {
  let t17 = n7.resolveItems();
  if (t17.length <= 0)
    return null;
  let l11 = n7.resolveActiveIndex(), s17 = l11 != null ? l11 : -1, d13 = (() => {
    switch (r9.focus) {
      case 0:
        return t17.findIndex((e5) => !n7.resolveDisabled(e5));
      case 1: {
        let e5 = t17.slice().reverse().findIndex((i9, c14, u10) => s17 !== -1 && u10.length - c14 - 1 >= s17 ? false : !n7.resolveDisabled(i9));
        return e5 === -1 ? e5 : t17.length - 1 - e5;
      }
      case 2:
        return t17.findIndex((e5, i9) => i9 <= s17 ? false : !n7.resolveDisabled(e5));
      case 3: {
        let e5 = t17.slice().reverse().findIndex((i9) => !n7.resolveDisabled(i9));
        return e5 === -1 ? e5 : t17.length - 1 - e5;
      }
      case 4:
        return t17.findIndex((e5) => n7.resolveId(e5) === r9.id);
      case 5:
        return null;
      default:
        f3(r9);
    }
  })();
  return d13 === -1 ? l11 : d13;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react13 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t6(...r9) {
  return Array.from(new Set(r9.flatMap((n7) => typeof n7 == "string" ? n7.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S2 = ((a13) => (a13[a13.None = 0] = "None", a13[a13.RenderStrategy = 1] = "RenderStrategy", a13[a13.Static = 2] = "Static", a13))(S2 || {});
var j = ((e5) => (e5[e5.Unmount = 0] = "Unmount", e5[e5.Hidden = 1] = "Hidden", e5))(j || {});
function X({ ourProps: r9, theirProps: t17, slot: e5, defaultTag: a13, features: s17, visible: n7 = true, name: f14 }) {
  let o12 = N2(t17, r9);
  if (n7)
    return c3(o12, e5, a13, f14);
  let u10 = s17 != null ? s17 : 0;
  if (u10 & 2) {
    let { static: l11 = false, ...p7 } = o12;
    if (l11)
      return c3(p7, e5, a13, f14);
  }
  if (u10 & 1) {
    let { unmount: l11 = true, ...p7 } = o12;
    return u(l11 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c3({ ...p7, hidden: true, style: { display: "none" } }, e5, a13, f14);
    } });
  }
  return c3(o12, e5, a13, f14);
}
function c3(r9, t17 = {}, e5, a13) {
  let { as: s17 = e5, children: n7, refName: f14 = "ref", ...o12 } = g(r9, ["unmount", "static"]), u10 = r9.ref !== void 0 ? { [f14]: r9.ref } : {}, l11 = typeof n7 == "function" ? n7(t17) : n7;
  "className" in o12 && o12.className && typeof o12.className == "function" && (o12.className = o12.className(t17));
  let p7 = {};
  if (t17) {
    let i9 = false, m11 = [];
    for (let [y8, d13] of Object.entries(t17))
      typeof d13 == "boolean" && (i9 = true), d13 === true && m11.push(y8);
    i9 && (p7["data-headlessui-state"] = m11.join(" "));
  }
  if (s17 === import_react13.Fragment && Object.keys(R(o12)).length > 0) {
    if (!(0, import_react13.isValidElement)(l11) || Array.isArray(l11) && l11.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a13} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o12).map((d13) => `  - ${d13}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d13) => `  - ${d13}`).join(`
`)].join(`
`));
    let i9 = l11.props, m11 = typeof (i9 == null ? void 0 : i9.className) == "function" ? (...d13) => t6(i9 == null ? void 0 : i9.className(...d13), o12.className) : t6(i9 == null ? void 0 : i9.className, o12.className), y8 = m11 ? { className: m11 } : {};
    return (0, import_react13.cloneElement)(l11, Object.assign({}, N2(l11.props, R(g(o12, ["ref"]))), p7, u10, w2(l11.ref, u10.ref), y8));
  }
  return (0, import_react13.createElement)(s17, Object.assign({}, g(o12, ["ref"]), s17 !== import_react13.Fragment && u10, s17 !== import_react13.Fragment && p7), l11);
}
function w2(...r9) {
  return { ref: r9.every((t17) => t17 == null) ? void 0 : (t17) => {
    for (let e5 of r9)
      e5 != null && (typeof e5 == "function" ? e5(t17) : e5.current = t17);
  } };
}
function N2(...r9) {
  var a13;
  if (r9.length === 0)
    return {};
  if (r9.length === 1)
    return r9[0];
  let t17 = {}, e5 = {};
  for (let s17 of r9)
    for (let n7 in s17)
      n7.startsWith("on") && typeof s17[n7] == "function" ? ((a13 = e5[n7]) != null || (e5[n7] = []), e5[n7].push(s17[n7])) : t17[n7] = s17[n7];
  if (t17.disabled || t17["aria-disabled"])
    return Object.assign(t17, Object.fromEntries(Object.keys(e5).map((s17) => [s17, void 0])));
  for (let s17 in e5)
    Object.assign(t17, { [s17](n7, ...f14) {
      let o12 = e5[s17];
      for (let u10 of o12) {
        if ((n7 instanceof Event || (n7 == null ? void 0 : n7.nativeEvent) instanceof Event) && n7.defaultPrevented)
          return;
        u10(n7, ...f14);
      }
    } });
  return t17;
}
function D2(r9) {
  var t17;
  return Object.assign((0, import_react13.forwardRef)(r9), { displayName: (t17 = r9.displayName) != null ? t17 : r9.name });
}
function R(r9) {
  let t17 = Object.assign({}, r9);
  for (let e5 in t17)
    t17[e5] === void 0 && delete t17[e5];
  return t17;
}
function g(r9, t17 = []) {
  let e5 = Object.assign({}, r9);
  for (let a13 of t17)
    a13 in e5 && delete e5[a13];
  return e5;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r2(n7) {
  let e5 = n7.parentElement, l11 = null;
  for (; e5 && !(e5 instanceof HTMLFieldSetElement); )
    e5 instanceof HTMLLegendElement && (l11 = e5), e5 = e5.parentElement;
  let t17 = (e5 == null ? void 0 : e5.getAttribute("disabled")) === "";
  return t17 && i5(l11) ? false : t17;
}
function i5(n7) {
  if (!n7)
    return false;
  let e5 = n7.previousElementSibling;
  for (; e5 !== null; ) {
    if (e5 instanceof HTMLLegendElement)
      return false;
    e5 = e5.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/utils/form.js
function e2(i9 = {}, s17 = null, t17 = []) {
  for (let [r9, n7] of Object.entries(i9))
    o7(t17, f4(s17, r9), n7);
  return t17;
}
function f4(i9, s17) {
  return i9 ? i9 + "[" + s17 + "]" : s17;
}
function o7(i9, s17, t17) {
  if (Array.isArray(t17))
    for (let [r9, n7] of t17.entries())
      o7(i9, f4(s17, r9.toString()), n7);
  else
    t17 instanceof Date ? i9.push([s17, t17.toISOString()]) : typeof t17 == "boolean" ? i9.push([s17, t17 ? "1" : "0"]) : typeof t17 == "string" ? i9.push([s17, t17]) : typeof t17 == "number" ? i9.push([s17, `${t17}`]) : t17 == null ? i9.push([s17, ""]) : e2(t17, s17, i9);
}
function p2(i9) {
  var t17, r9;
  let s17 = (t17 = i9 == null ? void 0 : i9.form) != null ? t17 : i9.closest("form");
  if (s17) {
    for (let n7 of s17.elements)
      if (n7 !== i9 && (n7.tagName === "INPUT" && n7.type === "submit" || n7.tagName === "BUTTON" && n7.type === "submit" || n7.nodeName === "INPUT" && n7.type === "image")) {
        n7.click();
        return;
      }
    (r9 = s17.requestSubmit) == null || r9.call(s17);
  }
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a3 = "div";
var p3 = ((e5) => (e5[e5.None = 1] = "None", e5[e5.Focusable = 2] = "Focusable", e5[e5.Hidden = 4] = "Hidden", e5))(p3 || {});
function s8(t17, o12) {
  let { features: n7 = 1, ...e5 } = t17, d13 = { ref: o12, "aria-hidden": (n7 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n7 & 4) === 4 && (n7 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d13, theirProps: e5, slot: {}, defaultTag: a3, name: "Hidden" });
}
var c4 = D2(s8);

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react14 = __toESM(require_react(), 1);
var n = (0, import_react14.createContext)(null);
n.displayName = "OpenClosedContext";
var d5 = ((e5) => (e5[e5.Open = 1] = "Open", e5[e5.Closed = 2] = "Closed", e5[e5.Closing = 4] = "Closing", e5[e5.Opening = 8] = "Opening", e5))(d5 || {});
function C() {
  return (0, import_react14.useContext)(n);
}
function c5({ value: o12, children: r9 }) {
  return import_react14.default.createElement(n.Provider, { value: o12 }, r9);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r9) => (r9.Space = " ", r9.Enter = "Enter", r9.Escape = "Escape", r9.Backspace = "Backspace", r9.Delete = "Delete", r9.ArrowLeft = "ArrowLeft", r9.ArrowUp = "ArrowUp", r9.ArrowRight = "ArrowRight", r9.ArrowDown = "ArrowDown", r9.Home = "Home", r9.End = "End", r9.PageUp = "PageUp", r9.PageDown = "PageDown", r9.Tab = "Tab", r9))(o8 || {});

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react15 = __toESM(require_react(), 1);
function T4(l11, r9, c14) {
  let [i9, s17] = (0, import_react15.useState)(c14), e5 = l11 !== void 0, t17 = (0, import_react15.useRef)(e5), u10 = (0, import_react15.useRef)(false), d13 = (0, import_react15.useRef)(false);
  return e5 && !t17.current && !u10.current ? (u10.current = true, t17.current = e5, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e5 && t17.current && !d13.current && (d13.current = true, t17.current = e5, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e5 ? l11 : i9, o4((n7) => (e5 || s17(n7), r9 == null ? void 0 : r9(n7)))];
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react16 = __toESM(require_react(), 1);
function m3(u10, t17) {
  let e5 = (0, import_react16.useRef)([]), r9 = o4(u10);
  (0, import_react16.useEffect)(() => {
    let o12 = [...e5.current];
    for (let [n7, a13] of t17.entries())
      if (e5.current[n7] !== a13) {
        let l11 = r9(t17, o12);
        return e5.current = t17, l11;
      }
  }, [r9, ...t17]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react17 = __toESM(require_react(), 1);
function t8(e5) {
  return [e5.screenX, e5.screenY];
}
function u3() {
  let e5 = (0, import_react17.useRef)([-1, -1]);
  return { wasMoved(r9) {
    let n7 = t8(r9);
    return e5.current[0] === n7[0] && e5.current[1] === n7[1] ? false : (e5.current = n7, true);
  }, update(r9) {
    e5.current = t8(r9);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t9() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i6() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n2() {
  return t9() || i6();
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react18 = __toESM(require_react(), 1);
function n3(...e5) {
  return (0, import_react18.useMemo)(() => e(...e5), [...e5]);
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var we = ((e5) => (e5[e5.Open = 0] = "Open", e5[e5.Closed = 1] = "Closed", e5))(we || {});
var Ue = ((e5) => (e5[e5.Single = 0] = "Single", e5[e5.Multi = 1] = "Multi", e5))(Ue || {});
var Ne = ((e5) => (e5[e5.Pointer = 0] = "Pointer", e5[e5.Other = 1] = "Other", e5))(Ne || {});
var He = ((n7) => (n7[n7.OpenCombobox = 0] = "OpenCombobox", n7[n7.CloseCombobox = 1] = "CloseCombobox", n7[n7.GoToOption = 2] = "GoToOption", n7[n7.RegisterOption = 3] = "RegisterOption", n7[n7.UnregisterOption = 4] = "UnregisterOption", n7[n7.RegisterLabel = 5] = "RegisterLabel", n7))(He || {});
function ae(t17, a13 = (e5) => e5) {
  let e5 = t17.activeOptionIndex !== null ? t17.options[t17.activeOptionIndex] : null, r9 = I2(a13(t17.options.slice()), (b7) => b7.dataRef.current.domRef.current), l11 = e5 ? r9.indexOf(e5) : null;
  return l11 === -1 && (l11 = null), { options: r9, activeOptionIndex: l11 };
}
var Ge = { [1](t17) {
  var a13;
  return (a13 = t17.dataRef.current) != null && a13.disabled || t17.comboboxState === 1 ? t17 : { ...t17, activeOptionIndex: null, comboboxState: 1 };
}, [0](t17) {
  var e5;
  if ((e5 = t17.dataRef.current) != null && e5.disabled || t17.comboboxState === 0)
    return t17;
  let a13 = t17.activeOptionIndex;
  if (t17.dataRef.current) {
    let { isSelected: r9 } = t17.dataRef.current, l11 = t17.options.findIndex((b7) => r9(b7.dataRef.current.value));
    l11 !== -1 && (a13 = l11);
  }
  return { ...t17, comboboxState: 0, activeOptionIndex: a13 };
}, [2](t17, a13) {
  var l11, b7, n7, d13;
  if ((l11 = t17.dataRef.current) != null && l11.disabled || (b7 = t17.dataRef.current) != null && b7.optionsRef.current && !((n7 = t17.dataRef.current) != null && n7.optionsPropsRef.current.static) && t17.comboboxState === 1)
    return t17;
  let e5 = ae(t17);
  if (e5.activeOptionIndex === null) {
    let o12 = e5.options.findIndex((i9) => !i9.dataRef.current.disabled);
    o12 !== -1 && (e5.activeOptionIndex = o12);
  }
  let r9 = x(a13, { resolveItems: () => e5.options, resolveActiveIndex: () => e5.activeOptionIndex, resolveId: (o12) => o12.id, resolveDisabled: (o12) => o12.dataRef.current.disabled });
  return { ...t17, ...e5, activeOptionIndex: r9, activationTrigger: (d13 = a13.trigger) != null ? d13 : 1 };
}, [3]: (t17, a13) => {
  var b7, n7;
  let e5 = { id: a13.id, dataRef: a13.dataRef }, r9 = ae(t17, (d13) => [...d13, e5]);
  t17.activeOptionIndex === null && (b7 = t17.dataRef.current) != null && b7.isSelected(a13.dataRef.current.value) && (r9.activeOptionIndex = r9.options.indexOf(e5));
  let l11 = { ...t17, ...r9, activationTrigger: 1 };
  return (n7 = t17.dataRef.current) != null && n7.__demoMode && t17.dataRef.current.value === void 0 && (l11.activeOptionIndex = 0), l11;
}, [4]: (t17, a13) => {
  let e5 = ae(t17, (r9) => {
    let l11 = r9.findIndex((b7) => b7.id === a13.id);
    return l11 !== -1 && r9.splice(l11, 1), r9;
  });
  return { ...t17, ...e5, activationTrigger: 1 };
}, [5]: (t17, a13) => ({ ...t17, labelId: a13.id }) };
var le = (0, import_react19.createContext)(null);
le.displayName = "ComboboxActionsContext";
function Z(t17) {
  let a13 = (0, import_react19.useContext)(le);
  if (a13 === null) {
    let e5 = new Error(`<${t17} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e5, Z), e5;
  }
  return a13;
}
var ie = (0, import_react19.createContext)(null);
ie.displayName = "ComboboxDataContext";
function J(t17) {
  let a13 = (0, import_react19.useContext)(ie);
  if (a13 === null) {
    let e5 = new Error(`<${t17} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e5, J), e5;
  }
  return a13;
}
function Xe(t17, a13) {
  return u(a13.type, Ge, t17, a13);
}
var je = import_react19.Fragment;
function Je(t17, a13) {
  let { value: e5, defaultValue: r9, onChange: l11, form: b7, name: n7, by: d13 = (u10, T8) => u10 === T8, disabled: o12 = false, __demoMode: i9 = false, nullable: A6 = false, multiple: O4 = false, ...C5 } = t17, [f14 = O4 ? [] : void 0, g6] = T4(e5, l11, r9), [m11, c14] = (0, import_react19.useReducer)(Xe, { dataRef: (0, import_react19.createRef)(), comboboxState: i9 ? 0 : 1, options: [], activeOptionIndex: null, activationTrigger: 1, labelId: null }), D6 = (0, import_react19.useRef)(false), _7 = (0, import_react19.useRef)({ static: false, hold: false }), w6 = (0, import_react19.useRef)(null), U5 = (0, import_react19.useRef)(null), N7 = (0, import_react19.useRef)(null), K4 = (0, import_react19.useRef)(null), h11 = o4(typeof d13 == "string" ? (u10, T8) => {
    let v5 = d13;
    return (u10 == null ? void 0 : u10[v5]) === (T8 == null ? void 0 : T8[v5]);
  } : d13), H7 = (0, import_react19.useCallback)((u10) => u(p7.mode, { [1]: () => f14.some((T8) => h11(T8, u10)), [0]: () => h11(f14, u10) }), [f14]), p7 = (0, import_react19.useMemo)(() => ({ ...m11, optionsPropsRef: _7, labelRef: w6, inputRef: U5, buttonRef: N7, optionsRef: K4, value: f14, defaultValue: r9, disabled: o12, mode: O4 ? 1 : 0, get activeOptionIndex() {
    if (D6.current && m11.activeOptionIndex === null && m11.options.length > 0) {
      let u10 = m11.options.findIndex((T8) => !T8.dataRef.current.disabled);
      if (u10 !== -1)
        return u10;
    }
    return m11.activeOptionIndex;
  }, compare: h11, isSelected: H7, nullable: A6, __demoMode: i9 }), [f14, r9, o12, O4, A6, i9, m11]), y8 = (0, import_react19.useRef)(p7.activeOptionIndex !== null ? p7.options[p7.activeOptionIndex] : null);
  (0, import_react19.useEffect)(() => {
    let u10 = p7.activeOptionIndex !== null ? p7.options[p7.activeOptionIndex] : null;
    y8.current !== u10 && (y8.current = u10);
  }), l(() => {
    m11.dataRef.current = p7;
  }, [p7]), h2([p7.buttonRef, p7.inputRef, p7.optionsRef], () => te4.closeCombobox(), p7.comboboxState === 0);
  let E9 = (0, import_react19.useMemo)(() => ({ open: p7.comboboxState === 0, disabled: o12, activeIndex: p7.activeOptionIndex, activeOption: p7.activeOptionIndex === null ? null : p7.options[p7.activeOptionIndex].dataRef.current.value, value: f14 }), [p7, o12, f14]), B3 = o4((u10) => {
    let T8 = p7.options.find((v5) => v5.id === u10);
    T8 && V4(T8.dataRef.current.value);
  }), s17 = o4(() => {
    if (p7.activeOptionIndex !== null) {
      let { dataRef: u10, id: T8 } = p7.options[p7.activeOptionIndex];
      V4(u10.current.value), te4.goToOption(a2.Specific, T8);
    }
  }), W2 = o4(() => {
    c14({ type: 0 }), D6.current = true;
  }), L3 = o4(() => {
    c14({ type: 1 }), D6.current = false;
  }), $6 = o4((u10, T8, v5) => (D6.current = false, u10 === a2.Specific ? c14({ type: 2, focus: a2.Specific, id: T8, trigger: v5 }) : c14({ type: 2, focus: u10, trigger: v5 }))), P4 = o4((u10, T8) => (c14({ type: 3, id: u10, dataRef: T8 }), () => {
    var v5;
    ((v5 = y8.current) == null ? void 0 : v5.id) === u10 && (D6.current = true), c14({ type: 4, id: u10 });
  })), F8 = o4((u10) => (c14({ type: 5, id: u10 }), () => c14({ type: 5, id: null }))), V4 = o4((u10) => u(p7.mode, { [0]() {
    return g6 == null ? void 0 : g6(u10);
  }, [1]() {
    let T8 = p7.value.slice(), v5 = T8.findIndex((q5) => h11(q5, u10));
    return v5 === -1 ? T8.push(u10) : T8.splice(v5, 1), g6 == null ? void 0 : g6(T8);
  } })), te4 = (0, import_react19.useMemo)(() => ({ onChange: V4, registerOption: P4, registerLabel: F8, goToOption: $6, closeCombobox: L3, openCombobox: W2, selectActiveOption: s17, selectOption: B3 }), []), Te3 = a13 === null ? {} : { ref: a13 }, z5 = (0, import_react19.useRef)(null), me4 = p();
  return (0, import_react19.useEffect)(() => {
    z5.current && r9 !== void 0 && me4.addEventListener(z5.current, "reset", () => {
      g6 == null || g6(r9);
    });
  }, [z5, g6]), import_react19.default.createElement(le.Provider, { value: te4 }, import_react19.default.createElement(ie.Provider, { value: p7 }, import_react19.default.createElement(c5, { value: u(p7.comboboxState, { [0]: d5.Open, [1]: d5.Closed }) }, n7 != null && f14 != null && e2({ [n7]: f14 }).map(([u10, T8], v5) => import_react19.default.createElement(c4, { features: p3.Hidden, ref: v5 === 0 ? (q5) => {
    var ue5;
    z5.current = (ue5 = q5 == null ? void 0 : q5.closest("form")) != null ? ue5 : null;
  } : void 0, ...R({ key: u10, as: "input", type: "hidden", hidden: true, readOnly: true, form: b7, name: u10, value: T8 }) })), X({ ourProps: Te3, theirProps: C5, slot: E9, defaultTag: je, name: "Combobox" }))));
}
var Ke = "input";
function We(t17, a13) {
  var p7, y8, E9, B3;
  let e5 = I(), { id: r9 = `headlessui-combobox-input-${e5}`, onChange: l11, displayValue: b7, type: n7 = "text", ...d13 } = t17, o12 = J("Combobox.Input"), i9 = Z("Combobox.Input"), A6 = y2(o12.inputRef, a13), O4 = n3(o12.inputRef), C5 = (0, import_react19.useRef)(false), f14 = p(), g6 = o4(() => {
    i9.onChange(null), o12.optionsRef.current && (o12.optionsRef.current.scrollTop = 0), i9.goToOption(a2.Nothing);
  }), m11 = function() {
    var s17;
    return typeof b7 == "function" && o12.value !== void 0 ? (s17 = b7(o12.value)) != null ? s17 : "" : typeof o12.value == "string" ? o12.value : "";
  }();
  m3(([s17, W2], [L3, $6]) => {
    if (C5.current)
      return;
    let P4 = o12.inputRef.current;
    P4 && (($6 === 0 && W2 === 1 || s17 !== L3) && (P4.value = s17), requestAnimationFrame(() => {
      if (C5.current || !P4 || (O4 == null ? void 0 : O4.activeElement) !== P4)
        return;
      let { selectionStart: F8, selectionEnd: V4 } = P4;
      Math.abs((V4 != null ? V4 : 0) - (F8 != null ? F8 : 0)) === 0 && F8 === 0 && P4.setSelectionRange(P4.value.length, P4.value.length);
    }));
  }, [m11, o12.comboboxState, O4]), m3(([s17], [W2]) => {
    if (s17 === 0 && W2 === 1) {
      if (C5.current)
        return;
      let L3 = o12.inputRef.current;
      if (!L3)
        return;
      let $6 = L3.value, { selectionStart: P4, selectionEnd: F8, selectionDirection: V4 } = L3;
      L3.value = "", L3.value = $6, V4 !== null ? L3.setSelectionRange(P4, F8, V4) : L3.setSelectionRange(P4, F8);
    }
  }, [o12.comboboxState]);
  let c14 = (0, import_react19.useRef)(false), D6 = o4(() => {
    c14.current = true;
  }), _7 = o4(() => {
    f14.nextFrame(() => {
      c14.current = false;
    });
  }), w6 = o4((s17) => {
    switch (C5.current = true, s17.key) {
      case o8.Enter:
        if (C5.current = false, o12.comboboxState !== 0 || c14.current)
          return;
        if (s17.preventDefault(), s17.stopPropagation(), o12.activeOptionIndex === null) {
          i9.closeCombobox();
          return;
        }
        i9.selectActiveOption(), o12.mode === 0 && i9.closeCombobox();
        break;
      case o8.ArrowDown:
        return C5.current = false, s17.preventDefault(), s17.stopPropagation(), u(o12.comboboxState, { [0]: () => {
          i9.goToOption(a2.Next);
        }, [1]: () => {
          i9.openCombobox();
        } });
      case o8.ArrowUp:
        return C5.current = false, s17.preventDefault(), s17.stopPropagation(), u(o12.comboboxState, { [0]: () => {
          i9.goToOption(a2.Previous);
        }, [1]: () => {
          i9.openCombobox(), f14.nextFrame(() => {
            o12.value || i9.goToOption(a2.Last);
          });
        } });
      case o8.Home:
        if (s17.shiftKey)
          break;
        return C5.current = false, s17.preventDefault(), s17.stopPropagation(), i9.goToOption(a2.First);
      case o8.PageUp:
        return C5.current = false, s17.preventDefault(), s17.stopPropagation(), i9.goToOption(a2.First);
      case o8.End:
        if (s17.shiftKey)
          break;
        return C5.current = false, s17.preventDefault(), s17.stopPropagation(), i9.goToOption(a2.Last);
      case o8.PageDown:
        return C5.current = false, s17.preventDefault(), s17.stopPropagation(), i9.goToOption(a2.Last);
      case o8.Escape:
        return C5.current = false, o12.comboboxState !== 0 ? void 0 : (s17.preventDefault(), o12.optionsRef.current && !o12.optionsPropsRef.current.static && s17.stopPropagation(), o12.nullable && o12.mode === 0 && o12.value === null && g6(), i9.closeCombobox());
      case o8.Tab:
        if (C5.current = false, o12.comboboxState !== 0)
          return;
        o12.mode === 0 && i9.selectActiveOption(), i9.closeCombobox();
        break;
    }
  }), U5 = o4((s17) => {
    l11 == null || l11(s17), o12.nullable && o12.mode === 0 && s17.target.value === "" && g6(), i9.openCombobox();
  }), N7 = o4(() => {
    C5.current = false;
  }), K4 = i2(() => {
    if (o12.labelId)
      return [o12.labelId].join(" ");
  }, [o12.labelId]), h11 = (0, import_react19.useMemo)(() => ({ open: o12.comboboxState === 0, disabled: o12.disabled }), [o12]), H7 = { ref: A6, id: r9, role: "combobox", type: n7, "aria-controls": (p7 = o12.optionsRef.current) == null ? void 0 : p7.id, "aria-expanded": o12.comboboxState === 0, "aria-activedescendant": o12.activeOptionIndex === null || (y8 = o12.options[o12.activeOptionIndex]) == null ? void 0 : y8.id, "aria-labelledby": K4, "aria-autocomplete": "list", defaultValue: (B3 = (E9 = t17.defaultValue) != null ? E9 : o12.defaultValue !== void 0 ? b7 == null ? void 0 : b7(o12.defaultValue) : null) != null ? B3 : o12.defaultValue, disabled: o12.disabled, onCompositionStart: D6, onCompositionEnd: _7, onKeyDown: w6, onChange: U5, onBlur: N7 };
  return X({ ourProps: H7, theirProps: d13, slot: h11, defaultTag: Ke, name: "Combobox.Input" });
}
var $e = "button";
function qe(t17, a13) {
  var g6;
  let e5 = J("Combobox.Button"), r9 = Z("Combobox.Button"), l11 = y2(e5.buttonRef, a13), b7 = I(), { id: n7 = `headlessui-combobox-button-${b7}`, ...d13 } = t17, o12 = p(), i9 = o4((m11) => {
    switch (m11.key) {
      case o8.ArrowDown:
        return m11.preventDefault(), m11.stopPropagation(), e5.comboboxState === 1 && r9.openCombobox(), o12.nextFrame(() => {
          var c14;
          return (c14 = e5.inputRef.current) == null ? void 0 : c14.focus({ preventScroll: true });
        });
      case o8.ArrowUp:
        return m11.preventDefault(), m11.stopPropagation(), e5.comboboxState === 1 && (r9.openCombobox(), o12.nextFrame(() => {
          e5.value || r9.goToOption(a2.Last);
        })), o12.nextFrame(() => {
          var c14;
          return (c14 = e5.inputRef.current) == null ? void 0 : c14.focus({ preventScroll: true });
        });
      case o8.Escape:
        return e5.comboboxState !== 0 ? void 0 : (m11.preventDefault(), e5.optionsRef.current && !e5.optionsPropsRef.current.static && m11.stopPropagation(), r9.closeCombobox(), o12.nextFrame(() => {
          var c14;
          return (c14 = e5.inputRef.current) == null ? void 0 : c14.focus({ preventScroll: true });
        }));
      default:
        return;
    }
  }), A6 = o4((m11) => {
    if (r2(m11.currentTarget))
      return m11.preventDefault();
    e5.comboboxState === 0 ? r9.closeCombobox() : (m11.preventDefault(), r9.openCombobox()), o12.nextFrame(() => {
      var c14;
      return (c14 = e5.inputRef.current) == null ? void 0 : c14.focus({ preventScroll: true });
    });
  }), O4 = i2(() => {
    if (e5.labelId)
      return [e5.labelId, n7].join(" ");
  }, [e5.labelId, n7]), C5 = (0, import_react19.useMemo)(() => ({ open: e5.comboboxState === 0, disabled: e5.disabled, value: e5.value }), [e5]), f14 = { ref: l11, id: n7, type: s7(t17, e5.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (g6 = e5.optionsRef.current) == null ? void 0 : g6.id, "aria-expanded": e5.comboboxState === 0, "aria-labelledby": O4, disabled: e5.disabled, onClick: A6, onKeyDown: i9 };
  return X({ ourProps: f14, theirProps: d13, slot: C5, defaultTag: $e, name: "Combobox.Button" });
}
var Qe = "label";
function Ye(t17, a13) {
  let e5 = I(), { id: r9 = `headlessui-combobox-label-${e5}`, ...l11 } = t17, b7 = J("Combobox.Label"), n7 = Z("Combobox.Label"), d13 = y2(b7.labelRef, a13);
  l(() => n7.registerLabel(r9), [r9]);
  let o12 = o4(() => {
    var O4;
    return (O4 = b7.inputRef.current) == null ? void 0 : O4.focus({ preventScroll: true });
  }), i9 = (0, import_react19.useMemo)(() => ({ open: b7.comboboxState === 0, disabled: b7.disabled }), [b7]);
  return X({ ourProps: { ref: d13, id: r9, onClick: o12 }, theirProps: l11, slot: i9, defaultTag: Qe, name: "Combobox.Label" });
}
var Ze = "ul";
var ze = S2.RenderStrategy | S2.Static;
function eo(t17, a13) {
  let e5 = I(), { id: r9 = `headlessui-combobox-options-${e5}`, hold: l11 = false, ...b7 } = t17, n7 = J("Combobox.Options"), d13 = y2(n7.optionsRef, a13), o12 = C(), i9 = (() => o12 !== null ? (o12 & d5.Open) === d5.Open : n7.comboboxState === 0)();
  l(() => {
    var f14;
    n7.optionsPropsRef.current.static = (f14 = t17.static) != null ? f14 : false;
  }, [n7.optionsPropsRef, t17.static]), l(() => {
    n7.optionsPropsRef.current.hold = l11;
  }, [n7.optionsPropsRef, l11]), F2({ container: n7.optionsRef.current, enabled: n7.comboboxState === 0, accept(f14) {
    return f14.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : f14.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(f14) {
    f14.setAttribute("role", "none");
  } });
  let A6 = i2(() => {
    var f14, g6;
    return (g6 = n7.labelId) != null ? g6 : (f14 = n7.buttonRef.current) == null ? void 0 : f14.id;
  }, [n7.labelId, n7.buttonRef.current]), O4 = (0, import_react19.useMemo)(() => ({ open: n7.comboboxState === 0 }), [n7]), C5 = { "aria-labelledby": A6, role: "listbox", "aria-multiselectable": n7.mode === 1 ? true : void 0, id: r9, ref: d13 };
  return X({ ourProps: C5, theirProps: b7, slot: O4, defaultTag: Ze, features: ze, visible: i9, name: "Combobox.Options" });
}
var oo = "li";
function to(t17, a13) {
  var H7, p7;
  let e5 = I(), { id: r9 = `headlessui-combobox-option-${e5}`, disabled: l11 = false, value: b7, ...n7 } = t17, d13 = J("Combobox.Option"), o12 = Z("Combobox.Option"), i9 = d13.activeOptionIndex !== null ? d13.options[d13.activeOptionIndex].id === r9 : false, A6 = d13.isSelected(b7), O4 = (0, import_react19.useRef)(null), C5 = s2({ disabled: l11, value: b7, domRef: O4, textValue: (p7 = (H7 = O4.current) == null ? void 0 : H7.textContent) == null ? void 0 : p7.toLowerCase() }), f14 = y2(a13, O4), g6 = o4(() => o12.selectOption(r9));
  l(() => o12.registerOption(r9, C5), [C5, r9]);
  let m11 = (0, import_react19.useRef)(!d13.__demoMode);
  l(() => {
    if (!d13.__demoMode)
      return;
    let y8 = o2();
    return y8.requestAnimationFrame(() => {
      m11.current = true;
    }), y8.dispose;
  }, []), l(() => {
    if (d13.comboboxState !== 0 || !i9 || !m11.current || d13.activationTrigger === 0)
      return;
    let y8 = o2();
    return y8.requestAnimationFrame(() => {
      var E9, B3;
      (B3 = (E9 = O4.current) == null ? void 0 : E9.scrollIntoView) == null || B3.call(E9, { block: "nearest" });
    }), y8.dispose;
  }, [O4, i9, d13.comboboxState, d13.activationTrigger, d13.activeOptionIndex]);
  let c14 = o4((y8) => {
    if (l11)
      return y8.preventDefault();
    g6(), d13.mode === 0 && o12.closeCombobox(), n2() || requestAnimationFrame(() => {
      var E9;
      return (E9 = d13.inputRef.current) == null ? void 0 : E9.focus();
    });
  }), D6 = o4(() => {
    if (l11)
      return o12.goToOption(a2.Nothing);
    o12.goToOption(a2.Specific, r9);
  }), _7 = u3(), w6 = o4((y8) => _7.update(y8)), U5 = o4((y8) => {
    _7.wasMoved(y8) && (l11 || i9 || o12.goToOption(a2.Specific, r9, 0));
  }), N7 = o4((y8) => {
    _7.wasMoved(y8) && (l11 || i9 && (d13.optionsPropsRef.current.hold || o12.goToOption(a2.Nothing)));
  }), K4 = (0, import_react19.useMemo)(() => ({ active: i9, selected: A6, disabled: l11 }), [i9, A6, l11]);
  return X({ ourProps: { id: r9, ref: f14, role: "option", tabIndex: l11 === true ? void 0 : -1, "aria-disabled": l11 === true ? true : void 0, "aria-selected": A6, disabled: void 0, onClick: c14, onFocus: D6, onPointerEnter: w6, onMouseEnter: w6, onPointerMove: U5, onMouseMove: U5, onPointerLeave: N7, onMouseLeave: N7 }, theirProps: n7, slot: K4, defaultTag: oo, name: "Combobox.Option" });
}
var no = D2(Je);
var ro = D2(qe);
var ao = D2(We);
var lo = D2(Ye);
var io = D2(eo);
var uo = D2(to);
var qo = Object.assign(no, { Input: ao, Button: ro, Label: lo, Options: io, Option: uo });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react30 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react24 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react20 = __toESM(require_react(), 1);
var s10 = ((r9) => (r9[r9.Forwards = 0] = "Forwards", r9[r9.Backwards = 1] = "Backwards", r9))(s10 || {});
function n4() {
  let e5 = (0, import_react20.useRef)(0);
  return s6("keydown", (o12) => {
    o12.key === "Tab" && (e5.current = o12.shiftKey ? 1 : 0);
  }, true), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react21 = __toESM(require_react(), 1);
function f7() {
  let e5 = (0, import_react21.useRef)(false);
  return l(() => (e5.current = true, () => {
    e5.current = false;
  }), []), e5;
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react22 = __toESM(require_react(), 1);
function E3(n7, e5, a13, t17) {
  let i9 = s2(a13);
  (0, import_react22.useEffect)(() => {
    n7 = n7 != null ? n7 : window;
    function r9(o12) {
      i9.current(o12);
    }
    return n7.addEventListener(e5, r9, t17), () => n7.removeEventListener(e5, r9, t17);
  }, [n7, e5, t17]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t12(n7) {
  function e5() {
    document.readyState !== "loading" && (n7(), document.removeEventListener("DOMContentLoaded", e5));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e5), e5());
}

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react23 = __toESM(require_react(), 1);
function c6(t17) {
  let r9 = o4(t17), e5 = (0, import_react23.useRef)(false);
  (0, import_react23.useEffect)(() => (e5.current = false, () => {
    e5.current = true, t3(() => {
      e5.current && r9();
    });
  }), [r9]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t17) {
  if (!t17)
    return /* @__PURE__ */ new Set();
  if (typeof t17 == "function")
    return new Set(t17());
  let r9 = /* @__PURE__ */ new Set();
  for (let e5 of t17.current)
    e5.current instanceof HTMLElement && r9.add(e5.current);
  return r9;
}
var J2 = "div";
var h4 = ((n7) => (n7[n7.None = 1] = "None", n7[n7.InitialFocus = 2] = "InitialFocus", n7[n7.TabLock = 4] = "TabLock", n7[n7.FocusLock = 8] = "FocusLock", n7[n7.RestoreFocus = 16] = "RestoreFocus", n7[n7.All = 30] = "All", n7))(h4 || {});
function X2(t17, r9) {
  let e5 = (0, import_react24.useRef)(null), o12 = y2(e5, r9), { initialFocus: u10, containers: i9, features: n7 = 30, ...l11 } = t17;
  l2() || (n7 = 1);
  let m11 = n3(e5);
  Y({ ownerDocument: m11 }, Boolean(n7 & 16));
  let c14 = Z2({ ownerDocument: m11, container: e5, initialFocus: u10 }, Boolean(n7 & 2));
  $({ ownerDocument: m11, container: e5, containers: i9, previousActiveElement: c14 }, Boolean(n7 & 8));
  let v5 = n4(), y8 = o4((s17) => {
    let T8 = e5.current;
    if (!T8)
      return;
    ((B3) => B3())(() => {
      u(v5.current, { [s10.Forwards]: () => {
        O(T8, M.First, { skipElements: [s17.relatedTarget] });
      }, [s10.Backwards]: () => {
        O(T8, M.Last, { skipElements: [s17.relatedTarget] });
      } });
    });
  }), _7 = p(), b7 = (0, import_react24.useRef)(false), j6 = { ref: o12, onKeyDown(s17) {
    s17.key == "Tab" && (b7.current = true, _7.requestAnimationFrame(() => {
      b7.current = false;
    }));
  }, onBlur(s17) {
    let T8 = P(i9);
    e5.current instanceof HTMLElement && T8.add(e5.current);
    let d13 = s17.relatedTarget;
    d13 instanceof HTMLElement && d13.dataset.headlessuiFocusGuard !== "true" && (S4(T8, d13) || (b7.current ? O(e5.current, u(v5.current, { [s10.Forwards]: () => M.Next, [s10.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s17.target }) : s17.target instanceof HTMLElement && y(s17.target)));
  } };
  return import_react24.default.createElement(import_react24.default.Fragment, null, Boolean(n7 & 4) && import_react24.default.createElement(c4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y8, features: p3.Focusable }), X({ ourProps: j6, theirProps: l11, defaultTag: J2, name: "FocusTrap" }), Boolean(n7 & 4) && import_react24.default.createElement(c4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y8, features: p3.Focusable }));
}
var z = D2(X2);
var ge2 = Object.assign(z, { features: h4 });
var a4 = [];
t12(() => {
  function t17(r9) {
    r9.target instanceof HTMLElement && r9.target !== document.body && a4[0] !== r9.target && (a4.unshift(r9.target), a4 = a4.filter((e5) => e5 != null && e5.isConnected), a4.splice(10));
  }
  window.addEventListener("click", t17, { capture: true }), window.addEventListener("mousedown", t17, { capture: true }), window.addEventListener("focus", t17, { capture: true }), document.body.addEventListener("click", t17, { capture: true }), document.body.addEventListener("mousedown", t17, { capture: true }), document.body.addEventListener("focus", t17, { capture: true });
});
function Q(t17 = true) {
  let r9 = (0, import_react24.useRef)(a4.slice());
  return m3(([e5], [o12]) => {
    o12 === true && e5 === false && t3(() => {
      r9.current.splice(0);
    }), o12 === false && e5 === true && (r9.current = a4.slice());
  }, [t17, a4, r9]), o4(() => {
    var e5;
    return (e5 = r9.current.find((o12) => o12 != null && o12.isConnected)) != null ? e5 : null;
  });
}
function Y({ ownerDocument: t17 }, r9) {
  let e5 = Q(r9);
  m3(() => {
    r9 || (t17 == null ? void 0 : t17.activeElement) === (t17 == null ? void 0 : t17.body) && y(e5());
  }, [r9]), c6(() => {
    r9 && y(e5());
  });
}
function Z2({ ownerDocument: t17, container: r9, initialFocus: e5 }, o12) {
  let u10 = (0, import_react24.useRef)(null), i9 = f7();
  return m3(() => {
    if (!o12)
      return;
    let n7 = r9.current;
    n7 && t3(() => {
      if (!i9.current)
        return;
      let l11 = t17 == null ? void 0 : t17.activeElement;
      if (e5 != null && e5.current) {
        if ((e5 == null ? void 0 : e5.current) === l11) {
          u10.current = l11;
          return;
        }
      } else if (n7.contains(l11)) {
        u10.current = l11;
        return;
      }
      e5 != null && e5.current ? y(e5.current) : O(n7, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u10.current = t17 == null ? void 0 : t17.activeElement;
    });
  }, [o12]), u10;
}
function $({ ownerDocument: t17, container: r9, containers: e5, previousActiveElement: o12 }, u10) {
  let i9 = f7();
  E3(t17 == null ? void 0 : t17.defaultView, "focus", (n7) => {
    if (!u10 || !i9.current)
      return;
    let l11 = P(e5);
    r9.current instanceof HTMLElement && l11.add(r9.current);
    let m11 = o12.current;
    if (!m11)
      return;
    let c14 = n7.target;
    c14 && c14 instanceof HTMLElement ? S4(l11, c14) ? (o12.current = c14, y(c14)) : (n7.preventDefault(), n7.stopPropagation(), y(m11)) : y(o12.current);
  }, true);
}
function S4(t17, r9) {
  for (let e5 of t17)
    if (e5.contains(r9))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react26 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react25 = __toESM(require_react(), 1);
var e3 = (0, import_react25.createContext)(false);
function l5() {
  return (0, import_react25.useContext)(e3);
}
function P2(o12) {
  return import_react25.default.createElement(e3.Provider, { value: o12.force }, o12.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F3(p7) {
  let l11 = l5(), n7 = (0, import_react26.useContext)(v), e5 = n3(p7), [a13, o12] = (0, import_react26.useState)(() => {
    if (!l11 && n7 !== null || s.isServer)
      return null;
    let t17 = e5 == null ? void 0 : e5.getElementById("headlessui-portal-root");
    if (t17)
      return t17;
    if (e5 === null)
      return null;
    let r9 = e5.createElement("div");
    return r9.setAttribute("id", "headlessui-portal-root"), e5.body.appendChild(r9);
  });
  return (0, import_react26.useEffect)(() => {
    a13 !== null && (e5 != null && e5.body.contains(a13) || e5 == null || e5.body.appendChild(a13));
  }, [a13, e5]), (0, import_react26.useEffect)(() => {
    l11 || n7 !== null && o12(n7.current);
  }, [n7, o12, l11]), a13;
}
var U = import_react26.Fragment;
function N3(p7, l11) {
  let n7 = p7, e5 = (0, import_react26.useRef)(null), a13 = y2(T2((u10) => {
    e5.current = u10;
  }), l11), o12 = n3(e5), t17 = F3(e5), [r9] = (0, import_react26.useState)(() => {
    var u10;
    return s.isServer ? null : (u10 = o12 == null ? void 0 : o12.createElement("div")) != null ? u10 : null;
  }), i9 = (0, import_react26.useContext)(f8), C5 = l2();
  return l(() => {
    !t17 || !r9 || t17.contains(r9) || (r9.setAttribute("data-headlessui-portal", ""), t17.appendChild(r9));
  }, [t17, r9]), l(() => {
    if (r9 && i9)
      return i9.register(r9);
  }, [i9, r9]), c6(() => {
    var u10;
    !t17 || !r9 || (r9 instanceof Node && t17.contains(r9) && t17.removeChild(r9), t17.childNodes.length <= 0 && ((u10 = t17.parentElement) == null || u10.removeChild(t17)));
  }), C5 ? !t17 || !r9 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: a13 }, theirProps: n7, defaultTag: U, name: "Portal" }), r9) : null;
}
var S5 = import_react26.Fragment;
var v = (0, import_react26.createContext)(null);
function j2(p7, l11) {
  let { target: n7, ...e5 } = p7, o12 = { ref: y2(l11) };
  return import_react26.default.createElement(v.Provider, { value: n7 }, X({ ourProps: o12, theirProps: e5, defaultTag: S5, name: "Popover.Group" }));
}
var f8 = (0, import_react26.createContext)(null);
function ae2() {
  let p7 = (0, import_react26.useContext)(f8), l11 = (0, import_react26.useRef)([]), n7 = o4((o12) => (l11.current.push(o12), p7 && p7.register(o12), () => e5(o12))), e5 = o4((o12) => {
    let t17 = l11.current.indexOf(o12);
    t17 !== -1 && l11.current.splice(t17, 1), p7 && p7.unregister(o12);
  }), a13 = (0, import_react26.useMemo)(() => ({ register: n7, unregister: e5, portals: l11 }), [n7, e5, l11]);
  return [l11, (0, import_react26.useMemo)(() => function({ children: t17 }) {
    return import_react26.default.createElement(f8.Provider, { value: a13 }, t17);
  }, [a13])];
}
var D3 = D2(N3);
var I3 = D2(j2);
var pe2 = Object.assign(D3, { Group: I3 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react27 = __toESM(require_react(), 1);
var d8 = (0, import_react27.createContext)(null);
function f9() {
  let r9 = (0, import_react27.useContext)(d8);
  if (r9 === null) {
    let t17 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t17, f9), t17;
  }
  return r9;
}
function M3() {
  let [r9, t17] = (0, import_react27.useState)([]);
  return [r9.length > 0 ? r9.join(" ") : void 0, (0, import_react27.useMemo)(() => function(e5) {
    let i9 = o4((s17) => (t17((o12) => [...o12, s17]), () => t17((o12) => {
      let p7 = o12.slice(), c14 = p7.indexOf(s17);
      return c14 !== -1 && p7.splice(c14, 1), p7;
    }))), n7 = (0, import_react27.useMemo)(() => ({ register: i9, slot: e5.slot, name: e5.name, props: e5.props }), [i9, e5.slot, e5.name, e5.props]);
    return import_react27.default.createElement(d8.Provider, { value: n7 }, e5.children);
  }, [t17])];
}
var S6 = "p";
function h5(r9, t17) {
  let a13 = I(), { id: e5 = `headlessui-description-${a13}`, ...i9 } = r9, n7 = f9(), s17 = y2(t17);
  l(() => n7.register(e5), [e5, n7.register]);
  let o12 = { ref: s17, ...n7.props, id: e5 };
  return X({ ourProps: o12, theirProps: i9, slot: n7.slot || {}, defaultTag: S6, name: n7.name || "Description" });
}
var y3 = D2(h5);
var b2 = Object.assign(y3, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react28 = __toESM(require_react(), 1);
var a5 = (0, import_react28.createContext)(() => {
});
a5.displayName = "StackContext";
var s12 = ((e5) => (e5[e5.Add = 0] = "Add", e5[e5.Remove = 1] = "Remove", e5))(s12 || {});
function x3() {
  return (0, import_react28.useContext)(a5);
}
function M4({ children: i9, onUpdate: r9, type: e5, element: n7, enabled: u10 }) {
  let l11 = x3(), o12 = o4((...t17) => {
    r9 == null || r9(...t17), l11(...t17);
  });
  return l(() => {
    let t17 = u10 === void 0 || u10 === true;
    return t17 && o12(0, e5, n7), () => {
      t17 && o12(1, e5, n7);
    };
  }, [o12, e5, n7, u10]), import_react28.default.createElement(a5.Provider, { value: o12 }, i9);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l7 = __toESM(require_react(), 1);
function i7(e5, t17) {
  return e5 === t17 && (e5 !== 0 || 1 / e5 === 1 / t17) || e5 !== e5 && t17 !== t17;
}
var d10 = typeof Object.is == "function" ? Object.is : i7;
var { useState: u6, useEffect: h6, useLayoutEffect: f10, useDebugValue: p5 } = l7;
function y4(e5, t17, c14) {
  const a13 = t17(), [{ inst: n7 }, o12] = u6({ inst: { value: a13, getSnapshot: t17 } });
  return f10(() => {
    n7.value = a13, n7.getSnapshot = t17, r5(n7) && o12({ inst: n7 });
  }, [e5, a13, t17]), h6(() => (r5(n7) && o12({ inst: n7 }), e5(() => {
    r5(n7) && o12({ inst: n7 });
  })), [e5]), p5(a13), a13;
}
function r5(e5) {
  const t17 = e5.getSnapshot, c14 = e5.value;
  try {
    const a13 = t17();
    return !d10(c14, a13);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t14(r9, e5, n7) {
  return e5();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r6 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s13 = !r6;
var c9 = s13 ? t14 : y4;
var a6 = "useSyncExternalStore" in e4 ? ((n7) => n7.useSyncExternalStore)(e4) : c9;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S7(t17) {
  return a6(t17.subscribe, t17.getSnapshot, t17.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a7(o12, r9) {
  let t17 = o12(), n7 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t17;
  }, subscribe(e5) {
    return n7.add(e5), () => n7.delete(e5);
  }, dispatch(e5, ...s17) {
    let i9 = r9[e5].call(t17, ...s17);
    i9 && (t17 = i9, n7.forEach((c14) => c14()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c10() {
  let o12;
  return { before({ doc: e5 }) {
    var l11;
    let n7 = e5.documentElement;
    o12 = ((l11 = e5.defaultView) != null ? l11 : window).innerWidth - n7.clientWidth;
  }, after({ doc: e5, d: n7 }) {
    let t17 = e5.documentElement, l11 = t17.clientWidth - t17.offsetWidth, r9 = o12 - l11;
    n7.style(t17, "paddingRight", `${r9}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function T7() {
  if (!t9())
    return {};
  let l11;
  return { before() {
    l11 = window.pageYOffset;
  }, after({ doc: o12, d: t17, meta: s17 }) {
    function i9(n7) {
      return s17.containers.flatMap((e5) => e5()).some((e5) => e5.contains(n7));
    }
    t17.microTask(() => {
      if (window.getComputedStyle(o12.documentElement).scrollBehavior !== "auto") {
        let e5 = o2();
        e5.style(o12.documentElement, "scroll-behavior", "auto"), t17.add(() => t17.microTask(() => e5.dispose()));
      }
      t17.style(o12.body, "marginTop", `-${l11}px`), window.scrollTo(0, 0);
      let n7 = null;
      t17.addEventListener(o12, "click", (e5) => {
        if (e5.target instanceof HTMLElement)
          try {
            let r9 = e5.target.closest("a");
            if (!r9)
              return;
            let { hash: c14 } = new URL(r9.href), a13 = o12.querySelector(c14);
            a13 && !i9(a13) && (n7 = a13);
          } catch {
          }
      }, true), t17.addEventListener(o12, "touchmove", (e5) => {
        e5.target instanceof HTMLElement && !i9(e5.target) && e5.preventDefault();
      }, { passive: false }), t17.add(() => {
        window.scrollTo(0, window.pageYOffset + l11), n7 && n7.isConnected && (n7.scrollIntoView({ block: "nearest" }), n7 = null);
      });
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l8() {
  return { before({ doc: e5, d: o12 }) {
    o12.style(e5.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m7(e5) {
  let n7 = {};
  for (let t17 of e5)
    Object.assign(n7, t17(n7));
  return n7;
}
var a8 = a7(() => /* @__PURE__ */ new Map(), { PUSH(e5, n7) {
  var o12;
  let t17 = (o12 = this.get(e5)) != null ? o12 : { doc: e5, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t17.count++, t17.meta.add(n7), this.set(e5, t17), this;
}, POP(e5, n7) {
  let t17 = this.get(e5);
  return t17 && (t17.count--, t17.meta.delete(n7)), this;
}, SCROLL_PREVENT({ doc: e5, d: n7, meta: t17 }) {
  let o12 = { doc: e5, d: n7, meta: m7(t17) }, c14 = [T7(), c10(), l8()];
  c14.forEach(({ before: r9 }) => r9 == null ? void 0 : r9(o12)), c14.forEach(({ after: r9 }) => r9 == null ? void 0 : r9(o12));
}, SCROLL_ALLOW({ d: e5 }) {
  e5.dispose();
}, TEARDOWN({ doc: e5 }) {
  this.delete(e5);
} });
a8.subscribe(() => {
  let e5 = a8.getSnapshot(), n7 = /* @__PURE__ */ new Map();
  for (let [t17] of e5)
    n7.set(t17, t17.documentElement.style.overflow);
  for (let t17 of e5.values()) {
    let o12 = n7.get(t17.doc) === "hidden", c14 = t17.count !== 0;
    (c14 && !o12 || !c14 && o12) && a8.dispatch(t17.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t17), t17.count === 0 && a8.dispatch("TEARDOWN", t17);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p6(e5, r9, n7) {
  let f14 = S7(a8), o12 = e5 ? f14.get(e5) : void 0, i9 = o12 ? o12.count > 0 : false;
  return l(() => {
    if (!(!e5 || !r9))
      return a8.dispatch("PUSH", e5, n7), () => a8.dispatch("POP", e5, n7);
  }, [r9, e5]), i9;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u7 = /* @__PURE__ */ new Map();
var t15 = /* @__PURE__ */ new Map();
function h7(r9, l11 = true) {
  l(() => {
    var o12;
    if (!l11)
      return;
    let e5 = typeof r9 == "function" ? r9() : r9.current;
    if (!e5)
      return;
    function a13() {
      var d13;
      if (!e5)
        return;
      let i9 = (d13 = t15.get(e5)) != null ? d13 : 1;
      if (i9 === 1 ? t15.delete(e5) : t15.set(e5, i9 - 1), i9 !== 1)
        return;
      let n7 = u7.get(e5);
      n7 && (n7["aria-hidden"] === null ? e5.removeAttribute("aria-hidden") : e5.setAttribute("aria-hidden", n7["aria-hidden"]), e5.inert = n7.inert, u7.delete(e5));
    }
    let f14 = (o12 = t15.get(e5)) != null ? o12 : 0;
    return t15.set(e5, f14 + 1), f14 !== 0 || (u7.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), e5.setAttribute("aria-hidden", "true"), e5.inert = true), a13;
  }, [r9, l11]);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react29 = __toESM(require_react(), 1);
function j3({ defaultContainers: t17 = [], portals: r9, mainTreeNodeRef: u10 } = {}) {
  var c14;
  let o12 = (0, import_react29.useRef)((c14 = u10 == null ? void 0 : u10.current) != null ? c14 : null), l11 = n3(o12), f14 = o4(() => {
    var i9;
    let n7 = [];
    for (let e5 of t17)
      e5 !== null && (e5 instanceof HTMLElement ? n7.push(e5) : "current" in e5 && e5.current instanceof HTMLElement && n7.push(e5.current));
    if (r9 != null && r9.current)
      for (let e5 of r9.current)
        n7.push(e5);
    for (let e5 of (i9 = l11 == null ? void 0 : l11.querySelectorAll("html > *, body > *")) != null ? i9 : [])
      e5 !== document.body && e5 !== document.head && e5 instanceof HTMLElement && e5.id !== "headlessui-portal-root" && (e5.contains(o12.current) || n7.some((T8) => e5.contains(T8)) || n7.push(e5));
    return n7;
  });
  return { resolveContainers: f14, contains: o4((n7) => f14().some((i9) => i9.contains(n7))), mainTreeNodeRef: o12, MainTreeNode: (0, import_react29.useMemo)(() => function() {
    return u10 != null ? null : import_react29.default.createElement(c4, { features: p3.Hidden, ref: o12 });
  }, [o12, u10]) };
}
function y5() {
  let t17 = (0, import_react29.useRef)(null);
  return { mainTreeNodeRef: t17, MainTreeNode: (0, import_react29.useMemo)(() => function() {
    return import_react29.default.createElement(c4, { features: p3.Hidden, ref: t17 });
  }, [t17]) };
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e = ((o12) => (o12[o12.Open = 0] = "Open", o12[o12.Closed = 1] = "Closed", o12))(_e || {});
var Ie = ((e5) => (e5[e5.SetTitleId = 0] = "SetTitleId", e5))(Ie || {});
var Me = { [0](t17, e5) {
  return t17.titleId === e5.id ? t17 : { ...t17, titleId: e5.id };
} };
var I4 = (0, import_react30.createContext)(null);
I4.displayName = "DialogContext";
function b3(t17) {
  let e5 = (0, import_react30.useContext)(I4);
  if (e5 === null) {
    let o12 = new Error(`<${t17} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o12, b3), o12;
  }
  return e5;
}
function we2(t17, e5, o12 = () => [document.body]) {
  p6(t17, e5, (i9) => {
    var n7;
    return { containers: [...(n7 = i9.containers) != null ? n7 : [], o12] };
  });
}
function Be(t17, e5) {
  return u(e5.type, Me, t17, e5);
}
var He2 = "div";
var Ge2 = S2.RenderStrategy | S2.Static;
function Ne2(t17, e5) {
  var X5;
  let o12 = I(), { id: i9 = `headlessui-dialog-${o12}`, open: n7, onClose: l11, initialFocus: s17, __demoMode: g6 = false, ...T8 } = t17, [m11, h11] = (0, import_react30.useState)(0), a13 = C();
  n7 === void 0 && a13 !== null && (n7 = (a13 & d5.Open) === d5.Open);
  let D6 = (0, import_react30.useRef)(null), Q5 = y2(D6, e5), f14 = n3(D6), N7 = t17.hasOwnProperty("open") || a13 !== null, U5 = t17.hasOwnProperty("onClose");
  if (!N7 && !U5)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N7)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U5)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n7 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n7}`);
  if (typeof l11 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l11}`);
  let p7 = n7 ? 0 : 1, [S10, Z8] = (0, import_react30.useReducer)(Be, { titleId: null, descriptionId: null, panelRef: (0, import_react30.createRef)() }), P4 = o4(() => l11(false)), W2 = o4((r9) => Z8({ type: 0, id: r9 })), L3 = l2() ? g6 ? false : p7 === 0 : false, F8 = m11 > 1, Y5 = (0, import_react30.useContext)(I4) !== null, [ee6, te4] = ae2(), { resolveContainers: M11, mainTreeNodeRef: k2, MainTreeNode: oe5 } = j3({ portals: ee6, defaultContainers: [(X5 = S10.panelRef.current) != null ? X5 : D6.current] }), re5 = F8 ? "parent" : "leaf", $6 = a13 !== null ? (a13 & d5.Closing) === d5.Closing : false, ne5 = /* @__PURE__ */ (() => Y5 || $6 ? false : L3)(), le4 = (0, import_react30.useCallback)(() => {
    var r9, c14;
    return (c14 = Array.from((r9 = f14 == null ? void 0 : f14.querySelectorAll("body > *")) != null ? r9 : []).find((d13) => d13.id === "headlessui-portal-root" ? false : d13.contains(k2.current) && d13 instanceof HTMLElement)) != null ? c14 : null;
  }, [k2]);
  h7(le4, ne5);
  let ae4 = /* @__PURE__ */ (() => F8 ? true : L3)(), ie4 = (0, import_react30.useCallback)(() => {
    var r9, c14;
    return (c14 = Array.from((r9 = f14 == null ? void 0 : f14.querySelectorAll("[data-headlessui-portal]")) != null ? r9 : []).find((d13) => d13.contains(k2.current) && d13 instanceof HTMLElement)) != null ? c14 : null;
  }, [k2]);
  h7(ie4, ae4);
  let se5 = /* @__PURE__ */ (() => !(!L3 || F8))();
  h2(M11, P4, se5);
  let pe3 = /* @__PURE__ */ (() => !(F8 || p7 !== 0))();
  E3(f14 == null ? void 0 : f14.defaultView, "keydown", (r9) => {
    pe3 && (r9.defaultPrevented || r9.key === o8.Escape && (r9.preventDefault(), r9.stopPropagation(), P4()));
  });
  let de4 = /* @__PURE__ */ (() => !($6 || p7 !== 0 || Y5))();
  we2(f14, de4, M11), (0, import_react30.useEffect)(() => {
    if (p7 !== 0 || !D6.current)
      return;
    let r9 = new ResizeObserver((c14) => {
      for (let d13 of c14) {
        let x6 = d13.target.getBoundingClientRect();
        x6.x === 0 && x6.y === 0 && x6.width === 0 && x6.height === 0 && P4();
      }
    });
    return r9.observe(D6.current), () => r9.disconnect();
  }, [p7, D6, P4]);
  let [ue5, fe4] = M3(), ge7 = (0, import_react30.useMemo)(() => [{ dialogState: p7, close: P4, setTitleId: W2 }, S10], [p7, S10, P4, W2]), J7 = (0, import_react30.useMemo)(() => ({ open: p7 === 0 }), [p7]), Te3 = { ref: Q5, id: i9, role: "dialog", "aria-modal": p7 === 0 ? true : void 0, "aria-labelledby": S10.titleId, "aria-describedby": ue5 };
  return import_react30.default.createElement(M4, { type: "Dialog", enabled: p7 === 0, element: D6, onUpdate: o4((r9, c14) => {
    c14 === "Dialog" && u(r9, { [s12.Add]: () => h11((d13) => d13 + 1), [s12.Remove]: () => h11((d13) => d13 - 1) });
  }) }, import_react30.default.createElement(P2, { force: true }, import_react30.default.createElement(pe2, null, import_react30.default.createElement(I4.Provider, { value: ge7 }, import_react30.default.createElement(pe2.Group, { target: D6 }, import_react30.default.createElement(P2, { force: false }, import_react30.default.createElement(fe4, { slot: J7, name: "Dialog.Description" }, import_react30.default.createElement(ge2, { initialFocus: s17, containers: M11, features: L3 ? u(re5, { parent: ge2.features.RestoreFocus, leaf: ge2.features.All & ~ge2.features.FocusLock }) : ge2.features.None }, import_react30.default.createElement(te4, null, X({ ourProps: Te3, theirProps: T8, slot: J7, defaultTag: He2, features: Ge2, visible: p7 === 0, name: "Dialog" }))))))))), import_react30.default.createElement(oe5, null));
}
var Ue2 = "div";
function We2(t17, e5) {
  let o12 = I(), { id: i9 = `headlessui-dialog-overlay-${o12}`, ...n7 } = t17, [{ dialogState: l11, close: s17 }] = b3("Dialog.Overlay"), g6 = y2(e5), T8 = o4((a13) => {
    if (a13.target === a13.currentTarget) {
      if (r2(a13.currentTarget))
        return a13.preventDefault();
      a13.preventDefault(), a13.stopPropagation(), s17();
    }
  }), m11 = (0, import_react30.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return X({ ourProps: { ref: g6, id: i9, "aria-hidden": true, onClick: T8 }, theirProps: n7, slot: m11, defaultTag: Ue2, name: "Dialog.Overlay" });
}
var Ye2 = "div";
function $e2(t17, e5) {
  let o12 = I(), { id: i9 = `headlessui-dialog-backdrop-${o12}`, ...n7 } = t17, [{ dialogState: l11 }, s17] = b3("Dialog.Backdrop"), g6 = y2(e5);
  (0, import_react30.useEffect)(() => {
    if (s17.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s17.panelRef]);
  let T8 = (0, import_react30.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return import_react30.default.createElement(P2, { force: true }, import_react30.default.createElement(pe2, null, X({ ourProps: { ref: g6, id: i9, "aria-hidden": true }, theirProps: n7, slot: T8, defaultTag: Ye2, name: "Dialog.Backdrop" })));
}
var Je2 = "div";
function Xe2(t17, e5) {
  let o12 = I(), { id: i9 = `headlessui-dialog-panel-${o12}`, ...n7 } = t17, [{ dialogState: l11 }, s17] = b3("Dialog.Panel"), g6 = y2(e5, s17.panelRef), T8 = (0, import_react30.useMemo)(() => ({ open: l11 === 0 }), [l11]), m11 = o4((a13) => {
    a13.stopPropagation();
  });
  return X({ ourProps: { ref: g6, id: i9, onClick: m11 }, theirProps: n7, slot: T8, defaultTag: Je2, name: "Dialog.Panel" });
}
var je2 = "h2";
function Ke2(t17, e5) {
  let o12 = I(), { id: i9 = `headlessui-dialog-title-${o12}`, ...n7 } = t17, [{ dialogState: l11, setTitleId: s17 }] = b3("Dialog.Title"), g6 = y2(e5);
  (0, import_react30.useEffect)(() => (s17(i9), () => s17(null)), [i9, s17]);
  let T8 = (0, import_react30.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return X({ ourProps: { ref: g6, id: i9 }, theirProps: n7, slot: T8, defaultTag: je2, name: "Dialog.Title" });
}
var Ve = D2(Ne2);
var qe2 = D2($e2);
var ze2 = D2(Xe2);
var Qe2 = D2(We2);
var Ze2 = D2(Ke2);
var _t = Object.assign(Ve, { Backdrop: qe2, Panel: ze2, Overlay: Qe2, Title: Ze2, Description: b2 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react32 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react31 = __toESM(require_react(), 1);
var t16;
var a10 = (t16 = import_react31.default.startTransition) != null ? t16 : function(i9) {
  i9();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q = ((o12) => (o12[o12.Open = 0] = "Open", o12[o12.Closed = 1] = "Closed", o12))(q || {});
var z2 = ((t17) => (t17[t17.ToggleDisclosure = 0] = "ToggleDisclosure", t17[t17.CloseDisclosure = 1] = "CloseDisclosure", t17[t17.SetButtonId = 2] = "SetButtonId", t17[t17.SetPanelId = 3] = "SetPanelId", t17[t17.LinkPanel = 4] = "LinkPanel", t17[t17.UnlinkPanel = 5] = "UnlinkPanel", t17))(z2 || {});
var Q2 = { [0]: (e5) => ({ ...e5, disclosureState: u(e5.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e5) => e5.disclosureState === 1 ? e5 : { ...e5, disclosureState: 1 }, [4](e5) {
  return e5.linkedPanel === true ? e5 : { ...e5, linkedPanel: true };
}, [5](e5) {
  return e5.linkedPanel === false ? e5 : { ...e5, linkedPanel: false };
}, [2](e5, n7) {
  return e5.buttonId === n7.buttonId ? e5 : { ...e5, buttonId: n7.buttonId };
}, [3](e5, n7) {
  return e5.panelId === n7.panelId ? e5 : { ...e5, panelId: n7.panelId };
} };
var k = (0, import_react32.createContext)(null);
k.displayName = "DisclosureContext";
function M5(e5) {
  let n7 = (0, import_react32.useContext)(k);
  if (n7 === null) {
    let o12 = new Error(`<${e5} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o12, M5), o12;
  }
  return n7;
}
var v2 = (0, import_react32.createContext)(null);
v2.displayName = "DisclosureAPIContext";
function w4(e5) {
  let n7 = (0, import_react32.useContext)(v2);
  if (n7 === null) {
    let o12 = new Error(`<${e5} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o12, w4), o12;
  }
  return n7;
}
var H3 = (0, import_react32.createContext)(null);
H3.displayName = "DisclosurePanelContext";
function V() {
  return (0, import_react32.useContext)(H3);
}
function Y2(e5, n7) {
  return u(n7.type, Q2, e5, n7);
}
var Z3 = import_react32.Fragment;
function ee2(e5, n7) {
  let { defaultOpen: o12 = false, ...u10 } = e5, T8 = (0, import_react32.useRef)(null), l11 = y2(n7, T2((a13) => {
    T8.current = a13;
  }, e5.as === void 0 || e5.as === import_react32.Fragment)), t17 = (0, import_react32.useRef)(null), f14 = (0, import_react32.useRef)(null), s17 = (0, import_react32.useReducer)(Y2, { disclosureState: o12 ? 0 : 1, linkedPanel: false, buttonRef: f14, panelRef: t17, buttonId: null, panelId: null }), [{ disclosureState: i9, buttonId: c14 }, D6] = s17, d13 = o4((a13) => {
    D6({ type: 1 });
    let r9 = e(T8);
    if (!r9 || !c14)
      return;
    let p7 = (() => a13 ? a13 instanceof HTMLElement ? a13 : a13.current instanceof HTMLElement ? a13.current : r9.getElementById(c14) : r9.getElementById(c14))();
    p7 == null || p7.focus();
  }), P4 = (0, import_react32.useMemo)(() => ({ close: d13 }), [d13]), b7 = (0, import_react32.useMemo)(() => ({ open: i9 === 0, close: d13 }), [i9, d13]), y8 = { ref: l11 };
  return import_react32.default.createElement(k.Provider, { value: s17 }, import_react32.default.createElement(v2.Provider, { value: P4 }, import_react32.default.createElement(c5, { value: u(i9, { [0]: d5.Open, [1]: d5.Closed }) }, X({ ourProps: y8, theirProps: u10, slot: b7, defaultTag: Z3, name: "Disclosure" }))));
}
var te = "button";
function ne(e5, n7) {
  let o12 = I(), { id: u10 = `headlessui-disclosure-button-${o12}`, ...T8 } = e5, [l11, t17] = M5("Disclosure.Button"), f14 = V(), s17 = f14 === null ? false : f14 === l11.panelId, i9 = (0, import_react32.useRef)(null), c14 = y2(i9, n7, s17 ? null : l11.buttonRef);
  (0, import_react32.useEffect)(() => {
    if (!s17)
      return t17({ type: 2, buttonId: u10 }), () => {
        t17({ type: 2, buttonId: null });
      };
  }, [u10, t17, s17]);
  let D6 = o4((r9) => {
    var p7;
    if (s17) {
      if (l11.disclosureState === 1)
        return;
      switch (r9.key) {
        case o8.Space:
        case o8.Enter:
          r9.preventDefault(), r9.stopPropagation(), t17({ type: 0 }), (p7 = l11.buttonRef.current) == null || p7.focus();
          break;
      }
    } else
      switch (r9.key) {
        case o8.Space:
        case o8.Enter:
          r9.preventDefault(), r9.stopPropagation(), t17({ type: 0 });
          break;
      }
  }), d13 = o4((r9) => {
    switch (r9.key) {
      case o8.Space:
        r9.preventDefault();
        break;
    }
  }), P4 = o4((r9) => {
    var p7;
    r2(r9.currentTarget) || e5.disabled || (s17 ? (t17({ type: 0 }), (p7 = l11.buttonRef.current) == null || p7.focus()) : t17({ type: 0 }));
  }), b7 = (0, import_react32.useMemo)(() => ({ open: l11.disclosureState === 0 }), [l11]), y8 = s7(e5, i9), a13 = s17 ? { ref: c14, type: y8, onKeyDown: D6, onClick: P4 } : { ref: c14, id: u10, type: y8, "aria-expanded": l11.disclosureState === 0, "aria-controls": l11.linkedPanel ? l11.panelId : void 0, onKeyDown: D6, onKeyUp: d13, onClick: P4 };
  return X({ ourProps: a13, theirProps: T8, slot: b7, defaultTag: te, name: "Disclosure.Button" });
}
var le2 = "div";
var oe = S2.RenderStrategy | S2.Static;
function re(e5, n7) {
  let o12 = I(), { id: u10 = `headlessui-disclosure-panel-${o12}`, ...T8 } = e5, [l11, t17] = M5("Disclosure.Panel"), { close: f14 } = w4("Disclosure.Panel"), s17 = y2(n7, l11.panelRef, (P4) => {
    a10(() => t17({ type: P4 ? 4 : 5 }));
  });
  (0, import_react32.useEffect)(() => (t17({ type: 3, panelId: u10 }), () => {
    t17({ type: 3, panelId: null });
  }), [u10, t17]);
  let i9 = C(), c14 = (() => i9 !== null ? (i9 & d5.Open) === d5.Open : l11.disclosureState === 0)(), D6 = (0, import_react32.useMemo)(() => ({ open: l11.disclosureState === 0, close: f14 }), [l11, f14]), d13 = { ref: s17, id: u10 };
  return import_react32.default.createElement(H3.Provider, { value: l11.panelId }, X({ ourProps: d13, theirProps: T8, slot: D6, defaultTag: le2, features: oe, visible: c14, name: "Disclosure.Panel" }));
}
var se2 = D2(ee2);
var ue = D2(ne);
var ie2 = D2(re);
var ve = Object.assign(se2, { Button: ue, Panel: ie2 });

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react34 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react33 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a11 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o11(e5) {
  var r9, i9;
  let n7 = (r9 = e5.innerText) != null ? r9 : "", t17 = e5.cloneNode(true);
  if (!(t17 instanceof HTMLElement))
    return n7;
  let u10 = false;
  for (let f14 of t17.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f14.remove(), u10 = true;
  let l11 = u10 ? (i9 = t17.innerText) != null ? i9 : "" : n7;
  return a11.test(l11) && (l11 = l11.replace(a11, "")), l11;
}
function g4(e5) {
  let n7 = e5.getAttribute("aria-label");
  if (typeof n7 == "string")
    return n7.trim();
  let t17 = e5.getAttribute("aria-labelledby");
  if (t17) {
    let u10 = t17.split(" ").map((l11) => {
      let r9 = document.getElementById(l11);
      if (r9) {
        let i9 = r9.getAttribute("aria-label");
        return typeof i9 == "string" ? i9.trim() : o11(r9).trim();
      }
      return null;
    }).filter(Boolean);
    if (u10.length > 0)
      return u10.join(", ");
  }
  return o11(e5).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function b4(c14) {
  let t17 = (0, import_react33.useRef)(""), r9 = (0, import_react33.useRef)("");
  return o4(() => {
    let e5 = c14.current;
    if (!e5)
      return "";
    let u10 = e5.innerText;
    if (t17.current === u10)
      return r9.current;
    let n7 = g4(e5).trim().toLowerCase();
    return t17.current = u10, r9.current = n7, n7;
  });
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var Be2 = ((n7) => (n7[n7.Open = 0] = "Open", n7[n7.Closed = 1] = "Closed", n7))(Be2 || {});
var He3 = ((n7) => (n7[n7.Single = 0] = "Single", n7[n7.Multi = 1] = "Multi", n7))(He3 || {});
var Ge3 = ((n7) => (n7[n7.Pointer = 0] = "Pointer", n7[n7.Other = 1] = "Other", n7))(Ge3 || {});
var Ne3 = ((i9) => (i9[i9.OpenListbox = 0] = "OpenListbox", i9[i9.CloseListbox = 1] = "CloseListbox", i9[i9.GoToOption = 2] = "GoToOption", i9[i9.Search = 3] = "Search", i9[i9.ClearSearch = 4] = "ClearSearch", i9[i9.RegisterOption = 5] = "RegisterOption", i9[i9.UnregisterOption = 6] = "UnregisterOption", i9[i9.RegisterLabel = 7] = "RegisterLabel", i9))(Ne3 || {});
function z3(e5, a13 = (n7) => n7) {
  let n7 = e5.activeOptionIndex !== null ? e5.options[e5.activeOptionIndex] : null, r9 = I2(a13(e5.options.slice()), (t17) => t17.dataRef.current.domRef.current), l11 = n7 ? r9.indexOf(n7) : null;
  return l11 === -1 && (l11 = null), { options: r9, activeOptionIndex: l11 };
}
var je3 = { [1](e5) {
  return e5.dataRef.current.disabled || e5.listboxState === 1 ? e5 : { ...e5, activeOptionIndex: null, listboxState: 1 };
}, [0](e5) {
  if (e5.dataRef.current.disabled || e5.listboxState === 0)
    return e5;
  let a13 = e5.activeOptionIndex, { isSelected: n7 } = e5.dataRef.current, r9 = e5.options.findIndex((l11) => n7(l11.dataRef.current.value));
  return r9 !== -1 && (a13 = r9), { ...e5, listboxState: 0, activeOptionIndex: a13 };
}, [2](e5, a13) {
  var l11;
  if (e5.dataRef.current.disabled || e5.listboxState === 1)
    return e5;
  let n7 = z3(e5), r9 = x(a13, { resolveItems: () => n7.options, resolveActiveIndex: () => n7.activeOptionIndex, resolveId: (t17) => t17.id, resolveDisabled: (t17) => t17.dataRef.current.disabled });
  return { ...e5, ...n7, searchQuery: "", activeOptionIndex: r9, activationTrigger: (l11 = a13.trigger) != null ? l11 : 1 };
}, [3]: (e5, a13) => {
  if (e5.dataRef.current.disabled || e5.listboxState === 1)
    return e5;
  let r9 = e5.searchQuery !== "" ? 0 : 1, l11 = e5.searchQuery + a13.value.toLowerCase(), p7 = (e5.activeOptionIndex !== null ? e5.options.slice(e5.activeOptionIndex + r9).concat(e5.options.slice(0, e5.activeOptionIndex + r9)) : e5.options).find((i9) => {
    var b7;
    return !i9.dataRef.current.disabled && ((b7 = i9.dataRef.current.textValue) == null ? void 0 : b7.startsWith(l11));
  }), u10 = p7 ? e5.options.indexOf(p7) : -1;
  return u10 === -1 || u10 === e5.activeOptionIndex ? { ...e5, searchQuery: l11 } : { ...e5, searchQuery: l11, activeOptionIndex: u10, activationTrigger: 1 };
}, [4](e5) {
  return e5.dataRef.current.disabled || e5.listboxState === 1 || e5.searchQuery === "" ? e5 : { ...e5, searchQuery: "" };
}, [5]: (e5, a13) => {
  let n7 = { id: a13.id, dataRef: a13.dataRef }, r9 = z3(e5, (l11) => [...l11, n7]);
  return e5.activeOptionIndex === null && e5.dataRef.current.isSelected(a13.dataRef.current.value) && (r9.activeOptionIndex = r9.options.indexOf(n7)), { ...e5, ...r9 };
}, [6]: (e5, a13) => {
  let n7 = z3(e5, (r9) => {
    let l11 = r9.findIndex((t17) => t17.id === a13.id);
    return l11 !== -1 && r9.splice(l11, 1), r9;
  });
  return { ...e5, ...n7, activationTrigger: 1 };
}, [7]: (e5, a13) => ({ ...e5, labelId: a13.id }) };
var J3 = (0, import_react34.createContext)(null);
J3.displayName = "ListboxActionsContext";
function _2(e5) {
  let a13 = (0, import_react34.useContext)(J3);
  if (a13 === null) {
    let n7 = new Error(`<${e5} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n7, _2), n7;
  }
  return a13;
}
var q2 = (0, import_react34.createContext)(null);
q2.displayName = "ListboxDataContext";
function U2(e5) {
  let a13 = (0, import_react34.useContext)(q2);
  if (a13 === null) {
    let n7 = new Error(`<${e5} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n7, U2), n7;
  }
  return a13;
}
function Ve2(e5, a13) {
  return u(a13.type, je3, e5, a13);
}
var Ke3 = import_react34.Fragment;
function Qe3(e5, a13) {
  let { value: n7, defaultValue: r9, form: l11, name: t17, onChange: p7, by: u10 = (s17, c14) => s17 === c14, disabled: i9 = false, horizontal: b7 = false, multiple: R3 = false, ...m11 } = e5;
  const P4 = b7 ? "horizontal" : "vertical";
  let S10 = y2(a13), [L3 = R3 ? [] : void 0, y8] = T4(n7, p7, r9), [T8, o12] = (0, import_react34.useReducer)(Ve2, { dataRef: (0, import_react34.createRef)(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), x6 = (0, import_react34.useRef)({ static: false, hold: false }), E9 = (0, import_react34.useRef)(null), B3 = (0, import_react34.useRef)(null), W2 = (0, import_react34.useRef)(null), C5 = o4(typeof u10 == "string" ? (s17, c14) => {
    let O4 = u10;
    return (s17 == null ? void 0 : s17[O4]) === (c14 == null ? void 0 : c14[O4]);
  } : u10), A6 = (0, import_react34.useCallback)((s17) => u(d13.mode, { [1]: () => L3.some((c14) => C5(c14, s17)), [0]: () => C5(L3, s17) }), [L3]), d13 = (0, import_react34.useMemo)(() => ({ ...T8, value: L3, disabled: i9, mode: R3 ? 1 : 0, orientation: P4, compare: C5, isSelected: A6, optionsPropsRef: x6, labelRef: E9, buttonRef: B3, optionsRef: W2 }), [L3, i9, R3, T8]);
  l(() => {
    T8.dataRef.current = d13;
  }, [d13]), h2([d13.buttonRef, d13.optionsRef], (s17, c14) => {
    var O4;
    o12({ type: 1 }), h(c14, T.Loose) || (s17.preventDefault(), (O4 = d13.buttonRef.current) == null || O4.focus());
  }, d13.listboxState === 0);
  let H7 = (0, import_react34.useMemo)(() => ({ open: d13.listboxState === 0, disabled: i9, value: L3 }), [d13, i9, L3]), ie4 = o4((s17) => {
    let c14 = d13.options.find((O4) => O4.id === s17);
    c14 && X5(c14.dataRef.current.value);
  }), re5 = o4(() => {
    if (d13.activeOptionIndex !== null) {
      let { dataRef: s17, id: c14 } = d13.options[d13.activeOptionIndex];
      X5(s17.current.value), o12({ type: 2, focus: a2.Specific, id: c14 });
    }
  }), ae4 = o4(() => o12({ type: 0 })), le4 = o4(() => o12({ type: 1 })), se5 = o4((s17, c14, O4) => s17 === a2.Specific ? o12({ type: 2, focus: a2.Specific, id: c14, trigger: O4 }) : o12({ type: 2, focus: s17, trigger: O4 })), pe3 = o4((s17, c14) => (o12({ type: 5, id: s17, dataRef: c14 }), () => o12({ type: 6, id: s17 }))), ue5 = o4((s17) => (o12({ type: 7, id: s17 }), () => o12({ type: 7, id: null }))), X5 = o4((s17) => u(d13.mode, { [0]() {
    return y8 == null ? void 0 : y8(s17);
  }, [1]() {
    let c14 = d13.value.slice(), O4 = c14.findIndex((F8) => C5(F8, s17));
    return O4 === -1 ? c14.push(s17) : c14.splice(O4, 1), y8 == null ? void 0 : y8(c14);
  } })), de4 = o4((s17) => o12({ type: 3, value: s17 })), ce4 = o4(() => o12({ type: 4 })), fe4 = (0, import_react34.useMemo)(() => ({ onChange: X5, registerOption: pe3, registerLabel: ue5, goToOption: se5, closeListbox: le4, openListbox: ae4, selectActiveOption: re5, selectOption: ie4, search: de4, clearSearch: ce4 }), []), Te3 = { ref: S10 }, G2 = (0, import_react34.useRef)(null), be5 = p();
  return (0, import_react34.useEffect)(() => {
    G2.current && r9 !== void 0 && be5.addEventListener(G2.current, "reset", () => {
      y8 == null || y8(r9);
    });
  }, [G2, y8]), import_react34.default.createElement(J3.Provider, { value: fe4 }, import_react34.default.createElement(q2.Provider, { value: d13 }, import_react34.default.createElement(c5, { value: u(d13.listboxState, { [0]: d5.Open, [1]: d5.Closed }) }, t17 != null && L3 != null && e2({ [t17]: L3 }).map(([s17, c14], O4) => import_react34.default.createElement(c4, { features: p3.Hidden, ref: O4 === 0 ? (F8) => {
    var Y5;
    G2.current = (Y5 = F8 == null ? void 0 : F8.closest("form")) != null ? Y5 : null;
  } : void 0, ...R({ key: s17, as: "input", type: "hidden", hidden: true, readOnly: true, form: l11, name: s17, value: c14 }) })), X({ ourProps: Te3, theirProps: m11, slot: H7, defaultTag: Ke3, name: "Listbox" }))));
}
var We3 = "button";
function Xe3(e5, a13) {
  var y8;
  let n7 = I(), { id: r9 = `headlessui-listbox-button-${n7}`, ...l11 } = e5, t17 = U2("Listbox.Button"), p7 = _2("Listbox.Button"), u10 = y2(t17.buttonRef, a13), i9 = p(), b7 = o4((T8) => {
    switch (T8.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        T8.preventDefault(), p7.openListbox(), i9.nextFrame(() => {
          t17.value || p7.goToOption(a2.First);
        });
        break;
      case o8.ArrowUp:
        T8.preventDefault(), p7.openListbox(), i9.nextFrame(() => {
          t17.value || p7.goToOption(a2.Last);
        });
        break;
    }
  }), R3 = o4((T8) => {
    switch (T8.key) {
      case o8.Space:
        T8.preventDefault();
        break;
    }
  }), m11 = o4((T8) => {
    if (r2(T8.currentTarget))
      return T8.preventDefault();
    t17.listboxState === 0 ? (p7.closeListbox(), i9.nextFrame(() => {
      var o12;
      return (o12 = t17.buttonRef.current) == null ? void 0 : o12.focus({ preventScroll: true });
    })) : (T8.preventDefault(), p7.openListbox());
  }), P4 = i2(() => {
    if (t17.labelId)
      return [t17.labelId, r9].join(" ");
  }, [t17.labelId, r9]), S10 = (0, import_react34.useMemo)(() => ({ open: t17.listboxState === 0, disabled: t17.disabled, value: t17.value }), [t17]), L3 = { ref: u10, id: r9, type: s7(e5, t17.buttonRef), "aria-haspopup": "listbox", "aria-controls": (y8 = t17.optionsRef.current) == null ? void 0 : y8.id, "aria-expanded": t17.listboxState === 0, "aria-labelledby": P4, disabled: t17.disabled, onKeyDown: b7, onKeyUp: R3, onClick: m11 };
  return X({ ourProps: L3, theirProps: l11, slot: S10, defaultTag: We3, name: "Listbox.Button" });
}
var $e3 = "label";
function ze3(e5, a13) {
  let n7 = I(), { id: r9 = `headlessui-listbox-label-${n7}`, ...l11 } = e5, t17 = U2("Listbox.Label"), p7 = _2("Listbox.Label"), u10 = y2(t17.labelRef, a13);
  l(() => p7.registerLabel(r9), [r9]);
  let i9 = o4(() => {
    var m11;
    return (m11 = t17.buttonRef.current) == null ? void 0 : m11.focus({ preventScroll: true });
  }), b7 = (0, import_react34.useMemo)(() => ({ open: t17.listboxState === 0, disabled: t17.disabled }), [t17]);
  return X({ ourProps: { ref: u10, id: r9, onClick: i9 }, theirProps: l11, slot: b7, defaultTag: $e3, name: "Listbox.Label" });
}
var Je3 = "ul";
var qe3 = S2.RenderStrategy | S2.Static;
function Ye3(e5, a13) {
  var T8;
  let n7 = I(), { id: r9 = `headlessui-listbox-options-${n7}`, ...l11 } = e5, t17 = U2("Listbox.Options"), p7 = _2("Listbox.Options"), u10 = y2(t17.optionsRef, a13), i9 = p(), b7 = p(), R3 = C(), m11 = (() => R3 !== null ? (R3 & d5.Open) === d5.Open : t17.listboxState === 0)();
  (0, import_react34.useEffect)(() => {
    var x6;
    let o12 = t17.optionsRef.current;
    o12 && t17.listboxState === 0 && o12 !== ((x6 = e(o12)) == null ? void 0 : x6.activeElement) && o12.focus({ preventScroll: true });
  }, [t17.listboxState, t17.optionsRef]);
  let P4 = o4((o12) => {
    switch (b7.dispose(), o12.key) {
      case o8.Space:
        if (t17.searchQuery !== "")
          return o12.preventDefault(), o12.stopPropagation(), p7.search(o12.key);
      case o8.Enter:
        if (o12.preventDefault(), o12.stopPropagation(), t17.activeOptionIndex !== null) {
          let { dataRef: x6 } = t17.options[t17.activeOptionIndex];
          p7.onChange(x6.current.value);
        }
        t17.mode === 0 && (p7.closeListbox(), o2().nextFrame(() => {
          var x6;
          return (x6 = t17.buttonRef.current) == null ? void 0 : x6.focus({ preventScroll: true });
        }));
        break;
      case u(t17.orientation, { vertical: o8.ArrowDown, horizontal: o8.ArrowRight }):
        return o12.preventDefault(), o12.stopPropagation(), p7.goToOption(a2.Next);
      case u(t17.orientation, { vertical: o8.ArrowUp, horizontal: o8.ArrowLeft }):
        return o12.preventDefault(), o12.stopPropagation(), p7.goToOption(a2.Previous);
      case o8.Home:
      case o8.PageUp:
        return o12.preventDefault(), o12.stopPropagation(), p7.goToOption(a2.First);
      case o8.End:
      case o8.PageDown:
        return o12.preventDefault(), o12.stopPropagation(), p7.goToOption(a2.Last);
      case o8.Escape:
        return o12.preventDefault(), o12.stopPropagation(), p7.closeListbox(), i9.nextFrame(() => {
          var x6;
          return (x6 = t17.buttonRef.current) == null ? void 0 : x6.focus({ preventScroll: true });
        });
      case o8.Tab:
        o12.preventDefault(), o12.stopPropagation();
        break;
      default:
        o12.key.length === 1 && (p7.search(o12.key), b7.setTimeout(() => p7.clearSearch(), 350));
        break;
    }
  }), S10 = i2(() => {
    var o12, x6, E9;
    return (E9 = (o12 = t17.labelRef.current) == null ? void 0 : o12.id) != null ? E9 : (x6 = t17.buttonRef.current) == null ? void 0 : x6.id;
  }, [t17.labelRef.current, t17.buttonRef.current]), L3 = (0, import_react34.useMemo)(() => ({ open: t17.listboxState === 0 }), [t17]), y8 = { "aria-activedescendant": t17.activeOptionIndex === null || (T8 = t17.options[t17.activeOptionIndex]) == null ? void 0 : T8.id, "aria-multiselectable": t17.mode === 1 ? true : void 0, "aria-labelledby": S10, "aria-orientation": t17.orientation, id: r9, onKeyDown: P4, role: "listbox", tabIndex: 0, ref: u10 };
  return X({ ourProps: y8, theirProps: l11, slot: L3, defaultTag: Je3, features: qe3, visible: m11, name: "Listbox.Options" });
}
var Ze3 = "li";
function et(e5, a13) {
  let n7 = I(), { id: r9 = `headlessui-listbox-option-${n7}`, disabled: l11 = false, value: t17, ...p7 } = e5, u10 = U2("Listbox.Option"), i9 = _2("Listbox.Option"), b7 = u10.activeOptionIndex !== null ? u10.options[u10.activeOptionIndex].id === r9 : false, R3 = u10.isSelected(t17), m11 = (0, import_react34.useRef)(null), P4 = b4(m11), S10 = s2({ disabled: l11, value: t17, domRef: m11, get textValue() {
    return P4();
  } }), L3 = y2(a13, m11);
  l(() => {
    if (u10.listboxState !== 0 || !b7 || u10.activationTrigger === 0)
      return;
    let A6 = o2();
    return A6.requestAnimationFrame(() => {
      var d13, H7;
      (H7 = (d13 = m11.current) == null ? void 0 : d13.scrollIntoView) == null || H7.call(d13, { block: "nearest" });
    }), A6.dispose;
  }, [m11, b7, u10.listboxState, u10.activationTrigger, u10.activeOptionIndex]), l(() => i9.registerOption(r9, S10), [S10, r9]);
  let y8 = o4((A6) => {
    if (l11)
      return A6.preventDefault();
    i9.onChange(t17), u10.mode === 0 && (i9.closeListbox(), o2().nextFrame(() => {
      var d13;
      return (d13 = u10.buttonRef.current) == null ? void 0 : d13.focus({ preventScroll: true });
    }));
  }), T8 = o4(() => {
    if (l11)
      return i9.goToOption(a2.Nothing);
    i9.goToOption(a2.Specific, r9);
  }), o12 = u3(), x6 = o4((A6) => o12.update(A6)), E9 = o4((A6) => {
    o12.wasMoved(A6) && (l11 || b7 || i9.goToOption(a2.Specific, r9, 0));
  }), B3 = o4((A6) => {
    o12.wasMoved(A6) && (l11 || b7 && i9.goToOption(a2.Nothing));
  }), W2 = (0, import_react34.useMemo)(() => ({ active: b7, selected: R3, disabled: l11 }), [b7, R3, l11]);
  return X({ ourProps: { id: r9, ref: L3, role: "option", tabIndex: l11 === true ? void 0 : -1, "aria-disabled": l11 === true ? true : void 0, "aria-selected": R3, disabled: void 0, onClick: y8, onFocus: T8, onPointerEnter: x6, onMouseEnter: x6, onPointerMove: E9, onMouseMove: E9, onPointerLeave: B3, onMouseLeave: B3 }, theirProps: p7, slot: W2, defaultTag: Ze3, name: "Listbox.Option" });
}
var tt = D2(Qe3);
var ot = D2(Xe3);
var nt = D2(ze3);
var it = D2(Ye3);
var rt = D2(et);
var Nt = Object.assign(tt, { Button: ot, Label: nt, Options: it, Option: rt });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react35 = __toESM(require_react(), 1);
var me2 = ((r9) => (r9[r9.Open = 0] = "Open", r9[r9.Closed = 1] = "Closed", r9))(me2 || {});
var de = ((r9) => (r9[r9.Pointer = 0] = "Pointer", r9[r9.Other = 1] = "Other", r9))(de || {});
var fe = ((a13) => (a13[a13.OpenMenu = 0] = "OpenMenu", a13[a13.CloseMenu = 1] = "CloseMenu", a13[a13.GoToItem = 2] = "GoToItem", a13[a13.Search = 3] = "Search", a13[a13.ClearSearch = 4] = "ClearSearch", a13[a13.RegisterItem = 5] = "RegisterItem", a13[a13.UnregisterItem = 6] = "UnregisterItem", a13))(fe || {});
function w5(e5, u10 = (r9) => r9) {
  let r9 = e5.activeItemIndex !== null ? e5.items[e5.activeItemIndex] : null, i9 = I2(u10(e5.items.slice()), (t17) => t17.dataRef.current.domRef.current), s17 = r9 ? i9.indexOf(r9) : null;
  return s17 === -1 && (s17 = null), { items: i9, activeItemIndex: s17 };
}
var Te = { [1](e5) {
  return e5.menuState === 1 ? e5 : { ...e5, activeItemIndex: null, menuState: 1 };
}, [0](e5) {
  return e5.menuState === 0 ? e5 : { ...e5, __demoMode: false, menuState: 0 };
}, [2]: (e5, u10) => {
  var s17;
  let r9 = w5(e5), i9 = x(u10, { resolveItems: () => r9.items, resolveActiveIndex: () => r9.activeItemIndex, resolveId: (t17) => t17.id, resolveDisabled: (t17) => t17.dataRef.current.disabled });
  return { ...e5, ...r9, searchQuery: "", activeItemIndex: i9, activationTrigger: (s17 = u10.trigger) != null ? s17 : 1 };
}, [3]: (e5, u10) => {
  let i9 = e5.searchQuery !== "" ? 0 : 1, s17 = e5.searchQuery + u10.value.toLowerCase(), o12 = (e5.activeItemIndex !== null ? e5.items.slice(e5.activeItemIndex + i9).concat(e5.items.slice(0, e5.activeItemIndex + i9)) : e5.items).find((l11) => {
    var m11;
    return ((m11 = l11.dataRef.current.textValue) == null ? void 0 : m11.startsWith(s17)) && !l11.dataRef.current.disabled;
  }), a13 = o12 ? e5.items.indexOf(o12) : -1;
  return a13 === -1 || a13 === e5.activeItemIndex ? { ...e5, searchQuery: s17 } : { ...e5, searchQuery: s17, activeItemIndex: a13, activationTrigger: 1 };
}, [4](e5) {
  return e5.searchQuery === "" ? e5 : { ...e5, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e5, u10) => {
  let r9 = w5(e5, (i9) => [...i9, { id: u10.id, dataRef: u10.dataRef }]);
  return { ...e5, ...r9 };
}, [6]: (e5, u10) => {
  let r9 = w5(e5, (i9) => {
    let s17 = i9.findIndex((t17) => t17.id === u10.id);
    return s17 !== -1 && i9.splice(s17, 1), i9;
  });
  return { ...e5, ...r9, activationTrigger: 1 };
} };
var U3 = (0, import_react35.createContext)(null);
U3.displayName = "MenuContext";
function O2(e5) {
  let u10 = (0, import_react35.useContext)(U3);
  if (u10 === null) {
    let r9 = new Error(`<${e5} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r9, O2), r9;
  }
  return u10;
}
function ye3(e5, u10) {
  return u(u10.type, Te, e5, u10);
}
var Ie2 = import_react35.Fragment;
function Me2(e5, u10) {
  let { __demoMode: r9 = false, ...i9 } = e5, s17 = (0, import_react35.useReducer)(ye3, { __demoMode: r9, menuState: r9 ? 0 : 1, buttonRef: (0, import_react35.createRef)(), itemsRef: (0, import_react35.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t17, itemsRef: o12, buttonRef: a13 }, l11] = s17, m11 = y2(u10);
  h2([a13, o12], (g6, R3) => {
    var p7;
    l11({ type: 1 }), h(R3, T.Loose) || (g6.preventDefault(), (p7 = a13.current) == null || p7.focus());
  }, t17 === 0);
  let I6 = o4(() => {
    l11({ type: 1 });
  }), A6 = (0, import_react35.useMemo)(() => ({ open: t17 === 0, close: I6 }), [t17, I6]), f14 = { ref: m11 };
  return import_react35.default.createElement(U3.Provider, { value: s17 }, import_react35.default.createElement(c5, { value: u(t17, { [0]: d5.Open, [1]: d5.Closed }) }, X({ ourProps: f14, theirProps: i9, slot: A6, defaultTag: Ie2, name: "Menu" })));
}
var ge4 = "button";
function Re(e5, u10) {
  var R3;
  let r9 = I(), { id: i9 = `headlessui-menu-button-${r9}`, ...s17 } = e5, [t17, o12] = O2("Menu.Button"), a13 = y2(t17.buttonRef, u10), l11 = p(), m11 = o4((p7) => {
    switch (p7.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        p7.preventDefault(), p7.stopPropagation(), o12({ type: 0 }), l11.nextFrame(() => o12({ type: 2, focus: a2.First }));
        break;
      case o8.ArrowUp:
        p7.preventDefault(), p7.stopPropagation(), o12({ type: 0 }), l11.nextFrame(() => o12({ type: 2, focus: a2.Last }));
        break;
    }
  }), I6 = o4((p7) => {
    switch (p7.key) {
      case o8.Space:
        p7.preventDefault();
        break;
    }
  }), A6 = o4((p7) => {
    if (r2(p7.currentTarget))
      return p7.preventDefault();
    e5.disabled || (t17.menuState === 0 ? (o12({ type: 1 }), l11.nextFrame(() => {
      var M11;
      return (M11 = t17.buttonRef.current) == null ? void 0 : M11.focus({ preventScroll: true });
    })) : (p7.preventDefault(), o12({ type: 0 })));
  }), f14 = (0, import_react35.useMemo)(() => ({ open: t17.menuState === 0 }), [t17]), g6 = { ref: a13, id: i9, type: s7(e5, t17.buttonRef), "aria-haspopup": "menu", "aria-controls": (R3 = t17.itemsRef.current) == null ? void 0 : R3.id, "aria-expanded": t17.menuState === 0, onKeyDown: m11, onKeyUp: I6, onClick: A6 };
  return X({ ourProps: g6, theirProps: s17, slot: f14, defaultTag: ge4, name: "Menu.Button" });
}
var Ae = "div";
var be2 = S2.RenderStrategy | S2.Static;
function Ee(e5, u10) {
  var M11, b7;
  let r9 = I(), { id: i9 = `headlessui-menu-items-${r9}`, ...s17 } = e5, [t17, o12] = O2("Menu.Items"), a13 = y2(t17.itemsRef, u10), l11 = n3(t17.itemsRef), m11 = p(), I6 = C(), A6 = (() => I6 !== null ? (I6 & d5.Open) === d5.Open : t17.menuState === 0)();
  (0, import_react35.useEffect)(() => {
    let n7 = t17.itemsRef.current;
    n7 && t17.menuState === 0 && n7 !== (l11 == null ? void 0 : l11.activeElement) && n7.focus({ preventScroll: true });
  }, [t17.menuState, t17.itemsRef, l11]), F2({ container: t17.itemsRef.current, enabled: t17.menuState === 0, accept(n7) {
    return n7.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n7.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n7) {
    n7.setAttribute("role", "none");
  } });
  let f14 = o4((n7) => {
    var E9, P4;
    switch (m11.dispose(), n7.key) {
      case o8.Space:
        if (t17.searchQuery !== "")
          return n7.preventDefault(), n7.stopPropagation(), o12({ type: 3, value: n7.key });
      case o8.Enter:
        if (n7.preventDefault(), n7.stopPropagation(), o12({ type: 1 }), t17.activeItemIndex !== null) {
          let { dataRef: S10 } = t17.items[t17.activeItemIndex];
          (P4 = (E9 = S10.current) == null ? void 0 : E9.domRef.current) == null || P4.click();
        }
        D(t17.buttonRef.current);
        break;
      case o8.ArrowDown:
        return n7.preventDefault(), n7.stopPropagation(), o12({ type: 2, focus: a2.Next });
      case o8.ArrowUp:
        return n7.preventDefault(), n7.stopPropagation(), o12({ type: 2, focus: a2.Previous });
      case o8.Home:
      case o8.PageUp:
        return n7.preventDefault(), n7.stopPropagation(), o12({ type: 2, focus: a2.First });
      case o8.End:
      case o8.PageDown:
        return n7.preventDefault(), n7.stopPropagation(), o12({ type: 2, focus: a2.Last });
      case o8.Escape:
        n7.preventDefault(), n7.stopPropagation(), o12({ type: 1 }), o2().nextFrame(() => {
          var S10;
          return (S10 = t17.buttonRef.current) == null ? void 0 : S10.focus({ preventScroll: true });
        });
        break;
      case o8.Tab:
        n7.preventDefault(), n7.stopPropagation(), o12({ type: 1 }), o2().nextFrame(() => {
          _(t17.buttonRef.current, n7.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n7.key.length === 1 && (o12({ type: 3, value: n7.key }), m11.setTimeout(() => o12({ type: 4 }), 350));
        break;
    }
  }), g6 = o4((n7) => {
    switch (n7.key) {
      case o8.Space:
        n7.preventDefault();
        break;
    }
  }), R3 = (0, import_react35.useMemo)(() => ({ open: t17.menuState === 0 }), [t17]), p7 = { "aria-activedescendant": t17.activeItemIndex === null || (M11 = t17.items[t17.activeItemIndex]) == null ? void 0 : M11.id, "aria-labelledby": (b7 = t17.buttonRef.current) == null ? void 0 : b7.id, id: i9, onKeyDown: f14, onKeyUp: g6, role: "menu", tabIndex: 0, ref: a13 };
  return X({ ourProps: p7, theirProps: s17, slot: R3, defaultTag: Ae, features: be2, visible: A6, name: "Menu.Items" });
}
var Se = import_react35.Fragment;
function Pe2(e5, u10) {
  let r9 = I(), { id: i9 = `headlessui-menu-item-${r9}`, disabled: s17 = false, ...t17 } = e5, [o12, a13] = O2("Menu.Item"), l11 = o12.activeItemIndex !== null ? o12.items[o12.activeItemIndex].id === i9 : false, m11 = (0, import_react35.useRef)(null), I6 = y2(u10, m11);
  l(() => {
    if (o12.__demoMode || o12.menuState !== 0 || !l11 || o12.activationTrigger === 0)
      return;
    let T8 = o2();
    return T8.requestAnimationFrame(() => {
      var v5, B3;
      (B3 = (v5 = m11.current) == null ? void 0 : v5.scrollIntoView) == null || B3.call(v5, { block: "nearest" });
    }), T8.dispose;
  }, [o12.__demoMode, m11, l11, o12.menuState, o12.activationTrigger, o12.activeItemIndex]);
  let A6 = b4(m11), f14 = (0, import_react35.useRef)({ disabled: s17, domRef: m11, get textValue() {
    return A6();
  } });
  l(() => {
    f14.current.disabled = s17;
  }, [f14, s17]), l(() => (a13({ type: 5, id: i9, dataRef: f14 }), () => a13({ type: 6, id: i9 })), [f14, i9]);
  let g6 = o4(() => {
    a13({ type: 1 });
  }), R3 = o4((T8) => {
    if (s17)
      return T8.preventDefault();
    a13({ type: 1 }), D(o12.buttonRef.current);
  }), p7 = o4(() => {
    if (s17)
      return a13({ type: 2, focus: a2.Nothing });
    a13({ type: 2, focus: a2.Specific, id: i9 });
  }), M11 = u3(), b7 = o4((T8) => M11.update(T8)), n7 = o4((T8) => {
    M11.wasMoved(T8) && (s17 || l11 || a13({ type: 2, focus: a2.Specific, id: i9, trigger: 0 }));
  }), E9 = o4((T8) => {
    M11.wasMoved(T8) && (s17 || l11 && a13({ type: 2, focus: a2.Nothing }));
  }), P4 = (0, import_react35.useMemo)(() => ({ active: l11, disabled: s17, close: g6 }), [l11, s17, g6]);
  return X({ ourProps: { id: i9, ref: I6, role: "menuitem", tabIndex: s17 === true ? void 0 : -1, "aria-disabled": s17 === true ? true : void 0, disabled: void 0, onClick: R3, onFocus: p7, onPointerEnter: b7, onMouseEnter: b7, onPointerMove: n7, onMouseMove: n7, onPointerLeave: E9, onMouseLeave: E9 }, theirProps: t17, slot: P4, defaultTag: Se, name: "Menu.Item" });
}
var ve2 = D2(Me2);
var xe3 = D2(Re);
var he = D2(Ee);
var De2 = D2(Pe2);
var it2 = Object.assign(ve2, { Button: xe3, Items: he, Item: De2 });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react36 = __toESM(require_react(), 1);
var he2 = ((u10) => (u10[u10.Open = 0] = "Open", u10[u10.Closed = 1] = "Closed", u10))(he2 || {});
var He4 = ((e5) => (e5[e5.TogglePopover = 0] = "TogglePopover", e5[e5.ClosePopover = 1] = "ClosePopover", e5[e5.SetButton = 2] = "SetButton", e5[e5.SetButtonId = 3] = "SetButtonId", e5[e5.SetPanel = 4] = "SetPanel", e5[e5.SetPanelId = 5] = "SetPanelId", e5))(He4 || {});
var _e2 = { [0]: (t17) => {
  let o12 = { ...t17, popoverState: u(t17.popoverState, { [0]: 1, [1]: 0 }) };
  return o12.popoverState === 0 && (o12.__demoMode = false), o12;
}, [1](t17) {
  return t17.popoverState === 1 ? t17 : { ...t17, popoverState: 1 };
}, [2](t17, o12) {
  return t17.button === o12.button ? t17 : { ...t17, button: o12.button };
}, [3](t17, o12) {
  return t17.buttonId === o12.buttonId ? t17 : { ...t17, buttonId: o12.buttonId };
}, [4](t17, o12) {
  return t17.panel === o12.panel ? t17 : { ...t17, panel: o12.panel };
}, [5](t17, o12) {
  return t17.panelId === o12.panelId ? t17 : { ...t17, panelId: o12.panelId };
} };
var ue2 = (0, import_react36.createContext)(null);
ue2.displayName = "PopoverContext";
function oe2(t17) {
  let o12 = (0, import_react36.useContext)(ue2);
  if (o12 === null) {
    let u10 = new Error(`<${t17} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u10, oe2), u10;
  }
  return o12;
}
var ie3 = (0, import_react36.createContext)(null);
ie3.displayName = "PopoverAPIContext";
function fe2(t17) {
  let o12 = (0, import_react36.useContext)(ie3);
  if (o12 === null) {
    let u10 = new Error(`<${t17} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u10, fe2), u10;
  }
  return o12;
}
var Pe3 = (0, import_react36.createContext)(null);
Pe3.displayName = "PopoverGroupContext";
function Ee2() {
  return (0, import_react36.useContext)(Pe3);
}
var re2 = (0, import_react36.createContext)(null);
re2.displayName = "PopoverPanelContext";
function Ge4() {
  return (0, import_react36.useContext)(re2);
}
function Ne4(t17, o12) {
  return u(o12.type, _e2, t17, o12);
}
var ke = "div";
function we3(t17, o12) {
  var D6;
  let { __demoMode: u10 = false, ...R3 } = t17, O4 = (0, import_react36.useRef)(null), n7 = y2(o12, T2((l11) => {
    O4.current = l11;
  })), e5 = (0, import_react36.useRef)([]), v5 = (0, import_react36.useReducer)(Ne4, { __demoMode: u10, popoverState: u10 ? 0 : 1, buttons: e5, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react36.createRef)(), afterPanelSentinel: (0, import_react36.createRef)() }), [{ popoverState: P4, button: s17, buttonId: I6, panel: p7, panelId: T8, beforePanelSentinel: m11, afterPanelSentinel: S10 }, i9] = v5, a13 = n3((D6 = O4.current) != null ? D6 : s17), E9 = (0, import_react36.useMemo)(() => {
    if (!s17 || !p7)
      return false;
    for (let K4 of document.querySelectorAll("body > *"))
      if (Number(K4 == null ? void 0 : K4.contains(s17)) ^ Number(K4 == null ? void 0 : K4.contains(p7)))
        return true;
    let l11 = f(), F8 = l11.indexOf(s17), q5 = (F8 + l11.length - 1) % l11.length, W2 = (F8 + 1) % l11.length, z5 = l11[q5], be5 = l11[W2];
    return !p7.contains(z5) && !p7.contains(be5);
  }, [s17, p7]), C5 = s2(I6), H7 = s2(T8), x6 = (0, import_react36.useMemo)(() => ({ buttonId: C5, panelId: H7, close: () => i9({ type: 1 }) }), [C5, H7, i9]), M11 = Ee2(), h11 = M11 == null ? void 0 : M11.registerPopover, f14 = o4(() => {
    var l11;
    return (l11 = M11 == null ? void 0 : M11.isFocusWithinPopoverGroup()) != null ? l11 : (a13 == null ? void 0 : a13.activeElement) && ((s17 == null ? void 0 : s17.contains(a13.activeElement)) || (p7 == null ? void 0 : p7.contains(a13.activeElement)));
  });
  (0, import_react36.useEffect)(() => h11 == null ? void 0 : h11(x6), [h11, x6]);
  let [y8, b7] = ae2(), d13 = j3({ mainTreeNodeRef: M11 == null ? void 0 : M11.mainTreeNodeRef, portals: y8, defaultContainers: [s17, p7] });
  E3(a13 == null ? void 0 : a13.defaultView, "focus", (l11) => {
    var F8, q5, W2, z5;
    l11.target !== window && l11.target instanceof HTMLElement && P4 === 0 && (f14() || s17 && p7 && (d13.contains(l11.target) || (q5 = (F8 = m11.current) == null ? void 0 : F8.contains) != null && q5.call(F8, l11.target) || (z5 = (W2 = S10.current) == null ? void 0 : W2.contains) != null && z5.call(W2, l11.target) || i9({ type: 1 })));
  }, true), h2(d13.resolveContainers, (l11, F8) => {
    i9({ type: 1 }), h(F8, T.Loose) || (l11.preventDefault(), s17 == null || s17.focus());
  }, P4 === 0);
  let L3 = o4((l11) => {
    i9({ type: 1 });
    let F8 = (() => l11 ? l11 instanceof HTMLElement ? l11 : "current" in l11 && l11.current instanceof HTMLElement ? l11.current : s17 : s17)();
    F8 == null || F8.focus();
  }), r9 = (0, import_react36.useMemo)(() => ({ close: L3, isPortalled: E9 }), [L3, E9]), c14 = (0, import_react36.useMemo)(() => ({ open: P4 === 0, close: L3 }), [P4, L3]), B3 = { ref: n7 };
  return import_react36.default.createElement(re2.Provider, { value: null }, import_react36.default.createElement(ue2.Provider, { value: v5 }, import_react36.default.createElement(ie3.Provider, { value: r9 }, import_react36.default.createElement(c5, { value: u(P4, { [0]: d5.Open, [1]: d5.Closed }) }, import_react36.default.createElement(b7, null, X({ ourProps: B3, theirProps: R3, slot: c14, defaultTag: ke, name: "Popover" }), import_react36.default.createElement(d13.MainTreeNode, null))))));
}
var Ue3 = "button";
function We4(t17, o12) {
  let u10 = I(), { id: R3 = `headlessui-popover-button-${u10}`, ...O4 } = t17, [n7, e5] = oe2("Popover.Button"), { isPortalled: v5 } = fe2("Popover.Button"), P4 = (0, import_react36.useRef)(null), s17 = `headlessui-focus-sentinel-${I()}`, I6 = Ee2(), p7 = I6 == null ? void 0 : I6.closeOthers, m11 = Ge4() !== null;
  (0, import_react36.useEffect)(() => {
    if (!m11)
      return e5({ type: 3, buttonId: R3 }), () => {
        e5({ type: 3, buttonId: null });
      };
  }, [m11, R3, e5]);
  let [S10] = (0, import_react36.useState)(() => Symbol()), i9 = y2(P4, o12, m11 ? null : (r9) => {
    if (r9)
      n7.buttons.current.push(S10);
    else {
      let c14 = n7.buttons.current.indexOf(S10);
      c14 !== -1 && n7.buttons.current.splice(c14, 1);
    }
    n7.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), r9 && e5({ type: 2, button: r9 });
  }), a13 = y2(P4, o12), E9 = n3(P4), C5 = o4((r9) => {
    var c14, B3, D6;
    if (m11) {
      if (n7.popoverState === 1)
        return;
      switch (r9.key) {
        case o8.Space:
        case o8.Enter:
          r9.preventDefault(), (B3 = (c14 = r9.target).click) == null || B3.call(c14), e5({ type: 1 }), (D6 = n7.button) == null || D6.focus();
          break;
      }
    } else
      switch (r9.key) {
        case o8.Space:
        case o8.Enter:
          r9.preventDefault(), r9.stopPropagation(), n7.popoverState === 1 && (p7 == null || p7(n7.buttonId)), e5({ type: 0 });
          break;
        case o8.Escape:
          if (n7.popoverState !== 0)
            return p7 == null ? void 0 : p7(n7.buttonId);
          if (!P4.current || E9 != null && E9.activeElement && !P4.current.contains(E9.activeElement))
            return;
          r9.preventDefault(), r9.stopPropagation(), e5({ type: 1 });
          break;
      }
  }), H7 = o4((r9) => {
    m11 || r9.key === o8.Space && r9.preventDefault();
  }), x6 = o4((r9) => {
    var c14, B3;
    r2(r9.currentTarget) || t17.disabled || (m11 ? (e5({ type: 1 }), (c14 = n7.button) == null || c14.focus()) : (r9.preventDefault(), r9.stopPropagation(), n7.popoverState === 1 && (p7 == null || p7(n7.buttonId)), e5({ type: 0 }), (B3 = n7.button) == null || B3.focus()));
  }), M11 = o4((r9) => {
    r9.preventDefault(), r9.stopPropagation();
  }), h11 = n7.popoverState === 0, f14 = (0, import_react36.useMemo)(() => ({ open: h11 }), [h11]), y8 = s7(t17, P4), b7 = m11 ? { ref: a13, type: y8, onKeyDown: C5, onClick: x6 } : { ref: i9, id: n7.buttonId, type: y8, "aria-expanded": n7.popoverState === 0, "aria-controls": n7.panel ? n7.panelId : void 0, onKeyDown: C5, onKeyUp: H7, onClick: x6, onMouseDown: M11 }, d13 = n4(), L3 = o4(() => {
    let r9 = n7.panel;
    if (!r9)
      return;
    function c14() {
      u(d13.current, { [s10.Forwards]: () => O(r9, M.First), [s10.Backwards]: () => O(r9, M.Last) }) === N.Error && O(f().filter((D6) => D6.dataset.headlessuiFocusGuard !== "true"), u(d13.current, { [s10.Forwards]: M.Next, [s10.Backwards]: M.Previous }), { relativeTo: n7.button });
    }
    c14();
  });
  return import_react36.default.createElement(import_react36.default.Fragment, null, X({ ourProps: b7, theirProps: O4, slot: f14, defaultTag: Ue3, name: "Popover.Button" }), h11 && !m11 && v5 && import_react36.default.createElement(c4, { id: s17, features: p3.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: L3 }));
}
var Ke4 = "div";
var je4 = S2.RenderStrategy | S2.Static;
function Ve3(t17, o12) {
  let u10 = I(), { id: R3 = `headlessui-popover-overlay-${u10}`, ...O4 } = t17, [{ popoverState: n7 }, e5] = oe2("Popover.Overlay"), v5 = y2(o12), P4 = C(), s17 = (() => P4 !== null ? (P4 & d5.Open) === d5.Open : n7 === 0)(), I6 = o4((m11) => {
    if (r2(m11.currentTarget))
      return m11.preventDefault();
    e5({ type: 1 });
  }), p7 = (0, import_react36.useMemo)(() => ({ open: n7 === 0 }), [n7]);
  return X({ ourProps: { ref: v5, id: R3, "aria-hidden": true, onClick: I6 }, theirProps: O4, slot: p7, defaultTag: Ke4, features: je4, visible: s17, name: "Popover.Overlay" });
}
var $e4 = "div";
var Je4 = S2.RenderStrategy | S2.Static;
function Xe4(t17, o12) {
  let u10 = I(), { id: R3 = `headlessui-popover-panel-${u10}`, focus: O4 = false, ...n7 } = t17, [e5, v5] = oe2("Popover.Panel"), { close: P4, isPortalled: s17 } = fe2("Popover.Panel"), I6 = `headlessui-focus-sentinel-before-${I()}`, p7 = `headlessui-focus-sentinel-after-${I()}`, T8 = (0, import_react36.useRef)(null), m11 = y2(T8, o12, (f14) => {
    v5({ type: 4, panel: f14 });
  }), S10 = n3(T8);
  l(() => (v5({ type: 5, panelId: R3 }), () => {
    v5({ type: 5, panelId: null });
  }), [R3, v5]);
  let i9 = C(), a13 = (() => i9 !== null ? (i9 & d5.Open) === d5.Open : e5.popoverState === 0)(), E9 = o4((f14) => {
    var y8;
    switch (f14.key) {
      case o8.Escape:
        if (e5.popoverState !== 0 || !T8.current || S10 != null && S10.activeElement && !T8.current.contains(S10.activeElement))
          return;
        f14.preventDefault(), f14.stopPropagation(), v5({ type: 1 }), (y8 = e5.button) == null || y8.focus();
        break;
    }
  });
  (0, import_react36.useEffect)(() => {
    var f14;
    t17.static || e5.popoverState === 1 && ((f14 = t17.unmount) == null || f14) && v5({ type: 4, panel: null });
  }, [e5.popoverState, t17.unmount, t17.static, v5]), (0, import_react36.useEffect)(() => {
    if (e5.__demoMode || !O4 || e5.popoverState !== 0 || !T8.current)
      return;
    let f14 = S10 == null ? void 0 : S10.activeElement;
    T8.current.contains(f14) || O(T8.current, M.First);
  }, [e5.__demoMode, O4, T8, e5.popoverState]);
  let C5 = (0, import_react36.useMemo)(() => ({ open: e5.popoverState === 0, close: P4 }), [e5, P4]), H7 = { ref: m11, id: R3, onKeyDown: E9, onBlur: O4 && e5.popoverState === 0 ? (f14) => {
    var b7, d13, L3, r9, c14;
    let y8 = f14.relatedTarget;
    y8 && T8.current && ((b7 = T8.current) != null && b7.contains(y8) || (v5({ type: 1 }), ((L3 = (d13 = e5.beforePanelSentinel.current) == null ? void 0 : d13.contains) != null && L3.call(d13, y8) || (c14 = (r9 = e5.afterPanelSentinel.current) == null ? void 0 : r9.contains) != null && c14.call(r9, y8)) && y8.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1 }, x6 = n4(), M11 = o4(() => {
    let f14 = T8.current;
    if (!f14)
      return;
    function y8() {
      u(x6.current, { [s10.Forwards]: () => {
        var d13;
        O(f14, M.First) === N.Error && ((d13 = e5.afterPanelSentinel.current) == null || d13.focus());
      }, [s10.Backwards]: () => {
        var b7;
        (b7 = e5.button) == null || b7.focus({ preventScroll: true });
      } });
    }
    y8();
  }), h11 = o4(() => {
    let f14 = T8.current;
    if (!f14)
      return;
    function y8() {
      u(x6.current, { [s10.Forwards]: () => {
        var B3;
        if (!e5.button)
          return;
        let b7 = f(), d13 = b7.indexOf(e5.button), L3 = b7.slice(0, d13 + 1), c14 = [...b7.slice(d13 + 1), ...L3];
        for (let D6 of c14.slice())
          if (D6.dataset.headlessuiFocusGuard === "true" || (B3 = e5.panel) != null && B3.contains(D6)) {
            let l11 = c14.indexOf(D6);
            l11 !== -1 && c14.splice(l11, 1);
          }
        O(c14, M.First, { sorted: false });
      }, [s10.Backwards]: () => {
        var d13;
        O(f14, M.Previous) === N.Error && ((d13 = e5.button) == null || d13.focus());
      } });
    }
    y8();
  });
  return import_react36.default.createElement(re2.Provider, { value: R3 }, a13 && s17 && import_react36.default.createElement(c4, { id: I6, ref: e5.beforePanelSentinel, features: p3.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: M11 }), X({ ourProps: H7, theirProps: n7, slot: C5, defaultTag: $e4, features: Je4, visible: a13, name: "Popover.Panel" }), a13 && s17 && import_react36.default.createElement(c4, { id: p7, ref: e5.afterPanelSentinel, features: p3.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: h11 }));
}
var Ye4 = "div";
function qe4(t17, o12) {
  let u10 = (0, import_react36.useRef)(null), R3 = y2(u10, o12), [O4, n7] = (0, import_react36.useState)([]), e5 = y5(), v5 = o4((i9) => {
    n7((a13) => {
      let E9 = a13.indexOf(i9);
      if (E9 !== -1) {
        let C5 = a13.slice();
        return C5.splice(E9, 1), C5;
      }
      return a13;
    });
  }), P4 = o4((i9) => (n7((a13) => [...a13, i9]), () => v5(i9))), s17 = o4(() => {
    var E9;
    let i9 = e(u10);
    if (!i9)
      return false;
    let a13 = i9.activeElement;
    return (E9 = u10.current) != null && E9.contains(a13) ? true : O4.some((C5) => {
      var H7, x6;
      return ((H7 = i9.getElementById(C5.buttonId.current)) == null ? void 0 : H7.contains(a13)) || ((x6 = i9.getElementById(C5.panelId.current)) == null ? void 0 : x6.contains(a13));
    });
  }), I6 = o4((i9) => {
    for (let a13 of O4)
      a13.buttonId.current !== i9 && a13.close();
  }), p7 = (0, import_react36.useMemo)(() => ({ registerPopover: P4, unregisterPopover: v5, isFocusWithinPopoverGroup: s17, closeOthers: I6, mainTreeNodeRef: e5.mainTreeNodeRef }), [P4, v5, s17, I6, e5.mainTreeNodeRef]), T8 = (0, import_react36.useMemo)(() => ({}), []), m11 = t17, S10 = { ref: R3 };
  return import_react36.default.createElement(Pe3.Provider, { value: p7 }, X({ ourProps: S10, theirProps: m11, slot: T8, defaultTag: Ye4, name: "Popover.Group" }), import_react36.default.createElement(e5.MainTreeNode, null));
}
var ze4 = D2(we3);
var Qe4 = D2(We4);
var Ze4 = D2(Ve3);
var et2 = D2(Xe4);
var tt2 = D2(qe4);
var kt = Object.assign(ze4, { Button: Qe4, Overlay: Ze4, Panel: et2, Group: tt2 });

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react39 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react37 = __toESM(require_react(), 1);
function c11(a13 = 0) {
  let [l11, r9] = (0, import_react37.useState)(a13), t17 = f7(), o12 = (0, import_react37.useCallback)((e5) => {
    t17.current && r9((u10) => u10 | e5);
  }, [l11, t17]), m11 = (0, import_react37.useCallback)((e5) => Boolean(l11 & e5), [l11]), s17 = (0, import_react37.useCallback)((e5) => {
    t17.current && r9((u10) => u10 & ~e5);
  }, [r9, t17]), g6 = (0, import_react37.useCallback)((e5) => {
    t17.current && r9((u10) => u10 ^ e5);
  }, [r9]);
  return { flags: l11, addFlag: o12, hasFlag: m11, removeFlag: s17, toggleFlag: g6 };
}

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react38 = __toESM(require_react(), 1);
var d11 = (0, import_react38.createContext)(null);
function u9() {
  let o12 = (0, import_react38.useContext)(d11);
  if (o12 === null) {
    let t17 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t17, u9), t17;
  }
  return o12;
}
function H5() {
  let [o12, t17] = (0, import_react38.useState)([]);
  return [o12.length > 0 ? o12.join(" ") : void 0, (0, import_react38.useMemo)(() => function(e5) {
    let s17 = o4((r9) => (t17((l11) => [...l11, r9]), () => t17((l11) => {
      let n7 = l11.slice(), p7 = n7.indexOf(r9);
      return p7 !== -1 && n7.splice(p7, 1), n7;
    }))), a13 = (0, import_react38.useMemo)(() => ({ register: s17, slot: e5.slot, name: e5.name, props: e5.props }), [s17, e5.slot, e5.name, e5.props]);
    return import_react38.default.createElement(d11.Provider, { value: a13 }, e5.children);
  }, [t17])];
}
var A2 = "label";
function h10(o12, t17) {
  let i9 = I(), { id: e5 = `headlessui-label-${i9}`, passive: s17 = false, ...a13 } = o12, r9 = u9(), l11 = y2(t17);
  l(() => r9.register(e5), [e5, r9.register]);
  let n7 = { ref: l11, ...r9.props, id: e5 };
  return s17 && ("onClick" in n7 && (delete n7.htmlFor, delete n7.onClick), "onClick" in a13 && delete a13.onClick), X({ ourProps: n7, theirProps: a13, slot: r9.slot || {}, defaultTag: A2, name: r9.name || "Label" });
}
var v3 = D2(h10);
var M6 = Object.assign(v3, {});

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var Ce2 = ((t17) => (t17[t17.RegisterOption = 0] = "RegisterOption", t17[t17.UnregisterOption = 1] = "UnregisterOption", t17))(Ce2 || {});
var ke2 = { [0](r9, o12) {
  let t17 = [...r9.options, { id: o12.id, element: o12.element, propsRef: o12.propsRef }];
  return { ...r9, options: I2(t17, (p7) => p7.element.current) };
}, [1](r9, o12) {
  let t17 = r9.options.slice(), p7 = r9.options.findIndex((T8) => T8.id === o12.id);
  return p7 === -1 ? r9 : (t17.splice(p7, 1), { ...r9, options: t17 });
} };
var B = (0, import_react39.createContext)(null);
B.displayName = "RadioGroupDataContext";
function oe3(r9) {
  let o12 = (0, import_react39.useContext)(B);
  if (o12 === null) {
    let t17 = new Error(`<${r9} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t17, oe3), t17;
  }
  return o12;
}
var $3 = (0, import_react39.createContext)(null);
$3.displayName = "RadioGroupActionsContext";
function ne2(r9) {
  let o12 = (0, import_react39.useContext)($3);
  if (o12 === null) {
    let t17 = new Error(`<${r9} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t17, ne2), t17;
  }
  return o12;
}
function Le2(r9, o12) {
  return u(o12.type, ke2, r9, o12);
}
var he3 = "div";
function Fe(r9, o12) {
  let t17 = I(), { id: p7 = `headlessui-radiogroup-${t17}`, value: T8, defaultValue: v5, form: S10, name: m11, onChange: M11, by: G2 = (e5, i9) => e5 === i9, disabled: C5 = false, ...H7 } = r9, y8 = o4(typeof G2 == "string" ? (e5, i9) => {
    let n7 = G2;
    return (e5 == null ? void 0 : e5[n7]) === (i9 == null ? void 0 : i9[n7]);
  } : G2), [P4, h11] = (0, import_react39.useReducer)(Le2, { options: [] }), a13 = P4.options, [N7, R3] = H5(), [k2, U5] = M3(), L3 = (0, import_react39.useRef)(null), W2 = y2(L3, o12), [l11, s17] = T4(T8, M11, v5), b7 = (0, import_react39.useMemo)(() => a13.find((e5) => !e5.propsRef.current.disabled), [a13]), F8 = (0, import_react39.useMemo)(() => a13.some((e5) => y8(e5.propsRef.current.value, l11)), [a13, l11]), d13 = o4((e5) => {
    var n7;
    if (C5 || y8(e5, l11))
      return false;
    let i9 = (n7 = a13.find((f14) => y8(f14.propsRef.current.value, e5))) == null ? void 0 : n7.propsRef.current;
    return i9 != null && i9.disabled ? false : (s17 == null || s17(e5), true);
  });
  F2({ container: L3.current, accept(e5) {
    return e5.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e5.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e5) {
    e5.setAttribute("role", "none");
  } });
  let x6 = o4((e5) => {
    let i9 = L3.current;
    if (!i9)
      return;
    let n7 = e(i9), f14 = a13.filter((u10) => u10.propsRef.current.disabled === false).map((u10) => u10.element.current);
    switch (e5.key) {
      case o8.Enter:
        p2(e5.currentTarget);
        break;
      case o8.ArrowLeft:
      case o8.ArrowUp:
        if (e5.preventDefault(), e5.stopPropagation(), O(f14, M.Previous | M.WrapAround) === N.Success) {
          let g6 = a13.find((K4) => K4.element.current === (n7 == null ? void 0 : n7.activeElement));
          g6 && d13(g6.propsRef.current.value);
        }
        break;
      case o8.ArrowRight:
      case o8.ArrowDown:
        if (e5.preventDefault(), e5.stopPropagation(), O(f14, M.Next | M.WrapAround) === N.Success) {
          let g6 = a13.find((K4) => K4.element.current === (n7 == null ? void 0 : n7.activeElement));
          g6 && d13(g6.propsRef.current.value);
        }
        break;
      case o8.Space:
        {
          e5.preventDefault(), e5.stopPropagation();
          let u10 = a13.find((g6) => g6.element.current === (n7 == null ? void 0 : n7.activeElement));
          u10 && d13(u10.propsRef.current.value);
        }
        break;
    }
  }), c14 = o4((e5) => (h11({ type: 0, ...e5 }), () => h11({ type: 1, id: e5.id }))), _7 = (0, import_react39.useMemo)(() => ({ value: l11, firstOption: b7, containsCheckedOption: F8, disabled: C5, compare: y8, ...P4 }), [l11, b7, F8, C5, y8, P4]), ie4 = (0, import_react39.useMemo)(() => ({ registerOption: c14, change: d13 }), [c14, d13]), ae4 = { ref: W2, id: p7, role: "radiogroup", "aria-labelledby": N7, "aria-describedby": k2, onKeyDown: x6 }, pe3 = (0, import_react39.useMemo)(() => ({ value: l11 }), [l11]), w6 = (0, import_react39.useRef)(null), le4 = p();
  return (0, import_react39.useEffect)(() => {
    w6.current && v5 !== void 0 && le4.addEventListener(w6.current, "reset", () => {
      d13(v5);
    });
  }, [w6, d13]), import_react39.default.createElement(U5, { name: "RadioGroup.Description" }, import_react39.default.createElement(R3, { name: "RadioGroup.Label" }, import_react39.default.createElement($3.Provider, { value: ie4 }, import_react39.default.createElement(B.Provider, { value: _7 }, m11 != null && l11 != null && e2({ [m11]: l11 }).map(([e5, i9], n7) => import_react39.default.createElement(c4, { features: p3.Hidden, ref: n7 === 0 ? (f14) => {
    var u10;
    w6.current = (u10 = f14 == null ? void 0 : f14.closest("form")) != null ? u10 : null;
  } : void 0, ...R({ key: e5, as: "input", type: "radio", checked: i9 != null, hidden: true, readOnly: true, form: S10, name: e5, value: i9 }) })), X({ ourProps: ae4, theirProps: H7, slot: pe3, defaultTag: he3, name: "RadioGroup" })))));
}
var xe4 = ((t17) => (t17[t17.Empty = 1] = "Empty", t17[t17.Active = 2] = "Active", t17))(xe4 || {});
var _e3 = "div";
function we4(r9, o12) {
  var x6;
  let t17 = I(), { id: p7 = `headlessui-radiogroup-option-${t17}`, value: T8, disabled: v5 = false, ...S10 } = r9, m11 = (0, import_react39.useRef)(null), M11 = y2(m11, o12), [G2, C5] = H5(), [H7, y8] = M3(), { addFlag: P4, removeFlag: h11, hasFlag: a13 } = c11(1), N7 = s2({ value: T8, disabled: v5 }), R3 = oe3("RadioGroup.Option"), k2 = ne2("RadioGroup.Option");
  l(() => k2.registerOption({ id: p7, element: m11, propsRef: N7 }), [p7, k2, m11, r9]);
  let U5 = o4((c14) => {
    var _7;
    if (r2(c14.currentTarget))
      return c14.preventDefault();
    k2.change(T8) && (P4(2), (_7 = m11.current) == null || _7.focus());
  }), L3 = o4((c14) => {
    if (r2(c14.currentTarget))
      return c14.preventDefault();
    P4(2);
  }), W2 = o4(() => h11(2)), l11 = ((x6 = R3.firstOption) == null ? void 0 : x6.id) === p7, s17 = R3.disabled || v5, b7 = R3.compare(R3.value, T8), F8 = { ref: M11, id: p7, role: "radio", "aria-checked": b7 ? "true" : "false", "aria-labelledby": G2, "aria-describedby": H7, "aria-disabled": s17 ? true : void 0, tabIndex: (() => s17 ? -1 : b7 || !R3.containsCheckedOption && l11 ? 0 : -1)(), onClick: s17 ? void 0 : U5, onFocus: s17 ? void 0 : L3, onBlur: s17 ? void 0 : W2 }, d13 = (0, import_react39.useMemo)(() => ({ checked: b7, disabled: s17, active: a13(2) }), [b7, s17, a13]);
  return import_react39.default.createElement(y8, { name: "RadioGroup.Description" }, import_react39.default.createElement(C5, { name: "RadioGroup.Label" }, X({ ourProps: F8, theirProps: S10, slot: d13, defaultTag: _e3, name: "RadioGroup.Option" })));
}
var Ie3 = D2(Fe);
var Se2 = D2(we4);
var yt = Object.assign(Ie3, { Option: Se2, Label: M6, Description: b2 });

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react40 = __toESM(require_react(), 1);
var y7 = (0, import_react40.createContext)(null);
y7.displayName = "GroupContext";
var Y3 = import_react40.Fragment;
function Z6(s17) {
  var d13;
  let [n7, p7] = (0, import_react40.useState)(null), [c14, f14] = H5(), [r9, h11] = M3(), l11 = (0, import_react40.useMemo)(() => ({ switch: n7, setSwitch: p7, labelledby: c14, describedby: r9 }), [n7, p7, c14, r9]), T8 = {}, b7 = s17;
  return import_react40.default.createElement(h11, { name: "Switch.Description" }, import_react40.default.createElement(f14, { name: "Switch.Label", props: { htmlFor: (d13 = l11.switch) == null ? void 0 : d13.id, onClick(t17) {
    n7 && (t17.currentTarget.tagName === "LABEL" && t17.preventDefault(), n7.click(), n7.focus({ preventScroll: true }));
  } } }, import_react40.default.createElement(y7.Provider, { value: l11 }, X({ ourProps: T8, theirProps: b7, defaultTag: Y3, name: "Switch.Group" }))));
}
var ee5 = "button";
function te3(s17, n7) {
  let p7 = I(), { id: c14 = `headlessui-switch-${p7}`, checked: f14, defaultChecked: r9 = false, onChange: h11, name: l11, value: T8, form: b7, ...d13 } = s17, t17 = (0, import_react40.useContext)(y7), u10 = (0, import_react40.useRef)(null), D6 = y2(u10, n7, t17 === null ? null : t17.setSwitch), [o12, a13] = T4(f14, h11, r9), S10 = o4(() => a13 == null ? void 0 : a13(!o12)), C5 = o4((e5) => {
    if (r2(e5.currentTarget))
      return e5.preventDefault();
    e5.preventDefault(), S10();
  }), L3 = o4((e5) => {
    e5.key === o8.Space ? (e5.preventDefault(), S10()) : e5.key === o8.Enter && p2(e5.currentTarget);
  }), v5 = o4((e5) => e5.preventDefault()), G2 = (0, import_react40.useMemo)(() => ({ checked: o12 }), [o12]), R3 = { id: c14, ref: D6, role: "switch", type: s7(s17, u10), tabIndex: 0, "aria-checked": o12, "aria-labelledby": t17 == null ? void 0 : t17.labelledby, "aria-describedby": t17 == null ? void 0 : t17.describedby, onClick: C5, onKeyUp: L3, onKeyPress: v5 }, k2 = p();
  return (0, import_react40.useEffect)(() => {
    var w6;
    let e5 = (w6 = u10.current) == null ? void 0 : w6.closest("form");
    e5 && r9 !== void 0 && k2.addEventListener(e5, "reset", () => {
      a13(r9);
    });
  }, [u10, a13]), import_react40.default.createElement(import_react40.default.Fragment, null, l11 != null && o12 && import_react40.default.createElement(c4, { features: p3.Hidden, ...R({ as: "input", type: "checkbox", hidden: true, readOnly: true, form: b7, checked: o12, name: l11, value: T8 }) }), X({ ourProps: R3, theirProps: d13, slot: G2, defaultTag: ee5, name: "Switch" }));
}
var ne3 = D2(te3);
var re3 = Z6;
var Ge5 = Object.assign(ne3, { Group: re3, Label: M6, Description: b2 });

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react42 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react41 = __toESM(require_react(), 1);
function A5({ onFocus: n7 }) {
  let [r9, o12] = (0, import_react41.useState)(true), u10 = f7();
  return r9 ? import_react41.default.createElement(c4, { as: "button", type: "button", features: p3.Focusable, onFocus: (a13) => {
    a13.preventDefault();
    let e5, i9 = 50;
    function t17() {
      if (i9-- <= 0) {
        e5 && cancelAnimationFrame(e5);
        return;
      }
      if (n7()) {
        if (cancelAnimationFrame(e5), !u10.current)
          return;
        o12(false);
        return;
      }
      e5 = requestAnimationFrame(t17);
    }
    e5 = requestAnimationFrame(t17);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
var r8 = __toESM(require_react(), 1);
var s16 = r8.createContext(null);
function a12() {
  return { groups: /* @__PURE__ */ new Map(), get(n7, t17) {
    var c14;
    let e5 = this.groups.get(n7);
    e5 || (e5 = /* @__PURE__ */ new Map(), this.groups.set(n7, e5));
    let l11 = (c14 = e5.get(t17)) != null ? c14 : 0;
    e5.set(t17, l11 + 1);
    let o12 = Array.from(e5.keys()).indexOf(t17);
    function i9() {
      let u10 = e5.get(t17);
      u10 > 1 ? e5.set(t17, u10 - 1) : e5.delete(t17);
    }
    return [o12, i9];
  } };
}
function C3({ children: n7 }) {
  let t17 = r8.useRef(a12());
  return r8.createElement(s16.Provider, { value: t17 }, n7);
}
function d12(n7) {
  let t17 = r8.useContext(s16);
  if (!t17)
    throw new Error("You must wrap your component in a <StableCollection>");
  let e5 = f13(), [l11, o12] = t17.current.get(n7, e5);
  return r8.useEffect(() => o12, []), l11;
}
function f13() {
  var l11, o12, i9;
  let n7 = (i9 = (o12 = (l11 = r8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : l11.ReactCurrentOwner) == null ? void 0 : o12.current) != null ? i9 : null;
  if (!n7)
    return Symbol();
  let t17 = [], e5 = n7;
  for (; e5; )
    t17.push(e5.index), e5 = e5.return;
  return "$." + t17.join(".");
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var ue4 = ((t17) => (t17[t17.Forwards = 0] = "Forwards", t17[t17.Backwards = 1] = "Backwards", t17))(ue4 || {});
var Te2 = ((o12) => (o12[o12.Less = -1] = "Less", o12[o12.Equal = 0] = "Equal", o12[o12.Greater = 1] = "Greater", o12))(Te2 || {});
var de3 = ((r9) => (r9[r9.SetSelectedIndex = 0] = "SetSelectedIndex", r9[r9.RegisterTab = 1] = "RegisterTab", r9[r9.UnregisterTab = 2] = "UnregisterTab", r9[r9.RegisterPanel = 3] = "RegisterPanel", r9[r9.UnregisterPanel = 4] = "UnregisterPanel", r9))(de3 || {});
var ce3 = { [0](e5, n7) {
  var u10;
  let t17 = I2(e5.tabs, (T8) => T8.current), o12 = I2(e5.panels, (T8) => T8.current), s17 = t17.filter((T8) => {
    var l11;
    return !((l11 = T8.current) != null && l11.hasAttribute("disabled"));
  }), r9 = { ...e5, tabs: t17, panels: o12 };
  if (n7.index < 0 || n7.index > t17.length - 1) {
    let T8 = u(Math.sign(n7.index - e5.selectedIndex), { [-1]: () => 1, [0]: () => u(Math.sign(n7.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    if (s17.length === 0)
      return r9;
    let l11 = u(T8, { [0]: () => t17.indexOf(s17[0]), [1]: () => t17.indexOf(s17[s17.length - 1]) });
    return { ...r9, selectedIndex: l11 === -1 ? e5.selectedIndex : l11 };
  }
  let i9 = t17.slice(0, n7.index), b7 = [...t17.slice(n7.index), ...i9].find((T8) => s17.includes(T8));
  if (!b7)
    return r9;
  let c14 = (u10 = t17.indexOf(b7)) != null ? u10 : e5.selectedIndex;
  return c14 === -1 && (c14 = e5.selectedIndex), { ...r9, selectedIndex: c14 };
}, [1](e5, n7) {
  var r9;
  if (e5.tabs.includes(n7.tab))
    return e5;
  let t17 = e5.tabs[e5.selectedIndex], o12 = I2([...e5.tabs, n7.tab], (i9) => i9.current), s17 = (r9 = o12.indexOf(t17)) != null ? r9 : e5.selectedIndex;
  return s17 === -1 && (s17 = e5.selectedIndex), { ...e5, tabs: o12, selectedIndex: s17 };
}, [2](e5, n7) {
  return { ...e5, tabs: e5.tabs.filter((t17) => t17 !== n7.tab) };
}, [3](e5, n7) {
  return e5.panels.includes(n7.panel) ? e5 : { ...e5, panels: I2([...e5.panels, n7.panel], (t17) => t17.current) };
}, [4](e5, n7) {
  return { ...e5, panels: e5.panels.filter((t17) => t17 !== n7.panel) };
} };
var X4 = (0, import_react42.createContext)(null);
X4.displayName = "TabsDataContext";
function M8(e5) {
  let n7 = (0, import_react42.useContext)(X4);
  if (n7 === null) {
    let t17 = new Error(`<${e5} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t17, M8), t17;
  }
  return n7;
}
var $4 = (0, import_react42.createContext)(null);
$4.displayName = "TabsActionsContext";
function q4(e5) {
  let n7 = (0, import_react42.useContext)($4);
  if (n7 === null) {
    let t17 = new Error(`<${e5} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t17, q4), t17;
  }
  return n7;
}
function fe3(e5, n7) {
  return u(n7.type, ce3, e5, n7);
}
var be3 = import_react42.Fragment;
function me3(e5, n7) {
  let { defaultIndex: t17 = 0, vertical: o12 = false, manual: s17 = false, onChange: r9, selectedIndex: i9 = null, ...R3 } = e5;
  const b7 = o12 ? "vertical" : "horizontal", c14 = s17 ? "manual" : "auto";
  let u10 = i9 !== null, T8 = y2(n7), [l11, d13] = (0, import_react42.useReducer)(fe3, { selectedIndex: i9 != null ? i9 : t17, tabs: [], panels: [] }), g6 = (0, import_react42.useMemo)(() => ({ selectedIndex: l11.selectedIndex }), [l11.selectedIndex]), m11 = s2(r9 || (() => {
  })), y8 = s2(l11.tabs), E9 = (0, import_react42.useMemo)(() => ({ orientation: b7, activation: c14, ...l11 }), [b7, c14, l11]), I6 = o4((p7) => (d13({ type: 1, tab: p7 }), () => d13({ type: 2, tab: p7 }))), A6 = o4((p7) => (d13({ type: 3, panel: p7 }), () => d13({ type: 4, panel: p7 }))), L3 = o4((p7) => {
    C5.current !== p7 && m11.current(p7), u10 || d13({ type: 0, index: p7 });
  }), C5 = s2(u10 ? e5.selectedIndex : l11.selectedIndex), N7 = (0, import_react42.useMemo)(() => ({ registerTab: I6, registerPanel: A6, change: L3 }), []);
  l(() => {
    d13({ type: 0, index: i9 != null ? i9 : t17 });
  }, [i9]), l(() => {
    if (C5.current === void 0 || l11.tabs.length <= 0)
      return;
    let p7 = I2(l11.tabs, (a13) => a13.current);
    p7.some((a13, f14) => l11.tabs[f14] !== a13) && L3(p7.indexOf(l11.tabs[C5.current]));
  });
  let B3 = { ref: T8 };
  return import_react42.default.createElement(C3, null, import_react42.default.createElement($4.Provider, { value: N7 }, import_react42.default.createElement(X4.Provider, { value: E9 }, E9.tabs.length <= 0 && import_react42.default.createElement(A5, { onFocus: () => {
    var p7, D6;
    for (let a13 of y8.current)
      if (((p7 = a13.current) == null ? void 0 : p7.tabIndex) === 0)
        return (D6 = a13.current) == null || D6.focus(), true;
    return false;
  } }), X({ ourProps: B3, theirProps: R3, slot: g6, defaultTag: be3, name: "Tabs" }))));
}
var Pe4 = "div";
function xe5(e5, n7) {
  let { orientation: t17, selectedIndex: o12 } = M8("Tab.List"), s17 = y2(n7);
  return X({ ourProps: { ref: s17, role: "tablist", "aria-orientation": t17 }, theirProps: e5, slot: { selectedIndex: o12 }, defaultTag: Pe4, name: "Tabs.List" });
}
var ge6 = "button";
function ye4(e5, n7) {
  var p7, D6;
  let t17 = I(), { id: o12 = `headlessui-tabs-tab-${t17}`, ...s17 } = e5, { orientation: r9, activation: i9, selectedIndex: R3, tabs: b7, panels: c14 } = M8("Tab"), u10 = q4("Tab"), T8 = M8("Tab"), l11 = (0, import_react42.useRef)(null), d13 = y2(l11, n7);
  l(() => u10.registerTab(l11), [u10, l11]);
  let g6 = d12("tabs"), m11 = b7.indexOf(l11);
  m11 === -1 && (m11 = g6);
  let y8 = m11 === R3, E9 = o4((a13) => {
    var j6;
    let f14 = a13();
    if (f14 === N.Success && i9 === "auto") {
      let W2 = (j6 = e(l11)) == null ? void 0 : j6.activeElement, z5 = T8.tabs.findIndex((te4) => te4.current === W2);
      z5 !== -1 && u10.change(z5);
    }
    return f14;
  }), I6 = o4((a13) => {
    let f14 = b7.map((W2) => W2.current).filter(Boolean);
    if (a13.key === o8.Space || a13.key === o8.Enter) {
      a13.preventDefault(), a13.stopPropagation(), u10.change(m11);
      return;
    }
    switch (a13.key) {
      case o8.Home:
      case o8.PageUp:
        return a13.preventDefault(), a13.stopPropagation(), E9(() => O(f14, M.First));
      case o8.End:
      case o8.PageDown:
        return a13.preventDefault(), a13.stopPropagation(), E9(() => O(f14, M.Last));
    }
    if (E9(() => u(r9, { vertical() {
      return a13.key === o8.ArrowUp ? O(f14, M.Previous | M.WrapAround) : a13.key === o8.ArrowDown ? O(f14, M.Next | M.WrapAround) : N.Error;
    }, horizontal() {
      return a13.key === o8.ArrowLeft ? O(f14, M.Previous | M.WrapAround) : a13.key === o8.ArrowRight ? O(f14, M.Next | M.WrapAround) : N.Error;
    } })) === N.Success)
      return a13.preventDefault();
  }), A6 = (0, import_react42.useRef)(false), L3 = o4(() => {
    var a13;
    A6.current || (A6.current = true, (a13 = l11.current) == null || a13.focus({ preventScroll: true }), u10.change(m11), t3(() => {
      A6.current = false;
    }));
  }), C5 = o4((a13) => {
    a13.preventDefault();
  }), N7 = (0, import_react42.useMemo)(() => ({ selected: y8 }), [y8]), B3 = { ref: d13, onKeyDown: I6, onMouseDown: C5, onClick: L3, id: o12, role: "tab", type: s7(e5, l11), "aria-controls": (D6 = (p7 = c14[m11]) == null ? void 0 : p7.current) == null ? void 0 : D6.id, "aria-selected": y8, tabIndex: y8 ? 0 : -1 };
  return X({ ourProps: B3, theirProps: s17, slot: N7, defaultTag: ge6, name: "Tabs.Tab" });
}
var Ee3 = "div";
function Ae2(e5, n7) {
  let { selectedIndex: t17 } = M8("Tab.Panels"), o12 = y2(n7), s17 = (0, import_react42.useMemo)(() => ({ selectedIndex: t17 }), [t17]);
  return X({ ourProps: { ref: o12 }, theirProps: e5, slot: s17, defaultTag: Ee3, name: "Tabs.Panels" });
}
var Re2 = "div";
var Le3 = S2.RenderStrategy | S2.Static;
function Se3(e5, n7) {
  var E9, I6, A6, L3;
  let t17 = I(), { id: o12 = `headlessui-tabs-panel-${t17}`, tabIndex: s17 = 0, ...r9 } = e5, { selectedIndex: i9, tabs: R3, panels: b7 } = M8("Tab.Panel"), c14 = q4("Tab.Panel"), u10 = (0, import_react42.useRef)(null), T8 = y2(u10, n7);
  l(() => c14.registerPanel(u10), [c14, u10]);
  let l11 = d12("panels"), d13 = b7.indexOf(u10);
  d13 === -1 && (d13 = l11);
  let g6 = d13 === i9, m11 = (0, import_react42.useMemo)(() => ({ selected: g6 }), [g6]), y8 = { ref: T8, id: o12, role: "tabpanel", "aria-labelledby": (I6 = (E9 = R3[d13]) == null ? void 0 : E9.current) == null ? void 0 : I6.id, tabIndex: g6 ? s17 : -1 };
  return !g6 && ((A6 = r9.unmount) == null || A6) && !((L3 = r9.static) != null && L3) ? import_react42.default.createElement(c4, { as: "span", ...y8 }) : X({ ourProps: y8, theirProps: r9, slot: m11, defaultTag: Re2, features: Le3, visible: g6, name: "Tabs.Panel" });
}
var Ie4 = D2(ye4);
var De3 = D2(me3);
var Fe2 = D2(xe5);
var he4 = D2(Ae2);
var Me3 = D2(Se3);
var rt2 = Object.assign(Ie4, { Group: De3, List: Fe2, Panels: he4, Panel: Me3 });

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react43 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l10(r9) {
  let e5 = { called: false };
  return (...t17) => {
    if (!e5.called)
      return e5.called = true, r9(...t17);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function g5(t17, ...e5) {
  t17 && e5.length > 0 && t17.classList.add(...e5);
}
function v4(t17, ...e5) {
  t17 && e5.length > 0 && t17.classList.remove(...e5);
}
function b6(t17, e5) {
  let n7 = o2();
  if (!t17)
    return n7.dispose;
  let { transitionDuration: m11, transitionDelay: a13 } = getComputedStyle(t17), [u10, p7] = [m11, a13].map((l11) => {
    let [r9 = 0] = l11.split(",").filter(Boolean).map((i9) => i9.includes("ms") ? parseFloat(i9) : parseFloat(i9) * 1e3).sort((i9, T8) => T8 - i9);
    return r9;
  }), o12 = u10 + p7;
  if (o12 !== 0) {
    n7.group((r9) => {
      r9.setTimeout(() => {
        e5(), r9.dispose();
      }, o12), r9.addEventListener(t17, "transitionrun", (i9) => {
        i9.target === i9.currentTarget && r9.dispose();
      });
    });
    let l11 = n7.addEventListener(t17, "transitionend", (r9) => {
      r9.target === r9.currentTarget && (e5(), l11());
    });
  } else
    e5();
  return n7.add(() => e5()), n7.dispose;
}
function M9(t17, e5, n7, m11) {
  let a13 = n7 ? "enter" : "leave", u10 = o2(), p7 = m11 !== void 0 ? l10(m11) : () => {
  };
  a13 === "enter" && (t17.removeAttribute("hidden"), t17.style.display = "");
  let o12 = u(a13, { enter: () => e5.enter, leave: () => e5.leave }), l11 = u(a13, { enter: () => e5.enterTo, leave: () => e5.leaveTo }), r9 = u(a13, { enter: () => e5.enterFrom, leave: () => e5.leaveFrom });
  return v4(t17, ...e5.base, ...e5.enter, ...e5.enterTo, ...e5.enterFrom, ...e5.leave, ...e5.leaveFrom, ...e5.leaveTo, ...e5.entered), g5(t17, ...e5.base, ...o12, ...r9), u10.nextFrame(() => {
    v4(t17, ...e5.base, ...o12, ...r9), g5(t17, ...e5.base, ...o12, ...l11), b6(t17, () => (v4(t17, ...e5.base, ...o12), g5(t17, ...e5.base, ...e5.entered), p7()));
  }), u10.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function E8({ immediate: t17, container: s17, direction: n7, classes: u10, onStart: a13, onStop: c14 }) {
  let l11 = f7(), d13 = p(), e5 = s2(n7);
  l(() => {
    t17 && (e5.current = "enter");
  }, [t17]), l(() => {
    let r9 = o2();
    d13.add(r9.dispose);
    let i9 = s17.current;
    if (i9 && e5.current !== "idle" && l11.current)
      return r9.dispose(), a13.current(e5.current), r9.add(M9(i9, u10.current, e5.current === "enter", () => {
        r9.dispose(), c14.current(e5.current);
      })), r9.dispose;
  }, [n7]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S9(t17 = "") {
  return t17.split(" ").filter((n7) => n7.trim().length > 1);
}
var _6 = (0, import_react43.createContext)(null);
_6.displayName = "TransitionContext";
var be4 = ((r9) => (r9.Visible = "visible", r9.Hidden = "hidden", r9))(be4 || {});
function Se4() {
  let t17 = (0, import_react43.useContext)(_6);
  if (t17 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t17;
}
function Ne5() {
  let t17 = (0, import_react43.useContext)(M10);
  if (t17 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t17;
}
var M10 = (0, import_react43.createContext)(null);
M10.displayName = "NestingContext";
function U4(t17) {
  return "children" in t17 ? U4(t17.children) : t17.current.filter(({ el: n7 }) => n7.current !== null).filter(({ state: n7 }) => n7 === "visible").length > 0;
}
function oe4(t17, n7) {
  let r9 = s2(t17), s17 = (0, import_react43.useRef)([]), y8 = f7(), D6 = p(), c14 = o4((i9, e5 = j.Hidden) => {
    let a13 = s17.current.findIndex(({ el: o12 }) => o12 === i9);
    a13 !== -1 && (u(e5, { [j.Unmount]() {
      s17.current.splice(a13, 1);
    }, [j.Hidden]() {
      s17.current[a13].state = "hidden";
    } }), D6.microTask(() => {
      var o12;
      !U4(s17) && y8.current && ((o12 = r9.current) == null || o12.call(r9));
    }));
  }), x6 = o4((i9) => {
    let e5 = s17.current.find(({ el: a13 }) => a13 === i9);
    return e5 ? e5.state !== "visible" && (e5.state = "visible") : s17.current.push({ el: i9, state: "visible" }), () => c14(i9, j.Unmount);
  }), p7 = (0, import_react43.useRef)([]), h11 = (0, import_react43.useRef)(Promise.resolve()), u10 = (0, import_react43.useRef)({ enter: [], leave: [], idle: [] }), v5 = o4((i9, e5, a13) => {
    p7.current.splice(0), n7 && (n7.chains.current[e5] = n7.chains.current[e5].filter(([o12]) => o12 !== i9)), n7 == null || n7.chains.current[e5].push([i9, new Promise((o12) => {
      p7.current.push(o12);
    })]), n7 == null || n7.chains.current[e5].push([i9, new Promise((o12) => {
      Promise.all(u10.current[e5].map(([f14, P4]) => P4)).then(() => o12());
    })]), e5 === "enter" ? h11.current = h11.current.then(() => n7 == null ? void 0 : n7.wait.current).then(() => a13(e5)) : a13(e5);
  }), d13 = o4((i9, e5, a13) => {
    Promise.all(u10.current[e5].splice(0).map(([o12, f14]) => f14)).then(() => {
      var o12;
      (o12 = p7.current.shift()) == null || o12();
    }).then(() => a13(e5));
  });
  return (0, import_react43.useMemo)(() => ({ children: s17, register: x6, unregister: c14, onStart: v5, onStop: d13, wait: h11, chains: u10 }), [x6, c14, s17, v5, d13, u10, h11]);
}
function xe6() {
}
var Pe5 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function se4(t17) {
  var r9;
  let n7 = {};
  for (let s17 of Pe5)
    n7[s17] = (r9 = t17[s17]) != null ? r9 : xe6;
  return n7;
}
function Re3(t17) {
  let n7 = (0, import_react43.useRef)(se4(t17));
  return (0, import_react43.useEffect)(() => {
    n7.current = se4(t17);
  }, [t17]), n7;
}
var ye5 = "div";
var ae3 = S2.RenderStrategy;
function De4(t17, n7) {
  var K4, Q5;
  let { beforeEnter: r9, afterEnter: s17, beforeLeave: y8, afterLeave: D6, enter: c14, enterFrom: x6, enterTo: p7, entered: h11, leave: u10, leaveFrom: v5, leaveTo: d13, ...i9 } = t17, e5 = (0, import_react43.useRef)(null), a13 = y2(e5, n7), o12 = (K4 = i9.unmount) == null || K4 ? j.Unmount : j.Hidden, { show: f14, appear: P4, initial: T8 } = Se4(), [l11, j6] = (0, import_react43.useState)(f14 ? "visible" : "hidden"), q5 = Ne5(), { register: O4, unregister: V4 } = q5;
  (0, import_react43.useEffect)(() => O4(e5), [O4, e5]), (0, import_react43.useEffect)(() => {
    if (o12 === j.Hidden && e5.current) {
      if (f14 && l11 !== "visible") {
        j6("visible");
        return;
      }
      return u(l11, { ["hidden"]: () => V4(e5), ["visible"]: () => O4(e5) });
    }
  }, [l11, e5, O4, V4, f14, o12]);
  let k2 = s2({ base: S9(i9.className), enter: S9(c14), enterFrom: S9(x6), enterTo: S9(p7), entered: S9(h11), leave: S9(u10), leaveFrom: S9(v5), leaveTo: S9(d13) }), w6 = Re3({ beforeEnter: r9, afterEnter: s17, beforeLeave: y8, afterLeave: D6 }), G2 = l2();
  (0, import_react43.useEffect)(() => {
    if (G2 && l11 === "visible" && e5.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e5, l11, G2]);
  let ue5 = T8 && !P4, z5 = P4 && f14 && T8, Te3 = /* @__PURE__ */ (() => !G2 || ue5 ? "idle" : f14 ? "enter" : "leave")(), H7 = c11(0), de4 = o4((g6) => u(g6, { enter: () => {
    H7.addFlag(d5.Opening), w6.current.beforeEnter();
  }, leave: () => {
    H7.addFlag(d5.Closing), w6.current.beforeLeave();
  }, idle: () => {
  } })), fe4 = o4((g6) => u(g6, { enter: () => {
    H7.removeFlag(d5.Opening), w6.current.afterEnter();
  }, leave: () => {
    H7.removeFlag(d5.Closing), w6.current.afterLeave();
  }, idle: () => {
  } })), A6 = oe4(() => {
    j6("hidden"), V4(e5);
  }, q5);
  E8({ immediate: z5, container: e5, classes: k2, direction: Te3, onStart: s2((g6) => {
    A6.onStart(e5, g6, de4);
  }), onStop: s2((g6) => {
    A6.onStop(e5, g6, fe4), g6 === "leave" && !U4(A6) && (j6("hidden"), V4(e5));
  }) });
  let R3 = i9, me4 = { ref: a13 };
  return z5 ? R3 = { ...R3, className: t6(i9.className, ...k2.current.enter, ...k2.current.enterFrom) } : (R3.className = t6(i9.className, (Q5 = e5.current) == null ? void 0 : Q5.className), R3.className === "" && delete R3.className), import_react43.default.createElement(M10.Provider, { value: A6 }, import_react43.default.createElement(c5, { value: u(l11, { ["visible"]: d5.Open, ["hidden"]: d5.Closed }) | H7.flags }, X({ ourProps: me4, theirProps: R3, defaultTag: ye5, features: ae3, visible: l11 === "visible", name: "Transition.Child" })));
}
function He5(t17, n7) {
  let { show: r9, appear: s17 = false, unmount: y8 = true, ...D6 } = t17, c14 = (0, import_react43.useRef)(null), x6 = y2(c14, n7);
  l2();
  let p7 = C();
  if (r9 === void 0 && p7 !== null && (r9 = (p7 & d5.Open) === d5.Open), ![true, false].includes(r9))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [h11, u10] = (0, import_react43.useState)(r9 ? "visible" : "hidden"), v5 = oe4(() => {
    u10("hidden");
  }), [d13, i9] = (0, import_react43.useState)(true), e5 = (0, import_react43.useRef)([r9]);
  l(() => {
    d13 !== false && e5.current[e5.current.length - 1] !== r9 && (e5.current.push(r9), i9(false));
  }, [e5, r9]);
  let a13 = (0, import_react43.useMemo)(() => ({ show: r9, appear: s17, initial: d13 }), [r9, s17, d13]);
  (0, import_react43.useEffect)(() => {
    if (r9)
      u10("visible");
    else if (!U4(v5))
      u10("hidden");
    else {
      let T8 = c14.current;
      if (!T8)
        return;
      let l11 = T8.getBoundingClientRect();
      l11.x === 0 && l11.y === 0 && l11.width === 0 && l11.height === 0 && u10("hidden");
    }
  }, [r9, v5]);
  let o12 = { unmount: y8 }, f14 = o4(() => {
    var T8;
    d13 && i9(false), (T8 = t17.beforeEnter) == null || T8.call(t17);
  }), P4 = o4(() => {
    var T8;
    d13 && i9(false), (T8 = t17.beforeLeave) == null || T8.call(t17);
  });
  return import_react43.default.createElement(M10.Provider, { value: v5 }, import_react43.default.createElement(_6.Provider, { value: a13 }, X({ ourProps: { ...o12, as: import_react43.Fragment, children: import_react43.default.createElement(le3, { ref: x6, ...o12, ...D6, beforeEnter: f14, beforeLeave: P4 }) }, theirProps: {}, defaultTag: import_react43.Fragment, features: ae3, visible: h11 === "visible", name: "Transition" })));
}
function Fe3(t17, n7) {
  let r9 = (0, import_react43.useContext)(_6) !== null, s17 = C() !== null;
  return import_react43.default.createElement(import_react43.default.Fragment, null, !r9 && s17 ? import_react43.default.createElement(W, { ref: n7, ...t17 }) : import_react43.default.createElement(le3, { ref: n7, ...t17 }));
}
var W = D2(He5);
var le3 = D2(De4);
var Le4 = D2(Fe3);
var tt3 = Object.assign(W, { Child: Le4, Root: W });
export {
  qo as Combobox,
  _t as Dialog,
  ve as Disclosure,
  ge2 as FocusTrap,
  Nt as Listbox,
  it2 as Menu,
  kt as Popover,
  pe2 as Portal,
  yt as RadioGroup,
  Ge5 as Switch,
  rt2 as Tab,
  tt3 as Transition
};
//# sourceMappingURL=@headlessui_react.js.map
