import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Button(props: ComponentProps<'button'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, pseudoId, ...rest } = props
  const [id] = useStylesheet(pseudo, pseudoId)
  return (
    <button className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </button>
  )
}
