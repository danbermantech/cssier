import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function G(
  props: ComponentProps<'g'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
