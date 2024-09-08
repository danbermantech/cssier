import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Abbr(props: ComponentProps<'abbr'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <abbr className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </abbr>
  )
}
