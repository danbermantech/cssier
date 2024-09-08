import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function B(
  props: ComponentProps<'b'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
