import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function RadialGradient(
  props: ComponentProps<'radialGradient'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <radialGradient className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </radialGradient>
  )
}
