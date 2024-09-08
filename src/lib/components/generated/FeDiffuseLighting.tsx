import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeDiffuseLighting(
  props: ComponentProps<'feDiffuseLighting'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feDiffuseLighting className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feDiffuseLighting>
  )
}
