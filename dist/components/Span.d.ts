import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Span(
  props: ComponentProps<'span'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
