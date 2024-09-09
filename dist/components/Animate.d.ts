import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Animate(
  props: ComponentProps<'animate'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
