import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeDistantLight(
  props: ComponentProps<'feDistantLight'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feDistantLight className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feDistantLight>
  )
}
