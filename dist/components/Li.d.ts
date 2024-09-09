import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Li(
  props: ComponentProps<'li'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
