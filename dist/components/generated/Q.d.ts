import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Q(
  props: ComponentProps<'q'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
