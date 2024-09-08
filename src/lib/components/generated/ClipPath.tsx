import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function ClipPath(props: ComponentProps<'clipPath'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <clipPath className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </clipPath>
  )
}
