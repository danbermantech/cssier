import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Tfoot(props: ComponentProps<'tfoot'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <tfoot className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </tfoot>
  )
}
