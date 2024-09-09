import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Blockquote(
  props: ComponentProps<'blockquote'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
