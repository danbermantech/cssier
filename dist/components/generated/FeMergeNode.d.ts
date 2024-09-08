import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function FeMergeNode(
  props: ComponentProps<'feMergeNode'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
