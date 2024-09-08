import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeDisplacementMap(
  props: ComponentProps<'feDisplacementMap'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feDisplacementMap className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feDisplacementMap>
  )
}
