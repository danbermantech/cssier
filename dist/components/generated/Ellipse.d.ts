import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Ellipse(
  props: ComponentProps<'ellipse'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
