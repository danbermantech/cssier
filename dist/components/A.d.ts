import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function A(
  props: ComponentProps<'a'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
