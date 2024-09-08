import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Pattern(
  props: ComponentProps<'pattern'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
