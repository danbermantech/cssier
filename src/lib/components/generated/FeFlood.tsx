import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function FeFlood(props: ComponentProps<'feFlood'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <feFlood className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </feFlood>
  )
}
