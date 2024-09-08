;(function (d, i) {
  typeof exports == 'object' && typeof module < 'u'
    ? i(exports, require('react'), require('react/jsx-runtime'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'react', 'react/jsx-runtime'], i)
    : ((d = typeof globalThis < 'u' ? globalThis : d || self), i((d.cssier = {}), d.React, d['react/jsx-runtime']))
})(this, function (d, i, l) {
  'use strict'
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
    $ = [
      'part',
      'theme',
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
      'before',
      'after',
      'first-line',
      'first-letter',
      'selection',
      'placeholder',
      'backdrop',
      'marker',
      '-webkit-before',
      '-webkit-after',
      '-webkit-first-line',
      '-webkit-first-letter',
      '-webkit-selection',
      '-webkit-placeholder',
      '-webkit-backdrop',
      '-webkit-marker',
      '-webkit-scrollbar',
      '-webkit-scrollbar-thumb',
      '-webkit-scrollbar-track',
      '-webkit-scrollbar-track-piece',
      '-webkit-scrollbar-corner',
      '-webkit-scrollbar-button',
      '-webkit-resizer',
      '-webkit-file-upload-button',
      '-webkit-inner-spin-button',
      '-webkit-outer-spin-button',
      '-webkit-progress-bar',
      '-webkit-progress-value',
      '-webkit-progress-inner-element',
      '-webkit-progress-outer-element',
      'slotted(*)',
      'slotted(div)',
      'slotted(span)',
      'slotted(p)',
      'slotted(a)',
      'slotted(img)',
      'slotted(button)',
      'slotted(input)',
      'part(dialog-overlay)',
      'part(tab-content)',
      'part(slider-track)',
      'part(slider-thumb)',
      'part(menu-icon)',
      'part(menu-label)',
      'part(list-group)',
      'part(list-item)',
    ],
    f = Object.freeze(
      Object.defineProperty({ __proto__: null, PseudoClasses: u, PseudoElements: $ }, Symbol.toStringTag, {
        value: 'Module',
      }),
    )
  function m(e, c) {
    if (!c) {
      const n = document.head.querySelector(`style#${e}`)
      return n && n.remove(), ''
    }
    let s = document.head.querySelector(`style#${e}`)
    s || ((s = document.createElement('style')), (s.id = e), (s.type = 'text/css'), document.head.appendChild(s))
    let t = ''
    return (
      Object.entries(c).forEach(([n, a]) => {
        let r = ''
        n === 'neutral'
          ? (r = `.${e}`)
          : u.includes(n)
          ? (r = `.${e}:${n}`)
          : $.includes(n)
          ? (r = `.${e}::${n}`)
          : (console.error(`Invalid pseudo class: ${n}`), console.log(u, $, n, n in u, n in $)),
          (t += `${r} { ${Object.entries(a)
            .map(([Ic, bc]) => `${Ic.replace(/[A-Z]/g, (gc) => `-${gc.toLowerCase()}`)}: ${bc}`)
            .join('; ')} }`)
      }),
      (s.textContent = t),
      t
    )
  }
  function N(e, c) {
    if (e == null && c == null) return !0
    if (
      (e == null && typeof c == 'object') ||
      (c == null && typeof e == 'object') ||
      Object.keys(e).length !== Object.keys(c).length
    )
      return !1
    for (const s in e)
      if (e[s] !== c[s]) return typeof e[s] == 'object' && typeof c[s] == 'object' && !N(e[s], c[s]), !1
    return !0
  }
  const h = [
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
  function I() {
    let e = ''
    for (let c = 0; c < 6; c++) e += h[Math.floor(Math.random() * 24)]
    return e
  }
  function o(e, c) {
    const [s] = i.useState(() => c ?? I()),
      [t, n] = i.useState({}),
      [a, r] = i.useState('')
    return (
      i.useEffect(() => {
        N(t, e) || (n(e), r(m(s, e)))
      }, [s, e, t, r]),
      [s, a]
    )
  }
  function b(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('a', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function g(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('abbr', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function y(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('address', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function F(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('area', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function S(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('article', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function k(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('aside', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function T(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('audio', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function v(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('b', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function M(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('base', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function D(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('bdi', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function P(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('bdo', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function w(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('blockquote', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function C(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('body', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function L(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('br', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function O(e) {
    const { children: c, pseudo: s, className: t, pseudoId: n, ...a } = e,
      [r] = o(s, n)
    return l.jsx('button', { className: `${t ?? ''} ${r}`, ...a, children: c })
  }
  function p(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('canvas', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function B(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('caption', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function H(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('cite', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function A(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('code', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function E(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('col', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function G(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('colgroup', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function j(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('data', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function q(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('datalist', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function U(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('dd', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function V(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('del', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function W(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('details', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function _(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('dfn', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function K(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('dialog', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Q(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('div', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function z(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('dl', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Z(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('dt', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function J(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('em', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function X(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('embed', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Y(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('fieldset', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function x(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('figcaption', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function R(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('figure', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ee(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('footer', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function se(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('form', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ce(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('h1', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ne(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('h2', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function te(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('h3', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ae(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('h4', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function de(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('h5', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function oe(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('h6', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function le(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('head', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function re(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('header', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ie(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('hgroup', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ue(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('hr', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function $e(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('html', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ne(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('i', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function fe(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('iframe', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function me(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('img', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function he(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('input', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ie(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('ins', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function be(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('kbd', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ge(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('label', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ye(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('legend', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Fe(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('li', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Se(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('link', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ke(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('main', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Te(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('map', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ve(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('mark', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Me(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('meta', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function De(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('meter', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Pe(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('nav', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function we(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('noscript', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ce(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('object', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Le(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('ol', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Oe(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('optgroup', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function pe(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('option', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Be(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('output', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function He(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('p', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ae(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('param', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ee(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('picture', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ge(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('pre', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function je(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('progress', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function qe(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('q', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ue(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('rp', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ve(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('rt', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function We(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('ruby', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function _e(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('s', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ke(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('samp', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Qe(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('script', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ze(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('section', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ze(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('select', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Je(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('small', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Xe(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('source', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ye(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('span', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function xe(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('strong', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Re(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('style', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function es(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('sub', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ss(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('summary', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function cs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('sup', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ns(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('table', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ts(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('tbody', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function as(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('td', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ds(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('template', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function os(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('textarea', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ls(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('tfoot', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function rs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('th', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function is(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('thead', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function us(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('time', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function $s(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('title', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ns(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('tr', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function fs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('u', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ms(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('ul', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function hs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('var', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Is(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('video', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function bs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('wbr', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function gs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('svg', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ys(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('animate', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Fs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('animateTransform', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ss(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('circle', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ks(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('clipPath', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ts(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('defs', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function vs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('desc', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ms(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('ellipse', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ds(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feBlend', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ps(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feColorMatrix', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ws(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feComponentTransfer', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Cs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feComposite', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ls(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feConvolveMatrix', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Os(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feDiffuseLighting', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ps(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feDisplacementMap', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Bs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feDistantLight', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Hs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feFlood', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function As(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feGaussianBlur', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Es(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feImage', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Gs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feMerge', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function js(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feMergeNode', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function qs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feMorphology', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Us(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feOffset', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Vs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('fePointLight', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ws(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feSpecularLighting', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function _s(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feSpotLight', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ks(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feTile', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Qs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('feTurbulence', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function zs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('filter', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Zs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('foreignObject', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Js(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('g', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Xs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('image', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Ys(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('line', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function xs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('linearGradient', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Rs(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('marker', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ec(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('mask', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function sc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('metadata', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function cc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('mpath', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function nc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('path', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function tc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('pattern', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ac(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('polygon', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function dc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('polyline', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function oc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('radialGradient', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function lc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('rect', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function rc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('stop', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function ic(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('switch', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function uc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('symbol', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function $c(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('text', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function Nc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('textPath', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function fc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('tspan', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function mc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('use', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  function hc(e) {
    const { children: c, pseudo: s, className: t, ...n } = e,
      [a] = o(s, e.pseudoId)
    return l.jsx('view', { className: `${t ?? ''} ${a}`, ...n, children: c })
  }
  ;(d.A = b),
    (d.Abbr = g),
    (d.Address = y),
    (d.Animate = ys),
    (d.AnimateTransform = Fs),
    (d.Area = F),
    (d.Article = S),
    (d.Aside = k),
    (d.Audio = T),
    (d.B = v),
    (d.Base = M),
    (d.Bdi = D),
    (d.Bdo = P),
    (d.Blockquote = w),
    (d.Body = C),
    (d.Br = L),
    (d.Button = O),
    (d.Canvas = p),
    (d.Caption = B),
    (d.Circle = Ss),
    (d.Cite = H),
    (d.ClipPath = ks),
    (d.Code = A),
    (d.Col = E),
    (d.Colgroup = G),
    (d.Data = j),
    (d.Datalist = q),
    (d.Dd = U),
    (d.Defs = Ts),
    (d.Del = V),
    (d.Desc = vs),
    (d.Details = W),
    (d.Dfn = _),
    (d.Dialog = K),
    (d.Div = Q),
    (d.Dl = z),
    (d.Dt = Z),
    (d.Ellipse = Ms),
    (d.Em = J),
    (d.Embed = X),
    (d.FeBlend = Ds),
    (d.FeColorMatrix = Ps),
    (d.FeComponentTransfer = ws),
    (d.FeComposite = Cs),
    (d.FeConvolveMatrix = Ls),
    (d.FeDiffuseLighting = Os),
    (d.FeDisplacementMap = ps),
    (d.FeDistantLight = Bs),
    (d.FeFlood = Hs),
    (d.FeGaussianBlur = As),
    (d.FeImage = Es),
    (d.FeMerge = Gs),
    (d.FeMergeNode = js),
    (d.FeMorphology = qs),
    (d.FeOffset = Us),
    (d.FePointLight = Vs),
    (d.FeSpecularLighting = Ws),
    (d.FeSpotLight = _s),
    (d.FeTile = Ks),
    (d.FeTurbulence = Qs),
    (d.Fieldset = Y),
    (d.Figcaption = x),
    (d.Figure = R),
    (d.Filter = zs),
    (d.Footer = ee),
    (d.ForeignObject = Zs),
    (d.Form = se),
    (d.G = Js),
    (d.H1 = ce),
    (d.H2 = ne),
    (d.H3 = te),
    (d.H4 = ae),
    (d.H5 = de),
    (d.H6 = oe),
    (d.Head = le),
    (d.Header = re),
    (d.Hgroup = ie),
    (d.Hr = ue),
    (d.Html = $e),
    (d.I = Ne),
    (d.Iframe = fe),
    (d.Image = Xs),
    (d.Img = me),
    (d.Input = he),
    (d.Ins = Ie),
    (d.Kbd = be),
    (d.Label = ge),
    (d.Legend = ye),
    (d.Li = Fe),
    (d.Line = Ys),
    (d.LinearGradient = xs),
    (d.Link = Se),
    (d.Main = ke),
    (d.Map = Te),
    (d.Mark = ve),
    (d.Marker = Rs),
    (d.Mask = ec),
    (d.Meta = Me),
    (d.Metadata = sc),
    (d.Meter = De),
    (d.Mpath = cc),
    (d.Nav = Pe),
    (d.Noscript = we),
    (d.Object = Ce),
    (d.Ol = Le),
    (d.Optgroup = Oe),
    (d.Option = pe),
    (d.Output = Be),
    (d.P = He),
    (d.Param = Ae),
    (d.Path = nc),
    (d.Pattern = tc),
    (d.Picture = Ee),
    (d.Polygon = ac),
    (d.Polyline = dc),
    (d.Pre = Ge),
    (d.Progress = je),
    (d.Q = qe),
    (d.RadialGradient = oc),
    (d.Rect = lc),
    (d.Rp = Ue),
    (d.Rt = Ve),
    (d.Ruby = We),
    (d.S = _e),
    (d.Samp = Ke),
    (d.Script = Qe),
    (d.Section = ze),
    (d.Select = Ze),
    (d.Small = Je),
    (d.Source = Xe),
    (d.Span = Ye),
    (d.Stop = rc),
    (d.Strong = xe),
    (d.Style = Re),
    (d.Sub = es),
    (d.Summary = ss),
    (d.Sup = cs),
    (d.Svg = gs),
    (d.Switch = ic),
    (d.Symbol = uc),
    (d.Table = ns),
    (d.Tbody = ts),
    (d.Td = as),
    (d.Template = ds),
    (d.Text = $c),
    (d.TextPath = Nc),
    (d.Textarea = os),
    (d.Tfoot = ls),
    (d.Th = rs),
    (d.Thead = is),
    (d.Time = us),
    (d.Title = $s),
    (d.Tr = Ns),
    (d.Tspan = fc),
    (d.Types = f),
    (d.U = fs),
    (d.Ul = ms),
    (d.Use = mc),
    (d.Var = hs),
    (d.Video = Is),
    (d.View = hc),
    (d.Wbr = bs),
    (d.useStylesheet = o),
    Object.defineProperty(d, Symbol.toStringTag, { value: 'Module' })
})
