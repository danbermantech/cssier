import { ComponentProps } from 'react'
import { PseudoCss } from '../lib/types'
export default function Footer(
  props: ComponentProps<'footer'> & {
    pseudo?: PseudoCss
    pseudoId?: string
  },
): import('react/jsx-runtime').JSX.Element
