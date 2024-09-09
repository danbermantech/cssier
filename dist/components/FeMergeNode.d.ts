import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function FeMergeNode(
  props: ComponentProps<'feMergeNode'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
