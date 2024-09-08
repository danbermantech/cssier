import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Div(
  props: ComponentProps<'div'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
