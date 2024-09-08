import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Metadata(props: ComponentProps<'metadata'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <metadata className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </metadata>
  )
}
