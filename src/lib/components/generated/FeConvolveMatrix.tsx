import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeConvolveMatrix(
  props: ComponentProps<'feConvolveMatrix'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feConvolveMatrix className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feConvolveMatrix>
  )
}
