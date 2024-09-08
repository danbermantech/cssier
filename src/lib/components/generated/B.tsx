import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function B(props: ComponentProps<'b'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <b className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </b>
  )
}
