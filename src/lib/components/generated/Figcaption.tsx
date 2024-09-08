import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Figcaption(props: ComponentProps<'figcaption'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <figcaption className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </figcaption>
  )
}
