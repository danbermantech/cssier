import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Polyline(props: ComponentProps<'polyline'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <polyline className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </polyline>
  )
}
