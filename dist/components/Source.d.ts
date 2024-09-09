import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Source(
  props: ComponentProps<'source'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
