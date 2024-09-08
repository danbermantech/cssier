import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Bdo(props: ComponentProps<'bdo'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <bdo className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </bdo>
  )
}
