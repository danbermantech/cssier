import { useEffect, useState } from 'react'
import { createAnimation, generateId } from '../utilities'
import type { AnimationDefinition } from '../types'

function compare(obj1: AnimationDefinition | undefined, obj2: AnimationDefinition | undefined) {
  if (obj1 == undefined && obj2 == undefined) return true
  if (obj1 == undefined && typeof obj2 == 'object') return false
  if (obj2 == undefined && typeof obj1 == 'object') return false
  if (Object.keys(obj1 as AnimationDefinition).length !== Object.keys(obj2 as AnimationDefinition).length) {
    return false
  }

  if (obj1?.duration !== obj2?.duration) return false
  if (obj1?.delay !== obj2?.delay) return false
  if (obj1?.direction !== obj2?.direction) return false
  if (obj1?.fillMode !== obj2?.fillMode) return false
  if (obj1?.iterationCount !== obj2?.iterationCount) return false
  if (obj1?.name !== obj2?.name) return false
  if (obj1?.playState !== obj2?.playState) return false
  if (obj1?.timingFunction !== obj2?.timingFunction) return false
  if (JSON.stringify(obj1?.keyframes) !== JSON.stringify(obj2?.keyframes)) return false

  return true
}

export default function useAnimation(styles: AnimationDefinition, animationId?: string) {
  const [id] = useState(() => animationId ?? generateId())
  const [prevStyles, setPrevStyles] = useState<AnimationDefinition | undefined>({} as AnimationDefinition)
  const [css, setCss] = useState<string>('')
  const [property, setProperty] = useState<string>('')
  useEffect(() => {
    if (!compare(prevStyles, styles)) {
      setPrevStyles(styles)
      const [css, animationPropertyValue] = createAnimation(id, styles)
      setCss(css)
      setProperty(animationPropertyValue)
    }
  }, [id, styles, prevStyles, setCss])
  return [id, property, css]
}
