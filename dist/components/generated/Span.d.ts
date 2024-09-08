import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Span(
  props: ComponentProps<'span'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
