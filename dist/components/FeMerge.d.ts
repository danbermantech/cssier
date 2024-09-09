import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function FeMerge(
  props: ComponentProps<'feMerge'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
