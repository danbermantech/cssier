import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Symbol(
  props: ComponentProps<'symbol'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
