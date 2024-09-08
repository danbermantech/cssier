import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeMergeNode(props: ComponentProps<'feMergeNode'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feMergeNode className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feMergeNode>
  )
}
