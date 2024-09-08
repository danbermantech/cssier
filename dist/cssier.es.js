import { useState as l, useEffect as h } from 'react'
import { jsx as a } from 'react/jsx-runtime'
const u = [
    'active',
    'checked',
    'disabled',
    'empty',
    'enabled',
    'firstChild',
    'firstOfType',
    'focus',
    'hover',
    'inRange',
    'invalid',
    'lastChild',
    'lastOfType',
    'link',
    'not',
    'nthChild',
    'nthLastChild',
    'nthLastOfType',
    'nthOfType',
    'onlyOfType',
    'onlyChild',
    'optional',
    'outOfRange',
    'readOnly',
    'readWrite',
    'required',
    'root',
    'target',
    'valid',
    'visited',
  ],
  i = [
    // Shadow DOM elements
    'part',
    'theme',
    // Shadow DOM elements for specific controls
    'part(container)',
    'part(label)',
    'part(option)',
    'part(item)',
    'part(placeholder)',
    'part(header)',
    'part(footer)',
    'part(overlay)',
    'part(menu)',
    'part(menuitem)',
    'part(list)',
    'part(listitem)',
    'part(progress-bar)',
    'part(progress-value)',
    'part(input-container)',
    'part(input)',
    'part(select)',
    'part(option-group)',
    'part(option-item)',
    'part(button)',
    'part(dialog)',
    'part(menu-button)',
    'part(tablist)',
    'part(tab)',
    'part(tab-panel)',
    'part(carousel)',
    'part(slider)',
    'part(tooltip)',
    'part(radio)',
    'part(checkbox)',
    'part(switch)',
    'part(range)',
    'part(textarea)',
    'part(search)',
    'part(navbar)',
    'part(breadcrumbs)',
    // Standard pseudoelements
    'before',
    'after',
    'first-line',
    'first-letter',
    'selection',
    'placeholder',
    'backdrop',
    'marker',
    // WebKit-prefixed pseudoelements
    '-webkit-before',
    '-webkit-after',
    '-webkit-first-line',
    '-webkit-first-letter',
    '-webkit-selection',
    '-webkit-placeholder',
    '-webkit-backdrop',
    '-webkit-marker',
    // WebKit scrollbar pseudo-elements
    '-webkit-scrollbar',
    '-webkit-scrollbar-thumb',
    '-webkit-scrollbar-track',
    '-webkit-scrollbar-track-piece',
    '-webkit-scrollbar-corner',
    '-webkit-scrollbar-button',
    '-webkit-resizer',
    // Other WebKit-prefixed pseudoelements
    '-webkit-file-upload-button',
    '-webkit-inner-spin-button',
    '-webkit-outer-spin-button',
    '-webkit-progress-bar',
    '-webkit-progress-value',
    '-webkit-progress-inner-element',
    '-webkit-progress-outer-element',
    // Additional pseudo-elements related to shadow DOM and Web Components
    'slotted(*)',
    'slotted(div)',
    'slotted(span)',
    'slotted(p)',
    'slotted(a)',
    'slotted(img)',
    'slotted(button)',
    'slotted(input)',
    // Custom and experimental shadow DOM parts (subject to changes)
    'part(dialog-overlay)',
    'part(tab-content)',
    'part(slider-track)',
    'part(slider-thumb)',
    'part(menu-icon)',
    'part(menu-label)',
    'part(list-group)',
    'part(list-item)',
  ],
  k = /* @__PURE__ */ Object.freeze(
    /* @__PURE__ */ Object.defineProperty(
      {
        __proto__: null,
        PseudoClasses: u,
        PseudoElements: i,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
function I(e, t) {
  if (!t) {
    const n = document.head.querySelector(`style#${e}`)
    return n && n.remove(), ''
  }
  let s = document.head.querySelector(`style#${e}`)
  s || ((s = document.createElement('style')), (s.id = e), (s.type = 'text/css'), document.head.appendChild(s))
  let c = ''
  return (
    Object.entries(t).forEach(([n, d]) => {
      let r = ''
      n === 'neutral'
        ? (r = `.${e}`)
        : u.includes(n)
        ? (r = `.${e}:${n}`)
        : i.includes(n)
        ? (r = `.${e}::${n}`)
        : (console.error(`Invalid pseudo class: ${n}`), console.log(u, i, n, n in u, n in i)),
        (c += `${r} { ${Object.entries(d)
          .map(([$, N]) => `${$.replace(/[A-Z]/g, (f) => `-${f.toLowerCase()}`)}: ${N}`)
          .join('; ')} }`)
    }),
    (s.textContent = c),
    c
  )
}
function m(e, t) {
  if (e == null && t == null) return !0
  if (
    (e == null && typeof t == 'object') ||
    (t == null && typeof e == 'object') ||
    Object.keys(e).length !== Object.keys(t).length
  )
    return !1
  for (const s in e) if (e[s] !== t[s]) return typeof e[s] == 'object' && typeof t[s] == 'object' && !m(e[s], t[s]), !1
  return !0
}
const p = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]
function b() {
  let e = ''
  for (let t = 0; t < 6; t++) e += p[Math.floor(Math.random() * 24)]
  return e
}
function o(e, t) {
  const [s] = l(() => t ?? b()),
    [c, n] = l({}),
    [d, r] = l('')
  return (
    h(() => {
      m(c, e) || (n(e), r(I(s, e)))
    }, [s, e, c, r]),
    [s, d]
  )
}
function v(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('a', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function S(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('abbr', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function w(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('address', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function F(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('area', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function T(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('article', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function M(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('aside', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function O(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('audio', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function C(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('b', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function L(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('base', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function P(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('bdi', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function D(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('bdo', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function x(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('blockquote', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function B(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('body', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function H(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('br', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function A(e) {
  const { children: t, pseudo: s, className: c, pseudoId: n, ...d } = e,
    [r] = o(s, n)
  return /* @__PURE__ */ a('button', { className: `${c ?? ''} ${r}`, ...d, children: t })
}
function E(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('canvas', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function G(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('caption', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function R(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('cite', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function q(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('code', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function j(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('col', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function U(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('colgroup', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function V(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('data', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function _(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('datalist', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function W(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('dd', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function z(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('del', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function K(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('details', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Q(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('dfn', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Z(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('dialog', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function J(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('div', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function X(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('dl', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Y(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('dt', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ee(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('em', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function se(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('embed', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function te(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('fieldset', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ne(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('figcaption', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ce(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('figure', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function de(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('footer', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ae(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('form', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function oe(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('h1', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function re(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('h2', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ue(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('h3', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ie(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('h4', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function le(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('h5', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function me(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('h6', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function $e(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('head', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ne(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('header', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function fe(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('hgroup', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function he(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('hr', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ie(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('html', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function pe(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('i', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function be(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('iframe', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ge(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('img', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ye(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('input', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ke(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('ins', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ve(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('kbd', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Se(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('label', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function we(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('legend', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Fe(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('li', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Te(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('link', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Me(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('main', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Oe(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('map', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ce(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('mark', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Le(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('meta', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Pe(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('meter', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function De(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('nav', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function xe(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('noscript', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Be(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('object', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function He(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('ol', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ae(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('optgroup', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ee(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('option', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ge(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('output', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Re(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('p', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function qe(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('param', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function je(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('picture', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ue(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('pre', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ve(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('progress', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function _e(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('q', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function We(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('rp', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ze(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('rt', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ke(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('ruby', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Qe(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('s', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ze(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('samp', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Je(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('script', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Xe(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('section', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ye(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('select', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function es(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('small', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ss(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('source', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ts(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('span', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ns(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('strong', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function cs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('style', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ds(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('sub', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function as(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('summary', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function os(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('sup', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function rs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('table', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function us(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('tbody', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function is(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('td', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ls(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('template', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ms(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('textarea', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function $s(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('tfoot', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ns(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('th', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function fs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('thead', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function hs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('time', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Is(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('title', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ps(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('tr', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function bs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('u', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function gs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('ul', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ys(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('var', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ks(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('video', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function vs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('wbr', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ss(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('svg', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ws(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('animate', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Fs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('animateTransform', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ts(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('circle', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ms(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('clipPath', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Os(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('defs', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Cs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('desc', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ls(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('ellipse', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ps(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feBlend', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ds(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feColorMatrix', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function xs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feComponentTransfer', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Bs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feComposite', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Hs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feConvolveMatrix', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function As(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feDiffuseLighting', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Es(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feDisplacementMap', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Gs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feDistantLight', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Rs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feFlood', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function qs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feGaussianBlur', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function js(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feImage', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Us(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feMerge', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Vs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feMergeNode', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function _s(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feMorphology', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ws(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feOffset', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function zs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('fePointLight', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ks(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feSpecularLighting', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Qs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feSpotLight', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Zs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feTile', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Js(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('feTurbulence', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Xs(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('filter', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Ys(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('foreignObject', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function et(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('g', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function st(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('image', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function tt(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('line', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function nt(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('linearGradient', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ct(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('marker', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function dt(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('mask', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function at(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('metadata', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ot(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('mpath', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function rt(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('path', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ut(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('pattern', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function it(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('polygon', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function lt(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('polyline', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function mt(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('radialGradient', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function $t(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('rect', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function Nt(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('stop', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ft(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('switch', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function ht(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('symbol', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function It(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('text', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function pt(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('textPath', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function bt(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('tspan', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function gt(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('use', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
function yt(e) {
  const { children: t, pseudo: s, className: c, ...n } = e,
    [d] = o(s, e.pseudoId)
  return /* @__PURE__ */ a('view', { className: `${c ?? ''} ${d}`, ...n, children: t })
}
export {
  v as A,
  S as Abbr,
  w as Address,
  ws as Animate,
  Fs as AnimateTransform,
  F as Area,
  T as Article,
  M as Aside,
  O as Audio,
  C as B,
  L as Base,
  P as Bdi,
  D as Bdo,
  x as Blockquote,
  B as Body,
  H as Br,
  A as Button,
  E as Canvas,
  G as Caption,
  Ts as Circle,
  R as Cite,
  Ms as ClipPath,
  q as Code,
  j as Col,
  U as Colgroup,
  V as Data,
  _ as Datalist,
  W as Dd,
  Os as Defs,
  z as Del,
  Cs as Desc,
  K as Details,
  Q as Dfn,
  Z as Dialog,
  J as Div,
  X as Dl,
  Y as Dt,
  Ls as Ellipse,
  ee as Em,
  se as Embed,
  Ps as FeBlend,
  Ds as FeColorMatrix,
  xs as FeComponentTransfer,
  Bs as FeComposite,
  Hs as FeConvolveMatrix,
  As as FeDiffuseLighting,
  Es as FeDisplacementMap,
  Gs as FeDistantLight,
  Rs as FeFlood,
  qs as FeGaussianBlur,
  js as FeImage,
  Us as FeMerge,
  Vs as FeMergeNode,
  _s as FeMorphology,
  Ws as FeOffset,
  zs as FePointLight,
  Ks as FeSpecularLighting,
  Qs as FeSpotLight,
  Zs as FeTile,
  Js as FeTurbulence,
  te as Fieldset,
  ne as Figcaption,
  ce as Figure,
  Xs as Filter,
  de as Footer,
  Ys as ForeignObject,
  ae as Form,
  et as G,
  oe as H1,
  re as H2,
  ue as H3,
  ie as H4,
  le as H5,
  me as H6,
  $e as Head,
  Ne as Header,
  fe as Hgroup,
  he as Hr,
  Ie as Html,
  pe as I,
  be as Iframe,
  st as Image,
  ge as Img,
  ye as Input,
  ke as Ins,
  ve as Kbd,
  Se as Label,
  we as Legend,
  Fe as Li,
  tt as Line,
  nt as LinearGradient,
  Te as Link,
  Me as Main,
  Oe as Map,
  Ce as Mark,
  ct as Marker,
  dt as Mask,
  Le as Meta,
  at as Metadata,
  Pe as Meter,
  ot as Mpath,
  De as Nav,
  xe as Noscript,
  Be as Object,
  He as Ol,
  Ae as Optgroup,
  Ee as Option,
  Ge as Output,
  Re as P,
  qe as Param,
  rt as Path,
  ut as Pattern,
  je as Picture,
  it as Polygon,
  lt as Polyline,
  Ue as Pre,
  Ve as Progress,
  _e as Q,
  mt as RadialGradient,
  $t as Rect,
  We as Rp,
  ze as Rt,
  Ke as Ruby,
  Qe as S,
  Ze as Samp,
  Je as Script,
  Xe as Section,
  Ye as Select,
  es as Small,
  ss as Source,
  ts as Span,
  Nt as Stop,
  ns as Strong,
  cs as Style,
  ds as Sub,
  as as Summary,
  os as Sup,
  Ss as Svg,
  ft as Switch,
  ht as Symbol,
  rs as Table,
  us as Tbody,
  is as Td,
  ls as Template,
  It as Text,
  pt as TextPath,
  ms as Textarea,
  $s as Tfoot,
  Ns as Th,
  fs as Thead,
  hs as Time,
  Is as Title,
  ps as Tr,
  bt as Tspan,
  k as Types,
  bs as U,
  gs as Ul,
  gt as Use,
  ys as Var,
  ks as Video,
  yt as View,
  vs as Wbr,
  o as useStylesheet,
}
