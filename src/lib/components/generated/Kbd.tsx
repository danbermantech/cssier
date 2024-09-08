import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Kbd(props: ComponentProps<'kbd'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <kbd className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </kbd>
  )
}
