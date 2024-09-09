import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Head(
  props: ComponentProps<'head'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
