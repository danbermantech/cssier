import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function P(
  props: ComponentProps<'p'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
