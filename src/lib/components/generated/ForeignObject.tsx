import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function ForeignObject(
  props: ComponentProps<'foreignObject'> & { pseudo?: PseudoCss; pseudoId?: string },
) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <foreignObject className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </foreignObject>
  )
}
