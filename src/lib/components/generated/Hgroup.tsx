import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Hgroup(props: ComponentProps<'hgroup'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <hgroup className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </hgroup>
  )
}
