import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Rect(props: ComponentProps<'rect'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <rect className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </rect>
  )
}
