import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
import useStylesheet from '../../hooks/useStylesheet'

export default function Iframe(props: ComponentProps<'iframe'> & { pseudo?: PseudoCss; pseudoId?: string }) {
  const { children, pseudo, className, ...rest } = props
  const [id] = useStylesheet(pseudo, props.pseudoId)
  return (
    <iframe className={`${className ?? ''} ${id}`} {...rest}>
      {children}
    </iframe>
  )
}
