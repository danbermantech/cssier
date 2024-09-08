import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function H3(
  props: ComponentProps<'h3'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
