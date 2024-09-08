import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Canvas(props: ComponentProps<'canvas'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <canvas className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </canvas>
  )
}
