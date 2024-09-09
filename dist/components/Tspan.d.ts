import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Tspan(
  props: ComponentProps<'tspan'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
