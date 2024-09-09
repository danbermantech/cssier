import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Base(
  props: ComponentProps<'base'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
