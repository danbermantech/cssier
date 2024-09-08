import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Ruby(props: ComponentProps<'ruby'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <ruby className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </ruby>
  )
}
