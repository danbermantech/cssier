import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function H1(
  props: ComponentProps<'h1'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
