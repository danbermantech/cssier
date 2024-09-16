import type { ICssProperty } from '../types'

function parseProperty(property: ICssProperty) {
  const syntax = Array.isArray(property.syntax) ? property.syntax.join(', ') : property.syntax
  return `@property ${property.name} {
    syntax: ${syntax};
    inherits: ${property.inherits};
    initial-value: ${property.initialValue};
}
    
body{
    ${property.name}: ${property.initialValue};
}
`
}

export default function createCssProperty(propertyId: string, property?: ICssProperty) {
  // Check if there are styles to apply
  if (!property) {
    const currentElement = document.head.querySelector(`style#${propertyId}`)
    if (currentElement) currentElement.remove()
    return ''
  }

  // Find existing <style> element or create a new one
  let style = document.head.querySelector(`style#${propertyId}`) as HTMLStyleElement
  if (!style) {
    style = document.createElement('style')
    style.id = propertyId
    style.type = 'text/css'
    document.head.appendChild(style)
  }

  // Generate CSS rules
  let css = parseProperty(property)
  style.textContent = css

  return css
}
