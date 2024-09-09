//@ts-nocheck
import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
import useStylesheet from '../hooks/useStylesheet'

export default function COMPONENT_NAME(props: ComponentProps<'TAG'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <TAG className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </TAG>
  )
}
