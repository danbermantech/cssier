import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function RadialGradient(
  props: ComponentProps<'radialGradient'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
