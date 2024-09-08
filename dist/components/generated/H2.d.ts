import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function H2(
  props: ComponentProps<'h2'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
