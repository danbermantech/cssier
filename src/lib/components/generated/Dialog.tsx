import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Dialog(props: ComponentProps<'dialog'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <dialog className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </dialog>
  )
}
