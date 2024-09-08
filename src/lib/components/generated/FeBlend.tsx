import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeBlend(props: ComponentProps<'feBlend'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feBlend className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feBlend>
  )
}
