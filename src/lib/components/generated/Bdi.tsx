import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Bdi(props: ComponentProps<'bdi'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <bdi className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </bdi>
  )
}
