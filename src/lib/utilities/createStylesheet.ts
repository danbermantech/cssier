import { PseudoClasses, PseudoCss, PseudoElements } from '../types'

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
  let css = ''
  Object.entries(styles).forEach(([pseudoClass, styleRules]) => {
    let querySelector = ''
    if (pseudoClass === 'neutral') {
      querySelector = `.${pseudoId}`
    } else if (PseudoClasses.includes(pseudoClass as any)) {
      querySelector = `.${pseudoId}:${pseudoClass}`
    } else if (PseudoElements.includes(pseudoClass as any)) {
      querySelector = `.${pseudoId}::${pseudoClass}`
    } else {
      console.error(`Invalid pseudo class: ${pseudoClass}`)
      console.log(
        PseudoClasses,
        PseudoElements,
        pseudoClass,
        pseudoClass in PseudoClasses,
        pseudoClass in PseudoElements,
      )
      // throw new Error(`Invalid pseudo class: ${pseudoClass}`)
    }

    // const querySelector = pseudoClass == 'neutral' ? `.${pseudoId}` : `.${pseudoId}:${pseudoClass}`;
    css += `${querySelector} { ${Object.entries(styleRules)
      .map(([key, value]) => `${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}: ${value}`)
      .join('; ')} }`
  })

  // Apply CSS rules to <style> element
  style.textContent = css

  return css
}
