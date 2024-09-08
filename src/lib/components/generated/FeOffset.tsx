import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeOffset(props: ComponentProps<'feOffset'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feOffset className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feOffset>
  )
}
