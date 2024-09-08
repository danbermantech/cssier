import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Polygon(props: ComponentProps<'polygon'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <polygon className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </polygon>
  )
}
