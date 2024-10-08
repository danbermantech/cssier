import { CSSProperties } from 'react'

export type PseudoClass =
  | 'active'
  | 'checked'
  | 'disabled'
  | 'empty'
  | 'enabled'
  | 'firstChild'
  | 'firstOfType'
  | 'focus'
  | 'hover'
  | 'inRange'
  | 'invalid'
  | 'lastChild'
  | 'lastOfType'
  | 'link'
  | 'not'
  | 'nthChild'
  | 'nthLastChild'
  | 'nthLastOfType'
  | 'nthOfType'
  | 'onlyOfType'
  | 'onlyChild'
  | 'optional'
  | 'outOfRange'
  | 'readOnly'
  | 'readWrite'
  | 'required'
  | 'root'
  | 'target'
  | 'valid'
  | 'visited'

//The following type is all pseudoelements and shadow-dom elements that can be used in CSS

export type PseudoElement =
  // Shadow DOM elements
  | 'part'
  | 'theme'

  // Shadow DOM elements for specific control
  | 'part(container)'
  | 'part(label)'
  | 'part(option)'
  | 'part(item)'
  | 'part(placeholder)'
  | 'part(header)'
  | 'part(footer)'
  | 'part(overlay)'
  | 'part(menu)'
  | 'part(menuitem)'
  | 'part(list)'
  | 'part(listitem)'
  | 'part(progress-bar)'
  | 'part(progress-value)'
  | 'part(input-container)'
  | 'part(input)'
  | 'part(select)'
  | 'part(option-group)'
  | 'part(option-item)'
  | 'part(button)'
  | 'part(dialog)'
  | 'part(menu-button)'
  | 'part(tablist)'
  | 'part(tab)'
  | 'part(tab-panel)'
  | 'part(carousel)'
  | 'part(slider)'
  | 'part(tooltip)'
  | 'part(radio)'
  | 'part(checkbox)'
  | 'part(switch)'
  | 'part(range)'
  | 'part(textarea)'
  | 'part(search)'
  | 'part(navbar)'
  | 'part(breadcrumbs)'

  // Standard pseudoelement
  | 'before'
  | 'after'
  | 'first-line'
  | 'first-letter'
  | 'selection'
  | 'placeholder'
  | 'backdrop'
  | 'marker'

  // WebKit-prefixed pseudoelement
  | '-webkit-before'
  | '-webkit-after'
  | '-webkit-first-line'
  | '-webkit-first-letter'
  | '-webkit-selection'
  | '-webkit-placeholder'
  | '-webkit-backdrop'
  | '-webkit-marker'

  // WebKit scrollbar pseudo-element
  | '-webkit-scrollbar'
  | '-webkit-scrollbar-thumb'
  | '-webkit-scrollbar-track'
  | '-webkit-scrollbar-track-piece'
  | '-webkit-scrollbar-corner'
  | '-webkit-scrollbar-button'
  | '-webkit-resizer'

  // Other WebKit-prefixed pseudoelement
  | '-webkit-file-upload-button'
  | '-webkit-inner-spin-button'
  | '-webkit-outer-spin-button'
  | '-webkit-progress-bar'
  | '-webkit-progress-value'
  | '-webkit-progress-inner-element'
  | '-webkit-progress-outer-element'

  // Additional pseudo-elements related to shadow DOM and Web Component
  | 'slotted(*)'
  | 'slotted(div)'
  | 'slotted(span)'
  | 'slotted(p)'
  | 'slotted(a)'
  | 'slotted(img)'
  | 'slotted(button)'
  | 'slotted(input)'

  // Custom and experimental shadow DOM parts (subject to changes
  | 'part(dialog-overlay)'
  | 'part(tab-content)'
  | 'part(slider-track)'
  | 'part(slider-thumb)'
  | 'part(menu-icon)'
  | 'part(menu-label)'
  | 'part(list-group)'
  | 'part(list-item)'

// console.log(shadowAndPseudoElements);

type CssVariable = `--${string}`

export type ExtendedCssProperties = React.CSSProperties & {
  [key: CssVariable]: string
}

export type PseudoCss = Partial<{
  [key in PseudoClass | 'neutral' | PseudoElement]: ExtendedCssProperties & { and?: PseudoCss }
}>

export type CssVariableName = `--${string}`

export type CssPropertySyntax =
  | '<length>'
  | '<number>'
  | '<percentage>'
  | '<length-percentage>'
  | '<color>'
  | '<image>'
  | '<url>'
  | '<integer>'
  | '<angle>'
  | '<time>'
  | '<resolution>'
  | '<transform-function>'
  | '<custom-ident>'

export type ICssProperty = {
  syntax: CssPropertySyntax | CssPropertySyntax[]
  name: CssVariableName
  inherits: boolean
  initialValue: string
}

export type AnimationDefinition = {
  delay?: CSSProperties['animationDelay']
  direction?: CSSProperties['animationDirection']
  duration?: CSSProperties['animationDuration']
  fillMode?: CSSProperties['animationFillMode']
  iterationCount?: CSSProperties['animationIterationCount']
  name: CSSProperties['animationName']
  playState?: CSSProperties['animationPlayState']
  timingFunction?: CSSProperties['animationTimingFunction']
  keyframes: Record<string, ExtendedCssProperties>
}
