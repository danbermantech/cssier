import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Base(
  props: ComponentProps<'base'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
