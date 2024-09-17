//@ts-nocheck
import { ComponentProps } from 'react'
import type { PseudoCss } from '../types'
import useStylesheet from '../hooks/useStylesheet'

export default function COMPONENT_NAME(props: ComponentProps<'TAG'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return <TAG className={`${className ?? ''} ${id}`} {...rest} />
}
