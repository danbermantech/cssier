import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Dfn(props: ComponentProps<'dfn'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <dfn className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </dfn>
  )
}
