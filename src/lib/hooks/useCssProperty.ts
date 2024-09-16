import { useEffect, useState } from 'react'
import type { ICssProperty } from '../types'
import { generateId } from '../utilities'
import createCssProperty from '../utilities/createCssProperty'

export default function useStylesheet(property: ICssProperty, propertyId?: string) {
  const [id] = useState(() => propertyId ?? generateId())
  //   const [prevStyles, setPrevStyles] = useState<PseudoCss | undefined>({} as PseudoCss)
  const [css, setCss] = useState<string>('')
  useEffect(() => {
    setCss(createCssProperty(id, property))
  }, [id, setCss, property])
  return [id, `var(${property.name})`, css]
}
