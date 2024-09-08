import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Datalist(props: ComponentProps<'datalist'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <datalist className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </datalist>
  )
}
