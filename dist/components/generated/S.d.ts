import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function S(
  props: ComponentProps<'s'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
