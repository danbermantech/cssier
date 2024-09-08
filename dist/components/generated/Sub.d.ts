import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Sub(
  props: ComponentProps<'sub'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
