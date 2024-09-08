import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Ellipse(props: ComponentProps<'ellipse'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <ellipse className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </ellipse>
  )
}
