import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Rect(
  props: ComponentProps<'rect'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
