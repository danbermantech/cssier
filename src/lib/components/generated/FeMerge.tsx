import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeMerge(props: ComponentProps<'feMerge'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feMerge className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feMerge>
  )
}
