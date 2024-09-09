import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Mark(
  props: ComponentProps<'mark'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
