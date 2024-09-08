import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeMorphology(
  props: ComponentProps<'feMorphology'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feMorphology className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feMorphology>
  )
}
