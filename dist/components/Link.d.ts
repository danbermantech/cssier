import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Link(
  props: ComponentProps<'link'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
