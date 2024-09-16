import { useEffect, useState } from 'react'
import createStylesheet from '../utilities/createStylesheet'
import type { PseudoClass, PseudoCss } from '../types'
import { generateId } from '../utilities'

function compare(obj1: PseudoCss | undefined, obj2: PseudoCss | undefined) {
  if (obj1 == undefined && obj2 == undefined) return true
  if (obj1 == undefined && typeof obj2 == 'object') return false
  if (obj2 == undefined && typeof obj1 == 'object') return false
  if (Object.keys(obj1 as PseudoCss).length !== Object.keys(obj2 as PseudoCss).length) {
    return false
  }
  for (const key in obj1) {
    if (obj1[key as PseudoClass] !== (obj2 as PseudoCss)[key as PseudoClass]) {
      if (typeof obj1[key as PseudoClass] === 'object' && typeof (obj2 as PseudoCss)[key as PseudoClass] === 'object') {
        if (!compare(obj1[key as PseudoClass] as PseudoCss, (obj2 as PseudoCss)[key as PseudoClass] as PseudoCss)) {
          return false
        }
      } else if (obj1![key as PseudoClass] !== obj2![key as PseudoClass]) {
        return false
      }
    }
  }

  return true
}

export default function useStylesheet(styles: PseudoCss | undefined, pseudoId?: string) {
  const [id] = useState(() => pseudoId ?? generateId())
  const [prevStyles, setPrevStyles] = useState<PseudoCss | undefined>({} as PseudoCss)
  const [css, setCss] = useState<string>('')
  useEffect(() => {
    if (!compare(prevStyles, styles)) {
      setPrevStyles(styles)
      setCss(createStylesheet(id, styles))
    }
  }, [id, styles, prevStyles, setCss])
  return [id, css]
}
