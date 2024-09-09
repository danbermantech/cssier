import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function S(
  props: ComponentProps<'s'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
