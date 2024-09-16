import type { AnimationDefinition } from '../types'

export default function createAnimation(animationId: string, definition: AnimationDefinition | undefined) {
  // Check if there are styles to apply
  if (!definition) {
    const currentElement = document.head.querySelector(`style#${animationId}`)
    if (currentElement) currentElement.remove()
    return ''
  }

  // Find existing <style> element or create a new one
  let style = document.head.querySelector(`style#${animationId}`) as HTMLStyleElement
  console.log(animationId)
  if (!style) {
    style = document.createElement('style')
    style.id = animationId
    style.type = 'text/css'
    document.head.appendChild(style)
  }

  // Generate CSS rules
  let css = ''
  css += `@keyframes ${definition.name} {`
  Object.entries(definition.keyframes).forEach(([keyframe, styleRules]) => {
    css += `${keyframe} {\n`
    css += Object.entries(styleRules)
      .map(([key, value]) => `${key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}: ${value}`)
      .join('; \n')
    css += '\n}\n'
  })
  css += '}\n'

  css += `.${animationId} {\n`
  const delay = definition.delay ?? '0s'
  const direction = definition.direction ?? 'normal'
  const duration = definition.duration ?? '2s'
  const fillMode = definition.fillMode ?? 'none'
  const iterationCount = definition.iterationCount ?? '1'
  const playState = definition.playState ?? 'running'
  const timingFunction = definition.timingFunction ?? 'ease'

  css += `    animation-name: ${definition.name};\n`
  if (definition.delay) css += `    animation-delay: ${delay};\n`
  if (definition.direction) css += `    animation-direction: ${direction};\n`
  if (definition.duration) css += `    animation-duration: ${duration};\n`
  if (definition.fillMode) css += `    animation-fill-mode: ${fillMode};\n`
  if (definition.iterationCount) css += `    animation-iteration-count: ${iterationCount};\n`
  if (definition.playState) css += `    animation-play-state: ${playState};\n`
  if (definition.timingFunction) css += `    animation-timing-function: ${timingFunction};\n`
  css += '}\n'

  style.textContent = css

  const animationPropertyValue = `${definition.name} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`

  return [css, animationPropertyValue]
}
