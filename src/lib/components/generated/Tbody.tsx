import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Tbody(props: ComponentProps<'tbody'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <tbody className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </tbody>
  )
}
