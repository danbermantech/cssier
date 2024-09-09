import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Circle(
  props: ComponentProps<'circle'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
