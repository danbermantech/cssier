import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Cite(
  props: ComponentProps<'cite'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
