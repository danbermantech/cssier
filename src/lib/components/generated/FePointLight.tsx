import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FePointLight(
  props: ComponentProps<'fePointLight'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <fePointLight className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </fePointLight>
  )
}
