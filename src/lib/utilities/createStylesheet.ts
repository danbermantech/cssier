import type { PseudoCss } from '../types'
import { PseudoClasses, PseudoElements } from '../consts'

function parseStyles(baseQuerySelector: string, styles: PseudoCss) {
  // Generate CSS rules
  let css = ''
  Object.entries(styles).forEach(([pseudoClass, styleRules]) => {
    let querySelector = baseQuerySelector
    if (PseudoClasses.includes(pseudoClass as any)) {
      querySelector = `${baseQuerySelector}:${pseudoClass}`
    } else if (PseudoElements.includes(pseudoClass as any)) {
      querySelector = `${baseQuerySelector}::${pseudoClass}`
    } else if (pseudoClass === 'neutral') {
    } else {
      console.error(`Invalid pseudo class: ${pseudoClass}`)
    }
    const { and, ...rest } = styleRules
    if (and) {
      css += parseStyles(querySelector, and as PseudoCss)
    }
    css += `${querySelector} { ${Object.entries(rest)
      .map(([key, value]) => `${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}: ${value}`)
      .join('; ')} }`
  })
  return css
}

export default function createStylesheet(pseudoId: string, styles: PseudoCss | undefined) {
  // Check if there are styles to apply
  if (!styles) {
    const currentElement = document.head.querySelector(`style#${pseudoId}`)
    if (currentElement) currentElement.remove()
    return ''
  }

  // Find existing <style> element or create a new one
  let style = document.head.querySelector(`style#${pseudoId}`) as HTMLStyleElement
  if (!style) {
    style = document.createElement('style')
    style.id = pseudoId
    style.type = 'text/css'
    document.head.appendChild(style)
  }

  // Generate CSS rules
  let css = parseStyles(`.${pseudoId}`, styles)

  // Apply CSS rules to <style> element
  style.textContent = css

  return css
}
