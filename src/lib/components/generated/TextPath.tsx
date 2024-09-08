import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function TextPath(props: ComponentProps<'textPath'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <textPath className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </textPath>
  )
}
