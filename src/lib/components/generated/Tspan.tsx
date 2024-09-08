import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Tspan(props: ComponentProps<'tspan'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <tspan className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </tspan>
  )
}
