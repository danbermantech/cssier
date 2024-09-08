import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeGaussianBlur(
  props: ComponentProps<'feGaussianBlur'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feGaussianBlur className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feGaussianBlur>
  )
}
