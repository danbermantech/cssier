import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Mark(
  props: ComponentProps<'mark'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
