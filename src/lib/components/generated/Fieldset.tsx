import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Fieldset(props: ComponentProps<'fieldset'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <fieldset className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </fieldset>
  )
}
