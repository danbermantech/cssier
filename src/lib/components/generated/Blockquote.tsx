import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Blockquote(props: ComponentProps<'blockquote'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <blockquote className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </blockquote>
  )
}
