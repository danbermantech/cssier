import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Text(
  props: ComponentProps<'text'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
