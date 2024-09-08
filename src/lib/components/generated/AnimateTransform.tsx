import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function AnimateTransform(
  props: ComponentProps<'animateTransform'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <animateTransform className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </animateTransform>
  )
}
