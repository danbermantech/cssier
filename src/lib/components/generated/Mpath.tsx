import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Mpath(props: ComponentProps<'mpath'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <mpath className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </mpath>
  )
}
