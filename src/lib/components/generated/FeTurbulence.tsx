import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeTurbulence(
  props: ComponentProps<'feTurbulence'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feTurbulence className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feTurbulence>
  )
}
