import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Figure(
  props: ComponentProps<'figure'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
