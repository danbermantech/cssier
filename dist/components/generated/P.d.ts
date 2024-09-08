import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function P(
  props: ComponentProps<'p'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
