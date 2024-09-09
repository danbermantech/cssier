import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Noscript(
  props: ComponentProps<'noscript'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
