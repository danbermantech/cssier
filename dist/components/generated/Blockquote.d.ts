import { ComponentProps } from 'react'
import { PseudoCss } from '../../types'
export default function Blockquote(
  props: ComponentProps<'blockquote'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
