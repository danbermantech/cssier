import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Style(props: ComponentProps<'style'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <style className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </style>
  )
}
