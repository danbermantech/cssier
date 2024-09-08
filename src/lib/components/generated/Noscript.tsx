import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Noscript(props: ComponentProps<'noscript'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <noscript className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </noscript>
  )
}
