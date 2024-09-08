import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Textarea(props: ComponentProps<'textarea'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <textarea className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </textarea>
  )
}
