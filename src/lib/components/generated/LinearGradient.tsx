import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function LinearGradient(
  props: ComponentProps<'linearGradient'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <linearGradient className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </linearGradient>
  )
}
