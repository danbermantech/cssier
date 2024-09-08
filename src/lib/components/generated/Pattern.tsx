import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Pattern(props: ComponentProps<'pattern'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <pattern className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </pattern>
  )
}
