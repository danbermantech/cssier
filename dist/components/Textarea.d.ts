import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Textarea(
  props: ComponentProps<'textarea'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
