import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Defs(
  props: ComponentProps<'defs'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
