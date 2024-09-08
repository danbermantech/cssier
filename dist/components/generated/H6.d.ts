import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function H6(
  props: ComponentProps<'h6'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
