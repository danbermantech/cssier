import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeSpecularLighting(
  props: ComponentProps<'feSpecularLighting'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feSpecularLighting className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feSpecularLighting>
  )
}
