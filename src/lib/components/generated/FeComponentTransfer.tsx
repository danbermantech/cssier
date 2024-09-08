import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeComponentTransfer(
  props: ComponentProps<'feComponentTransfer'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feComponentTransfer className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feComponentTransfer>
  )
}
