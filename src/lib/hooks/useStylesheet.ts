import { useEffect, useState } from 'react'
import createStylesheet from '../utilities/createStylesheet'
import { PseudoClass, PseudoCss } from '../types'

function shallowCompare(obj1: PseudoCss | undefined, obj2: PseudoCss | undefined) {
  if (obj1 == undefined && obj2 == undefined) return true
  if (obj1 == undefined && typeof obj2 == 'object') return false
  if (obj2 == undefined && typeof obj1 == 'object') return false
  if (Object.keys(obj1 as PseudoCss).length !== Object.keys(obj2 as PseudoCss).length) {
    return false
  }

  for (const key in obj1) {
    if (obj1[key as PseudoClass] !== (obj2 as PseudoCss)[key as PseudoClass]) {
      if (typeof obj1[key as PseudoClass] === 'object' && typeof (obj2 as PseudoCss)[key as PseudoClass] === 'object') {
        if (
          !shallowCompare(obj1[key as PseudoClass] as PseudoCss, (obj2 as PseudoCss)[key as PseudoClass] as PseudoCss)
        ) {
          return false
        }
      }
      return false
    }
  }

  return true
}

const alphabet = [
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

function generateId() {
  let id = ''
  for (let i = 0; i < 6; i++) {
    id += alphabet[Math.floor(Math.random() * 24)]
  }
  return id
}

export default function useStylesheet(styles: PseudoCss | undefined, pseudoId?: string) {
  const [id] = useState(() => pseudoId ?? generateId())
  const [prevStyles, setPrevStyles] = useState<PseudoCss | undefined>({} as PseudoCss)
  const [css, setCss] = useState<string>('')
  useEffect(() => {
    if (!shallowCompare(prevStyles, styles)) {
      setPrevStyles(styles)
      setCss(createStylesheet(id, styles))
    }
  }, [id, styles, prevStyles, setCss])
  return [id, css]
}
