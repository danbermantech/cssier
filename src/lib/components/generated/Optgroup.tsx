import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Optgroup(props: ComponentProps<'optgroup'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <optgroup className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </optgroup>
  )
}
