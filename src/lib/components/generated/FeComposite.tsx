import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeComposite(props: ComponentProps<'feComposite'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feComposite className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feComposite>
  )
}
