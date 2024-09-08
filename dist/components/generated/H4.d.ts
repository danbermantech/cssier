import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function H4(
  props: ComponentProps<'h4'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
