import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Strong(
  props: ComponentProps<'strong'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
